'use strict';

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, width, 100, 100)
}

function draw() {
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
