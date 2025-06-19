const url = 'https://nnocj.github.io/wdd231/chamber/data/members.json';
const businessCards = document.querySelector('.business-cards');

const displayFilteredMembers = (members)=> {

    // building the random aspect
    const shuffledMembers = members.sort(()=> Math.random() - 0.5);
    
    shuffledMembers.forEach(member => {
        if (member.membership_level == 3){
            let cardTrack = document.createElement('div');
            let card = document.createElement('section');
            let nameEl = document.createElement('p');
            let phone = document.createElement('p');
            let logo = document.createElement('img');
            let address = document.createElement('p');
            let link = document.createElement('p');
            
            logo.setAttribute('alt', `${member.name} logo`);
            logo.setAttribute('src', member.image_file_name);
            logo.setAttribute('loading', 'lazy');
            address.textContent = member.address;
            link.textContent = member.website_url;
            phone.textContent = member.phone_number;
            nameEl.innerHTML = `<b>${member.name}</b>`;
           
    
            card.appendChild(logo);
            card.appendChild(nameEl);
            card.appendChild(address);
            card.appendChild(link);
            card.setAttribute('class', 'each-business');
            cardTrack.setAttribute('class', 'card-track');
            
            cardTrack.appendChild(card);
            businessCards.appendChild(cardTrack);
        }
    });
}

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayFilteredMembers(data.members)
    
}

getMembersData();

function setGridView() {
    document.querySelector(".member-cards").className = "member-cards grid";
}

function setBlockView() {
    document.querySelector(".member-cards").className = "member-cards block";
}


//when the light-dark button is clicked or toggled, the header should change
// light mode and dark mode
function toggleMode() {
    const header = document.querySelector('.header');
    const menu = document.querySelector('#menu');
    const footer = document.querySelector('footer');
    const body = document.querySelector('body');

    if (document.querySelector('form')) {
        
        const form = document.querySelector('form');
        const formLabels = form.querySelectorAll('label');
        formLabels.forEach(label => {
            label.classList.toggle('dark-mode');
        });
    }

    // Toggle dark mode for header
    header.classList.toggle('dark-mode');
    menu.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode-body');
}


//skip to main content
document.getElementById("search-button-small-screen").addEventListener("click", function() {
    document.querySelector(".business-cards").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("search-button").addEventListener("click", function() {
    document.querySelector(".business-cards").scrollIntoView({ behavior: "smooth" });
});

//shrink and expand header by tap
document.querySelector('header').addEventListener("hover", function (){
    let header = document.querySelector('header');
})

//timestamp for the form submission
document.addEventListener("DOMContentLoaded", () => {
    const timestampFeild = document.getElementById("timestamp");
    const currentDate = new Date();
    timestampFeild.value = currentDate.toISOString();
})