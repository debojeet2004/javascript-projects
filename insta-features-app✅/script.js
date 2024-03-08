var array = [
    {dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {dp:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {dp:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {dp:"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

]

var refer =  "";

array.forEach(function(elem, idx){
    
    refer += `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`
})
document.querySelector(".story_box").innerHTML = refer;
document.querySelector(".story_box").addEventListener("click", function(dets){
    document.querySelector(".open_story").style.display = "block";
    setTimeout(function(){
        document.querySelector(".open_story").style.display = "none";
    },2500)
    document.querySelector(".open_story").style.backgroundImage = `url(${array[dets.target.id].story})`;
});
// console.log(refer);


const img = document.querySelector("#imgg");
const heart = document.querySelector("#i");
console.log(heart);

img.addEventListener("dblclick", function (){
    console.log("helo")
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = ".9";
    setTimeout(()=> {
        heart.style.transform = "translate(-50%, -50%) scale(0)";
        heart.style.opacity = "0";

    },700)
})
