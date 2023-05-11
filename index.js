let sizeOfGrid = 16;
const container = document.querySelector(".container");
const resizeButton = document.querySelector("button");

const createGrid = (amtOfGrids) => {
  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < amtOfGrids; j++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      row.appendChild(gridBox);
    }

    container.appendChild(row);
  }
};

resizeButton.addEventListener("click", () => {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  removeAllChildNodes(container);
});

createGrid(sizeOfGrid);

const boxes = document.querySelectorAll("div");

boxes.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.background = "gray";
    div.style.transition = "all .45s";
  });
});
