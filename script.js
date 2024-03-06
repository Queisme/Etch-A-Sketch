const body = document.querySelector('body');
const header1 = document.querySelector('h1');
const main = document.querySelector('.main');
const container = document.createElement('div');
const button = document.createElement('button');
body.appendChild(header1);
body.appendChild(main);
body.appendChild(container);
body.appendChild(button);
body.insertBefore(button, main);
container.classList.add('container');
button.classList.add('magic');
button.textContent = 'Magic';
container.style.height = '400px';
container.style.width = '400px';
container.style.border = '3px solid black';
container.style.display = 'flex';
container.style.justifyContent = 'space-evenly';
container.style.alignItems = 'center';
container.style.flexWrap = 'wrap';

// 400/userInput = height/width (minus a px for the borders)

function makeCells(userInput = 16) {
    const cellSize = (400 / userInput) - 1;
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            const cells = document.createElement('div');
            cells.classList.add('cells');
            container.appendChild(cells);
            cells.style.border = '1px solid black';
            cells.style.height = `${cellSize}px`;
            cells.style.width = `${cellSize}px`;
            cells.addEventListener('mouseenter', () => cells.style.backgroundColor = 'black');
        };
    };
};

makeCells(10);


