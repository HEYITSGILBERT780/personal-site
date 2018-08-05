window.addEventListener("load", function() {
    // responsive nav bar 
    const bars = this.document.getElementById("three");
    const navbar = this.document.getElementById("navLinks");

    // when 3 bars are clicked on nav bar, display links
    bars.addEventListener("click", function() {
        navbar.classList.toggle("active");
        return false;
    });
});