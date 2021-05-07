/**
 * covid19Actions.js
 * Created by Jonathan Hill 06/11/20
 */

export const setDEFCodes = (defCodes) => ({
    type: 'SET_DEF_CODES',
    defCodes
});

export const setOverview = (publicLaw, overview) => ({
    type: 'SET_COVID_OVERVIEW',
    data: { publicLaw, overview }
});

export const setTotals = (awardType, totals) => ({
    type: `SET_COVID_AWARD_AMOUNTS${awardType && '_'}${awardType}`,
    totals
});

export const setIsMapLoaded = (bool) => ({
    type: 'SET_IS_RECIPIENT_MAP_LOADED',
    payload: bool
});
