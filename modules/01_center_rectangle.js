const r = require("raylib");
const geometry = require("./geometry")
let windowWidth=0;
let windowHeight=0;
let FPS=0;
let TITLE;

const rectHeight = 200;
const rectWidth = 500;
const COLOR = r.RED;

function setWindowDimensions(templateTitle, templateWidth, templateHeight, templateFPS) {
    TITLE = templateTitle;
    windowWidth = templateWidth;
    windowHeight = templateHeight;
    FPS = templateFPS;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, TITLE);
    r.SetTargetFPS(FPS);
}

function update() {}


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
    setup,
    update,
    draw, 
    isRunning,
    teardown,
}
