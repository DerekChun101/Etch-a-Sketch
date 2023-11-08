function createGrid(size) {
    const grid = document.querySelector('#grid');
    for(i = 0;  i < size * size; i++) {
        const square = document.createElement('div');
        const sizeOfSquare = 500/size; 
        square.classList.add('square');
        square.setAttribute('id', i);
        square.style.height = `${sizeOfSquare}px`;
        square.style.width = `${sizeOfSquare}px`;
        square.addEventListener('mouseover', () => {
            square.classList.add('painted');
        });
        
        grid.appendChild(square); 

    }
}

const sizeBtn = document.querySelector('#size-prompt');
sizeBtn.addEventListener('click', () => {
    const size = prompt('Set the size of the grid');
    createGrid(size);
})




    
