import parseWeather from './assign';

// const searchBox = document.getElementById('search-box')
const searchField = document.getElementById('search-field');
const searchSubmit = document.getElementById('search-submit');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-gust-text');
const today = document.getElementById('today');

const load = () => {
  const city = document.getElementById('city');
  const datetime = document.getElementById('date-time');
  const todayTemp = document.getElementById('today-temp');
  const todayFeelsLike = document.getElementById('today-feelslike');
  const todayHigh = document.getElementById('today-high');
  const todayLow = document.getElementById('today-low');
  const todayRise = document.getElementById('today-rise');
  const todaySet = document.getElementById('today-set');
  const todayMoon = document.getElementById('today-moon');
  const todayCondition = document.getElementById('today-condition');
  const todayRain = document.getElementById('today-rain');
  const todayHumidity = document.getElementById('today-humidity');
  const todayWindMph = document.getElementById('today-windspeed');
  const todayWindDirection = document.getElementById('today-winddirection');
  const todayIcon = document.getElementById('today-icon');

  searchSubmit.onclick = async (e) => {
    e.preventDefault();
    overlay.className = 'overlay-visible';
    overlayText.textContent = 'loading ...';
    today.className = 'hidden';
    const query = searchField.value;
    const weatherData = await parseWeather(query);

    const { currentCity } = weatherData;
    const { currentDateTime } = weatherData;
    const currentTemp = weatherData.currentTempF;
    const currentFeelsLike = weatherData.currentFeelsLikeF;
    const currentHigh = weatherData.currentHighF;
    const currentLow = weatherData.currentLowF;
    const currentRise = weatherData.currentSunrise;
    const currentSet = weatherData.currentSunset;
    const { currentMoon } = weatherData;
    const { currentCondition } = weatherData;
    const { currentChanceRain } = weatherData;
    const { currentHumidity } = weatherData;
    const { currentWindMph } = weatherData;
    const { currentWindDirection } = weatherData;
    const { currentIcon } = weatherData;

    city.textContent = currentCity;
    datetime.textContent = currentDateTime;
    todayIcon.src = currentIcon;
    todayTemp.textContent = `${currentTemp}\u00B0F`;
    todayFeelsLike.textContent = `${currentFeelsLike}\u00B0F`;
    todayHigh.textContent = `${currentHigh}\u00B0F`;
    todayLow.textContent = `${currentLow}\u00B0F`;
    todayRise.textContent = currentRise;
    todaySet.textContent = currentSet;
    todayMoon.textContent = currentMoon;
    todayCondition.textContent = currentCondition;
    todayRain.textContent = `${currentChanceRain}%`;
    todayHumidity.textContent = `${currentHumidity}%`;
    todayWindMph.textContent = `${currentWindMph} mph`;
    todayWindDirection.textContent = currentWindDirection;
    overlay.className = 'hidden';
    today.className = 'visible';
  };
};

export default load;
