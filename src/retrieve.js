// fetch weather data w/ user query
// package data as json and assing it to weatherPackage
async function getWeather(query) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=36c09e20473847bc93f13431242703&q=${query}&days=3`,
    { mode: 'cors' },
  );
  const weatherPackage = await response.json();
  return weatherPackage;
}

export default getWeather;
