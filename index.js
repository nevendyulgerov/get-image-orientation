const aspectRatios = [{
    aspect: 0.67,
    ratio: '2/3'
}, {
    aspect: 1,
    ratio: '1/1'
}, {
    aspect: 1.33,
    ratio: '4/3'
}, {
    aspect: 1.6,
    ratio: '16/10'
}, {
    aspect: 1.67,
    ratio: '5/3'
}, {
    aspect: 1.78,
    ratio: '16/9'
}, {
    aspect: 2.37,
    ratio: '21/9'
}];

/**
 * @description Check if value is of type 'string'
 * @param val
 * @returns {boolean}
 */
const isStr = val => typeof val === 'string';

/**
 * @description To int
 * @param value
 * @returns {number}
 */
const toInt = value => parseInt(value, 10);

/**
 * @description To float
 * @param value
 * @param decimalPlaces
 * @returns {string}
 */
const toFloat = (value, decimalPlaces = 2) => parseFloat(value).toFixed(decimalPlaces);

/**
 * @description Get aspect
 * @param width
 * @param height
 * @returns {*}
 */
const getAspect = (width, height) => {
    const aspect = toFloat(width / height);
    return isStr(aspect) ? +aspect : aspect;
};

/**
 * @description Get matchin ratio
 * @param aspect
 * @returns {*}
 */
const getMatchingRatio = aspect => {
    let match = {};
    let matchOffset = Number.MAX_SAFE_INTEGER;
    let isMatchFound = false;

    aspectRatios.forEach(aspectRatio => {
        if (isMatchFound) {
            return false;
        }
        const isBigger = aspect > aspectRatio.aspect;
        const isSmaller = aspect < aspectRatio.aspect;

        if (!isBigger && !isSmaller) {
            isMatchFound = true;
            match = aspectRatio;
        }

        const offset = isBigger ? aspect - aspectRatio.aspect : aspectRatio.aspect - aspect;
        if (offset < matchOffset) {
            match = aspectRatio;
            matchOffset = offset;
        }
    });

    return match;
};

/**
 * @description Get image aspect type
 * @param width
 * @param height
 * @param maxIncrease
 * @returns object
 */
const getImageOrientation = (width, height, maxIncrease = 15) => {
    const isSquare = width === height;
    const isLandscape = !isSquare && width > height;
    const isPortrait = !isSquare && !isLandscape;
    const widthIncrease = width > height ? toInt(((width - height) * 100) / width) : 0;
    const heightIncrease = height > width ? toInt(((height - width) * 100) / height) : 0;
    const isSquareLikeLandscape = isLandscape && widthIncrease < maxIncrease;
    const isSquareLikePortrait = isPortrait && heightIncrease < maxIncrease;
    const aspect = getAspect(width, height);
    const { ratio } = getMatchingRatio(aspect);

    return {
        isLandscape,
        isPortrait,
        isSquare,
        isSquareLikeLandscape,
        isSquareLikePortrait,
        widthIncrease,
        heightIncrease,
        aspect,
        ratio
    };
};

module.exports = getImageOrientation;
