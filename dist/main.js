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

eval("var canvasEl\nvar gameArea\nvar soundOn = true\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  gameArea = new GameArea(canvasEl)\n});\n\n// sound  control\ndocument.getElementById(\"soundBotton\").innerText = \"Sound On\";\ndocument.getElementById(\"soundBotton\").addEventListener(\"click\", soundSwitch);\nfunction soundSwitch() {\n  if (soundOn) {\n    document.getElementById(\"soundBotton\").innerText = \"Sound Off\";\n    soundOn = false;\n    document.getElementById(\"soundBotton\").blur()  //delete the focus\n  } else {\n    document.getElementById(\"soundBotton\").innerText = \"Sound On\";\n    soundOn = true;\n    document.getElementById(\"soundBotton\").blur()  \n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

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