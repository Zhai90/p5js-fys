/* 
 object with an array
 array has object for eacha period
 object contains 2 properties
 properties are "homework" and "stress"
*/

let font1;
let font2;
let img;
let obj;

let x;
let y;

window.onerror = (err) => {
  location.reload(); // sometimes p5js just crashes because I can't load the font
};

async function preload() { // import everything
  var file = await fetch("./data.json");
  obj = await file.json();
  font1 = loadFont("font/font.otf");
  font2 = loadFont("font/font2.ttf");
  img = loadImage("assets/arrow.png");
}

function returnColor(i) { // helper func
  let stress = Math.round(obj.data[i].stress / 20);
  switch (stress) {
    case 0:
      return color(7, 67, 253);
    case 1:
      return color(62, 63, 216);
    case 2:
      return color(125, 55, 158);
    case 3:
      return color(186, 43, 98);
    case 4:
      return color(223, 28, 58);
    case 5:
      return color(253, 2, 6);
  }
}

function returnBooks(i, x, y) { // helper func
  let books = Math.round(obj.data[i].homework / 20);
  for (let j = 0; j < books; j++) {
    switch (books) {
      case 0:
        break;
      case 1:
        fill(returnColor(i));
        rect(x, y, 65, 10);
        break;
      case 2:
        fill(returnColor(i));
        rect(x, y, 65, 10);
        rect(x, y - 10, 65, 10);
        break;
      case 3:
        fill(returnColor(i));
        rect(x, y, 65, 10);
        rect(x, y - 10, 65, 10);
        rect(x, y - 20, 65, 10);
        break;
      case 4:
        fill(returnColor(i));
        rect(x, y, 65, 10);
        rect(x, y - 10, 65, 10);
        rect(x, y - 20, 65, 10);
        rect(x, y - 30, 65, 10);
        break;
      case 5:
        fill(returnColor(i));
        rect(x, y, 65, 10);
        rect(x, y - 10, 65, 10);
        rect(x, y - 20, 65, 10);
        rect(x, y - 30, 65, 10);
        rect(x, y - 40, 65, 10);
        break;
    }
  }
}

function setup() {
  createCanvas(825, 825).position(0, 0, "fixed");
  background(11, 11, 11);

  fill(255, 255, 242);
  rect(10, 10, 805, 805);

  fill(0);

  textSize(40);
  textFont(font1);
  textAlign(LEFT);

  text(obj.text.title, 70, 80);

  textSize(17);

  textFont(font2);

  text(obj.text.body, 70, 130);

  textSize(24);
  textFont(font1);

  text("This is a book!", 540, 200);
  image(img, 630, 200, 100, 100);
  fill(125, 55, 128);
  rect(570, 275, 65, 10);
  fill(0);

  textSize(15);
  text("By Hongmeng Zhai, First-Year Seminar 2023-24", 460, 805);

  circle(70, 360, 20);
  rect(70, 350, 630, 20);
  circle(708, 412.5, 125);

  rect(110, 455, 600, 20);
  circle(110, 517.5, 125);

  rect(110, 560, 600, 20);
  circle(708, 622.5, 125);

  rect(110, 665, 600, 20);
  circle(110, 727.5, 125);

  rect(110, 770, 275, 20);
  circle(385, 780, 20);

  fill(255, 255, 242);
  noStroke();

  circle(708, 412.5, 85); // 105 increment
  rect(622, 370, 85, 85); // r = 42.5

  circle(110, 517.5, 85);
  rect(110, 475, 85, 85);

  circle(708, 622.5, 85);
  rect(622, 580, 85, 85);

  circle(110, 727.5, 85);
  rect(110, 685, 85, 85);
}

function draw() {
  fill(255, 255, 255);
  stroke(0);

  for (let i = 0; i < obj.data.length; i++) {
    if (i < 7) {
      // week1
      x = 105 + i * 90;
      y = 340;
      returnBooks(i, x, y);
    } else if (i > 6 && i < 14) {
      // week2
      x = 105 + (i - 7) * 90;
      y = 445;
      returnBooks(i, x, y);
    } else if (i > 13 && i < 21) {
      // week3
      x = 105 + (i - 14) * 90;
      y = 550;
      returnBooks(i, x, y);
    } else if (i > 20 && i < 28) {
      // week4
      x = 105 + (i - 21) * 90;
      y = 655;
      returnBooks(i, x, y);
    } else {
      // week5
      x = 105 + (i - 28) * 90;
      y = 760;
      returnBooks(i, x, y);
    }
  }
}
