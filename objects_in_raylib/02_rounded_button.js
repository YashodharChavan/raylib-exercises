const r = require("raylib")


function setup() {
    const windowWidth = 600;
    const windowHeight = 500;
    r.InitWindow(windowWidth, windowHeight, "Rounded Button");
    r.SetTargetFPS(60);
}

function update() {}

function calculateTextX(button, textWidth) {
    return button.x + textWidth / 10;
}

function calculateTextY(button) {
    return button.y + 30;
}

function draw() {
    const text = "Click Me I AM GOOD"
    const textWidth = r.MeasureText(text, 50);
    
    const button = {
        x: 10,
        y: 40,
        width: textWidth,
        height: 100,
        color: r.WHITE,
    }
    
    const textX = calculateTextX(button, textWidth);
    const textY = calculateTextY(button);

    r.BeginDrawing();
    
    r.DrawRectangleRounded(button, 0.5, 30, button.color);
    r.DrawText(text, textX, textY, 40, r.BLACK);
    
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