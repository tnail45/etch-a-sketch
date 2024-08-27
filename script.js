const GRIDSIDE = 600;
let squaresPerSide = 16;


const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");


sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells() {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthAndHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for (let i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthAndHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

createGridCells();