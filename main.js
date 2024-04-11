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
    min-width: 420px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n }\n\n#content {\n    height: 100%;\n    min-width: 420px;\n    display: flex;\n    flex-direction: column;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 100px;\n    gap: 3px;\n}\n\n#logo-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    margin: 0 8px 0 0;\n}\n\n#gust-logo {\n    height: 60px;\n}\n\n#gust-text {\n    font-size: 28px;\n}\n\n#search-box {\n    white-space: nowrap;\n}\n\n#search-field {\n    font-size: 25px;\n    padding: 10px 15px 10px 15px;\n    border: solid 2px rgb(175, 182, 182);\n    border-radius: 20px;\n    width: clamp(10px, 76%, 322px);\n}\n\n#search-submit {\n    font-size: 21px;\n    background-color: white;\n    padding: 12px;\n    margin: 0 0 0 8px;\n    border: 2px solid rgb(245, 140, 54);\n    border-radius: 30px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n    box-sizing: border-box;\n}\n\n#search-submit:hover {\n    background-color: rgb(245, 140, 54);\n    border: 2px solid black;\n    color: white;\n    border-radius: 15px;\n}\n\n#metric {\n    display: flex;\n    justify-content: center;\n    width: 126.48px;\n    box-sizing: border-box;\n    margin: 0 0 0 8px;\n}\n\n#metric-switch {\n    font-size: 21px;\n    background-color: white;\n    padding: 12px;\n    border: 2px solid rgb(54, 130, 245);\n     border-radius: 15px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n}\n\n#metric-switch:hover {\n    background-color: rgb(54, 130, 245);\n    border: 2px solid black;\n    color: white;\n       border-radius: 30px;\n}\n\n/* OVERLAY */\n#overlay {\n    height: 100%;\n}\n\n#overlay-gust-logo {\n    width: 300px;\n}\n\n#overlay-gust-text {\n    font-size: 28px;\n}\n\n/* WEATHER BOX */\n#weather-box {\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin: 20px;\n}\n\n.hidden {\n    display: none;\n}\n\n.visible {\n    display: grid;\n}\n\n.overlay-visible{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* flex-grow: 1; */\n}\n\n/* Today Section */\n#today {\n    grid-template-areas: \n    \"today-head\"\n    \"today-weather\";\n    width: 375px;\n    width: clamp(381px, 450px, 500px);\n    height: 500px;\n    grid-template-rows: 100px 400px;\n    /* grid-template-columns: 2fr 3fr; */\n    border-radius: 25px 25px 10px 10px;\n    box-shadow: 20px 20px 28px 4px rgb(146, 146, 146);\n}\n\n/* HEADER */\n#today-head {\n    background-color: rgb(177, 226, 235);\n    grid-area: today-head;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 25px 25px 0 0;\n}\n\n#city{\n    font-size:  35px;\n    padding: 8px\n}\n\n#date-time {\n    font-size: 18px;\n}\n\n#today-weather {\n    grid-area: today-weather;\n    display: grid;\n    grid-template-areas: \n    \"today-summary today-details\";\n    grid-template-columns: 2fr 3fr;\n    height: 100%;\n    width: 100%;\n    padding: 0 5px 25px 0;\n    box-sizing: border-box;\n}\n\n/* SUMMARY */\n#today-summary {\n    grid-area: today-summary;\n    display: grid;\n    grid-template-areas:\n    \"icon-box\"\n    \"temp-box\"\n    \"feelslike-box\"\n    \"rise-box\"\n    \"set-box\"\n    \"moon-box\"\n    ;\n    grid-template-rows: 90px 50px 1fr 1fr 1fr 1fr;\n    /* grid-template-columns: 2fr 3fr; */\n    gap: 0 4px 4px 4px 4px,\n}\n\n.summary-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.summary-label {\n    font-weight: bold;\n}\n\n#today-icon-box {\n    grid-area: icon-box;\n}\n\n#today-icon {\n    width: 90px;\n    padding: -10px 0 -10px 0\n}\n\n#today-temp-box{\n    grid-area: temp-box;\n}\n\n#today-temp {\n    font-size: 45px;\n}\n\n#today-feelslike-box {\ngrid-area: feelslike-box;\n}\n\n#today-feelslike {\n\n}\n\n#today-high-box {\ngrid-area: high-box;\n}\n\n#today-high {\n\n}\n\n#today-low-box {\ngrid-area: low-box;\n}\n\n#today-low {\n\n}\n\n#today-rise-box {\ngrid-area: rise-box;\n}\n\n#today-rise {\n\n}\n\n#today-set-box {\ngrid-area: set-box;\n}\n\n#today-set {\n\n}\n\n#today-moon-box {\ngrid-area: moon-box;\n}\n\n#today-moon {\n\n}\n\n\n/* Details Section */\n#today-details {\n    grid-area: today-details;\n    display: grid;\n    grid-template-areas:\n    \"condition-box condition-box\"\n    \"high-box low-box\"\n    \"rain-box humidity-box\"\n    \"windspeed-box winddirection-box\"\n    ;\n    grid-template-rows: 50x 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.details-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.details-label {\n    font-weight: bold;\n}\n\n#today-condition-box {\ngrid-area: condition-box;\nfont-size: 19px;\n}\n\n#today-condition {\n\n}\n\n#today-rain-box {\ngrid-area: rain-box;\n}\n\n#today-rain {\n\n}\n\n#today-humidity-box {\ngrid-area: humidity-box;\n}\n\n#today-humidity {\n\n}\n\n#today-windspeed-box {\ngrid-area: windspeed-box;\n}\n\n#today-windspeed {\n\n}\n\n#today-winddirection-box {\ngrid-area: winddirection-box;\n}\n\n#today-winddirection {\n\n}\n\n@media (max-width: 620px) {\n    #header { \n        display: grid;\n        grid-template-areas: \n        \"logo-box logo-box\"\n        \"search-box metric\";\n        padding: 0 10px 0 10px;\n        \n    }\n\n    #logo-box{\n        grid-area: logo-box;\n    }\n\n    #search-box{\n    grid-area: search-box;\n    }\n\n    #search-field {\n    width: clamp(150px, 65%, 300px);\n    }\n\n    #metric {\n    grid-area: metric;\n    margin: 0 0 0 8px;\n    width: 75px;\n    height: 52px;\n    }\n}"],"sourceRoot":""}]);
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

  const assignData = async () => {
    const query = searchField.value;
    const weatherData = await (0,_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(query).catch((err) => {
      console.log(err);
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFP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LE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUNBQW1DLGlDQUFpQztBQUNwRSxrQ0FBa0MsZ0NBQWdDO0FBQ2xFO0FBQ0EsUUFBUTtBQUNSLG1DQUFtQyxpQ0FBaUM7QUFDcEU7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQ0FBbUMsaUNBQWlDO0FBQ3BFLGtDQUFrQyxnQ0FBZ0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakpwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBd0I7QUFDSDs7QUFFckIsK0NBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmV0cmlldmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuIH1cblxuI2NvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDQyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZ2FwOiAzcHg7XG59XG5cbiNsb2dvLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW46IDAgOHB4IDAgMDtcbn1cblxuI2d1c3QtbG9nbyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4jZ3VzdC10ZXh0IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbiNzZWFyY2gtYm94IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4jc2VhcmNoLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTc1LCAxODIsIDE4Mik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogY2xhbXAoMTBweCwgNzYlLCAzMjJweCk7XG59XG5cbiNzZWFyY2gtc3VibWl0IHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQ1LCAxNDAsIDU0KTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jc2VhcmNoLXN1Ym1pdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTQwLCA1NCk7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNtZXRyaWMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyNi40OHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XG59XG5cbiNtZXRyaWMtc3dpdGNoIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTQsIDEzMCwgMjQ1KTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZXRyaWMtc3dpdGNoOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEzMCwgMjQ1KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLyogT1ZFUkxBWSAqL1xuI292ZXJsYXkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI292ZXJsYXktZ3VzdC1sb2dvIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbiNvdmVybGF5LWd1c3QtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4vKiBXRUFUSEVSIEJPWCAqL1xuI3dlYXRoZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ub3ZlcmxheS12aXNpYmxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGZsZXgtZ3JvdzogMTsgKi9cbn1cblxuLyogVG9kYXkgU2VjdGlvbiAqL1xuI3RvZGF5IHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInRvZGF5LWhlYWRcIlxuICAgIFwidG9kYXktd2VhdGhlclwiO1xuICAgIHdpZHRoOiAzNzVweDtcbiAgICB3aWR0aDogY2xhbXAoMzgxcHgsIDQ1MHB4LCA1MDBweCk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDQwMHB4O1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMTBweCAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCAyOHB4IDRweCByZ2IoMTQ2LCAxNDYsIDE0Nik7XG59XG5cbi8qIEhFQURFUiAqL1xuI3RvZGF5LWhlYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDIyNiwgMjM1KTtcbiAgICBncmlkLWFyZWE6IHRvZGF5LWhlYWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbn1cblxuI2NpdHl7XG4gICAgZm9udC1zaXplOiAgMzVweDtcbiAgICBwYWRkaW5nOiA4cHhcbn1cblxuI2RhdGUtdGltZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jdG9kYXktd2VhdGhlciB7XG4gICAgZ3JpZC1hcmVhOiB0b2RheS13ZWF0aGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJ0b2RheS1zdW1tYXJ5IHRvZGF5LWRldGFpbHNcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgNXB4IDI1cHggMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBTVU1NQVJZICovXG4jdG9kYXktc3VtbWFyeSB7XG4gICAgZ3JpZC1hcmVhOiB0b2RheS1zdW1tYXJ5O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImljb24tYm94XCJcbiAgICBcInRlbXAtYm94XCJcbiAgICBcImZlZWxzbGlrZS1ib3hcIlxuICAgIFwicmlzZS1ib3hcIlxuICAgIFwic2V0LWJveFwiXG4gICAgXCJtb29uLWJveFwiXG4gICAgO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA1MHB4IDFmciAxZnIgMWZyIDFmcjtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7ICovXG4gICAgZ2FwOiAwIDRweCA0cHggNHB4IDRweCxcbn1cblxuLnN1bW1hcnktYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnN1bW1hcnktbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdG9kYXktaWNvbi1ib3gge1xuICAgIGdyaWQtYXJlYTogaWNvbi1ib3g7XG59XG5cbiN0b2RheS1pY29uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBwYWRkaW5nOiAtMTBweCAwIC0xMHB4IDBcbn1cblxuI3RvZGF5LXRlbXAtYm94e1xuICAgIGdyaWQtYXJlYTogdGVtcC1ib3g7XG59XG5cbiN0b2RheS10ZW1wIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG59XG5cbiN0b2RheS1mZWVsc2xpa2UtYm94IHtcbmdyaWQtYXJlYTogZmVlbHNsaWtlLWJveDtcbn1cblxuI3RvZGF5LWZlZWxzbGlrZSB7XG5cbn1cblxuI3RvZGF5LWhpZ2gtYm94IHtcbmdyaWQtYXJlYTogaGlnaC1ib3g7XG59XG5cbiN0b2RheS1oaWdoIHtcblxufVxuXG4jdG9kYXktbG93LWJveCB7XG5ncmlkLWFyZWE6IGxvdy1ib3g7XG59XG5cbiN0b2RheS1sb3cge1xuXG59XG5cbiN0b2RheS1yaXNlLWJveCB7XG5ncmlkLWFyZWE6IHJpc2UtYm94O1xufVxuXG4jdG9kYXktcmlzZSB7XG5cbn1cblxuI3RvZGF5LXNldC1ib3gge1xuZ3JpZC1hcmVhOiBzZXQtYm94O1xufVxuXG4jdG9kYXktc2V0IHtcblxufVxuXG4jdG9kYXktbW9vbi1ib3gge1xuZ3JpZC1hcmVhOiBtb29uLWJveDtcbn1cblxuI3RvZGF5LW1vb24ge1xuXG59XG5cblxuLyogRGV0YWlscyBTZWN0aW9uICovXG4jdG9kYXktZGV0YWlscyB7XG4gICAgZ3JpZC1hcmVhOiB0b2RheS1kZXRhaWxzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImNvbmRpdGlvbi1ib3ggY29uZGl0aW9uLWJveFwiXG4gICAgXCJoaWdoLWJveCBsb3ctYm94XCJcbiAgICBcInJhaW4tYm94IGh1bWlkaXR5LWJveFwiXG4gICAgXCJ3aW5kc3BlZWQtYm94IHdpbmRkaXJlY3Rpb24tYm94XCJcbiAgICA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHggMWZyIDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxufVxuXG4uZGV0YWlscy1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uZGV0YWlscy1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0b2RheS1jb25kaXRpb24tYm94IHtcbmdyaWQtYXJlYTogY29uZGl0aW9uLWJveDtcbmZvbnQtc2l6ZTogMTlweDtcbn1cblxuI3RvZGF5LWNvbmRpdGlvbiB7XG5cbn1cblxuI3RvZGF5LXJhaW4tYm94IHtcbmdyaWQtYXJlYTogcmFpbi1ib3g7XG59XG5cbiN0b2RheS1yYWluIHtcblxufVxuXG4jdG9kYXktaHVtaWRpdHktYm94IHtcbmdyaWQtYXJlYTogaHVtaWRpdHktYm94O1xufVxuXG4jdG9kYXktaHVtaWRpdHkge1xuXG59XG5cbiN0b2RheS13aW5kc3BlZWQtYm94IHtcbmdyaWQtYXJlYTogd2luZHNwZWVkLWJveDtcbn1cblxuI3RvZGF5LXdpbmRzcGVlZCB7XG5cbn1cblxuI3RvZGF5LXdpbmRkaXJlY3Rpb24tYm94IHtcbmdyaWQtYXJlYTogd2luZGRpcmVjdGlvbi1ib3g7XG59XG5cbiN0b2RheS13aW5kZGlyZWN0aW9uIHtcblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgICAjaGVhZGVyIHsgXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImxvZ28tYm94IGxvZ28tYm94XCJcbiAgICAgICAgXCJzZWFyY2gtYm94IG1ldHJpY1wiO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICBcbiAgICB9XG5cbiAgICAjbG9nby1ib3h7XG4gICAgICAgIGdyaWQtYXJlYTogbG9nby1ib3g7XG4gICAgfVxuXG4gICAgI3NlYXJjaC1ib3h7XG4gICAgZ3JpZC1hcmVhOiBzZWFyY2gtYm94O1xuICAgIH1cblxuICAgICNzZWFyY2gtZmllbGQge1xuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgNjUlLCAzMDBweCk7XG4gICAgfVxuXG4gICAgI21ldHJpYyB7XG4gICAgZ3JpZC1hcmVhOiBtZXRyaWM7XG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lB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O0FBQ3ZCOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBOztBQUVBOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2I7OzJCQUVtQjtRQUNuQixzQkFBc0I7O0lBRTFCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO0lBQ0EscUJBQXFCO0lBQ3JCOztJQUVBO0lBQ0EsK0JBQStCO0lBQy9COztJQUVBO0lBQ0EsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiA0MjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbiNsb2dvLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xcbn1cXG5cXG4jZ3VzdC1sb2dvIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4jZ3VzdC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jc2VhcmNoLWJveCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbiNzZWFyY2gtZmllbGQge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYigxNzUsIDE4MiwgMTgyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IGNsYW1wKDEwcHgsIDc2JSwgMzIycHgpO1xcbn1cXG5cXG4jc2VhcmNoLXN1Ym1pdCB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQ1LCAxNDAsIDU0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3NlYXJjaC1zdWJtaXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxNDAsIDU0KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI21ldHJpYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTI2LjQ4cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xcbn1cXG5cXG4jbWV0cmljLXN3aXRjaCB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1NCwgMTMwLCAyNDUpO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21ldHJpYy1zd2l0Y2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEzMCwgMjQ1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuLyogT1ZFUkxBWSAqL1xcbiNvdmVybGF5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jb3ZlcmxheS1ndXN0LWxvZ28ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNvdmVybGF5LWd1c3QtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLyogV0VBVEhFUiBCT1ggKi9cXG4jd2VhdGhlci1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vdmVybGF5LXZpc2libGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBmbGV4LWdyb3c6IDE7ICovXFxufVxcblxcbi8qIFRvZGF5IFNlY3Rpb24gKi9cXG4jdG9kYXkge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInRvZGF5LWhlYWRcXFwiXFxuICAgIFxcXCJ0b2RheS13ZWF0aGVyXFxcIjtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbiAgICB3aWR0aDogY2xhbXAoMzgxcHgsIDQ1MHB4LCA1MDBweCk7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNDAwcHg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDEwcHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDI4cHggNHB4IHJnYigxNDYsIDE0NiwgMTQ2KTtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI3RvZGF5LWhlYWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAyMjYsIDIzNSk7XFxuICAgIGdyaWQtYXJlYTogdG9kYXktaGVhZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XFxufVxcblxcbiNjaXR5e1xcbiAgICBmb250LXNpemU6ICAzNXB4O1xcbiAgICBwYWRkaW5nOiA4cHhcXG59XFxuXFxuI2RhdGUtdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RvZGF5LXdlYXRoZXIge1xcbiAgICBncmlkLWFyZWE6IHRvZGF5LXdlYXRoZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidG9kYXktc3VtbWFyeSB0b2RheS1kZXRhaWxzXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDVweCAyNXB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFNVTU1BUlkgKi9cXG4jdG9kYXktc3VtbWFyeSB7XFxuICAgIGdyaWQtYXJlYTogdG9kYXktc3VtbWFyeTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImljb24tYm94XFxcIlxcbiAgICBcXFwidGVtcC1ib3hcXFwiXFxuICAgIFxcXCJmZWVsc2xpa2UtYm94XFxcIlxcbiAgICBcXFwicmlzZS1ib3hcXFwiXFxuICAgIFxcXCJzZXQtYm94XFxcIlxcbiAgICBcXFwibW9vbi1ib3hcXFwiXFxuICAgIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDUwcHggMWZyIDFmciAxZnIgMWZyO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7ICovXFxuICAgIGdhcDogMCA0cHggNHB4IDRweCA0cHgsXFxufVxcblxcbi5zdW1tYXJ5LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnN1bW1hcnktbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvZGF5LWljb24tYm94IHtcXG4gICAgZ3JpZC1hcmVhOiBpY29uLWJveDtcXG59XFxuXFxuI3RvZGF5LWljb24ge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgcGFkZGluZzogLTEwcHggMCAtMTBweCAwXFxufVxcblxcbiN0b2RheS10ZW1wLWJveHtcXG4gICAgZ3JpZC1hcmVhOiB0ZW1wLWJveDtcXG59XFxuXFxuI3RvZGF5LXRlbXAge1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxufVxcblxcbiN0b2RheS1mZWVsc2xpa2UtYm94IHtcXG5ncmlkLWFyZWE6IGZlZWxzbGlrZS1ib3g7XFxufVxcblxcbiN0b2RheS1mZWVsc2xpa2Uge1xcblxcbn1cXG5cXG4jdG9kYXktaGlnaC1ib3gge1xcbmdyaWQtYXJlYTogaGlnaC1ib3g7XFxufVxcblxcbiN0b2RheS1oaWdoIHtcXG5cXG59XFxuXFxuI3RvZGF5LWxvdy1ib3gge1xcbmdyaWQtYXJlYTogbG93LWJveDtcXG59XFxuXFxuI3RvZGF5LWxvdyB7XFxuXFxufVxcblxcbiN0b2RheS1yaXNlLWJveCB7XFxuZ3JpZC1hcmVhOiByaXNlLWJveDtcXG59XFxuXFxuI3RvZGF5LXJpc2Uge1xcblxcbn1cXG5cXG4jdG9kYXktc2V0LWJveCB7XFxuZ3JpZC1hcmVhOiBzZXQtYm94O1xcbn1cXG5cXG4jdG9kYXktc2V0IHtcXG5cXG59XFxuXFxuI3RvZGF5LW1vb24tYm94IHtcXG5ncmlkLWFyZWE6IG1vb24tYm94O1xcbn1cXG5cXG4jdG9kYXktbW9vbiB7XFxuXFxufVxcblxcblxcbi8qIERldGFpbHMgU2VjdGlvbiAqL1xcbiN0b2RheS1kZXRhaWxzIHtcXG4gICAgZ3JpZC1hcmVhOiB0b2RheS1kZXRhaWxzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiY29uZGl0aW9uLWJveCBjb25kaXRpb24tYm94XFxcIlxcbiAgICBcXFwiaGlnaC1ib3ggbG93LWJveFxcXCJcXG4gICAgXFxcInJhaW4tYm94IGh1bWlkaXR5LWJveFxcXCJcXG4gICAgXFxcIndpbmRzcGVlZC1ib3ggd2luZGRpcmVjdGlvbi1ib3hcXFwiXFxuICAgIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHggMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi5kZXRhaWxzLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmRldGFpbHMtbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvZGF5LWNvbmRpdGlvbi1ib3gge1xcbmdyaWQtYXJlYTogY29uZGl0aW9uLWJveDtcXG5mb250LXNpemU6IDE5cHg7XFxufVxcblxcbiN0b2RheS1jb25kaXRpb24ge1xcblxcbn1cXG5cXG4jdG9kYXktcmFpbi1ib3gge1xcbmdyaWQtYXJlYTogcmFpbi1ib3g7XFxufVxcblxcbiN0b2RheS1yYWluIHtcXG5cXG59XFxuXFxuI3RvZGF5LWh1bWlkaXR5LWJveCB7XFxuZ3JpZC1hcmVhOiBodW1pZGl0eS1ib3g7XFxufVxcblxcbiN0b2RheS1odW1pZGl0eSB7XFxuXFxufVxcblxcbiN0b2RheS13aW5kc3BlZWQtYm94IHtcXG5ncmlkLWFyZWE6IHdpbmRzcGVlZC1ib3g7XFxufVxcblxcbiN0b2RheS13aW5kc3BlZWQge1xcblxcbn1cXG5cXG4jdG9kYXktd2luZGRpcmVjdGlvbi1ib3gge1xcbmdyaWQtYXJlYTogd2luZGRpcmVjdGlvbi1ib3g7XFxufVxcblxcbiN0b2RheS13aW5kZGlyZWN0aW9uIHtcXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxuICAgICNoZWFkZXIgeyBcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJsb2dvLWJveCBsb2dvLWJveFxcXCJcXG4gICAgICAgIFxcXCJzZWFyY2gtYm94IG1ldHJpY1xcXCI7XFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgI2xvZ28tYm94e1xcbiAgICAgICAgZ3JpZC1hcmVhOiBsb2dvLWJveDtcXG4gICAgfVxcblxcbiAgICAjc2VhcmNoLWJveHtcXG4gICAgZ3JpZC1hcmVhOiBzZWFyY2gtYm94O1xcbiAgICB9XFxuXFxuICAgICNzZWFyY2gtZmllbGQge1xcbiAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDY1JSwgMzAwcHgpO1xcbiAgICB9XFxuXFxuICAgICNtZXRyaWMge1xcbiAgICBncmlkLWFyZWE6IG1ldHJpYztcXG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vcmV0cmlldmUnO1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBvYmplY3Qgd2l0aCBvbmx5IHRoZSB3ZWF0aGVyIGRhdGEgd2UgYXJlIGludGVyZXRlZCBpbiBmcm9tIGZldGNoXG5jb25zdCBXZWF0aGVyID0gKFxuICBjaXR5LFxuICBkYXRlVGltZSxcbiAgdGVtcEMsXG4gIHRlbXBGLFxuICBmZWVsc0xpa2VDLFxuICBmZWVsc0xpa2VGLFxuICBoaWdoQyxcbiAgbG93QyxcbiAgaGlnaEYsXG4gIGxvd0YsXG4gIHN1bnJpc2UsXG4gIHN1bnNldCxcbiAgbW9vbixcbiAgY29uZGl0aW9uLFxuICBjaGFuY2VSYWluLFxuICBodW1pZGl0eSxcbiAgd2luZE1waCxcbiAgd2luZERpcmVjdGlvbixcbiAgaWNvbixcbikgPT4ge1xuICBjb25zdCBjdXJyZW50Q2l0eSA9IGNpdHk7XG4gIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IGRhdGVUaW1lO1xuICBjb25zdCBjdXJyZW50VGVtcEMgPSB0ZW1wQztcbiAgY29uc3QgY3VycmVudFRlbXBGID0gdGVtcEY7XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VDID0gZmVlbHNMaWtlQztcbiAgY29uc3QgY3VycmVudEZlZWxzTGlrZUYgPSBmZWVsc0xpa2VGO1xuICBjb25zdCBjdXJyZW50SGlnaEMgPSBoaWdoQztcbiAgY29uc3QgY3VycmVudExvd0MgPSBsb3dDO1xuICBjb25zdCBjdXJyZW50SGlnaEYgPSBoaWdoRjtcbiAgY29uc3QgY3VycmVudExvd0YgPSBsb3dGO1xuICBjb25zdCBjdXJyZW50U3VucmlzZSA9IHN1bnJpc2U7XG4gIGNvbnN0IGN1cnJlbnRTdW5zZXQgPSBzdW5zZXQ7XG4gIGNvbnN0IGN1cnJlbnRNb29uID0gbW9vbjtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgY29uc3QgY3VycmVudENoYW5jZVJhaW4gPSBjaGFuY2VSYWluO1xuICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgY29uc3QgY3VycmVudFdpbmRNcGggPSB3aW5kTXBoO1xuICBjb25zdCBjdXJyZW50V2luZERpcmVjdGlvbiA9IHdpbmREaXJlY3Rpb247XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gaWNvbjtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRDaXR5LFxuICAgIGN1cnJlbnREYXRlVGltZSxcbiAgICBjdXJyZW50VGVtcEMsXG4gICAgY3VycmVudFRlbXBGLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VDLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VGLFxuICAgIGN1cnJlbnRIaWdoQyxcbiAgICBjdXJyZW50TG93QyxcbiAgICBjdXJyZW50SGlnaEYsXG4gICAgY3VycmVudExvd0YsXG4gICAgY3VycmVudFN1bnJpc2UsXG4gICAgY3VycmVudFN1bnNldCxcbiAgICBjdXJyZW50TW9vbixcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGN1cnJlbnRDaGFuY2VSYWluLFxuICAgIGN1cnJlbnRIdW1pZGl0eSxcbiAgICBjdXJyZW50V2luZE1waCxcbiAgICBjdXJyZW50V2luZERpcmVjdGlvbixcbiAgICBjdXJyZW50SWNvbixcbiAgfTtcbn07XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbG9jYWxlIHBhcmFtIChxdWVyeSkgZnJvbSBjYWxsIGluIHVpLmpzXG4vLyBwYXNzZXMgdGhlIGxvY2FsIHBhcmFtIHRvIGdldFdlYXRoZXIoKSBpbiByZXRyaWV2ZS5qc1xuLy8gdGFrZXMgdGhlIHdlYXRoZXIgcGFja2FnZSBpdCByZWNpZXZlcyBmcm9tIGFwaSwgcHVsbHMgdGhlIGRhdGEgd2UgYXJlIGludGVyZXN0ZWQgaW5cbi8vIGNyZWF0ZXMgYW5kIHJldHVybnMgd2VhdGhlckRhdGEgb2JqZWN0IHdpdGggdGhhdCBpbmZvIGZyb20gV2VhdGhlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBwYXJzZVdlYXRoZXIgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgY29uc3Qgd2VhdGhlclBhY2thZ2UgPSBhd2FpdCBnZXRXZWF0aGVyKHF1ZXJ5KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cbiAgY29uc3QgY2l0eSA9IHdlYXRoZXJQYWNrYWdlLmxvY2F0aW9uLm5hbWU7XG4gIGNvbnN0IGRhdGVUaW1lID0gd2VhdGhlclBhY2thZ2UubG9jYXRpb24ubG9jYWx0aW1lO1xuICBjb25zdCB0ZW1wQyA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wRiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQudGVtcF9mO1xuICBjb25zdCBmZWVsc0xpa2VDID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY29uc3QgZmVlbHNMaWtlRiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG4gIGNvbnN0IGhpZ2hDID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYztcbiAgY29uc3QgbG93QyA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2M7XG4gIGNvbnN0IGhpZ2hGID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcbiAgY29uc3QgbG93RiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG4gIGNvbnN0IHsgc3VucmlzZSB9ID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IHsgc3Vuc2V0IH0gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgbW9vbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNoYW5jZVJhaW4gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQ7XG4gIGNvbnN0IHdpbmRNcGggPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC53aW5kX2RpcjtcbiAgY29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmNvbmRpdGlvbjtcblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IFdlYXRoZXIoXG4gICAgY2l0eSxcbiAgICBkYXRlVGltZSxcbiAgICB0ZW1wQyxcbiAgICB0ZW1wRixcbiAgICBmZWVsc0xpa2VDLFxuICAgIGZlZWxzTGlrZUYsXG4gICAgaGlnaEMsXG4gICAgbG93QyxcbiAgICBoaWdoRixcbiAgICBsb3dGLFxuICAgIHN1bnJpc2UsXG4gICAgc3Vuc2V0LFxuICAgIG1vb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGNoYW5jZVJhaW4sXG4gICAgaHVtaWRpdHksXG4gICAgd2luZE1waCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIGljb24sXG4gICk7XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VXZWF0aGVyO1xuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihxdWVyeSkge1xuICB0cnkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zNmMwOWUyMDQ3Mzg0N2JjOTNmMTM0MzEyNDI3MDMmcT0ke3F1ZXJ5fSZkYXlzPTNgLFxuICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJQYWNrYWdlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlclBhY2thZ2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJldHVybiBlcnI7XG4gICAgfTtcblxufVxuXG4vLyBnZXRXZWF0aGVyKFwiYlwiKS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGVycik7XG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsImltcG9ydCBwYXJzZVdlYXRoZXIgZnJvbSAnLi9hc3NpZ24nO1xuaW1wb3J0IGd1c3Rsb2dvIGZyb20gJy4vaW1hZ2VzL2d1c3QtbG9nbzIucG5nJztcblxuLy8gY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1ib3gnKVxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZpZWxkJyk7XG5jb25zdCBzZWFyY2hTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXN1Ym1pdCcpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5jb25zdCBvdmVybGF5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5LWd1c3QtdGV4dCcpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IGd1c3RMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1c3QtbG9nbycpO1xuY29uc3Qgb3ZlcmxheUd1c3RMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXktZ3VzdC1sb2dvJyk7XG5jb25zdCBtZXRyaWNTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0cmljLXN3aXRjaCcpO1xuXG4vLyBtZXRyaWMgdmFsdWUgaG9sZGVyXG5sZXQgY3VycmVudE1ldHJpYyA9ICdGJztcblxuLy8gdXBkYXRlcyBjdXJyZW50IG1ldHJpYyBhZnRlciBzd2l0Y2hcbmNvbnN0IHN3aXRjaE1ldHJpYyA9IChhKSA9PiB7XG4gIGN1cnJlbnRNZXRyaWMgPSBhO1xufTtcblxuY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgLy8gYXNzaWduIGltYWdlc1xuICBndXN0TG9nby5zcmMgPSBndXN0bG9nbztcbiAgb3ZlcmxheUd1c3RMb2dvLnNyYyA9IGd1c3Rsb2dvO1xuXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRpbWUnKTtcbiAgY29uc3QgdG9kYXlUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXRlbXAnKTtcbiAgY29uc3QgdG9kYXlGZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktZmVlbHNsaWtlJyk7XG4gIGNvbnN0IHRvZGF5SGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1oaWdoJyk7XG4gIGNvbnN0IHRvZGF5TG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWxvdycpO1xuICBjb25zdCB0b2RheVJpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktcmlzZScpO1xuICBjb25zdCB0b2RheVNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1zZXQnKTtcbiAgY29uc3QgdG9kYXlNb29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LW1vb24nKTtcbiAgY29uc3QgdG9kYXlDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktY29uZGl0aW9uJyk7XG4gIGNvbnN0IHRvZGF5UmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1yYWluJyk7XG4gIGNvbnN0IHRvZGF5SHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaHVtaWRpdHknKTtcbiAgY29uc3QgdG9kYXlXaW5kTXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdpbmRzcGVlZCcpO1xuICBjb25zdCB0b2RheVdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktd2luZGRpcmVjdGlvbicpO1xuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaWNvbicpO1xuXG4gIGNvbnN0IGFzc2lnbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHBhcnNlV2VhdGhlcihxdWVyeSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgY3VycmVudENpdHkgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudERhdGVUaW1lIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRUZW1wRiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50RmVlbHNMaWtlRiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50SGlnaEYgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudExvd0YgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudFRlbXBDIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRGZWVsc0xpa2VDIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRIaWdoQyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50TG93QyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgY3VycmVudFJpc2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3VucmlzZTtcbiAgICBjb25zdCBjdXJyZW50U2V0ID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnNldDtcbiAgICBjb25zdCB7IGN1cnJlbnRNb29uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRDb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudENoYW5jZVJhaW4gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudEh1bWlkaXR5IH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kTXBoIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kRGlyZWN0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRJY29uIH0gPSB3ZWF0aGVyRGF0YTtcblxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50Q2l0eTtcbiAgICBkYXRldGltZS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRlVGltZTtcbiAgICB0b2RheUljb24uc3JjID0gY3VycmVudEljb247XG4gICAgLy8gY29uZGl0aW9uYWwgdG8ga2VlcCBjdXJyZW50IG1ldHJpYyBvbiBuZXcgc2VhcmNoZXNcbiAgICBpZiAoY3VycmVudE1ldHJpYyA9PT0gJ0YnKSB7XG4gICAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcEZ9XFx1MDBCMEZgO1xuICAgICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RmVlbHNMaWtlRn1cXHUwMEIwRmA7XG4gICAgICB0b2RheUhpZ2gudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SGlnaEZ9XFx1MDBCMEZgO1xuICAgICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TG93Rn1cXHUwMEIwRmA7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50TWV0cmljID09PSAnQycpIHtcbiAgICAgIHRvZGF5VGVtcC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wQ31cXHUwMEIwQ2A7XG4gICAgICB0b2RheUZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGZWVsc0xpa2VDfVxcdTAwQjBDYDtcbiAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIaWdoQ31cXHUwMEIwQ2A7XG4gICAgICB0b2RheUxvdy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRMb3dDfVxcdTAwQjBDYDtcbiAgICB9XG4gICAgdG9kYXlSaXNlLnRleHRDb250ZW50ID0gY3VycmVudFJpc2U7XG4gICAgdG9kYXlTZXQudGV4dENvbnRlbnQgPSBjdXJyZW50U2V0O1xuICAgIHRvZGF5TW9vbi50ZXh0Q29udGVudCA9IGN1cnJlbnRNb29uO1xuICAgIHRvZGF5Q29uZGl0aW9uLnRleHRDb250ZW50ID0gY3VycmVudENvbmRpdGlvbjtcbiAgICB0b2RheVJhaW4udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50Q2hhbmNlUmFpbn0lYDtcbiAgICB0b2RheUh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudEh1bWlkaXR5fSVgO1xuICAgIHRvZGF5V2luZE1waC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXaW5kTXBofSBtcGhgO1xuICAgIHRvZGF5V2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRXaW5kRGlyZWN0aW9uO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG4gICAgdG9kYXkuY2xhc3NOYW1lID0gJ3Zpc2libGUnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRUZW1wRixcbiAgICAgIGN1cnJlbnRGZWVsc0xpa2VGLFxuICAgICAgY3VycmVudEhpZ2hGLFxuICAgICAgY3VycmVudExvd0YsXG4gICAgICBjdXJyZW50VGVtcEMsXG4gICAgICBjdXJyZW50RmVlbHNMaWtlQyxcbiAgICAgIGN1cnJlbnRIaWdoQyxcbiAgICAgIGN1cnJlbnRMb3dDLFxuICAgIH07XG4gIH07XG5cbiAgLy8gcnVucyBhc3NpZ25EYXRhIGFuZCBwb3B1bGF0ZXMgZGF0YVxuICBzZWFyY2hTdWJtaXQub25jbGljayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzZWFyY2hGaWVsZC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXktdmlzaWJsZSc7XG4gICAgICBvdmVybGF5VGV4dC50ZXh0Q29udGVudCA9ICdsb2FkaW5nIC4uLic7XG4gICAgICB0b2RheS5jbGFzc05hbWUgPSAnaGlkZGVuJztcbiAgICAgIGFzc2lnbkRhdGEoKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIG92ZXJsYXlUZXh0LnRleHRDb250ZW50ID0gJ1dlIGNvdWxkIG5vdCBmaW5kIHRoYXQgbG9jYXRpb24hJztcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBjaGFuZ2VzIG1ldHJpYyByZWFkaW5nIGJhc2VkIG9uIGN1cnJlbnQgbWV0cmljXG4gIG1ldHJpY1N3aXRjaC5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0b2RheS5jbGFzc05hbWUgPT09ICd2aXNpYmxlJykge1xuICAgICAgY29uc3QgY3VycmVudERhdGEgPSBhc3NpZ25EYXRhKCk7XG4gICAgICBpZiAoY3VycmVudE1ldHJpYyA9PT0gJ0YnKSB7XG4gICAgICAgIHRvZGF5VGVtcC50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudFRlbXBDfVxcdTAwQjBDYDtcbiAgICAgICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRGZWVsc0xpa2VDXG4gICAgICAgIH1cXHUwMEIwQ2A7XG4gICAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudEhpZ2hDfVxcdTAwQjBDYDtcbiAgICAgICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRMb3dDfVxcdTAwQjBDYDtcbiAgICAgICAgc3dpdGNoTWV0cmljKCdDJyk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRNZXRyaWMgPT09ICdDJykge1xuICAgICAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRUZW1wRn1cXHUwMEIwRmA7XG4gICAgICAgIHRvZGF5RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgKGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50RmVlbHNMaWtlRlxuICAgICAgICB9XFx1MDBCMEZgO1xuICAgICAgICB0b2RheUhpZ2gudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRIaWdoRn1cXHUwMEIwRmA7XG4gICAgICAgIHRvZGF5TG93LnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50TG93Rn1cXHUwMEIwRmA7XG4gICAgICAgIHN3aXRjaE1ldHJpYygnRicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkIGZyb20gJy4vdWknO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==