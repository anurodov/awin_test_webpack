/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/img2.jpg */ "./src/img/img2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Root styles */
:root {
  /*	--primary-color: #172a47;
      --primary-color-highlight: #442993;*/
  --bs-body-font-family: "Cabin", sans-serif;
}

/* Body styles */
.body {
  background-color: #f8f9fa;
}

/* Button styles */
.btn {
  border-radius: 0.8rem;
}

.btn.btn-outline-secondary {
  border: 1 solid;
  border-color: #e9e9e9;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
  color: #23282c;
}

.btn.btn-outline-secondary:hover {
  border-color: #cccccc;
  background-color: #fff;
  color: inherit;
}

/* Nav link styles */
.nav-item .nav-link {
  color: #23282c;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
}

.nav-item .hover-color-1:hover {
  color: #442993;
}

.nav-item .hover-color-2:hover {
  color: #00964b;
}

.nav-item .hover-color-3:hover {
  color: #009aff;
}

.nav-item .hover-color-4:hover {
  color: #20aebc;
}

.nav-item .hover-color-5:hover {
  color: #f60;
}

.nav-item .hover-color-6:hover {
  color: #fab418;
}

/* Hero styles */
.bg-image {
  height: 800px;
  background-image: linear-gradient(to right, rgba(255, 102, 0, 0.7), rgba(255, 102, 0, 0.1)), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) !important; /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(to right, rgba(255, 102, 0, 0.7), rgba(255, 102, 0, 0.1)), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-center {
  margin-top: 10rem;
  margin-bottom: auto !important;
  margin-left: 2rem;
}

.hero-title {
  font-size: 50px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 0.625rem;
  color: #fff;
}

.hero-paragraph {
  font-size: 30px;
  font-weight: 100;
  line-height: 1.35;
  color: #fff;
}

.hero-text {
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
}

.btn.btn-light {
  color: #f60;
}

.btn.btn-light:hover {
  color: #fff;
  border: 2 solid;
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0) !important;
}

/* Card styles */
.card {
  border-radius: 2rem;
}

.card:hover {
  box-shadow: 2px 3px 3px 1px rgba(255, 102, 0, 0.7);
  transform: scale(1.01);
}

.rounded-circle {
  background-color: white;
}

/* Footer */
.footer {
  background-color: #23282c;
}

.nav-link.ps-0.text-muted:hover {
  color: #e9e9e9 !important;
}

.btn.btn-outline-light.mx-2:hover {
  border-color: #cccccc;
  background-color: #23282c;
  color: #fff;
}

a.back-to-start {
  text-decoration: none;
  color: #fff !important;
}

.back-to-start:hover {
  text-decoration: none;
  color: #fff;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,gBAAA;AAEA;EACI;0CAAA;EAEI,0CAAA;AAAR;;AAGI,gBAAA;AACA;EACI,yBAAA;AAAR;;AAGI,kBAAA;AACA;EACE,qBAAA;AAAN;;AAGI;EACE,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;AAAN;;AAEI;EACE,qBAAA;EACA,sBAAA;EACA,cAAA;AACN;;AAEI,oBAAA;AACA;EACI,cAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AACR;;AAEI;EACI,cAAA;AACR;;AAEI;EACI,cAAA;AACR;;AAEI;EACI,cAAA;AACR;;AAEI;EACI,cAAA;AACR;;AAEI;EACI,WAAA;AACR;;AAEI;EACI,cAAA;AACR;;AAEI,gBAAA;AACA;EACE,aAAA;EACA,+IAAA,EAAA,+BAAA;EACA,+IAAA,EAAA,qEAAA;EACA,4BAAA;EACA,sBAAA;AACN;;AAEI;EACE,iBAAA;EACA,8BAAA;EACA,iBAAA;AACN;;AAEI;EACI,eAAA;EACF,gBAAA;EACA,cAAA;EACA,uBAAA;EACA,WAAA;AACN;;AAEI;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;AACR;;AAEI;EACI,gBAAA;EACF,gBAAA;EACA,mBAAA;AACN;;AAEI;EACI,WAAA;AACR;;AAEI;EACI,WAAA;EACA,eAAA;EACA,kBAAA;EACA,mDAAA;AACR;;AAEI,gBAAA;AAEA;EACE,mBAAA;AAAN;;AAGI;EACI,kDAAA;EACA,sBAAA;AAAR;;AAGI;EACE,uBAAA;AAAN;;AAGI,WAAA;AACA;EACE,yBAAA;AAAN;;AAGI;EACE,yBAAA;AAAN;;AAGI;EACE,qBAAA;EACA,yBAAA;EACA,WAAA;AAAN;;AAGI;EACE,qBAAA;EACA,sBAAA;AAAN;;AAGI;EACE,qBAAA;EACA,WAAA;AAAN","sourcesContent":["/* Root styles */\n\n:root {\n    /*\t--primary-color: #172a47;\n        --primary-color-highlight: #442993;*/\n        --bs-body-font-family: 'Cabin', sans-serif;\n    }\n    \n    /* Body styles */\n    .body {\n        background-color: #f8f9fa;\n    }\n    \n    /* Button styles */\n    .btn {\n      border-radius: 0.80rem;\n    }\n    \n    .btn.btn-outline-secondary {\n      border: 1 solid;\n      border-color: #e9e9e9;\n      font-size: .875rem;\n      font-weight: 600;\n      line-height: 20px;\n      color: #23282c;\n    }\n    .btn.btn-outline-secondary:hover {\n      border-color: #cccccc;\n      background-color: #fff;\n      color: inherit;\n    }\n    \n    /* Nav link styles */\n    .nav-item .nav-link {\n        color: #23282c;\n        display: block;\n        font-size: 1rem;\n        font-weight: 500;\n        line-height: 1.5;\n    }\n    \n    .nav-item .hover-color-1:hover {\n        color: #442993;\n    }\n    \n    .nav-item .hover-color-2:hover {\n        color: #00964b;\n    }\n    \n    .nav-item .hover-color-3:hover {\n        color: #009aff;\n    }\n    \n    .nav-item .hover-color-4:hover {\n        color: #20aebc;\n    }\n    \n    .nav-item .hover-color-5:hover {\n        color: #f60;\n    }\n    \n    .nav-item .hover-color-6:hover {\n        color: #fab418;\n    }\n    \n    /* Hero styles */\n    .bg-image {\n      height: 800px;\n      background-image: linear-gradient(to right, rgb(255,102,0,0.7), rgb(255,102,0,0.1)), url('../img/img2.jpg')!important;  /* Chrome 10-25, Safari 5.1-6 */\n      background-image: linear-gradient(to right, rgb(255,102,0,0.7), rgb(255,102,0,0.1)), url('../img/img2.jpg')!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n    \n    .hero-center {\n      margin-top: 10rem;\n      margin-bottom: auto!important;\n      margin-left: 2rem;\n    }\n    \n    .hero-title {\n        font-size: 50px;\n      font-weight: 300;\n      line-height: 1;\n      margin-bottom: .625rem;\n      color: #fff;\n    }\n    \n    .hero-paragraph {\n        font-size: 30px;\n        font-weight: 100;\n        line-height: 1.35;\n        color: #fff;\n    }\n    \n    .hero-text {\n        text-align: left;\n      margin-top: auto;\n      margin-bottom: auto;\n    }\n    \n    .btn.btn-light {\n        color: #f60;\n    }\n    \n    .btn.btn-light:hover {\n        color: #fff;\n        border: 2 solid;\n        border-color: #fff;\n        background-color: rgba(255,255,255,0)!important;\n    }\n    \n    /* Card styles */\n    \n    .card {\n      border-radius: 2rem;\n    }\n    \n    .card:hover{\n        box-shadow: 2px 3px 3px 1px rgba(255,102,0,0.7);\n        transform: scale(1.01);\n    }\n    \n    .rounded-circle {\n      background-color: white;\n    }\n    \n    /* Footer */\n    .footer {\n      background-color: #23282c; \n    }\n    \n    .nav-link.ps-0.text-muted:hover {\n      color: #e9e9e9!important;\n    }\n    \n    .btn.btn-outline-light.mx-2:hover {\n      border-color: #cccccc;\n      background-color: #23282c; \n      color: #fff;\n    }\n    \n    a.back-to-start {\n      text-decoration: none;\n      color: #fff!important;\n    }\n    \n    .back-to-start:hover {\n      text-decoration: none;\n      color: #fff;\n    }\n    \n    \n    // /* HighCharts */\n    // @import url(\"https://code.highcharts.com/css/highcharts.css\");\n    // @import url(\"https://code.highcharts.com/css/datagrid.css\");\n    // @import url(\"https://code.highcharts.com/css/dashboards.css\");\n    \n    // /* CHART 1 */\n    // #patterns-enabled {\n    //     width: 17px;\n    //     height: 17px;\n    //     vertical-align: middle;\n    //     margin-top: 0;\n    //     cursor: pointer;\n    // }\n    \n    // #patterns-enabled-label {\n    //     cursor: pointer;\n    // }\n    \n    // #container {\n    //     height: 420px;\n    // }\n    \n    // #chart-wrap {\n    //     min-width: 350px;\n    //     max-width: 700px;\n    //     margin: 1em auto;\n    //     font-family: sans-serif;\n    // }\n    \n    // .highcharts-figure,\n    // .highcharts-data-table table {\n    //     margin: 1em auto;\n    // }\n    \n    // .highcharts-data-table table {\n    //     font-family: Verdana, sans-serif;\n    //     border-collapse: collapse;\n    //     border: 1px solid #ebebeb;\n    //     margin: 10px auto;\n    //     text-align: center;\n    //     width: 100%;\n    //     max-width: 500px;\n    // }\n    \n    // .highcharts-data-table caption {\n    //     padding: 1em 0;\n    //     font-size: 1.2em;\n    //     color: #555;\n    // }\n    \n    // .highcharts-data-table th {\n    //     font-weight: 600;\n    //     padding: 0.5em;\n    // }\n    \n    // .highcharts-data-table td,\n    // .highcharts-data-table th,\n    // .highcharts-data-table caption {\n    //     padding: 0.5em;\n    // }\n    \n    // .highcharts-data-table thead tr,\n    // .highcharts-data-table tr:nth-child(even) {\n    //     background: #f8f8f8;\n    // }\n    \n    // .highcharts-data-table tr:hover {\n    //     background: #f1f7ff;\n    // }\n    \n    // /* CHART 2 */\n    // .highcharts-figure,\n    // .highcharts-data-table table {\n    //     min-width: 360px;\n    //     max-width: 600px;\n    //     margin: 1em auto;\n    // }\n    "],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/awin-logo.png */ "./src/img/awin-logo.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE-edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>AWIN Test Task</title>\n    <!-- Bootstrap CSS -->\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n    <!-- Main CSS -->\n    <!-- Google Fonts -->\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Cabin&display=swap\" rel=\"stylesheet\">\n    <!--Main JS-->\n  </head>\n  <body class=\"bg-light\">\n    <!-- Header Starts -->\n      <header class=\"d-flex flex-wrap justify-content-between p-3 border-bottom bg-white\" id=\"header-start\">\n          <a href=\"https://www.awin.com/us\" class=\"d-flex align-items-center mb-3 ml-3 mb-md-0 me-md-auto\" title=\"Return to the Awin hompage\">\n          <img src=\"https://www.awin.com/images/logo-awin-black.svg\" alt=\"Return to the Awin homepage\" width=\"178\" height=\"80\">\n          </a>\n          <nav class=\"mr-3\">\n            <div class=\"d-flex justify-content-end\">\n              <span class=\"mr-3 p-1\">\n                <img class=\"rounded\" src=\"https://res.cloudinary.com/awin/image/upload/q_auto,f_auto/v1509030065/awin-website/flags/image/i85hhwukhlzaeadmu4gb.png\" alt=\"US\" height=\"24\">\n              </span>\n              <button type=\"button\" class=\"btn btn-outline-secondary mx-2\">Sign up</button>\n              <button type=\"button\" class=\"btn btn-outline-secondary mx-2\">Log in</button>\n              <button type=\"button\" class=\"btn btn-outline-secondary mx-2\">Accessibility Tools</button>\n            </div>\n            <ul class=\"nav mt-3\">\n              <li class=\"nav-item\"><a href=\"#\" class=\"nav-link hover-color-1\">Advertisers</a></li>\n              <li class=\"nav-item\"><a href=\"#\" class=\"nav-link hover-color-2\">Publishers</a></li>\n              <li class=\"nav-item\"><a href=\"#\" class=\"nav-link hover-color-3\">Market Insights</a></li>\n              <li class=\"nav-item\"><a href=\"#\" class=\"nav-link hover-color-4\">News and Events</a></li>\n              <li class=\"nav-item\"><a href=\"#\" class=\"nav-link hover-color-5\">Contact</a></li>\n              <li class=\"nav-item\"><a href=\"#\" class=\"nav-link hover-color-6\">About Us</a></li>\n            </ul>\n          </nav>\n      </header>\n      <main class=\"flex-auto\">\n      <!-- Hero Starts-->\n      <div class=\"p-5 bg-image\">\n        <div>\n          <div class=\"hero-center d-flex justify-content-start align-items-center h-100\">\n            <div class=\"hero-text col-lg-5\">\n              <h1 class=\"hero-title\">Your Q2 Report</h1>\n              <p class=\"hero-paragraph\">Explore your results on various platforms and learn how to strengthen your presence in affiliate marketing</p>\n              <a class=\"btn btn-light btn-lg\" href=\"#stats\" role=\"button\">See stats</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- JS Graph 1 Start-->\n       <div class=\"container px-4 py-5\">\n          <h2 class=\"pb-3 pt-5\" id=\"stats\">Q2 overall revenue per channel</h2>\n\n          <div id=\"chart-wrap\">\n                      <figure class=\"highcharts-figure\">\n                          <div id=\"container-1\"></div>\n                          <p class=\"highcharts-description\">\n                             Here are your stats for the second quarter of 2023 across all social media platforms you've been advertising on.\n                          </p>\n                          <label id=\"patterns-enabled-label\">\n                            <input type=\"checkbox\" id=\"patterns-enabled\" checked>\n                            Enable color patterns\n                          </label>\n                      </figure>\n                  </div>\n            </div>\n\n              <!-- JS Graph 2 Start-->\n           <div class=\"container px-4 py-3\">\n              <h2 class=\"pb-3\" id=\"stats\">Annual revenue over time</h2>\n              <figure class=\"highcharts-figure\">\n                  <div id=\"container-2\"></div>\n                  <p class=\"highcharts-description\">\n                      Keep track of your annual revenue with our internal tools.\n                  </p>\n              </figure>\n          </div>\n\n      <!-- Cards -->\n        <div class=\"container px-4 py-5\" id=\"custom-cards\">\n          <h2 class=\"pb-2\">Read more about influencer marketing</h2>\n          <div class=\"row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3\">\n\n          <!-- Card 1 -->\n            <div class=\"col m-3\">\n              <div class=\"card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg mt-3\" style=\"background-image: url('card1.jpeg');\">\n                <div class=\"d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1\">\n                  <h2 class=\"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold\">Tools for analytics</h2>\n                  <ul class=\"d-flex list-unstyled mt-auto\">\n                    <li class=\"me-auto\">\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"AWIN\" width=\"32\" height=\"32\" class=\"rounded-circle border border-white\">\n                    </li>\n                    <li class=\"d-flex align-items-center me-3\">\n                      <svg class=\"bi me-2\" width=\"1em\" height=\"1em\"><use xlink:href=\"#geo-fill\"></use></svg>\n                      <small>Berlin</small>\n                    </li>\n                    <li class=\"d-flex align-items-center\">\n                      <svg class=\"bi me-2\" width=\"1em\" height=\"1em\"><use xlink:href=\"#calendar3\"></use></svg>\n                      <small>3d</small>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <!-- Card 2 -->\n            <div class=\"col m-3\">\n              <div class=\"card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg mt-3\" style=\"background-image: url('card2.jpeg');\">\n                <div class=\"d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1\">\n                  <h2 class=\"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold\">Tik Tok's new hints</h2>\n                  <ul class=\"d-flex list-unstyled mt-auto\">\n                    <li class=\"me-auto\">\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"AWIN\" width=\"32\" height=\"32\" class=\"rounded-circle border border-white color-white\">\n                    </li>\n                    <li class=\"d-flex align-items-center me-3\">\n                      <svg class=\"bi me-2\" width=\"1em\" height=\"1em\"><use xlink:href=\"#geo-fill\"></use></svg>\n                      <small>Berlin</small>\n                    </li>\n                    <li class=\"d-flex align-items-center\">\n                      <svg class=\"bi me-2\" width=\"1em\" height=\"1em\"><use xlink:href=\"#calendar3\"></use></svg>\n                      <small>4d</small>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <!-- Card 3 -->\n            <div class=\"col m-3\">\n              <div class=\"card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg mt-3\" style=\"background-image: url('card3.jpeg');\">\n                <div class=\"d-flex flex-column h-100 p-5 pb-3 text-shadow-1\">\n                  <h2 class=\"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold\">Instargam Threads</h2>\n                  <ul class=\"d-flex list-unstyled mt-auto\">\n                    <li class=\"me-auto\">\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"AWIN\" width=\"32\" height=\"32\" class=\"rounded-circle border border-white\">\n                    </li>\n                    <li class=\"d-flex align-items-center me-3\">\n                      <svg class=\"bi me-2\" width=\"1em\" height=\"1em\"><use xlink:href=\"#geo-fill\"></use></svg>\n                      <small>Berlin</small>\n                    </li>\n                    <li class=\"d-flex align-items-center\">\n                      <svg class=\"bi me-2\" width=\"1em\" height=\"1em\"><use xlink:href=\"#calendar3\"></use></svg>\n                      <small>5d</small>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </main>\n\n      <!-- Footer Starts-->\n          <footer class=\"footer row row-cols-5 py-5\">\n            <div class=\"col\">\n              <a href=\"/\" class=\"d-flex justify-content-start align-items-center ml-5 mt-3 link-dark text-decoration-none\">\n                <img id=\"awin-white-logo\" alt=\"AWIN\" class=\"bi me-2\" width=\"100px\">\n              </a>\n            </div>\n\n            <div class=\"col\">\n            </div>\n\n            <div class=\"col mr-5\">\n              <div class=\"d-flex justify-content-end mb-3\">\n                <a class=\"back-to-start\" href=\"#header-start\">\n                <button type=\"button\" class=\"btn btn-outline-light mx-2\">Back to top \n                <img width=\"20\" height=\"20\" src=\"https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-up.png\"/>\n                </a>\n                </button>\n              </div>\n              <ul class=\"nav flex-row justify-content-end\">\n                <li class=\"nav-item mb-2\"><a href=\"#\" class=\"nav-link text-muted\">Home</a></li>\n                <li class=\"nav-item mb-2\"><a href=\"#\" class=\"nav-link text-muted\">Features</a></li>\n                <li class=\"nav-item mb-2\"><a href=\"#\" class=\"nav-link text-muted\">Pricing</a></li>\n                <li class=\"nav-item mb-2\"><a href=\"#\" class=\"nav-link text-muted\">FAQs</a></li>\n                <li class=\"nav-item mb-2\"><a href=\"#\" class=\"nav-link text-muted\">About</a></li>\n              </ul>\n            </div>\n            \n          </footer>\n    \n    <!-- Bootstrap JS -->\n    <" + "script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"><" + "/script>\n    <" + "script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"><" + "/script>\n    <" + "script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"><" + "/script>\n    <!-- HighCharts JS -->\n    <" + "script src=\"https://code.highcharts.com/highcharts.js\"><" + "/script>\n    <" + "script src=\"https://code.highcharts.com/modules/exporting.js\"><" + "/script>\n    <" + "script src=\"https://code.highcharts.com/modules/export-data.js\"><" + "/script>\n    <" + "script src=\"https://code.highcharts.com/modules/accessibility.js\"><" + "/script>\n    <" + "script src=\"https://code.highcharts.com/modules/pattern-fill.js\"><" + "/script>\n    <" + "script src=\"https://code.highcharts.com/themes/high-contrast-light.js\"><" + "/script>\n    <" + "script src=\"https://code.highcharts.com/modules/data.js\"><" + "/script>\n  </body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/img/awin-logo.png":
/*!*******************************!*\
  !*** ./src/img/awin-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "awin-logo.png";

/***/ }),

/***/ "./src/img/awin-white-logo.svg":
/*!*************************************!*\
  !*** ./src/img/awin-white-logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "awin-white-logo.svg";

/***/ }),

/***/ "./src/img/card1.jpeg":
/*!****************************!*\
  !*** ./src/img/card1.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "card1.jpeg";

/***/ }),

/***/ "./src/img/card2.jpeg":
/*!****************************!*\
  !*** ./src/img/card2.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "card2.jpeg";

/***/ }),

/***/ "./src/img/card3.jpeg":
/*!****************************!*\
  !*** ./src/img/card3.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "card3.jpeg";

/***/ }),

/***/ "./src/img/img2.jpg":
/*!**************************!*\
  !*** ./src/img/img2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img2.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./src/template.html");
/* harmony import */ var _img_awin_white_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/awin-white-logo.svg */ "./src/img/awin-white-logo.svg");
/* harmony import */ var _img_card1_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/card1.jpeg */ "./src/img/card1.jpeg");
/* harmony import */ var _img_card2_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/card2.jpeg */ "./src/img/card2.jpeg");
/* harmony import */ var _img_card3_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/card3.jpeg */ "./src/img/card3.jpeg");
//STYLES



//IMAGES

//logo

var awinwhitelogoImg = document.getElementById('awin-white-logo');
awinwhitelogoImg.src = _img_awin_white_logo_svg__WEBPACK_IMPORTED_MODULE_2__;
//cards




//CHART 1
var clrs = Highcharts.getOptions().colors;
var pieColors = [clrs[2], clrs[0], clrs[3], clrs[1], clrs[4]];

// Get a default pattern, but using the pieColors above.
// The i-argument refers to which default pattern to use
function getPattern(i) {
  return {
    pattern: Highcharts.merge(Highcharts.patterns[i], {
      color: pieColors[i]
    })
  };
}

// Get 5 patterns
var patterns = [0, 1, 2, 3, 4].map(getPattern);
var chart = Highcharts.chart('container-1', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Revenue breakdown per platform',
    align: 'left'
  },
  subtitle: {
    text: 'AWIN AG',
    align: 'left'
  },
  colors: patterns,
  tooltip: {
    valueSuffix: '%',
    borderColor: '#8ae',
    shape: 'rect',
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    followPointer: false,
    stickOnContact: true
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        connectorColor: '#777',
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      },
      point: {
        events: {
          click: function click() {
            window.location.href = this.website;
          }
        }
      },
      cursor: 'pointer',
      borderWidth: 3
    }
  },
  series: [{
    name: '% of Q2 revenue',
    data: [{
      name: 'Instagram',
      y: 40.6,
      website: 'https://www.instagram.com/',
      accessibility: {
        description: 'This is the most profitable platform for you'
      }
    }, {
      name: 'TikTok',
      y: 40.1,
      website: 'https://www.tiktok.com/en/'
    }, {
      name: 'Pinterest',
      y: 12.9,
      website: 'https://www.pinterest.com/'
    }, {
      name: 'Threads',
      y: 2,
      website: 'https://about.instagram.com/blog/announcements/threads-instagram-text-feature'
    }, {
      name: 'Twitter',
      y: 4.4,
      website: 'https://twitter.com/home'
    }]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        plotOptions: {
          series: {
            dataLabels: {
              format: '<b>{point.name}</b>'
            }
          }
        }
      }
    }]
  }
});

// Toggle patterns enabled
document.getElementById('patterns-enabled').onclick = function () {
  chart.update({
    colors: this.checked ? patterns : pieColors
  });
};

//CHART 2
Highcharts.chart('container-2', {
  title: {
    text: 'Growt YoY',
    align: 'left'
  },
  subtitle: {
    text: 'By AWIN AG',
    align: 'left'
  },
  yAxis: {
    title: {
      text: 'Revenue in $'
    }
  },
  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2014 to 2023'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2013
    }
  },
  series: [{
    name: 'Instagram',
    data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610]
  }, {
    name: 'TikTok',
    data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 131050]
  }, {
    name: 'Pinterest',
    data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 55663]
  }, {
    name: 'Threads',
    data: [null, null, null, null, null, null, null, null, 11164, 11218, 10077]
  }, {
    name: 'Twitter',
    data: [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 400
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle262f4c5d1e04f0bb9e85.js.map