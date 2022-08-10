const container = document.querySelector('#gridContainer');
const gridSizeBtn = document.querySelector('.gridNumber');

let GridSize = 16

const createGrid = (size)=>{
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
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
createGrid(16)
//console.log(createGrid)

//const reset =()=>{
   // const cell = document.querySelectorAll('.cell')
    //cell.forEach((gridCell)=>{gridCell.remove})
    
    
    
//}

const reset = () =>{
  const cell = document.querySelectorAll('.cell');
  cell.forEach((gridCell) =>{
    gridCell.remove()
  })

}
const gridSize=() =>{
  gridSizeBtn.addEventListener('click', () =>{
    let sizeBtn = prompt('Enter a number of Grid');

    if(sizeBtn > 100){
      alert("Max Grid is 100x100 only!");
      reset();
      createGrid(16);
    }else{
      reset();
      createGrid(sizeBtn);
    }
    
    
  })  
  
}
gridSize()



// center the grid
