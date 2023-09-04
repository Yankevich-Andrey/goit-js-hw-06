const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const size = fontSizeControl.value;
  text.style.fontSize = `${size}px`;
});
