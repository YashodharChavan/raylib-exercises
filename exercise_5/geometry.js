function square(x) {
    return x * x;
}

function cartesianDistance(x1, y1, x2, y2) {
    return (square(x2-x1) + square(y2-y1)) ** 0.5;
}

module.exports = {
    cartesianDistance
}