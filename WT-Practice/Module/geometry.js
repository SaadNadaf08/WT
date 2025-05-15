// Geometry calculations module
const PI = Math.PI;

function circleArea(r) {
    return PI * r * r;
}

function rectangleArea(l, w) {
    return l * w;
}

function triangleArea(b, h) {
    return 0.5 * b * h;
}

function cylinderVolume(r, h) {
    return PI * r * r * h;
}

module.exports = {
    circleArea,
    rectangleArea,
    triangleArea,
    cylinderVolume
};