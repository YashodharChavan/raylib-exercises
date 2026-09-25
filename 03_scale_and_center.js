const r = require("raylib")

const windowWidth = 700
const windowHeight = 400
const FPS = 50

const parentRectWidth = 500
const parentRectHeight = 200

const widthRatio = 0.6
const heightRatio = 0.6

function setup() {
    r.InitWindow(windowWidth, windowHeight, "CENTER RECTANGLE");
    r.SetTargetFPS(FPS);
}

function calculateCenterCordinates(windowDimension, rectDimension) {
    return (windowDimension - rectDimension) / 2;
}

function calculateScaledDimension(dimension, scale) {
    return dimension * scale;
}

function centerRectangle(windowWidth, windowHeight, parentRectWidth, parentRectHeight, color) {
    r.DrawRectangle(calculateCenterCordinates(windowWidth, parentRectWidth), calculateCenterCordinates(windowHeight, parentRectHeight), parentRectWidth, parentRectHeight, color);
}

function centerRectangleByRatio(windowWidth, windowHeight, parentWidth, parentHeight, widthRatio, heightRatio, color) {
    const parentCenterXCordinate = calculateCenterCordinates(windowWidth, parentRectWidth);
    const parentCenterYCordinate = calculateCenterCordinates(windowHeight, parentRectHeight);

    const childWidth =calculateScaledDimension(parentWidth, widthRatio);
    const childHeight = calculateScaledDimension(parentHeight, heightRatio);

    const childCenterXCordinate = calculateCenterCordinates(parentWidth, childWidth);
    const childCenterYCordinate = calculateCenterCordinates(parentHeight, childHeight);

    r.DrawRectangle(parentCenterXCordinate + childCenterXCordinate, parentCenterYCordinate + childCenterYCordinate, childWidth, childHeight, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);

    centerRectangle(windowWidth, windowHeight, parentRectWidth, parentRectHeight, r.WHITE);
    centerRectangleByRatio(windowWidth, windowHeight, parentRectWidth, parentRectHeight, widthRatio, heightRatio, r.RED);

    r.EndDrawing();
}

function update() {}

function loop() {
    while(!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();

