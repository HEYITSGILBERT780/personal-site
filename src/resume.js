window.addEventListener("load", function() {
    // responsive nav bar 
    var bars = this.document.getElementById("three");
    var navbar = this.document.getElementById("navLinks");

    // when 3 bars are clicked on nav bar, display links
    bars.addEventListener("click", function() {
        navbar.classList.toggle("active");
        return false;
    });

    // canvas element and canvas
    var canvas = this.document.querySelector("canvas");
    var context = canvas.getContext("2d");

    // resize canvas to size of parent
    // canvas.style.width = "100%";
    // canvas.style.height = "100%";
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;
});