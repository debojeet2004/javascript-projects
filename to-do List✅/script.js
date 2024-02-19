const input_box = document.getElementById("input_box");
const add_btn = document.getElementById("add_btn");
const task_box = document.querySelector(".task_box");

function tasks() {
    task_box.innerHTML +=
        `<div class="list">  
        <button class="checkbox"> <img src="./images/radio.png"> </button> 
        <p class="inputArea">${input_box.value}</p> 
        <button class="del"> <img src="./images/cancel.png"> </button>
        </div>`;
    const checkboxes = document.querySelectorAll(".checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', function() {
                const parentDiv = this.parentElement;
                parentDiv.querySelector('.inputArea').classList.toggle('checked');
                const checkboxImg = this.querySelector('img');
                // console.log(checkboxImg);
                if (parentDiv.querySelector('.inputArea').classList.contains('checked')) {
                    checkboxImg.src = "./images/checked.png";
                    savedata();
                } else {
                    checkboxImg.src = "./images/radio.png";
                    savedata();
                }
            });
        });
    const dels = document.querySelectorAll(".del");
        dels.forEach(del => {
            del.addEventListener('click', ()=>{
                del.parentElement.remove();
                savedata();
            })
            
        });
    
}


function addTask(){
    if(input_box.value === ""){
        alert("Please enter a task");
    }else{
        tasks()
    }
    input_box.value = "";
}

add_btn.addEventListener("click",()=>{
    addTask();
});

function savedata () {
    localStorage.setItem("data", task_box.innerHTML);
    console.log("data saved");
    console.log(localStorage.getItem("data"));
}
function showdata () {
    task_box.innerHTML = localStorage.getItem("data");
    
}
//  showdata (); // ya fucntion run karne se ek bar to toggle ho raha hai but phir problem aa rha hai 