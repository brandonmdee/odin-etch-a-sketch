const grid = document.querySelector('.grid');
const clear = document.querySelector('#clear');

let x = 16 ;
let y = (1 / x) * 100;

const etch = function() {
    
for (z = 0; z < x * x; z++) {
    let square = document.createElement('div');
    grid.appendChild(square);
    square.classList.add('square');
    square.style.width = `${y}%`;
    square.style.height = `${y}%`;
    square.addEventListener('mousemove', () => {
        square.setAttribute("id", "filled");
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

clear.addEventListener('click', clearGrid);


