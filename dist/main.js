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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addDelPeople__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addDelPeople */ \"./src/modules/addDelPeople.js\");\n\r\n\r\n(0,_modules_addDelPeople__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://demexam-main/./src/index.js?");

/***/ }),

/***/ "./src/modules/addDelPeople.js":
/*!*************************************!*\
  !*** ./src/modules/addDelPeople.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addDel = () => {\r\n    const form = document.querySelector('.booking-people-form')\r\n    const addButton = document.querySelector('.booking-people__button--plus')\r\n    const delButton = document.querySelector('.booking-people__button--minus')\r\n\r\n    const renderAdd = () => {\r\n        const newDiv = document.createElement('div')\r\n        newDiv.classList.add('booking-people-container')\r\n        newDiv.innerHTML = `\r\n        <div class=\"booking-people-form--half\">\r\n                            <div class=\"booking-people-group booking-people-group--half\">\r\n                                <label for=\"bookingPeopleSurname\" class=\"booking-people__label\">Фамилия</label>\r\n                                <input type=\"text\" class=\"booking-people__input\" id=\"bookingPeopleSurname\" value=\"Иванов\">\r\n                            </div>\r\n                            <!-- /.booking-people-group booking-people-group--half -->\r\n                            <div class=\"booking-people-group booking-people-group--half\">\r\n                                <label for=\"bookingPeopleSurname\" class=\"booking-people__label\">Имя</label>\r\n                                <input type=\"text\" class=\"booking-people__input\" id=\"bookingPeopleSurname\" value=\"Иван\">\r\n                            </div>\r\n                            <!-- /.booking-people-group booking-people-group--half -->\r\n                        </div>\r\n                        <!-- /.booking-people-form--half -->\r\n                        <div class=\"booking-people-group\">\r\n                            <label for=\"bookingPeoplePatr\" class=\"booking-people__label\">Отчество</label>\r\n                            <input type=\"text\" class=\"booking-people__input\" id=\"bookingPeoplePatr\" value=\"Иванович\">\r\n                        </div>\r\n                        <!-- /.booking-people-group -->\r\n                        <div class=\"booking-people-group\">\r\n                            <label for=\"bookingPeopleBorn\" class=\"booking-people__label\">Дата рождения</label>\r\n                            <input type=\"date\" class=\"booking-people__input\" id=\"bookingPeopleBorn\">\r\n                        </div>\r\n                        <!-- /.booking-people-group -->\r\n                        <div class=\"booking-people-group\">\r\n                            <label for=\"bookingPeopleDocs\" class=\"booking-people__label\">Номер документа</label>\r\n                            <input type=\"text\" class=\"booking-people__input\" id=\"bookingPeopleDocs\">\r\n                        </div>\r\n                        <!-- /.booking-people-group -->\r\n        `\r\n        form.append(newDiv)\r\n    }\r\n    const renderDel = () => {\r\n        let peopleNumbers = form.querySelectorAll('.booking-people-container')\r\n        if (peopleNumbers.length > 1) {\r\n            peopleNumbers[peopleNumbers.length - 1].remove()\r\n        } else {\r\n            console.log('Кнопка работать не будет');\r\n        }\r\n    }\r\n\r\n    addButton.addEventListener('click', () => {\r\n        renderAdd()\r\n    })\r\n    delButton.addEventListener('click', () => {\r\n        renderDel()\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDel);\n\n//# sourceURL=webpack://demexam-main/./src/modules/addDelPeople.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;