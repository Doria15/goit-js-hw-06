const inputEl = document.querySelector("#validation-input");
const inputElContent = inputEl.textContent;

inputEl.addEventListener("blur", handleInput);

function handleInput() {
  let requiredInput = 6;

  if (inputElContent.length === requiredInput) {
    document.getElementById("validation-input").style.borderColor = "#4caf50";
  } else {
    document.getElementById("validation-input").style.borderColor = "#f44336";
  }
}
