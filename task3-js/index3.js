let circleBtn = document.getElementById("circle");
let  squareBtn = document.getElementById("square");
let image = document.getElementById("image");
circle.onclick = function () {
    image.style.borderRadius = "50%";
};
square.onclick = function () {
    image.style.borderRadius = "0";
};