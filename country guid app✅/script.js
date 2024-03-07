const input = document.querySelector('#input');
const search = document.querySelector('#search');
const dets = document.querySelector('.dets');
const img = document.querySelector('.img');

async function countrydetails() {
    try {
        let Country_name = input.value;
        const url = await fetch(`https://restcountries.com/v3.1/name/${Country_name}?fullText=true`);
        const data = await url.json();
        let capital = data[0].capital[0];
        let continent = data[0].continents[0];
        let currencies = data[0].currencies;
        let firstCurrencyKey = Object.keys(currencies)[0];
        let currencyInfo = currencies[firstCurrencyKey];
        let currencyName = currencyInfo.name;
        let currencySymbol = currencyInfo.symbol;
        let population = data[0].population;
        let flag = data[0].flags.png;
        let Language = data[0].languages;
        let languages = Object.keys(Language).join(' ');
        dets.innerHTML = `<p>Capital:   <span>${capital}</span></p>
        <p>Continent:   <span>${continent}</span></p>
        <p>Population:  <span>${population}</span></p>
        <p>Currency:    <span>${currencySymbol} ${currencyName}</span></p>
        <p>Language:    <span>${languages}</span></p>`;
        img.innerHTML = `<img src="${flag}" alt="">
        <p>${Country_name}</p>`;
        // Clear any previous error messages
        document.querySelector('.mssg').innerHTML = '';
    } catch (error) {
        console.error('Error:', error);
        // Display error message to the user
        document.querySelector('.mssg').innerHTML = '<p>Invalid Input or Country Not Found</p>';
        // Clear the image container
        img.innerHTML = '';
        // Clear the details container
        dets.innerHTML = '';
    }
}

search.addEventListener('click', countrydetails);
