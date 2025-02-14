const lat = 5.56;
const lon = -0.195;
const units = 'metric';
const apiKey = "a244bc26af47b3c6480016ed8d1e9aa2";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch(){
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
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

    currentTemp.textContent = `${data.main.temp}℃`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `icon of ${data.weather[0].description}`);
    captionDesc.textContent = data.weather[0].description;
}

