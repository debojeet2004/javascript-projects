const  inputbox = document.querySelector('#inputbox');
const  serchbtn = document.querySelector('#serchbtn');
const  sound_btn = document.querySelector('#sound_btn');
const  result = document.querySelector('.result');


async function getword() {
    let word = inputbox.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; // api is not good har bar keys badal jata hai 
    try {
        let res =  await fetch(url);
        if (res.status === 404){
            alert("The word is not present in dictionary")
            return;
        }
        let data = await res.json();
        console.log(data);
        result.innerHTML = `
        <div class="word">
            <h2>${inputbox.value}</h2>
            <button id="sound_btn"><span class="material-symbols-outlined">volume_up</span></button>
        </div>
        <div class="dets">
            <p></p>
            <p>${data[0].phonetics[0].text || data[0].phonetics[1].text }</p>
        </div>
        <p>${data[0].meanings[0].definitions[0].definition}</p>`;


        const soundBtn = result.querySelector('#sound_btn');
        soundBtn.addEventListener('click', () => {
            playPronunciation(data[0].phonetics[0].audio || data[0].phonetics[1].audio);
        });
    } catch (err) {
        alert(err.message)
    }
    
    
}


function playPronunciation(audioUrl) {
    const audio = new Audio(audioUrl);
    audio.play();
}


serchbtn.addEventListener('click', ()=>{
    getword();
});