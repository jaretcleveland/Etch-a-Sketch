const grid = document.querySelector('.grid');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    grid.innerHTML = '';  // Clear existing grid

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');

        square.style.flex = `0 0 calc(100% / ${size})`;  // Set width based on grid size
        square.style.aspectRatio = '1 / 1';

        square.dataset.hoverCount = 0; // Track hover count for progressive darkening

        square.addEventListener('mouseover', () => {  // Change to random color on hover
            let count = parseInt(square.dataset.hoverCount);

            if (count === 0) {  // First hover: random color
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.dataset.color = `rgb(${r}, ${g}, ${b})`;
                square.style.backgroundColor = square.dataset.color;
                square.style.opacity = 0.1;
            } else if (count < 10) {  // Subsequent hovers: increase opacity
                square.style.opacity = Math.min(1, (count + 1) * 0.1);  // increase opacity by 0.1 each time, maxing at 1
            } 
            square.dataset.hoverCount = count + 1; // Increment hover count
        });
        
        grid.appendChild(square);
    }
}

createGrid(16); // Default grid size

resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):");
    if (newSize === null) return;  // User cancelled prompt

    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Invalid size. Please enter a number between 1 and 100.");
        return;
    }

    createGrid(newSize);
});