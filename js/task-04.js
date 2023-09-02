const counterValue = {
  value: 0,
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue.value--;
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
  counterValue.value++;
  valueEl.textContent = counterValue.value;
});
