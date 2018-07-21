window.addEventListener("load", function() { 
    // reference to canvas element and context to draw shapes
    var canvas = this.document.querySelector("canvas");
    var context = canvas.getContext('2d');

    // resize canvas to size of parent element
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // reference to canvas width and height to determine dot position
    var cWidth = canvas.width;
    var cHeight= canvas.height;
    // initial direction of dot
    var dir = ['+', '-'];

    // array of dot objects
    var dots = [];
    var dotsNum = 150;
    // social links in header section
    var socialLinks = this.document.querySelectorAll(".fa-2x");
    screen(cWidth);
    create();

    // adjust for screen size changes
    function screen(w) {
        // set number of dots based on screen size
        if (w <= 768) {
            dotsNum = 50;
        } else if (w > 1224) {
            dotsNum = 250;
        } else { // inbeetween width of 767 - 1224
            dotsNum = 150;
        }

        // change social link size based on screen size
        if (w < 480) {
            // make social links smaller by looping through nodelist of
            // classes
            for (var i = 0; i < socialLinks.length; i++) {
                socialLinks[i].classList.remove("fa-2x");
            }
        } else {
            if (!socialLinks[0].classList.contains("fa-2x")) {
                for(var i = 0; i < socialLinks.length; i++) {
                    socialLinks[i].classList.add("fa-2x");
                }
            }
        }
    }

    // function creates 150 dot objects, populates dot array, and draws
    // each dot on a random place on the canvas
    function create() {
        for (i = 0; i < dotsNum; i++) {
            // white color w/random opacity
            var color = 'rgba(255,255,255,' + Math.random() + ')';

            // direction of left or right/up or down
            var dirNum = Math.floor(Math.random() * 2);
            var xMove = dir[dirNum];
            var yMove = dir[dirNum];

            // randon location on canvas
            var x = Math.floor(Math.random() * cWidth) + (rad*2);
            var y = Math.floor(Math.random() * cHeight) + (rad*2);
            var speed = 0.3 * Math.random();
            var rad = 3;

            var dot = {
                x: x,
                y: y,
                radius: rad,
                xMove: xMove,
                yMove: yMove,
                color: color,
                speed: speed
            };

            // push dot object to dots array and draw each dot on canvas
            dots.push(dot);
            drawDot(dot);
        }
    }

    // start animation .5 sec after page loads
    setTimeout(function(){
        window.requestAnimationFrame(moveDot);
    }, 500);
      
    // moves dot depending on x and y direction and object's speed  
    function moveDot() {
        // clear canvas to redraw dots
        context.clearRect(0, 0, cWidth, cHeight);
      
        for (i = 0; i < dots.length; i++) {
            // move dot based on object's direction and speed values
            if (dots[i].xMove == '+') {
                dots[i].x += dots[i].speed;
            } else {
                dots[i].x -= dots[i].speed;
            }

            if (dots[i].yMove == '+') {
                dots[i].y += dots[i].speed;
            } else {
                dots[i].y -= dots[i].speed;
            }
            
            // redraw dot
            drawDot(dots[i])
        
            // if dot hits edge of screen, reverse it's direction
            if ((dots[i].x + dots[i].radius) >= cWidth) {
                dots[i].xMove = '-';
            }

            if ((dots[i].x - dots[i].radius) <= 0) {
                dots[i].xMove = '+';
            }

            if ((dots[i].y + dots[i].radius) >= cHeight) {
                dots[i].yMove = '-';
            }

            if ((dots[i].y - dots[i].radius) <= 0) {
                dots[i].yMove = '+';
            }
        }
      
        // Render it again
        window.requestAnimationFrame(moveDot);
    }

    // function to draw circular dot
    function drawDot(dot) {
        context.beginPath(); // begin drawing
        context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false); // specify arc w/dot object's position and radius
        context.fillStyle = dot.color; // add a color
        context.fill(); // fill color in circle
    }

    // reset when the window is resized
    window.addEventListener('resize', function() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        cWidth = canvas.width;
        cHeight = canvas.height;
        context.clearRect(0, 0, cWidth, cHeight);
        dots = [];
        screen(cWidth);
        create();
    });

    // get the home, projects, and about me sections
    var home = this.document.getElementById("home");
    var proj = this.document.getElementById("project");
    var aboutMe = this.document.getElementById("about-me");

    // height of home section, top position of the project and about
    // section relative to the viewport, and current Y position of
    // viewport
    var h = home.offsetHeight;
    var projTop = proj.getBoundingClientRect().top;
    var aboutTop = aboutMe.getBoundingClientRect().top;
    var viewYPos = window.pageYOffset;

    // if section is in view on scroll, fade it into view 
    window.addEventListener("scroll", function() {
        viewYPos = window.pageYOffset + h;

        if (viewYPos >= projTop) {
            proj.classList.add("fade");
        }

        if (viewYPos >= aboutTop) {
            aboutMe.classList.add("fade");
        }
    });

    // if section is in view on load, fade it into view
    if ((viewYPos + h) >= projTop) {
        proj.classList.add("fade");
    }

    if (viewYPos >= aboutTop) {
        aboutMe.classList.add("fade");
    }

    // responsive nav bar 
    var bars = this.document.getElementById("hamburger");
    var navbar = this.document.getElementById("links");

    // when 3 bars are clicked on nav bar, display links
    bars.addEventListener("click", function() {
        navbar.classList.toggle("active");
        return false;
    });
});