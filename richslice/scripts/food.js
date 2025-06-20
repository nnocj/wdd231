
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

