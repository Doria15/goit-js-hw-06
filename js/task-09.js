const color = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.getElementsByTagName("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.innerHTML = randomColor;
});
