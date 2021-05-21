
export const defaultRectangleData = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    fill: 'transparent',
    description: ''
};

export const defaultLineData = {
    color: 'transparent',
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
};

export const tooltipMapping = {
    _totalBudgetAuthority: {
        data: 'totalRectangleData',
        title: 'Total Budgetary Resources',
        paragraph: 'This amount represents all congressional appropriations and other available budgetary resources.'
    },
    _totalOutlays: {
        data: 'outlayRectangleData',
        title: 'Total Outlays',
        paragraph: 'This amount represents all outlays, or actual payments, made by agencies.'
    },
    _totalObligations: {
        data: 'obligationRectangleData',
        title: 'Total Obligations',
        paragraph: 'This amount represents all obligations, or promises of payment, made by agencies.'
    },
    _remainingBalance: {
        data: 'remainingBalanceRectangleData',
        title: 'Total Remaining Balance',
        paragraph: 'This amount represents how much is left to be obligated, or promised to be paid, by agencies. '
    }
};

export const defaultTooltipWidth = 375;
export const amountsPadding = {
    left: 0,
    right: 10
};

export const amountsHeight = 232;
export const paddingBetweenRectangles = 2;
export const startOfChartY = 118;
export const rectangleHeight = 45;
export const lineStrokeWidth = 2;
export const lineLength = [118, 68];

export const heightOfRemainingBalanceLines = 10;
export const remaniningBalanceLineWidth = 1;
export const spacingBetweenLineAndText = 11;
export const labelTextAdjustment = {
    x: 4,
    y: 6
};

export const rectangleMapping = {
    _totalBudgetAuthority: {
        fill: 'white',
        color: '#D0BEDA',
        offset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        line: true,
        lineLength: lineLength[0],
        isLineAboveChart: true,
        text: {
            label: 'Total Budgetary Resources'
        }
    },
    _totalObligations: {
        fill: '#9266AA',
        color: '#9266AA',
        offset: {
            left: 0,
            right: 0,
            top: paddingBetweenRectangles,
            bottom: paddingBetweenRectangles
        },
        line: true,
        lineLength: lineLength[1],
        // since this rectangle is the first rectangle within the total we must start the line higher
        lineOffset: paddingBetweenRectangles - (paddingBetweenRectangles / 2),
        isLineAboveChart: false,
        text: {
            label: 'Total Obligations'
        }
    },
    _totalOutlays: {
        fill: '#3B005B',
        color: '#3B005B',
        offset: {
            left: 0,
            right: 0,
            top: 2 * paddingBetweenRectangles,
            bottom: 2 * paddingBetweenRectangles
        },
        line: true,
        lineLength: lineLength[1],
        // since outlays is the inner most rectangle we must extend the lines length to touch the rectangle
        lineOffset: 2 * paddingBetweenRectangles,
        isLineAboveChart: true,
        text: {
            label: 'Total Outlays'
        }
    }
};
