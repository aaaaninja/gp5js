'use strict';

function setup() {
  createCanvas(720, 720)
  colorMode(HSB, 720, 100, 100)

  rectMode(CENTER)
}

function draw() {
  background(mouseX, 100, 100)

  fill(720 - mouseX, 100, 100)
  rect(360, 360, mouseY, mouseX)
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
