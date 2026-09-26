const r = require("raylib")
const geometry = require("./geometry")

function setup() {
    const windowTitle = "SCALED CENTER RECTANGLE";
    const windowWidth = 900;
    const windowHeight = 800;
    const FPS = 50;

    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function isRunning() {
    return !r.WindowShouldClose();
}

function centerRectangleByRatio(parentRectX, parentRectY, parentWidth, parentHeight, widthRatio, heightRatio, color) {
    const childWidth = geometry.scaleDimension(parentWidth, widthRatio);
    const childHeight = geometry.scaleDimension(parentHeight, heightRatio);

    const childCenterX = parentRectX + geometry.getCenterOffset(parentWidth, childWidth);
    const childCenterY = parentRectY + geometry.getCenterOffset(parentHeight, childHeight);

    r.DrawRectangle(childCenterX, childCenterY, childWidth, childHeight, color);
}

function draw() {
    const parentRectX = 50;
    const parentRectY = 30;
    
    const parentRectHeight = 500;
    const parentRectWidth = 600;

    const widthRatio = 0.6;
    const heightRatio = 0.5;

    r.BeginDrawing();

    r.DrawRectangle(parentRectX, parentRectY, parentRectWidth, parentRectHeight, r.WHITE);

    centerRectangleByRatio(parentRectX, parentRectY, parentRectWidth, parentRectHeight, widthRatio, heightRatio, r.RED);

    r.EndDrawing();
}

function update() { }

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    isRunning,
    draw,
    update,
    teardown
}