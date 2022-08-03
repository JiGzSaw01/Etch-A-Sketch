const container = document.querySelector('#container');
const createGrid = (size)=>{
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('cell');
        container.append(grid);
    }
}
createGrid(16)
