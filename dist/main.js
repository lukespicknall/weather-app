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
  const { sunrise } = weatherPackage.forecast.forecastday[0].astro;
  const { sunset } = weatherPackage.forecast.forecastday[0].astro;
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
    { mode: 'cors' },
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
const searchField = document.getElementById('search-field');
const searchSubmit = document.getElementById('search-submit');
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
    const query = searchField.value;
    const weatherData = await (0,_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(query);

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

    today.className = 'visible';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBVTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0EsVUFBVSxPQUFPOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZINUI7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLE1BQU07QUFDN0YsTUFBTSxjQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZFU7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBWTs7QUFFMUMsWUFBWSxjQUFjO0FBQzFCLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLG1CQUFtQjtBQUMvQixZQUFZLG9CQUFvQjtBQUNoQyxZQUFZLGtCQUFrQjtBQUM5QixZQUFZLGlCQUFpQjtBQUM3QixZQUFZLHVCQUF1QjtBQUNuQyxZQUFZLGNBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDLG9DQUFvQyxpQkFBaUI7QUFDckQsK0JBQStCLFlBQVk7QUFDM0MsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pELG1DQUFtQyxnQkFBZ0I7QUFDbkQsa0NBQWtDLGdCQUFnQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDakVwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndCOztBQUV4QiwrQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZXRyaWV2ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vcmV0cmlldmUnO1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBvYmplY3Qgd2l0aCBvbmx5IHRoZSB3ZWF0aGVyIGRhdGEgd2UgYXJlIGludGVyZXRlZCBpbiBmcm9tIGZldGNoXG5jb25zdCBXZWF0aGVyID0gKFxuICBjaXR5LFxuICBkYXRlVGltZSxcbiAgdGVtcEMsXG4gIHRlbXBGLFxuICBmZWVsc0xpa2VDLFxuICBmZWVsc0xpa2VGLFxuICBoaWdoQyxcbiAgbG93QyxcbiAgaGlnaEYsXG4gIGxvd0YsXG4gIHN1bnJpc2UsXG4gIHN1bnNldCxcbiAgbW9vbixcbiAgY29uZGl0aW9uLFxuICBjaGFuY2VSYWluLFxuICBodW1pZGl0eSxcbiAgd2luZE1waCxcbiAgd2luZERpcmVjdGlvbixcbiAgaWNvbixcbikgPT4ge1xuICBjb25zdCBjdXJyZW50Q2l0eSA9IGNpdHk7XG4gIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IGRhdGVUaW1lO1xuICBjb25zdCBjdXJyZW50VGVtcEMgPSB0ZW1wQztcbiAgY29uc3QgY3VycmVudFRlbXBGID0gdGVtcEY7XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VDID0gZmVlbHNMaWtlQztcbiAgY29uc3QgY3VycmVudEZlZWxzTGlrZUYgPSBmZWVsc0xpa2VGO1xuICBjb25zdCBjdXJyZW50SGlnaEMgPSBoaWdoQztcbiAgY29uc3QgY3VycmVudExvd0MgPSBsb3dDO1xuICBjb25zdCBjdXJyZW50SGlnaEYgPSBoaWdoRjtcbiAgY29uc3QgY3VycmVudExvd0YgPSBsb3dGO1xuICBjb25zdCBjdXJyZW50U3VucmlzZSA9IHN1bnJpc2U7XG4gIGNvbnN0IGN1cnJlbnRTdW5zZXQgPSBzdW5zZXQ7XG4gIGNvbnN0IGN1cnJlbnRNb29uID0gbW9vbjtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgY29uc3QgY3VycmVudENoYW5jZVJhaW4gPSBjaGFuY2VSYWluO1xuICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgY29uc3QgY3VycmVudFdpbmRNcGggPSB3aW5kTXBoO1xuICBjb25zdCBjdXJyZW50V2luZERpcmVjdGlvbiA9IHdpbmREaXJlY3Rpb247XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gaWNvbjtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRDaXR5LFxuICAgIGN1cnJlbnREYXRlVGltZSxcbiAgICBjdXJyZW50VGVtcEMsXG4gICAgY3VycmVudFRlbXBGLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VDLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VGLFxuICAgIGN1cnJlbnRIaWdoQyxcbiAgICBjdXJyZW50TG93QyxcbiAgICBjdXJyZW50SGlnaEYsXG4gICAgY3VycmVudExvd0YsXG4gICAgY3VycmVudFN1bnJpc2UsXG4gICAgY3VycmVudFN1bnNldCxcbiAgICBjdXJyZW50TW9vbixcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGN1cnJlbnRDaGFuY2VSYWluLFxuICAgIGN1cnJlbnRIdW1pZGl0eSxcbiAgICBjdXJyZW50V2luZE1waCxcbiAgICBjdXJyZW50V2luZERpcmVjdGlvbixcbiAgICBjdXJyZW50SWNvbixcbiAgfTtcbn07XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbG9jYWxlIHBhcmFtIChxdWVyeSkgZnJvbSBjYWxsIGluIHVpLmpzXG4vLyBwYXNzZXMgdGhlIGxvY2FsIHBhcmFtIHRvIGdldFdlYXRoZXIoKSBpbiByZXRyaWV2ZS5qc1xuLy8gdGFrZXMgdGhlIHdlYXRoZXIgcGFja2FnZSBpdCByZWNpZXZlcyBmcm9tIGFwaSwgcHVsbHMgdGhlIGRhdGEgd2UgYXJlIGludGVyZXN0ZWQgaW5cbi8vIGNyZWF0ZXMgYW5kIHJldHVybnMgd2VhdGhlckRhdGEgb2JqZWN0IHdpdGggdGhhdCBpbmZvIGZyb20gV2VhdGhlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBwYXJzZVdlYXRoZXIgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgY29uc3Qgd2VhdGhlclBhY2thZ2UgPSBhd2FpdCBnZXRXZWF0aGVyKHF1ZXJ5KTtcblxuICBjb25zdCBjaXR5ID0gd2VhdGhlclBhY2thZ2UubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgZGF0ZVRpbWUgPSB3ZWF0aGVyUGFja2FnZS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGNvbnN0IHRlbXBDID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBGID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICBjb25zdCBmZWVsc0xpa2VGID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgY29uc3QgaGlnaEMgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jO1xuICBjb25zdCBsb3dDID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYztcbiAgY29uc3QgaGlnaEYgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuICBjb25zdCBsb3dGID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcbiAgY29uc3QgeyBzdW5yaXNlIH0gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgeyBzdW5zZXQgfSA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCBtb29uID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcbiAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY2hhbmNlUmFpbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gd2VhdGhlclBhY2thZ2UuY3VycmVudDtcbiAgY29uc3Qgd2luZE1waCA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQud2luZF9tcGg7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LndpbmRfZGlyO1xuICBjb25zdCB7IGljb24gfSA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuY29uZGl0aW9uO1xuXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gV2VhdGhlcihcbiAgICBjaXR5LFxuICAgIGRhdGVUaW1lLFxuICAgIHRlbXBDLFxuICAgIHRlbXBGLFxuICAgIGZlZWxzTGlrZUMsXG4gICAgZmVlbHNMaWtlRixcbiAgICBoaWdoQyxcbiAgICBsb3dDLFxuICAgIGhpZ2hGLFxuICAgIGxvd0YsXG4gICAgc3VucmlzZSxcbiAgICBzdW5zZXQsXG4gICAgbW9vbixcbiAgICBjb25kaXRpb24sXG4gICAgY2hhbmNlUmFpbixcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kTXBoLFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgaWNvbixcbiAgKTtcblxuICByZXR1cm4gd2VhdGhlckRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZVdlYXRoZXI7XG4iLCJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4vLyAgIHRyeSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzZjMDllMjA0NzM4NDdiYzkzZjEzNDMxMjQyNzAzJnE9JHtxdWVyeX0mZGF5cz0zYCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICApO1xuICBjb25zdCB3ZWF0aGVyUGFja2FnZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJQYWNrYWdlO1xuLy8gICB9XG4vLyAgIGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsImltcG9ydCBwYXJzZVdlYXRoZXIgZnJvbSAnLi9hc3NpZ24nO1xuXG4vLyBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpXG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZmllbGQnKTtcbmNvbnN0IHNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3VibWl0Jyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuXG5jb25zdCBsb2FkID0gKCkgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS10aW1lJyk7XG4gIGNvbnN0IHRvZGF5VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS10ZW1wJyk7XG4gIGNvbnN0IHRvZGF5RmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWZlZWxzbGlrZScpO1xuICBjb25zdCB0b2RheUhpZ2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaGlnaCcpO1xuICBjb25zdCB0b2RheUxvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1sb3cnKTtcbiAgY29uc3QgdG9kYXlSaXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXJpc2UnKTtcbiAgY29uc3QgdG9kYXlTZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktc2V0Jyk7XG4gIGNvbnN0IHRvZGF5TW9vbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1tb29uJyk7XG4gIGNvbnN0IHRvZGF5Q29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWNvbmRpdGlvbicpO1xuICBjb25zdCB0b2RheVJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktcmFpbicpO1xuICBjb25zdCB0b2RheUh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWh1bWlkaXR5Jyk7XG4gIGNvbnN0IHRvZGF5V2luZE1waCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS13aW5kc3BlZWQnKTtcbiAgY29uc3QgdG9kYXlXaW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdpbmRkaXJlY3Rpb24nKTtcbiAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWljb24nKTtcblxuICBzZWFyY2hTdWJtaXQub25jbGljayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoRmllbGQudmFsdWU7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBwYXJzZVdlYXRoZXIocXVlcnkpO1xuXG4gICAgY29uc3QgeyBjdXJyZW50Q2l0eSB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50RGF0ZVRpbWUgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gd2VhdGhlckRhdGEuY3VycmVudFRlbXBGO1xuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50RmVlbHNMaWtlRjtcbiAgICBjb25zdCBjdXJyZW50SGlnaCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRIaWdoRjtcbiAgICBjb25zdCBjdXJyZW50TG93ID0gd2VhdGhlckRhdGEuY3VycmVudExvd0Y7XG4gICAgY29uc3QgY3VycmVudFJpc2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3VucmlzZTtcbiAgICBjb25zdCBjdXJyZW50U2V0ID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnNldDtcbiAgICBjb25zdCB7IGN1cnJlbnRNb29uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRDb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudENoYW5jZVJhaW4gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudEh1bWlkaXR5IH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kTXBoIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kRGlyZWN0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRJY29uIH0gPSB3ZWF0aGVyRGF0YTtcblxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50Q2l0eTtcbiAgICBkYXRldGltZS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRlVGltZTtcbiAgICB0b2RheUljb24uc3JjID0gY3VycmVudEljb247XG4gICAgdG9kYXlUZW1wLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRlbXB9XFx1MDBCMEZgO1xuICAgIHRvZGF5RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEZlZWxzTGlrZX1cXHUwMEIwRmA7XG4gICAgdG9kYXlIaWdoLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEhpZ2h9XFx1MDBCMEZgO1xuICAgIHRvZGF5TG93LnRleHRDb250ZW50ID0gYCR7Y3VycmVudExvd31cXHUwMEIwRmA7XG4gICAgdG9kYXlSaXNlLnRleHRDb250ZW50ID0gY3VycmVudFJpc2U7XG4gICAgdG9kYXlTZXQudGV4dENvbnRlbnQgPSBjdXJyZW50U2V0O1xuICAgIHRvZGF5TW9vbi50ZXh0Q29udGVudCA9IGN1cnJlbnRNb29uO1xuICAgIHRvZGF5Q29uZGl0aW9uLnRleHRDb250ZW50ID0gY3VycmVudENvbmRpdGlvbjtcbiAgICB0b2RheVJhaW4udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50Q2hhbmNlUmFpbn0lYDtcbiAgICB0b2RheUh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudEh1bWlkaXR5fSVgO1xuICAgIHRvZGF5V2luZE1waC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXaW5kTXBofSBtcGhgO1xuICAgIHRvZGF5V2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRXaW5kRGlyZWN0aW9uO1xuXG4gICAgdG9kYXkuY2xhc3NOYW1lID0gJ3Zpc2libGUnO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWQgZnJvbSAnLi91aSc7XG5cbmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==