const sketch = require("./sketch")

function loop() {
    while(sketch.isRunning()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setWindowDimensions("SCALE AND CENTER RECTANGLE", 600, 400, 60);
    sketch.setParentRectDimensions(300, 200);
    sketch.setChildDimensionScaleFactor(0.5, 0.8)
    
    sketch.setup()
    loop();
    sketch.teardown();
}

main();