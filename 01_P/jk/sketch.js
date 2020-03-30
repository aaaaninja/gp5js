'use strict';

function setup() {
  createCanvas(720, 720)
}

function draw() {
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
