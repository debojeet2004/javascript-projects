const  quote = document.querySelector("#quote");
const  author = document.querySelector("#author");
const  quotebtn = document.querySelector("#quotebtn");
const  copy = document.querySelector("#copy");




let a = "https://api.quotable.io/quotes/random";
async function getQuote() {
    const response = await fetch(a);
    const data = await response.json();
    quote.textContent = data[0].content;
    author.textContent = data[0].author;
}


quotebtn.addEventListener("click", () => {
    getQuote()
});

copy.addEventListener("click", () => {
    let text = quote.textContent + " - " + author.textContent;
    navigator.clipboard.writeText(text);
    alert("Quote copied to clipboard");
});

