// Elements
const container = document.querySelector("#container");
const gridSizeInput = document.querySelector("#grid-size-input");
const gridSizeButton = document.querySelector("#grid-size-button");

// function will create grid size based off input given
function createGrid(gridSize) {
  const containerChildren = document.querySelectorAll("#container > div");
  // delete current grid if there is one
  if (containerChildren.length > 0) {
    for (const child of containerChildren) {
      child.remove();
    }
  }

  for (let i = 0; i < gridSize ** 2; i++) {
    let newDiv = document.createElement("div");
    let newDivSize = Math.floor(960 / gridSize) + "px";

    newDiv.style.width = newDivSize;
    newDiv.style.height = newDivSize;
    newDiv.style["flex"] = `0 0 ${newDivSize}`;
    newDiv.classList.add("container-child");

    container.appendChild(newDiv);
  }
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
      ? createGrid(inputValue)
      : alert("Invalid input. Please enter a number from 1-100.");
  } else {
    alert("Invalid input. Please enter a number.");
  }

  gridSizeInput.value = "";
});
