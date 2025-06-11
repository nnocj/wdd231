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

//skip to main content
document.getElementById("search-button").addEventListener("click", function() {
    document.querySelector(".business-cards").scrollIntoView({ behavior: "smooth" });
});

//timestamp for the form submission
document.addEventListener("DOMContentLoaded", () => {
    const timestampFeild = document.getElementById("timestamp");
    const currentDate = new Date();
    timestampFeild.value = currentDate.toISOString();
})