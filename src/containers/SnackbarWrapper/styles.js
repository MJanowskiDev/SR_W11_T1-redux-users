const horizontalLeft = { left: 0 };
const horizontalCenter = { left: '50%', transform: 'translateX(-50%)' };
const horizontalRight = { right: 0 };

const verticalTop = { top: 0 };
const verticalBottom = { bottom: 0 };

const getStyleVertical = (key) => {
    switch (key) {
        case 'top':
            return verticalTop;
        case 'bottom':
            return verticalBottom;
        default:
            return verticalBottom;
    }
};

const getStyleHorizontal = (key) => {
    switch (key) {
        case 'left':
            return horizontalLeft;
        case 'center':
            return horizontalCenter;
        case 'right':
            return horizontalRight;
        default:
            return horizontalLeft;
    }
};

const wraperStyle = {
    position: 'absolute',
    maxHeight: '90vh',
    overflow: 'auto'
};

export const getStyleByAnchor = (anchorOrigin) => {
    const styleVertical = getStyleVertical(anchorOrigin.vertical);
    const styleHorizontal = getStyleHorizontal(anchorOrigin.horizontal);

    return { ...styleVertical, ...styleHorizontal, ...wraperStyle };
};
