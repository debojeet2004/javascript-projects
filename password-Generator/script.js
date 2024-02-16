const inputbox = document.querySelector('#password');
const rangebox = document.querySelector('#pass_range');
const copy_btn  = document.querySelector('#copy');
const del_btn  = document.querySelector('#del');
const generate  = document.querySelector('#gen');
const plength  = document.querySelector('.p_length span');

const uppercase  = document.querySelector('#uppercase');
const lowercase  = document.querySelector('#lowercase');
const numbers  = document.querySelector('#numbers');
const symbols  = document.querySelector('#symbols');

let lower_Chars = "abcdefghijklmnopqrstuvwxyz";
let upper_Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

function generatePassward (){
    let len = rangebox.value;
    let password = '';
    let allChars = '';
    if(uppercase.checked){
        allChars += upper_Chars;
    }
    if(lowercase.checked){
        allChars += lower_Chars;
    }
    if(numbers.checked){
        allChars += allNumbers;
    }
    if(symbols.checked){
        allChars += allSymbols;
    }
    else {
        alert("bhai check one of the boxes yaar");
        allChars +=" ";
    }
    for(let i=0; i<len; i++){
        let index = Math.floor(Math.random() * allChars.length);
        password += allChars[index];
    }
    return password;

}

generate.addEventListener('click',()=>{
    inputbox.value = generatePassward();
});

rangebox.addEventListener('input',()=>{
    plength.textContent = rangebox.value;
    // console.log(plength.value);
});

copy_btn.addEventListener('click',()=>{
    if(inputbox.value === ''){
        alert('Nothing to Copy');
    }else{
        inputbox.select();
        document.execCommand('copy');
        alert('Password Copied');
    }
});

del_btn.addEventListener("click",()=>{
    inputbox.value = ''
});



