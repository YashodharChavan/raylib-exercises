const r = require("raylib");
const geometry = require("./geometry")

function setup() {
    const windowWidth = 500;
    const windowHeight = 600;
    const windowTitle = "CENTER RECTANGLE";
    const FPS = 60;

    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function centerRectangle(parentRectX, parentRectY, parentWidth, parentHeight, childWidth, childHeight, color) {
    const childRectX = parentRectX + geometry.getCenterOffset(parentWidth, childWidth);
    const childRectY = parentRectY + geometry.getCenterOffset(parentHeight, childHeight);

    r.DrawRectangle(childRectX, childRectY, childWidth, childHeight, color);
}

function update() {}

function draw() {
    const parentRectWidth = 300;
    const parentRectHeight = 250;

    const parentRectX = 60;
    const parentRectY = 100;

    const childRectWidth = 140;
    const childRectHeight = 80;

    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE)
    
    r.DrawRectangle(parentRectX, parentRectY, parentRectWidth, parentRectHeight, r.WHITE);
    centerRectangle(parentRectX, parentRectY, parentRectWidth, parentRectHeight, childRectWidth, childRectHeight, r.RED);
    
    r.EndDrawing();
}

function isRunning() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    update,
    draw,
    isRunning,
    teardown
}
