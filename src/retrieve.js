async function getWeather(query) {
  try {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=36c09e20473847bc93f13431242703&q=${query}&days=3`,
    { mode: 'cors' },
  );
  const weatherPackage = await response.json();
  return weatherPackage;
  } catch (err) {
      console.log(err);
      return err;
    };

}

// getWeather("b").catch((err) => {
//   console.log(err);
// });

export default getWeather;
