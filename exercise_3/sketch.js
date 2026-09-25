const r = require("raylib")
const geometry = require("./geometry")

const FPS = 50;
const BG_COLOR = r.SKYBLUE;

let windowWidth;
let windowHeight;
let windowTitle;

let parentRectWidth;
let parentRectHeight;

let widthRatio;
let heightRatio;

function setWindowDimensions(title, width, height) {
    windowTitle = title;
    windowWidth = width;
    windowHeight = height;
}

function setParentRectDimensions(width, height) {
    parentRectWidth = width;
    parentRectHeight = height;
}

function setChildDimensionScaleFactor(widthScale, heightScale) {
    widthRatio = widthScale;
    heightRatio = heightScale;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function isRunning() {
    return !r.WindowShouldClose();
}

function centerRectangle(windowWidth, windowHeight, parentRectWidth, parentRectHeight, color) {
    const posX = geometry.getCenterOffset(windowWidth, parentRectWidth);
    const posY = geometry.getCenterOffset(windowHeight, parentRectHeight);

    r.DrawRectangle(posX, posY, parentRectWidth, parentRectHeight, color);
}

function centerRectangleByRatio(windowWidth, windowHeight, parentWidth, parentHeight, widthRatio, heightRatio, color) {
    const parentCenterX = geometry.getCenterOffset(windowWidth, parentRectWidth);
    const parentCenterY = geometry.getCenterOffset(windowHeight, parentRectHeight);

    const childWidth = geometry.scaleDimension(parentWidth, widthRatio);
    const childHeight = geometry.scaleDimension(parentHeight, heightRatio);

    const childCenterX = geometry.getCenterOffset(parentWidth, childWidth);
    const childCenterY = geometry.getCenterOffset(parentHeight, childHeight);

    const posX = parentCenterX + childCenterX;
    const posY = parentCenterY + childCenterY;
    r.DrawRectangle(posX, posY, childWidth, childHeight, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(BG_COLOR);

    centerRectangle(windowWidth, windowHeight, parentRectWidth, parentRectHeight, r.WHITE);

    centerRectangleByRatio(windowWidth, windowHeight, parentRectWidth, parentRectHeight, widthRatio, heightRatio, r.RED);

    r.EndDrawing();
}

function update() { }

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setWindowDimensions,
    setParentRectDimensions,
    setChildDimensionScaleFactor,
    setup,
    isRunning,
    draw, 
    update,
    teardown
}