
let body = document.querySelector("body");
console.log(body);

let colorRed = document.getElementById("red");
let colorGreen = document.getElementById("green");
let colorYellow = document.getElementById("yellow");
let colorBlue = document.getElementById("blue");

// colorRed.addEventListener("click", function getBgColor() {
// body.style.backgroundColor = this.style.backgroundColor;
// });

colorRed.addEventListener("click", colorChange);
colorGreen.addEventListener("click", colorChange);
colorYellow.addEventListener("click", colorChange);
colorBlue.addEventListener("hover", colorChange);

function colorChange() {
    body.style.backgroundColor = this.style.backgroundColor;
};
