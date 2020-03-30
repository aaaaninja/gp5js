'use strict';

function setup() {
  createCanvas(720, 720)
  colorMode(HSB, 720, 100, 100)
}

function draw() {
  background(360, 100, 100)
  rect(360, 360, 100, 200)
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
