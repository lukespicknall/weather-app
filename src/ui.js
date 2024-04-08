import parseWeather from "./assign";

// const searchBox = document.getElementById('search-box')
const searchField = document.getElementById("search-field");
const searchSubmit = document.getElementById("search-submit");

const load = () => {
  const city = document.getElementById("city");
  const datetime = document.getElementById("date-time");
  const todayTemp = document.getElementById("today-temp");
  const todayFeelsLike = document.getElementById("today-feels-like");
  const todayHigh = document.getElementById("today-high");
  const todayLow = document.getElementById("today-low");
  const todayRise = document.getElementById("today-rise");
  const todaySet = document.getElementById("today-set");
  const todayMoon = document.getElementById("moon");
  const todayCondition = document.getElementById("today-condition");
  const todayRain = document.getElementById("today-rain");
  const todayHumidity = document.getElementById("today-humidity");
  const todayWindMph = document.getElementById("today-wind-speed");
  const todayWindDirection = document.getElementById("today-wind-direction");
  const todayIcon = document.getElementById("today-icon");

  searchSubmit.onclick = async (e) => {
    e.preventDefault();
    const query = searchField.value;
    const weatherData = await parseWeather(query);

    const currentCity = weatherData.currentCity;
    const currentDateTime = weatherData.currentDateTime;
    const currentTemp = weatherData.currentTempF;
    const currentFeelsLike = weatherData.currentFeelsLikeF;
    const currentHigh = weatherData.currentHighF;
    const currentLow = weatherData.currentLowF;
    const currentRise = weatherData.currentSunrise;
    const currentSet = weatherData.currentSunset;
    const currentMoon = weatherData.currentMoon;
    const currentCondition = weatherData.currentCondition;
    const currentChanceRain = weatherData.currentChanceRain;
    const currentHumidity = weatherData.currentHumidity;
    const currentWindMph = weatherData.currentWindMph;
    const currentWindDirection = weatherData.currentWindDirection;
    const currentIcon = weatherData.currentIcon;

    city.textContent = currentCity;
    datetime.textContent = currentDateTime;
    todayTemp.textContent = `Temp: ${currentTemp}\u00B0 F`;
    todayFeelsLike.textContent = `Feels like: ${currentFeelsLike}\u00B0 F`;
    todayHigh.textContent = `High: ${currentHigh}\u00B0 F`;
    todayLow.textContent = `Low: ${currentLow}\u00B0 F`;
    todayRise.textContent = `Sunrise: ${currentRise}`;
    todaySet.textContent = `Sunset: ${currentSet}`;
    todayMoon.textContent = `Moon phase: ${currentMoon}`;
    todayCondition.textContent = `Current conditions: ${currentCondition}`;
    todayRain.textContent = `Chance of rain today: ${currentChanceRain}%`;
    todayHumidity.textContent = `Humidity: ${currentHumidity}%`;
    todayWindMph.textContent = `Wind: ${currentWindMph} mph`;
    todayWindDirection.textContent = `Wind Direction: ${currentWindDirection}`;
    todayIcon.src = currentIcon;
  };
};

export default load;
