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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitNewTask\": () => (/* binding */ submitNewTask)\n/* harmony export */ });\n/* harmony import */ var _main_buttons_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-buttons-events */ \"./src/main-buttons-events.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n\r\n\r\n\r\n//Factory function to create a new task object\r\nfunction addNewTask (title, dueDate, project = 'Inbox', priority) {\r\n    let checkbox = 0;\r\n    return {title, dueDate, project, priority, checkbox};\r\n}\r\n\r\n//Initialize the page\r\nlet allTasks = [];\r\nallTasks = (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.checkIfThereIsLocalStorage)(allTasks);\r\n\r\n//Functions that update the allTasks array\r\nfunction submitNewTask() {\r\n    const taskTitle = document.querySelector('#title').value;\r\n    const taskDueDate = document.querySelector('#due-date').value;\r\n    //const taskProject = document.querySelector('#project').value;\r\n    const taskPriority = document.querySelector('#priority').value;\r\n    \r\n    let newTask = addNewTask(taskTitle, taskDueDate, /*taskProject*/ 'Inbox', taskPriority);\r\n        \r\n    allTasks.push(newTask);\r\n    console.log(allTasks)\r\n}\r\n\r\n\r\n//Add event listener to menu button\r\n(0,_main_buttons_events__WEBPACK_IMPORTED_MODULE_0__.addEventToMenuBtn)();\r\n\r\n//Add event listener to add task button\r\n(0,_main_buttons_events__WEBPACK_IMPORTED_MODULE_0__.addEventToAddTaskBtn)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkIfThereIsLocalStorage\": () => (/* binding */ checkIfThereIsLocalStorage),\n/* harmony export */   \"updateLocalStorage\": () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\nfunction checkIfThereIsLocalStorage(allTasks) {\r\n    if(!localStorage.getItem('variables')) {\r\n        localStorage.setItem('variables', JSON.stringify(allTasks));\r\n    } \r\n    else {\r\n        allTasks = JSON.parse(localStorage.getItem('variables'));\r\n    }\r\n    return allTasks;\r\n};\r\n\r\nfunction updateLocalStorage(allTasks) {\r\n    localStorage.setItem('variables', JSON.stringify(allTasks));\r\n    return;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/local-storage.js?");

/***/ }),

/***/ "./src/main-buttons-dom.js":
/*!*********************************!*\
  !*** ./src/main-buttons-dom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openOrCloseLeftBar\": () => (/* binding */ openOrCloseLeftBar),\n/* harmony export */   \"generateFormToAddNewTask\": () => (/* binding */ generateFormToAddNewTask)\n/* harmony export */ });\nfunction openOrCloseLeftBar() {\r\n    const leftBar = document.getElementById('left-bar');\r\n    const mainContent = document.getElementById('main-content');\r\n\r\n    if (leftBar.className === 'left-bar-open') {\r\n        leftBar.classList.remove('left-bar-open');\r\n        leftBar.classList.add('left-bar-closed');\r\n        mainContent.style.marginLeft = '0';\r\n    }\r\n    else {\r\n        leftBar.classList.add('left-bar-open');\r\n        leftBar.classList.remove('left-bar-closed');\r\n        mainContent.style.marginLeft = '290px';\r\n    }\r\n}\r\n\r\nfunction generateFormToAddNewTask() {\r\n    let body = document.querySelector('body');\r\n    let pageBackground = generatePageBackground();\r\n    let formPopup = generateFormPopup();\r\n    let formHeader = generateFormHeader('Add New Task');\r\n    let formContent = generateFormInputFields();\r\n    let formSubmitBtn = generateFormSubmitButton('submit-task-btn', 'Add Task');\r\n\r\n    formPopup.appendChild(formHeader);\r\n    formPopup.appendChild(formContent);\r\n    formPopup.appendChild(formSubmitBtn);\r\n\r\n    pageBackground.appendChild(formPopup);\r\n    body.appendChild(pageBackground);\r\n\r\n    //addEventToFormBtns()\r\n}\r\n\r\nfunction generatePageBackground() {\r\n    let pageBackground = document.createElement('div');\r\n    pageBackground.setAttribute('id', 'page-background')\r\n    return pageBackground;\r\n}\r\n\r\nfunction generateFormPopup() {\r\n    let formPopup = document.createElement('div');\r\n    formPopup.setAttribute('id', 'form-popup');\r\n    return formPopup;\r\n}\r\n\r\nfunction generateFormHeader(title) {\r\n    let formHeader = document.createElement('div');\r\n    formHeader.setAttribute('id', 'form-header');\r\n\r\n    //Title\r\n    let formTitle = document.createElement('h2');\r\n    formTitle.textContent = title;\r\n\r\n    //Close Button\r\n    let formCloseBtn = document.createElement('button');\r\n    const CLOSE_BTN_ICON = '<i class=\"fas fa-times\"></i>';\r\n    formCloseBtn.setAttribute('type', 'button');\r\n    formCloseBtn.setAttribute('id', 'close-btn');\r\n    formCloseBtn.innerHTML = CLOSE_BTN_ICON;\r\n\r\n    //Append child\r\n    formHeader.appendChild(formTitle);\r\n    formHeader.appendChild(formCloseBtn);\r\n\r\n    return formHeader;\r\n}\r\n\r\nfunction generateFormInputFields(titleValue = '', dueDateValue = new Date(), projectValue = 'Inbox', priorityValue = 'high') {\r\n    let formContent = document.createElement('form');\r\n\r\n    //Task Title\r\n    let taskTitleInput = document.createElement('input');\r\n    taskTitleInput.setAttribute('type', 'text');\r\n    taskTitleInput.setAttribute('id', 'title');\r\n    taskTitleInput.setAttribute('name', 'title');\r\n    taskTitleInput.value = titleValue;\r\n\r\n    //Due date\r\n    let taskDueDateInput = document.createElement('input');\r\n    taskDueDateInput.setAttribute('type', 'date');\r\n    taskDueDateInput.setAttribute('id', \"due-date\");\r\n    taskDueDateInput.setAttribute('name', 'due-date');\r\n    \r\n    if (typeof dueDateValue === 'string') {\r\n        dueDateValue = new Date(dueDateValue.split('-')[0], dueDateValue.split('-')[1] - 1, dueDateValue.split('-')[2]);\r\n    }\r\n    taskDueDateInput.valueAsDate = dueDateValue;\r\n\r\n    //Project\r\n    /*let taskProjectSelect = generateProjectSelect(projectValue);\r\n    taskProjectSelect.value = projectValue;*/\r\n\r\n    //Priority\r\n    let taskPrioritySelect = document.createElement('select');\r\n    taskPrioritySelect.setAttribute('id', 'priority');\r\n    taskPrioritySelect.setAttribute('name', 'priority');\r\n\r\n    let priorityTitle = '<option value=\"\" disabled selected hidden>Priority</option>';\r\n    let priorityOptionHigh = '<option value=\"high\">High</option>';\r\n    let priorityOptionMedium = '<option value=\"medium\">Medium</option>';\r\n    let priorityOptionLow = '<option value=\"low\">Low</option>';\r\n\r\n    taskPrioritySelect.innerHTML = `${priorityTitle}\r\n    ${priorityOptionHigh}\r\n    ${priorityOptionMedium}\r\n    ${priorityOptionLow}`;\r\n\r\n    taskPrioritySelect.value = priorityValue;\r\n\r\n    //Append child\r\n    formContent.appendChild(taskTitleInput);\r\n    formContent.appendChild(taskDueDateInput);\r\n    //formContent.appendChild(taskProjectSelect);\r\n    formContent.appendChild(taskPrioritySelect);\r\n\r\n    return formContent;\r\n}\r\n\r\nfunction generateFormSubmitButton(buttonId, buttonText) {\r\n    let formSubmitBtn = document.createElement('button');\r\n    formSubmitBtn.setAttribute('type', 'button');\r\n    formSubmitBtn.setAttribute('id', buttonId);\r\n    formSubmitBtn.textContent = buttonText;\r\n\r\n    return formSubmitBtn;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/main-buttons-dom.js?");

/***/ }),

/***/ "./src/main-buttons-events.js":
/*!************************************!*\
  !*** ./src/main-buttons-events.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventToMenuBtn\": () => (/* binding */ addEventToMenuBtn),\n/* harmony export */   \"addEventToAddTaskBtn\": () => (/* binding */ addEventToAddTaskBtn)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-buttons-dom */ \"./src/main-buttons-dom.js\");\n\r\n\r\n\r\nfunction addEventToMenuBtn() {\r\n    let menuBtn = document.querySelector('#menu-btn');\r\n    menuBtn.addEventListener('click', _main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.openOrCloseLeftBar);\r\n}\r\n\r\nfunction addEventToAddTaskBtn() {\r\n    const openTaskFormBtn = document.getElementById('open-task-form-btn');\r\n    openTaskFormBtn.addEventListener('click', () => {\r\n        (0,_main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.generateFormToAddNewTask)();\r\n        addEventToFormBtns()\r\n    })\r\n}\r\n\r\nfunction addEventToFormBtns() {\r\n    const closeTaskFormBtn = document.querySelector('#close-btn');\r\n    const submitTaskFormBtn = document.querySelector('#submit-task-btn');\r\n\r\n    closeTaskFormBtn.addEventListener('click', closeAddTaskForm);\r\n    submitTaskFormBtn.addEventListener('click', () => {\r\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.submitNewTask)();\r\n        //showTasksOnScreen(allTasks);\r\n        closeAddTaskForm();\r\n    });\r\n}\r\n\r\nfunction closeAddTaskForm() {\r\n    const body = document.querySelector('body');\r\n    const form = document.querySelector('#page-background');\r\n    body.removeChild(form);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/main-buttons-events.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;