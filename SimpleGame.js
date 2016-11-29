var width = 80
var height = 80
var playerX
var playerY
var foodX
var foodY
var food2X
var food2Y

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

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


foodX = Number(document.getElementById("food1").getAttribute("x"))
foodY = Number(document.getElementById("food1").getAttribute("y"))
playerX = Number(document.getElementById("raven").getAttribute("x"))
playerY = Number(document.getElementById("raven").getAttribute("y"))


if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
console.log("eaten food");
document.getElementById("food1").setAttribute("x",randomNumber(1,400))
}

food2X = Number(document.getElementById("food2").getAttribute("x"))
food2Y = Number(document.getElementById("food2").getAttribute("y"))
playerX = Number(document.getElementById("raven").getAttribute("x"))
playerY = Number(document.getElementById("raven").getAttribute("y"))


if (playerX > food2X && playerX < food2X + width && playerY > food2Y && playerY < food2Y + height) {
console.log("eaten food");
document.getElementById("food2").setAttribute("x",randomNumber(1,400))
}

})
