let contenedor = document.querySelector('.container'); 
let bloque     = document.querySelector('.bloque');

let numbers    = document.querySelectorAll('.number');
let span       = document.querySelector('span');
let button     = document.querySelector('button');

let a;

function changeNumber() { 
    numbers.forEach((element) => {element.classList.remove('active')});
    a = this.textContent;
    this.classList.add('active');
}
numbers.forEach(element => { element.addEventListener('click', changeNumber)});

button.addEventListener('click', function () { 
    contenedor.style.display = 'none';
    span.textContent = a;
    bloque.style.display = 'flex';
})