const sketch = require("./sketch")

function loop() {
    while(sketch.isRunning()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setWindowDimensions("CLOSEST DISTANCE", 600, 400);
    sketch.setSourceDimensions(40, 40);
    sketch.setDest1Dimensions(100, 100)
    sketch.setDest2Dimensions(200, 300)

    sketch.setup()
    loop();
    sketch.teardown();
}

main();