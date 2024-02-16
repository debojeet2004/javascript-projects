// const  image = document.getElementsByClassName('logo');
const  searchbox = document.getElementById('textbox');
const  searchbtn = document.querySelector('.searchbtn');


// console.log(image);

const  weatherStatus = document.getElementById('weather-status');
const  temp_num = document.getElementById('temp_num');
const  city_name = document.getElementById('city_name');
const  humid_percent = document.getElementById('humid_percent');
const  windspeed = document.getElementById('windspeed');
const logo = document.querySelector('.logo');


const apiKey = "Your Api key will come here";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";



async function CheckWeather (city){
    const res = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data = await res.json();
    // console.log(data);

    city_name.textContent = data.name ;
    temp_num.textContent = Math.round(data.main.temp);
    humid_percent.textContent =`${data.main.humidity}%`;
    windspeed.textContent =`${data.wind.speed}Km/hrs`;
    weatherStatus.textContent = data.weather[0].main;

    if(data.weather[0].main =="Clouds"){
        logo.innerHTML =`<img  src="`+"./images/clouds.png"+`">`;
    }
    else if(data.weather[0].main =="Clear"){
        logo.innerHTML =`<img  src="`+"./images/clear.png"+`">`;
    }
    else if(data.weather[0].main =="Drizzle"){
        logo.innerHTML =`<img  src="`+"./images/drizzle.png"+`">`;
    }
    else if(data.weather[0].main =="Mist"){
        logo.innerHTML =`<img  src="`+"./images/mist.png"+`">`;
    }
    else if(data.weather[0].main =="Rain"){
        logo.innerHTML =`<img  src="`+"./images/rain.png"+`">`;
    }
    else if(data.weather[0].main =="Snow"){
        logo.innerHTML =`<img  src="`+"./images/snow.png"+`">`;
    }
    else {
        logo.innerHTML =`<img  src="`+"./images/mist.png"+`">`;
    }
}

searchbtn.addEventListener('click', () => {
    CheckWeather(searchbox.value)
});
