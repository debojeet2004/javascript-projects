var  succmssg = `<i class="fa-solid fa-square-check" style="color: #0cb300;"></i> Successfully Submited`;
var  errormssg = `<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i> Error Occured`;
var  invalidmssg = `<i class="fa-solid fa-circle-exclamation" style="color: #ffd500;"></i> invalid output`;

function ShowTost(msg){
    let tost = document.createElement('div');
    tost.classList.add('tost');
    tost.innerHTML = msg;
    tostbox.appendChild(tost);
    console.log(msg);

    setTimeout(() => {
        tost.remove();
    },3000);
}

let tostbox = document.querySelector('#tostbox');
console.log(tostbox);

let btns = document.querySelectorAll('button');