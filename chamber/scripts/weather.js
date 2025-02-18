

async function apiFetch(){
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.56&lon=-0.195&units=metric&appid=a244bc26af47b3c6480016ed8d1e9aa2";
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);

        }
        else {
            throw Error(await response.text('Error fetching API'));
        }
    }
    catch (error) {
        console.log(error);
    }
};
apiFetch();


function displayResults(data){
    // select HTML elements in the document
    const weatherIcon = document.createElement('img');
    const currentTemp = document.createElement('p');
    const captionDesc = document.createElement('p');

    //unique
    const weatherInfo = ` 
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon of ${data.weather[0].description}">
                            <section>   
                                <b>${data.main.temp} ℃</b>
                                <p>${data.weather[0].description}</p>
                                <p>Humidity: ${data.main.humidity}%</p>
                            </section>`;

   //get info for my homepage 
   const weatherCard = document.querySelector('#weather-content');
   weatherCard.innerHTML = weatherInfo;

}

//when the page is scrolled down, the header should change to the settings I gave it.
// But then when the page is up or not scrolled down, it should be transparent.
window.addEventListener(('scroll'), () => {
    let header = document.querySelector('header');
    let logoText = document.querySelectorAll('#vertical-align');
    let headNav = document.querySelector('#head-nav');
 
    if (window.scrollY > 10){
        header.style.backgroundColor = 'rgb(219, 225,  229)';
        header.style.color= 'rgb(2,20,13)';
        /*logoText.style.color = 'rgb(2,20,13)';*/
        headNav.style.color = 'rgb(2,20,13)'; // Example: Log the text of each link
   
        
    }

    else {
        header.style.backgroundColor = 'transparent';
        header.style.color = 'rgb(219,224,229)';
        logoText.style.color = 'rgb(219,224,229)';
        headNav.style.color = 'rgb(219,224,229)'; // Example: Log the text of each link
        
    }
})




//get forecast

async function apiFetchForeCast(){
    const url = "https://api.openweathermap.org/data/2.5/forecast?lat=5.56&lon=-0.195&units=metric&appid=a244bc26af47b3c6480016ed8d1e9aa2";
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayForeCast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log("Error fetching forecast:", error);
    }
};
apiFetchForeCast();

function displayForeCast(data){
    const forecastCard = document.querySelector('#forecast-content');
    forecastCard.innerHTML = '';  // Clear previous content

    const forecastList = data.list;
    const daysDisplayed = new Set();  // Track displayed days

    for (let i = 0; i < forecastList.length; i++) { 
        const forecast = forecastList[i];
        const forecastDate = new Date(forecast.dt_txt);
        const dayOfWeek = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
        

        
        if (!daysDisplayed.has(dayOfWeek) && forecastDate.getHours() === 12) {
            daysDisplayed.add(dayOfWeek);
            
            const forecastItem  = `
                <div class="forecast-day">
                    <p>${dayOfWeek} - <b>${forecast.main.temp} ℃</b></p>
                </div>
            `;
            
            forecastCard.innerHTML += forecastItem;

            // Stop after displaying 3 days
            if (daysDisplayed.size >= 3){
                break;
            }
        }
    }
}
