const btn = document.querySelector('#btn');
const note_box = document.querySelector('.note_box');

btn.addEventListener('click', () => {
    addnote();
});

function addnote() {
    const paragraph = document.createElement('p');
    paragraph.classList.add('input');
    paragraph.contentEditable = true;
    paragraph.innerHTML = '&nbsp;'; // Set initial non-breaking space
    
    const deleteSpan = document.createElement('span');
    deleteSpan.classList.add('del');
    deleteSpan.contentEditable = false;
    deleteSpan.textContent = 'Delete';

    paragraph.appendChild(deleteSpan);
    note_box.appendChild(paragraph);

};

note_box.addEventListener('click', function(e) {
    const target = e.target;
    if (target.classList.contains('del')) {
        target.parentElement.remove();
    }
});