const r = require("raylib");
const geometry = require("./geometry")

const COLOR = r.RED;
const FPS = 60;

let windowWidth = 0;
let windowHeight = 0;
let windowTitle = "";

let rectHeight = 0;
let rectWidth = 0;

function setWindowDimensions(title, width, height) {
    windowTitle = title;
    windowWidth = width;
    windowHeight = height;
}

function setRectDimensions(width, height) {
    rectWidth = width;
    rectHeight = height;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);

    const centerXCordinate = geometry.getCenterOffset(windowWidth, rectWidth);
    const centerYCordinate = geometry.getCenterOffset(windowHeight, rectHeight);

    r.DrawRectangle(centerXCordinate, centerYCordinate, rectWidth, rectHeight, COLOR)
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
    setRectDimensions,
    setup,
    update,
    draw,
    isRunning,
    teardown,
}
