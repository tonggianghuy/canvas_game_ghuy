// First step is to create a canvas element.

let canvas;
let ctx;
let keysPressed={};

let charX = 10;
let charY = 10;
let widthChar = 20;
let heightChar = 20;

let widthMonster= 30;
let heightMonster = 30;
let monsterX = Math.floor(Math.random()*(500-widthMonster));
let monsterY = Math.floor(Math.random()*(500-heightMonster));

let monstersCaught = 0;



function setup() {
  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  
  document.body.appendChild(canvas);
  
  addEventListener("keydown", function(key) {
    keysPressed[key.keyCode] = true;
  });
  addEventListener("keyup", function(key) {
    delete keysPressed[key.keyCode];
  });
}
function main(){
    update();
    render();
    requestAnimationFrame(main);
}

function update(){
    console.log(keysPressed);
    if(keysPressed[39] == true) {
        charX += 5;
      } 
      if(keysPressed[40] == true) {
        charY += 5;
      }
      if(keysPressed[37] == true) { // 37 is left
        charX -= 5;
      }
      if(keysPressed[38] == true) {
        charY -= 5;
      }
      charX = Math.min(canvas.width - widthChar, charX);
      charX = Math.max(0, charX);
      charY = Math.min(canvas.height - heightChar, charY);
      charY = Math.max(0, charY);

      if (
        charX <= (monsterX + heightChar-3)
        && monsterX <= (charX +heightChar-3)
        && charY <= (monsterY + heightMonster-3)
        && monsterY <= (charY + heightMonster-3)
      ) { 
          monstersCaught++;
        // Pick a new location for the monster.
        // Note: Change this to place the monster at a new, random location.
        monsterX = Math.floor(Math.random()*(500-widthMonster));
        monsterY = Math.floor(Math.random()*(500-heightMonster));
      }
}

function render(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillText("charX: " + charX, 10 ,30);
    ctx.fillText("charY: " + charY, 80 ,30);
    ctx.fillText("Monter Caught: " + monstersCaught, 10 ,50);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(monsterX, monsterY, widthMonster, heightMonster);
    ctx.fillStyle = "#000000";
    ctx.fillRect(charX, charY, widthChar, heightChar);
}






setup();
main();