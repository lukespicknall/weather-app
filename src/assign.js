import getWeather from './retrieve';

const parseWeather = async (query) => {
  const weatherPackage = await getWeather(query);
//   console.log(weatherPackage);
  const currentCondition = weatherPackage.current.condition.text;
  const currentTempC = weatherPackage.current.temp_c;
  const currentTempF = weatherPackage.current.temp_f;
  const currentHumidity = weatherPackage.current.humidity;
  const currentWindMph = weatherPackage.current.wind_mph;

  const weatherData = [
    currentCondition,
    currentTempC,
    currentTempF,
    currentHumidity,
    currentWindMph,
  ];

  return weatherData;
};

export default parseWeather;
