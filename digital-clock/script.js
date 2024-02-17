let hrs = document.getElementById('hrs');
let sec = document.getElementById('sec');
let min = document.getElementById('min');
console.log(new Date())
console.log(new Date().getMonth())
console.log(new Date().getDay())
// console.log(new Date().getDate())
setInterval(() => {
    let time = new Date();
    hrs.innerHTML = (time.getHours()<10? "0" : "") + time.getHours();
    min.innerHTML = (time.getMinutes()<10? "0" : "") + time.getMinutes();
    sec.innerHTML = (time.getSeconds()<10? "0" : "") + time.getSeconds();
},1000);

