function createGrid(size) { //Creates a grid based on size parameter
    const grid = document.querySelector('#grid');
    for(i = 0;  i < size * size; i++) { //based on size, create sqaures and the following attributes
        const square = document.createElement('div');
        const sizeOfSquare = 500/size; //Canvas size is 500px in height, width. Divides dimensions by amount of grid sqaures
        square.classList.add('square');
        square.setAttribute('id', `ID${i}`);//set id of square
        square.style.height = `${sizeOfSquare}px`; //set grid sqaure height and width
        square.style.width = `${sizeOfSquare}px`;
        square.onmouseover = function setColor() { 
            square.style.backgroundColor = 'black';
        };
        
        grid.appendChild(square); 
    }
    
    const gridBody = document.querySelector('.grid-body'); // display grid size info
    const sizeInfo = document.querySelector('#size-info');
    sizeInfo.textContent = `${size} X ${size}`;
    gridBody.appendChild(sizeInfo);
    
    
}
function resetGrid() { //function to let user reset grid
    const squares = document.querySelectorAll('.square')
    console.log(squares);
    squares.forEach((square) => {
        square.style.backgroundColor = 'transparent';
    })
}
function deleteGrid() {//function to delete the grid once a new grid has been created
    const grid = document.querySelector('#grid');
    while(grid.firstChild) {
        grid.firstChild.remove();
    }
}
function setRGB() {//Sets rgb mode
    const squares = document.querySelectorAll('.square')
    
    squares.forEach((square) => {
        square.onmouseover = function setColor() {
        square.style.backgroundColor = getRandomColor();
    }
    });
}
function getRandomColor() { //returns random rgb value
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}
function setBlack() { //set black mode
    const squares = document.querySelectorAll('.square')
    
    squares.forEach((square) => {
        square.onmouseover = function setColor() {
        square.style.backgroundColor = 'black';
    }
    });
}



const sizeBtn = document.querySelector('#size-prompt'); //provide functionaily to size button, allows user set size of grid limited to 100
sizeBtn.addEventListener('click', () => {
    const size = prompt('Set the size of the grid');
    if(size <= 100 && size > 1 && size % 1 === 0) {
        deleteGrid();
        createGrid(size);
    }
    else 
        alert('please enter a whole number between 2 and 100');
});
const resetBtn = document.querySelector('#reset'); //reset button
resetBtn.addEventListener('click', () => {
    resetGrid();
});
const rgbBtn = document.querySelector('#rgb'); //rgb button
rgbBtn.addEventListener('click', () => {
    setRGB();
});

const blackBtn = document.querySelector('#black'); //black button
blackBtn.addEventListener('click', () => {
    setBlack();
});




    
