const listenbtn = document.getElementById('listen');
const dropdownbox = document.getElementById('dropdown');
const text_area = document.getElementById('text_area');


let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document .querySelector('select');
// console.log(voiceSelect);
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // console.log(voices);
    voices.forEach(voice => {
        let option = document.createElement('option');
        option.textContent = voice.name + '(' + voice.lang + ')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
};

voiceSelect.addEventListener('change', (e) => {
    // console.log(e.target);
    // console.log(voiceSelect.selectedOptions[0].getAttribute('data-name'));
 // Get the selected voice
let selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
let selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
// let selectedVoice = voices.find(voice => voice.name === e.target.value); // ya kam nahi karta 

 // Update the speech voice
speech.voice = selectedVoice;

});

listenbtn.addEventListener('click', () => {
    speech.text = text_area.value;
    window.speechSynthesis.speak(speech);

});