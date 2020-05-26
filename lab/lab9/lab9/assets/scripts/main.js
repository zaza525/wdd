
// Usually we wouldn't do this, but making the canvas & context globally available here's easier for making this hands-on
let canvas, context, colorPicker;

// STEP 3 PART 1
// Let's make a counter and initialize its value to 0

/* SOLUTION HERE */
let counter = 0;

/**
 * A handler function that should run after the page successfully loads
 * We only want to use document.getElementById() after the browser finishes reading the source code of the page
 */
function pageLoaded() {

    // STEP 0
    // Get the canvas and a 2d drawing context

    /* SOLUTION HERE */
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    // Get the color picker element

    /* SOLUTION HERE */
    colorPicker = document.getElementById("color-picker")

    //
    // When the mouse moves...
    //

    /**
     * @param {MouseEvent} event
     */
    function mouseMoved(event) {
        // STEP 3 PART 1
        // Every time the mouse moves, we increase the value of the counter by one

        /* SOLUTION HERE */
        counter = counter + 1;

        // STEP 3 PART 2
        // You'll modify the code written for Step 1
        // Once you've done Step 3 part 1, check out the radiusFunction?() above!
        // Rather than drawing circles at a uniform radius, we can make its radius vary by position & time

        /* SOLUTION HERE */
        let radius = radiusFunction1(x, y, counter);

        // STEP 1
        // Let's draw a circle with fillCircle() or strokeCircle() at the position of the mouse cursor!
        // When the user moves the mouse over the canvas, the browser runs this function
        // with a mouse event that contains information about the mouse position.
        // You can get the positions of the mouse from event.clientX and event.clientY

        // Perhaps first try to console.log() those 2 values and observe where the (0,0) position is on the page?
        // Since this function runs every time you move your mouse over the page, console.log() in this function will run multiple times too

        /* SOLUTION HERE */
        var x = event.clientX;
        var y = event.clientY;
        strokeCircle(x, y, radius);

        // STEP 3 PART 3
        // Modify the code from STEP 1 above!
    }

    canvas.onmousemove = mouseMoved;

    //
    // When the user interacts with the slider...
    //

    /**
     * Handler function that runs when the color picker is changed
     */
    function colorChanged() {
        // STEP 2 PART 1
        // In index.html, the color picker's value ranges from #000000 to #ffffff
        // Let's store the color picker's value in a variable, perhaps named "color"

        /* SOLUTION HERE */
        color = colorPicker.value;

        // STEP 2 PART 2
        // Set the color value to both context.fillStyle and context.strokeStyle

        /* SOLUTION HERE */
        context.fillStyle = color;
        context.strokeStyle = color;

    }

    // Set a property on colorPicker so that the browser runs colorChanged() for us when the slider is changed
    colorPicker.onchange = colorChanged;


    //
    // When the window resizes...
    //

    /**
     * Handler function that runs every time the window is resized
     */
    function windowResized() {
        // While setting the canvas width/height, the drawing is cleared
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // We manually trigger a color change because the fill/stroke color is cleared too
        colorChanged();
    }

    // We let the browser run windowResized() for us when the window size changes
    window.onresize = windowResized;
    // We manually trigger the window resize on page load
    windowResized();

}

// We let the browser run pageLoaded() for us when the page is loaded
window.onload = pageLoaded;
















/* DO NOT MODIFY BELOW THIS POINT */

//
// A couple of functions that returns some funky radius, given the positions "x", "y" and "t" (time)
//

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction1(x, y, t) {
    return 20 * Math.abs(Math.sin(t / 100 * Math.PI));
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction2(x, y, t) {
    return 20 * Math.random();
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction3(x, y, t) {
    return t % 50;
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction4(x, y, t) {
    return 20 * Math.abs(Math.sin(x / 100 * Math.PI) * Math.sin(y / 100 * Math.PI));
}

//
// A couple of useful variables to clear the canvas, and to draw some circles
//

/**
 * Clears the canvas
 */
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Fills a circle at the given location
 *
 * fillCircle(50, 40) draws a solid circle at (50, 40) with a (default) radius 20
 * fillCircle(20, 50, 10) draws a solid circle at (20, 50) with a radius 10
 *
 * @param {number} x
 * @param {number} y
 * @param {number?} radius
 */
function fillCircle(x, y, radius = 20) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
}

/**
 * Outlines a circle at the given location
 *
 * strokeCircle(50, 40) outlines a circle at (50, 40) with a (default) radius 20
 * strokeCircle(20, 50, 10) outlines a circle at (20, 50) with a radius 10
 *
 * @param {number} x
 * @param {number} y
 * @param {number?} radius
 */
function strokeCircle(x, y, radius = 20) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
}
