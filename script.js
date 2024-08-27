const GRIDSIDE = 600;
let numberOfSquares = 16;


const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells() {
    for (let i = 0; i < (numberOfSquares * numberOfSquares); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / numberOfSquares) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

createGridCells();