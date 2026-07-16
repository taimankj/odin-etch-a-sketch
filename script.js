// Elements
const container = document.querySelector("#container");
const containerChildren = document.querySelectorAll("#container > div");

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
