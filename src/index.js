window.addEventListener("load", function() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext('2d');

    // resize canvas to size of parent element
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var cWidth = canvas.width;
    var cHeight= canvas.height;
    var dotMargin = 50;
    var numCols = 15;
    var numRows = 15;
    console.log("width: " + cWidth);
    console.log("height: " + cHeight);

    var dotWidth = ((cWidth - (2 * dotMargin)) / numCols) - dotMargin;
    var dotHeight = ((cHeight - (2 * dotMargin)) / numRows) - dotMargin;

    if( dotWidth > dotHeight ) {
        var dotDiameter = dotHeight;
        var xMargin = (cWidth - ((2 * dotMargin) + (numCols * dotDiameter))) / numCols;
        var yMargin = dotMargin;
        console.log("dotWidth larger");
        console.log("dotWidth: " + dotWidth);
        console.log("dotHeight: " + dotHeight);
        console.log("xMargin: " + xMargin);
        console.log("yMargin: " + yMargin);
    } else {
        var dotDiameter = dotWidth;
        var xMargin = dotMargin;
        var yMargin = (cHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
        console.log("dotHeight larger");
        console.log("dotWidth: " + dotWidth);
        console.log("dotHeight: " + dotHeight);
        console.log("xMargin: " + xMargin);
        console.log("yMargin: " + yMargin);
    }

    var dotRadius = dotDiameter * 0.5;

    for(var i = 0; i < numRows; i++) { 
        for(var j = 0; j < numCols; j++) {
            var x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
            var y = (i * (dotDiameter + yMargin)) + dotMargin + (yMargin / 2) + dotRadius;
            drawDot(x, y, dotRadius);
        }
        console.log("dotRadius: " + dotRadius + "dotDiameter: " + dotDiameter);
    }

    function drawDot(x, y, radius) {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'rgba(255, 255, 255,' + Math.random() + ')';
        context.fill();
    }
});