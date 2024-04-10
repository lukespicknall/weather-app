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
    min-width: 421px;
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
}

#metric-switch {
    font-size: 21px;
    background-color: white;
    padding: 12px;
    margin: 0 0 0 8px;
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
    width: 400px;
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

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n }\n\n#content {\n    height: 100%;\n    min-width: 421px;\n    display: flex;\n    flex-direction: column;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 100px;\n    gap: 3px;\n}\n\n#logo-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#gust-logo {\n    height: 60px;\n}\n\n#gust-text {\n    font-size: 28px;\n}\n\n#search-box {\n    white-space: nowrap;\n}\n\n#search-field {\n    font-size: 25px;\n    padding: 10px 15px 10px 15px;\n    border: solid 2px rgb(175, 182, 182);\n    border-radius: 20px;\n    width: clamp(10px, 76%, 322px);\n}\n\n#search-submit {\n    font-size: 21px;\n    background-color: white;\n    padding: 12px;\n    margin: 0 0 0 8px;\n    border: 2px solid rgb(245, 140, 54);\n    border-radius: 30px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n    box-sizing: border-box;\n}\n\n#search-submit:hover {\n    background-color: rgb(245, 140, 54);\n    border: 2px solid black;\n    color: white;\n    border-radius: 15px;\n}\n\n#metric {\n    display: flex;\n    justify-content: center;\n    width: 126.48px;\n    box-sizing: border-box;\n}\n\n#metric-switch {\n    font-size: 21px;\n    background-color: white;\n    padding: 12px;\n    margin: 0 0 0 8px;\n    border: 2px solid rgb(54, 130, 245);\n     border-radius: 15px;\n    transition: all ease-in-out 0.2s;\n    cursor: pointer;\n}\n\n#metric-switch:hover {\n    background-color: rgb(54, 130, 245);\n    border: 2px solid black;\n    color: white;\n\n       border-radius: 30px;\n}\n\n/* OVERLAY */\n#overlay {\n    height: 100%;\n}\n\n#overlay-gust-logo {\n    width: 300px;\n}\n\n#overlay-gust-text {\n    font-size: 28px;\n}\n\n/* WEATHER BOX */\n#weather-box {\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin: 20px;\n}\n\n.hidden {\n    display: none;\n}\n\n.visible {\n    display: grid;\n}\n\n.overlay-visible{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* flex-grow: 1; */\n}\n\n/* Today Section */\n#today {\n    grid-template-areas: \n    \"today-head\"\n    \"today-weather\";\n    width: 400px;\n    width: clamp(381px, 450px, 500px);\n    height: 500px;\n    grid-template-rows: 100px 400px;\n    /* grid-template-columns: 2fr 3fr; */\n    border-radius: 25px 25px 10px 10px;\n    box-shadow: 20px 20px 28px 4px rgb(146, 146, 146);\n}\n\n/* HEADER */\n#today-head {\n    background-color: rgb(177, 226, 235);\n    grid-area: today-head;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 25px 25px 0 0;\n}\n\n#city{\n    font-size:  35px;\n    padding: 8px\n}\n\n#date-time {\n    font-size: 18px;\n}\n\n#today-weather {\n    grid-area: today-weather;\n    display: grid;\n    grid-template-areas: \n    \"today-summary today-details\";\n    grid-template-columns: 2fr 3fr;\n    height: 100%;\n    width: 100%;\n    padding: 0 5px 25px 0;\n    box-sizing: border-box;\n}\n\n/* SUMMARY */\n#today-summary {\n    grid-area: today-summary;\n    display: grid;\n    grid-template-areas:\n    \"icon-box\"\n    \"temp-box\"\n    \"feelslike-box\"\n    \"rise-box\"\n    \"set-box\"\n    \"moon-box\"\n    ;\n    grid-template-rows: 90px 50px 1fr 1fr 1fr 1fr;\n    /* grid-template-columns: 2fr 3fr; */\n    gap: 0 4px 4px 4px 4px,\n}\n\n.summary-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.summary-label {\n    font-weight: bold;\n}\n\n#today-icon-box {\n    grid-area: icon-box;\n}\n\n#today-icon {\n    width: 90px;\n    padding: -10px 0 -10px 0\n}\n\n#today-temp-box{\n    grid-area: temp-box;\n}\n\n#today-temp {\n    font-size: 45px;\n}\n\n#today-feelslike-box {\ngrid-area: feelslike-box;\n}\n\n#today-feelslike {\n\n}\n\n#today-high-box {\ngrid-area: high-box;\n}\n\n#today-high {\n\n}\n\n#today-low-box {\ngrid-area: low-box;\n}\n\n#today-low {\n\n}\n\n#today-rise-box {\ngrid-area: rise-box;\n}\n\n#today-rise {\n\n}\n\n#today-set-box {\ngrid-area: set-box;\n}\n\n#today-set {\n\n}\n\n#today-moon-box {\ngrid-area: moon-box;\n}\n\n#today-moon {\n\n}\n\n\n/* Details Section */\n#today-details {\n    grid-area: today-details;\n    display: grid;\n    grid-template-areas:\n    \"condition-box condition-box\"\n    \"high-box low-box\"\n    \"rain-box humidity-box\"\n    \"windspeed-box winddirection-box\"\n    ;\n    grid-template-rows: 50x 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.details-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.details-label {\n    font-weight: bold;\n}\n\n#today-condition-box {\ngrid-area: condition-box;\nfont-size: 19px;\n}\n\n#today-condition {\n\n}\n\n#today-rain-box {\ngrid-area: rain-box;\n}\n\n#today-rain {\n\n}\n\n#today-humidity-box {\ngrid-area: humidity-box;\n}\n\n#today-humidity {\n\n}\n\n#today-windspeed-box {\ngrid-area: windspeed-box;\n}\n\n#today-windspeed {\n\n}\n\n#today-winddirection-box {\ngrid-area: winddirection-box;\n}\n\n#today-winddirection {\n\n}"],"sourceRoot":""}]);
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
    `https://api.weatherapi.com/v1/forecast.json?key=36c09e20473847bc93f13431242703&q=${query}&days=3`,
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
    const weatherData = await (0,_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(query);

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
      assignData();
    }
  };

  // changes metric reading based on current metric
  metricSwitch.onclick = async () => {
    if (today.className === 'visible') {
      const currentData = assignData();
      if (currentMetric === 'F') {
        todayTemp.textContent = `${(await currentData).currentTempC}\u00B0C`;
        todayFeelsLike.textContent = `${(await currentData).currentFeelsLikeC}\u00B0C`;
        todayHigh.textContent = `${(await currentData).currentHighC}\u00B0C`;
        todayLow.textContent = `${(await currentData).currentLowC}\u00B0C`;
        switchMetric('C');
      } else if (currentMetric === 'C') {
        todayTemp.textContent = `${(await currentData).currentTempF}\u00B0F`;
        todayFeelsLike.textContent = `${(await currentData).currentFeelsLikeF}\u00B0F`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFNBQVMsS0FB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d0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBd0I7QUFDSDs7QUFFckIsK0NBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmV0cmlldmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuIH1cblxuI2NvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDQyMXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZ2FwOiAzcHg7XG59XG5cbiNsb2dvLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuI2d1c3QtbG9nbyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4jZ3VzdC10ZXh0IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbiNzZWFyY2gtYm94IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4jc2VhcmNoLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTc1LCAxODIsIDE4Mik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogY2xhbXAoMTBweCwgNzYlLCAzMjJweCk7XG59XG5cbiNzZWFyY2gtc3VibWl0IHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQ1LCAxNDAsIDU0KTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jc2VhcmNoLXN1Ym1pdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTQwLCA1NCk7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNtZXRyaWMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyNi40OHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNtZXRyaWMtc3dpdGNoIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTQsIDEzMCwgMjQ1KTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZXRyaWMtc3dpdGNoOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEzMCwgMjQ1KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4vKiBPVkVSTEFZICovXG4jb3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jb3ZlcmxheS1ndXN0LWxvZ28ge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuI292ZXJsYXktZ3VzdC10ZXh0IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbi8qIFdFQVRIRVIgQk9YICovXG4jd2VhdGhlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5vdmVybGF5LXZpc2libGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xufVxuXG4vKiBUb2RheSBTZWN0aW9uICovXG4jdG9kYXkge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwidG9kYXktaGVhZFwiXG4gICAgXCJ0b2RheS13ZWF0aGVyXCI7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHdpZHRoOiBjbGFtcCgzODFweCwgNDUwcHgsIDUwMHB4KTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNDAwcHg7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAxMHB4IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDI4cHggNHB4IHJnYigxNDYsIDE0NiwgMTQ2KTtcbn1cblxuLyogSEVBREVSICovXG4jdG9kYXktaGVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMjI2LCAyMzUpO1xuICAgIGdyaWQtYXJlYTogdG9kYXktaGVhZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xufVxuXG4jY2l0eXtcbiAgICBmb250LXNpemU6ICAzNXB4O1xuICAgIHBhZGRpbmc6IDhweFxufVxuXG4jZGF0ZS10aW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiN0b2RheS13ZWF0aGVyIHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LXdlYXRoZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInRvZGF5LXN1bW1hcnkgdG9kYXktZGV0YWlsc1wiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1cHggMjVweCAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFNVTU1BUlkgKi9cbiN0b2RheS1zdW1tYXJ5IHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LXN1bW1hcnk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaWNvbi1ib3hcIlxuICAgIFwidGVtcC1ib3hcIlxuICAgIFwiZmVlbHNsaWtlLWJveFwiXG4gICAgXCJyaXNlLWJveFwiXG4gICAgXCJzZXQtYm94XCJcbiAgICBcIm1vb24tYm94XCJcbiAgICA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDUwcHggMWZyIDFmciAxZnIgMWZyO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cbiAgICBnYXA6IDAgNHB4IDRweCA0cHggNHB4LFxufVxuXG4uc3VtbWFyeS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xufVxuXG4uc3VtbWFyeS1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0b2RheS1pY29uLWJveCB7XG4gICAgZ3JpZC1hcmVhOiBpY29uLWJveDtcbn1cblxuI3RvZGF5LWljb24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIHBhZGRpbmc6IC0xMHB4IDAgLTEwcHggMFxufVxuXG4jdG9kYXktdGVtcC1ib3h7XG4gICAgZ3JpZC1hcmVhOiB0ZW1wLWJveDtcbn1cblxuI3RvZGF5LXRlbXAge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuI3RvZGF5LWZlZWxzbGlrZS1ib3gge1xuZ3JpZC1hcmVhOiBmZWVsc2xpa2UtYm94O1xufVxuXG4jdG9kYXktZmVlbHNsaWtlIHtcblxufVxuXG4jdG9kYXktaGlnaC1ib3gge1xuZ3JpZC1hcmVhOiBoaWdoLWJveDtcbn1cblxuI3RvZGF5LWhpZ2gge1xuXG59XG5cbiN0b2RheS1sb3ctYm94IHtcbmdyaWQtYXJlYTogbG93LWJveDtcbn1cblxuI3RvZGF5LWxvdyB7XG5cbn1cblxuI3RvZGF5LXJpc2UtYm94IHtcbmdyaWQtYXJlYTogcmlzZS1ib3g7XG59XG5cbiN0b2RheS1yaXNlIHtcblxufVxuXG4jdG9kYXktc2V0LWJveCB7XG5ncmlkLWFyZWE6IHNldC1ib3g7XG59XG5cbiN0b2RheS1zZXQge1xuXG59XG5cbiN0b2RheS1tb29uLWJveCB7XG5ncmlkLWFyZWE6IG1vb24tYm94O1xufVxuXG4jdG9kYXktbW9vbiB7XG5cbn1cblxuXG4vKiBEZXRhaWxzIFNlY3Rpb24gKi9cbiN0b2RheS1kZXRhaWxzIHtcbiAgICBncmlkLWFyZWE6IHRvZGF5LWRldGFpbHM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiY29uZGl0aW9uLWJveCBjb25kaXRpb24tYm94XCJcbiAgICBcImhpZ2gtYm94IGxvdy1ib3hcIlxuICAgIFwicmFpbi1ib3ggaHVtaWRpdHktYm94XCJcbiAgICBcIndpbmRzcGVlZC1ib3ggd2luZGRpcmVjdGlvbi1ib3hcIlxuICAgIDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUweCAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXG59XG5cbi5kZXRhaWxzLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5kZXRhaWxzLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RvZGF5LWNvbmRpdGlvbi1ib3gge1xuZ3JpZC1hcmVhOiBjb25kaXRpb24tYm94O1xuZm9udC1zaXplOiAxOXB4O1xufVxuXG4jdG9kYXktY29uZGl0aW9uIHtcblxufVxuXG4jdG9kYXktcmFpbi1ib3gge1xuZ3JpZC1hcmVhOiByYWluLWJveDtcbn1cblxuI3RvZGF5LXJhaW4ge1xuXG59XG5cbiN0b2RheS1odW1pZGl0eS1ib3gge1xuZ3JpZC1hcmVhOiBodW1pZGl0eS1ib3g7XG59XG5cbiN0b2RheS1odW1pZGl0eSB7XG5cbn1cblxuI3RvZGF5LXdpbmRzcGVlZC1ib3gge1xuZ3JpZC1hcmVhOiB3aW5kc3BlZWQtYm94O1xufVxuXG4jdG9kYXktd2luZHNwZWVkIHtcblxufVxuXG4jdG9kYXktd2luZGRpcmVjdGlvbi1ib3gge1xuZ3JpZC1hcmVhOiB3aW5kZGlyZWN0aW9uLWJveDtcbn1cblxuI3RvZGF5LXdpbmRkaXJlY3Rpb24ge1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFD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ICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gfVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDQyMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuI2xvZ28tYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2d1c3QtbG9nbyB7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuI2d1c3QtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuI3NlYXJjaC1ib3gge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jc2VhcmNoLWZpZWxkIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTc1LCAxODIsIDE4Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiBjbGFtcCgxMHB4LCA3NiUsIDMyMnB4KTtcXG59XFxuXFxuI3NlYXJjaC1zdWJtaXQge1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0NSwgMTQwLCA1NCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNzZWFyY2gtc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTQwLCA1NCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNtZXRyaWMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyNi40OHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbWV0cmljLXN3aXRjaCB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTQsIDEzMCwgMjQ1KTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtZXRyaWMtc3dpdGNoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxMzAsIDI0NSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi8qIE9WRVJMQVkgKi9cXG4jb3ZlcmxheSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI292ZXJsYXktZ3VzdC1sb2dvIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4jb3ZlcmxheS1ndXN0LXRleHQge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi8qIFdFQVRIRVIgQk9YICovXFxuI3dlYXRoZXItYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ub3ZlcmxheS12aXNpYmxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xcbn1cXG5cXG4vKiBUb2RheSBTZWN0aW9uICovXFxuI3RvZGF5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJ0b2RheS1oZWFkXFxcIlxcbiAgICBcXFwidG9kYXktd2VhdGhlclxcXCI7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgd2lkdGg6IGNsYW1wKDM4MXB4LCA0NTBweCwgNTAwcHgpO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDQwMHB4O1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCAyOHB4IDRweCByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbiN0b2RheS1oZWFkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMjI2LCAyMzUpO1xcbiAgICBncmlkLWFyZWE6IHRvZGF5LWhlYWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcbn1cXG5cXG4jY2l0eXtcXG4gICAgZm9udC1zaXplOiAgMzVweDtcXG4gICAgcGFkZGluZzogOHB4XFxufVxcblxcbiNkYXRlLXRpbWUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RheS13ZWF0aGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB0b2RheS13ZWF0aGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInRvZGF5LXN1bW1hcnkgdG9kYXktZGV0YWlsc1xcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCA1cHggMjVweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTVU1NQVJZICovXFxuI3RvZGF5LXN1bW1hcnkge1xcbiAgICBncmlkLWFyZWE6IHRvZGF5LXN1bW1hcnk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJpY29uLWJveFxcXCJcXG4gICAgXFxcInRlbXAtYm94XFxcIlxcbiAgICBcXFwiZmVlbHNsaWtlLWJveFxcXCJcXG4gICAgXFxcInJpc2UtYm94XFxcIlxcbiAgICBcXFwic2V0LWJveFxcXCJcXG4gICAgXFxcIm1vb24tYm94XFxcIlxcbiAgICA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA1MHB4IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyOyAqL1xcbiAgICBnYXA6IDAgNHB4IDRweCA0cHggNHB4LFxcbn1cXG5cXG4uc3VtbWFyeS1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5zdW1tYXJ5LWxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN0b2RheS1pY29uLWJveCB7XFxuICAgIGdyaWQtYXJlYTogaWNvbi1ib3g7XFxufVxcblxcbiN0b2RheS1pY29uIHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIHBhZGRpbmc6IC0xMHB4IDAgLTEwcHggMFxcbn1cXG5cXG4jdG9kYXktdGVtcC1ib3h7XFxuICAgIGdyaWQtYXJlYTogdGVtcC1ib3g7XFxufVxcblxcbiN0b2RheS10ZW1wIHtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbn1cXG5cXG4jdG9kYXktZmVlbHNsaWtlLWJveCB7XFxuZ3JpZC1hcmVhOiBmZWVsc2xpa2UtYm94O1xcbn1cXG5cXG4jdG9kYXktZmVlbHNsaWtlIHtcXG5cXG59XFxuXFxuI3RvZGF5LWhpZ2gtYm94IHtcXG5ncmlkLWFyZWE6IGhpZ2gtYm94O1xcbn1cXG5cXG4jdG9kYXktaGlnaCB7XFxuXFxufVxcblxcbiN0b2RheS1sb3ctYm94IHtcXG5ncmlkLWFyZWE6IGxvdy1ib3g7XFxufVxcblxcbiN0b2RheS1sb3cge1xcblxcbn1cXG5cXG4jdG9kYXktcmlzZS1ib3gge1xcbmdyaWQtYXJlYTogcmlzZS1ib3g7XFxufVxcblxcbiN0b2RheS1yaXNlIHtcXG5cXG59XFxuXFxuI3RvZGF5LXNldC1ib3gge1xcbmdyaWQtYXJlYTogc2V0LWJveDtcXG59XFxuXFxuI3RvZGF5LXNldCB7XFxuXFxufVxcblxcbiN0b2RheS1tb29uLWJveCB7XFxuZ3JpZC1hcmVhOiBtb29uLWJveDtcXG59XFxuXFxuI3RvZGF5LW1vb24ge1xcblxcbn1cXG5cXG5cXG4vKiBEZXRhaWxzIFNlY3Rpb24gKi9cXG4jdG9kYXktZGV0YWlscyB7XFxuICAgIGdyaWQtYXJlYTogdG9kYXktZGV0YWlscztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImNvbmRpdGlvbi1ib3ggY29uZGl0aW9uLWJveFxcXCJcXG4gICAgXFxcImhpZ2gtYm94IGxvdy1ib3hcXFwiXFxuICAgIFxcXCJyYWluLWJveCBodW1pZGl0eS1ib3hcXFwiXFxuICAgIFxcXCJ3aW5kc3BlZWQtYm94IHdpbmRkaXJlY3Rpb24tYm94XFxcIlxcbiAgICA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTB4IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbn1cXG5cXG4uZGV0YWlscy1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5kZXRhaWxzLWxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN0b2RheS1jb25kaXRpb24tYm94IHtcXG5ncmlkLWFyZWE6IGNvbmRpdGlvbi1ib3g7XFxuZm9udC1zaXplOiAxOXB4O1xcbn1cXG5cXG4jdG9kYXktY29uZGl0aW9uIHtcXG5cXG59XFxuXFxuI3RvZGF5LXJhaW4tYm94IHtcXG5ncmlkLWFyZWE6IHJhaW4tYm94O1xcbn1cXG5cXG4jdG9kYXktcmFpbiB7XFxuXFxufVxcblxcbiN0b2RheS1odW1pZGl0eS1ib3gge1xcbmdyaWQtYXJlYTogaHVtaWRpdHktYm94O1xcbn1cXG5cXG4jdG9kYXktaHVtaWRpdHkge1xcblxcbn1cXG5cXG4jdG9kYXktd2luZHNwZWVkLWJveCB7XFxuZ3JpZC1hcmVhOiB3aW5kc3BlZWQtYm94O1xcbn1cXG5cXG4jdG9kYXktd2luZHNwZWVkIHtcXG5cXG59XFxuXFxuI3RvZGF5LXdpbmRkaXJlY3Rpb24tYm94IHtcXG5ncmlkLWFyZWE6IHdpbmRkaXJlY3Rpb24tYm94O1xcbn1cXG5cXG4jdG9kYXktd2luZGRpcmVjdGlvbiB7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL3JldHJpZXZlJztcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgb2JqZWN0IHdpdGggb25seSB0aGUgd2VhdGhlciBkYXRhIHdlIGFyZSBpbnRlcmV0ZWQgaW4gZnJvbSBmZXRjaFxuY29uc3QgV2VhdGhlciA9IChcbiAgY2l0eSxcbiAgZGF0ZVRpbWUsXG4gIHRlbXBDLFxuICB0ZW1wRixcbiAgZmVlbHNMaWtlQyxcbiAgZmVlbHNMaWtlRixcbiAgaGlnaEMsXG4gIGxvd0MsXG4gIGhpZ2hGLFxuICBsb3dGLFxuICBzdW5yaXNlLFxuICBzdW5zZXQsXG4gIG1vb24sXG4gIGNvbmRpdGlvbixcbiAgY2hhbmNlUmFpbixcbiAgaHVtaWRpdHksXG4gIHdpbmRNcGgsXG4gIHdpbmREaXJlY3Rpb24sXG4gIGljb24sXG4pID0+IHtcbiAgY29uc3QgY3VycmVudENpdHkgPSBjaXR5O1xuICBjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBkYXRlVGltZTtcbiAgY29uc3QgY3VycmVudFRlbXBDID0gdGVtcEM7XG4gIGNvbnN0IGN1cnJlbnRUZW1wRiA9IHRlbXBGO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlQyA9IGZlZWxzTGlrZUM7XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VGID0gZmVlbHNMaWtlRjtcbiAgY29uc3QgY3VycmVudEhpZ2hDID0gaGlnaEM7XG4gIGNvbnN0IGN1cnJlbnRMb3dDID0gbG93QztcbiAgY29uc3QgY3VycmVudEhpZ2hGID0gaGlnaEY7XG4gIGNvbnN0IGN1cnJlbnRMb3dGID0gbG93RjtcbiAgY29uc3QgY3VycmVudFN1bnJpc2UgPSBzdW5yaXNlO1xuICBjb25zdCBjdXJyZW50U3Vuc2V0ID0gc3Vuc2V0O1xuICBjb25zdCBjdXJyZW50TW9vbiA9IG1vb247XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBjb25kaXRpb247XG4gIGNvbnN0IGN1cnJlbnRDaGFuY2VSYWluID0gY2hhbmNlUmFpbjtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gIGNvbnN0IGN1cnJlbnRXaW5kTXBoID0gd2luZE1waDtcbiAgY29uc3QgY3VycmVudFdpbmREaXJlY3Rpb24gPSB3aW5kRGlyZWN0aW9uO1xuICBjb25zdCBjdXJyZW50SWNvbiA9IGljb247XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50Q2l0eSxcbiAgICBjdXJyZW50RGF0ZVRpbWUsXG4gICAgY3VycmVudFRlbXBDLFxuICAgIGN1cnJlbnRUZW1wRixcbiAgICBjdXJyZW50RmVlbHNMaWtlQyxcbiAgICBjdXJyZW50RmVlbHNMaWtlRixcbiAgICBjdXJyZW50SGlnaEMsXG4gICAgY3VycmVudExvd0MsXG4gICAgY3VycmVudEhpZ2hGLFxuICAgIGN1cnJlbnRMb3dGLFxuICAgIGN1cnJlbnRTdW5yaXNlLFxuICAgIGN1cnJlbnRTdW5zZXQsXG4gICAgY3VycmVudE1vb24sXG4gICAgY3VycmVudENvbmRpdGlvbixcbiAgICBjdXJyZW50Q2hhbmNlUmFpbixcbiAgICBjdXJyZW50SHVtaWRpdHksXG4gICAgY3VycmVudFdpbmRNcGgsXG4gICAgY3VycmVudFdpbmREaXJlY3Rpb24sXG4gICAgY3VycmVudEljb24sXG4gIH07XG59O1xuXG4vLyBhc3luYyBmdW5jdGlvbiB0aGF0IHRha2VzIGxvY2FsZSBwYXJhbSAocXVlcnkpIGZyb20gY2FsbCBpbiB1aS5qc1xuLy8gcGFzc2VzIHRoZSBsb2NhbCBwYXJhbSB0byBnZXRXZWF0aGVyKCkgaW4gcmV0cmlldmUuanNcbi8vIHRha2VzIHRoZSB3ZWF0aGVyIHBhY2thZ2UgaXQgcmVjaWV2ZXMgZnJvbSBhcGksIHB1bGxzIHRoZSBkYXRhIHdlIGFyZSBpbnRlcmVzdGVkIGluXG4vLyBjcmVhdGVzIGFuZCByZXR1cm5zIHdlYXRoZXJEYXRhIG9iamVjdCB3aXRoIHRoYXQgaW5mbyBmcm9tIFdlYXRoZXIgZmFjdG9yeSBmdW5jdGlvblxuY29uc3QgcGFyc2VXZWF0aGVyID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJQYWNrYWdlID0gYXdhaXQgZ2V0V2VhdGhlcihxdWVyeSk7XG5cbiAgY29uc3QgY2l0eSA9IHdlYXRoZXJQYWNrYWdlLmxvY2F0aW9uLm5hbWU7XG4gIGNvbnN0IGRhdGVUaW1lID0gd2VhdGhlclBhY2thZ2UubG9jYXRpb24ubG9jYWx0aW1lO1xuICBjb25zdCB0ZW1wQyA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wRiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQudGVtcF9mO1xuICBjb25zdCBmZWVsc0xpa2VDID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY29uc3QgZmVlbHNMaWtlRiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG4gIGNvbnN0IGhpZ2hDID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYztcbiAgY29uc3QgbG93QyA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2M7XG4gIGNvbnN0IGhpZ2hGID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcbiAgY29uc3QgbG93RiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG4gIGNvbnN0IHsgc3VucmlzZSB9ID0gd2VhdGhlclBhY2thZ2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IHsgc3Vuc2V0IH0gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgbW9vbiA9IHdlYXRoZXJQYWNrYWdlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNoYW5jZVJhaW4gPSB3ZWF0aGVyUGFja2FnZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJQYWNrYWdlLmN1cnJlbnQ7XG4gIGNvbnN0IHdpbmRNcGggPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gd2VhdGhlclBhY2thZ2UuY3VycmVudC53aW5kX2RpcjtcbiAgY29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyUGFja2FnZS5jdXJyZW50LmNvbmRpdGlvbjtcblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IFdlYXRoZXIoXG4gICAgY2l0eSxcbiAgICBkYXRlVGltZSxcbiAgICB0ZW1wQyxcbiAgICB0ZW1wRixcbiAgICBmZWVsc0xpa2VDLFxuICAgIGZlZWxzTGlrZUYsXG4gICAgaGlnaEMsXG4gICAgbG93QyxcbiAgICBoaWdoRixcbiAgICBsb3dGLFxuICAgIHN1bnJpc2UsXG4gICAgc3Vuc2V0LFxuICAgIG1vb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGNoYW5jZVJhaW4sXG4gICAgaHVtaWRpdHksXG4gICAgd2luZE1waCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIGljb24sXG4gICk7XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VXZWF0aGVyO1xuIiwiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChxdWVyeSkgPT4ge1xuLy8gICB0cnkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zNmMwOWUyMDQ3Mzg0N2JjOTNmMTM0MzEyNDI3MDMmcT0ke3F1ZXJ5fSZkYXlzPTNgLFxuICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJQYWNrYWdlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlclBhY2thZ2U7XG4vLyAgIH1cbi8vICAgY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiaW1wb3J0IHBhcnNlV2VhdGhlciBmcm9tICcuL2Fzc2lnbic7XG5pbXBvcnQgZ3VzdGxvZ28gZnJvbSAnLi9pbWFnZXMvZ3VzdC1sb2dvMi5wbmcnO1xuXG4vLyBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpXG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZmllbGQnKTtcbmNvbnN0IHNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3VibWl0Jyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbmNvbnN0IG92ZXJsYXlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXktZ3VzdC10ZXh0Jyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgZ3VzdExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VzdC1sb2dvJyk7XG5jb25zdCBvdmVybGF5R3VzdExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheS1ndXN0LWxvZ28nKTtcbmNvbnN0IG1ldHJpY1N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRyaWMtc3dpdGNoJyk7XG5cbi8vIG1ldHJpYyB2YWx1ZSBob2xkZXJcbmxldCBjdXJyZW50TWV0cmljID0gJ0YnO1xuXG4vLyB1cGRhdGVzIGN1cnJlbnQgbWV0cmljIGFmdGVyIHN3aXRjaFxuY29uc3Qgc3dpdGNoTWV0cmljID0gKGEpID0+IHtcbiAgY3VycmVudE1ldHJpYyA9IGE7XG59O1xuXG5jb25zdCBsb2FkID0gKCkgPT4ge1xuICAvLyBhc3NpZ24gaW1hZ2VzXG4gIGd1c3RMb2dvLnNyYyA9IGd1c3Rsb2dvO1xuICBvdmVybGF5R3VzdExvZ28uc3JjID0gZ3VzdGxvZ287XG5cbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG4gIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdGltZScpO1xuICBjb25zdCB0b2RheVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktdGVtcCcpO1xuICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1mZWVsc2xpa2UnKTtcbiAgY29uc3QgdG9kYXlIaWdoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWhpZ2gnKTtcbiAgY29uc3QgdG9kYXlMb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktbG93Jyk7XG4gIGNvbnN0IHRvZGF5UmlzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1yaXNlJyk7XG4gIGNvbnN0IHRvZGF5U2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXNldCcpO1xuICBjb25zdCB0b2RheU1vb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktbW9vbicpO1xuICBjb25zdCB0b2RheUNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1jb25kaXRpb24nKTtcbiAgY29uc3QgdG9kYXlSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXJhaW4nKTtcbiAgY29uc3QgdG9kYXlIdW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1odW1pZGl0eScpO1xuICBjb25zdCB0b2RheVdpbmRNcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktd2luZHNwZWVkJyk7XG4gIGNvbnN0IHRvZGF5V2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS13aW5kZGlyZWN0aW9uJyk7XG4gIGNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1pY29uJyk7XG5cbiAgY29uc3QgYXNzaWduRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaEZpZWxkLnZhbHVlO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcGFyc2VXZWF0aGVyKHF1ZXJ5KTtcblxuICAgIGNvbnN0IHsgY3VycmVudENpdHkgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudERhdGVUaW1lIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRUZW1wRiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50RmVlbHNMaWtlRiB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50SGlnaEYgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudExvd0YgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudFRlbXBDIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRGZWVsc0xpa2VDIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRIaWdoQyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBjdXJyZW50TG93QyB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgY3VycmVudFJpc2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3VucmlzZTtcbiAgICBjb25zdCBjdXJyZW50U2V0ID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnNldDtcbiAgICBjb25zdCB7IGN1cnJlbnRNb29uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRDb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudENoYW5jZVJhaW4gfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgY3VycmVudEh1bWlkaXR5IH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kTXBoIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRXaW5kRGlyZWN0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGN1cnJlbnRJY29uIH0gPSB3ZWF0aGVyRGF0YTtcblxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50Q2l0eTtcbiAgICBkYXRldGltZS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRlVGltZTtcbiAgICB0b2RheUljb24uc3JjID0gY3VycmVudEljb247XG4gICAgLy8gY29uZGl0aW9uYWwgdG8ga2VlcCBjdXJyZW50IG1ldHJpYyBvbiBuZXcgc2VhcmNoZXNcbiAgICBpZiAoY3VycmVudE1ldHJpYyA9PT0gJ0YnKSB7XG4gICAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcEZ9XFx1MDBCMEZgO1xuICAgICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RmVlbHNMaWtlRn1cXHUwMEIwRmA7XG4gICAgICB0b2RheUhpZ2gudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SGlnaEZ9XFx1MDBCMEZgO1xuICAgICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TG93Rn1cXHUwMEIwRmA7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50TWV0cmljID09PSAnQycpIHtcbiAgICAgIHRvZGF5VGVtcC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wQ31cXHUwMEIwQ2A7XG4gICAgICB0b2RheUZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGZWVsc0xpa2VDfVxcdTAwQjBDYDtcbiAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIaWdoQ31cXHUwMEIwQ2A7XG4gICAgICB0b2RheUxvdy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRMb3dDfVxcdTAwQjBDYDtcbiAgICB9XG4gICAgdG9kYXlSaXNlLnRleHRDb250ZW50ID0gY3VycmVudFJpc2U7XG4gICAgdG9kYXlTZXQudGV4dENvbnRlbnQgPSBjdXJyZW50U2V0O1xuICAgIHRvZGF5TW9vbi50ZXh0Q29udGVudCA9IGN1cnJlbnRNb29uO1xuICAgIHRvZGF5Q29uZGl0aW9uLnRleHRDb250ZW50ID0gY3VycmVudENvbmRpdGlvbjtcbiAgICB0b2RheVJhaW4udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50Q2hhbmNlUmFpbn0lYDtcbiAgICB0b2RheUh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudEh1bWlkaXR5fSVgO1xuICAgIHRvZGF5V2luZE1waC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXaW5kTXBofSBtcGhgO1xuICAgIHRvZGF5V2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRXaW5kRGlyZWN0aW9uO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG4gICAgdG9kYXkuY2xhc3NOYW1lID0gJ3Zpc2libGUnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRUZW1wRixcbiAgICAgIGN1cnJlbnRGZWVsc0xpa2VGLFxuICAgICAgY3VycmVudEhpZ2hGLFxuICAgICAgY3VycmVudExvd0YsXG4gICAgICBjdXJyZW50VGVtcEMsXG4gICAgICBjdXJyZW50RmVlbHNMaWtlQyxcbiAgICAgIGN1cnJlbnRIaWdoQyxcbiAgICAgIGN1cnJlbnRMb3dDLFxuICAgIH07XG4gIH07XG5cbiAgLy8gcnVucyBhc3NpZ25EYXRhIGFuZCBwb3B1bGF0ZXMgZGF0YVxuICBzZWFyY2hTdWJtaXQub25jbGljayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzZWFyY2hGaWVsZC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXktdmlzaWJsZSc7XG4gICAgICBvdmVybGF5VGV4dC50ZXh0Q29udGVudCA9ICdsb2FkaW5nIC4uLic7XG4gICAgICB0b2RheS5jbGFzc05hbWUgPSAnaGlkZGVuJztcbiAgICAgIGFzc2lnbkRhdGEoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY2hhbmdlcyBtZXRyaWMgcmVhZGluZyBiYXNlZCBvbiBjdXJyZW50IG1ldHJpY1xuICBtZXRyaWNTd2l0Y2gub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodG9kYXkuY2xhc3NOYW1lID09PSAndmlzaWJsZScpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXNzaWduRGF0YSgpO1xuICAgICAgaWYgKGN1cnJlbnRNZXRyaWMgPT09ICdGJykge1xuICAgICAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRUZW1wQ31cXHUwMEIwQ2A7XG4gICAgICAgIHRvZGF5RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50RmVlbHNMaWtlQ31cXHUwMEIwQ2A7XG4gICAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudEhpZ2hDfVxcdTAwQjBDYDtcbiAgICAgICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRMb3dDfVxcdTAwQjBDYDtcbiAgICAgICAgc3dpdGNoTWV0cmljKCdDJyk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRNZXRyaWMgPT09ICdDJykge1xuICAgICAgICB0b2RheVRlbXAudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRUZW1wRn1cXHUwMEIwRmA7XG4gICAgICAgIHRvZGF5RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7KGF3YWl0IGN1cnJlbnREYXRhKS5jdXJyZW50RmVlbHNMaWtlRn1cXHUwMEIwRmA7XG4gICAgICAgIHRvZGF5SGlnaC50ZXh0Q29udGVudCA9IGAkeyhhd2FpdCBjdXJyZW50RGF0YSkuY3VycmVudEhpZ2hGfVxcdTAwQjBGYDtcbiAgICAgICAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBgJHsoYXdhaXQgY3VycmVudERhdGEpLmN1cnJlbnRMb3dGfVxcdTAwQjBGYDtcbiAgICAgICAgc3dpdGNoTWV0cmljKCdGJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWQgZnJvbSAnLi91aSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9