const container = document.querySelector('#gridContainer');
const gridSizeBtn = document.querySelector('.gridNumber');
let defaultGridSize = 16
function gridSize (){
    gridSizeBtn.addEventListener('click', function(e){
       let num= prompt('Enter a number of Grid')
        
    })
    
 
}
gridSize()





const createGrid = (size)=>{
    
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('cell');
        //grid.style.backgroundColor='red';
        grid.onmouseover= function(){
         grid.style.backgroundColor="red";
         console.log('changecolor');
        }
        
        container.append(grid);
    }
}
createGrid(defaultGridSize)
console.log(createGrid)
