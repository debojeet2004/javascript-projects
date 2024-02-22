const display = document.querySelector('#display');
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const reset = document.querySelector('#reset');

console.log(display.innerText);


reset.addEventListener('click', () => {
    display.innerText = '-';
    num = 0;
});

var num = 0;
add.addEventListener('click', () => {
    num =num +1;
    display.innerText = num;
});
sub.addEventListener('click', () => {
    display.innerText = display.innerText-1;
});