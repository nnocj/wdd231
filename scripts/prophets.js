const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


const displayProphets = (prophets)=> {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');
        
        
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth - ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth - ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
    
        
        let suffix = '';
        if ((prophet.order == 1) || ((prophet.order % 10 == 1) && (prophet.order > 20))) {
            suffix = 'st'
        }
        else if ((prophet.order == 2) || ((prophet.order % 10 == 2) && (prophet.order > 20))){
            suffix = 'nd'
        }
        else if ((prophet.order == 3) || ((prophet.order % 10 == 3) && (prophet.order > 20))){
            suffix = 'rd'
        }

        else {
            suffix = 'th'
        }
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}. ${prophet.order}${suffix} President of the Church`);
        portrait.setAttribute('loading', 'lazy');
        //portrait.setAttribute('width', '340');
        //portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    
    });
}


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets)
}

getProphetData();