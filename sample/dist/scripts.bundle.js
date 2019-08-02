/******/ (function (modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for (; i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
        /******/
}
/******/ 			installedChunks[chunkId] = 0;
      /******/
}
/******/ 		for (moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
        /******/
}
      /******/
}
/******/ 		if (parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while (resolves.length) {
/******/ 			resolves.shift()();
      /******/
}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
    /******/
};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for (var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
}
/******/ 			if (fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/
}
      /******/
}
/******/
/******/ 		return result;
    /******/
}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"scripts": 0
    /******/
};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
}
    /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./build/index.js", "vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
  /******/
})
/************************************************************************/
/******/({

/***/ "./build/app/components/Gecko/index.jsx":
/*!**********************************************!*\
  !*** ./build/app/components/Gecko/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gecko; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SignUp */ \"./build/app/components/SignUp/index.jsx\");\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Products */ \"./build/app/components/Products/index.jsx\");\n\n\n\n\n\n\n\n\n\n\n\nvar Gecko =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Gecko, _React$Component);\n\n  function Gecko(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Gecko);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Gecko).call(this, props)); // We haven't authenticated yet!\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"processLogin\", function () {\n      // Fake login, pretend we authenticated...\n      _this.setState({\n        login: true\n      });\n    });\n\n    _this.state = {\n      login: false\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Gecko, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var login = this.state.login;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], null, login ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Products__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SignUp__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        processLogin: function processLogin() {\n          _this2.processLogin();\n        }\n      }));\n    }\n  }]);\n\n  return Gecko;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./build/app/components/Gecko/index.jsx?");

      /***/
}),

/***/ "./build/app/components/Products/Product.jsx":
/*!***************************************************!*\
  !*** ./build/app/components/Products/Product.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Product =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Product, _React$Component);\n\n  function Product(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Product);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Product).call(this, props));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Product, [{\n    key: \"render\",\n    value: function render() {\n      var product = this.props.product;\n      var name = product.name,\n          description = product.description,\n          image = product.image,\n          price = product.price;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"a\", {\n        href: \"#\",\n        className: \"gecko-products__item\"\n      }, image && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: image,\n        className: \"gecko-products__item-image\"\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-products__item-details\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h3\", {\n        className: \"gecko-products__item-name\"\n      }, name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-products__item-description\"\n      }, description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-products__item-price\"\n      }, \"$\", price)));\n    }\n  }]);\n\n  return Product;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./build/app/components/Products/Product.jsx?");

      /***/
}),

/***/ "./build/app/components/Products/index.jsx":
/*!*************************************************!*\
  !*** ./build/app/components/Products/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Products; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product */ \"./build/app/components/Products/Product.jsx\");\n\n\n\n\n\n\n\n\nvar Products =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Products, _React$Component);\n\n  function Products(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Products);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Products).call(this, props));\n    _this.state = {\n      products: []\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Products, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getProducts();\n    }\n  }, {\n    key: \"getProducts\",\n    value: function getProducts() {\n      var _this2 = this;\n\n      window.fetch('https://5d445466d823c30014771642.mockapi.io/api/v1/products').then(function (response) {\n        if (response.status === 200) {\n          return response.json();\n        } else {\n          throw new Error('Something went wrong with the API');\n        }\n\n        ;\n      }).then(function (response) {\n        _this2.setState({\n          products: response\n        });\n      })[\"catch\"](function (error) {\n        console.error(error);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var products = this.state.products;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-products\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h2\", null, \"Products\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-products__items\"\n      }, products.map(function (product) {\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          product: product\n        });\n      })));\n    }\n  }]);\n\n  return Products;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./build/app/components/Products/index.jsx?");

      /***/
}),

/***/ "./build/app/components/SignUp/LoginForm.jsx":
/*!***************************************************!*\
  !*** ./build/app/components/SignUp/LoginForm.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginForm; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar LoginForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LoginForm, _React$Component);\n\n  function LoginForm(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginForm);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoginForm).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"updateInput\", function (event) {\n      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, event.target.name, event.target.value));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"processLogin\", function (event) {\n      event.preventDefault();\n\n      _this.props.processLogin();\n    });\n\n    _this.state = {\n      emailAddress: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoginForm, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          emailAddress = _this$state.emailAddress,\n          password = _this$state.password;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"form\", {\n        className: \"gecko-signup__form gecko-signup__form--login\",\n        onSubmit: this.processLogin\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"gecko-signup__input-grid gecko-signup__input-grid--nomargin\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        placeholder: \"Email Address *\",\n        className: \"gecko-signup__input\",\n        type: \"email\",\n        required: true,\n        name: \"emailAddress\",\n        value: emailAddress,\n        onChange: this.updateInput\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        placeholder: \"Password *\",\n        className: \"gecko-signup__input\",\n        type: \"password\",\n        required: true,\n        name: \"password\",\n        value: password,\n        onChange: this.updateInput\n      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n        href: \"#\",\n        className: \"gecko-signup__forgot-password\"\n      }, \"Forgot Password?\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        type: \"submit\",\n        className: \"gecko-signup__button\"\n      }, \"Log In\"));\n    }\n  }]);\n\n  return LoginForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./build/app/components/SignUp/LoginForm.jsx?");

      /***/
}),

/***/ "./build/app/components/SignUp/SignupForm.jsx":
/*!****************************************************!*\
  !*** ./build/app/components/SignUp/SignupForm.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignupForm; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar SignupForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SignupForm, _React$Component);\n\n  function SignupForm(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SignupForm);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SignupForm).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"updateInput\", function (event) {\n      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, event.target.name, event.target.value));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"processSignup\", function (event) {\n      event.preventDefault();\n\n      _this.props.processLogin();\n    });\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      emailAddress: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SignupForm, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          firstName = _this$state.firstName,\n          lastName = _this$state.lastName,\n          emailAddress = _this$state.emailAddress,\n          password = _this$state.password;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"form\", {\n        className: \"gecko-signup__form\",\n        onSubmit: this.processSignup\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"gecko-signup__input-grid gecko-signup__input-grid--signup\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        placeholder: \"First Name *\",\n        className: \"gecko-signup__input gecko-signup__input--small\",\n        type: \"text\",\n        required: true,\n        name: \"firstName\",\n        value: firstName,\n        onChange: this.updateInput\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        placeholder: \"Last Name *\",\n        className: \"gecko-signup__input gecko-signup__input--small\",\n        type: \"text\",\n        required: true,\n        name: \"lastName\",\n        value: lastName,\n        onChange: this.updateInput\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        placeholder: \"Email Address *\",\n        className: \"gecko-signup__input\",\n        type: \"email\",\n        required: true,\n        name: \"emailAddress\",\n        value: emailAddress,\n        onChange: this.updateInput\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        placeholder: \"Set A Password *\",\n        className: \"gecko-signup__input\",\n        type: \"password\",\n        required: true,\n        name: \"password\",\n        value: password,\n        onChange: this.updateInput\n      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        className: \"gecko-signup__button\",\n        type: \"submit\"\n      }, \"Get Started\"));\n    }\n  }]);\n\n  return SignupForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./build/app/components/SignUp/SignupForm.jsx?");

      /***/
}),

/***/ "./build/app/components/SignUp/index.jsx":
/*!***********************************************!*\
  !*** ./build/app/components/SignUp/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignUp; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignupForm */ \"./build/app/components/SignUp/SignupForm.jsx\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginForm */ \"./build/app/components/SignUp/LoginForm.jsx\");\n\n\n\n\n\n\n\n\n\nvar SignUp =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SignUp, _React$Component);\n\n  function SignUp(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SignUp);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SignUp).call(this, props));\n    _this.state = {\n      selectedTab: 'signup'\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SignUp, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var processLogin = this.props.processLogin;\n      var selectedTab = this.state.selectedTab;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-signup\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-signup__tabs\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n        className: \"gecko-signup__tab\",\n        \"data-selected\": selectedTab === 'signup' ? 'yes' : '',\n        onClick: function onClick() {\n          _this2.setState({\n            selectedTab: 'signup'\n          });\n        }\n      }, \"Sign Up\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n        className: \"gecko-signup__tab\",\n        \"data-selected\": selectedTab === 'login' ? 'yes' : '',\n        onClick: function onClick() {\n          _this2.setState({\n            selectedTab: 'login'\n          });\n        }\n      }, \"Log In\")), selectedTab === 'signup' && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-signup__panel gecko-signup__panel--signup\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h2\", null, \"Sign Up for Free\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SignupForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        processLogin: processLogin\n      })), selectedTab === 'login' && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"gecko-signup__panel gecko-signup__panel--login\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h2\", null, \"Welcome Back!\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        processLogin: processLogin\n      })));\n    }\n  }]);\n\n  return SignUp;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./build/app/components/SignUp/index.jsx?");

      /***/
}),

/***/ "./build/app/index.js":
/*!****************************!*\
  !*** ./build/app/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Gecko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Gecko */ \"./build/app/components/Gecko/index.jsx\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gecko__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./build/app/index.js?");

      /***/
}),

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./build/app/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./build/styles/index.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconsole.log('musicalbigfoot');\n\n//# sourceURL=webpack:///./build/index.js?");

      /***/
}),

/***/ "./build/styles/index.scss":
/*!*********************************!*\
  !*** ./build/styles/index.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./build/styles/index.scss?");

      /***/
})

  /******/
});