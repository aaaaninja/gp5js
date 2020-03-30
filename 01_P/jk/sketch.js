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
  for (let gridX = 0; gridX < width; gridX += 40) {
    fill(400, 100, 100)
    rect(gridX, 0, gridX + 40, 100)

    fill(500, 100, 100)
    rect(gridX, 100, gridX + 40, 100)

    fill(600, 100, 100)
    rect(gridX, 200, gridX + 40, 100)
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
