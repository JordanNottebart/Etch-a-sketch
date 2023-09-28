let container = document.getElementById("grid-container");

function makeGrid(gridSize) {
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const row = document.createElement("div");
        row.className += "row";
        container.appendChild(row);

        for (let column = 0; column < gridSize; column++) {
            const cell = document.createElement("div");
            cell.className += "cell";
            row.appendChild(cell);
        }
    }
}

makeGrid(16);

container.addEventListener("mouseover", e => {
    if (e.target.classList.contains("cell")) {
        e.target.classList.add("hovered");
    }
});

let cells = document.getElementsByClassName("cell");
let rows = document.getElementsByClassName("row");

function resetGrid() {
    let isPossible = false;
    let gridSize; 

    while (!isPossible) {
        gridSize = prompt("Give a number of squares");

        if (gridSize <= 100 && gridSize > 0) {
            isPossible = true;
            clearGrid();
            makeGrid(gridSize);
        }
        else if(gridSize === null){
            isPossible = true;
        }
        else {
            alert("Please give a number between 100 and 1");
        }
    }

    
}

function clearGrid() {
    while (container.firstChild) {
        for (let cellIndex = 0; cellIndex < rows.length; cellIndex++) {
            while (rows[cellIndex].firstChild) {
                rows[cellIndex].removeChild(rows[cellIndex].firstChild);
            }
        }
        container.removeChild(container.firstChild);
    }
}

