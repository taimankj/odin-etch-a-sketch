// Elements
const container = document.querySelector("#container");
const containerChildren = document.querySelectorAll("#container > div");
const gridSizeInput = document.querySelector("#grid-size-input");
const gridSizeButton = document.querySelector("#grid-size-button");

// Loop to create 16 by 16 div container
for (let i = 0; i < 16 ** 2; i++) {
  let newDiv = document.createElement("div");
  let newDivSize = Math.floor(960 / 16) + "px";
  newDiv.style.width = newDivSize;
  newDiv.style.height = newDivSize;
  newDiv.style["flex"] = `0 0 ${newDivSize}`;
  newDiv.classList.add("container-child");
  container.appendChild(newDiv);
}

// event listener listens to mouse hover actions on div elements and changes the background-color when event fires (event bubbling makes this happen)
container.addEventListener(
  "mouseover",
  (e) => (e.target.style["background-color"] = "black"),
);

// event listener listens process input when button is clicked on
// will check if input is 1-100 and is a number
gridSizeButton.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = +gridSizeInput.value;
  if (!isNaN(inputValue)) {
    inputValue >= 1 && inputValue <= 100
      ? alert(`Number entered: ${inputValue}`)
      : alert("Invalid input. Please enter a number from 1-100.");
  } else {
    alert("Invalid input. Please enter a number.");
  }
  gridSizeButton.focus();
});
