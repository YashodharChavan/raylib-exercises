const sketch = require("./sketch")

function loop() {
    while(sketch.isRunning()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setWindowDimensions("CENTER RECTANGLE", 600, 400, 60);
    sketch.setParentRectDimensions(50, 50, 300, 200);
    sketch.setChildRectDimensions(200, 150)
    
    sketch.setup()
    loop();
    sketch.teardown();
}

main();