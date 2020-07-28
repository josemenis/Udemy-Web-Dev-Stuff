let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
//console.log(body);
// input event => 2nd parameter auto run with event. So no need to call it. 
color1.addEventListener("input", gradientBackground);
color2.addEventListener("input", gradientBackground);

function gradientBackground () {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value + ")"

    css.textContent = body.style.background + ";";
}
