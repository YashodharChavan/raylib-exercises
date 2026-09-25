const r = require("raylib")

const windowWidth = 700;
const windowHeight = 800;
const FPS = 60;
const RADIUS = 15;

const sourceXCoordinate = 120;
const sourceYCoordinate = 150;

const dest1XCoordinate = 200;
const dest1YCoordinate = 460;

const dest2XCoordinate = 650;
const dest2YCoordinate = 500;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "CENTER RECTANGLE");
    r.SetTargetFPS(FPS);
}

function update() { }


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawCircle("source", sourceXCoordinate, sourceYCoordinate, r.RED);
    drawCircle("dest1", dest1XCoordinate, dest1YCoordinate, r.GREEN);
    drawCircle("dest2", dest2XCoordinate, dest2YCoordinate, r.BLACK);

    drawClosestLine(sourceXCoordinate,
        sourceYCoordinate,
        dest1XCoordinate,
        dest1YCoordinate,
        dest2XCoordinate,
        dest2YCoordinate,
        r.BLACK
    );

    r.EndDrawing();
}


function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function drawCircle(text, CoordinateX, CoordinateY, color) {
    const textWidth = r.MeasureText(text, 16);

    r.DrawCircle(CoordinateX, CoordinateY, RADIUS, color);
    r.DrawText(text, CoordinateX - textWidth / 2, CoordinateY + RADIUS + 5, 16, color);
}

function square(x) {
    return x * x;
}

function cartesianDistance(x1, y1, x2, y2) {
    return (square(x2 - x1) + square(y2 - y1)) ** 0.5;
}



function drawClosestLine(sourceXCoordinate, sourceYCoordinate, dest1XCoordinate, dest1YCoordinate, dest2XCoordinate, dest2YCoordinate, color) {
    const sourceToDest1Distance =
        cartesianDistance(
            sourceXCoordinate,
            sourceYCoordinate,
            dest1XCoordinate,
            dest1YCoordinate
        );

    const sourceToDest2Distance =
        cartesianDistance(
            sourceXCoordinate,
            sourceYCoordinate,
            dest2XCoordinate,
            dest2YCoordinate
        );

    if (sourceToDest1Distance < sourceToDest2Distance) {
        r.DrawLine(sourceXCoordinate, sourceYCoordinate, dest1XCoordinate, dest1YCoordinate, color);
        return;
    }

    r.DrawLine(sourceXCoordinate, sourceYCoordinate, dest2XCoordinate, dest2YCoordinate, color);
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();

