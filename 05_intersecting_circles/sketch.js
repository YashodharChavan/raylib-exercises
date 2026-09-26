const r = require("raylib")
const geometry = require("./geometry")


function setup() {
    const windowTitle = "INTERSECTING CIRCLES";
    const windowWidth = 500;
    const windowHeight = 400;
    const FPS = 60;

    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS)
}

function isRunning() {
    return !r.WindowShouldClose();
}

function update() { }

function draw() {
    const circle1Radius = 40;
    const circle2Radius = 50;

    const circle1X = 70;
    const circle1Y = 140;

    const circle2X = 80;
    const circle2Y = 120;

    const distance = geometry.cartesianDistance(circle1X, circle1Y, circle2X, circle2Y);
    let color = r.BLACK;

    if (distance <= circle1Radius + circle2Radius) {
        color = r.RED;
    }
    
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(circle1X, circle1Y, circle1Radius, color);
    r.DrawCircle(circle2X, circle2Y, circle2Radius, color);

    r.EndDrawing();
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
