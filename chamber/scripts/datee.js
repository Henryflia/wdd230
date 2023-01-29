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