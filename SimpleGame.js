var width = 80
var height = 80
var playerX
var playerY
var foodX
var foodY


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
})



if (playerX > foodX && playerX < foodX + width && playerY < foodY + height) {

  
}
