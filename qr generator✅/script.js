const textinput = document.querySelector('#textInput');
const btn = document.querySelector('#create');
const imgbox = document.querySelector('.imgbox');
const del = document.querySelector('#delete');
// console.log(del);

function generateQRCode () {
    let text = textinput.value; 
    let qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    imgbox.innerHTML = `<img src="${qr}" id="qrimg" alt="">`;
}
btn.addEventListener("click", function(e) {
    generateQRCode()
    
});

del.addEventListener("click", function(e) {
    imgbox.innerHTML = ``;
    textinput.value= " ";
});