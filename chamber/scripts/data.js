

// ----------------------------------------


const file = 'json/data.json';

async function getBusinessData() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.prophets); 
    displayBusiness(data.business)
  }
  
  const displayBusiness = (business) => {
    const grids = document.querySelector('article.grid'); // select the output container element
  
    business.forEach((businessm) => {
      let grid = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let address = document.createElement('p')
      let website = document.createElement('a')
      let membership = document.createElement('p')
      let phone = document.createElement('p')
  
      h2.textContent = `${businessm.name}`;
      address.textContent = `Adress: ${businessm.address}`
      phone.textContent = `Phone: ${businessm.phone}` 
      website.textContent = `${businessm.website}`
      membership.textContent = `Membership: ${businessm.membership}` 

      
      logo.setAttribute('src', businessm.image);
      logo.setAttribute('alt', `Logo of ${businessm.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '200');
      logo.setAttribute('height', '200');
      website.setAttribute('href', businessm.website)

      grid.appendChild(h2);
      grid.appendChild(logo);
      grid.appendChild(address) 
      grid.appendChild(phone) 
      grid.appendChild(website)  
      grid.appendChild(membership)  
      grids.appendChild(grid);

    }
    )
} 
getBusinessData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}