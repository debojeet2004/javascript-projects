

let TwoCurrency = []; // from[0]  to[1] 
const currencyLists = document.querySelectorAll("#currency_type") // dom node list - 2

currencyLists.forEach((currencyList, index) => {
    currencyList.addEventListener("change", () => { 
            TwoCurrency[index] = currencyList.value 
    });
})

async function CurrencyInfo(){
    const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
    
    let data = await res.json()
    currencyLists.forEach(currencyList => {
        for (const key in data) {
            if(Object.hasOwnProperty.call(data , key)) {
                const option = document.createElement("option")
                option.value = key
                option.innerText= data[key] === "" ? key : data[key]
                currencyList.append(option)
            }
        }
    })
    
    // console.log(data);
}

CurrencyInfo()


async function CurrencyConvert(){
    const value = document.getElementById("Currency_Input").value
    const resultinput = document.getElementById("result_value")
    currencyLists.forEach(currency => { // node list
        TwoCurrency.push(currency.value) // from to push
    })
    const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${TwoCurrency[0]}.json`)
    let data = await res.json()
    const multiplier  = data[TwoCurrency[0]][TwoCurrency[1]]
    resultinput.value = value * multiplier;
}


function swap (){
    [TwoCurrency[0], TwoCurrency[1]] = [TwoCurrency[1], TwoCurrency[0]];
    currencyLists.forEach((currencyList, index) => {
        currencyList.value = TwoCurrency[index];
    });
    CurrencyConvert();
}

