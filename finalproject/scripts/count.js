const numSpecialtyDrinks = localStorage.getItem('numSpecialtyDrinks');
console.log(numSpecialtyDrinks)

const makejuice = document.querySelector("#juice");
let amountofjuices = numSpecialtyDrinks
if (amountofjuices != 0) {
    makejuice.textContent = amountofjuices;
} else {
    makejuice.textContent = `Make your first juice!`;
}
