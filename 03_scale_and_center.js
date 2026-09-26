const r = require("raylib")

const windowWidth = 700
const windowHeight = 400
const FPS = 50

const parentRectX = 50;
const parentRectY = 50;

const parentRectWidth = 500
const parentRectHeight = 200

const widthRatio = 0.6
const heightRatio = 0.6

function setup() {
    r.InitWindow(windowWidth, windowHeight, "CENTER RECTANGLE");
    r.SetTargetFPS(FPS);
}

function getCenterOffset(windowDimension, rectDimension) {
    return (windowDimension - rectDimension) / 2;
}

function scaleDimension(dimension, scale) {
    return dimension * scale;
}

function centerRectangleByRatio(parentRectX, parentRectY, parentWidth, parentHeight, widthRatio, heightRatio, color) {
    const childWidth = scaleDimension(parentWidth, widthRatio);
    const childHeight = scaleDimension(parentHeight, heightRatio);

    const childCenterX = parentRectX + getCenterOffset(parentWidth, childWidth);
    const childCenterY = parentRectY + getCenterOffset(parentHeight, childHeight);

    r.DrawRectangle(childCenterX, childCenterY, childWidth, childHeight, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);

    r.DrawRectangle(parentRectX, parentRectY, parentRectWidth, parentRectHeight, r.WHITE);
    centerRectangleByRatio(parentRectX, parentRectY, parentRectWidth, parentRectHeight, widthRatio, heightRatio, r.RED);

    r.EndDrawing();
}

function update() { }

function loop() {
    while (!r.WindowShouldClose()) {
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

