let container = document.getElementById("grid-container");

function makeGrid() {
    for (let rowIndex = 0; rowIndex < 16; rowIndex++) {
        const row = document.createElement("div");
        row.className += "row";
        container.appendChild(row);

        for (let column = 0; column < 16; column++) {
            const cell = document.createElement("div");
            cell.className += "cell";
            row.appendChild(cell);
        }
    }
}

makeGrid();

container.addEventListener("mouseover", e => {
    e.target.classList.add("hovered");
});



