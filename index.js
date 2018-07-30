/**
 * @description To int
 * @param value
 * @returns {number}
 */
const toInt = value => parseInt(value, 10);

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

    return {
        isLandscape,
        isPortrait,
        isSquare,
        isSquareLikeLandscape,
        isSquareLikePortrait,
        widthIncrease,
        heightIncrease
    };
};

module.exports = getImageOrientation;
