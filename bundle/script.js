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


var aspectRatios = [{
    aspect: 0.67,
    ratio: '2/3'
}, {
    aspect: 1,
    ratio: '1/1'
}, {
    aspect: 1.33,
    ratio: '4/3'
}, {
    aspect: 1.6,
    ratio: '16/10'
}, {
    aspect: 1.67,
    ratio: '5/3'
}, {
    aspect: 1.78,
    ratio: '16/9'
}, {
    aspect: 2.37,
    ratio: '21/9'
}];

/**
 * @description Check if value is of type 'string'
 * @param val
 * @returns {boolean}
 */
var isStr = function isStr(val) {
    return typeof val === 'string';
};

/**
 * @description To int
 * @param value
 * @returns {number}
 */
var toInt = function toInt(value) {
    return parseInt(value, 10);
};

/**
 * @description To float
 * @param value
 * @param decimalPlaces
 * @returns {string}
 */
var toFloat = function toFloat(value) {
    var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return parseFloat(value).toFixed(decimalPlaces);
};

/**
 * @description Get aspect
 * @param width
 * @param height
 * @returns {*}
 */
var getAspect = function getAspect(width, height) {
    var aspect = toFloat(width / height);
    return isStr(aspect) ? +aspect : aspect;
};

/**
 * @description Get matchin ratio
 * @param aspect
 * @returns {*}
 */
var getMatchingRatio = function getMatchingRatio(aspect) {
    var match = {};
    var matchOffset = Number.MAX_SAFE_INTEGER;
    var isMatchFound = false;

    aspectRatios.forEach(function (aspectRatio) {
        if (isMatchFound) {
            return false;
        }
        var isBigger = aspect > aspectRatio.aspect;
        var isSmaller = aspect < aspectRatio.aspect;

        if (!isBigger && !isSmaller) {
            isMatchFound = true;
            match = aspectRatio;
        }

        var offset = isBigger ? aspect - aspectRatio.aspect : aspectRatio.aspect - aspect;
        if (offset < matchOffset) {
            match = aspectRatio;
            matchOffset = offset;
        }
    });

    return match;
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
    var aspect = getAspect(width, height);

    var _getMatchingRatio = getMatchingRatio(aspect),
        ratio = _getMatchingRatio.ratio;

    return {
        isLandscape: isLandscape,
        isPortrait: isPortrait,
        isSquare: isSquare,
        isSquareLikeLandscape: isSquareLikeLandscape,
        isSquareLikePortrait: isSquareLikePortrait,
        widthIncrease: widthIncrease,
        heightIncrease: heightIncrease,
        aspect: aspect,
        ratio: ratio
    };
};

window['getImageOrientation'] = getImageOrientation;

module.exports = getImageOrientation;

/***/ })
/******/ ]);