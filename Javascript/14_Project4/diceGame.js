const clickMeBtn = document.querySelector("button");
const winner = document.querySelector(".winner");
const image1 = document.querySelector("#i1");
const image2 = document.querySelector("#i2");

clickMeBtn.onclick = function () {
  var randno1 = Math.floor(Math.random() * 6) + 1;
  var link1 = "images/dice" + randno1 + ".png";
  image1.setAttribute("src", link1);
  var randno2 = Math.floor(Math.random() * 6) + 1;
  var link2 = "images/dice" + randno2 + ".png";
  image2.setAttribute("src", link2);

  if (randno1 > randno2) {
    winner.innerText = "Player 1 wins";
  } else if (randno2 > randno1) {
    winner.innerText = "Player 2 wins";
  } else {
    winner.innerText = "DRAW";
  }
};
