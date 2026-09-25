const r = require("raylib")

const windowWidth = 500;
const windowHeight = 500;

const RADIUS1 = 50;
const RADIUS2 = 60;
const FPS = 60;

const circle1XCoordinate = 100;
const circle1YCoordinate = 120;

const circle2XCoordinate = 390;
const circle2YCoordinate = 380;

function square(x) {
    return x * x;
}

function cartesianDistance(x1, y1, x2, y2) {
    return (square(x2 - x1) + square(y2 - y1)) ** 0.5;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Intersecting Circles");
    r.SetTargetFPS(FPS)
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    let color = r.BLACK;

    if (cartesianDistance(circle1XCoordinate, circle1YCoordinate, circle2XCoordinate, circle2YCoordinate) <= RADIUS1 + RADIUS2) {
        color = r.RED;
    }

    r.DrawCircle(circle1XCoordinate, circle1YCoordinate, RADIUS1, color);
    r.DrawCircle(circle2XCoordinate, circle2YCoordinate, RADIUS2, color);

    r.EndDrawing();
}

function loop() {
    while(!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow()
}

main();