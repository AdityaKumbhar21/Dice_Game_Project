
const dicePics = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
];

let player1Dice = Math.floor(Math.random()*dicePics.length)
let image1 = dicePics[player1Dice]; 
document.querySelector(".img1").src = image1;
console.log(player1Dice);

let player2Dice = Math.floor(Math.random()*dicePics.length)
let image2 = dicePics[player2Dice]; 
document.querySelector(".img2").src= image2;
console.log(player2Dice);
document.querySelector("#title").textContent = "Refresh ME"
if(player1Dice>player2Dice)
{
    document.querySelector("#title").textContent = "Player 1 Wins!";
}
else if(player1Dice == player2Dice)
{
    document.querySelector("#title").textContent = "Draw";
}
else{
    document.querySelector("#title").textContent = "Player 2 Wins!";
}