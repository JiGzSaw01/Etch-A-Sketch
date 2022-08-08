const container = document.querySelector('#gridContainer');
const gridSizeBtn = document.querySelector('.gridNumber');

let GridSize = 16

const createGrid = (size)=>{
    
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('cell');
        //grid.style.backgroundColor='red';
        grid.onmousemove= function(){
         grid.style.backgroundColor="red";
         console.log('changecolor');
        }
        
        container.append(grid);
    }
}
createGrid(1)
//console.log(createGrid)

const reset =()=>{
    const cell = document.querySelectorAll('.cell')
    cell.forEach(gridCell => gridCell.remove)
   
    
}
const gridSize=() =>{
  gridSizeBtn.addEventListener('click', () =>{
    let sizeBtn = prompt('Enter a number of Grid');
    reset();
    createGrid(sizeBtn)
    
    
  })  
  
}
gridSize()



// make the reset function work
//constrain when slecting the button size it is adding new cell insterad of changing the grid size