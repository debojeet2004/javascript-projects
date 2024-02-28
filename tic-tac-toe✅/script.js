let buttons = document.querySelectorAll('.buttons');
let reset = document.querySelector('#reset');
let thanks = document.querySelector('#thanks');
let popup = document.querySelector('.popUp'); 
let result = document.querySelector('#result'); 
let teamid = document.querySelector('#teamid'); 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let turn = true;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(turn){
            button.textContent = 'X';
            turn = false;
        }else{
            button.textContent = 'O';
            turn = true;
        }
        button.disabled = true;
        checkwinners()
    });

});

const checkwinners = () =>{
    for(let patterns of winPatterns){
        let val1 = buttons[patterns[0]].innerText;
        let val2 = buttons[patterns[1]].innerText;
        let val3 = buttons[patterns[2]].innerText;

        if( val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 == val3){
                // console.log('winner', val1);
                buttons.forEach(button => {
                    button.disabled = true;
                })
                setTimeout(() => {
                    popup.style.display = 'flex';
                    teamid.innerText= val1;
                }, 1000);
                
            }
        }
    }
}

reset.addEventListener('click', () => {
    buttons.forEach(button => {
        button.textContent = '';
        button.disabled = false;
    });
});

thanks.addEventListener('click', () => {
    popup.style.display = 'none';
});