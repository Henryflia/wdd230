const temp = document.querySelector("#temperature").textContent
const windspeed = document.querySelector("#windspeed").textContent

if(temp <=50 && windspeed >3.0){
    let cal =  35.74 + 0.6215 * temp - 35.75 * (windspeed ** 0.16) + 0.4275 * temp * (windspeed ** 0.16)
    const windchill = document.querySelector("#windchill").textContent = Math.round(cal)
}
else{
    document.querySelector("windchill").value = N/A
}