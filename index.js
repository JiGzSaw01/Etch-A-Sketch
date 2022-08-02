const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('cell');
    container.append(grid);
}