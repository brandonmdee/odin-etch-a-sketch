const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const slider = document.querySelector('.slidecontainer');
const newGrid = document.querySelector('#newGrid');
const output = document.querySelector('output');

let x = 16;
let y = (1 / x) * 100;
let moused = 0;


body.addEventListener('mousedown', () => {
  moused++;
  
});
body.addEventListener('mouseup', () => {
  moused = 0;
  
});

const etch = function() {
    
for (z = 0; z < x * x; z++) {
  
    let square = document.createElement('div');
    grid.appendChild(square);
    square.classList.add('square','gridlines');
    square.style.width = `${y}%`;
    square.style.height = `${y}%`;
    square.addEventListener('mouseover', () => {
      
      square.addEventListener('mousedown', () => {
        
        square.style.backgroundColor = `black`;
      });
                if (moused > 0) {
                square.style.backgroundColor = `black`;
                }
                  
    }); 
    } 
  
}

etch();
const clearGrid = function() {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        
   etch();
}
const reseter = function () {
    x = output.textContent;
    y = (1 / x) * 100;
    clearGrid();
}

clear.addEventListener('click', clearGrid);

newGrid.addEventListener('click', reseter);
    