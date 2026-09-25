const r = require("raylib")
const geometry = require("./geometry")

const FPS = 60;
let windowTitle;

let windowWidth;
let windowHeight;

let circle1Radius;
let circle2Radius;

let circle1X;
let circle1Y;

let circle2X;
let circle2Y;

function setWindowDimensions(title, width, height) {
    windowTitle = title;
    windowWidth = width;
    windowHeight = height;
}

function setCircle1Details(X, Y, radius) {
    circle1X = X;
    circle1Y = Y;
    circle1Radius = radius;
}

function setCircle2Details(X, Y, radius) {
    circle2X = X;
    circle2Y = Y;
    circle2Radius = radius;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(FPS)
}

function isRunning() {
    return !r.WindowShouldClose();
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const distance = geometry.cartesianDistance(circle1X, circle1Y, circle2X, circle2Y);
    let color = r.BLACK;

    if (distance <= circle1Radius + circle2Radius) {
        color = r.RED;
    }

    r.DrawCircle(circle1X, circle1Y, circle1Radius, color);
    r.DrawCircle(circle2X, circle2Y, circle2Radius, color);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setWindowDimensions,
    setCircle1Details,
    setCircle2Details,
    setup,
    isRunning,
    update,
    draw,
    teardown
}
