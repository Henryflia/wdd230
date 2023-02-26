// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear() 

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// banner

if (now.getDay() === 1 || now.getDay() === 2) {
    document.getElementById("banner").style.display = "block";
}

// ------------Join Hidden Date-----------
var d = new Date();

document.getElementById("date").value = d.toDateString();

var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
var c = document.getElementById("time").value = hours + ":" + mins + ":" + seconds;