const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let value = 0;

decrementEl.addEventListener("click", () => {
  value--;
  counterValue.innerHTML = value;
});

incrementEl.addEventListener("click", () => {
  value++;
  counterValue.innerHTML = value;
});
