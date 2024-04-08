import parseWeather from "./assign";

const content = document.getElementById("content");

// const searchBox = document.getElementById('search-box')
const searchField = document.getElementById("search-field");
const searchSubmit = document.getElementById("search-submit");

const load = () => {
  searchSubmit.onclick = async (e) => {
    e.preventDefault();
    const query = searchField.value;
    const weatherData = await parseWeather(query);
    content.appendChild(weatherData)
  };
};

export default load;
