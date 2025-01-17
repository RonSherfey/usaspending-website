/*
* CovidFeatureContainer.jsx
* Created by Marcy Held 07/22/2020
*/

import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import { clearAllFilters } from 'redux/actions/search/searchFilterActions';
import { showModal } from 'redux/actions/modal/modalActions';
import { applyStagedFilters, resetAppliedFilters, setAppliedFilterCompletion } from 'redux/actions/search/appliedFilterActions';
import { initialState as defaultFilters, CheckboxTreeSelections } from 'redux/reducers/search/searchFiltersReducer';

import Analytics from 'helpers/analytics/Analytics';

const clickedHomepageLink = (route) => {
    Analytics.event({
        category: 'Homepage - Link',
        action: route
    });
};

const CovidFeatureContainer = ({
    stageDefCodesForAdvancedSearch,
    clearFilters,
    resetFilters,
    showCovidModal,
    setAppliedFilters
}) => {
    const history = useHistory();
    const reduxDefCodes = useSelector((state) => state.covid19.defCodes);

    const handleGoToAdvancedSearch = (e) => {
        e.preventDefault();
        clickedHomepageLink("search");
        clearFilters();
        resetFilters();
        setAppliedFilters(false);
        stageDefCodesForAdvancedSearch({
            ...defaultFilters,
            defCodes: new CheckboxTreeSelections({
                require: reduxDefCodes.map((code) => code.code),
                exclude: [],
                counts: [{ value: "COVID-19", count: reduxDefCodes.length || 0, label: "COVID-19 Spending" }]
            })
        });
        history.push('/search');
    };

    const triggerModal = (e) => {
        e.preventDefault();
        showCovidModal(null, 'covid');
    };

    return (
        <div className="feature-pane feature-covid">
            <h2 className="feature-pane__title">THE FEDERAL RESPONSE TO COVID-19</h2>
            <div className="official-spending-data__content-wrapper">
                <div className="official-spending-data__text">
                    <h2 className="homepage-feature-title">COVID-19 Spending Data</h2>
                    <div className="feature-covid-official-spending-data__image-wrapper">
                        <picture className="feature-covid-official-spending-data__image-mobile">
                            <source srcSet="img/homepage-covid-official-spending-data.webp 790w" type="image/webp" />
                            <source srcSet="img/homepage-covid-official-spending-data.png" type="image/png" />
                            <img src="img/homepage-covid-official-spending-data.png" alt="Illustration of people interacting with data" />
                        </picture>
                    </div>
                    <div className="homepage-feature-description">
                        <p>Spending data from the federal government’s response to COVID-19 is now available to view and download on USAspending. Additional data and features will be released in the coming months. <button className="homepage-feature-description__button" onClick={triggerModal}>Learn more</button>about the updates made across the site related to COVID-19 spending.</p>
                        <p>The new data includes:</p>
                        <ul>
                            <li><strong className="homepage-feature-description_weight_bold">Disaster Emergency Fund Code (DEFC)</strong> tags that highlight funding from the CARES Act and other COVID-19 supplemental appropriations.</li>
                            <li><strong className="homepage-feature-description_weight_bold">Outlay data</strong> for COVID-19 showing what agencies have paid out, in addition to the existing obligation data showing what agencies have promised to pay.</li>
                            <li><strong className="homepage-feature-description_weight_bold">Breakdown of spending data</strong> by federal agency, award recipient, and a variety of budget categories.</li>
                        </ul>
                        <p>Interested in <strong className="homepage-feature-description_weight_bold">downloading all the COVID-19 spending data?</strong> Visit the
                            <Link to="/disaster/covid-19" onClick={clickedHomepageLink.bind(null, '/disaster/covid-19')}> COVID-19 Spending profile page </Link> and click the download button!
                        </p>
                    </div>
                </div>
                <div className="feature-covid-official-spending-data__image-wrapper">
                    <picture className="feature-covid-official-spending-data__image">
                        <source srcSet="img/homepage-covid-official-spending-data.webp 790w" type="image/webp" />
                        <source srcSet="img/homepage-covid-official-spending-data.png" type="image/png" />
                        <img src="img/homepage-covid-official-spending-data.png" alt="Illustration of people interacting with data" />
                    </picture>
                </div>
            </div>
            <div className="advanced-search-and-spending-profile__wrapper">
                <div className="advanced-search__content-wrapper">
                    <picture className="feature-covid-item__image-wrapper" >
                        <source srcSet="img/homepage-covid-ss-adv-search.webp 790w" type="image/webp" />
                        <source srcSet="img/homepage-covid-ss-adv-search.png" type="image/png" />
                        <img className="feature-covid-item__image" src="img/homepage-covid-ss-adv-search.png" alt="Screenshot of Advanced Search page with COVID-19 Spending updates" />
                    </picture>
                    <h2 className="homepage-feature-title">COVID-19 Advanced Search Filter</h2>
                    <picture className="feature-covid-item__image-wrapper">
                        <source srcSet="img/homepage-covid-ss-adv-search.webp 790w" type="image/webp" />
                        <source srcSet="img/homepage-covid-ss-adv-search.png" type="image/png" />
                        <img className="feature-covid-item__image-mobile" src="img/homepage-covid-ss-adv-search.png" alt="Screenshot of Advanced Search page with COVID-19 Spending updates" />
                    </picture>
                    <div className="homepage-feature-description adv-search-spending-profile__text">
                        <p>Use the new <strong className="homepage-feature-description_weight_bold">Disaster Emergency Fund Code (DEFC)</strong> filter to show awards related to COVID-19 spending. The new filter works alongside our existing filters, so you can narrow your search to exactly what you want.</p>
                        <p>Additional columns were also added to the search results table to show <strong className="homepage-feature-description_weight_bold">COVID-19 obligations</strong> and <strong className="homepage-feature-description_weight_bold">outlays</strong>.</p>
                    </div>

                    <div className="feature-covid__button-wrap">
                        <Link
                            className="feature-covid__button"
                            to="/search"
                            onClick={handleGoToAdvancedSearch}>
                            Search the Data
                        </Link>
                    </div>
                </div>

                <div className="advanced-search__content-wrapper-right">
                    <picture className="feature-covid-item__image-wrapper" >
                        <source srcSet="img/homepage-covid-ss-profile.webp 790w" type="image/webp" />
                        <source srcSet="img/homepage-covid-ss-profile.png" type="image/png" />
                        <img className="feature-covid-item__image" src="img/homepage-covid-ss-profile.png" alt="Screenshot of COVID-19 Spending profile page" />
                    </picture>
                    <h2 className="homepage-feature-title">COVID-19 Spending Profile</h2>
                    <picture className="feature-covid-item__image-wrapper" >
                        <source srcSet="img/homepage-covid-ss-profile.webp 790w" type="image/webp" />
                        <source srcSet="img/homepage-covid-ss-profile.png" type="image/png" />
                        <img className="feature-covid-item__image-mobile" src="img/homepage-covid-ss-profile.png" alt="Screenshot of COVID-19 Spending profile page" />
                    </picture>
                    <div className="homepage-feature-description adv-search-spending-profile__text">
                        <p>Our newest profile page shows you COVID-19 spending information as submitted by federal agencies. Learn more about <strong className="homepage-feature-description_weight_bold">who received funding, which agencies outlayed funds,</strong> and <strong className="homepage-feature-description_weight_bold">which programs were funded</strong>.</p>
                        <p>All COVID-19 spending data is <strong className="homepage-feature-description_weight_bold">available for download</strong> on the profile page with one click. You can also read about our datasets and calculations on the <Link to="/disaster/covid-19/data-sources">Data Sources &amp; Methodology</Link> page </p>
                    </div>
                    <div className="feature-covid__button-wrap">
                        <Link
                            className="feature-covid__button"
                            to="/disaster/covid-19"
                            onClick={clickedHomepageLink.bind(null, '/disaster/covid-19')}>
                            Explore the Data
                        </Link>
                    </div>

                </div>
            </div>
            <div className="award-summary__wrapper feature-award-search">
                <div className="feature-award-search__wrapper">
                    <div className="feature-covid__background-flair" />
                    <picture className="feature-covid-award-summary__image-wrapper">
                        <source srcSet="img/homepage-covid-ss-award-summary.webp 790w" type="image/webp" />
                        <source srcSet="img/homepage-covid-ss-award-summary.png" type="image/png" />
                        <img className="feature-covid-award-summary__image" src="img/homepage-covid-ss-award-summary.png" alt="Screenshot of Award Summary page with COVID-19 Spending updates" />
                    </picture>
                    <div className="award-summary__text-wrapper">
                        <div>
                            <h2 className="homepage-feature-title">Award Summary pages now feature COVID-19 spending</h2>
                            <div className="feature-covid-award-summary__image-wrapper">
                                <picture className="feature-covid-award-summary__image-mobile">
                                    <source srcSet="img/homepage-covid-ss-award-summary.webp 790w" type="image/webp" />
                                    <source srcSet="img/homepage-covid-ss-award-summary.png" type="image/png" />
                                    <img src="img/homepage-covid-ss-award-summary.png" alt="Screenshot of Award Summary page with COVID-19 Spending updates" />
                                </picture>
                            </div>
                            <div className="homepage-feature-description">
                                <p><strong className="homepage-feature-description_weight_bold">Purple COVID-19 badges</strong> found on our Award Summary pages have made it easy to identify which awards have been funded through COVID-19 appropriations. You can hover over the badge to see relevant <strong className="homepage-feature-description_weight_bold">DEFCs</strong> associated with that award. The charts found on Award Summary pages now feature <strong className="homepage-feature-description_weight_bold">COVID-19 obligation and outlay amounts.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CovidFeatureContainer.propTypes = {
    stageDefCodesForAdvancedSearch: PropTypes.func,
    clearFilters: PropTypes.func,
    resetFilters: PropTypes.func,
    showCovidModal: PropTypes.func,
    setAppliedFilters: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    resetFilters: () => dispatch(resetAppliedFilters()),
    clearFilters: () => dispatch(clearAllFilters()),
    stageDefCodesForAdvancedSearch: (filters) => dispatch(applyStagedFilters(filters)),
    showCovidModal: (url, modalType) => dispatch(showModal(url, modalType)),
    setAppliedFilters: (areApplied) => dispatch(setAppliedFilterCompletion(areApplied))
});

export default connect(null, mapDispatchToProps)(CovidFeatureContainer);
