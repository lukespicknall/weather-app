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
    /* grid-template-columns: 2fr 3fr; */
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
    /* grid-template-columns: 2fr 3fr; */
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

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n }\n\n#content {\n    height: 100%;\n    min-width: 375px;\n    display: flex;\n    flex-direction: column;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 100px;\n    gap: 3px;\n}\n\n#logo-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    margin: 0 8px 0 0;\n}\n\n#gust-logo {\n    height: 60px;\n}\n\n#gust-text {\n    font-size: 28px;\n}\n\n#search-box {\n    white-space: nowrap;\n}\n\n#search-field {\n    font-size: 25px;\n    padding: 10px 15px 10px 15px;\n    border: solid 2px rgb(175, 182, 182);\n    border-radius: 20px;\n    width: clamp(10px, 76%, 322px);\n}\n\n#search-submit {\n    font-size: 21px;\n    background-color: white;\n    padding: 12px;\n    margin: 0 0 0 8px;\n    border: 2px solid rgb(245, 140, 54);\n    border-radius: 30px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n    box-sizing: border-box;\n}\n\n#search-submit:hover {\n    background-color: rgb(245, 140, 54);\n    border: 2px solid black;\n    color: white;\n    border-radius: 15px;\n}\n\n#metric {\n    display: flex;\n    justify-content: center;\n    width: 126.48px;\n    box-sizing: border-box;\n    margin: 0 0 0 8px;\n}\n\n#metric-switch {\n    font-size: 21px;\n    background-color: white;\n    padding: 12px;\n    border: 2px solid rgb(54, 130, 245);\n     border-radius: 15px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n}\n\n#metric-switch:hover {\n    background-color: rgb(54, 130, 245);\n    border: 2px solid black;\n    color: white;\n       border-radius: 30px;\n}\n\n/* OVERLAY */\n#overlay {\n    height: 100%;\n}\n\n#overlay-gust-logo {\n    width: 300px;\n}\n\n#overlay-gust-text {\n    font-size: 28px;\n}\n\n/* WEATHER BOX */\n#weather-box {\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin: 20px;\n}\n\n.hidden {\n    display: none;\n}\n\n.visible {\n    display: grid;\n}\n\n.overlay-visible{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* flex-grow: 1; */\n}\n\n/* Today Section */\n#today {\n    grid-template-areas: \n    \"today-head\"\n    \"today-weather\";\n    width: 375px;\n    width: clamp(381px, 450px, 500px);\n    height: 500px;\n    grid-template-rows: 100px 400px;\n    /* grid-template-columns: 2fr 3fr; */\n    border-radius: 25px 25px 10px 10px;\n    box-shadow: 20px 20px 28px 4px rgb(146, 146, 146);\n}\n\n/* HEADER */\n#today-head {\n    background-color: rgb(177, 226, 235);\n    grid-area: today-head;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 25px 25px 0 0;\n}\n\n#city{\n    font-size:  35px;\n    padding: 8px\n}\n\n#date-time {\n    font-size: 18px;\n}\n\n#today-weather {\n    grid-area: today-weather;\n    display: grid;\n    grid-template-areas: \n    \"today-summary today-details\";\n    grid-template-columns: 2fr 3fr;\n    height: 100%;\n    width: 100%;\n    padding: 0 5px 25px 0;\n    box-sizing: border-box;\n}\n\n/* SUMMARY */\n#today-summary {\n    grid-area: today-summary;\n    display: grid;\n    grid-template-areas:\n    \"icon-box\"\n    \"temp-box\"\n    \"feelslike-box\"\n    \"rise-box\"\n    \"set-box\"\n    \"moon-box\"\n    ;\n    grid-template-rows: 90px 50px 1fr 1fr 1fr 1fr;\n    /* grid-template-columns: 2fr 3fr; */\n    gap: 0 4px 4px 4px 4px,\n}\n\n.summary-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.summary-label {\n    font-weight: bold;\n}\n\n#today-icon-box {\n    grid-area: icon-box;\n}\n\n#today-icon {\n    width: 90px;\n    padding: -10px 0 -10px 0\n}\n\n#today-temp-box{\n    grid-area: temp-box;\n}\n\n#today-temp {\n    font-size: 45px;\n}\n\n#today-feelslike-box {\ngrid-area: feelslike-box;\n}\n\n#today-feelslike {\n\n}\n\n#today-high-box {\ngrid-area: high-box;\n}\n\n#today-high {\n\n}\n\n#today-low-box {\ngrid-area: low-box;\n}\n\n#today-low {\n\n}\n\n#today-rise-box {\ngrid-area: rise-box;\n}\n\n#today-rise {\n\n}\n\n#today-set-box {\ngrid-area: set-box;\n}\n\n#today-set {\n\n}\n\n#today-moon-box {\ngrid-area: moon-box;\n}\n\n#today-moon {\n\n}\n\n\n/* Details Section */\n#today-details {\n    grid-area: today-details;\n    display: grid;\n    grid-template-areas:\n    \"condition-box condition-box\"\n    \"high-box low-box\"\n    \"rain-box humidity-box\"\n    \"windspeed-box winddirection-box\"\n    ;\n    grid-template-rows: 50x 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.details-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.details-label {\n    font-weight: bold;\n}\n\n#today-condition-box {\ngrid-area: condition-box;\nfont-size: 19px;\n}\n\n#today-condition {\n\n}\n\n#today-rain-box {\ngrid-area: rain-box;\n}\n\n#today-rain {\n\n}\n\n#today-humidity-box {\ngrid-area: humidity-box;\n}\n\n#today-humidity {\n\n}\n\n#today-windspeed-box {\ngrid-area: windspeed-box;\n}\n\n#today-windspeed {\n\n}\n\n#today-winddirection-box {\ngrid-area: winddirection-box;\n}\n\n#today-winddirection {\n\n}\n\n@media (max-width: 620px) {\n    #header { \n        display: grid;\n        grid-template-areas: \n        \"logo-box logo-box\"\n        \"search-box metric\";\n        padding: 0 10px 0 10px;\n        \n    }\n\n    #logo-box{\n        grid-area: logo-box;\n    }\n\n    #search-box{\n    grid-area: search-box;\n    }\n\n    #search-field {\n    width: clamp(150px, 65%, 300px);\n    }\n\n    #metric {\n    grid-area: metric;\n    margin: 0 0 0 8px;\n    width: 75px;\n    height: 52px;\n    }\n}\n\n@media (max-width: 440px) {\n    .summary-box {\n        font-size: 14px;\n    }\n\n    .details-box {\nfont-size: 14px;\n    }\n\n    #today-temp {\n        font-size: 35px;\n    }\n    \n    #city {\nfont-size: 25px;\n    }\n    #search-field {\n        font-size: 16px;\n    }\n\n    #search-submit {\n        margin: 0;\n    }\n\n    #metric-switch {\n\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1B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V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0F3QjtBQUNIOztBQUVyQiwrQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZXRyaWV2ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gfVxuXG4jY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzc1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4jaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBnYXA6IDNweDtcbn1cblxuI2xvZ28tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMCA4cHggMCAwO1xufVxuXG4jZ3VzdC1sb2dvIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbiNndXN0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuI3NlYXJjaC1ib3gge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbiNzZWFyY2gtZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYigxNzUsIDE4MiwgMTgyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiBjbGFtcCgxMHB4LCA3NiUsIDMyMnB4KTtcbn1cblxuI3NlYXJjaC1zdWJtaXQge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDUsIDE0MCwgNTQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNzZWFyY2gtc3VibWl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxNDAsIDU0KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI21ldHJpYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTI2LjQ4cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcbn1cblxuI21ldHJpYy1zd2l0Y2gge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1NCwgMTMwLCAyNDUpO1xuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21ldHJpYy1zd2l0Y2g6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTMwLCAyNDUpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4vKiBPVkVSTEFZICovXG4jb3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jb3ZlcmxheS1ndXN0LWxvZ28ge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuI292ZXJsYXktZ3VzdC10ZXh0IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbi8qIFdFQVRIRVIgQk9YICovXG4jd2VhdGhlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5vdmVybGF5LXZpc2libGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xufVxuXG4vKiBUb2RheSBTZWN0aW9uICovXG4jdG9kYXkge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwidG9kYXktaGVhZFwiXG4gICAgXCJ0b2RheS13ZWF0aGVyXCI7XG4gICAgd2lkdGg6IDM3NXB4O1xuICAgIHdpZHRoOiBjbGFtcCgzODFweCwgNDUwcHgsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNDAwcHg7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAxMHB4IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDI4cHggNHB4IHJnYigxNDYsIDE0NiwgMTQ2KTtcbn1cblxuLyogSEVBREVSICovXG4jdG9kYXktaGVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMjI2LCAyMzUpO1xuICAgIGdyaWQtYXJlYTogdG9kYXktaGVhZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xufVxuXG4jY2l0eXtcbiAgICBmb250LXNpemU6ICAzNXB4O1xuICAgIHBhZGRpbmc6IDhweFxufVxuXG4jZGF0ZS10aW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiN0b2RheS13ZWF0aGVyIHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LXdlYXRoZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInRvZGF5LXN1bW1hcnkgdG9kYXktZGV0YWlsc1wiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1cHggMjVweCAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFNVTU1BUlkgKi9cbiN0b2RheS1zdW1tYXJ5IHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LXN1bW1hcnk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaWNvbi1ib3hcIlxuICAgIFwidGVtcC1ib3hcIlxuICAgIFwiZmVlbHNsaWtlLWJveFwiXG4gICAgXCJyaXNlLWJveFwiXG4gICAgXCJzZXQtYm94XCJcbiAgICBcIm1vb24tYm94XCJcbiAgICA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDUwcHggMWZyIDFmciAxZnIgMWZyO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cbiAgICBnYXA6IDAgNHB4IDRweCA0cHggNHB4LFxufVxuXG4uc3VtbWFyeS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xufVxuXG4uc3VtbWFyeS1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0b2RheS1pY29uLWJveCB7XG4gICAgZ3JpZC1hcmVhOiBpY29uLWJveDtcbn1cblxuI3RvZGF5LWljb24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIHBhZGRpbmc6IC0xMHB4IDAgLTEwcHggMFxufVxuXG4jdG9kYXktdGVtcC1ib3h7XG4gICAgZ3JpZC1hcmVhOiB0ZW1wLWJveDtcbn1cblxuI3RvZGF5LXRlbXAge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuI3RvZGF5LWZlZWxzbGlrZS1ib3gge1xuZ3JpZC1hcmVhOiBmZWVsc2xpa2UtYm94O1xufVxuXG4jdG9kYXktZmVlbHNsaWtlIHtcblxufVxuXG4jdG9kYXktaGlnaC1ib3gge1xuZ3JpZC1hcmVhOiBoaWdoLWJveDtcbn1cblxuI3RvZGF5LWhpZ2gge1xuXG59XG5cbiN0b2RheS1sb3ctYm94IHtcbmdyaWQtYXJlYTogbG93LWJveDtcbn1cblxuI3RvZGF5LWxvdyB7XG5cbn1cblxuI3RvZGF5LXJpc2UtYm94IHtcbmdyaWQtYXJlYTogcmlzZS1ib3g7XG59XG5cbiN0b2RheS1yaXNlIHtcblxufVxuXG4jdG9kYXktc2V0LWJveCB7XG5ncmlkLWFyZWE6IHNldC1ib3g7XG59XG5cbiN0b2RheS1zZXQge1xuXG59XG5cbiN0b2RheS1tb29uLWJveCB7XG5ncmlkLWFyZWE6IG1vb24tYm94O1xufVxuXG4jdG9kYXktbW9vbiB7XG5cbn1cblxuXG4vKiBEZXRhaWxzIFNlY3Rpb24gKi9cbiN0b2RheS1kZXRhaWxzIHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LWRldGFpbHM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiY29uZGl0aW9uLWJveCBjb25kaXRpb24tYm94XCJcbiAgICBcImhpZ2gtYm94IGxvdy1ib3hcIlxuICAgIFwicmFpbi1ib3ggaHVtaWRpdHktYm94XCJcbiAgICBcIndpbmRzcGVlZC1ib3ggd2luZGRpcmVjdGlvbi1ib3hcIlxuICAgIDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUweCAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXG59XG5cbi5kZXRhaWxzLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5kZXRhaWxzLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RvZGF5LWNvbmRpdGlvbi1ib3gge1xuZ3JpZC1hcmVhOiBjb25kaXRpb24tYm94O1xuZm9udC1zaXplOiAxOXB4O1xufVxuXG4jdG9kYXktY29uZGl0aW9uIHtcblxufVxuXG4jdG9kYXktcmFpbi1ib3gge1xuZ3JpZC1hcmVhOiByYWluLWJveDtcbn1cblxuI3RvZGF5LXJhaW4ge1xuXG59XG5cbiN0b2RheS1odW1pZGl0eS1ib3gge1xuZ3JpZC1hcmVhOiBodW1pZGl0eS1ib3g7XG59XG5cbiN0b2RheS1odW1pZGl0eSB7XG5cbn1cblxuI3RvZGF5LXdpbmRzcGVlZC1ib3gge1xuZ3JpZC1hcmVhOiB3aW5kc3BlZWQtYm94O1xufVxuXG4jdG9kYXktd2luZHNwZWVkIHtcblxufVxuXG4jdG9kYXktd2luZGRpcmVjdGlvbi1ib3gge1xuZ3JpZC1hcmVhOiB3aW5kZGlyZWN0aW9uLWJveDtcbn1cblxuI3RvZGF5LXdpbmRkaXJlY3Rpb24ge1xuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAgICNoZWFkZXIgeyBcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgIFwibG9nby1ib3ggbG9nby1ib3hcIlxuICAgICAgICBcInNlYXJjaC1ib3ggbWV0cmljXCI7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgICNsb2dvLWJveHtcbiAgICAgICAgZ3JpZC1hcmVhOiBsb2dvLWJveDtcbiAgICB9XG5cbiAgICAjc2VhcmNoLWJveHtcbiAgICBncmlkLWFyZWE6IHNlYXJjaC1ib3g7XG4gICAgfVxuXG4gICAgI3NlYXJjaC1maWVsZCB7XG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCA2NSUsIDMwMHB4KTtcbiAgICB9XG5cbiAgICAjbWV0cmljIHtcbiAgICBncmlkLWFyZWE6IG1ldHJpYztcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgICAuc3VtbWFyeS1ib3gge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtYm94IHtcbmZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAjdG9kYXktdGVtcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gICAgXG4gICAgI2NpdHkge1xuZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICAjc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgICNzZWFyY2gtc3VibWl0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICNtZXRyaWMtc3dpdGNoIHtcblxuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNi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O0lBRUE7SUFDQSxxQkFBcUI7SUFDckI7O0lBRUE7SUFDQSwrQkFBK0I7SUFDL0I7O0lBRUE7SUFDQSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtBQUNKLGVBQWU7SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7QUFDSixlQUFlO0lBQ1g7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7O0lBRUE7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAzNzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbiNsb2dvLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xcbn1cXG5cXG4jZ3VzdC1sb2dvIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4jZ3VzdC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jc2VhcmNoLWJveCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbiNzZWFyY2gtZmllbGQge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYigxNzUsIDE4MiwgMTgyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IGNsYW1wKDEwcHgsIDc2JSwgMzIycHgpO1xcbn1cXG5cXG4jc2VhcmNoLXN1Ym1pdCB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQ1LCAxNDAsIDU0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3NlYXJjaC1zdWJtaXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxNDAsIDU0KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI21ldHJpYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTI2LjQ4cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xcbn1cXG5cXG4jbWV0cmljLXN3aXRjaCB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1NCwgMTMwLCAyNDUpO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21ldHJpYy1zd2l0Y2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEzMCwgMjQ1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuLyogT1ZFUkxBWSAqL1xcbiNvdmVybGF5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jb3ZlcmxheS1ndXN0LWxvZ28ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNvdmVybGF5LWd1c3QtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLyogV0VBVEhFUiBCT1ggKi9cXG4jd2VhdGhlci1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vdmVybGF5LXZpc2libGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBmbGV4LWdyb3c6IDE7ICovXFxufVxcblxcbi8qIFRvZGF5IFNlY3Rpb24gKi9cXG4jdG9kYXkge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInRvZGF5LWhlYWRcXFwiXFxuICAgIFxcXCJ0b2RheS13ZWF0aGVyXFxcIjtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbiAgICB3aWR0aDogY2xhbXAoMzgxcHgsIDQ1MHB4LCA1MDBweCk7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNDAwcHg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDEwcHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDI4cHggNHB4IHJnYigxNDYsIDE0NiwgMTQ2KTtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI3RvZGF5LWhlYWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAyMjYsIDIzNSk7XFxuICAgIGdyaWQtYXJlYTogdG9kYXktaGVhZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XFxufVxcblxcbiNjaXR5e1xcbiAgICBmb250LXNpemU6ICAzNXB4O1xcbiAgICBwYWRkaW5nOiA4cHhcXG59XFxuXFxuI2RhdGUtdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RvZGF5LXdlYXRoZXIge1xcbiAgICBncmlkLWFyZWE6IHRvZGF5LXdlYXRoZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidG9kYXktc3VtbWFyeSB0b2RheS1kZXRhaWxzXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDVweCAyNXB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFNVTU1BUlkgKi9cXG4jdG9kYXktc3VtbWFyeSB7XFxuICAgIGdyaWQtYXJlYTogdG9kYXktc3VtbWFyeTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImljb24tYm94XFxcIlxcbiAgICBcXFwidGVtcC1ib3hcXFwiXFxuICAgIFxcXCJmZWVsc2xpa2UtYm94XFxcIlxcbiAgICBcXFwicmlzZS1ib3hcXFwiXFxuICAgIFxcXCJzZXQtYm94XFxcIlxcbiAgICBcXFwibW9vbi1ib3hcXFwiXFxuICAgIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDUwcHggMWZyIDFmciAxZnIgMWZyO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7ICovXFxuICAgIGdhcDogMCA0cHggNHB4IDRweCA0cHgsXFxufVxcblxcbi5zdW1tYXJ5LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnN1bW1hcnktbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvZGF5LWljb24tYm94IHtcXG4gICAgZ3JpZC1hcmVhOiBpY29uLWJveDtcXG59XFxuXFxuI3RvZGF5LWljb24ge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgcGFkZGluZzogLTEwcHggMCAtMTBweCAwXFxufVxcblxcbiN0b2RheS10ZW1wLWJveHtcXG4gICAgZ3JpZC1hcmVhOiB0ZW1wLWJveDtcXG59XFxuXFxuI3RvZGF5LXRlbXAge1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxufVxcblxcbiN0b2RheS1mZWVsc2xpa2UtYm94IHtcXG5ncmlkLWFyZWE6IGZlZWxzbGlrZS1ib3g7XFxufVxcblxcbiN0b2RheS1mZWVsc2xpa2Uge1xcblxcbn1cXG5cXG4jdG9kYXktaGlnaC1ib3gge1xcbmdyaWQtYXJlYTogaGlnaC1ib3g7XFxufVxcblxcbiN0b2RheS1oaWdoIHtcXG5cXG59XFxuXFxuI3RvZGF5LWxvdy1ib3gge1xcbmdyaWQtYXJlYTogbG93LWJveDtcXG59XFxuXFxuI3RvZGF5LWxvdyB7XFxuXFxufVxcblxcbiN0b2RheS1yaXNlLWJveCB7XFxuZ3JpZC1hcmVhOiByaXNlLWJveDtcXG59XFxuXFxuI3RvZGF5LXJpc2Uge1xcblxcbn1cXG5cXG4jdG9kYXktc2V0LWJveCB7XFxuZ3JpZC1hcmVhOiBzZXQtYm94O1xcbn1cXG5cXG4jdG9kYXktc2V0IHtcXG5cXG59XFxuXFxuI3RvZGF5LW1vb24tYm94IHtcXG5ncmlkLWFyZWE6IG1vb24tYm94O1xcbn1cXG5cXG4jdG9kYXktbW9vbiB7XFxuXFxufVxcblxcblxcbi8qIERldGFpbHMgU2VjdGlvbiAqL1xcbiN0b2RheS1kZXRhaWxzIHtcXG4gICAgZ3JpZC1hcmVhOiB0b2RheS1kZXRhaWxzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiY29uZGl0aW9uLWJveCBjb25kaXRpb24tYm94XFxcIlxcbiAgICBcXFwiaGlnaC1ib3ggbG93LWJveFxcXCJcXG4gICAgXFxcInJhaW4tYm94IGh1bWlkaXR5LWJveFxcXCJcXG4gICAgXFxcIndpbmRzcGVlZC1ib3ggd2luZGRpcmVjdGlvbi1ib3hcXFwiXFxuICAgIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHggMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi5kZXRhaWxzLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmRldGFpbHMtbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvZGF5LWNvbmRpdGlvbi1ib3gge1xcbmdyaWQtYXJlYTogY29uZGl0aW9uLWJveDtcXG5mb250LXNpemU6IDE5cHg7XFxufVxcblxcbiN0b2RheS1jb25kaXRpb24ge1xcblxcbn1cXG5cXG4jdG9kYXktcmFpbi1ib3gge1xcbmdyaWQtYXJlYTogcmFpbi1ib3g7XFxufVxcblxcbiN0b2RheS1yYWluIHtcXG5cXG59XFxuXFxuI3RvZGF5LWh1bWlkaXR5LWJveCB7XFxuZ3JpZC1hcmVhOiBodW1pZGl0eS1ib3g7XFxufVxcblxcbiN0b2RheS1odW1pZGl0eSB7XFxuXFxufVxcblxcbiN0b2RheS13aW5kc3BlZWQtYm94IHtcXG5ncmlkLWFyZWE6IHdpbmRzcGVlZC1ib3g7XFxufVxcblxcbiN0b2RheS13aW5kc3BlZWQge1xcblxcbn1cXG5cXG4jdG9kYXktd2luZGRpcmVjdGlvbi1ib3gge1xcbmdyaWQtYXJlYTogd2luZGRpcmVjdGlvbi1ib3g7XFxufVxcblxcbiN0b2RheS13aW5kZGlyZWN0aW9uIHtcXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxuICAgICNoZWFkZXIgeyBcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJsb2dvLWJveCBsb2dvLWJveFxcXCJcXG4gICAgICAgIFxcXCJzZWFyY2gtYm94IG1ldHJpY1xcXCI7XFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgI2xvZ28tYm94e1xcbiAgICAgICAgZ3JpZC1hcmVhOiBsb2dvLWJveDtcXG4gICAgfVxcblxcbiAgICAjc2VhcmNoLWJveHtcXG4gICAgZ3JpZC1hcmVhOiBzZWFyY2gtYm94O1xcbiAgICB9XFxuXFxuICAgICNzZWFyY2gtZmllbGQge1xcbiAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDY1JSwgMzAwcHgpO1xcbiAgICB9XFxuXFxuICAgICNtZXRyaWMge1xcbiAgICBncmlkLWFyZWE6IG1ldHJpYztcXG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XFxuICAgIC5zdW1tYXJ5LWJveCB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgLmRldGFpbHMtYm94IHtcXG5mb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgI3RvZGF5LXRlbXAge1xcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAjY2l0eSB7XFxuZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgICNzZWFyY2gtZmllbGQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuXFxuICAgICNzZWFyY2gtc3VibWl0IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAjbWV0cmljLXN3aXRjaCB7XFxuXFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vcmV0cmlldmUnO1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBvYmplY3Qgd2l0aCBvbmx5IHRoZSB3ZWF0aGVyIGRhdGEgd2UgYXJlIGludGVyZXRlZCBpbiBmcm9tIGZldGNoXG5jb25zdCBXZWF0aGVyID0gKFxuICBjaXR5LFxuICBkYXRlVGltZSxcbiAgdGVtcEMsXG4gIHRlbXBGLFxuICBmZWVsc0xpa2VDLFxuICBmZWVsc0xpa2VGLFxuICBoaWdoQyxcbiAgbG93QyxcbiAgaGlnaEYsXG4gIGxvd0YsXG4gIHN1bnJpc2UsXG4gIHN1bnNldCxcbiAgbW9vbixcbiAgY29uZGl0aW9uLFxuICBjaGFuY2VSYWluLFxuICBodW1pZGl0eSxcbiAgd2luZE1waCxcbiAgd2luZERpcmVjdGlvbixcbiAgaWNvbixcbikgPT4ge1xuICBjb25zdCBjdXJyZW50Q2l0eSA9IGNpdHk7XG4gIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IGRhdGVUaW1lO1xuICBjb25zdCBjdXJyZW50VGVtcEMgPSB0ZW1wQztcbiAgY29uc3QgY3VycmVudFRlbXBGID0gdGVtcEY7XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VDID0gZmVlbHNMaWtlQztcbiAgY29uc3QgY3VycmVudEZlZWxzTGlrZUYgPSBmZWVsc0xpa2VGO1xuICBjb25zdCBjdXJyZW50SGlnaEMgPSBoaWdoQztcbiAgY29uc3QgY3VycmVudExvd0MgPSBsb3dDO1xuICBjb25zdCBjdXJyZW50SGlnaEYgPSBoaWdoRjtcbiAgY29uc3QgY3VycmVudExvd0YgPSBsb3dGO1xuICBjb25zdCBjdXJyZW50U3VucmlzZSA9IHN1bnJpc2U7XG4gIGNvbnN0IGN1cnJlbnRTdW5zZXQgPSBzdW5zZXQ7XG4gIGNvbnN0IGN1cnJlbnRNb29uID0gbW9vbjtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgY29uc3QgY3VycmVudENoYW5jZVJhaW4gPSBjaGFuY2VSYWluO1xuICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgY29uc3QgY3VycmVudFdpbmRNcGggPSB3aW5kTXBoO1xuICBjb25zdCBjdXJyZW50V2luZERpcmVjdGlvbiA9IHdpbmREaXJlY3Rpb247XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gaWNvbjtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRDaXR5LFxuICAgIGN1cnJlbnREYXRlVGltZSxcbiAgICBjdXJyZW50VGVtcEMsXG4gICAgY3VycmVudFRlbXBGLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VDLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VGLFxuICAgIGN1cnJlbnRIaWdoQyxcbiAgICBjdXJyZW50TG93QyxcbiAgICBjdXJyZW50SGlnaEYsXG4gICAgY3VycmVudExvd0YsXG4gICAgY3VycmVudFN1bnJpc2UsXG4gICAgY3VycmVudFN1bnNldCxcbiAgICBjdXJyZW50TW9vbixcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGN1cnJlbnRDaGFuY2VSYWluLFxuICAgIGN1cnJlbnRIdW1pZGl0eSxcbiAgICBjdXJyZW50V2luZE1waCxcbiAgICBjdXJyZW50V2luZERpcmVjdGlvbixcbiAgICBjdXJyZW50SWNvbixcbiAgfTtcbn07XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbG9jYWxlIHBhcmFtIChxdWVyeSkgZnJvbSBjYWxsIGluIHVpLmpzXG4vLyBwYXNzZXMgdGhlIGxvY2FsIHBhcmFtIHRvIGdldFdlYXRoZXIoKSBpbiByZXRyaWV2ZS5qc1xuLy8gdGFrZXMgdGhlIHdlYXRoZXIgcGFja2FnZSBpdCByZWNpZXZlcyBmcm9tIGFwaSwgcHVsbHMgdGhlIGRhdGEgd2UgYXJlIGludGVyZXN0ZWQgaW5cbi8vIGNyZWF0ZXMgYW5kIHJldHVybnMgd2VhdGhlckRhdGEgb2JqZWN0IHdpdGggdGhhdCBpbmZvIGZyb20gV2VhdGhlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBwYXJzZVdlYXRoZXIgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgY29uc3Qgd2VhdGhlclBhY2thZ2UgPSBhd2FpdCBnZXRXZWF0aGVyKHF1ZXJ5KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cbiAgY29uc3QgY2l0eSA9IHdlYXRoZXJQYWNrYWdlLmxvY2F0aW9uLm5hbWU7XG4gIGNvbnN0IGRhdGVUaW1lID0gd2VhdGhlclBhY2thZ2UubG9jYXRpb24ubG9jYWx0aW1lO1xuICBjb25zdCB0ZW1wQyA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wRiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQudGVtcF9mO1xuICBjb25zdCBmZWVsc0xpa2VDID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY29uc3QgZmVlbHNMaWtlRiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG4gIGNvbnN0IGhpZ2hDID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYztcbiAgY29uc3QgbG93QyA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2M7XG4gIGNvbnN0IGhpZ2hGID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcbiAgY29uc3QgbG93RiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG4gIGNvbnN0IHsgc3VucmlzZSB9ID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IHsgc3Vuc2V0IH0gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgbW9vbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNoYW5jZVJhaW4gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQ7XG4gIGNvbnN0IHdpbmRNcGggPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC53aW5kX2RpcjtcbiAgY29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmNvbmRpdGlvbjtcblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IFdlYXRoZXIoXG4gICAgY2l0eSxcbiAgICBkYXRlVGltZSxcbiAgICB0ZW1wQyxcbiAgICB0ZW1wRixcbiAgICBmZWVsc0xpa2VDLFxuICAgIGZlZWxzTGlrZUYsXG4gICAgaGlnaEMsXG4gICAgbG93QyxcbiAgICBoaWdoRixcbiAgICBsb3dGLFxuICAgIHN1bnJpc2UsXG4gICAgc3Vuc2V0LFxuICAgIG1vb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGNoYW5jZVJhaW4sXG4gICAgaHVtaWRpdHksXG4gICAgd2luZE1waCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIGljb24sXG4gICk7XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VXZWF0aGVyO1xuIiwiLy8gZmV0Y2ggd2VhdGhlciBkYXRhIHcvIHVzZXIgcXVlcnlcbi8vIHBhY2thZ2UgZGF0YSBhcyBqc29uIGFuZCBhc3NpbmcgaXQgdG8gd2VhdGhlclBhY2thZ2VcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocXVlcnkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzZjMDllMjA0NzM4NDdiYzkzZjEzNDMxMjQyNzAzJnE9JHtxdWVyeX0mZGF5cz0zYCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICApO1xuICBjb25zdCB3ZWF0aGVyUGFja2FnZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJQYWNrYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiaW1wb3J0IHBhcnNlV2VhdGhlciBmcm9tICcuL2Fzc2lnbic7XG5pbXBvcnQgZ3VzdGxvZ28gZnJvbSAnLi9pbWFnZXMvZ3VzdC1sb2dvMi5wbmcnO1xuXG4vLyBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpXG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZmllbGQnKTtcbmNvbnN0IHNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3VibWl0Jyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbmNvbnN0IG92ZXJsYXlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXktZ3VzdC10ZXh0Jyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgZ3VzdExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VzdC1sb2dvJyk7XG5jb25zdCBvdmVybGF5R3VzdExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheS1ndXN0LWxvZ28nKTtcbmNvbnN0IG1ldHJpY1N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRyaWMtc3dpdGNoJyk7XG5cbi8vIG1ldHJpYyB2YWx1ZSBob2xkZXJcbmxldCBjdXJyZW50TWV0cmljID0gJ0YnO1xuXG4vLyB1cGRhdGVzIGN1cnJlbnQgbWV0cmljIGFmdGVyIHN3aXRjaFxuY29uc3Qgc3dpdGNoTWV0cmljID0gKGEpID0+IHtcbiAgY3VycmVudE1ldHJpYyA9IGE7XG59O1xuXG5jb25zdCBsb2FkID0gKCkgPT4ge1xuICAvLyBhc3NpZ24gaW1hZ2VzXG4gIGd1c3RMb2dvLnNyYyA9IGd1c3Rsb2dvO1xuICBvdmVybGF5R3VzdExvZ28uc3JjID0gZ3VzdGxvZ287XG5cbiAgLy8gZ3JhYiBET00gY3NzIGhvb2tzXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRpbWUnKTtcbiAgY29uc3QgdG9kYXlUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXRlbXAnKTtcbiAgY29uc3QgdG9kYXlGZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktZmVlbHNsaWtlJyk7XG4gIGNvbnN0IHRvZGF5SGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1oaWdoJyk7XG4gIGNvbnN0IHRvZGF5TG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWxvdycpO1xuICBjb25zdCB0b2RheVJpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktcmlzZScpO1xuICBjb25zdCB0b2RheVNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1zZXQnKTtcbiAgY29uc3QgdG9kYXlNb29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LW1vb24nKTtcbiAgY29uc3QgdG9kYXlDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktY29uZGl0aW9uJyk7XG4gIGNvbnN0IHRvZGF5UmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1yYWluJyk7XG4gIGNvbnN0IHRvZGF5SHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaHVtaWRpdHknKTtcbiAgY29uc3QgdG9kYXlXaW5kTXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdpbmRzcGVlZCcpO1xuICBjb25zdCB0b2RheVdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktd2luZGRpcmVjdGlvbicpO1xuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaWNvbicpO1xuXG4gIC8vIHJ1biBwYXJzZSB3ZWF0aGVyIHBhc3Npbmcgc2VhcmNoLWZpbGVkIHZhbHVlIGFzIHF1ZXJ5IHBhcmFtXG4gIC8vIGlmIGZhaWxzLCBjYXRjaCBlcnJvclxuICBjb25zdCBhc3NpZ25EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoRmllbGQudmFsdWU7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBwYXJzZVdlYXRoZXIocXVlcnkpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG5cbiAgICAvLyBwdWxsIHJlbGV2YW50IHdlYXRoZXIgZGF0YSBmcm9tIGZldGNoIGludG8gdmFyaWFibGVzLlxuICAgIC8vIGFsb3Qgb2YgdGhlc2UgdXNlIGRlc3RydWN0aW5nIG1ldGhvZCBhdCBlc0xpbnQgcmVjY29tZW5kYXRpb25cbiAgICBjb25zdCB7IGN1cnJlbnRDaXR5IH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnREYXRlVGltZSB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50VGVtcEYgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudEZlZWxzTGlrZUYgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudEhpZ2hGIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRMb3dGIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRUZW1wQyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50RmVlbHNMaWtlQyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50SGlnaEMgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudExvd0MgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IGN1cnJlbnRSaXNlID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnJpc2U7XG4gICAgY29uc3QgY3VycmVudFNldCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRTdW5zZXQ7XG4gICAgY29uc3QgeyBjdXJyZW50TW9vbiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50Q29uZGl0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRDaGFuY2VSYWluIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRIdW1pZGl0eSB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50V2luZE1waCB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50V2luZERpcmVjdGlvbiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50SWNvbiB9ID0gd2VhdGhlckRhdGE7XG5cbiAgICBjaXR5LnRleHRDb250ZW50ID0gY3VycmVudENpdHk7XG4gICAgZGF0ZXRpbWUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0ZVRpbWU7XG4gICAgdG9kYXlJY29uLnNyYyA9IGN1cnJlbnRJY29uO1xuXG4gICAgLy8gY29uZGl0aW9uYWwgdG8ga2VlcCBjdXJyZW50IG1ldHJpYyBvbiBuZXcgc2VhcmNoZXNcbiAgICBpZiAoY3VycmVudE1ldHJpYyA9PT0gJ0YnKSB7XG4gICAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcEZ9XFx1MDBCMEZgO1xuICAgICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RmVlbHNMaWtlRn1cXHUwMEIwRmA7XG4gICAgICB0b2RheUhpZ2gudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SGlnaEZ9XFx1MDBCMEZgO1xuICAgICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TG93Rn1cXHUwMEIwRmA7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50TWV0cmljID09PSAnQycpIHtcbiAgICAgIHRvZGF5VGVtcC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wQ31cXHUwMEIwQ2A7XG4gICAgICB0b2RheUZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGZWVsc0xpa2VDfVxcdTAwQjBDYDtcbiAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIaWdoQ31cXHUwMEIwQ2A7XG4gICAgICB0b2RheUxvdy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRMb3dDfVxcdTAwQjBDYDtcbiAgICB9XG5cbiAgICAvLyBtYWtlIHRoZSBET00gZWxlbWVudHMgc2hvdyB3ZWF0aGVyIGRhdGFcbiAgICB0b2RheVJpc2UudGV4dENvbnRlbnQgPSBjdXJyZW50UmlzZTtcbiAgICB0b2RheVNldC50ZXh0Q29udGVudCA9IGN1cnJlbnRTZXQ7XG4gICAgdG9kYXlNb29uLnRleHRDb250ZW50ID0gY3VycmVudE1vb247XG4gICAgdG9kYXlDb25kaXRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50Q29uZGl0aW9uO1xuICAgIHRvZGF5UmFpbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRDaGFuY2VSYWlufSVgO1xuICAgIHRvZGF5SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SHVtaWRpdHl9JWA7XG4gICAgdG9kYXlXaW5kTXBoLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdpbmRNcGh9IG1waGA7XG4gICAgdG9kYXlXaW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFdpbmREaXJlY3Rpb247XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnaGlkZGVuJztcbiAgICB0b2RheS5jbGFzc05hbWUgPSAndmlzaWJsZSc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFRlbXBGLFxuICAgICAgY3VycmVudEZlZWxzTGlrZUYsXG4gICAgICBjdXJyZW50SGlnaEYsXG4gICAgICBjdXJyZW50TG93RixcbiAgICAgIGN1cnJlbnRUZW1wQyxcbiAgICAgIGN1cnJlbnRGZWVsc0xpa2VDLFxuICAgICAgY3VycmVudEhpZ2hDLFxuICAgICAgY3VycmVudExvd0MsXG4gICAgfTtcbiAgfTtcblxuICAvLyBydW5zIGFzc2lnbkRhdGEgYW5kIHBvcHVsYXRlcyBkYXRhXG4gIHNlYXJjaFN1Ym1pdC5vbmNsaWNrID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHNlYXJjaEZpZWxkLnZhbHVlICE9PSAnJykge1xuICAgICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheS12aXNpYmxlJztcbiAgICAgIG92ZXJsYXlUZXh0LnRleHRDb250ZW50ID0gJ2xvYWRpbmcgLi4uJztcbiAgICAgIHRvZGF5LmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xuICAgICAgYXNzaWduRGF0YSgpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgb3ZlcmxheVRleHQudGV4dENvbnRlbnQgPSAnV2UgY291bGQgbm90IGZpbmQgdGhhdCBsb2NhdGlvbiEnO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNoYW5nZXMgbWV0cmljIHJlYWRpbmcgYmFzZWQgb24gY3VycmVudCBtZXRyaWNcbiAgbWV0cmljU3dpdGNoLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRvZGF5LmNsYXNzTmFtZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IGFzc2lnbkRhdGEoKTtcbiAgICAgIGlmIChjdXJyZW50TWV0cmljID09PSAnRicpIHtcbiAgICAgICAgdG9kYXlUZW1wLnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50VGVtcEN9XFx1MDBCMENgO1xuICAgICAgICB0b2RheUZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgIChhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudEZlZWxzTGlrZUNcbiAgICAgICAgfVxcdTAwQjBDYDtcbiAgICAgICAgdG9kYXlIaWdoLnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50SGlnaEN9XFx1MDBCMENgO1xuICAgICAgICB0b2RheUxvdy50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudExvd0N9XFx1MDBCMENgO1xuICAgICAgICBzd2l0Y2hNZXRyaWMoJ0MnKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudE1ldHJpYyA9PT0gJ0MnKSB7XG4gICAgICAgIHRvZGF5VGVtcC50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudFRlbXBGfVxcdTAwQjBGYDtcbiAgICAgICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRGZWVsc0xpa2VGXG4gICAgICAgIH1cXHUwMEIwRmA7XG4gICAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudEhpZ2hGfVxcdTAwQjBGYDtcbiAgICAgICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRMb3dGfVxcdTAwQjBGYDtcbiAgICAgICAgc3dpdGNoTWV0cmljKCdGJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWQgZnJvbSAnLi91aSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9