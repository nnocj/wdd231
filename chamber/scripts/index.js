const url = 'https://nnocj.github.io/wdd231/chamber/data/members.json';
const businessCards = document.querySelector('.business-cards');

const displayFilteredMembers = (members)=> {
    members.forEach((member) => {

        if (member.membership_level == 3){
            let card = document.createElement('section');
            let logo = document.createElement('img');
            let address = document.createElement('p');
            let link = document.createElement('p');
            
            logo.setAttribute('alt', `${member.name} logo`);
            logo.setAttribute('src', member.image_file_name);
            logo.setAttribute('loading', 'lazy');
            address.textContent = member.address;
            link.textContent = member.website_url;
    
            card.appendChild(logo);
            card.appendChild(address);
            card.appendChild(link);
            card.setAttribute('class', 'each-business');
    
            businessCards.appendChild(card);
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
    let headNav = document.querySelector('.head-nav');
    let headLinks = headNav.querySelectorAll('a');
    if (window.scrollY > 5){
        header.style.backgroundColor = 'rgb(219, 225,  229)';
        header.style.color= 'rgb(2,20,13)';
        logoText.style.color = 'rgb(2,20,13)';
    }

    else {
        header.style.backgroundColor = 'transparent';
        header.style.color = 'rgb(219,224,229)';
        logoText.style.color = 'rgb(219,224,229)';
        headLinks.style.color = 'rgb(219,224,229)';
    }
})
