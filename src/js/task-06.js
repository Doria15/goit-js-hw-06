const inputEl = document.getElementById("validation-input");
const inputElLength = inputEl.textContent.length;

inputEl.addEventListener("blur", validateInput);

function validateInput() {
  if (inputElLength !== 6) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.add("valid");
  }
}
