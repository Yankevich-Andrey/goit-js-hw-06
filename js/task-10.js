// змінні для доступу
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

//
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let size = 30; // закоментувати (та розкоментувати нижче) якщо при повторной генерації НЕ треба продовжувати з останнього розміру div.

function createBoxes(amount) {
  // let size = 30; // за умовами задачи не зрозуміло чи потрібно при повторной генерації (без destroy) починати з size = 30 чи треба продовжувати з останнього розміру div.

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    //
    // boxes.appendChild(div); // чомусь і так і так працює
    //
    boxes.append(div); // чомусь і так і так працює
    //
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);

// --------------
// console.dir();
// console.log();
