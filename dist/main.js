/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

html, body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
 }

#content {
    height: 100%;
    min-width: 375px;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
}

#header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    gap: 3px;
}

#logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0 8px 0 0;
}

#gust-logo {
    height: 60px;
}

#gust-text {
    font-size: 28px;
}

#search-box {
    white-space: nowrap;
}

#search-field {
    font-size: 25px;
    padding: 10px 15px 10px 15px;
    border: solid 2px rgb(175, 182, 182);
    border-radius: 20px;
    width: clamp(10px, 76%, 322px);
}

#search-submit {
    font-size: 21px;
    background-color: white;
    color: black;
    padding: 12px;
    margin: 0 0 0 8px;
    border: 2px solid rgb(245, 140, 54);
    border-radius: 30px;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    box-sizing: border-box;
}

#search-submit:hover {
    background-color: rgb(245, 140, 54);
    border: 2px solid black;
    color: white;
    border-radius: 15px;
}

#metric {
    display: flex;
    justify-content: center;
    width: 126.48px;
    box-sizing: border-box;
    margin: 0 0 0 8px;
}

#metric-switch {
    font-size: 21px;
    background-color: white;
    color: black;
    padding: 12px;
    border: 2px solid rgb(54, 130, 245);
     border-radius: 15px;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
}

#metric-switch:hover {
    background-color: rgb(54, 130, 245);
    border: 2px solid black;
    color: white;
       border-radius: 30px;
}

/* OVERLAY */
#overlay {
    height: 100%;
}

#overlay-gust-logo {
    width: 300px;
}

#overlay-gust-text {
    font-size: 28px;
}

/* WEATHER BOX */
#weather-box {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    margin: 20px;
}

.hidden {
    display: none;
}

.visible {
    display: grid;
}

.overlay-visible{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* flex-grow: 1; */
}

/* Today Section */
#today {
    grid-template-areas: 
    "today-head"
    "today-weather";
    width: 375px;
    width: clamp(381px, 450px, 500px);
    height: 500px;
    grid-template-rows: 100px 400px;
    border-radius: 25px 25px 10px 10px;
    box-shadow: 20px 20px 28px 4px rgb(146, 146, 146);
}

/* HEADER */
#today-head {
    background-color: rgb(177, 226, 235);
    grid-area: today-head;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px 25px 0 0;
}

#city{
    font-size:  35px;
    padding: 8px
}

#date-time {
    font-size: 18px;
}

#today-weather {
    grid-area: today-weather;
    display: grid;
    grid-template-areas: 
    "today-summary today-details";
    grid-template-columns: 2fr 3fr;
    height: 100%;
    width: 100%;
    padding: 0 5px 25px 0;
    box-sizing: border-box;
}

/* SUMMARY */
#today-summary {
    grid-area: today-summary;
    display: grid;
    grid-template-areas:
    "icon-box"
    "temp-box"
    "feelslike-box"
    "rise-box"
    "set-box"
    "moon-box"
    ;
    grid-template-rows: 90px 50px 1fr 1fr 1fr 1fr;
    gap: 0 4px 4px 4px 4px,
}

.summary-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

.summary-label {
    font-weight: bold;
}

#today-icon-box {
    grid-area: icon-box;
}

#today-icon {
    width: 90px;
    padding: -10px 0 -10px 0
}

#today-temp-box{
    grid-area: temp-box;
}

#today-temp {
    font-size: 45px;
}

#today-feelslike-box {
grid-area: feelslike-box;
}

#today-feelslike {

}

#today-high-box {
grid-area: high-box;
}

#today-high {

}

#today-low-box {
grid-area: low-box;
}

#today-low {

}

#today-rise-box {
grid-area: rise-box;
}

#today-rise {

}

#today-set-box {
grid-area: set-box;
}

#today-set {

}

#today-moon-box {
grid-area: moon-box;
}

#today-moon {

}


/* Details Section */
#today-details {
    grid-area: today-details;
    display: grid;
    grid-template-areas:
    "condition-box condition-box"
    "high-box low-box"
    "rain-box humidity-box"
    "windspeed-box winddirection-box"
    ;
    grid-template-rows: 50x 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;

}

.details-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.details-label {
    font-weight: bold;
}

#today-condition-box {
grid-area: condition-box;
font-size: 19px;
}

#today-condition {

}

#today-rain-box {
grid-area: rain-box;
}

#today-rain {

}

#today-humidity-box {
grid-area: humidity-box;
}

#today-humidity {

}

#today-windspeed-box {
grid-area: windspeed-box;
}

#today-windspeed {

}

#today-winddirection-box {
grid-area: winddirection-box;
}

#today-winddirection {

}

@media (max-width: 620px) {
    #header { 
        display: grid;
        grid-template-areas: 
        "logo-box logo-box"
        "search-box metric";
        padding: 0 10px 0 10px;
        
    }

    #logo-box{
        grid-area: logo-box;
    }

    #search-box{
    grid-area: search-box;
    }

    #search-field {
    width: clamp(150px, 65%, 300px);
    }

    #metric {
    grid-area: metric;
    margin: 0 0 0 8px;
    width: 75px;
    height: 52px;
    }
}

@media (max-width: 440px) {
    .summary-box {
        font-size: 14px;
    }

    .details-box {
font-size: 14px;
    }

    #today-temp {
        font-size: 35px;
    }
    
    #city {
font-size: 25px;
    }
    #search-field {
        font-size: 16px;
    }

    #search-submit {
        margin: 0;
    }

    #metric-switch {

    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n }\n\n#content {\n    height: 100%;\n    min-width: 375px;\n    display: flex;\n    flex-direction: column;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 100px;\n    gap: 3px;\n}\n\n#logo-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    margin: 0 8px 0 0;\n}\n\n#gust-logo {\n    height: 60px;\n}\n\n#gust-text {\n    font-size: 28px;\n}\n\n#search-box {\n    white-space: nowrap;\n}\n\n#search-field {\n    font-size: 25px;\n    padding: 10px 15px 10px 15px;\n    border: solid 2px rgb(175, 182, 182);\n    border-radius: 20px;\n    width: clamp(10px, 76%, 322px);\n}\n\n#search-submit {\n    font-size: 21px;\n    background-color: white;\n    color: black;\n    padding: 12px;\n    margin: 0 0 0 8px;\n    border: 2px solid rgb(245, 140, 54);\n    border-radius: 30px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n    box-sizing: border-box;\n}\n\n#search-submit:hover {\n    background-color: rgb(245, 140, 54);\n    border: 2px solid black;\n    color: white;\n    border-radius: 15px;\n}\n\n#metric {\n    display: flex;\n    justify-content: center;\n    width: 126.48px;\n    box-sizing: border-box;\n    margin: 0 0 0 8px;\n}\n\n#metric-switch {\n    font-size: 21px;\n    background-color: white;\n    color: black;\n    padding: 12px;\n    border: 2px solid rgb(54, 130, 245);\n     border-radius: 15px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n}\n\n#metric-switch:hover {\n    background-color: rgb(54, 130, 245);\n    border: 2px solid black;\n    color: white;\n       border-radius: 30px;\n}\n\n/* OVERLAY */\n#overlay {\n    height: 100%;\n}\n\n#overlay-gust-logo {\n    width: 300px;\n}\n\n#overlay-gust-text {\n    font-size: 28px;\n}\n\n/* WEATHER BOX */\n#weather-box {\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin: 20px;\n}\n\n.hidden {\n    display: none;\n}\n\n.visible {\n    display: grid;\n}\n\n.overlay-visible{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* flex-grow: 1; */\n}\n\n/* Today Section */\n#today {\n    grid-template-areas: \n    \"today-head\"\n    \"today-weather\";\n    width: 375px;\n    width: clamp(381px, 450px, 500px);\n    height: 500px;\n    grid-template-rows: 100px 400px;\n    border-radius: 25px 25px 10px 10px;\n    box-shadow: 20px 20px 28px 4px rgb(146, 146, 146);\n}\n\n/* HEADER */\n#today-head {\n    background-color: rgb(177, 226, 235);\n    grid-area: today-head;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 25px 25px 0 0;\n}\n\n#city{\n    font-size:  35px;\n    padding: 8px\n}\n\n#date-time {\n    font-size: 18px;\n}\n\n#today-weather {\n    grid-area: today-weather;\n    display: grid;\n    grid-template-areas: \n    \"today-summary today-details\";\n    grid-template-columns: 2fr 3fr;\n    height: 100%;\n    width: 100%;\n    padding: 0 5px 25px 0;\n    box-sizing: border-box;\n}\n\n/* SUMMARY */\n#today-summary {\n    grid-area: today-summary;\n    display: grid;\n    grid-template-areas:\n    \"icon-box\"\n    \"temp-box\"\n    \"feelslike-box\"\n    \"rise-box\"\n    \"set-box\"\n    \"moon-box\"\n    ;\n    grid-template-rows: 90px 50px 1fr 1fr 1fr 1fr;\n    gap: 0 4px 4px 4px 4px,\n}\n\n.summary-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.summary-label {\n    font-weight: bold;\n}\n\n#today-icon-box {\n    grid-area: icon-box;\n}\n\n#today-icon {\n    width: 90px;\n    padding: -10px 0 -10px 0\n}\n\n#today-temp-box{\n    grid-area: temp-box;\n}\n\n#today-temp {\n    font-size: 45px;\n}\n\n#today-feelslike-box {\ngrid-area: feelslike-box;\n}\n\n#today-feelslike {\n\n}\n\n#today-high-box {\ngrid-area: high-box;\n}\n\n#today-high {\n\n}\n\n#today-low-box {\ngrid-area: low-box;\n}\n\n#today-low {\n\n}\n\n#today-rise-box {\ngrid-area: rise-box;\n}\n\n#today-rise {\n\n}\n\n#today-set-box {\ngrid-area: set-box;\n}\n\n#today-set {\n\n}\n\n#today-moon-box {\ngrid-area: moon-box;\n}\n\n#today-moon {\n\n}\n\n\n/* Details Section */\n#today-details {\n    grid-area: today-details;\n    display: grid;\n    grid-template-areas:\n    \"condition-box condition-box\"\n    \"high-box low-box\"\n    \"rain-box humidity-box\"\n    \"windspeed-box winddirection-box\"\n    ;\n    grid-template-rows: 50x 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.details-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.details-label {\n    font-weight: bold;\n}\n\n#today-condition-box {\ngrid-area: condition-box;\nfont-size: 19px;\n}\n\n#today-condition {\n\n}\n\n#today-rain-box {\ngrid-area: rain-box;\n}\n\n#today-rain {\n\n}\n\n#today-humidity-box {\ngrid-area: humidity-box;\n}\n\n#today-humidity {\n\n}\n\n#today-windspeed-box {\ngrid-area: windspeed-box;\n}\n\n#today-windspeed {\n\n}\n\n#today-winddirection-box {\ngrid-area: winddirection-box;\n}\n\n#today-winddirection {\n\n}\n\n@media (max-width: 620px) {\n    #header { \n        display: grid;\n        grid-template-areas: \n        \"logo-box logo-box\"\n        \"search-box metric\";\n        padding: 0 10px 0 10px;\n        \n    }\n\n    #logo-box{\n        grid-area: logo-box;\n    }\n\n    #search-box{\n    grid-area: search-box;\n    }\n\n    #search-field {\n    width: clamp(150px, 65%, 300px);\n    }\n\n    #metric {\n    grid-area: metric;\n    margin: 0 0 0 8px;\n    width: 75px;\n    height: 52px;\n    }\n}\n\n@media (max-width: 440px) {\n    .summary-box {\n        font-size: 14px;\n    }\n\n    .details-box {\nfont-size: 14px;\n    }\n\n    #today-temp {\n        font-size: 35px;\n    }\n    \n    #city {\nfont-size: 25px;\n    }\n    #search-field {\n        font-size: 16px;\n    }\n\n    #search-submit {\n        margin: 0;\n    }\n\n    #metric-switch {\n\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
  const weatherPackage = await (0,_retrieve__WEBPACK_IMPORTED_MODULE_0__["default"])(query).catch((err) => {
    console.log(err);
  });

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
/* harmony import */ var _images_gust_logo2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/gust-logo2.png */ "./src/images/gust-logo2.png");



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
  gustLogo.src = _images_gust_logo2_png__WEBPACK_IMPORTED_MODULE_1__;
  overlayGustLogo.src = _images_gust_logo2_png__WEBPACK_IMPORTED_MODULE_1__;

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
    const weatherData = await (0,_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(query).catch((err) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);


/***/ }),

/***/ "./src/images/gust-logo2.png":
/*!***********************************!*\
  !*** ./src/images/gust-logo2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c0ec48f1ad9dba29f24.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FB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Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQXdCO0FBQ0g7O0FBRXJCLCtDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzaWduLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiB9XG5cbiNjb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzNzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGdhcDogM3B4O1xufVxuXG4jbG9nby1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luOiAwIDhweCAwIDA7XG59XG5cbiNndXN0LWxvZ28ge1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuI2d1c3QtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4jc2VhcmNoLWJveCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuI3NlYXJjaC1maWVsZCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDE3NSwgMTgyLCAxODIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IGNsYW1wKDEwcHgsIDc2JSwgMzIycHgpO1xufVxuXG4jc2VhcmNoLXN1Ym1pdCB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDUsIDE0MCwgNTQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNzZWFyY2gtc3VibWl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxNDAsIDU0KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI21ldHJpYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTI2LjQ4cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcbn1cblxuI21ldHJpYy1zd2l0Y2gge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTQsIDEzMCwgMjQ1KTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZXRyaWMtc3dpdGNoOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEzMCwgMjQ1KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLyogT1ZFUkxBWSAqL1xuI292ZXJsYXkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI292ZXJsYXktZ3VzdC1sb2dvIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbiNvdmVybGF5LWd1c3QtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4vKiBXRUFUSEVSIEJPWCAqL1xuI3dlYXRoZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ub3ZlcmxheS12aXNpYmxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGZsZXgtZ3JvdzogMTsgKi9cbn1cblxuLyogVG9kYXkgU2VjdGlvbiAqL1xuI3RvZGF5IHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInRvZGF5LWhlYWRcIlxuICAgIFwidG9kYXktd2VhdGhlclwiO1xuICAgIHdpZHRoOiAzNzVweDtcbiAgICB3aWR0aDogY2xhbXAoMzgxcHgsIDQ1MHB4LCA1MDBweCk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAxMHB4IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDI4cHggNHB4IHJnYigxNDYsIDE0NiwgMTQ2KTtcbn1cblxuLyogSEVBREVSICovXG4jdG9kYXktaGVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMjI2LCAyMzUpO1xuICAgIGdyaWQtYXJlYTogdG9kYXktaGVhZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xufVxuXG4jY2l0eXtcbiAgICBmb250LXNpemU6ICAzNXB4O1xuICAgIHBhZGRpbmc6IDhweFxufVxuXG4jZGF0ZS10aW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiN0b2RheS13ZWF0aGVyIHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LXdlYXRoZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInRvZGF5LXN1bW1hcnkgdG9kYXktZGV0YWlsc1wiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1cHggMjVweCAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFNVTU1BUlkgKi9cbiN0b2RheS1zdW1tYXJ5IHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LXN1bW1hcnk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaWNvbi1ib3hcIlxuICAgIFwidGVtcC1ib3hcIlxuICAgIFwiZmVlbHNsaWtlLWJveFwiXG4gICAgXCJyaXNlLWJveFwiXG4gICAgXCJzZXQtYm94XCJcbiAgICBcIm1vb24tYm94XCJcbiAgICA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDUwcHggMWZyIDFmciAxZnIgMWZyO1xuICAgIGdhcDogMCA0cHggNHB4IDRweCA0cHgsXG59XG5cbi5zdW1tYXJ5LWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5zdW1tYXJ5LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RvZGF5LWljb24tYm94IHtcbiAgICBncmlkLWFyZWE6IGljb24tYm94O1xufVxuXG4jdG9kYXktaWNvbiB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgcGFkZGluZzogLTEwcHggMCAtMTBweCAwXG59XG5cbiN0b2RheS10ZW1wLWJveHtcbiAgICBncmlkLWFyZWE6IHRlbXAtYm94O1xufVxuXG4jdG9kYXktdGVtcCB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xufVxuXG4jdG9kYXktZmVlbHNsaWtlLWJveCB7XG5ncmlkLWFyZWE6IGZlZWxzbGlrZS1ib3g7XG59XG5cbiN0b2RheS1mZWVsc2xpa2Uge1xuXG59XG5cbiN0b2RheS1oaWdoLWJveCB7XG5ncmlkLWFyZWE6IGhpZ2gtYm94O1xufVxuXG4jdG9kYXktaGlnaCB7XG5cbn1cblxuI3RvZGF5LWxvdy1ib3gge1xuZ3JpZC1hcmVhOiBsb3ctYm94O1xufVxuXG4jdG9kYXktbG93IHtcblxufVxuXG4jdG9kYXktcmlzZS1ib3gge1xuZ3JpZC1hcmVhOiByaXNlLWJveDtcbn1cblxuI3RvZGF5LXJpc2Uge1xuXG59XG5cbiN0b2RheS1zZXQtYm94IHtcbmdyaWQtYXJlYTogc2V0LWJveDtcbn1cblxuI3RvZGF5LXNldCB7XG5cbn1cblxuI3RvZGF5LW1vb24tYm94IHtcbmdyaWQtYXJlYTogbW9vbi1ib3g7XG59XG5cbiN0b2RheS1tb29uIHtcblxufVxuXG5cbi8qIERldGFpbHMgU2VjdGlvbiAqL1xuI3RvZGF5LWRldGFpbHMge1xuICAgIGdyaWQtYXJlYTogdG9kYXktZGV0YWlscztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJjb25kaXRpb24tYm94IGNvbmRpdGlvbi1ib3hcIlxuICAgIFwiaGlnaC1ib3ggbG93LWJveFwiXG4gICAgXCJyYWluLWJveCBodW1pZGl0eS1ib3hcIlxuICAgIFwid2luZHNwZWVkLWJveCB3aW5kZGlyZWN0aW9uLWJveFwiXG4gICAgO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTB4IDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbn1cblxuLmRldGFpbHMtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLmRldGFpbHMtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdG9kYXktY29uZGl0aW9uLWJveCB7XG5ncmlkLWFyZWE6IGNvbmRpdGlvbi1ib3g7XG5mb250LXNpemU6IDE5cHg7XG59XG5cbiN0b2RheS1jb25kaXRpb24ge1xuXG59XG5cbiN0b2RheS1yYWluLWJveCB7XG5ncmlkLWFyZWE6IHJhaW4tYm94O1xufVxuXG4jdG9kYXktcmFpbiB7XG5cbn1cblxuI3RvZGF5LWh1bWlkaXR5LWJveCB7XG5ncmlkLWFyZWE6IGh1bWlkaXR5LWJveDtcbn1cblxuI3RvZGF5LWh1bWlkaXR5IHtcblxufVxuXG4jdG9kYXktd2luZHNwZWVkLWJveCB7XG5ncmlkLWFyZWE6IHdpbmRzcGVlZC1ib3g7XG59XG5cbiN0b2RheS13aW5kc3BlZWQge1xuXG59XG5cbiN0b2RheS13aW5kZGlyZWN0aW9uLWJveCB7XG5ncmlkLWFyZWE6IHdpbmRkaXJlY3Rpb24tYm94O1xufVxuXG4jdG9kYXktd2luZGRpcmVjdGlvbiB7XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gICAgI2hlYWRlciB7IFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJsb2dvLWJveCBsb2dvLWJveFwiXG4gICAgICAgIFwic2VhcmNoLWJveCBtZXRyaWNcIjtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgI2xvZ28tYm94e1xuICAgICAgICBncmlkLWFyZWE6IGxvZ28tYm94O1xuICAgIH1cblxuICAgICNzZWFyY2gtYm94e1xuICAgIGdyaWQtYXJlYTogc2VhcmNoLWJveDtcbiAgICB9XG5cbiAgICAjc2VhcmNoLWZpZWxkIHtcbiAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDY1JSwgMzAwcHgpO1xuICAgIH1cblxuICAgICNtZXRyaWMge1xuICAgIGdyaWQtYXJlYTogbWV0cmljO1xuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNTJweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgIC5zdW1tYXJ5LWJveCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1ib3gge1xuZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgICN0b2RheS10ZW1wIHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbiAgICBcbiAgICAjY2l0eSB7XG5mb250LXNpemU6IDI1cHg7XG4gICAgfVxuICAgICNzZWFyY2gtZmllbGQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgI3NlYXJjaC1zdWJtaXQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgI21ldHJpYy1zd2l0Y2gge1xuXG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFF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QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO0FBQ0osZUFBZTtJQUNYOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtBQUNKLGVBQWU7SUFDWDtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTs7SUFFQTs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gfVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDM3NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuI2xvZ28tYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAwIDhweCAwIDA7XFxufVxcblxcbiNndXN0LWxvZ28ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbiNndXN0LXRleHQge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbiNzZWFyY2gtYm94IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuI3NlYXJjaC1maWVsZCB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDE3NSwgMTgyLCAxODIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogY2xhbXAoMTBweCwgNzYlLCAzMjJweCk7XFxufVxcblxcbiNzZWFyY2gtc3VibWl0IHtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0NSwgMTQwLCA1NCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNzZWFyY2gtc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTQwLCA1NCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNtZXRyaWMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyNi40OHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcXG59XFxuXFxuI21ldHJpYy1zd2l0Y2gge1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1NCwgMTMwLCAyNDUpO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21ldHJpYy1zd2l0Y2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEzMCwgMjQ1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuLyogT1ZFUkxBWSAqL1xcbiNvdmVybGF5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jb3ZlcmxheS1ndXN0LWxvZ28ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNvdmVybGF5LWd1c3QtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLyogV0VBVEhFUiBCT1ggKi9cXG4jd2VhdGhlci1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vdmVybGF5LXZpc2libGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBmbGV4LWdyb3c6IDE7ICovXFxufVxcblxcbi8qIFRvZGF5IFNlY3Rpb24gKi9cXG4jdG9kYXkge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInRvZGF5LWhlYWRcXFwiXFxuICAgIFxcXCJ0b2RheS13ZWF0aGVyXFxcIjtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbiAgICB3aWR0aDogY2xhbXAoMzgxcHgsIDQ1MHB4LCA1MDBweCk7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCAyOHB4IDRweCByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbiN0b2RheS1oZWFkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMjI2LCAyMzUpO1xcbiAgICBncmlkLWFyZWE6IHRvZGF5LWhlYWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcbn1cXG5cXG4jY2l0eXtcXG4gICAgZm9udC1zaXplOiAgMzVweDtcXG4gICAgcGFkZGluZzogOHB4XFxufVxcblxcbiNkYXRlLXRpbWUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RheS13ZWF0aGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB0b2RheS13ZWF0aGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInRvZGF5LXN1bW1hcnkgdG9kYXktZGV0YWlsc1xcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCA1cHggMjVweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTVU1NQVJZICovXFxuI3RvZGF5LXN1bW1hcnkge1xcbiAgICBncmlkLWFyZWE6IHRvZGF5LXN1bW1hcnk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJpY29uLWJveFxcXCJcXG4gICAgXFxcInRlbXAtYm94XFxcIlxcbiAgICBcXFwiZmVlbHNsaWtlLWJveFxcXCJcXG4gICAgXFxcInJpc2UtYm94XFxcIlxcbiAgICBcXFwic2V0LWJveFxcXCJcXG4gICAgXFxcIm1vb24tYm94XFxcIlxcbiAgICA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA1MHB4IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAwIDRweCA0cHggNHB4IDRweCxcXG59XFxuXFxuLnN1bW1hcnktYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uc3VtbWFyeS1sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdG9kYXktaWNvbi1ib3gge1xcbiAgICBncmlkLWFyZWE6IGljb24tYm94O1xcbn1cXG5cXG4jdG9kYXktaWNvbiB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBwYWRkaW5nOiAtMTBweCAwIC0xMHB4IDBcXG59XFxuXFxuI3RvZGF5LXRlbXAtYm94e1xcbiAgICBncmlkLWFyZWE6IHRlbXAtYm94O1xcbn1cXG5cXG4jdG9kYXktdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG59XFxuXFxuI3RvZGF5LWZlZWxzbGlrZS1ib3gge1xcbmdyaWQtYXJlYTogZmVlbHNsaWtlLWJveDtcXG59XFxuXFxuI3RvZGF5LWZlZWxzbGlrZSB7XFxuXFxufVxcblxcbiN0b2RheS1oaWdoLWJveCB7XFxuZ3JpZC1hcmVhOiBoaWdoLWJveDtcXG59XFxuXFxuI3RvZGF5LWhpZ2gge1xcblxcbn1cXG5cXG4jdG9kYXktbG93LWJveCB7XFxuZ3JpZC1hcmVhOiBsb3ctYm94O1xcbn1cXG5cXG4jdG9kYXktbG93IHtcXG5cXG59XFxuXFxuI3RvZGF5LXJpc2UtYm94IHtcXG5ncmlkLWFyZWE6IHJpc2UtYm94O1xcbn1cXG5cXG4jdG9kYXktcmlzZSB7XFxuXFxufVxcblxcbiN0b2RheS1zZXQtYm94IHtcXG5ncmlkLWFyZWE6IHNldC1ib3g7XFxufVxcblxcbiN0b2RheS1zZXQge1xcblxcbn1cXG5cXG4jdG9kYXktbW9vbi1ib3gge1xcbmdyaWQtYXJlYTogbW9vbi1ib3g7XFxufVxcblxcbiN0b2RheS1tb29uIHtcXG5cXG59XFxuXFxuXFxuLyogRGV0YWlscyBTZWN0aW9uICovXFxuI3RvZGF5LWRldGFpbHMge1xcbiAgICBncmlkLWFyZWE6IHRvZGF5LWRldGFpbHM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJjb25kaXRpb24tYm94IGNvbmRpdGlvbi1ib3hcXFwiXFxuICAgIFxcXCJoaWdoLWJveCBsb3ctYm94XFxcIlxcbiAgICBcXFwicmFpbi1ib3ggaHVtaWRpdHktYm94XFxcIlxcbiAgICBcXFwid2luZHNwZWVkLWJveCB3aW5kZGlyZWN0aW9uLWJveFxcXCJcXG4gICAgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUweCAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLmRldGFpbHMtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uZGV0YWlscy1sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdG9kYXktY29uZGl0aW9uLWJveCB7XFxuZ3JpZC1hcmVhOiBjb25kaXRpb24tYm94O1xcbmZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuI3RvZGF5LWNvbmRpdGlvbiB7XFxuXFxufVxcblxcbiN0b2RheS1yYWluLWJveCB7XFxuZ3JpZC1hcmVhOiByYWluLWJveDtcXG59XFxuXFxuI3RvZGF5LXJhaW4ge1xcblxcbn1cXG5cXG4jdG9kYXktaHVtaWRpdHktYm94IHtcXG5ncmlkLWFyZWE6IGh1bWlkaXR5LWJveDtcXG59XFxuXFxuI3RvZGF5LWh1bWlkaXR5IHtcXG5cXG59XFxuXFxuI3RvZGF5LXdpbmRzcGVlZC1ib3gge1xcbmdyaWQtYXJlYTogd2luZHNwZWVkLWJveDtcXG59XFxuXFxuI3RvZGF5LXdpbmRzcGVlZCB7XFxuXFxufVxcblxcbiN0b2RheS13aW5kZGlyZWN0aW9uLWJveCB7XFxuZ3JpZC1hcmVhOiB3aW5kZGlyZWN0aW9uLWJveDtcXG59XFxuXFxuI3RvZGF5LXdpbmRkaXJlY3Rpb24ge1xcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcXG4gICAgI2hlYWRlciB7IFxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImxvZ28tYm94IGxvZ28tYm94XFxcIlxcbiAgICAgICAgXFxcInNlYXJjaC1ib3ggbWV0cmljXFxcIjtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAjbG9nby1ib3h7XFxuICAgICAgICBncmlkLWFyZWE6IGxvZ28tYm94O1xcbiAgICB9XFxuXFxuICAgICNzZWFyY2gtYm94e1xcbiAgICBncmlkLWFyZWE6IHNlYXJjaC1ib3g7XFxuICAgIH1cXG5cXG4gICAgI3NlYXJjaC1maWVsZCB7XFxuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgNjUlLCAzMDBweCk7XFxuICAgIH1cXG5cXG4gICAgI21ldHJpYyB7XFxuICAgIGdyaWQtYXJlYTogbWV0cmljO1xcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogNTJweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcXG4gICAgLnN1bW1hcnktYm94IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcblxcbiAgICAuZGV0YWlscy1ib3gge1xcbmZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcblxcbiAgICAjdG9kYXktdGVtcCB7XFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNjaXR5IHtcXG5mb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG4gICAgI3NlYXJjaC1maWVsZCB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgI3NlYXJjaC1zdWJtaXQge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgICNtZXRyaWMtc3dpdGNoIHtcXG5cXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9yZXRyaWV2ZSc7XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG9iamVjdCB3aXRoIG9ubHkgdGhlIHdlYXRoZXIgZGF0YSB3ZSBhcmUgaW50ZXJldGVkIGluIGZyb20gZmV0Y2hcbmNvbnN0IFdlYXRoZXIgPSAoXG4gIGNpdHksXG4gIGRhdGVUaW1lLFxuICB0ZW1wQyxcbiAgdGVtcEYsXG4gIGZlZWxzTGlrZUMsXG4gIGZlZWxzTGlrZUYsXG4gIGhpZ2hDLFxuICBsb3dDLFxuICBoaWdoRixcbiAgbG93RixcbiAgc3VucmlzZSxcbiAgc3Vuc2V0LFxuICBtb29uLFxuICBjb25kaXRpb24sXG4gIGNoYW5jZVJhaW4sXG4gIGh1bWlkaXR5LFxuICB3aW5kTXBoLFxuICB3aW5kRGlyZWN0aW9uLFxuICBpY29uLFxuKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDaXR5ID0gY2l0eTtcbiAgY29uc3QgY3VycmVudERhdGVUaW1lID0gZGF0ZVRpbWU7XG4gIGNvbnN0IGN1cnJlbnRUZW1wQyA9IHRlbXBDO1xuICBjb25zdCBjdXJyZW50VGVtcEYgPSB0ZW1wRjtcbiAgY29uc3QgY3VycmVudEZlZWxzTGlrZUMgPSBmZWVsc0xpa2VDO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlRiA9IGZlZWxzTGlrZUY7XG4gIGNvbnN0IGN1cnJlbnRIaWdoQyA9IGhpZ2hDO1xuICBjb25zdCBjdXJyZW50TG93QyA9IGxvd0M7XG4gIGNvbnN0IGN1cnJlbnRIaWdoRiA9IGhpZ2hGO1xuICBjb25zdCBjdXJyZW50TG93RiA9IGxvd0Y7XG4gIGNvbnN0IGN1cnJlbnRTdW5yaXNlID0gc3VucmlzZTtcbiAgY29uc3QgY3VycmVudFN1bnNldCA9IHN1bnNldDtcbiAgY29uc3QgY3VycmVudE1vb24gPSBtb29uO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gY29uZGl0aW9uO1xuICBjb25zdCBjdXJyZW50Q2hhbmNlUmFpbiA9IGNoYW5jZVJhaW47XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGh1bWlkaXR5O1xuICBjb25zdCBjdXJyZW50V2luZE1waCA9IHdpbmRNcGg7XG4gIGNvbnN0IGN1cnJlbnRXaW5kRGlyZWN0aW9uID0gd2luZERpcmVjdGlvbjtcbiAgY29uc3QgY3VycmVudEljb24gPSBpY29uO1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudENpdHksXG4gICAgY3VycmVudERhdGVUaW1lLFxuICAgIGN1cnJlbnRUZW1wQyxcbiAgICBjdXJyZW50VGVtcEYsXG4gICAgY3VycmVudEZlZWxzTGlrZUMsXG4gICAgY3VycmVudEZlZWxzTGlrZUYsXG4gICAgY3VycmVudEhpZ2hDLFxuICAgIGN1cnJlbnRMb3dDLFxuICAgIGN1cnJlbnRIaWdoRixcbiAgICBjdXJyZW50TG93RixcbiAgICBjdXJyZW50U3VucmlzZSxcbiAgICBjdXJyZW50U3Vuc2V0LFxuICAgIGN1cnJlbnRNb29uLFxuICAgIGN1cnJlbnRDb25kaXRpb24sXG4gICAgY3VycmVudENoYW5jZVJhaW4sXG4gICAgY3VycmVudEh1bWlkaXR5LFxuICAgIGN1cnJlbnRXaW5kTXBoLFxuICAgIGN1cnJlbnRXaW5kRGlyZWN0aW9uLFxuICAgIGN1cnJlbnRJY29uLFxuICB9O1xufTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gdGhhdCB0YWtlcyBsb2NhbGUgcGFyYW0gKHF1ZXJ5KSBmcm9tIGNhbGwgaW4gdWkuanNcbi8vIHBhc3NlcyB0aGUgbG9jYWwgcGFyYW0gdG8gZ2V0V2VhdGhlcigpIGluIHJldHJpZXZlLmpzXG4vLyB0YWtlcyB0aGUgd2VhdGhlciBwYWNrYWdlIGl0IHJlY2lldmVzIGZyb20gYXBpLCBwdWxscyB0aGUgZGF0YSB3ZSBhcmUgaW50ZXJlc3RlZCBpblxuLy8gY3JlYXRlcyBhbmQgcmV0dXJucyB3ZWF0aGVyRGF0YSBvYmplY3Qgd2l0aCB0aGF0IGluZm8gZnJvbSBXZWF0aGVyIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IHBhcnNlV2VhdGhlciA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyUGFja2FnZSA9IGF3YWl0IGdldFdlYXRoZXIocXVlcnkpLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9KTtcblxuICBjb25zdCBjaXR5ID0gd2VhdGhlclBhY2thZ2UubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgZGF0ZVRpbWUgPSB3ZWF0aGVyUGFja2FnZS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGNvbnN0IHRlbXBDID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBGID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICBjb25zdCBmZWVsc0xpa2VGID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgY29uc3QgaGlnaEMgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jO1xuICBjb25zdCBsb3dDID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYztcbiAgY29uc3QgaGlnaEYgPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuICBjb25zdCBsb3dGID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcbiAgY29uc3QgeyBzdW5yaXNlIH0gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgeyBzdW5zZXQgfSA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCBtb29uID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcbiAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY2hhbmNlUmFpbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gd2VhdGhlclBhY2thZ2UuY3VycmVudDtcbiAgY29uc3Qgd2luZE1waCA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQud2luZF9tcGg7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LndpbmRfZGlyO1xuICBjb25zdCB7IGljb24gfSA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuY29uZGl0aW9uO1xuXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gV2VhdGhlcihcbiAgICBjaXR5LFxuICAgIGRhdGVUaW1lLFxuICAgIHRlbXBDLFxuICAgIHRlbXBGLFxuICAgIGZlZWxzTGlrZUMsXG4gICAgZmVlbHNMaWtlRixcbiAgICBoaWdoQyxcbiAgICBsb3dDLFxuICAgIGhpZ2hGLFxuICAgIGxvd0YsXG4gICAgc3VucmlzZSxcbiAgICBzdW5zZXQsXG4gICAgbW9vbixcbiAgICBjb25kaXRpb24sXG4gICAgY2hhbmNlUmFpbixcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kTXBoLFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgaWNvbixcbiAgKTtcblxuICByZXR1cm4gd2VhdGhlckRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZVdlYXRoZXI7XG4iLCIvLyBmZXRjaCB3ZWF0aGVyIGRhdGEgdy8gdXNlciBxdWVyeVxuLy8gcGFja2FnZSBkYXRhIGFzIGpzb24gYW5kIGFzc2luZyBpdCB0byB3ZWF0aGVyUGFja2FnZVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihxdWVyeSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zNmMwOWUyMDQ3Mzg0N2JjOTNmMTM0MzEyNDI3MDMmcT0ke3F1ZXJ5fSZkYXlzPTNgLFxuICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJQYWNrYWdlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlclBhY2thZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG4iLCJpbXBvcnQgcGFyc2VXZWF0aGVyIGZyb20gJy4vYXNzaWduJztcbmltcG9ydCBndXN0bG9nbyBmcm9tICcuL2ltYWdlcy9ndXN0LWxvZ28yLnBuZyc7XG5cbi8vIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYm94JylcbmNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1maWVsZCcpO1xuY29uc3Qgc2VhcmNoU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdWJtaXQnKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuY29uc3Qgb3ZlcmxheVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheS1ndXN0LXRleHQnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Jyk7XG5jb25zdCBndXN0TG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndXN0LWxvZ28nKTtcbmNvbnN0IG92ZXJsYXlHdXN0TG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5LWd1c3QtbG9nbycpO1xuY29uc3QgbWV0cmljU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldHJpYy1zd2l0Y2gnKTtcblxuLy8gbWV0cmljIHZhbHVlIGhvbGRlclxubGV0IGN1cnJlbnRNZXRyaWMgPSAnRic7XG5cbi8vIHVwZGF0ZXMgY3VycmVudCBtZXRyaWMgYWZ0ZXIgc3dpdGNoXG5jb25zdCBzd2l0Y2hNZXRyaWMgPSAoYSkgPT4ge1xuICBjdXJyZW50TWV0cmljID0gYTtcbn07XG5cbmNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gIC8vIGFzc2lnbiBpbWFnZXNcbiAgZ3VzdExvZ28uc3JjID0gZ3VzdGxvZ287XG4gIG92ZXJsYXlHdXN0TG9nby5zcmMgPSBndXN0bG9nbztcblxuICAvLyBncmFiIERPTSBjc3MgaG9va3NcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG4gIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdGltZScpO1xuICBjb25zdCB0b2RheVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktdGVtcCcpO1xuICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1mZWVsc2xpa2UnKTtcbiAgY29uc3QgdG9kYXlIaWdoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWhpZ2gnKTtcbiAgY29uc3QgdG9kYXlMb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktbG93Jyk7XG4gIGNvbnN0IHRvZGF5UmlzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1yaXNlJyk7XG4gIGNvbnN0IHRvZGF5U2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXNldCcpO1xuICBjb25zdCB0b2RheU1vb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktbW9vbicpO1xuICBjb25zdCB0b2RheUNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1jb25kaXRpb24nKTtcbiAgY29uc3QgdG9kYXlSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXJhaW4nKTtcbiAgY29uc3QgdG9kYXlIdW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1odW1pZGl0eScpO1xuICBjb25zdCB0b2RheVdpbmRNcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktd2luZHNwZWVkJyk7XG4gIGNvbnN0IHRvZGF5V2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS13aW5kZGlyZWN0aW9uJyk7XG4gIGNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1pY29uJyk7XG5cbiAgLy8gcnVuIHBhcnNlIHdlYXRoZXIgcGFzc2luZyBzZWFyY2gtZmlsZWQgdmFsdWUgYXMgcXVlcnkgcGFyYW1cbiAgLy8gaWYgZmFpbHMsIGNhdGNoIGVycm9yXG4gIGNvbnN0IGFzc2lnbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHBhcnNlV2VhdGhlcihxdWVyeSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcblxuICAgIC8vIHB1bGwgcmVsZXZhbnQgd2VhdGhlciBkYXRhIGZyb20gZmV0Y2ggaW50byB2YXJpYWJsZXMuXG4gICAgLy8gYWxvdCBvZiB0aGVzZSB1c2UgZGVzdHJ1Y3RpbmcgbWV0aG9kIGF0IGVzTGludCByZWNjb21lbmRhdGlvblxuICAgIGNvbnN0IHsgY3VycmVudENpdHkgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudERhdGVUaW1lIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRUZW1wRiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50RmVlbHNMaWtlRiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50SGlnaEYgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudExvd0YgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudFRlbXBDIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRGZWVsc0xpa2VDIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRIaWdoQyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50TG93QyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgY3VycmVudFJpc2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3VucmlzZTtcbiAgICBjb25zdCBjdXJyZW50U2V0ID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnNldDtcbiAgICBjb25zdCB7IGN1cnJlbnRNb29uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRDb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudENoYW5jZVJhaW4gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudEh1bWlkaXR5IH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kTXBoIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kRGlyZWN0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRJY29uIH0gPSB3ZWF0aGVyRGF0YTtcblxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50Q2l0eTtcbiAgICBkYXRldGltZS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRlVGltZTtcbiAgICB0b2RheUljb24uc3JjID0gY3VycmVudEljb247XG5cbiAgICAvLyBjb25kaXRpb25hbCB0byBrZWVwIGN1cnJlbnQgbWV0cmljIG9uIG5ldyBzZWFyY2hlc1xuICAgIGlmIChjdXJyZW50TWV0cmljID09PSAnRicpIHtcbiAgICAgIHRvZGF5VGVtcC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wRn1cXHUwMEIwRmA7XG4gICAgICB0b2RheUZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGZWVsc0xpa2VGfVxcdTAwQjBGYDtcbiAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIaWdoRn1cXHUwMEIwRmA7XG4gICAgICB0b2RheUxvdy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRMb3dGfVxcdTAwQjBGYDtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRNZXRyaWMgPT09ICdDJykge1xuICAgICAgdG9kYXlUZW1wLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRlbXBDfVxcdTAwQjBDYDtcbiAgICAgIHRvZGF5RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEZlZWxzTGlrZUN9XFx1MDBCMENgO1xuICAgICAgdG9kYXlIaWdoLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEhpZ2hDfVxcdTAwQjBDYDtcbiAgICAgIHRvZGF5TG93LnRleHRDb250ZW50ID0gYCR7Y3VycmVudExvd0N9XFx1MDBCMENgO1xuICAgIH1cblxuICAgIC8vIG1ha2UgdGhlIERPTSBlbGVtZW50cyBzaG93IHdlYXRoZXIgZGF0YVxuICAgIHRvZGF5UmlzZS50ZXh0Q29udGVudCA9IGN1cnJlbnRSaXNlO1xuICAgIHRvZGF5U2V0LnRleHRDb250ZW50ID0gY3VycmVudFNldDtcbiAgICB0b2RheU1vb24udGV4dENvbnRlbnQgPSBjdXJyZW50TW9vbjtcbiAgICB0b2RheUNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRDb25kaXRpb247XG4gICAgdG9kYXlSYWluLnRleHRDb250ZW50ID0gYCR7Y3VycmVudENoYW5jZVJhaW59JWA7XG4gICAgdG9kYXlIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIdW1pZGl0eX0lYDtcbiAgICB0b2RheVdpbmRNcGgudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2luZE1waH0gbXBoYDtcbiAgICB0b2RheVdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBjdXJyZW50V2luZERpcmVjdGlvbjtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xuICAgIHRvZGF5LmNsYXNzTmFtZSA9ICd2aXNpYmxlJztcblxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VGVtcEYsXG4gICAgICBjdXJyZW50RmVlbHNMaWtlRixcbiAgICAgIGN1cnJlbnRIaWdoRixcbiAgICAgIGN1cnJlbnRMb3dGLFxuICAgICAgY3VycmVudFRlbXBDLFxuICAgICAgY3VycmVudEZlZWxzTGlrZUMsXG4gICAgICBjdXJyZW50SGlnaEMsXG4gICAgICBjdXJyZW50TG93QyxcbiAgICB9O1xuICB9O1xuXG4gIC8vIHJ1bnMgYXNzaWduRGF0YSBhbmQgcG9wdWxhdGVzIGRhdGFcbiAgc2VhcmNoU3VibWl0Lm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc2VhcmNoRmllbGQudmFsdWUgIT09ICcnKSB7XG4gICAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICdvdmVybGF5LXZpc2libGUnO1xuICAgICAgb3ZlcmxheVRleHQudGV4dENvbnRlbnQgPSAnbG9hZGluZyAuLi4nO1xuICAgICAgdG9kYXkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG4gICAgICBhc3NpZ25EYXRhKCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBvdmVybGF5VGV4dC50ZXh0Q29udGVudCA9ICdXZSBjb3VsZCBub3QgZmluZCB0aGF0IGxvY2F0aW9uISc7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY2hhbmdlcyBtZXRyaWMgcmVhZGluZyBiYXNlZCBvbiBjdXJyZW50IG1ldHJpY1xuICBtZXRyaWNTd2l0Y2gub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodG9kYXkuY2xhc3NOYW1lID09PSAndmlzaWJsZScpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXNzaWduRGF0YSgpO1xuICAgICAgaWYgKGN1cnJlbnRNZXRyaWMgPT09ICdGJykge1xuICAgICAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRUZW1wQ31cXHUwMEIwQ2A7XG4gICAgICAgIHRvZGF5RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgKGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50RmVlbHNMaWtlQ1xuICAgICAgICB9XFx1MDBCMENgO1xuICAgICAgICB0b2RheUhpZ2gudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRIaWdoQ31cXHUwMEIwQ2A7XG4gICAgICAgIHRvZGF5TG93LnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50TG93Q31cXHUwMEIwQ2A7XG4gICAgICAgIHN3aXRjaE1ldHJpYygnQycpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50TWV0cmljID09PSAnQycpIHtcbiAgICAgICAgdG9kYXlUZW1wLnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50VGVtcEZ9XFx1MDBCMEZgO1xuICAgICAgICB0b2RheUZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgIChhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudEZlZWxzTGlrZUZcbiAgICAgICAgfVxcdTAwQjBGYDtcbiAgICAgICAgdG9kYXlIaWdoLnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50SGlnaEZ9XFx1MDBCMEZgO1xuICAgICAgICB0b2RheUxvdy50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudExvd0Z9XFx1MDBCMEZgO1xuICAgICAgICBzd2l0Y2hNZXRyaWMoJ0YnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZCBmcm9tICcuL3VpJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=