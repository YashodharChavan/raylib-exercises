const r = require("raylib");
const geometry = require("./geometry")

let windowWidth;
let windowHeight;
let FPS;

let parentRectWidth = 500;
let parentRectHeight = 200;

let parentRectXCoordinate = 100;
let parentRectYCoordinate = 40;

let childRectWidth = 300;
let childRectHeight = 100;

let childRectXCoordinate = 0;
let childRectYCoordinate = 0;

function setWindowDimensions(templateTitle, templateWidth, templateHeight, templateFPS) {
    TITLE = templateTitle;
    windowWidth = templateWidth;
    windowHeight = templateHeight;
    FPS = templateFPS;
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
    r.InitWindow(windowWidth, windowHeight, "CENTER RECTANGLE");
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
