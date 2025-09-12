const grid = document.querySelector('.grid');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    grid.innerHTML = ''; // Clear existing grid

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');

        square.style.flex = `0 0 calc(100% / ${size})`; // Set width based on grid size
        square.style.aspectRatio = '1 / 1';

        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });

        grid.appendChild(square);
    }
}

createGrid(16); // Default grid size

resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):");
    if (newSize === null) return; // User cancelled prompt

    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Invalid size. Please enter a number between 1 and 100.");
        return;
    }

    createGrid(newSize);
});