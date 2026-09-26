const r = require("raylib")
const geometry = require("./geometry")

function setup() {
    const windowTitle = "CLOSER TARGET";
    const windowWidth = 700;
    const windowHeight = 800;
    const FPS = 60;

    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS);
}

function isRunning() {
    return !r.WindowShouldClose();
}

function update() { }

function drawCircle(text, X, Y, color) {
    const RADIUS = 15;

    const textWidth = r.MeasureText(text, 16);

    const textOffsetX = X - textWidth / 2
    const textOffsetY = Y + RADIUS

    r.DrawCircle(X, Y, RADIUS, color);
    r.DrawText(text, textOffsetX, textOffsetY + 5, 16, color);
}

function draw() {
    const sourceX = 150;
    const sourceY = 170;

    const dest1X = 200;
    const dest1Y = 100;

    const dest2X = 600;
    const dest2Y = 500;

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawCircle("source", sourceX, sourceY, r.RED);
    drawCircle("dest1", dest1X, dest1Y, r.GREEN);
    drawCircle("dest2", dest2X, dest2Y, r.BLACK);

    drawClosestLine(sourceX, sourceY, dest1X, dest1Y, dest2X, dest2Y, r.BLACK);

    r.EndDrawing();
}

function drawClosestLine(sourceX, sourceY, dest1X, dest1Y, dest2X, dest2Y, color) {
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
    setup,
    isRunning,
    update,
    draw,
    teardown
}