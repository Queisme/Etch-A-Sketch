const body = document.querySelector('body');
const header1 = document.querySelector('h1');
const main = document.querySelector('.main');
body.appendChild(header1);
body.appendChild(main);
const box = document.createElement('div');
main.appendChild(box);
box.classList.add('box');
box.style.border = '2px solid black';
box.style.height = '400px';
box.style.width = '400px';
box.style.boxShadow = '2px 2px 2px black';
const button = document.createElement('button');
button.textContent = 'Make the magic happen';
body.appendChild(button);
body.insertBefore(button, main);
//button.addEventListener('onclick', prompt('Pick a number between 1 - 100'));

let x; //make this variable ajustable by user


function blocks(x = 10, y = 10) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            const cells = document.createElement('div');
            cells.classList.add('cells');
            box.appendChild(cells);
            cells.style.border = '1px solid black';
            cells.addEventListener('mouseenter', () => cells.style.backgroundColor = 'black');
        };
    };
};

blocks();