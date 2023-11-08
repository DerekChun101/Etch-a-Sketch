function createGrid(size) {
    const grid = document.querySelector('#grid');
    for(i = 0;  i < size * size; i++) {
        const square = document.createElement('div');
        const sizeOfSquare = 500/size; 
        square.classList.add('square');
        square.setAttribute('id', `ID${i}`);
        square.style.height = `${sizeOfSquare}px`;
        square.style.width = `${sizeOfSquare}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        
        grid.appendChild(square); 
    }
    const gridBody = document.querySelector('.grid-body');
    const sizeInfo = document.querySelector('#size-info');
    sizeInfo.textContent = `${size} X ${size}`;
    gridBody.appendChild(sizeInfo);
}
function resetGrid() {
    const squares = document.querySelectorAll('.square')
    console.log(squares);
    squares.forEach((square) => {
        square.style.backgroundColor = 'transparent';
    })
}
function deleteGrid() {
    const grid = document.querySelector('#grid');
    while(grid.firstChild) {
        grid.firstChild.remove();
    }
}

const sizeBtn = document.querySelector('#size-prompt');
sizeBtn.addEventListener('click', () => {
    const size = prompt('Set the size of the grid');
    if(size <= 50 && size > 0 && size % 1 === 0) {
        deleteGrid();
        createGrid(size);
    }
    else 
        alert('please enter a whole number between 1 and 50');
});
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    resetGrid();
});




    
