const color = document.querySelector(".color");
const button = document.querySelector(".button");
const body = document.getElementsByTagName("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click");
