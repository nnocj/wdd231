const url = 'https://nnocj.github.io/wdd231/chamber/data/places.json';
const cards = document.querySelector('.place-cards');

// Display Places Function
const displayPlaces = (places) => {
    places.forEach((place) => {
        const card = document.createElement('section');
        const title = document.createElement('h2');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const address = document.createElement('address');
        const description = document.createElement('p');
        const button = document.createElement('a');

        title.textContent = place.name;
        img.setAttribute('src', place.image);
        img.setAttribute('alt', `Image of ${place.name}`);
        img.setAttribute('loading', 'lazy');
        img.classList.add('place-image');

        figure.appendChild(img);
        address.textContent = place.address;
        description.textContent = place.description;
        button.textContent = 'Learn More';
        button.setAttribute('href', place.wikipedia);
        button.setAttribute('target', '_blank');
        button.classList.add('learn-more');

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cards.appendChild(card);
    });
};

// Fetch Places JSON
async function getPlacesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data.places);
}

getPlacesData();

// Toggle Grid and Block View
function setGridView() {
    document.querySelector(".place-cards").className = "place-cards grid";
}

function setBlockView() {
    document.querySelector(".place-cards").className = "place-cards block";
}

// here is my date tracking with localStorage function
function displayVisitMessage() {
    const sidebar = document.querySelector(".visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const diffTime = now - Number(lastVisit);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 1) {
            message = "Back so soon! Awesome!";
        } else if (diffDays === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${diffDays} days ago.`;
        }
    }

    sidebar.textContent = message;
    localStorage.setItem("lastVisit", now);
}

displayVisitMessage();

//when the page is scrolled down, the header should change to the settings I gave it.
// But then when the page is up or not scrolled down, it should be transparent.
window.addEventListener(('scroll'), () => {
    let header = document.querySelector('header');
    let logoText = document.querySelectorAll('#vertical-align');
    let headNav = document.querySelector('#head-nav');
    if (window.scrollY > 1){
        header.style.backgroundColor = 'rgb(219, 225,  229)';
        header.style.color= 'rgb(2,20,13)';
        /*logoText.style.color = 'rgb(2,20,13)';*/
        headNav.style.color = 'rgb(2,20,13)'; 
        
    }

    else {
        header.style.backgroundColor = 'transparent';
        header.style.color = 'rgb(219,224,229)';
        logoText.style.color = 'rgb(219,224,229)';
        headNav.style.color = 'rgb(219,224,229)'; 
    }
})
