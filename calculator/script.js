const preview = document.querySelector(".prev");
const output = document.querySelector(".current");
const fun = document.querySelectorAll("#fun");
const del = document.querySelectorAll("#del");
const num = document.querySelectorAll("#num");
const equals = document.querySelectorAll("#equal");
// console.log(eval(preview.currentValuevalue));
// AC button
del[0].addEventListener("click", function (){
    preview.value = "";
    output.textContent = "";

});

// DEL button
del[1].addEventListener("click", function (){
    var currentValue = preview.value;
    var nvalue = currentValue.slice(0, -1);
    preview.value = nvalue;
});

//NUMBERS BUTTON
num.forEach(button => {
    button.addEventListener("click", () =>{
        var valuee = button.innerHTML;
        preview.value += valuee;
    });
})

// OPERATOR BUTTONS
fun.forEach(button => {
    button.addEventListener("click", () =>{
        var value = button.innerHTML;
        preview.value += value;
        
    });
})

equals[0].addEventListener("click", () =>{
    valuee = preview.value;
    output.textContent = eval(valuee) ;
    
});
