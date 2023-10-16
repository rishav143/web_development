var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var src1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll(".container .dice img")[0].setAttribute("src", src1);

//js for second dice 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var src2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll(".container .dice img")[1].setAttribute("src", src2);

//change h1 
if(randomNumber1 == randomNumber2) {
    document.querySelector("div h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("div h1").textContent = "🚩Player 1 wins!";
} else {
    document.querySelector("div h1").textContent = "Player 2 wins!🚩";
}
