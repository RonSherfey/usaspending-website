/**
 * DefaultLineAndText.jsx
 * created by Jonathan Hill 04/22/21
 */

import React, { useState, useEffect, useRef } from 'react';
import { upperFirst } from 'lodash';
import PropTypes from 'prop-types';

import {
    calculateUnits,
    formatMoneyWithPrecision
} from 'helpers/moneyFormatter';

import {
    rectangleMapping,
    startOfChartY,
    labelTextAdjustment
} from 'dataMapping/covid19/amountsVisualization';

import { defaultTextState, textXPosition } from 'helpers/covid19/amountsVisualization';

import DefaultLine from './DefaultLine';
import TextGroup from './TextGroup';

const propTypes = {
    scale: PropTypes.func,
    overviewData: PropTypes.object,
    displayTooltip: PropTypes.func,
    hideTooltip: PropTypes.func,
    lineData: PropTypes.object,
    rectangleData: PropTypes.object,
    dataId: PropTypes.string,
    width: PropTypes.number,
    publicLawFilter: PropTypes.string
};

const DefaultLineAndText = ({
    scale,
    overviewData,
    displayTooltip = () => {},
    hideTooltip = () => {},
    dataId = '',
    width,
    publicLawFilter
}) => {
    const [descriptionData, setDescriptionData] = useState(defaultTextState(dataId, 'description'));
    const [valueData, setValueData] = useState(defaultTextState(dataId, 'value'));
    const [labelData, setLabelData] = useState(defaultTextState(dataId, 'label'));
    const descriptionTextRef = useRef(null);
    const labelTextRef = useRef(null);
    const valueTextRef = useRef(null);
    // description text
    useEffect(() => {
        const { text, lineLength } = rectangleMapping[dataId];
        const descriptionRef = descriptionTextRef.current?.getBoundingClientRect();
        setDescriptionData({
            y: (startOfChartY - lineLength) + (descriptionRef?.height || 0),
            x: !scale ? 0 : textXPosition(overviewData, scale, dataId, { description: { width: text.descriptionWidth } }, 'description'),
            height: descriptionRef?.height || 0,
            text: text.description,
            className: 'amounts-text__description'
        });
    }, [width, scale, descriptionTextRef.current]);
    // value text
    useEffect(() => {
        const ref = valueTextRef.current?.getBoundingClientRect();
        const { lineLength } = rectangleMapping[dataId];
        const amount = Math.abs(overviewData[dataId]);
        const units = calculateUnits([amount]);
        const moneyLabel = `${formatMoneyWithPrecision(amount / units.unit, 1)} ${upperFirst(units.longLabel)}`;
        if (scale) {
            setValueData({
                y: (startOfChartY - lineLength || 0) + descriptionData.height + (ref?.height || 0),
                x: textXPosition(overviewData, scale, dataId, { description: descriptionTextRef?.current.getBoundingClientRect(), value: valueTextRef?.current.getBoundingClientRect(), label: labelTextRef?.current.getBoundingClientRect() }, 'value'),
                height: ref?.height || 0,
                theWidth: ref?.width || 0,
                text: moneyLabel,
                className: `amounts-text__value ${dataId === '_totalBudgetAuthority' ? 'bold' : ''}`
            });
        }
    }, [width, scale, labelData]);
    // label text
    useEffect(() => {
        const ref = labelTextRef.current?.getBoundingClientRect();
        const { text: textInfo, lineLength } = rectangleMapping[dataId];
        if (scale) {
            setLabelData({
                y: (startOfChartY - lineLength || 0) + descriptionData.height + (ref?.height || 0) + labelTextAdjustment.y + 2,
                x: textXPosition(overviewData, scale, dataId, { description: descriptionTextRef?.current.getBoundingClientRect(), value: valueTextRef?.current.getBoundingClientRect(), label: labelTextRef?.current.getBoundingClientRect() }, 'label'),
                height: ref?.height || 0,
                text: textInfo.label,
                className: 'amounts-text__label'
            });
        }
    }, [descriptionData]);

    return (
        <g>
            <DefaultLine
                scale={scale}
                overviewData={overviewData}
                dataId={dataId}
                displayTooltip={displayTooltip}
                hideTooltip={hideTooltip}
                publicLawFilter={publicLawFilter} />
            {scale && <TextGroup data={[
                { ...descriptionData, ref: descriptionTextRef },
                { ...valueData, ref: valueTextRef },
                { ...labelData, ref: labelTextRef }
            ].map((textItem) => ({
                ...textItem,
                dataId,
                displayTooltip,
                hideTooltip
            }))} />}
        </g>
    ); };

DefaultLineAndText.propTypes = propTypes;
export default DefaultLineAndText;
