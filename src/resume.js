window.addEventListener("load", function() {
    // responsive nav bar 
    var bars = this.document.getElementById("three");
    var navbar = this.document.getElementById("navLinks");

    // when 3 bars are clicked on nav bar, display links
    bars.addEventListener("click", function() {
        navbar.classList.toggle("active");
        return false;
    });
});