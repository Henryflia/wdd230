const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); 
    displayProphets(data.prophets)
  }
  
  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let birth = document.createElement('p')
      let place = document.createElement('p')
  
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birth.textContent = `Date of Birth: ${prophet.birthdate}`
      place.textContent = `Place of Birth: ${prophet.birthplace}` 
    //   p.textContent = `Children: ${prophet.numofchildren}` 
    //   p.textContent = `Phophet Years: ${prophet.}`   
    //   p.textContent = `Death: ${prophet.birthdate}` 
    //   p.textContent = `Age: ${prophet.birthdate}` 
      
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(h2);
      card.appendChild(birth)  
      card.appendChild(place)  
      card.appendChild(portrait);
      cards.appendChild(card);

    }
    )
} 
getProphetData();