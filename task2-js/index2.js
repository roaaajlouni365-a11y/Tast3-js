let text = document.getElementById("text");
let font = document.getElementById("font");
let size = document.getElementById("size");
let italic = document.getElementById("italic");
let  bold = document.getElementById("bold");
let  underline = document.getElementById("underline");

font.onchange = function () {text.style.fontFamily = font.value;};
size.onchange = function () {text.style.fontSize = size.value;};

italic.onclick = function () {
    if (italic.checked) {text.style.fontStyle = "italic";} 
    else {text.style.fontStyle = "normal";}

};
bold.onclick = function () {
    if (bold.checked) {text.style.fontWeight = "bold";} 
    else { text.style.fontWeight = "normal"; }
};
underline.onclick = function () {
    if (underline.checked) {text.style.textDecoration = "underline";} 
    else {text.style.textDecoration = "none"; }
};