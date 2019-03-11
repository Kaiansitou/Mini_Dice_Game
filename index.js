// generate random number from 1-6
var randomNumber1 = Math.floor(Math.random()*6)+1;
//generate 6 random dice image
var randomDicImg1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDicImg1);


//Second random dice img
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDicImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDicImg2);

//checking result
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "♚Player1 wins";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 wins♚";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
