// 3.2==> display button 
function displayOrder() {
    let name = document.getElementById("customerName").value;
    let order = document.getElementById("order").value;

    // 4 ==> show information in bag
    document.getElementById("information").innerHTML="Hello  "+name+"! Your order is "+order+".";
}
//     use getElementsByTagName
let labels = document.getElementsByTagName("label");
labels[0].style.color = "gold";
labels[1].style.fontWeight = "bold";

// use getElementsByClassName
let button=document.getElementsByClassName("but");
button[0].style.color="red";

// use querySelector()
 let order =document.querySelector("#order");
 order.style.color="orange";

//
function changeColor() {
    document.getElementById("submitButon").style.backgroundColor = "blue";
}

function resetColor() {
    document.getElementById("submitButon").style.backgroundColor = "lightgray";
}