var bodyElement = document.body;
var pointer = document.querySelector(".cursor");


bodyElement.addEventListener('mousemove', function(event) {
    // x = event.clientX;
    // y = event.clientY;
    x= event.x;
    y= event.y;


    pointer.style.left = x + "px";
    pointer.style.top = y + "px";
});