
const cards = document.querySelector('.food-cards');


const displayFoods = (foods)=> {
    foods.forEach((food) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('p');
        let price = document.createElement('p');
        let keyIngredient = document.createElement('p');
        
        logo.setAttribute('alt', `${food.name} logo`);
        logo.setAttribute('src', food.image_file_name);
        logo.setAttribute('loading', 'lazy');
        name.textContent = food.name;
        price.textContent = food.price;
        keyIngredient.textContent = food.key_ingredients;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(keyIngredient);

        cards.appendChild(card);
    
    });
}


async function getFoodsData() {
    const url = 'https://nnocj.github.io/wdd231/richslice/data/food.json';
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayFoods(data.foods)
}

getFoodsData();

function setGridView() {
    document.querySelector(".food-cards").className = "food-cards grid";
}

function setBlockView() {
    document.querySelector(".food-cards").className = "food-cards block";
}

//skip to main content
//document.getElementById("search-button").addEventListener("click", function() {
   // document.querySelector(".foods").scrollIntoView({ behavior: "smooth" });
//});


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
