import getWeather from "./retrieve";

// const searchBox = document.getElementById('search-box')
const searchField = document.getElementById("search-field");
const searchSubmit = document.getElementById("search-submit");


const load = () => {
    searchSubmit.onclick = async (e) => {
        e.preventDefault();
        const query = searchField.value;
        const weatherData = await getWeather(query);
        console.log(weatherData.current.temp_f)
    }

// const test = await getWeather('baltimore');
// console.log(test)
}

export default load;