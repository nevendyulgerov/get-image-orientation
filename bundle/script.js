/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @description To int
 * @param value
 * @returns {number}
 */
var toInt = function toInt(value) {
    return parseInt(value, 10);
};

/**
 * @description Get image aspect type
 * @param width
 * @param height
 * @param maxIncrease
 * @returns object
 */
var getImageOrientation = function getImageOrientation(width, height) {
    var maxIncrease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;

    var isSquare = width === height;
    var isLandscape = !isSquare && width > height;
    var isPortrait = !isSquare && !isLandscape;
    var widthIncrease = width > height ? toInt((width - height) * 100 / width) : 0;
    var heightIncrease = height > width ? toInt((height - width) * 100 / height) : 0;
    var isSquareLikeLandscape = isLandscape && widthIncrease < maxIncrease;
    var isSquareLikePortrait = isPortrait && heightIncrease < maxIncrease;

    return {
        isLandscape: isLandscape,
        isPortrait: isPortrait,
        isSquare: isSquare,
        isSquareLikeLandscape: isSquareLikeLandscape,
        isSquareLikePortrait: isSquareLikePortrait,
        widthIncrease: widthIncrease,
        heightIncrease: heightIncrease
    };
};

module.exports = getImageOrientation;

/***/ })
/******/ ]);