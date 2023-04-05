const currentTemp = document.querySelector('#currenttemp');
const currentcond = document.querySelector('#currentcondition');
// const winds = document.querySelector('#windspeed');
// const windc = document.querySelector('#windchill');
const humi = document.querySelector('#humi');
const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=c52492675b8cb006d3a92aecf168a006"
const forecast = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=c52492675b8cb006d3a92aecf168a006"
async function apiWeather() {
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
  
apiWeather();

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

const firstforecast = document.querySelector('#firstw');
const secondforecast = document.querySelector('#secondw');
const thirdforecast = document.querySelector('#thirdw');

async function apiForescast() {
  try {
    const response = await fetch(forecast);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayForecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
} 
apiForescast()

function displayForecast(forecastdata) {
  console.log(forecastdata)
  // currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}°C</strong>`
  // winds.innerHTML = `<strong>${weatherdata.wind.speed}</strong>`
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
  ];
  function dateString(forecast){
    const date = new Date(forecast);
    const month = date.getMonth();
    const monthname = monthNames[month]
    const day = date.getDate();
    return `${monthname} ${day}`
  }
  const date1 = dateString(forecastdata.list[1].dt_txt)
  const date2 = dateString(forecastdata.list[9].dt_txt)
  const date3 = dateString(forecastdata.list[17].dt_txt)
  firstforecast.innerHTML = `${date1}: High: <strong>${forecastdata.list[1].main.temp_max}°C. </strong> - Low: <strong>${forecastdata.list[1].main.temp_min}°C. </strong> `
  secondforecast.innerHTML =`${date2}: High: <strong>${forecastdata.list[9].main.temp_max}°C. </strong> - Low: <strong>${forecastdata.list[9].main.temp_min}°C. </strong> `
  thirdforecast.innerHTML = `${date3}: High: <strong>${forecastdata.list[17].main.temp_max}°C. </strong> - Low: <strong>${forecastdata.list[17].main.temp_min}°C. </strong> ` 

  // const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  // const description = weatherdata.weather[0].description;
  // weatherIcon.setAttribute('src', iconsrc);
  // weatherIcon.setAttribute('alt', description);
  // currentcond.innerHTML = `<strong>${description.toUpperCase()}</strong>`;
}