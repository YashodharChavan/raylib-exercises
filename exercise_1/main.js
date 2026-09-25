const sketch = require("./sketch")

function loop() {
    while(sketch.isRunning()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setWindowDimensions("MY TITLE", 300, 400, 60);
    sketch.setRectDimensions(50, 50);

    sketch.setup()
    loop();
    sketch.teardown();
}

main();