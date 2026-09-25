const r = require("raylib")
const geometry = require("./geometry")
let windowWidth = 700
let windowHeight = 400
let FPS = 50
let TITLE = "";

const parentRectWidth = 500
const parentRectHeight = 200

const widthRatio = 0.6
const heightRatio = 0.6

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

function calculateCenterCordinates(windowDimension, rectDimension) {
    return (windowDimension - rectDimension) / 2;
}

function calculateScaledDimension(dimension, scale) {
    return dimension * scale;
}

function centerRectangle(windowWidth, windowHeight, parentRectWidth, parentRectHeight, color) {
    const posX = 

    r.DrawRectangle(calculateCenterCordinates(windowWidth, parentRectWidth), calculateCenterCordinates(windowHeight, parentRectHeight), parentRectWidth, parentRectHeight, color);
}

function centerRectangleByRatio(windowWidth, windowHeight, parentWidth, parentHeight, widthRatio, heightRatio, color) {
    const parentCenterXCordinate = calculateCenterCordinates(windowWidth, parentRectWidth);
    const parentCenterYCordinate = calculateCenterCordinates(windowHeight, parentRectHeight);

    const childWidth =calculateScaledDimension(parentWidth, widthRatio);
    const childHeight = calculateScaledDimension(parentHeight, heightRatio);

    const childCenterXCordinate = calculateCenterCordinates(parentWidth, childWidth);
    const childCenterYCordinate = calculateCenterCordinates(parentHeight, childHeight);

    r.DrawRectangle(parentCenterXCordinate + childCenterXCordinate, parentCenterYCordinate + childCenterYCordinate, childWidth, childHeight, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);

    centerRectangle(windowWidth, windowHeight, parentRectWidth, parentRectHeight, r.WHITE);
    centerRectangleByRatio(windowWidth, windowHeight, parentRectWidth, parentRectHeight, widthRatio, heightRatio, r.RED);

    r.EndDrawing();
}

function update() {}

function loop() {
    while(!r.WindowShouldClose()) {
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

