const r = require("raylib");
const geometry = require("./geometry")

const FPS = 60;

let windowWidth;
let windowHeight;
let windowTitle;

let parentRectWidth;
let parentRectHeight;

let parentRectXCoordinate;
let parentRectYCoordinate;

let childRectWidth;
let childRectHeight;

let childRectXCoordinate = 0;
let childRectYCoordinate = 0;

function setWindowDimensions(title, width, height) {
    windowTitle = title;
    windowWidth = width;
    windowHeight = height;
}

function setParentRectDimensions(posX, posY, width, height) {
    parentRectXCoordinate = posX;
    parentRectYCoordinate = posY;
    parentRectWidth = width;
    parentRectHeight = height;
}

function setChildRectDimensions(width, height) {
    childRectWidth = width;
    childRectHeight = height;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function update() {
    childRectXCoordinate = parentRectXCoordinate + geometry.getCenterOffset(parentRectWidth, childRectWidth);
    childRectYCoordinate = parentRectYCoordinate + geometry.getCenterOffset(parentRectHeight, childRectHeight); 
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE)

    r.DrawRectangle(parentRectXCoordinate, parentRectYCoordinate, parentRectWidth, parentRectHeight, r.WHITE);

    r.DrawRectangle(childRectXCoordinate, childRectYCoordinate, childRectWidth, childRectHeight, r.RED);

    r.EndDrawing();
}

function isRunning() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setWindowDimensions, 
    setParentRectDimensions, 
    setChildRectDimensions, 
    setup,
    update,
    draw,
    isRunning,
    teardown
}
