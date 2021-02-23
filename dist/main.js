/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_buttons_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-buttons-events */ \"./src/main-buttons-events.js\");\n\r\n\r\n//Factory function to create a new task object\r\nfunction addNewTask (title, dueDate, project = 'Inbox', priority) {\r\n    let checkbox = 0;\r\n    return {title, dueDate, project, priority, checkbox};\r\n}\r\n\r\n//Add event listener to menu button\r\n(0,_main_buttons_events__WEBPACK_IMPORTED_MODULE_0__.addEventToMenuBtn)();\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/main-buttons-dom.js":
/*!*********************************!*\
  !*** ./src/main-buttons-dom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openOrCloseLeftBar\": () => (/* binding */ openOrCloseLeftBar)\n/* harmony export */ });\nfunction openOrCloseLeftBar() {\r\n    const leftBar = document.getElementById('left-bar');\r\n    const mainContent = document.getElementById('main-content');\r\n\r\n    if (leftBar.className === 'left-bar-open') {\r\n        leftBar.classList.remove('left-bar-open');\r\n        leftBar.classList.add('left-bar-closed');\r\n        mainContent.style.marginLeft = '0';\r\n    }\r\n    else {\r\n        leftBar.classList.add('left-bar-open');\r\n        leftBar.classList.remove('left-bar-closed');\r\n        mainContent.style.marginLeft = '290px';\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/main-buttons-dom.js?");

/***/ }),

/***/ "./src/main-buttons-events.js":
/*!************************************!*\
  !*** ./src/main-buttons-events.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventToMenuBtn\": () => (/* binding */ addEventToMenuBtn)\n/* harmony export */ });\n/* harmony import */ var _main_buttons_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-buttons-dom */ \"./src/main-buttons-dom.js\");\n\r\n\r\nfunction addEventToMenuBtn() {\r\n    let menuBtn = document.querySelector('#menu-btn');\r\n    menuBtn.addEventListener('click', _main_buttons_dom__WEBPACK_IMPORTED_MODULE_0__.openOrCloseLeftBar);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/main-buttons-events.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;