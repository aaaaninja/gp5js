'use strict';

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, width, 100, 100)

  stroke(0, 100, 100)
  for (let gridX = 0; gridX < width; gridX += 40) {
    console.log(gridX)
  }
}

function draw() {
  const stepX = mouseX + 2
  const stepY = mouseY + 2

  for (let gridX = 0; gridX < width; gridX += stepX) {
    for (let gridY = 0; gridY < height; gridY += stepY) {
      fill(gridX, 100, 100)
      rect(gridX, gridY, stepX, stepY)
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
