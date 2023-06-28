/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const numbersDiv = document.getElementById('numbers');\nconst combinationsDiv = document.getElementById('combinations');\nlet numbers = [];\n\ndocument.getElementById('newArray').addEventListener('click', function() {\n  numbers = Array.from({length: 9}, () => Math.floor(Math.random() * 21));\n  numbersDiv.textContent = numbers.join(', ');\n  combinationsDiv.textContent = '';\n});\n\ndocument.getElementById('findCombinations').addEventListener('click', function() {\n  const seenNumbers = {};\n  const combinations = [];\n\n  for (let i = 0; i < numbers.length; i++) {\n    const number = numbers[i];\n    const difference = 21 - number;\n    \n    if (seenNumbers[difference]) {\n      combinations.push([number, difference]);\n    }\n\n    seenNumbers[number] = true;\n  }\n\n  combinationsDiv.textContent = combinations.map(c => c.join(' & ')).join('\\n');\n});\n\n\n//# sourceURL=webpack://technical-assessment/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;