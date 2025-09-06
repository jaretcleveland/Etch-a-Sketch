const grid = document.querySelector('.grid');
const size = 16;

for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}