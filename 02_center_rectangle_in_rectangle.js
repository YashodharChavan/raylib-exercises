const r = require("raylib");

const windowWidth = 700;
const windowHeight = 400;
const FPS = 50;

const parentRectWidth = 500;
const parentRectHeight = 200;

const parentRectXCoordinate = 100;
const parentRectYCoordinate = 40;

const childRectWidth = 300;
const childRectHeight = 100;

let childRectXCoordinate = 0;
let childRectYCoordinate = 0;


console.log(childRectXCoordinate, childRectYCoordinate)

function setup() {
    r.InitWindow(windowWidth, windowHeight, "CENTER RECTANGLE");
    r.SetTargetFPS(FPS);
}

function calculateCenterCoordinate(parentCoordinate, parentDimension, childDimension) {
    return parentCoordinate + (parentDimension - childDimension) / 2;
}

function update() {
    childRectXCoordinate = calculateCenterCoordinate(parentRectXCoordinate, parentRectWidth, childRectWidth);
    childRectYCoordinate = calculateCenterCoordinate(parentRectYCoordinate, parentRectHeight, childRectHeight);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE)

    r.DrawRectangle(parentRectXCoordinate, parentRectYCoordinate, parentRectWidth, parentRectHeight, r.WHITE);
    r.DrawRectangle(childRectXCoordinate, childRectYCoordinate, childRectWidth, childRectHeight, r.RED);

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


