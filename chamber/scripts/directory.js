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
document.getElementById("search-button-small-screen").addEventListener("click", function() {
    document.querySelector(".members").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("search-button").addEventListener("click", function() {
    document.querySelector(".members").scrollIntoView({ behavior: "smooth" });
});