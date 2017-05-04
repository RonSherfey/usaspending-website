/**
 * SubTreeMap.jsx
 * Created by Emily Gullo 03/15/2017
 **/

import React from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import TreeMapCell from './TreeMapCell';
import TreeMapTooltip from './TreeMapTooltip';

const propTypes = {
    subfunctions: React.PropTypes.object,
    colors: React.PropTypes.array,
    topFunction: React.PropTypes.string
};

export default class SubTreeMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            windowWidth: 0,
            visualizationWidth: 0,
            category: 'none',
            description: '',
            subfunctions: {},
            finalNodes: '',
            selected: ''
        };

        this.handleWindowResize = _.throttle(this.handleWindowResize.bind(this), 50);
        this.buildTree = this.buildTree.bind(this);
        this.toggleTooltip = this.toggleTooltip.bind(this);
    }

    componentDidMount() {
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.subfunctions[nextProps.topFunction].children.length > 0) {
            this.buildTree(nextProps.subfunctions[nextProps.topFunction], nextProps.colors, '');
        }
        if (nextProps.subfunctions[nextProps.topFunction] !== this.state.subfunctions) {
            this.setState({
                subfunctions: nextProps.subfunctions[nextProps.topFunction]
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        // determine if the width changed
        const windowWidth = window.innerWidth;
        if (this.state.windowWidth !== windowWidth) {
            // width changed, update the visualization width
            this.setState({
                windowWidth,
                visualizationWidth: this.sectionWrapper.offsetWidth
            });
            if (this.props.subfunctions[this.props.topFunction].children.length > 0) {
                this.buildTree(
                    this.props.subfunctions[this.props.topFunction], this.props.colors, '');
            }
        }
    }

    buildTree(cats, colors, chosen) {
        // put the data through d3's hierarchy system to sum and sort it
        const root = d3.hierarchy(cats)
        .sum((d) => (d.value))
        .sort((a, b) => b.height - a.height || b.value - a.value);

        // set up a treemap object and pass in the root
        let tileStyle = d3.treemapBinary;
        if (this.state.windowWidth < 768) {
            tileStyle = d3.treemapSlice;
        }
        const treemap = d3.treemap()
            .round(true)
            .tile(tileStyle)
            .size([this.state.visualizationWidth, 565])(root).leaves();

        // build the tiles
        const nodes = treemap.map((n, i) =>
            <TreeMapCell
                label={n.data.name}
                value={n.value}
                x0={n.x0}
                x1={n.x1}
                y0={n.y0}
                y1={n.y1}
                total={n.parent.value}
                key={i}
                color={colors[i]}
                chosen={chosen}
                toggleTooltip={this.toggleTooltip}
                showOverlay={this.state.showOverlay}
                clickable={false} />
        );

        this.setState({
            finalNodes: nodes
        });
    }

    toggleTooltip(cat, value, xStart, yStart, width, height) {
        // set it to desc value
        const descSet = this.props.subfunctions[this.props.topFunction].children;
        // find index of object item on matching cat name
        let descIndex = '0';
        if (cat !== 'none') {
            descIndex = _.findIndex(descSet, { name: cat });
        }

        // set it to desc value
        let desc = '';
        if (cat !== 'none') {
            desc = descSet[descIndex].description;
        }

        // set the state
        this.setState({
            category: cat,
            description: desc,
            individualValue: value,
            x: xStart,
            y: yStart,
            width,
            height,
            showOverlay: false
        });

        this.buildTree(
            this.props.subfunctions[this.props.topFunction],
            this.props.colors,
            this.state.category);
    }

    createTooltip() {
        let tooltip = null;
        if (this.state.category !== 'none') {
            tooltip = (<TreeMapTooltip
                name={this.state.category}
                value={this.state.individualValue}
                description={this.state.description}
                x={this.state.x}
                y={this.state.y}
                width={this.state.width}
                height={(this.state.height / 2) + 50} />);
        }
        return tooltip;
    }

    toggleSubfunction(selected) {
        this.setState({
            selected,
            showSub: true
        });
    }

    render() {
        return (
            <div
                className="usa-da-treemap-section">
                <div className="treemap-inner-wrap">
                    { this.createTooltip() }
                    <div
                        className="tree-wrapper"
                        ref={(sr) => {
                            this.sectionWrapper = sr;
                        }}>
                        <svg
                            width={this.state.visualizationWidth}
                            height="565">
                            { this.state.finalNodes }
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

}
SubTreeMap.propTypes = propTypes;
