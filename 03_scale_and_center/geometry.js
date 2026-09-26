function getCenterOffset(parentDimension, childDimension) {
    return (parentDimension - childDimension) / 2;
}

function scaleDimension(dimension, scale) {
    return dimension * scale;
}

module.exports = {
    getCenterOffset,
    scaleDimension
}