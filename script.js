const grid = document.querySelector('#grid');
for(i = 0;  i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('id', i);
    square.addEventListener('mouseover', () => {
        square.classList.add('painted');
    })
    grid.appendChild(square); 

}




    
