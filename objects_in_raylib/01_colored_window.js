const r = require("raylib")

function setup() {
    const windowWidth = 600;
    const windowHeight = 500;
    r.InitWindow(windowWidth, windowHeight, "A Colored Window");
    r.SetTargetFPS(60);
}

function update() {

}

function draw() {
    const window = {
        x: 10,
        y: 40,
        width: 300,
        height: 200,
        color: r.WHITE
    }

    r.BeginDrawing();
    r.DrawRectangleLines(window.x, window.y, window.width, window.height, window.color);
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