const url2 = "json/data.json"
async function getFruitsData() {
    const response = await fetch(url2);
    const data = await response.json();
    // console.table(data.namw); 
    displayFruits(data)
  }
getFruitsData()

const displayFruits = (data) => {
    const selectedfruits = document.querySelector('fruit1');

    const fruits = data.name;
    console.log(fruits)
    const select1 = document.getElementById("fruit1");
    const select2 = document.getElementById("fruit2");
    const select3 = document.getElementById("fruit3");

    data.forEach((fruit) => {
        const option = document.createElement("option");
        option.value = fruit.name;
        option.text = fruit.name;
        select1.appendChild(option);
    })
.catch((error) => console.log(error))
}

