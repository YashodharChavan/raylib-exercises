const r = require("raylib")

const count = 5;
const radiusDifference = 20;

const windowWidth = count * radiusDifference * 2;
const windowHeight = count * radiusDifference * 2;

const center = {
    x: windowWidth / 2,
    y: windowHeight / 2
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Target");
    r.SetTargetFPS(60);
}

function update() { }

function getColor(color) {
    return (color === r.RED) ? r.WHITE : r.RED;
}

function drawTargetCircles(n, color = r.WHITE, finalRadius = n * radiusDifference) {
    if (n <= 0) return;

    r.DrawCircleV(center, finalRadius, color);
    drawTargetCircles(n - 1, getColor(color), finalRadius - radiusDifference);
}

function draw() {
    r.BeginDrawing();

    drawTargetCircles(count);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();