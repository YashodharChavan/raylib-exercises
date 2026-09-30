const r = require("raylib")

function setup() {
    const windowWidth = 600;
    const windowHeight = 500;

    r.InitWindow(windowWidth, windowHeight, "Two Points");
    r.SetTargetFPS(60);
}

function update() {}

function draw() {
    const leftPoint = {
        x: 50,
        y: 100,
    };
    
    const rightPoint = {
        x: 250,
        y: 100,
    };
    
    r.BeginDrawing();
    
    r.DrawCircleV(leftPoint, 40, r.RED);
    r.DrawCircleV(rightPoint, 40, r.BLUE);
    r.DrawLineEx(leftPoint, rightPoint, 5, r.WHITE);
    
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