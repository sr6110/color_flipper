import "./styles.css";

const app = document.getElementById("app");

const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");
colorFlipper();

btn.addEventListener("click", () => {
  colorFlipper();
});

// function to generate the random color
function generateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

// function to change the background color
function changeBGColor(element, bgColor) {
  element.style.backgroundColor = bgColor;
}

function colorFlipper() {
  const rgbArr = generateRandomColor();
  const isAllLessThan100 = rgbArr.every((value) => value > 100);
  const color = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
  changeBGColor(app, color);
  colorCode.innerText = color;
  changeBGColor(btn, color);
  app.style.color = isAllLessThan100 ? "black" : "white";
}
