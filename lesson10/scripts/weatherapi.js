const currenttemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const captiondesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=c52492675b8cb006d3a92aecf168a006"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); //
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
    currenttemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const description = weatherdata.weather[0].description;
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', description);
    weathericon.setAttribute('loading', 'lazy')
    captiondesc.textContent = description.toUpperCase();
}
