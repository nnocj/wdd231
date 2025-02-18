const url = 'https://nnocj.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('.member-cards');


const displayMembers = (members)=> {
    members.forEach((member) => {
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

        cards.appendChild(card);
    
    });
}


async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayMembers(data.members)
}

getMembersData();

function setGridView() {
    document.querySelector(".member-cards").className = "member-cards grid";
}

function setBlockView() {
    document.querySelector(".member-cards").className = "member-cards block";
}

//skip to main content
document.getElementById("search-button").addEventListener("click", function() {
    document.querySelector(".members").scrollIntoView({ behavior: "smooth" });
});


//when the page is scrolled down, the header should change to the settings I gave it.
// But then when the page is up or not scrolled down, it should be transparent.
window.addEventListener(('scroll'), () => {
    let header = document.querySelector('header');
    let logoText = document.querySelectorAll('#vertical-align');
    let headNav = document.querySelector('#head-nav');
 
    if (window.scrollY > 10){
        header.style.backgroundColor = 'rgb(219, 225,  229)';
        header.style.color= 'rgb(2,20,13)';
        logoText.style.color = 'rgb(2,20,13)';
        headNav.style.color = 'rgb(2,20,13)'; // Example: Log the text of each link
   
        
    }

    else {
        header.style.backgroundColor = 'transparent';
        header.style.color = 'rgb(219,224,229)';
        logoText.style.color = 'rgb(219,224,229)';
        headNav.style.color = 'rgb(219,224,229)'; // Example: Log the text of each link
        
    }
})
