//For player 1

let randomNumber1 = Math.floor(Math.random() *6) +1; // Generates random number between 1-6
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";// dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //Images of dice

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//For player 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage1 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// if player1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
 }
 // if player2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
 }
 // id Draw
else{
    document.querySelector("h1").innerHTML = "Draw!🤞";
 }


