const r = require("raylib")
const geometry = require("./geometry")

const FPS = 60;
const RADIUS = 15;

let windowWidth;
let windowHeight;
let windowTitle;

let sourceX;
let sourceY;

let dest1X;
let dest1Y;

let dest2X;
let dest2Y;

function setWindowDimensions(title, width, height) {
    windowTitle = title;
    windowWidth = width;
    windowHeight = height;
}

function setSourceDimensions(X, Y) {
    sourceX = X;
    sourceY = Y;
}

function setDest1Dimensions(X, Y) {
    dest1X = X;
    dest1Y = Y;
}

function setDest2Dimensions(X, Y) {
    dest2X = X;
    dest2Y = Y;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function isRunning() {
    return !r.WindowShouldClose();
}

function update() { }

function drawCircle(text, X, Y, color) {
    const textWidth = r.MeasureText(text, 16);

    r.DrawCircle(X, Y, RADIUS, color);
    r.DrawText(text, X - textWidth / 2, Y + RADIUS + 5, 16, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawCircle("source", sourceX, sourceY, r.RED);
    drawCircle("dest1", dest1X, dest1Y, r.GREEN);
    drawCircle("dest2", dest2X, dest2Y, r.BLACK);

    drawClosestLine(r.BLACK);

    r.EndDrawing();
}

function drawClosestLine(color) {
    const sourcetoDestination1 = geometry.cartesianDistance(sourceX, sourceY, dest1X, dest1Y);

    const sourceToDestination2 = geometry.cartesianDistance(sourceX, sourceY, dest2X, dest2Y);

    let targetX = dest1X;
    let targetY = dest1Y;

    if (sourcetoDestination1 > sourceToDestination2) {
        targetX = dest2X;
        targetX = dest2Y;
    }

    r.DrawLine(sourceX, sourceY, targetX, targetY, color);
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setWindowDimensions,
    setSourceDimensions,
    setDest1Dimensions,
    setDest2Dimensions,
    setup,
    isRunning,
    update,
    draw,
    teardown
}