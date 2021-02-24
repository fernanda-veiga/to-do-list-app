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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isBefore)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isBefore\n * @category Common Helpers\n * @summary Is the first date before the second one?\n *\n * @description\n * Is the first date before the second one?\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date that should be before the other one to return true\n * @param {Date|Number} dateToCompare - the date to compare with\n * @returns {Boolean} the first date is before the second date\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Is 10 July 1989 before 11 February 1987?\n * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))\n * //=> false\n */\n\nfunction isBefore(dirtyDate, dirtyDateToCompare) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);\n  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateToCompare);\n  return date.getTime() < dateToCompare.getTime();\n}\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/date-fns/esm/isBefore/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day?\n *\n * @description\n * Are the given dates in the same day?\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * var result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitNewTask\": () => (/* binding */ submitNewTask),\n/* harmony export */   \"submitNewEdit\": () => (/* binding */ submitNewEdit),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _main_buttons_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-buttons-events */ \"./src/main-buttons-events.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n/* harmony import */ var _show_tasks_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-tasks-dom */ \"./src/show-tasks-dom.js\");\n\r\n\r\n\r\n\r\n\r\n//Factory function to create a new task object\r\nfunction addNewTask (title, dueDate, project = 'Inbox', priority) {\r\n    let checkbox = 0;\r\n    return {title, dueDate, project, priority, checkbox};\r\n}\r\n\r\n//Initialize the page\r\nlet allTasks = [];\r\nallTasks = (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.checkIfThereIsLocalStorage)(allTasks);\r\n(0,_show_tasks_dom__WEBPACK_IMPORTED_MODULE_2__.showTasksOnScreen)(allTasks);\r\n\r\n//Functions that update the allTasks array\r\nfunction submitNewTask() {\r\n    const taskTitle = document.querySelector('#title').value;\r\n    const taskDueDate = document.querySelector('#due-date').value;\r\n    //const taskProject = document.querySelector('#project').value;\r\n    const taskPriority = document.querySelector('#priority').value;\r\n    \r\n    let newTask = addNewTask(taskTitle, taskDueDate, /*taskProject*/ 'Inbox', taskPriority);\r\n        \r\n    allTasks.push(newTask);\r\n    allTasks = sortAllTasks(allTasks);\r\n    console.log('bye')\r\n    console.log(allTasks)\r\n    ;(0,_show_tasks_dom__WEBPACK_IMPORTED_MODULE_2__.showTasksOnScreen)(allTasks);\r\n    (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)(allTasks);\r\n}\r\n\r\nfunction deleteTask(index) {\r\n    allTasks.splice(index, 1);\r\n    (0,_show_tasks_dom__WEBPACK_IMPORTED_MODULE_2__.showTasksOnScreen)(allTasks);\r\n    (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)(allTasks);\r\n}\r\n\r\nfunction submitNewEdit(index) {\r\n    console.log(\"test\")\r\n    allTasks[index].title = document.querySelector(\"#title\").value;\r\n    allTasks[index].dueDate = document.querySelector(\"#due-date\").value;\r\n    //allTasks[index].project = document.querySelector(\"#project\").value;\r\n    allTasks[index].priority = document.querySelector(\"#priority\").value;\r\n    (0,_show_tasks_dom__WEBPACK_IMPORTED_MODULE_2__.showTasksOnScreen)(allTasks);\r\n    (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)(allTasks);\r\n}\r\n\r\nfunction sortAllTasks(allTasks) {\r\n    console.log('hi')\r\n    console.log(allTasks.dueDate)\r\n    let sortedTasks = allTasks.sort((a, b) => {\r\n        if (a.dueDate < b.dueDate) {return -1;}\r\n        else {return 1;}\r\n    })\r\n    console.log(sortedTasks);\r\n    return sortedTasks;\r\n}\r\n\r\n\r\n//Add event listener to menu button\r\n(0,_main_buttons_events__WEBPACK_IMPORTED_MODULE_0__.addEventToMenuBtn)();\r\n\r\n//Add event listener to add task button\r\n(0,_main_buttons_events__WEBPACK_IMPORTED_MODULE_0__.addEventToAddTaskBtn)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openOrCloseLeftBar\": () => (/* binding */ openOrCloseLeftBar),\n/* harmony export */   \"generateFormToAddNewTask\": () => (/* binding */ generateFormToAddNewTask),\n/* harmony export */   \"generatePageBackground\": () => (/* binding */ generatePageBackground),\n/* harmony export */   \"generateFormPopup\": () => (/* binding */ generateFormPopup),\n/* harmony export */   \"generateFormHeader\": () => (/* binding */ generateFormHeader),\n/* harmony export */   \"generateFormInputFields\": () => (/* binding */ generateFormInputFields),\n/* harmony export */   \"generateFormSubmitButton\": () => (/* binding */ generateFormSubmitButton)\n/* harmony export */ });\nfunction openOrCloseLeftBar() {\r\n    const leftBar = document.getElementById('left-bar');\r\n    const mainContent = document.getElementById('main-content');\r\n\r\n    if (leftBar.className === 'left-bar-open') {\r\n        leftBar.classList.remove('left-bar-open');\r\n        leftBar.classList.add('left-bar-closed');\r\n        mainContent.style.marginLeft = '0';\r\n    }\r\n    else {\r\n        leftBar.classList.add('left-bar-open');\r\n        leftBar.classList.remove('left-bar-closed');\r\n        mainContent.style.marginLeft = '290px';\r\n    }\r\n}\r\n\r\nfunction generateFormToAddNewTask() {\r\n    let body = document.querySelector('body');\r\n    let pageBackground = generatePageBackground();\r\n    let formPopup = generateFormPopup();\r\n    let formHeader = generateFormHeader('Add New Task');\r\n    let formContent = generateFormInputFields();\r\n    let formSubmitBtn = generateFormSubmitButton('submit-task-btn', 'Add Task');\r\n\r\n    formPopup.appendChild(formHeader);\r\n    formPopup.appendChild(formContent);\r\n    formPopup.appendChild(formSubmitBtn);\r\n\r\n    pageBackground.appendChild(formPopup);\r\n    body.appendChild(pageBackground);\r\n\r\n    //addEventToFormBtns()\r\n}\r\n\r\nfunction generatePageBackground() {\r\n    let pageBackground = document.createElement('div');\r\n    pageBackground.setAttribute('id', 'page-background')\r\n    return pageBackground;\r\n}\r\n\r\nfunction generateFormPopup() {\r\n    let formPopup = document.createElement('div');\r\n    formPopup.setAttribute('id', 'form-popup');\r\n    return formPopup;\r\n}\r\n\r\nfunction generateFormHeader(title) {\r\n    let formHeader = document.createElement('div');\r\n    formHeader.setAttribute('id', 'form-header');\r\n\r\n    //Title\r\n    let formTitle = document.createElement('h2');\r\n    formTitle.textContent = title;\r\n\r\n    //Close Button\r\n    let formCloseBtn = document.createElement('button');\r\n    const CLOSE_BTN_ICON = '<i class=\"fas fa-times\"></i>';\r\n    formCloseBtn.setAttribute('type', 'button');\r\n    formCloseBtn.setAttribute('id', 'close-btn');\r\n    formCloseBtn.innerHTML = CLOSE_BTN_ICON;\r\n\r\n    //Append child\r\n    formHeader.appendChild(formTitle);\r\n    formHeader.appendChild(formCloseBtn);\r\n\r\n    return formHeader;\r\n}\r\n\r\nfunction generateFormInputFields(titleValue = '', dueDateValue = new Date(), projectValue = 'Inbox', priorityValue = 'high') {\r\n    let formContent = document.createElement('form');\r\n\r\n    //Task Title\r\n    let taskTitleInput = document.createElement('input');\r\n    taskTitleInput.setAttribute('type', 'text');\r\n    taskTitleInput.setAttribute('id', 'title');\r\n    taskTitleInput.setAttribute('name', 'title');\r\n    taskTitleInput.value = titleValue;\r\n\r\n    //Due date\r\n    let taskDueDateInput = document.createElement('input');\r\n    taskDueDateInput.setAttribute('type', 'date');\r\n    taskDueDateInput.setAttribute('id', \"due-date\");\r\n    taskDueDateInput.setAttribute('name', 'due-date');\r\n    \r\n    if (typeof dueDateValue === 'string') {\r\n        dueDateValue = new Date(dueDateValue.split('-')[0], dueDateValue.split('-')[1] - 1, dueDateValue.split('-')[2]);\r\n    }\r\n    taskDueDateInput.valueAsDate = dueDateValue;\r\n\r\n    //Project\r\n    /*let taskProjectSelect = generateProjectSelect(projectValue);\r\n    taskProjectSelect.value = projectValue;*/\r\n\r\n    //Priority\r\n    let taskPrioritySelect = document.createElement('select');\r\n    taskPrioritySelect.setAttribute('id', 'priority');\r\n    taskPrioritySelect.setAttribute('name', 'priority');\r\n\r\n    let priorityTitle = '<option value=\"\" disabled selected hidden>Priority</option>';\r\n    let priorityOptionHigh = '<option value=\"high\">High</option>';\r\n    let priorityOptionMedium = '<option value=\"medium\">Medium</option>';\r\n    let priorityOptionLow = '<option value=\"low\">Low</option>';\r\n\r\n    taskPrioritySelect.innerHTML = `${priorityTitle}\r\n    ${priorityOptionHigh}\r\n    ${priorityOptionMedium}\r\n    ${priorityOptionLow}`;\r\n\r\n    taskPrioritySelect.value = priorityValue;\r\n\r\n    //Append child\r\n    formContent.appendChild(taskTitleInput);\r\n    formContent.appendChild(taskDueDateInput);\r\n    //formContent.appendChild(taskProjectSelect);\r\n    formContent.appendChild(taskPrioritySelect);\r\n\r\n    return formContent;\r\n}\r\n\r\nfunction generateFormSubmitButton(buttonId, buttonText) {\r\n    let formSubmitBtn = document.createElement('button');\r\n    formSubmitBtn.setAttribute('type', 'button');\r\n    formSubmitBtn.setAttribute('id', buttonId);\r\n    formSubmitBtn.textContent = buttonText;\r\n\r\n    return formSubmitBtn;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/main-buttons-dom.js?");

/***/ }),

/***/ "./src/main-buttons-events.js":
/*!************************************!*\
  !*** ./src/main-buttons-events.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventToMenuBtn\": () => (/* binding */ addEventToMenuBtn),\n/* harmony export */   \"addEventToAddTaskBtn\": () => (/* binding */ addEventToAddTaskBtn),\n/* harmony export */   \"closeAddTaskForm\": () => (/* binding */ closeAddTaskForm)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-buttons-dom */ \"./src/main-buttons-dom.js\");\n\r\n\r\n\r\nfunction addEventToMenuBtn() {\r\n    let menuBtn = document.querySelector('#menu-btn');\r\n    menuBtn.addEventListener('click', _main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.openOrCloseLeftBar);\r\n}\r\n\r\nfunction addEventToAddTaskBtn() {\r\n    const openTaskFormBtn = document.getElementById('open-task-form-btn');\r\n    openTaskFormBtn.addEventListener('click', () => {\r\n        (0,_main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.generateFormToAddNewTask)();\r\n        addEventToFormBtns()\r\n    })\r\n}\r\n\r\nfunction addEventToFormBtns() {\r\n    const closeTaskFormBtn = document.querySelector('#close-btn');\r\n    const submitTaskFormBtn = document.querySelector('#submit-task-btn');\r\n\r\n    closeTaskFormBtn.addEventListener('click', closeAddTaskForm);\r\n    submitTaskFormBtn.addEventListener('click', () => {\r\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.submitNewTask)();\r\n        closeAddTaskForm();\r\n    });\r\n}\r\n\r\nfunction closeAddTaskForm() {\r\n    const body = document.querySelector('body');\r\n    const form = document.querySelector('#page-background');\r\n    body.removeChild(form);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/main-buttons-events.js?");

/***/ }),

/***/ "./src/show-tasks-dom.js":
/*!*******************************!*\
  !*** ./src/show-tasks-dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showTasksOnScreen\": () => (/* binding */ showTasksOnScreen),\n/* harmony export */   \"generateFormToEditTask\": () => (/* binding */ generateFormToEditTask)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isBefore/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var _show_tasks_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-tasks-events */ \"./src/show-tasks-events.js\");\n/* harmony import */ var _main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-buttons-dom */ \"./src/main-buttons-dom.js\");\n\r\n\r\n\r\n\r\nfunction showTasksOnScreen(allTasks) {\r\n    const mainContent = document.querySelector(\"#main-content\");\r\n\r\n    //Deletes all the tasks from the screen\r\n    mainContent.innerHTML = \"\";\r\n    \r\n    let allTasksDiv = document.createElement(\"div\");\r\n    allTasksDiv.classList.add(\"all-tasks-div\");\r\n    console.log(allTasksDiv)\r\n    console.log(allTasks)\r\n    allTasks.forEach(item => {\r\n        let taskDiv = document.createElement(\"div\");\r\n        taskDiv.id = `task${allTasks.indexOf(item)}`;\r\n        taskDiv.classList.add(\"task-div\");\r\n\r\n        let taskLeft = document.createElement(\"div\");\r\n        taskLeft.classList.add(\"task-left\");\r\n\r\n        let taskCheckbox = document.createElement(\"button\");\r\n        taskCheckbox.innerHTML = '<i class=\"far fa-square\"></i>';\r\n        taskCheckbox.setAttribute(\"type\", \"button\");\r\n        taskCheckbox.classList.add(\"checkbox-btn\");\r\n        taskLeft.appendChild(taskCheckbox);\r\n        let taskTitle = document.createElement(\"p\");\r\n        taskTitle.classList.add(\"task-title\");\r\n        taskTitle.textContent = item.title;\r\n        taskLeft.appendChild(taskTitle);\r\n\r\n        let taskRight = document.createElement(\"div\");\r\n        taskRight.classList.add(\"task-right\");\r\n\r\n        let taskDueDate = document.createElement(\"p\");\r\n        taskDueDate.textContent = item.dueDate;\r\n        taskRight.appendChild(taskDueDate);\r\n        let taskEditBtn = document.createElement(\"button\");\r\n        taskEditBtn.innerHTML = '<i class=\"far fa-edit\"></i>';\r\n        taskEditBtn.setAttribute(\"type\", \"button\");\r\n        taskEditBtn.classList.add(\"task-edit-btn\");\r\n        taskRight.appendChild(taskEditBtn);\r\n        let taskDeleteBtn = document.createElement(\"button\");\r\n        taskDeleteBtn.innerHTML = '<i class=\"far fa-trash-alt\"></i>';\r\n        taskDeleteBtn.setAttribute(\"type\", \"button\");\r\n        taskDeleteBtn.classList.add(\"task-delete-btn\");\r\n        taskRight.appendChild(taskDeleteBtn);\r\n\r\n        taskDiv.appendChild(taskLeft);\r\n        taskDiv.appendChild(taskRight);\r\n\r\n        allTasksDiv.appendChild(taskDiv);\r\n        mainContent.appendChild(allTasksDiv);\r\n    });\r\n    showColorByDueDate();\r\n    showColorByPriority(allTasks);\r\n    (0,_show_tasks_events__WEBPACK_IMPORTED_MODULE_0__.addEventToTaskBtns)(allTasks);\r\n}\r\n\r\nfunction showColorByDueDate() {\r\n    const allTaskDueDates = document.querySelectorAll(\".task-right p\");\r\n    \r\n    allTaskDueDates.forEach(dateNode => {\r\n        let dateString = dateNode.textContent;\r\n        let itemDueDate = new Date(dateString.split(\"-\")[0], dateString.split(\"-\")[1] - 1, dateString.split(\"-\")[2]);\r\n\r\n        if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(itemDueDate, new Date()) === true) {\r\n            dateNode.style.color = \"#fa2a00\"; \r\n        }\r\n\r\n        if((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(itemDueDate) === true) {\r\n            dateNode.style.color = '#219ebc'\r\n        }\r\n    })\r\n}\r\n\r\nfunction showColorByPriority(allTasks) {\r\n    const allCheckboxes = Array.from(document.querySelectorAll(\".checkbox-btn\"));\r\n    \r\n    allCheckboxes.forEach(checkbox => {\r\n        let index = allCheckboxes.indexOf(checkbox);\r\n        if(allTasks[index].priority === \"high\") {\r\n            checkbox.style.color = \"#fa2A00\"; \r\n        }\r\n        else if(allTasks[index].priority === \"medium\") {\r\n            checkbox.style.color = \"#fb8500\"; \r\n        }\r\n        else if(allTasks[index].priority === \"low\") {\r\n            checkbox.style.color = \"#ffb703\"; \r\n        }\r\n    })\r\n}\r\n\r\nfunction generateFormToEditTask(titleValue, dueDateValue, projectValue, priorityValue) {\r\n    let body = document.querySelector(\"body\");\r\n    let pageBackground = (0,_main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.generatePageBackground)();\r\n    let formPopup = (0,_main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.generateFormPopup)();\r\n    let formHeader = (0,_main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.generateFormHeader)(\"Edit Task\");\r\n    let formContent = (0,_main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.generateFormInputFields)(titleValue, dueDateValue, projectValue, priorityValue);\r\n    let formSubmitBtn = (0,_main_buttons_dom__WEBPACK_IMPORTED_MODULE_1__.generateFormSubmitButton)(\"submit-edit-btn\", \"Edit Task\");\r\n\r\n    formPopup.appendChild(formHeader);\r\n    formPopup.appendChild(formContent);\r\n    formPopup.appendChild(formSubmitBtn);\r\n\r\n    pageBackground.appendChild(formPopup);\r\n    body.appendChild(pageBackground);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/show-tasks-dom.js?");

/***/ }),

/***/ "./src/show-tasks-events.js":
/*!**********************************!*\
  !*** ./src/show-tasks-events.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventToTaskBtns\": () => (/* binding */ addEventToTaskBtns)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _show_tasks_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-tasks-dom */ \"./src/show-tasks-dom.js\");\n/* harmony import */ var _main_buttons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-buttons-events */ \"./src/main-buttons-events.js\");\n\r\n\r\n\r\n\r\nfunction addEventToTaskBtns(allTasks) {\r\n    const allTaskDiv = document.querySelectorAll(\".task-div\");\r\n\r\n    allTaskDiv.forEach(task => {\r\n        addEventToCheckbox(task, allTasks);\r\n        addEventToDeleteBtn(task);\r\n        addEventToEditBtn(task, allTasks);\r\n    })\r\n}\r\n\r\nfunction addEventToCheckbox(task, allTasks) {\r\n    const taskTitle = task.querySelector(\".task-title\");\r\n    const checkbox = task.querySelector(\".checkbox-btn\");\r\n    const CHECKBOX_COMPLETE_ICON = '<i class=\"far fa-check-square\"></i>';\r\n    const CHECKBOX_INCOMPLETE_ICON = '<i class=\"far fa-square\"></i>';\r\n\r\n    let index = Number(task.id.replace(\"task\", \"\"));\r\n\r\n    checkbox.addEventListener(\"click\", () => {\r\n        if (allTasks[index].checkbox == 0) {\r\n            checkbox.innerHTML = CHECKBOX_COMPLETE_ICON;\r\n            taskTitle.style.textDecoration = \"line-through\";\r\n            allTasks[index].checkbox = 1;\r\n        }\r\n        else {\r\n            checkbox.innerHTML = CHECKBOX_INCOMPLETE_ICON;\r\n            taskTitle.style.textDecoration = \"none\";\r\n            allTasks[index].checkbox = 0;\r\n        }\r\n    })\r\n}\r\n\r\nfunction addEventToDeleteBtn(task) {\r\n    const deleteBtn = task.querySelector(\".task-delete-btn\");\r\n    let index = Number(task.id.replace(\"task\", \"\"));\r\n    deleteBtn.addEventListener(\"click\", () => {(0,_index__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(index)});\r\n}\r\n\r\nfunction addEventToEditBtn(task, allTasks) {\r\n    const editBtn = task.querySelector(\".task-edit-btn\");\r\n    let index = Number(task.id.replace(\"task\", \"\"));\r\n\r\n    editBtn.addEventListener(\"click\", () => {\r\n        (0,_show_tasks_dom__WEBPACK_IMPORTED_MODULE_1__.generateFormToEditTask)(allTasks[index].title, allTasks[index].dueDate, allTasks[index].project, allTasks[index].priority);\r\n        addEventToEditFormBtns(index);\r\n    })\r\n}\r\n\r\nfunction addEventToEditFormBtns(index) {\r\n    const closeFormBtn = document.querySelector(\"#close-btn\");\r\n    const submitEditBtn = document.querySelector(\"#submit-edit-btn\");\r\n\r\n    closeFormBtn.addEventListener(\"click\", _main_buttons_events__WEBPACK_IMPORTED_MODULE_2__.closeAddTaskForm);\r\n    submitEditBtn.addEventListener(\"click\", () => {\r\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.submitNewEdit)(index);\r\n        (0,_main_buttons_events__WEBPACK_IMPORTED_MODULE_2__.closeAddTaskForm)();\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/show-tasks-events.js?");

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