const url2 = "json/data.json"
let data;
async function getFruitsData() {
    const response = await fetch(url2);
    data = await response.json();
    console.table(data); 
    displayFruits(data)
  }
getFruitsData()


const displayFruits = (data) => {
    const select1 = document.getElementById("fruit1");
    const select2 = document.getElementById("fruit2");
    const select3 = document.getElementById("fruit3");

    data.forEach((fruit) => {
        const option1 = document.createElement("option");
        option1.value = fruit.name;
        option1.text = fruit.name;
        select1.appendChild(option1);
        const option2 = document.createElement("option");
        option2.value = fruit.name;
        option2.text = fruit.name;
        select2.appendChild(option2);
        const option3 = document.createElement("option");
        option3.value = fruit.name;
        option3.text = fruit.name;
        select3.appendChild(option3);
    })

}
document.getElementById("drinkform").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstn").value;
    var email = document.getElementById("emails").value;
    var phone = document.getElementById("phones").value;
    var fruit1 = document.getElementById("fruit1").value;
    var fruit2 = document.getElementById("fruit2").value;
    var fruit3 = document.getElementById("fruit3").value;
    var specialInstructions = document.getElementById('inputArea').value;
    console.log(firstName)
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCalories = 0;
    
    data.forEach(function(fruit) {
        if (fruit.name === fruit1) {
            totalCarbs += fruit.nutritions.carbohydrates;
            console.log(totalCarbs)
            console.log(fruit.nutritions.carbohydrates)
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
        }
        if (fruit.name === fruit2) {
            totalCarbs += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
        }
        if (fruit.name === fruit3) {
            totalCarbs += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
        }
    });

    var outputString = "<h2>Order Summary</h2>";
    outputString += "<p><strong>First Name:</strong> " + firstName + "</p>";
    outputString += "<p><strong>Email:</strong> " + email + "</p>";
    outputString += "<p><strong>Phone Number:</strong> " + phone + "</p>";
    outputString += "<p><strong>Fruit 1:</strong> " + fruit1 + "</p>";
    outputString += "<p><strong>Fruit 2:</strong> " + fruit2 + "</p>";
    outputString += "<p><strong>Fruit 3:</strong> " + fruit3 + "</p>";
    outputString += "<p><strong>Special Instructions:</strong> " + specialInstructions + "</p>";
    outputString += "<p><strong>Order Date:</strong> " + new Date().toLocaleString() + "</p>";
    outputString += "<h3>Nutrition Information</h3>";
    outputString += "<p><strong>Total Carbs:</strong> " + totalCarbs + "g</p>";
    outputString += "<p><strong>Total Protein:</strong> " + totalProtein + "g</p>";
    outputString += "<p><strong>Total Fat:</strong> " + totalFat + "g</p>";
    outputString += "<p><strong>Total Sugar:</strong> " + totalSugar + "g</p>";
    outputString += "<p><strong>Total Calories:</strong> " + totalCalories + "cal</p>";

    document.getElementById("output").innerHTML = outputString;
});






