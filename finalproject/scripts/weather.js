const currentTemp = document.querySelector('#currenttemp');
const currentcond = document.querySelector('#currentcondition');
// const winds = document.querySelector('#windspeed');
// const windc = document.querySelector('#windchill');
const humi = document.querySelector('#humi');
const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=c52492675b8cb006d3a92aecf168a006"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
} 
  
apiFetch();

function displayResults(weatherdata) {
    console.log(weatherdata)
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}°C</strong>`
    // winds.innerHTML = `<strong>${weatherdata.wind.speed}</strong>`
    humi.innerHTML = `<strong>${weatherdata.main.humidity}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const description = weatherdata.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    currentcond.innerHTML = `<strong>${description.toUpperCase()}</strong>`;
}
