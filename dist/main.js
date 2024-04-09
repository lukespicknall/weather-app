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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBVTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0EsVUFBVSxPQUFPOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZINUI7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLE1BQU07QUFDN0YsTUFBTSxjQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZFU7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBWTs7QUFFMUMsWUFBWSxjQUFjO0FBQzFCLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLG1CQUFtQjtBQUMvQixZQUFZLG9CQUFvQjtBQUNoQyxZQUFZLGtCQUFrQjtBQUM5QixZQUFZLGlCQUFpQjtBQUM3QixZQUFZLHVCQUF1QjtBQUNuQyxZQUFZLGNBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDLG9DQUFvQyxpQkFBaUI7QUFDckQsK0JBQStCLFlBQVk7QUFDM0MsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pELG1DQUFtQyxnQkFBZ0I7QUFDbkQsa0NBQWtDLGdCQUFnQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNsRXBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0I7O0FBRXhCLCtDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzaWduLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9yZXRyaWV2ZSc7XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG9iamVjdCB3aXRoIG9ubHkgdGhlIHdlYXRoZXIgZGF0YSB3ZSBhcmUgaW50ZXJldGVkIGluIGZyb20gZmV0Y2hcbmNvbnN0IFdlYXRoZXIgPSAoXG4gIGNpdHksXG4gIGRhdGVUaW1lLFxuICB0ZW1wQyxcbiAgdGVtcEYsXG4gIGZlZWxzTGlrZUMsXG4gIGZlZWxzTGlrZUYsXG4gIGhpZ2hDLFxuICBsb3dDLFxuICBoaWdoRixcbiAgbG93RixcbiAgc3VucmlzZSxcbiAgc3Vuc2V0LFxuICBtb29uLFxuICBjb25kaXRpb24sXG4gIGNoYW5jZVJhaW4sXG4gIGh1bWlkaXR5LFxuICB3aW5kTXBoLFxuICB3aW5kRGlyZWN0aW9uLFxuICBpY29uLFxuKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDaXR5ID0gY2l0eTtcbiAgY29uc3QgY3VycmVudERhdGVUaW1lID0gZGF0ZVRpbWU7XG4gIGNvbnN0IGN1cnJlbnRUZW1wQyA9IHRlbXBDO1xuICBjb25zdCBjdXJyZW50VGVtcEYgPSB0ZW1wRjtcbiAgY29uc3QgY3VycmVudEZlZWxzTGlrZUMgPSBmZWVsc0xpa2VDO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlRiA9IGZlZWxzTGlrZUY7XG4gIGNvbnN0IGN1cnJlbnRIaWdoQyA9IGhpZ2hDO1xuICBjb25zdCBjdXJyZW50TG93QyA9IGxvd0M7XG4gIGNvbnN0IGN1cnJlbnRIaWdoRiA9IGhpZ2hGO1xuICBjb25zdCBjdXJyZW50TG93RiA9IGxvd0Y7XG4gIGNvbnN0IGN1cnJlbnRTdW5yaXNlID0gc3VucmlzZTtcbiAgY29uc3QgY3VycmVudFN1bnNldCA9IHN1bnNldDtcbiAgY29uc3QgY3VycmVudE1vb24gPSBtb29uO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gY29uZGl0aW9uO1xuICBjb25zdCBjdXJyZW50Q2hhbmNlUmFpbiA9IGNoYW5jZVJhaW47XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGh1bWlkaXR5O1xuICBjb25zdCBjdXJyZW50V2luZE1waCA9IHdpbmRNcGg7XG4gIGNvbnN0IGN1cnJlbnRXaW5kRGlyZWN0aW9uID0gd2luZERpcmVjdGlvbjtcbiAgY29uc3QgY3VycmVudEljb24gPSBpY29uO1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudENpdHksXG4gICAgY3VycmVudERhdGVUaW1lLFxuICAgIGN1cnJlbnRUZW1wQyxcbiAgICBjdXJyZW50VGVtcEYsXG4gICAgY3VycmVudEZlZWxzTGlrZUMsXG4gICAgY3VycmVudEZlZWxzTGlrZUYsXG4gICAgY3VycmVudEhpZ2hDLFxuICAgIGN1cnJlbnRMb3dDLFxuICAgIGN1cnJlbnRIaWdoRixcbiAgICBjdXJyZW50TG93RixcbiAgICBjdXJyZW50U3VucmlzZSxcbiAgICBjdXJyZW50U3Vuc2V0LFxuICAgIGN1cnJlbnRNb29uLFxuICAgIGN1cnJlbnRDb25kaXRpb24sXG4gICAgY3VycmVudENoYW5jZVJhaW4sXG4gICAgY3VycmVudEh1bWlkaXR5LFxuICAgIGN1cnJlbnRXaW5kTXBoLFxuICAgIGN1cnJlbnRXaW5kRGlyZWN0aW9uLFxuICAgIGN1cnJlbnRJY29uLFxuICB9O1xufTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gdGhhdCB0YWtlcyBsb2NhbGUgcGFyYW0gKHF1ZXJ5KSBmcm9tIGNhbGwgaW4gdWkuanNcbi8vIHBhc3NlcyB0aGUgbG9jYWwgcGFyYW0gdG8gZ2V0V2VhdGhlcigpIGluIHJldHJpZXZlLmpzXG4vLyB0YWtlcyB0aGUgd2VhdGhlciBwYWNrYWdlIGl0IHJlY2lldmVzIGZyb20gYXBpLCBwdWxscyB0aGUgZGF0YSB3ZSBhcmUgaW50ZXJlc3RlZCBpblxuLy8gY3JlYXRlcyBhbmQgcmV0dXJucyB3ZWF0aGVyRGF0YSBvYmplY3Qgd2l0aCB0aGF0IGluZm8gZnJvbSBXZWF0aGVyIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IHBhcnNlV2VhdGhlciA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyUGFja2FnZSA9IGF3YWl0IGdldFdlYXRoZXIocXVlcnkpO1xuXG4gIGNvbnN0IGNpdHkgPSB3ZWF0aGVyUGFja2FnZS5sb2NhdGlvbi5uYW1lO1xuICBjb25zdCBkYXRlVGltZSA9IHdlYXRoZXJQYWNrYWdlLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgY29uc3QgdGVtcEMgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LnRlbXBfYztcbiAgY29uc3QgdGVtcEYgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LnRlbXBfZjtcbiAgY29uc3QgZmVlbHNMaWtlQyA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGZlZWxzTGlrZUYgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmZlZWxzbGlrZV9mO1xuICBjb25zdCBoaWdoQyA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2M7XG4gIGNvbnN0IGxvd0MgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jO1xuICBjb25zdCBoaWdoRiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Y7XG4gIGNvbnN0IGxvd0YgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuICBjb25zdCB7IHN1bnJpc2UgfSA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCB7IHN1bnNldCB9ID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IG1vb24gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX3BoYXNlO1xuICBjb25zdCBjb25kaXRpb24gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjaGFuY2VSYWluID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICBjb25zdCB7IGh1bWlkaXR5IH0gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50O1xuICBjb25zdCB3aW5kTXBoID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC53aW5kX21waDtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQud2luZF9kaXI7XG4gIGNvbnN0IHsgaWNvbiB9ID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5jb25kaXRpb247XG5cbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBXZWF0aGVyKFxuICAgIGNpdHksXG4gICAgZGF0ZVRpbWUsXG4gICAgdGVtcEMsXG4gICAgdGVtcEYsXG4gICAgZmVlbHNMaWtlQyxcbiAgICBmZWVsc0xpa2VGLFxuICAgIGhpZ2hDLFxuICAgIGxvd0MsXG4gICAgaGlnaEYsXG4gICAgbG93RixcbiAgICBzdW5yaXNlLFxuICAgIHN1bnNldCxcbiAgICBtb29uLFxuICAgIGNvbmRpdGlvbixcbiAgICBjaGFuY2VSYWluLFxuICAgIGh1bWlkaXR5LFxuICAgIHdpbmRNcGgsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICBpY29uLFxuICApO1xuXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlV2VhdGhlcjtcbiIsImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAocXVlcnkpID0+IHtcbi8vICAgdHJ5IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zNmMwOWUyMDQ3Mzg0N2JjOTNmMTM0MzEyNDI3MDMmcT0ke3F1ZXJ5fSZkYXlzPTNgLFxuICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJQYWNrYWdlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlclBhY2thZ2U7XG4vLyAgIH1cbi8vICAgY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiaW1wb3J0IHBhcnNlV2VhdGhlciBmcm9tICcuL2Fzc2lnbic7XG5cbi8vIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYm94JylcbmNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1maWVsZCcpO1xuY29uc3Qgc2VhcmNoU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdWJtaXQnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Jyk7XG5cbmNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRpbWUnKTtcbiAgY29uc3QgdG9kYXlUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXRlbXAnKTtcbiAgY29uc3QgdG9kYXlGZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktZmVlbHNsaWtlJyk7XG4gIGNvbnN0IHRvZGF5SGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1oaWdoJyk7XG4gIGNvbnN0IHRvZGF5TG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWxvdycpO1xuICBjb25zdCB0b2RheVJpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktcmlzZScpO1xuICBjb25zdCB0b2RheVNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1zZXQnKTtcbiAgY29uc3QgdG9kYXlNb29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LW1vb24nKTtcbiAgY29uc3QgdG9kYXlDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktY29uZGl0aW9uJyk7XG4gIGNvbnN0IHRvZGF5UmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1yYWluJyk7XG4gIGNvbnN0IHRvZGF5SHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaHVtaWRpdHknKTtcbiAgY29uc3QgdG9kYXlXaW5kTXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdpbmRzcGVlZCcpO1xuICBjb25zdCB0b2RheVdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktd2luZGRpcmVjdGlvbicpO1xuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaWNvbicpO1xuXG4gIHNlYXJjaFN1Ym1pdC5vbmNsaWNrID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHBhcnNlV2VhdGhlcihxdWVyeSk7XG5cbiAgICBjb25zdCB7IGN1cnJlbnRDaXR5IH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnREYXRlVGltZSB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSB3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcEY7XG4gICAgY29uc3QgY3VycmVudEZlZWxzTGlrZSA9IHdlYXRoZXJEYXRhLmN1cnJlbnRGZWVsc0xpa2VGO1xuICAgIGNvbnN0IGN1cnJlbnRIaWdoID0gd2VhdGhlckRhdGEuY3VycmVudEhpZ2hGO1xuICAgIGNvbnN0IGN1cnJlbnRMb3cgPSB3ZWF0aGVyRGF0YS5jdXJyZW50TG93RjtcbiAgICBjb25zdCBjdXJyZW50UmlzZSA9IHdlYXRoZXJEYXRhLmN1cnJlbnRTdW5yaXNlO1xuICAgIGNvbnN0IGN1cnJlbnRTZXQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3Vuc2V0O1xuICAgIGNvbnN0IHsgY3VycmVudE1vb24gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudENvbmRpdGlvbiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50Q2hhbmNlUmFpbiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50SHVtaWRpdHkgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudFdpbmRNcGggfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudFdpbmREaXJlY3Rpb24gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudEljb24gfSA9IHdlYXRoZXJEYXRhO1xuXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGN1cnJlbnRDaXR5O1xuICAgIGRhdGV0aW1lLnRleHRDb250ZW50ID0gY3VycmVudERhdGVUaW1lO1xuICAgIHRvZGF5SWNvbi5zcmMgPSBjdXJyZW50SWNvbjtcbiAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcH1cXHUwMEIwRmA7XG4gICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RmVlbHNMaWtlfVxcdTAwQjBGYDtcbiAgICB0b2RheUhpZ2gudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SGlnaH1cXHUwMEIwRmA7XG4gICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TG93fVxcdTAwQjBGYDtcbiAgICB0b2RheVJpc2UudGV4dENvbnRlbnQgPSBjdXJyZW50UmlzZTtcbiAgICB0b2RheVNldC50ZXh0Q29udGVudCA9IGN1cnJlbnRTZXQ7XG4gICAgdG9kYXlNb29uLnRleHRDb250ZW50ID0gY3VycmVudE1vb247XG4gICAgdG9kYXlDb25kaXRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50Q29uZGl0aW9uO1xuICAgIHRvZGF5UmFpbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRDaGFuY2VSYWlufSVgO1xuICAgIHRvZGF5SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SHVtaWRpdHl9JWA7XG4gICAgdG9kYXlXaW5kTXBoLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdpbmRNcGh9IG1waGA7XG4gICAgdG9kYXlXaW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFdpbmREaXJlY3Rpb247XG5cbiAgICB0b2RheS5jbGFzc05hbWUgPSAndmlzaWJsZSc7XG4gICAgXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZCBmcm9tICcuL3VpJztcblxubG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9