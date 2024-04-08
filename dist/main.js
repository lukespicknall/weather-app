/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assign.js":
/*!***********************!*\
  !*** ./src/assign.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve */ "./src/retrieve.js");


// factory function to create object with only the weather data we are intereted in from fetch
const Weather = (
  city,
  dateTime,
  tempC,
  tempF,
  feelsLikeC,
  feelsLikeF,
  highC,
  lowC,
  highF,
  lowF,
  sunrise,
  sunset,
  moon,
  condition,
  chanceRain,
  humidity,
  windMph,
  windDirection,
  icon,
) => {
  const currentCity = city;
  const currentDateTime = dateTime;
  const currentTempC = tempC;
  const currentTempF = tempF;
  const currentFeelsLikeC = feelsLikeC;
  const currentFeelsLikeF = feelsLikeF;
  const currentHighC = highC;
  const currentLowC = lowC;
  const currentHighF = highF;
  const currentLowF = lowF;
  const currentSunrise = sunrise;
  const currentSunset = sunset;
  const currentMoon = moon;
  const currentCondition = condition;
  const currentChanceRain = chanceRain;
  const currentHumidity = humidity;
  const currentWindMph = windMph;
  const currentWindDirection = windDirection;
  const currentIcon = icon;

  return {
    currentCity,
    currentDateTime,
    currentTempC,
    currentTempF,
    currentFeelsLikeC,
    currentFeelsLikeF,
    currentHighC,
    currentLowC,
    currentHighF,
    currentLowF,
    currentSunrise,
    currentSunset,
    currentMoon,
    currentCondition,
    currentChanceRain,
    currentHumidity,
    currentWindMph,
    currentWindDirection,
    currentIcon,
  };
};

// async function that takes locale param (query) from call in ui.js
// passes the local param to getWeather() in retrieve.js
// takes the weather package it recieves from api, pulls the data we are interested in
// creates and returns weatherData object with that info from Weather factory function
const parseWeather = async (query) => {
  const weatherPackage = await (0,_retrieve__WEBPACK_IMPORTED_MODULE_0__["default"])(query);

  const city = weatherPackage.location.name;
  const dateTime = weatherPackage.location.localtime;
  const tempC = weatherPackage.current.temp_c;
  const tempF = weatherPackage.current.temp_f;
  const feelsLikeC = weatherPackage.current.feelslike_c;
  const feelsLikeF = weatherPackage.current.feelslike_f;
  const highC = weatherPackage.forecast.forecastday[0].day.maxtemp_c;
  const lowC = weatherPackage.forecast.forecastday[0].day.mintemp_c;
  const highF = weatherPackage.forecast.forecastday[0].day.maxtemp_f;
  const lowF = weatherPackage.forecast.forecastday[0].day.mintemp_f;
  const sunrise = weatherPackage.forecast.forecastday[0].astro.sunrise;
  const sunset = weatherPackage.forecast.forecastday[0].astro.sunset;
  const moon = weatherPackage.forecast.forecastday[0].astro.moon_phase;
  const condition = weatherPackage.current.condition.text;
  const chanceRain = weatherPackage.forecast.forecastday[0].day.daily_chance_of_rain;
  const { humidity } = weatherPackage.current;
  const windMph = weatherPackage.current.wind_mph;
  const windDirection = weatherPackage.current.wind_dir;
  const { icon } = weatherPackage.current.condition;

  const weatherData = Weather(
    city,
    dateTime,
    tempC,
    tempF,
    feelsLikeC,
    feelsLikeF,
    highC,
    lowC,
    highF,
    lowF,
    sunrise,
    sunset,
    moon,
    condition,
    chanceRain,
    humidity,
    windMph,
    windDirection,
    icon,
  );

  return weatherData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseWeather);


/***/ }),

/***/ "./src/retrieve.js":
/*!*************************!*\
  !*** ./src/retrieve.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getWeather = async (query) => {
//   try {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=36c09e20473847bc93f13431242703&q=${query}&days=3`,
    { mode: "cors" }
  );
  const weatherPackage = await response.json();
  return weatherPackage;
//   }
//   catch (error) {
//     console.log(error);
//   }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assign */ "./src/assign.js");


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
    const weatherData = await (0,_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(query);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


(0,_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBVTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQSxVQUFVLE9BQU87O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkg1QjtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsTUFBTTtBQUM3RixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkVTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBWTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCxnREFBZ0QsaUJBQWlCO0FBQ2pFLHFDQUFxQyxZQUFZO0FBQ2pELG1DQUFtQyxXQUFXO0FBQzlDLHdDQUF3QyxZQUFZO0FBQ3BELHNDQUFzQyxXQUFXO0FBQ2pELDJDQUEyQyxZQUFZO0FBQ3ZELHdEQUF3RCxpQkFBaUI7QUFDekUscURBQXFELGtCQUFrQjtBQUN2RSw2Q0FBNkMsZ0JBQWdCO0FBQzdELHdDQUF3QyxnQkFBZ0I7QUFDeEQsd0RBQXdELHFCQUFxQjtBQUM3RTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDOURwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndCOztBQUV4QiwrQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZXRyaWV2ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vcmV0cmlldmUnO1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBvYmplY3Qgd2l0aCBvbmx5IHRoZSB3ZWF0aGVyIGRhdGEgd2UgYXJlIGludGVyZXRlZCBpbiBmcm9tIGZldGNoXG5jb25zdCBXZWF0aGVyID0gKFxuICBjaXR5LFxuICBkYXRlVGltZSxcbiAgdGVtcEMsXG4gIHRlbXBGLFxuICBmZWVsc0xpa2VDLFxuICBmZWVsc0xpa2VGLFxuICBoaWdoQyxcbiAgbG93QyxcbiAgaGlnaEYsXG4gIGxvd0YsXG4gIHN1bnJpc2UsXG4gIHN1bnNldCxcbiAgbW9vbixcbiAgY29uZGl0aW9uLFxuICBjaGFuY2VSYWluLFxuICBodW1pZGl0eSxcbiAgd2luZE1waCxcbiAgd2luZERpcmVjdGlvbixcbiAgaWNvbixcbikgPT4ge1xuICBjb25zdCBjdXJyZW50Q2l0eSA9IGNpdHk7XG4gIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IGRhdGVUaW1lO1xuICBjb25zdCBjdXJyZW50VGVtcEMgPSB0ZW1wQztcbiAgY29uc3QgY3VycmVudFRlbXBGID0gdGVtcEY7XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VDID0gZmVlbHNMaWtlQztcbiAgY29uc3QgY3VycmVudEZlZWxzTGlrZUYgPSBmZWVsc0xpa2VGO1xuICBjb25zdCBjdXJyZW50SGlnaEMgPSBoaWdoQztcbiAgY29uc3QgY3VycmVudExvd0MgPSBsb3dDO1xuICBjb25zdCBjdXJyZW50SGlnaEYgPSBoaWdoRjtcbiAgY29uc3QgY3VycmVudExvd0YgPSBsb3dGO1xuICBjb25zdCBjdXJyZW50U3VucmlzZSA9IHN1bnJpc2U7XG4gIGNvbnN0IGN1cnJlbnRTdW5zZXQgPSBzdW5zZXQ7XG4gIGNvbnN0IGN1cnJlbnRNb29uID0gbW9vbjtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgY29uc3QgY3VycmVudENoYW5jZVJhaW4gPSBjaGFuY2VSYWluO1xuICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgY29uc3QgY3VycmVudFdpbmRNcGggPSB3aW5kTXBoO1xuICBjb25zdCBjdXJyZW50V2luZERpcmVjdGlvbiA9IHdpbmREaXJlY3Rpb247XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gaWNvbjtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRDaXR5LFxuICAgIGN1cnJlbnREYXRlVGltZSxcbiAgICBjdXJyZW50VGVtcEMsXG4gICAgY3VycmVudFRlbXBGLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VDLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VGLFxuICAgIGN1cnJlbnRIaWdoQyxcbiAgICBjdXJyZW50TG93QyxcbiAgICBjdXJyZW50SGlnaEYsXG4gICAgY3VycmVudExvd0YsXG4gICAgY3VycmVudFN1bnJpc2UsXG4gICAgY3VycmVudFN1bnNldCxcbiAgICBjdXJyZW50TW9vbixcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGN1cnJlbnRDaGFuY2VSYWluLFxuICAgIGN1cnJlbnRIdW1pZGl0eSxcbiAgICBjdXJyZW50V2luZE1waCxcbiAgICBjdXJyZW50V2luZERpcmVjdGlvbixcbiAgICBjdXJyZW50SWNvbixcbiAgfTtcbn07XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbG9jYWxlIHBhcmFtIChxdWVyeSkgZnJvbSBjYWxsIGluIHVpLmpzXG4vLyBwYXNzZXMgdGhlIGxvY2FsIHBhcmFtIHRvIGdldFdlYXRoZXIoKSBpbiByZXRyaWV2ZS5qc1xuLy8gdGFrZXMgdGhlIHdlYXRoZXIgcGFja2FnZSBpdCByZWNpZXZlcyBmcm9tIGFwaSwgcHVsbHMgdGhlIGRhdGEgd2UgYXJlIGludGVyZXN0ZWQgaW5cbi8vIGNyZWF0ZXMgYW5kIHJldHVybnMgd2VhdGhlckRhdGEgb2JqZWN0IHdpdGggdGhhdCBpbmZvIGZyb20gV2VhdGhlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBwYXJzZVdlYXRoZXIgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgY29uc3Qgd2VhdGhlclBhY2thZ2UgPSBhd2FpdCBnZXRXZWF0aGVyKHF1ZXJ5KTtcblxuICBjb25zdCBjaXR5ID0gd2VhdGhlclBhY2thZ2UubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgZGF0ZVRpbWUgPSB3ZWF0aGVyUGFja2FnZS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGNvbnN0IHRlbXBDID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBGID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICBjb25zdCBmZWVsc0xpa2VGID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgY29uc3QgaGlnaEMgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jO1xuICBjb25zdCBsb3dDID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYztcbiAgY29uc3QgaGlnaEYgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuICBjb25zdCBsb3dGID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcbiAgY29uc3Qgc3VucmlzZSA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XG4gIGNvbnN0IHN1bnNldCA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcbiAgY29uc3QgbW9vbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNoYW5jZVJhaW4gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQ7XG4gIGNvbnN0IHdpbmRNcGggPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC53aW5kX2RpcjtcbiAgY29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmNvbmRpdGlvbjtcblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IFdlYXRoZXIoXG4gICAgY2l0eSxcbiAgICBkYXRlVGltZSxcbiAgICB0ZW1wQyxcbiAgICB0ZW1wRixcbiAgICBmZWVsc0xpa2VDLFxuICAgIGZlZWxzTGlrZUYsXG4gICAgaGlnaEMsXG4gICAgbG93QyxcbiAgICBoaWdoRixcbiAgICBsb3dGLFxuICAgIHN1bnJpc2UsXG4gICAgc3Vuc2V0LFxuICAgIG1vb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGNoYW5jZVJhaW4sXG4gICAgaHVtaWRpdHksXG4gICAgd2luZE1waCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIGljb24sXG4gICk7XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VXZWF0aGVyO1xuIiwiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChxdWVyeSkgPT4ge1xuLy8gICB0cnkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM2YzA5ZTIwNDczODQ3YmM5M2YxMzQzMTI0MjcwMyZxPSR7cXVlcnl9JmRheXM9M2AsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IHdlYXRoZXJQYWNrYWdlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlclBhY2thZ2U7XG4vLyAgIH1cbi8vICAgY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiaW1wb3J0IHBhcnNlV2VhdGhlciBmcm9tIFwiLi9hc3NpZ25cIjtcblxuLy8gY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1ib3gnKVxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1maWVsZFwiKTtcbmNvbnN0IHNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXN1Ym1pdFwiKTtcblxuY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbiAgY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdGltZVwiKTtcbiAgY29uc3QgdG9kYXlUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS10ZW1wXCIpO1xuICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktZmVlbHMtbGlrZVwiKTtcbiAgY29uc3QgdG9kYXlIaWdoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS1oaWdoXCIpO1xuICBjb25zdCB0b2RheUxvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktbG93XCIpO1xuICBjb25zdCB0b2RheVJpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LXJpc2VcIik7XG4gIGNvbnN0IHRvZGF5U2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS1zZXRcIik7XG4gIGNvbnN0IHRvZGF5TW9vbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vblwiKTtcbiAgY29uc3QgdG9kYXlDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LWNvbmRpdGlvblwiKTtcbiAgY29uc3QgdG9kYXlSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS1yYWluXCIpO1xuICBjb25zdCB0b2RheUh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS1odW1pZGl0eVwiKTtcbiAgY29uc3QgdG9kYXlXaW5kTXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS13aW5kLXNwZWVkXCIpO1xuICBjb25zdCB0b2RheVdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LXdpbmQtZGlyZWN0aW9uXCIpO1xuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LWljb25cIik7XG5cbiAgc2VhcmNoU3VibWl0Lm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaEZpZWxkLnZhbHVlO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcGFyc2VXZWF0aGVyKHF1ZXJ5KTtcblxuICAgIGNvbnN0IGN1cnJlbnRDaXR5ID0gd2VhdGhlckRhdGEuY3VycmVudENpdHk7XG4gICAgY29uc3QgY3VycmVudERhdGVUaW1lID0gd2VhdGhlckRhdGEuY3VycmVudERhdGVUaW1lO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gd2VhdGhlckRhdGEuY3VycmVudFRlbXBGO1xuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50RmVlbHNMaWtlRjtcbiAgICBjb25zdCBjdXJyZW50SGlnaCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRIaWdoRjtcbiAgICBjb25zdCBjdXJyZW50TG93ID0gd2VhdGhlckRhdGEuY3VycmVudExvd0Y7XG4gICAgY29uc3QgY3VycmVudFJpc2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3VucmlzZTtcbiAgICBjb25zdCBjdXJyZW50U2V0ID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnNldDtcbiAgICBjb25zdCBjdXJyZW50TW9vbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnRNb29uO1xuICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9uO1xuICAgIGNvbnN0IGN1cnJlbnRDaGFuY2VSYWluID0gd2VhdGhlckRhdGEuY3VycmVudENoYW5jZVJhaW47XG4gICAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gd2VhdGhlckRhdGEuY3VycmVudEh1bWlkaXR5O1xuICAgIGNvbnN0IGN1cnJlbnRXaW5kTXBoID0gd2VhdGhlckRhdGEuY3VycmVudFdpbmRNcGg7XG4gICAgY29uc3QgY3VycmVudFdpbmREaXJlY3Rpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50V2luZERpcmVjdGlvbjtcbiAgICBjb25zdCBjdXJyZW50SWNvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnRJY29uO1xuXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGN1cnJlbnRDaXR5O1xuICAgIGRhdGV0aW1lLnRleHRDb250ZW50ID0gY3VycmVudERhdGVUaW1lO1xuICAgIHRvZGF5VGVtcC50ZXh0Q29udGVudCA9IGBUZW1wOiAke2N1cnJlbnRUZW1wfVxcdTAwQjAgRmA7XG4gICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtjdXJyZW50RmVlbHNMaWtlfVxcdTAwQjAgRmA7XG4gICAgdG9kYXlIaWdoLnRleHRDb250ZW50ID0gYEhpZ2g6ICR7Y3VycmVudEhpZ2h9XFx1MDBCMCBGYDtcbiAgICB0b2RheUxvdy50ZXh0Q29udGVudCA9IGBMb3c6ICR7Y3VycmVudExvd31cXHUwMEIwIEZgO1xuICAgIHRvZGF5UmlzZS50ZXh0Q29udGVudCA9IGBTdW5yaXNlOiAke2N1cnJlbnRSaXNlfWA7XG4gICAgdG9kYXlTZXQudGV4dENvbnRlbnQgPSBgU3Vuc2V0OiAke2N1cnJlbnRTZXR9YDtcbiAgICB0b2RheU1vb24udGV4dENvbnRlbnQgPSBgTW9vbiBwaGFzZTogJHtjdXJyZW50TW9vbn1gO1xuICAgIHRvZGF5Q29uZGl0aW9uLnRleHRDb250ZW50ID0gYEN1cnJlbnQgY29uZGl0aW9uczogJHtjdXJyZW50Q29uZGl0aW9ufWA7XG4gICAgdG9kYXlSYWluLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiByYWluIHRvZGF5OiAke2N1cnJlbnRDaGFuY2VSYWlufSVgO1xuICAgIHRvZGF5SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7Y3VycmVudEh1bWlkaXR5fSVgO1xuICAgIHRvZGF5V2luZE1waC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2N1cnJlbnRXaW5kTXBofSBtcGhgO1xuICAgIHRvZGF5V2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHtjdXJyZW50V2luZERpcmVjdGlvbn1gO1xuICAgIHRvZGF5SWNvbi5zcmMgPSBjdXJyZW50SWNvbjtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkIGZyb20gJy4vdWknO1xuXG5sb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=