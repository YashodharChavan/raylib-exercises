const r = require("raylib")

let windowWidth=0;
let windowHeight=0;
let FPS=0;
let TITLE;

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

function isRunning() {
    return !r.WindowShouldClose();
}

function draw() {
    r.BeginDrawing();

    r.DrawRectangle(10, 10, 40, 40, r.RED);

    r.EndDrawing();
}

function update() {

}

function tearDown() {
    r.CloseWindow();
}

module.exports = {
    setWindowDimensions, 
    setup,
    isRunning,
    draw,
    update,
    tearDown,
}