import parseWeather from './assign';
import gustlogo from './images/gust-logo2.png';

// const searchBox = document.getElementById('search-box')
const searchField = document.getElementById('search-field');
const searchSubmit = document.getElementById('search-submit');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-gust-text');
const today = document.getElementById('today');
const gustLogo = document.getElementById('gust-logo');
const overlayGustLogo = document.getElementById('overlay-gust-logo');
const metricSwitch = document.getElementById('metric-switch');

// metric value holder
let currentMetric = 'F';

// updates current metric after switch
const switchMetric = (a) => {
  currentMetric = a;
};

const load = () => {
  // assign images
  gustLogo.src = gustlogo;
  overlayGustLogo.src = gustlogo;

  // grab DOM css hooks
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

  // run parse weather passing search-filed value as query param
  // if fails, catch error
  const assignData = async () => {
    const query = searchField.value;
    const weatherData = await parseWeather(query).catch((err) => {
      console.log(err);
    });

    // pull relevant weather data from fetch into variables.
    // alot of these use destructing method at esLint reccomendation
    const { currentCity } = weatherData;
    const { currentDateTime } = weatherData;
    const { currentTempF } = weatherData;
    const { currentFeelsLikeF } = weatherData;
    const { currentHighF } = weatherData;
    const { currentLowF } = weatherData;
    const { currentTempC } = weatherData;
    const { currentFeelsLikeC } = weatherData;
    const { currentHighC } = weatherData;
    const { currentLowC } = weatherData;
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

    // conditional to keep current metric on new searches
    if (currentMetric === 'F') {
      todayTemp.textContent = `${currentTempF}\u00B0F`;
      todayFeelsLike.textContent = `${currentFeelsLikeF}\u00B0F`;
      todayHigh.textContent = `${currentHighF}\u00B0F`;
      todayLow.textContent = `${currentLowF}\u00B0F`;
    } else if (currentMetric === 'C') {
      todayTemp.textContent = `${currentTempC}\u00B0C`;
      todayFeelsLike.textContent = `${currentFeelsLikeC}\u00B0C`;
      todayHigh.textContent = `${currentHighC}\u00B0C`;
      todayLow.textContent = `${currentLowC}\u00B0C`;
    }

    // make the DOM elements show weather data
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

    return {
      currentTempF,
      currentFeelsLikeF,
      currentHighF,
      currentLowF,
      currentTempC,
      currentFeelsLikeC,
      currentHighC,
      currentLowC,
    };
  };

  // runs assignData and populates data
  searchSubmit.onclick = async (e) => {
    e.preventDefault();
    if (searchField.value !== '') {
      overlay.className = 'overlay-visible';
      overlayText.textContent = 'loading ...';
      today.className = 'hidden';
      assignData().catch((err) => {
        overlayText.textContent = 'We could not find that location!';
        console.log(err);
      });
    }
  };

  // changes metric reading based on current metric
  metricSwitch.onclick = async () => {
    if (today.className === 'visible') {
      const currentData = assignData();
      if (currentMetric === 'F') {
        todayTemp.textContent = `${(await currentData).currentTempC}\u00B0C`;
        todayFeelsLike.textContent = `${
          (await currentData).currentFeelsLikeC
        }\u00B0C`;
        todayHigh.textContent = `${(await currentData).currentHighC}\u00B0C`;
        todayLow.textContent = `${(await currentData).currentLowC}\u00B0C`;
        switchMetric('C');
      } else if (currentMetric === 'C') {
        todayTemp.textContent = `${(await currentData).currentTempF}\u00B0F`;
        todayFeelsLike.textContent = `${
          (await currentData).currentFeelsLikeF
        }\u00B0F`;
        todayHigh.textContent = `${(await currentData).currentHighF}\u00B0F`;
        todayLow.textContent = `${(await currentData).currentLowF}\u00B0F`;
        switchMetric('F');
      }
    }
  };
};

export default load;
