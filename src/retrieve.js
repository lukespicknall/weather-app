const getWeather = async (query) => {
//   try {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=36c09e20473847bc93f13431242703&q=${query}&aqi=no`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
//   }
//   catch (error) {
//     console.log(error);
//   }
};

export default getWeather;
