const sketch = require("./sketch")

function loop() {
    while(sketch.isRunning()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setWindowDimensions("CLOSEST DISTANCE", 600, 400);
    sketch.setCircle1Details(40, 40, 100);
    sketch.setCircle2Details(160, 160, 40);


    sketch.setup()
    loop();
    sketch.teardown();
}

main();