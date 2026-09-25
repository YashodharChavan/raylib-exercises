const r = require("raylib");

const windowWidth = 700;
const windowHeight = 400;
const FPS = 50;

const rectHeight = 200;
const rectWidth = 500;
const COLOR = r.RED;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "CENTER RECTANGLE");
    r.SetTargetFPS(FPS);
}

function update() {}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);

    const centerXCordinate = calculateCenterCordinate(windowWidth, rectWidth);
    const centerYCordinate = calculateCenterCordinate(windowHeight, rectHeight);

    r.DrawRectangle(centerXCordinate, centerYCordinate, rectWidth, rectHeight, COLOR)
    r.EndDrawing();
}

function loop() {
    while(!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function calculateCenterCordinate(windowDimension, rectDimension) {
    return (windowDimension - rectDimension) / 2;
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
