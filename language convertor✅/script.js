const selectTag = document.querySelectorAll('select');
const translatebtn = document.querySelector('#translatebtn');
const from = document.querySelector('#from');
const to = document.querySelector('#to');
const copy = document.querySelectorAll('#copy');
const listen = document.querySelectorAll('#listen');

listen[0].addEventListener('click', () => {
    const speech = new SpeechSynthesisUtterance(from.value);
        speech.lang = selectTag[0].value; // Set the language
        window.speechSynthesis.speak(speech);
})
listen[1].addEventListener('click', () => { 
    const speech = new SpeechSynthesisUtterance(to.value);
        speech.lang = selectTag[1].value; // Set the language
        window.speechSynthesis.speak(speech);
})
selectTag.forEach((tag,id) => {
    for(const country_code in countries){
        let selected;
        if(id == 0 && country_code == 'en-GB'){
            selected = "selected";
        } else if(id == 1 && country_code == 'hi-IN'){
            selected = "selected";
        }
        let option  = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML('beforeend', option); // adding options tag indide th select tag 
    }
});
translatebtn.addEventListener('click', () => {
    let text = from.value,
        translate_from = selectTag[0].value,
        translate_to = selectTag[1].value;
    console.log(text, translate_from, translate_to);
    let URL = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translate_from}|${translate_to}`;
    fetch(URL)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            to.value = data.matches[1].translation;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});