const r = require("raylib");
const geometry = require("./geometry")

const windowTitle = "CENTER RECTANGLE"
const windowWidth = 300
const windowHeight = 400;


function setup() {
    const FPS = 60;
    
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
    const rectHeight = 150;
    const rectWidth = 150;

    const centerX = geometry.getCenterOffset(windowWidth, rectWidth);
    const centerY = geometry.getCenterOffset(windowHeight, rectHeight); 

    r.BeginDrawing();

    r.ClearBackground(r.SKYBLUE);
    r.DrawRectangle(centerX, centerY, rectWidth, rectHeight, r.RED)

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
    teardown,
}
