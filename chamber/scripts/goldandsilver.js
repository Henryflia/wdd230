const file = 'json/data.json';

async function getBusinessData() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.prophets); 
    displayBusiness(data)
  }
  getBusinessData()
  
  const displayBusiness = (data) => {
    const grids = document.querySelector('article.grid2 '); 

    
    const member = data.business.filter((memb) => memb.membership === 'Gold' || memb.membership === 'Silver')
    //console.log(special)
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * member.length);  
      let grid = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let address = document.createElement('p')
      let website = document.createElement('a')
      let membership = document.createElement('p')
      let phone = document.createElement('p')
  
      h2.textContent = `${member[randomIndex].name}`;
      address.textContent = `Adress: ${member[randomIndex].address}`
      phone.textContent = `Phone: ${member[randomIndex].phone}` 
      website.textContent = `${member[randomIndex].website}`
      membership.textContent = `Membership: ${member[randomIndex].membership}` 

      
      logo.setAttribute('src', member[randomIndex].image);
      logo.setAttribute('alt', `Logo of ${member[randomIndex].name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '200');
      logo.setAttribute('height', '200');
      website.setAttribute('href', member[randomIndex].website)

      grid.appendChild(h2);
      grid.appendChild(logo);
      grid.appendChild(address) 
      grid.appendChild(phone) 
      grid.appendChild(website)  
      grid.appendChild(membership)  
      grids.appendChild(grid);
      member.splice(randomIndex,1);

    }
} 

            

            


 
      
   
  
 
    
    

