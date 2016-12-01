var width = 80;
var height = 80;
var playerX;
var playerY;
var foodX;
var foodY;
var food2X;
var food2Y;
var score = 0;
var timestart = Date.now()

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

//MOVMENT

var ravenX = 250;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   ravenX -=15;
document.getElementById("raven").setAttribute("x", ravenX)

 }
 else if(e.keyCode == 39){
       ravenX +=15;
document.getElementById("raven").setAttribute("x", ravenX)
 }
})

var ravenY = 250;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 38){
   ravenY -=15;
document.getElementById("raven").setAttribute("y", ravenY)

 }
 else if(e.keyCode == 40){
       ravenY +=15;
document.getElementById("raven").setAttribute("y", ravenY)
 }

//OVERLAP

foodX = Number(document.getElementById("food1").getAttribute("x"))
foodY = Number(document.getElementById("food1").getAttribute("y"))
playerX = Number(document.getElementById("raven").getAttribute("x"))
playerY = Number(document.getElementById("raven").getAttribute("y"))



if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
console.log("eaten food");
document.getElementById("food1").setAttribute("x",randomNumber(25,775))
  score = score + 1;
  document.getElementById("score").textContent = score

}

food2X = Number(document.getElementById("food2").getAttribute("x"))
food2Y = Number(document.getElementById("food2").getAttribute("y"))
playerX = Number(document.getElementById("raven").getAttribute("x"))
playerY = Number(document.getElementById("raven").getAttribute("y"))


if (playerX > food2X && playerX < food2X + width && playerY > food2Y && playerY < food2Y + height) {
console.log("eaten food");
document.getElementById("food2").setAttribute("x",randomNumber(25,775))
score = score + 1;
document.getElementById("score").textContent = score
}

//GAME OVER

if (score == 5) {
  console.log("GAME OVER");
  document.getElementById("canvas").pauseAnimations()
  var timestop = Date.now()
  var duration = timestop - timestart
  var finalTime = duration/1000
  document.getElementById("time").textContent = finalTime +("seconds")

}
})
