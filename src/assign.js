import getWeather from './retrieve';

// factory function to create object with only the weather data we are intereted in from fetch
const Weather = (
  condition,
  tempC,
  tempF,
  humidity,
  windMph,
  sunrise,
  sunset,
  chanceRain,
  moon,
  icon,
) => {
  const currentCondition = condition;
  const currentTempC = tempC;
  const currentTempF = tempF;
  const currentHumidity = humidity;
  const currentWindMph = windMph;
  const currentSunrise = sunrise;
  const currentSunset = sunset;
  const currentChanceRain = chanceRain;
  const currentMoon = moon;
  const currentIcon = icon;

  return {
    currentCondition,
    currentTempC,
    currentTempF,
    currentHumidity,
    currentWindMph,
    currentSunrise,
    currentSunset,
    currentChanceRain,
    currentMoon,
    currentIcon,
  };
};

// async function that takes locale param (query) from call in ui.js
// passes the local param to getWeather() in retrieve.js
// takes the weather package it recieves from api, pulls the data we are interested in
// creates and returns weatherData object with that info from Weather factory function
const parseWeather = async (query) => {
  const weatherPackage = await getWeather(query);
  console.log(weatherPackage);

  const condition = weatherPackage.current.condition.text;
  const tempC = weatherPackage.current.temp_c;
  const tempF = weatherPackage.current.temp_f;
  const { humidity } = weatherPackage.current;
  const windMph = weatherPackage.current.wind_mph;
  const { sunrise } = weatherPackage.forecast.forecastday[0].astro;
  const { sunset } = weatherPackage.forecast.forecastday[0].astro;
  const chanceRain = weatherPackage.forecast.forecastday[0].day.daily_chance_of_rain;
  const moon = weatherPackage.forecast.forecastday[0].astro.moon_phase;
  const { icon } = weatherPackage.current.condition;

  const weatherData = Weather(
    condition,
    tempC,
    tempF,
    humidity,
    windMph,
    sunrise,
    sunset,
    chanceRain,
    moon,
    icon,
  );

  return weatherData;
};

export default parseWeather;
