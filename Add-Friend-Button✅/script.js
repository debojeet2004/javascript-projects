const sts = document.querySelector("#card h5");
const button = document.querySelector("#btn-box  button");

var check = 0;

button.addEventListener("click", () => {

    if (check == 0) {
    sts.textContent = "Friends🙂";
    sts.style.color = "green";
    button.innerHTML = " Remove";
    check = 1
    }else {
    sts.textContent = "Stranger🥲";
    sts.style.color = "black";
    button.innerHTML = " Add Friend";
    check = 0
    }
    
});