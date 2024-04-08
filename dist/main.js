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
  const weatherPackage = await (0,_retrieve__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
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


const content = document.getElementById("content");

// const searchBox = document.getElementById('search-box')
const searchField = document.getElementById("search-field");
const searchSubmit = document.getElementById("search-submit");

const load = () => {
  searchSubmit.onclick = async (e) => {
    e.preventDefault();
    const query = searchField.value;
    const weatherData = await (0,_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
    content.appendChild(weatherData)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBVTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQSxVQUFVLE9BQU87O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0U1QjtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsTUFBTTtBQUM3RixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkVTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1EQUFZO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNqQnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0I7O0FBRXhCLCtDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzaWduLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9yZXRyaWV2ZSc7XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG9iamVjdCB3aXRoIG9ubHkgdGhlIHdlYXRoZXIgZGF0YSB3ZSBhcmUgaW50ZXJldGVkIGluIGZyb20gZmV0Y2hcbmNvbnN0IFdlYXRoZXIgPSAoXG4gIGNvbmRpdGlvbixcbiAgdGVtcEMsXG4gIHRlbXBGLFxuICBodW1pZGl0eSxcbiAgd2luZE1waCxcbiAgc3VucmlzZSxcbiAgc3Vuc2V0LFxuICBjaGFuY2VSYWluLFxuICBtb29uLFxuICBpY29uLFxuKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBjb25kaXRpb247XG4gIGNvbnN0IGN1cnJlbnRUZW1wQyA9IHRlbXBDO1xuICBjb25zdCBjdXJyZW50VGVtcEYgPSB0ZW1wRjtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gIGNvbnN0IGN1cnJlbnRXaW5kTXBoID0gd2luZE1waDtcbiAgY29uc3QgY3VycmVudFN1bnJpc2UgPSBzdW5yaXNlO1xuICBjb25zdCBjdXJyZW50U3Vuc2V0ID0gc3Vuc2V0O1xuICBjb25zdCBjdXJyZW50Q2hhbmNlUmFpbiA9IGNoYW5jZVJhaW47XG4gIGNvbnN0IGN1cnJlbnRNb29uID0gbW9vbjtcbiAgY29uc3QgY3VycmVudEljb24gPSBpY29uO1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudENvbmRpdGlvbixcbiAgICBjdXJyZW50VGVtcEMsXG4gICAgY3VycmVudFRlbXBGLFxuICAgIGN1cnJlbnRIdW1pZGl0eSxcbiAgICBjdXJyZW50V2luZE1waCxcbiAgICBjdXJyZW50U3VucmlzZSxcbiAgICBjdXJyZW50U3Vuc2V0LFxuICAgIGN1cnJlbnRDaGFuY2VSYWluLFxuICAgIGN1cnJlbnRNb29uLFxuICAgIGN1cnJlbnRJY29uLFxuICB9O1xufTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gdGhhdCB0YWtlcyBsb2NhbGUgcGFyYW0gKHF1ZXJ5KSBmcm9tIGNhbGwgaW4gdWkuanNcbi8vIHBhc3NlcyB0aGUgbG9jYWwgcGFyYW0gdG8gZ2V0V2VhdGhlcigpIGluIHJldHJpZXZlLmpzXG4vLyB0YWtlcyB0aGUgd2VhdGhlciBwYWNrYWdlIGl0IHJlY2lldmVzIGZyb20gYXBpLCBwdWxscyB0aGUgZGF0YSB3ZSBhcmUgaW50ZXJlc3RlZCBpblxuLy8gY3JlYXRlcyBhbmQgcmV0dXJucyB3ZWF0aGVyRGF0YSBvYmplY3Qgd2l0aCB0aGF0IGluZm8gZnJvbSBXZWF0aGVyIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IHBhcnNlV2VhdGhlciA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyUGFja2FnZSA9IGF3YWl0IGdldFdlYXRoZXIocXVlcnkpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyUGFja2FnZSk7XG5cbiAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgdGVtcEMgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LnRlbXBfYztcbiAgY29uc3QgdGVtcEYgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LnRlbXBfZjtcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gd2VhdGhlclBhY2thZ2UuY3VycmVudDtcbiAgY29uc3Qgd2luZE1waCA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQud2luZF9tcGg7XG4gIGNvbnN0IHsgc3VucmlzZSB9ID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IHsgc3Vuc2V0IH0gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgY2hhbmNlUmFpbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgY29uc3QgbW9vbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG4gIGNvbnN0IHsgaWNvbiB9ID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5jb25kaXRpb247XG5cbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBXZWF0aGVyKFxuICAgIGNvbmRpdGlvbixcbiAgICB0ZW1wQyxcbiAgICB0ZW1wRixcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kTXBoLFxuICAgIHN1bnJpc2UsXG4gICAgc3Vuc2V0LFxuICAgIGNoYW5jZVJhaW4sXG4gICAgbW9vbixcbiAgICBpY29uLFxuICApO1xuXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlV2VhdGhlcjtcbiIsImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAocXVlcnkpID0+IHtcbi8vICAgdHJ5IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zNmMwOWUyMDQ3Mzg0N2JjOTNmMTM0MzEyNDI3MDMmcT0ke3F1ZXJ5fSZkYXlzPTNgLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBjb25zdCB3ZWF0aGVyUGFja2FnZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJQYWNrYWdlO1xuLy8gICB9XG4vLyAgIGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsImltcG9ydCBwYXJzZVdlYXRoZXIgZnJvbSBcIi4vYXNzaWduXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYm94JylcbmNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZmllbGRcIik7XG5jb25zdCBzZWFyY2hTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zdWJtaXRcIik7XG5cbmNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gIHNlYXJjaFN1Ym1pdC5vbmNsaWNrID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHBhcnNlV2VhdGhlcihxdWVyeSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyRGF0YSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkIGZyb20gJy4vdWknO1xuXG5sb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=