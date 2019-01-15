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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dom.js":
/*!*******************!*\
  !*** ./js/dom.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// function domWrapper() {\n//   function addUserToDom(name) {\n//     const node = document.createElement(\"li\");\n//     const text = document.createTextNode(name);\n//     node.appendChild(text);\n//     document.getElementById(\"users\").appendChild(node);\n//   }\n//   document.getElementById(\"submit\").addEventListener(\"click\", () => {\n//     const input = document.getElementById(\"input\");\n//     addUserToDom(input.value);\n//     input.value = \"\";\n//   });\n//   var users = APP.getUsers();\n//   for (let i = 0; i < users.length; i += 1) {\n//     addUserToDom(users[i]);\n//   }\n// }\n// domWrapper();\n\n// (function() {\n//   function addUserToDom(name) {\n//     const node = document.createElement(\"li\");\n//     const text = document.createTextNode(name);\n//     node.appendChild(text);\n//     document.getElementById(\"users\").appendChild(node);\n//   }\n//   document.getElementById(\"submit\").addEventListener(\"click\", () => {\n//     const input = document.getElementById(\"input\");\n//     addUserToDom(input.value);\n//     input.value = \"\";\n//   });\n//   var users = APP.getUsers();\n//   for (let i = 0; i < users.length; i += 1) {\n//     addUserToDom(users[i]);\n//   }\n// })();\n\nvar getUsers = __webpack_require__(/*! ./users */ \"./js/users.js\").getUsers;\nfunction addUserToDom(name) {\n  const node = document.createElement(\"li\");\n  const text = document.createTextNode(name);\n  node.appendChild(text);\n  document.getElementById(\"users\").appendChild(node);\n}\ndocument.getElementById(\"submit\").addEventListener(\"click\", () => {\n  const input = document.getElementById(\"input\");\n  addUserToDom(input.value);\n  input.value = \"\";\n});\nvar users = getUsers();\nfor (let i = 0; i < users.length; i += 1) {\n  addUserToDom(users[i]);\n}\n\n\n//# sourceURL=webpack:///./js/dom.js?");

/***/ }),

/***/ "./js/users.js":
/*!*********************!*\
  !*** ./js/users.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//create an IIFE from the code\n\n// function usersWrapper() {\n//     var users = [\"Eno\", \"Toki\", \"Blue\"];\n//     function getUsers() {\n//       return users;\n//     }\n//     APP.getUsers = getUsers;\n// }\n// usersWrapper();\n\n// (function() {\n//   var users = [\"Eno\", \"Toki\", \"Blue\"];\n//   function getUsers() {\n//     return users;\n//   }\n//   APP.getUsers = getUsers;\n// })();\nvar users = [\"Eno\", \"Toki\", \"Blue\"];\nfunction getUsers() {\n  return users;\n}\nmodule.exports = {\n  getUsers: getUsers,\n};\n\n\n//# sourceURL=webpack:///./js/users.js?");

/***/ })

/******/ });