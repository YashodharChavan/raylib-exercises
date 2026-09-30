const r = require("raylib")


const windowWidth = 500;
const windowHeight = 400;


function setup() {
    r.InitWindow(windowWidth, windowHeight, "Ball");
    r.SetTargetFPS(60);
}

function update() { }


function draw() {
    const center = {
        x: windowWidth / 2,
        y: windowHeight / 2
    }
    const ballRadius = 50;
    const ballColor = r.RED;

    r.BeginDrawing();

    r.DrawCircleV(center, ballRadius, ballColor);

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