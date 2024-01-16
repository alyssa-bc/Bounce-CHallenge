//Bounce Challenge

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let rectGreenX = 100;
let rectGreenY = 200;
let greenSpeed = 3;
let rectBlueX = 200;
let rectBlueY = 300;
let blueSpeed = 3;
let rectOrangeX = 300;
let rectOrangeY = 100;
let orangeXSpeed = 3;
let orangeYSpeed = 3;

//Animation Loop
requestAnimationFrame(loop);

function loop() {
  rectBlueX = rectBlueX + blueSpeed; // move
  rectGreenY = rectGreenY + greenSpeed;
  rectOrangeX = rectOrangeX + orangeXSpeed;
  rectOrangeY = rectOrangeY + orangeYSpeed;

  if (rectBlueX > 376) {
    blueSpeed = -3;
  } else if (rectBlueX < 0) {
    blueSpeed = 3;
  }

  if (rectGreenY > 376) {
    greenSpeed = -3;
  } else if (rectGreenY < 0) {
    greenSpeed = 3;
  }

  if (rectOrangeX > 376) {
    orangeXSpeed = -3;
    orangeYSpeed = 3;
  } else if (rectOrangeY > 376) {
    orangeXSpeed = -3;
    orangeYSpeed = -3;
  } else if (rectOrangeX < 0) {
    orangeXSpeed = 3;
    orangeYSpeed = -3;
  } else if (rectOrangeY < 0) {
    orangeXSpeed = 3;
    orangeYSpeed = 3;
  }

  //Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(rectBlueX, rectBlueY, 25, 25);

  ctx.fillStyle = "green";
  ctx.fillRect(rectGreenX, rectGreenY, 25, 25);

  ctx.fillStyle = "orange";
  ctx.fillRect(rectOrangeX, rectOrangeY, 25, 25);

  requestAnimationFrame(loop);
}
