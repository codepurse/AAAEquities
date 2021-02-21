module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./component/header.js":
/*!*****************************!*\
  !*** ./component/header.js ***!
  \*****************************/
/*! exports provided: header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\AAAEquities\\component\\header.js";


class header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "AAA Equities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "Css/index.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
        integrity: "sha256-4iQZ6BVL4qNKlQ27TExEhBN1HFPvAvAMbFavKKosSWQ=",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://code.jquery.com/jquery-3.5.1.js",
        integrity: "sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
        integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this);
  }

}
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./component/navbar.js":
/*!*****************************!*\
  !*** ./component/navbar.js ***!
  \*****************************/
/*! exports provided: navbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbar", function() { return navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\AAAEquities\\component\\navbar.js";



class navbar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: "navbar navbar-expand-md fixed-top",
        style: {
          padding: "20px 20px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "navbar-toggler",
          "data-toggle": "collapse",
          "data-target": "#collapse",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "navbar-toggler-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          className: "navbar-brand",
          href: "#",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "Image/imglogo.png",
                className: "img-fluid imglogo",
                style: {
                  width: "130px",
                  marginLeft: "20px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  }

}
/* harmony default export */ __webpack_exports__["default"] = (navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if ( true && as.startsWith('/')) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/navbar */ "./component/navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api.service */ "./services/api.service.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_services_api_service__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sweetalert/with-react */ "@sweetalert/with-react");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\AAAEquities\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function index() {
  const [accounttype, setAccounttype] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [listaccounttype, setListaccounttype] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [fname, setFname] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [lname, setLname] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [mname, setMname] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [telnum, setTelnum] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [mobilenum, setMobilenum] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [birthplace, setBirthplace] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [address, setAddress] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [birthtDate, setBirthdate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [tin, setTin] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [nationality, setNationality] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [gender, setGender] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [genderpick, setGenderpick] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [civilstatus, setCivilstatus] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [civilstatuspick, setCivilstatuspick] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [employer, setEmployer] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [jobtitle, setJobtitle] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [busadd, setBusadd] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [errorselectgender, setErrorselectgender] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [errorselectcivil, setErrorselectcivil] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [bank, setBank] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [branch, setBrach] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [accountname, setAccountname] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [accountnumber, setAccountnumber] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [investmentobjective, setInvestmentobjective] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [sourceoffunds, setSourceoffunds] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [sourceoffundspick, setSourceoffundspick] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [totalassets, setTotalassets] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [annualincome, setAnnualincome] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [networth, setNetworth] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [errorselectfunds, setErrorselectfunds] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [associated, setAssociated] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [associatedcompany, setAssociatedcompany] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [officer, setOfficer] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [officername, setOfficername] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [emailadd, setEmailadd] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [corporatename1, setCorporatename1] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [corporateposition1, setCorporateposition1] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [corporatename2, setCorporatename2] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [corporateposition2, setCorporateposition2] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [corporatename3, setCorporatename3] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [corporateposition3, setCorporateposition3] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [newcorporate, setNewcorporate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [error1, setError1] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error2, setError2] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error3, setError3] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error4, setError4] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error5, setError5] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error6, setError6] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error7, setError7] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [listinvestmentobjectives, setListinvestmentobjectives] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [listtotalassets, setlistTotalassets] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [listannualincome, setListannualincome] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [listfunds, setListfunds] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [listnetworth, setListnetworth] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [client, setClient] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [clientpic, setClientpic] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [jointholder, setJointholder] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [jointholderpic, setJointholderpic] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [validid1, setValidid1] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [validid1pic, setValidid1pic] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [validid2, setValidid2] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [validid2pic, setValidid2pic] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [profile, setProfile] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [profilepic, setProfilepic] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const inputFileRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const inputFileRef1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const inputFileRef2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const inputFileRef3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const inputFileRef4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };

  const onBtnClick1 = () => {
    inputFileRef1.current.click();
  };

  const onBtnClick2 = () => {
    inputFileRef2.current.click();
  };

  const onBtnClick3 = () => {
    inputFileRef3.current.click();
  };

  const onBtnClick4 = () => {
    inputFileRef4.current.click();
  };

  function trylang() {
    console.log(JSON.stringify(newcorporate));
  }

  function saveaccount() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN"
      }
    };
    let formdata = new FormData();
    formdata.append("email", emailadd);
    formdata.append("name", username);
    formdata.append("firstname", fname);
    formdata.append("lastname", lname);
    formdata.append("middlename", mname);
    formdata.append("telephone_no", telnum);
    formdata.append("mobile_no", mobilenum);
    formdata.append("address", address);
    formdata.append("birthdate", moment(birthtDate).format("YYYY-MM-DD"));
    formdata.append("tin_no", tin);
    formdata.append("nationality", nationality);
    formdata.append("gender", gender);
    formdata.append("civil_status", civilstatus);
    formdata.append("employer", employer);
    formdata.append("job_title", jobtitle);
    formdata.append("business_address", busadd);
    formdata.append("account_type", accounttype);
    formdata.append("bank_name", bank);
    formdata.append("branch_name", branch);
    formdata.append("account_name", accountname);
    formdata.append("account_number", accountnumber);
    formdata.append("investment_objective", investmentobjective);
    formdata.append("source_of_funds", sourceoffunds);
    formdata.append("total_assets", totalassets);
    formdata.append("annual_income", annualincome);
    formdata.append("net_worth", networth);
    formdata.append("is_associated", associated);

    if (associated == "1") {
      formdata.append("associate_company_name", associatedcompany);
    }

    formdata.append("is_officer_director", officer);

    if (officer == "1") {
      formdata.append("officer_director_company_name", officername);
    }

    if (accounttype == "3") {
      formdata.append("corporate_accounts", JSON.stringify(newcorporate));
    } else {
      formdata.append("corporate_accounts", "");
    }

    formdata.append("client_signature_image", client, client.name);
    formdata.append("joint_account_signature_image", jointholder, jointholder.name);
    formdata.append("valid_id_one", validid1, validid1.name);
    formdata.append("valid_id_two", validid2, validid2.name);
    formdata.append("self_image", profile, profile.name);
    const apiUrl_add_account = appglobal.api.base_api + appglobal.api.add_account;
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(apiUrl_add_account, formdata, options).then(result => {
      for (var pair of formdata.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      console.log(result);
      $("#modalVerify").modal("hide");
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "450px",
          padding: "20px 8px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-2",
              style: {
                padding: "0px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "Image/check.png",
                style: {
                  width: "32px",
                  marginTop: "0px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-10 ",
              style: {
                padding: "0px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pError",
                children: "Success"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pErrorSub",
                children: "Account succesfully created."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }, this));
    }).catch(err => {
      console.log(err);
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "450px",
          padding: "20px 8px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-2",
              style: {
                padding: "0px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "Image/error.png",
                style: {
                  width: "32px",
                  marginTop: "0px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-10 ",
              style: {
                padding: "0px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pError",
                children: "Something went wrong"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pErrorSub",
                children: "Your profile cannot be saved."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }, this));
    });
  }

  function handleFile(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadclient").text(file.name);
    setClientpic(file.name);
    setClient(file);
    $(".divClient").attr("style", "2px solid #9098A9");
  }

  function handleFile1(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadjoint").text(file.name);
    setJointholderpic(file.name);
    setJointholder(file);
    $(".divJoint").attr("style", "2px solid #9098A9");
  }

  function handleFile2(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadvalid1").text(file.name);
    setValidid1pic(file.name);
    setValidid1(file);
    $(".divValid1").attr("style", "2px solid #9098A9");
  }

  function handleFile3(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadvalid2").text(file.name);
    setValidid2pic(file.name);
    setValidid2(file);
    $(".divValid2").attr("style", "2px solid #9098A9");
  }

  function handleFile4(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pProfilepic").text(file.name);
    setProfilepic(file.name);
    setProfile(file);
  }

  function setAccount(e) {
    setAccounttype(e.currentTarget.className);
    console.log(e.currentTarget.className);
  }

  function changeFname(e) {
    setFname(e.currentTarget.value);
    console.log(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeMname(e) {
    setMname(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeLname(e) {
    setLname(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeTelnum(e) {
    setTelnum(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeMobilenum(e) {
    setMobilenum(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBirthplace(e) {
    setBirthplace(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAddress(e) {
    setAddress(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBirthdate(date) {
    console.log(moment(date).format("l"));
    var filter = moment().diff(date, 'years');

    if (filter > 17) {
      setBirthdate(date);
    } else {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "450px",
          padding: "20px 8px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-2",
              style: {
                padding: "0px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "Image/error.png",
                style: {
                  width: "32px",
                  marginTop: "0px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-10 ",
              style: {
                padding: "0px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pError",
                children: "Oooops!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pErrorSub",
                children: "Must be 18yrs old above."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 9
      }, this));
    }

    $(".react-datepicker__input-container").css("border", "1px solid #CECECE");
  }

  function changetin(e) {
    setTin(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeNationality(e) {
    setNationality(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeGender(e) {
    setGender(e.label);
    setGenderpick({
      value: e.value,
      label: e.label
    });
    console.log(e.label);
    setErrorselectgender("");
  }

  function changeCivil(e) {
    setCivilstatus(e.label);
    setCivilstatuspick({
      value: e.value,
      label: e.label
    });
    setErrorselectcivil("");
  }

  function changeEmployer(e) {
    setEmployer(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeJobtitle(e) {
    setJobtitle(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBusadd(e) {
    setBusadd(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBank(e) {
    setBank(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBranch(e) {
    setBrach(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAccountname(e) {
    setAccountname(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAccountnumber(e) {
    setAccountnumber(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeInvestmentobjective(e) {
    setInvestmentobjective(e.currentTarget.id);
    console.log(e.currentTarget.className);
  }

  function changeSourceoffunds(e) {
    setSourceoffunds(e.value);
    setSourceoffundspick({
      value: e.value,
      label: e.label
    });
    setErrorselectfunds("");
  }

  function changeTotalassets(e) {
    setTotalassets(e.currentTarget.className);
  }

  function changeAnnualincome(e) {
    setAnnualincome(e.currentTarget.className);
  }

  function changeNetworth(e) {
    setNetworth(e.currentTarget.className);
  }

  function changeAss(e) {
    setAssociated(e.currentTarget.className);

    if (e.currentTarget.className == "0") {
      setAssociatedcompany("");
    }
  }

  function changeOfficer(e) {
    setOfficer(e.currentTarget.className);

    if (e.currentTarget.className == "0") {
      setOfficername("");
    }
  }

  function changeAsscompany(e) {
    setAssociatedcompany(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeOfficername(e) {
    setOfficername(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeUsername(e) {
    setUsername(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeEmailadd(e) {
    setEmailadd(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporatename1(e) {
    setCorporatename1(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporateposition1(e) {
    setCorporateposition1(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporatename2(e) {
    setCorporatename2(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporateposition2(e) {
    setCorporateposition2(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporatename3(e) {
    setCorporatename3(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporateposition3(e) {
    setCorporateposition3(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  const listyear = [];
  const listsourcefunds = [];
  const options_gender = [{
    value: "Male",
    label: "Male"
  }, {
    value: "Female",
    label: "Female"
  }];
  const options_civilstatus = [{
    value: "Single",
    label: "Single"
  }, {
    value: "Married",
    label: "Married"
  }, {
    value: "Divorced",
    label: "Divorced"
  }, {
    value: "Widowed",
    label: "Widowed"
  }];
  const customStyles = {
    control: (base, state) => _objectSpread(_objectSpread({}, base), {}, {
      color: "#212121",
      border: "1px solid #cecece",
      boxShadow: "none",
      borderRadius: "10px",
      width: "100%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }
    }),
    singleValue: provided => _objectSpread(_objectSpread({}, provided), {}, {
      color: "#212121"
    })
  };
  const customStyles_error = {
    control: (base, state) => _objectSpread(_objectSpread({}, base), {}, {
      color: "#212121",
      border: "1px solid red",
      boxShadow: "none",
      borderRadius: "10px",
      width: "100%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }
    }),
    singleValue: provided => _objectSpread(_objectSpread({}, provided), {}, {
      color: "#212121"
    })
  };
  const customStyles_birth = {
    control: (base, state) => _objectSpread(_objectSpread({}, base), {}, {
      color: "#212121",
      border: "1px solid #cecece",
      boxShadow: "none",
      borderRadius: "10px",
      width: "100%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }
    }),
    singleValue: provided => _objectSpread(_objectSpread({}, provided), {}, {
      color: "#212121"
    })
  };

  function nextForm() {
    if ($(".divForm1").css("display") == "block") {
      if (!accounttype) {
        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "450px",
            padding: "20px 8px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2",
                style: {
                  padding: "0px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/error.png",
                  style: {
                    width: "32px",
                    marginTop: "0px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 576,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 575,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-10 ",
                style: {
                  padding: "0px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pError",
                  children: "Oooops!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 582,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please select an account type."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 583,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 581,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 574,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 11
        }, this));
      } else if (!$("#cbx").is(":checked") || !$("#cbx1").is(":checked")) {
        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "450px",
            padding: "20px 8px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2",
                style: {
                  padding: "0px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/error.png",
                  style: {
                    width: "32px",
                    marginTop: "0px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 595,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 594,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-10 ",
                style: {
                  padding: "0px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pError",
                  children: "Something went wrong"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 601,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please aggree to our terms and conditions and privacy policy."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 602,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 600,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 593,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 592,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 11
        }, this));
      } else {
        if ($(window).width() < 501) {
          $(".imgRight").css("width", "50%");
          $(".colImage").addClass("col-sm-4 col-4");
          $(".box").css("margin-top", "50px");
          $(".circle2").addClass("circleactivemobile");
          $(".circle1").addClass("circlenotactivemobile");
        } else {
          $(".imgRight").css("width", "auto");
          $(".imgCircle2").css("width", "25px");
          $(".imgCircle1").css("width", "15px");
          $(".circle2").removeClass("circlenotactive");
          $(".circle1").addClass("circlenotactive");
        }

        $(".colLeft").removeClass("col-lg-6");
        $(".colLeft").addClass("col-lg-8");
        $(".colRight").removeClass("col-lg-6");
        $(".colRight").addClass("col-lg-4");
        $(".divForm2").fadeIn(200);
        $(".divForm1").hide();
        $(".box").css("height", "500px");
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/form2.svg");
        $(".pForm1").fadeIn(200);
        $(window).scrollTop(0);
        $(".colBack").show();
      }
    } else if ($(".divForm2").css("display") == "block") {
      if (!fname || !mname || !lname || !telnum || !mobilenum || !birthplace || !address || !birthtDate) {
        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "450px",
            padding: "20px 8px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2",
                style: {
                  padding: "0px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/error.png",
                  style: {
                    width: "32px",
                    marginTop: "0px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 655,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 654,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-10 ",
                style: {
                  padding: "0px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pError",
                  children: "Oooops!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 661,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 662,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 660,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 653,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 652,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 11
        }, this));
        var empty = 0;
        $(".txtForm2").each(function () {
          if (this.value == "") {
            empty++;
            $(this).css("border", "1px solid red");
          }
        });

        if (!birthtDate) {
          $(".react-datepicker__input-container").css("border", "1px solid red");
        }
      } else {
        $(".divForm3").fadeIn(200);
        $(".divForm2").hide();
        $(".box").css("height", "450px");
        $(".box").css("margin-top", "-40px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm3").css("display") == "block") {
      if (!gender || !tin || !nationality || !civilstatus || !employer || !jobtitle || !busadd) {
        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "450px",
            padding: "20px 8px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2",
                style: {
                  padding: "0px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/error.png",
                  style: {
                    width: "32px",
                    marginTop: "0px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 705,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 704,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-10 ",
                style: {
                  padding: "0px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pError",
                  children: "Oooops!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 711,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 712,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 710,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 703,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 702,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 701,
          columnNumber: 11
        }, this));
        var empty = 0;
        $(".txtForm3").each(function () {
          if (this.value == "") {
            empty++;
            $(this).css("border", "1px solid red");
          }
        });

        if (!gender) {
          setErrorselectgender("1");
        }

        if (!civilstatus) {
          setErrorselectcivil("1");
        }
      } else {
        if ($(window).width() < 501) {
          $(".imgRight").css("width", "50%");
          $(".colImage").addClass("col-sm-4 col-4");
          $(".box").css("margin-top", "50px");
          $(".circle3").addClass("circleactivemobile");
          $(".circle2").addClass("circlenotactivemobile");
        } else {
          $(".imgCircle3").css("width", "25px");
          $(".imgCircle2").css("width", "15px");
          $(".imgRight").addClass("animate__animated animate__zoomIn");
          $(".imgRight").attr("src", "Image/form3.svg");
          $(".circle3").removeClass("circlenotactive");
          $(".circle2").addClass("circlenotactive");
        }

        $(".divForm4").fadeIn(200);
        $(".divForm3").hide();
        $(".box").css("height", "520px");
        $(".pForm").hide();
        $(".box").css("margin-top", "10px");
        $(window).scrollTop(0);
        $(".pForm2").fadeIn(200);
      }
    } else if ($(".divForm4").css("display") == "block") {
      if (!bank || !branch || !accountnumber || !accountname || !investmentobjective) {
        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "450px",
            padding: "20px 8px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2",
                style: {
                  padding: "0px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/error.png",
                  style: {
                    width: "32px",
                    marginTop: "0px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 771,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 770,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-10 ",
                style: {
                  padding: "0px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pError",
                  children: "Oooops!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 777,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 778,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 776,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 769,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 768,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 767,
          columnNumber: 11
        }, this));
        var empty = 0;
        $(".txtForm4").each(function () {
          if (this.value == "") {
            empty++;
            $(this).css("border", "1px solid red");
          }
        });
      } else {
        $(".divForm5").fadeIn(200);
        $(".divForm4").hide();
        $(".box").css("height", "550px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm5").css("display") == "block") {
      if (!sourceoffunds || !totalassets || !annualincome || !networth) {
        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "450px",
            padding: "20px 8px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2",
                style: {
                  padding: "0px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/error.png",
                  style: {
                    width: "32px",
                    marginTop: "0px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 806,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 805,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-10 ",
                style: {
                  padding: "0px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pError",
                  children: "Oooops!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 812,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 813,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 811,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 804,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 803,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 802,
          columnNumber: 11
        }, this));

        if (!sourceoffunds) {
          setErrorselectfunds("1");
        }
      } else {
        $(".divForm6").fadeIn(200);
        $(".divForm5").hide();
        $(".box").css("height", "550px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm6").css("display") == "block") {
      console.log(associated);
      console.log(officer);

      if (!associated || !officer) {
        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "450px",
            padding: "20px 8px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2",
                style: {
                  padding: "0px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/error.png",
                  style: {
                    width: "32px",
                    marginTop: "0px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 839,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 838,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-10 ",
                style: {
                  padding: "0px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pError",
                  children: "Oooops!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 845,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 846,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 844,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 837,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 836,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 835,
          columnNumber: 11
        }, this));
      } else if (associated == "1" && !associatedcompany) {
        $(".txtass").css("border", "1px solid red");
      } else if (officer == "1" && !officername) {
        $(".txtofficername").css("border", "1px solid red");
      } else {
        if (accounttype == "3") {
          $(".colLeft").removeClass("col-lg-8");
          $(".colLeft").addClass("col-lg-6");
          $(".colRight").removeClass("col-lg-4");
          $(".colRight").addClass("col-lg-6");
          $(".divForm7").fadeIn(200);
          $(".divForm6").hide();
          $(".box").css("height", "450px");
          $(".imgRight").addClass("animate__animated animate__zoomIn");
          $(".imgRight").attr("src", "Image/form7.svg");
          $(".pForm").hide();
          $(".pForm7").fadeIn(200);
          $(window).scrollTop(0);
        } else {
          if ($(window).width() < 501) {
            $(".imgRight").css("width", "30%");
            $(".colImage").removeClass("col-sm-4 col-4");
            $(".pForm7").addClass("pImportant");
            $(".colText").removeClass("col-sm-8 col-8");
          } else {
            $(".imgRight").css("width", "auto");
          }

          $(".colLeft").removeClass("col-lg-8");
          $(".colLeft").addClass("col-lg-6");
          $(".colRight").removeClass("col-lg-4");
          $(".colRight").addClass("col-lg-6");
          $(".divForm8").fadeIn(200);
          $(".divForm6").hide();
          $(".box").css("height", "350px");
          $(window).scrollTop(0);
        }
      }
    } else if ($(".divForm7").css("display") == "block") {
      var clear = 0;

      if (corporatename1 && !corporateposition1) {
        $(".txtposition1").css("border", "1px solid red");
        clear = 1;
      } else if (!corporatename1 && corporateposition1) {
        $(".txtname1").css("border", "1px solid red");
        clear = 1;
      }

      if (corporatename2 && !corporateposition2) {
        $(".txtposition2").css("border", "1px solid red");
        clear = 1;
      } else if (!corporatename2 && corporateposition2) {
        $(".txtname2").css("border", "1px solid red");
        clear = 1;
      }

      if (corporatename3 && !corporateposition3) {
        $(".txtposition3").css("border", "1px solid red");
        clear = 1;
      } else if (!corporatename3 && corporateposition3) {
        $(".txtname3").css("border", "1px solid red");
        clear = 1;
      }

      if (clear == 0) {
        if (corporatename1 && corporateposition1) {
          newcorporate.push({
            corporate_name: corporatename1,
            corporate_position: corporateposition1
          });
        }

        if (corporatename2 && corporateposition2) {
          newcorporate.push({
            corporate_name: corporatename2,
            corporate_position: corporateposition2
          });
        }

        if (corporatename3 && corporateposition3) {
          newcorporate.push({
            corporate_name: corporatename3,
            corporate_position: corporateposition3
          });
        }

        if ($(window).width() < 501) {
          $(".imgRight").css("width", "30%");
          $(".colImage").removeClass("col-sm-4 col-4");
          $(".pForm7").addClass("pImportant");
          $(".colText").removeClass("col-sm-8 col-8");
        } else {
          $(".imgRight").css("width", "auto");
        }

        $(".divForm8").fadeIn(200);
        $(".divForm7").hide();
        $(".box").css("height", "350px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm8").css("display") == "block") {
      if (!clientpic) {
        $(".divClient").attr("style", "border: 2px dashed red !important");
      } else {
        $(".divForm9").fadeIn(200);
        $(".divForm8").hide();
        $(".box").css("height", "350px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm9").css("display") == "block") {
      if (!jointholderpic) {
        $(".divJoint").attr("style", "border: 2px dashed red !important");
      } else {
        $(".divForm10").fadeIn(200);
        $(".divForm9").hide();
        $(".box").css("height", "450px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm10").css("display") == "block") {
      if (!validid1pic || !validid2pic) {
        $(".divValid1, .divValid2").attr("style", "border: 2px dashed red !important");
      } else if (!validid1pic) {
        $(".divValid1").attr("style", "border: 2px dashed red !important");
      } else if (!validid2pic) {
        $(".divValid2").attr("style", "border: 2px dashed red !important");
      } else {
        $(".divForm11").fadeIn(200);
        $(".divForm10").hide();
        $(".box").css("height", "300px");
        $(window).scrollTop(0);

        if ($(window).width() < 501) {
          $(".imgRight").css("width", "70%");
          $(".colImage").removeClass("col-sm-4 col-4");
        } else {
          $(".imgRight").css("width", "auto");
        }

        $(".imgRight").css("width", "80%");
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/phone1.png");
        $(".pForm").hide();
      }
    } else if ($(".divForm11").css("display") == "block") {
      if (!username || !emailadd) {
        var empty = 0;
        $(".txtForm11").each(function () {
          if (this.value == "") {
            empty++;
            $(this).css("border", "1px solid red");
          }
        });
      } else {
        const options = {
          headers: {
            Accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
          }
        };
        const apiUrl_check_user = appglobal.api.base_api + appglobal.api.check_user_exist;
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_check_user, {
          params: {
            name: username,
            email: emailadd
          }
        }, options).then(response => {
          console.log(response);
          $(".pBox").css("font-size", "2.2rem");
          $(".divForm12").fadeIn(200);
          $(".divForm11").hide();
          $(".imgRight").css("width", "80%");
          $(".imgRight").addClass("animate__animated animate__zoomIn");
          $(".imgRight").attr("src", "Image/selfie.svg");
          $(".box").css("height", "315px");
          $(".pForm").hide();
          $(".pForm8").show();
          $(".btnNext").html("CREATE");
          $(window).scrollTop(0);
        }).catch(err => {
          console.log(err.response);
          _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "450px",
              padding: "20px 8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-2",
                  style: {
                    padding: "0px"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "Image/error.png",
                    style: {
                      width: "32px",
                      marginTop: "0px"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1041,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1040,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-10 ",
                  style: {
                    padding: "0px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "pError",
                    children: "Oooops!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1047,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "pErrorSub",
                    children: err.response.data.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1048,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1046,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1039,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1038,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1037,
            columnNumber: 15
          }, this));
        });
      }
    } else if ($(".divForm12  ").css("display") == "block") {
      $("#modalVerify").modal("show");
      saveaccount();
    }
  }

  function prevForm() {
    if ($(".divForm2").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "70%");
        $(".colImage").removeClass("col-sm-4 col-4");
        $(".circle1").addClass("circleactivemobile");
        $(".circle2").removeClass("circleactivemobile");
      } else {
        $(".imgRight").css("width", "auto");
      }

      $(".colLeft").removeClass("col-lg-8");
      $(".colLeft").addClass("col-lg-6");
      $(".colRight").removeClass("col-lg-4");
      $(".colRight").addClass("col-lg-6");
      $(".divForm1").fadeIn(200);
      $(".divForm2").hide();
      $(".box").css("height", "350px");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/phone1.png");
      $(".pForm").hide();
      $(".imgCircle1").css("width", "25px");
      $(".imgCircle2").css("width", "15px");
      $(".circle1").removeClass("circlenotactive");
      $(".circle2").addClass("circlenotactive");
      $(".colBack").hide();
    } else if ($(".divForm3").css("display") == "block") {
      $(".divForm2").fadeIn(200);
      $(".divForm3").hide();
      $(".box").css("height", "500px");
      $(".box").css("margin-top", "30px");
    } else if ($(".divForm4").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".circle2").addClass("circleactivemobile");
        $(".circle3").removeClass("circleactivemobile");
      } else {
        $(".imgCircle2").css("width", "25px");
        $(".imgCircle3").css("width", "15px");
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/form2.svg");
        $(".circle2").removeClass("circlenotactive");
        $(".circle3").addClass("circlenotactive");
      }

      $(".divForm3").fadeIn(200);
      $(".divForm4").hide();
      $(".box").css("height", "450px");
      $(".pForm2").hide();
      $(".pForm1").fadeIn(200);
    } else if ($(".divForm5").css("display") == "block") {
      $(".divForm4").fadeIn(200);
      $(".divForm5").hide();
    } else if ($(".divForm6").css("display") == "block") {
      $(".divForm5").fadeIn(200);
      $(".divForm6").hide();
    } else if ($(".divForm7").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "50%");
        $(".colImage").addClass("col-sm-4 col-4");
        $(".colText").addClass("col-sm-8 col-8");
      } else {
        $(".imgRight").css("width", "auto");
      }

      $(".colLeft").removeClass("col-lg-6");
      $(".colLeft").addClass("col-lg-8");
      $(".colRight").removeClass("col-lg-6");
      $(".colRight").addClass("col-lg-4");
      $(".divForm6").fadeIn(200);
      $(".divForm7").hide();
      $(".box").css("height", "550px");
      $(".pForm7").hide();
      $(".pForm2").fadeIn(200);
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form3.svg");
    } else if ($(".divForm8").css("display") == "block") {
      if (accounttype == "3") {
        newcorporate.length = 0;
        console.log("namo ka");
        $(".divForm7").fadeIn(200);
        $(".divForm8").hide();
        $(".box").css("height", "450px");
      } else {
        console.log(accounttype);
        console.log("pota lang");

        if ($(window).width() < 501) {
          $(".imgRight").css("width", "50%");
          $(".colImage").addClass("col-sm-4 col-4");
          $(".colText").addClass("col-sm-8 col-8");
        } else {
          $(".imgRight").css("width", "auto");
        }

        $(".colLeft").removeClass("col-lg-6");
        $(".colLeft").addClass("col-lg-8");
        $(".colRight").removeClass("col-lg-6");
        $(".colRight").addClass("col-lg-4");
        $(".divForm6").fadeIn(200);
        $(".divForm8").hide();
        $(".box").css("height", "550px");
        $(".pForm7").hide();
        $(".pForm2").fadeIn(200);
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/form3.svg");
      }
    } else if ($(".divForm9").css("display") == "block") {
      $(".divForm8").fadeIn(200);
      $(".divForm9").hide();
      $(".box").css("height", "350px");
    } else if ($(".divForm10").css("display") == "block") {
      $(".divForm9").fadeIn(200);
      $(".divForm10").hide();
      $(".box").css("height", "350px");
    } else if ($(".divForm11").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "50%");
      } else {
        $(".imgRight").css("width", "auto");
      }

      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form7.svg");
      $(".pForm7").show();
      $(".divForm10").fadeIn(200);
      $(".divForm11").hide();
      $(".box").css("height", "450px");
    } else if ($(".divForm12").css("display") == "block") {
      $(".divForm11").fadeIn(200);
      $(".divForm12").hide();
      $(".box").css("height", "300px");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/Phone.png");
      $(".pForm").hide();
      $(".pForm7").show();
      $(".btnNext").html("NEXT");
    }
  }

  if (false) { var i; }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN"
      }
    };
    const apiUrl_fetch_accounts = appglobal.api.base_api + appglobal.api.account_types;
    const apiUrl_annual_income = appglobal.api.base_api + appglobal.api.annual_income;
    const apiUrl_investment_objectives = appglobal.api.base_api + appglobal.api.investment_objective;
    const apiUrl_source_of_funds = appglobal.api.base_api + appglobal.api.source_of_funds;
    const apiUrl_total_assets = appglobal.api.base_api + appglobal.api.total_assets;
    const apiUrl_net_worth = appglobal.api.base_api + appglobal.api.net_worth;
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_fetch_accounts, {}, options).then(result => {
      console.log(result);
      setListaccounttype(result.data.data);
      setError1("1");
    }).catch(err => {
      setError1("2");
      console.log(err);
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_investment_objectives, {}, options).then(result => {
      console.log(result);
      setError7("1");
      setListinvestmentobjectives(result.data.data);
    }).catch(err => {
      setError1("2");
      console.log(err);
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_source_of_funds, {}, options).then(response => {
      console.log(response.data.data.length);
      const funds = [];

      for (var i = 0; i < response.data.data.length; i++) {
        console.log(response.data.data[i].id + " " + response.data.data[i].name);
        funds.push({
          value: response.data.data[i].id,
          label: response.data.data[i].name
        });
      }

      setListfunds(funds);
      setError2("1");
    }).catch(err => {
      setError2("2");
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_investment_objectives, {}, options).then(result => {
      console.log(result);
      setListinvestmentobjectives(result.data.data);
      setError3("1");
    }).catch(err => {
      console.log(err);
      setError3("2");
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_total_assets, {}, options).then(result => {
      console.log(result);
      setlistTotalassets(result.data.data);
      setError4("1");
    }).catch(err => {
      console.log(err);
      setError4("2");
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_annual_income, {}, options).then(result => {
      console.log(result);
      setListannualincome(result.data.data);
      setError5("1");
    }).catch(err => {
      console.log(err);
      setError5("2");
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(apiUrl_net_worth, {}, options).then(result => {
      console.log(result);
      setListnetworth(result.data.data);
      setError6("1");
    }).catch(err => {
      console.log(err);
      setError6("2");
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (error1 && error2 && error3 && error4 && error5 && error6 && error7) {
      $(".conLoader").show().fadeOut(500, function () {
        $(".conMain").fadeIn(250);
      });
    }

    if (error1 == "2" || error2 == "2" || error3 == "2" || error4 == "2" || error5 == "2" || error6 == "2" || error7 == "2") {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "450px",
          padding: "20px 8px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-2",
              style: {
                padding: "0px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "Image/error.png",
                style: {
                  width: "32px",
                  marginTop: "0px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1343,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1342,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-10 ",
              style: {
                padding: "0px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pError",
                children: "Something went wrong"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1349,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pErrorSub",
                children: "Please refresh the website."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1350,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1348,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1341,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1340,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1339,
        columnNumber: 9
      }, this));
    }
  }, [error1, error2, error3, error4, error5, error6]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1362,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1363,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "JGO Delivery Maasahan! Abangan!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1364,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Experience next level trading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1365,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "AAA Equities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1366,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Experience next level trading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1367,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Experience next level trading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1368,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1361,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1373,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1374,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container conLoader  h-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1378,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1377,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1376,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1375,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container h-100 conMain",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row h-100 align-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-6 colLeft order-2 order-lg-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "box",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "boxLine"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1387,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "boxCircle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "circle circle1",
                onClick: saveaccount,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/user.svg",
                  className: "img-fluid mx-auto d-flex imgCircle1",
                  style: {
                    width: "25px",
                    paddingTop: "15px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1390,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1389,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "circle circle2 circlenotactive",
                onClick: trylang,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/record.svg",
                  className: "img-fluid mx-auto d-flex imgCircle2",
                  style: {
                    width: "15px",
                    paddingTop: "15px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1400,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1396,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "circle circle3 circlenotactive",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/computer.svg",
                  className: "img-fluid mx-auto d-flex imgCircle3",
                  style: {
                    width: "15px",
                    paddingTop: "15px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1407,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1406,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1388,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1416,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "cntr",
                children: listaccounttype.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  htmlFor: item.name,
                  className: "btn-radio",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "radio",
                    id: item.name,
                    className: item.id,
                    name: "radio-grp",
                    onClick: setAccount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1421,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 20 20",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                      cx: 10,
                      cy: 10,
                      r: 9
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1429,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                      className: "inner"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1430,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                      className: "outer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1434,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1428,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pRadio",
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1439,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1420,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1418,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "inp-cbx",
                  id: "cbx",
                  type: "checkbox",
                  style: {
                    display: "none"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1444,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "cbx",
                  htmlFor: "cbx",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "12px",
                      height: "10px",
                      viewBox: "0 0 12 10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polyline", {
                        points: "1.5 6 4.5 9 10.5 1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1453,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1452,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1451,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pCheck",
                    children: "I agree to the terms and conditions"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1456,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1450,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "inp-cbx",
                  id: "cbx1",
                  type: "checkbox",
                  style: {
                    display: "none"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1460,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "cbx",
                  htmlFor: "cbx1",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "12px",
                      height: "10px",
                      viewBox: "0 0 12 10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polyline", {
                        points: "1.5 6 4.5 9 10.5 1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1469,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1468,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1467,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pCheck",
                    children: "I have read the privacy policy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1472,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1466,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1443,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1415,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Personal Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1479,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm2",
                    value: fname,
                    autocomplete: "false",
                    onChange: changeFname,
                    placeholder: "First name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1482,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1481,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm2",
                    value: mname,
                    autocomplete: "false",
                    onChange: changeMname,
                    placeholder: "Middle name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1492,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1491,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1480,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm2",
                    value: lname,
                    autocomplete: "false",
                    onChange: changeLname,
                    placeholder: "Last name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1504,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1503,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm2",
                    value: telnum,
                    autocomplete: "false",
                    onChange: changeTelnum,
                    placeholder: "Telephone number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1514,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1513,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1502,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm2",
                    value: mobilenum,
                    autocomplete: "false",
                    onChange: changeMobilenum,
                    placeholder: "Mobile number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1526,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1525,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm2",
                    value: birthplace,
                    autocomplete: "false",
                    onChange: changeBirthplace,
                    placeholder: "Birthplace"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1536,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1535,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1524,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm2",
                    value: address,
                    autocomplete: "false",
                    onChange: changeAddress,
                    placeholder: "Residential address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1548,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1547,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1546,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row align-items-center",
                style: {
                  marginTop: "15px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "pBoxTitle",
                    children: "Birth Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1563,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1562,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    placeholderText: "Click to select a date",
                    dateFormat: "yyyy/MM/dd",
                    selected: birthtDate,
                    onChange: changeBirthdate
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1566,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1565,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1558,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1478,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Personal Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1576,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm3",
                    placeholder: "TIN",
                    value: tin,
                    autocomplete: "false",
                    onChange: changetin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1579,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1578,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm3",
                    placeholder: "Nationality",
                    autocomplete: "false",
                    value: nationality,
                    onChange: changeNationality
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1589,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1588,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1577,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "18px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    options: options_gender,
                    styles: errorselectgender ? customStyles_error : customStyles,
                    value: genderpick,
                    onChange: changeGender,
                    placeholder: "Gender"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1601,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1600,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    options: options_civilstatus,
                    styles: errorselectcivil ? customStyles_error : customStyles,
                    value: civilstatuspick,
                    onChange: changeCivil,
                    placeholder: "Civil Status"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1612,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1611,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1599,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm3",
                    placeholder: "Employer",
                    autocomplete: "false",
                    value: employer,
                    onChange: changeEmployer
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1625,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1624,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm3",
                    autocomplete: "false",
                    placeholder: "Job title",
                    value: jobtitle,
                    onChange: changeJobtitle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1635,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1634,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1623,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    autocomplete: "false",
                    className: "txtBox txtForm3",
                    placeholder: "Business address",
                    value: busadd,
                    onChange: changeBusadd
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1647,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1646,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1645,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1575,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1659,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub",
                children: "Tell us where to send your money"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1660,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm4",
                    placeholder: "Bank",
                    autocomplete: "false",
                    value: bank,
                    onChange: changeBank
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1663,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1662,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm4",
                    placeholder: "Branch",
                    autocomplete: "false",
                    value: branch,
                    onChange: changeBranch
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1673,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1672,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1661,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm4",
                    placeholder: "Account name",
                    autocomplete: "false",
                    value: accountname,
                    onChange: changeAccountname
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1685,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1684,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm4",
                    placeholder: "Account number",
                    autocomplete: "false",
                    value: accountnumber,
                    onChange: changeAccountnumber
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1695,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1694,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1683,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub",
                style: {
                  marginTop: "15px"
                },
                children: "Tell us how to help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1705,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "10px"
                },
                children: "Investment Objective"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1708,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row flex",
                style: {
                  marginTop: "10px"
                },
                children: listinvestmentobjectives.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: item.name.length > 20 ? "col-lg-5" : "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: item.id,
                    className: "btn-radio",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      id: item.id,
                      name: "radio-investment",
                      className: item.id,
                      onChange: changeInvestmentobjective
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1719,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "20px",
                      height: "20px",
                      viewBox: "0 0 20 20",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        cx: 10,
                        cy: 10,
                        r: 9
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1727,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1728,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1732,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1726,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1737,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1718,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1713,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1711,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1658,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1744,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub",
                children: "Tell us how to help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1745,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    options: listfunds,
                    styles: errorselectfunds ? customStyles_error : customStyles,
                    placeholder: "Source of funds",
                    value: sourceoffundspick,
                    onChange: changeSourceoffunds
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1748,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1747,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1746,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "18px"
                },
                children: "Total Assets"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1759,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row ",
                style: {
                  marginTop: "10px"
                },
                children: listtotalassets.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: item.name,
                    className: "btn-radio",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      id: item.name,
                      name: "radio-grpAssets",
                      className: item.id,
                      onChange: changeTotalassets
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1766,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "20px",
                      height: "20px",
                      viewBox: "0 0 20 20",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        cx: 10,
                        cy: 10,
                        r: 9
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1774,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1775,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1779,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1773,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1784,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1765,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1764,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1762,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "18px"
                },
                children: "Annaual Income"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1789,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row ",
                style: {
                  marginTop: "10px"
                },
                children: listannualincome.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "annual" + item.name,
                    className: "btn-radio",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      id: "annual" + item.name,
                      name: "radio-grpAnnual",
                      className: item.id,
                      onChange: changeAnnualincome
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1799,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "20px",
                      height: "20px",
                      viewBox: "0 0 20 20",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        cx: 10,
                        cy: 10,
                        r: 9
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1807,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1808,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1812,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1806,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1817,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1795,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1794,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1792,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "18px"
                },
                children: "Net Worth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1822,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row ",
                style: {
                  marginTop: "10px"
                },
                children: listnetworth.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "net" + item.name,
                    className: "btn-radio",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      id: "net" + item.name,
                      name: "radio-grpNet",
                      className: item.id,
                      onChange: changeNetworth
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1829,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "20px",
                      height: "20px",
                      viewBox: "0 0 20 20",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        cx: 10,
                        cy: 10,
                        r: 9
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1837,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1838,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1842,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1836,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1847,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1828,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1827,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1825,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1743,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1854,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxTitle",
                style: {
                  marginBottom: "18px"
                },
                children: "Are you associated with another broker or dealer?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1855,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "radio",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  htmlFor: "rdo-11",
                  className: "btn-radio",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "radio",
                    id: "rdo-11",
                    className: "1",
                    name: "radio-grpAss",
                    onChange: changeAss
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1860,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 20 20",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                      cx: 10,
                      cy: 10,
                      r: 9
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1868,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                      className: "inner"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1869,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                      className: "outer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1873,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1867,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pRadio",
                    children: "Yes, if so state the name of the company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1878,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1859,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1858,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px",
                  marginBottom: "10px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtass",
                    placeholder: "Company name",
                    value: associatedcompany,
                    onChange: changeAsscompany
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1888,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1887,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1883,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "rdo-12",
                className: "btn-radio",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "radio",
                  id: "rdo-12",
                  className: "0",
                  name: "radio-grpAss",
                  onChange: changeAss
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1899,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "20px",
                  height: "20px",
                  viewBox: "0 0 20 20",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                    cx: 10,
                    cy: 10,
                    r: 9
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1907,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                    className: "inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1908,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                    className: "outer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1912,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1906,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pRadio",
                  children: "No"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1917,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1898,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxTitle",
                style: {
                  marginBottom: "20px"
                },
                children: "Are you an officer/director of a listed company?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1919,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "rdo-13",
                className: "btn-radio",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "radio",
                  id: "rdo-13",
                  className: "1",
                  name: "radio-grpCompany",
                  onChange: changeOfficer
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1923,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "20px",
                  height: "20px",
                  viewBox: "0 0 20 20",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                    cx: 10,
                    cy: 10,
                    r: 9
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1931,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                    className: "inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1932,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                    className: "outer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1936,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1930,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pRadio",
                  children: "Yes, if so state the name of the company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1941,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1922,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10px",
                  marginBottom: "10px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtofficername",
                    placeholder: "Company name",
                    value: officername,
                    onChange: changeOfficername
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1950,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1949,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1945,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "rdo-14",
                className: "btn-radio",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "radio",
                  id: "rdo-14",
                  className: "0",
                  name: "radio-grpCompany",
                  onChange: changeOfficer
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1960,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "20px",
                  height: "20px",
                  viewBox: "0 0 20 20",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                    cx: 10,
                    cy: 10,
                    r: 9
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1968,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                    className: "inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1969,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                    className: "outer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1973,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1967,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pRadio",
                  children: "No"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1978,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1959,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1853,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm7",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "For Corporate Accounts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1982,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxTitle",
                style: {
                  marginBottom: "20px"
                },
                children: "Indicate the names of personnel authorized to transact on behalf of the company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1983,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtname1",
                    autocomplete: "false",
                    placeholder: "Name",
                    id: "txtname1",
                    value: corporatename1,
                    onChange: changeCorporatename1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1989,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1988,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtposition1",
                    id: "txtposition1",
                    autocomplete: "false",
                    placeholder: "Position",
                    value: corporateposition1,
                    onChange: changeCorporateposition1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2000,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1999,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1987,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "18px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtname2 txtBox",
                    placeholder: "Name",
                    autocomplete: "false",
                    value: corporatename2,
                    onChange: changeCorporatename2
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2013,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2012,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtposition2",
                    placeholder: "Position",
                    autocomplete: "false",
                    value: corporateposition2,
                    onChange: changeCorporateposition2
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2023,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2022,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2011,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "18px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtname3",
                    placeholder: "Name",
                    autocomplete: "false",
                    value: corporatename3,
                    onChange: changeCorporatename3
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2035,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2034,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtposition3",
                    placeholder: "Position",
                    autocomplete: "false",
                    value: corporateposition3,
                    onChange: changeCorporateposition3
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2045,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2044,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2033,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1981,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload signature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2057,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: e => handleFile(e),
                ref: inputFileRef,
                id: "file-upload",
                type: "file",
                accept: ".jpg, .png, .jpeg|image",
                style: {
                  display: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2058,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divClient",
                onClick: onBtnClick,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2067,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadclient",
                  children: ["Client Signature over ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2072,
                    columnNumber: 43
                  }, this), " Printed Name"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 2071,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2066,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2056,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm9",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload signature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2077,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: e => handleFile1(e),
                ref: inputFileRef1,
                id: "file-upload",
                type: "file",
                accept: ".jpg, .png, .jpeg|image",
                style: {
                  display: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2078,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divJoint",
                onClick: onBtnClick1,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2087,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadjoint",
                  children: ["Joint Account Holder's", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2093,
                    columnNumber: 21
                  }, this), " Siognature over Printed Name"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 2091,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2086,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2076,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm10",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload two valid IDs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2098,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: e => handleFile2(e),
                ref: inputFileRef2,
                id: "file-upload",
                type: "file",
                accept: ".jpg, .png, .jpeg|image",
                style: {
                  display: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2099,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divValid1",
                onClick: onBtnClick2,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2108,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadvalid1",
                  children: "Upload first ID photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2112,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2107,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: e => handleFile3(e),
                ref: inputFileRef3,
                id: "file-upload",
                type: "file",
                accept: ".jpg, .png, .jpeg|image",
                style: {
                  display: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2114,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divValid2",
                onClick: onBtnClick3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2123,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadvalid2",
                  children: "Upload second ID photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2127,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2122,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2097,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm11",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "User Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2133,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm11",
                    placeholder: "Username",
                    autocomplete: "false",
                    value: username,
                    onChange: changeUsername
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2136,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2135,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2134,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                style: {
                  marginTop: "10 px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "txtBox txtForm11",
                    placeholder: "Email address",
                    autocomplete: "false",
                    value: emailadd,
                    style: {
                      marginTop: "5px"
                    },
                    onChange: changeEmailadd
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2148,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2147,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2146,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2132,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm12",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: e => handleFile4(e),
                ref: inputFileRef4,
                id: "file-upload",
                type: "file",
                accept: ".jpg, .png, .jpeg|image",
                style: {
                  display: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2161,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload a photo of your self"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2169,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload",
                onClick: onBtnClick4,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2171,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pProfilepic",
                  children: "Take a photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2175,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2170,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2160,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              style: {
                marginTop: "15px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-4 colBack col-sm-6 col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btnBack",
                  onClick: prevForm,
                  children: "BACK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2180,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2179,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-4 col-sm-6 col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btnNext",
                  onClick: nextForm,
                  children: "NEXT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2185,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2184,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2178,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1386,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1385,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-6 colRight order-1 order-lg-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row align-items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-12 colImage",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "Image/phone1.png",
                className: "img-fluid imgRight mx-auto d-flex animate__faster"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2195,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 2194,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-12 col-sm-8 col-8 colText",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm1",
                children: ["When ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "resistance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2202,
                  columnNumber: 24
                }, this), " levels are broken, a breakout may occur. Buy breakouts automatically with Conditional Orders."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2201,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm2",
                children: ["When ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "support"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2206,
                  columnNumber: 24
                }, this), " levels are broken, a breakout may occur. Set automatic stops with Conditional orders to protect your capital."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2205,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm7",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Margin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2211,
                  columnNumber: 19
                }, this), " increases your buying power by borrowing funds. To use margin, upgrade your account to a AAA Turbo Margin Account."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2210,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm8",
                children: "Put your valid ID below your chin as shown above and take a photo of yourself!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2215,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2200,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 2193,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2192,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1384,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1383,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "modal fade",
      id: "modalVerify",
      "data-backdrop": "static",
      "data-keyboard": "false",
      tabIndex: -1,
      role: "dialog",
      "aria-labelledby": "exampleModalCenterTitle",
      "aria-hidden": "true",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-dialog modal-dialog-centered",
        role: "document",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-body",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row  ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-12 ",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "colVerify",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "Box",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 2243,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 2242,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 2241,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2240,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "pModal",
                    children: "Please wait while we verify your account"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2247,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 2239,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2238,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 2237,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2236,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2235,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 2234,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 2224,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./services/api.service.js":
/*!*********************************!*\
  !*** ./services/api.service.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = appglobal = {
  api: {
    base_api: "https://kyc.aaa-equities.com.ph",
    account_types: "/api/account_types",
    annual_income: "/api/annual_income",
    investment_objective: "/api/investment_objectives",
    source_of_funds: "/api/source_of_funds",
    total_assets: "/api/total_assets",
    net_worth: "/api/net_worth",
    add_account: "/api/accounts",
    check_user_exist: "/api/check_user_exists"
  }
};

/***/ }),

/***/ "@sweetalert/with-react":
/*!*****************************************!*\
  !*** external "@sweetalert/with-react" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sweetalert/with-react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaGVhZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwibmF2YmFyIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luTGVmdCIsInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwidmFsaWRhdGUiLCJwYXJzZWREZXN0aW5hdGlvbiIsImhhZExvY2FsZSIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJzdHJPckFycmF5IiwiY29tcGlsZU5vblBhdGgiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsImZzUGF0aG5hbWUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiaW5kZXgiLCJhY2NvdW50dHlwZSIsInNldEFjY291bnR0eXBlIiwidXNlU3RhdGUiLCJsaXN0YWNjb3VudHR5cGUiLCJzZXRMaXN0YWNjb3VudHR5cGUiLCJmbmFtZSIsInNldEZuYW1lIiwibG5hbWUiLCJzZXRMbmFtZSIsIm1uYW1lIiwic2V0TW5hbWUiLCJ0ZWxudW0iLCJzZXRUZWxudW0iLCJtb2JpbGVudW0iLCJzZXRNb2JpbGVudW0iLCJiaXJ0aHBsYWNlIiwic2V0QmlydGhwbGFjZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiYmlydGh0RGF0ZSIsInNldEJpcnRoZGF0ZSIsInRpbiIsInNldFRpbiIsIm5hdGlvbmFsaXR5Iiwic2V0TmF0aW9uYWxpdHkiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJnZW5kZXJwaWNrIiwic2V0R2VuZGVycGljayIsImNpdmlsc3RhdHVzIiwic2V0Q2l2aWxzdGF0dXMiLCJjaXZpbHN0YXR1c3BpY2siLCJzZXRDaXZpbHN0YXR1c3BpY2siLCJlbXBsb3llciIsInNldEVtcGxveWVyIiwiam9idGl0bGUiLCJzZXRKb2J0aXRsZSIsImJ1c2FkZCIsInNldEJ1c2FkZCIsImVycm9yc2VsZWN0Z2VuZGVyIiwic2V0RXJyb3JzZWxlY3RnZW5kZXIiLCJlcnJvcnNlbGVjdGNpdmlsIiwic2V0RXJyb3JzZWxlY3RjaXZpbCIsImJhbmsiLCJzZXRCYW5rIiwiYnJhbmNoIiwic2V0QnJhY2giLCJhY2NvdW50bmFtZSIsInNldEFjY291bnRuYW1lIiwiYWNjb3VudG51bWJlciIsInNldEFjY291bnRudW1iZXIiLCJpbnZlc3RtZW50b2JqZWN0aXZlIiwic2V0SW52ZXN0bWVudG9iamVjdGl2ZSIsInNvdXJjZW9mZnVuZHMiLCJzZXRTb3VyY2VvZmZ1bmRzIiwic291cmNlb2ZmdW5kc3BpY2siLCJzZXRTb3VyY2VvZmZ1bmRzcGljayIsInRvdGFsYXNzZXRzIiwic2V0VG90YWxhc3NldHMiLCJhbm51YWxpbmNvbWUiLCJzZXRBbm51YWxpbmNvbWUiLCJuZXR3b3J0aCIsInNldE5ldHdvcnRoIiwiZXJyb3JzZWxlY3RmdW5kcyIsInNldEVycm9yc2VsZWN0ZnVuZHMiLCJhc3NvY2lhdGVkIiwic2V0QXNzb2NpYXRlZCIsImFzc29jaWF0ZWRjb21wYW55Iiwic2V0QXNzb2NpYXRlZGNvbXBhbnkiLCJvZmZpY2VyIiwic2V0T2ZmaWNlciIsIm9mZmljZXJuYW1lIiwic2V0T2ZmaWNlcm5hbWUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWxhZGQiLCJzZXRFbWFpbGFkZCIsImNvcnBvcmF0ZW5hbWUxIiwic2V0Q29ycG9yYXRlbmFtZTEiLCJjb3Jwb3JhdGVwb3NpdGlvbjEiLCJzZXRDb3Jwb3JhdGVwb3NpdGlvbjEiLCJjb3Jwb3JhdGVuYW1lMiIsInNldENvcnBvcmF0ZW5hbWUyIiwiY29ycG9yYXRlcG9zaXRpb24yIiwic2V0Q29ycG9yYXRlcG9zaXRpb24yIiwiY29ycG9yYXRlbmFtZTMiLCJzZXRDb3Jwb3JhdGVuYW1lMyIsImNvcnBvcmF0ZXBvc2l0aW9uMyIsInNldENvcnBvcmF0ZXBvc2l0aW9uMyIsIm5ld2NvcnBvcmF0ZSIsInNldE5ld2NvcnBvcmF0ZSIsImVycm9yMSIsInNldEVycm9yMSIsImVycm9yMiIsInNldEVycm9yMiIsImVycm9yMyIsInNldEVycm9yMyIsImVycm9yNCIsInNldEVycm9yNCIsImVycm9yNSIsInNldEVycm9yNSIsImVycm9yNiIsInNldEVycm9yNiIsImVycm9yNyIsInNldEVycm9yNyIsImxpc3RpbnZlc3RtZW50b2JqZWN0aXZlcyIsInNldExpc3RpbnZlc3RtZW50b2JqZWN0aXZlcyIsImxpc3R0b3RhbGFzc2V0cyIsInNldGxpc3RUb3RhbGFzc2V0cyIsImxpc3Rhbm51YWxpbmNvbWUiLCJzZXRMaXN0YW5udWFsaW5jb21lIiwibGlzdGZ1bmRzIiwic2V0TGlzdGZ1bmRzIiwibGlzdG5ldHdvcnRoIiwic2V0TGlzdG5ldHdvcnRoIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiY2xpZW50cGljIiwic2V0Q2xpZW50cGljIiwiam9pbnRob2xkZXIiLCJzZXRKb2ludGhvbGRlciIsImpvaW50aG9sZGVycGljIiwic2V0Sm9pbnRob2xkZXJwaWMiLCJ2YWxpZGlkMSIsInNldFZhbGlkaWQxIiwidmFsaWRpZDFwaWMiLCJzZXRWYWxpZGlkMXBpYyIsInZhbGlkaWQyIiwic2V0VmFsaWRpZDIiLCJ2YWxpZGlkMnBpYyIsInNldFZhbGlkaWQycGljIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJwcm9maWxlcGljIiwic2V0UHJvZmlsZXBpYyIsImlucHV0RmlsZVJlZiIsInVzZVJlZiIsImlucHV0RmlsZVJlZjEiLCJpbnB1dEZpbGVSZWYyIiwiaW5wdXRGaWxlUmVmMyIsImlucHV0RmlsZVJlZjQiLCJvbkJ0bkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwib25CdG5DbGljazEiLCJvbkJ0bkNsaWNrMiIsIm9uQnRuQ2xpY2szIiwib25CdG5DbGljazQiLCJ0cnlsYW5nIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhdmVhY2NvdW50IiwiaGVhZGVycyIsIkFjY2VwdCIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibW9tZW50IiwiZm9ybWF0IiwiYXBpVXJsX2FkZF9hY2NvdW50IiwiYXBwZ2xvYmFsIiwiYXBpIiwiYmFzZV9hcGkiLCJhZGRfYWNjb3VudCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJwYWlyIiwiJCIsIm1vZGFsIiwic3dhbCIsIm1hcmdpblRvcCIsImNhdGNoIiwiaGFuZGxlRmlsZSIsImZpbGUiLCJmaWxlcyIsImF0dHIiLCJoYW5kbGVGaWxlMSIsImhhbmRsZUZpbGUyIiwiaGFuZGxlRmlsZTMiLCJoYW5kbGVGaWxlNCIsInNldEFjY291bnQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NOYW1lIiwiY2hhbmdlRm5hbWUiLCJjaGFuZ2VNbmFtZSIsImNoYW5nZUxuYW1lIiwiY2hhbmdlVGVsbnVtIiwiY2hhbmdlTW9iaWxlbnVtIiwiY2hhbmdlQmlydGhwbGFjZSIsImNoYW5nZUFkZHJlc3MiLCJjaGFuZ2VCaXJ0aGRhdGUiLCJkYXRlIiwiZmlsdGVyIiwiZGlmZiIsImNoYW5nZXRpbiIsImNoYW5nZU5hdGlvbmFsaXR5IiwiY2hhbmdlR2VuZGVyIiwibGFiZWwiLCJjaGFuZ2VDaXZpbCIsImNoYW5nZUVtcGxveWVyIiwiY2hhbmdlSm9idGl0bGUiLCJjaGFuZ2VCdXNhZGQiLCJjaGFuZ2VCYW5rIiwiY2hhbmdlQnJhbmNoIiwiY2hhbmdlQWNjb3VudG5hbWUiLCJjaGFuZ2VBY2NvdW50bnVtYmVyIiwiY2hhbmdlSW52ZXN0bWVudG9iamVjdGl2ZSIsImNoYW5nZVNvdXJjZW9mZnVuZHMiLCJjaGFuZ2VUb3RhbGFzc2V0cyIsImNoYW5nZUFubnVhbGluY29tZSIsImNoYW5nZU5ldHdvcnRoIiwiY2hhbmdlQXNzIiwiY2hhbmdlT2ZmaWNlciIsImNoYW5nZUFzc2NvbXBhbnkiLCJjaGFuZ2VPZmZpY2VybmFtZSIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlRW1haWxhZGQiLCJjaGFuZ2VDb3Jwb3JhdGVuYW1lMSIsImNoYW5nZUNvcnBvcmF0ZXBvc2l0aW9uMSIsImNoYW5nZUNvcnBvcmF0ZW5hbWUyIiwiY2hhbmdlQ29ycG9yYXRlcG9zaXRpb24yIiwiY2hhbmdlQ29ycG9yYXRlbmFtZTMiLCJjaGFuZ2VDb3Jwb3JhdGVwb3NpdGlvbjMiLCJsaXN0eWVhciIsImxpc3Rzb3VyY2VmdW5kcyIsIm9wdGlvbnNfZ2VuZGVyIiwib3B0aW9uc19jaXZpbHN0YXR1cyIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsImN1c3RvbVN0eWxlc19lcnJvciIsImN1c3RvbVN0eWxlc19iaXJ0aCIsIm5leHRGb3JtIiwiaXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmFkZUluIiwiaGlkZSIsInNjcm9sbFRvcCIsInNob3ciLCJlbXB0eSIsImVhY2giLCJjbGVhciIsImNvcnBvcmF0ZV9uYW1lIiwiY29ycG9yYXRlX3Bvc2l0aW9uIiwiYXBpVXJsX2NoZWNrX3VzZXIiLCJjaGVja191c2VyX2V4aXN0IiwiZW1haWwiLCJyZXNwb25zZSIsImh0bWwiLCJwcmV2Rm9ybSIsImxlbmd0aCIsInVzZUVmZmVjdCIsImFwaVVybF9mZXRjaF9hY2NvdW50cyIsImFjY291bnRfdHlwZXMiLCJhcGlVcmxfYW5udWFsX2luY29tZSIsImFubnVhbF9pbmNvbWUiLCJhcGlVcmxfaW52ZXN0bWVudF9vYmplY3RpdmVzIiwiaW52ZXN0bWVudF9vYmplY3RpdmUiLCJhcGlVcmxfc291cmNlX29mX2Z1bmRzIiwic291cmNlX29mX2Z1bmRzIiwiYXBpVXJsX3RvdGFsX2Fzc2V0cyIsInRvdGFsX2Fzc2V0cyIsImFwaVVybF9uZXRfd29ydGgiLCJuZXRfd29ydGgiLCJmdW5kcyIsImZhZGVPdXQiLCJwYWRkaW5nVG9wIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBoZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8dGl0bGU+QUFBIEVxdWl0aWVzPC90aXRsZT5cclxuICBcclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIkNzcy9pbmRleC5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb21lbnQuanMvMi4yNC4wL21vbWVudC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtNGlRWjZCVkw0cU5LbFEyN1RFeEVoQk4xSEZQdkF2QU1iRmF2S0tvc1NXUT1cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcblxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEyNTYtUVdvN0xEdnhiV1QydGJiUTk3QjUzeUpuWVUzV2hIL0M4eWNiUkFralBEYz1cIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LU9nVlJ2dUFUUDF6N0pqSExrdU9VN1h3NzA0K2g4MzVMcis2UUw5VXZZalpFM0lwdTZUcDc1ajdCaC9rUjBKS0lcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjEvY3NzL2FsbC5taW4uY3NzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICBcclxuIFxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzQuMS4xL2FuaW1hdGUubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBuYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgZml4ZWQtdG9wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweCAyMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvaW1nbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICBjb25zdCBsb2NhbGVEb21haW4gPSBnZXREb21haW5Mb2NhbGUoXG4gICAgICBhcyxcbiAgICAgIGN1ckxvY2FsZSxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoXG4gICAgICAgICAgYWRkTG9jYWxlKGRlbEJhc2VQYXRoKHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lKSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICAgICAgaGFzQmFzZVBhdGgocmVzb2x2ZWRBcykgPyBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgICAgICkucGF0aG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKHJlc29sdmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHwgKG9wdGlvbnMuc2Nyb2xsID8geyB4OiAwLCB5OiAwIH0gOiBudWxsKVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhc1BhdGgsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWU6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlLmluY2x1ZGVzKCc6JykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2BcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsICdnJyksIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwgJ2cnKSxcbiAgICAgICAgICBgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YFxuICAgICAgICApXG4gICAgfVxuICB9XG4gIHZhbHVlID0gdmFsdWVcbiAgICAucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCAnXFxcXCQxJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywgJysnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywgJzonKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywgJz8nKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csICcqJylcblxuICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgLy8gY29ycmVjdGx5XG4gIHJldHVybiBwYXRoVG9SZWdleHBcbiAgICAuY29tcGlsZShgLyR7dmFsdWV9YCwgeyB2YWxpZGF0ZTogZmFsc2UgfSkocGFyYW1zKVxuICAgIC5zdWJzdHIoMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgY29uc3QgaGFkTG9jYWxlID0gcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGNvbXBpbGVOb25QYXRoKHZhbHVlLCBwYXJhbXMpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgbGV0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICAvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbiAgaWYgKGhhZExvY2FsZSkge1xuICAgIHBhcmFtS2V5cyA9IHBhcmFtS2V5cy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICduZXh0SW50ZXJuYWxMb2NhbGUnKVxuICB9XG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIChwYXJzZWREZXN0aW5hdGlvbiBhcyBhbnkpLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uLy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMobm9ybWFsaXplTG9jYWxlUGF0aChhc1BhdGgsIGxvY2FsZXMpLnBhdGhuYW1lKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGNvbnN0IGZzUGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCksXG4gICAgICAgICAgbG9jYWxlc1xuICAgICAgICApLnBhdGhuYW1lXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoZnNQYXRobmFtZSlcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGFzUGF0aCA9IGZzUGF0aG5hbWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50L25hdmJhclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgZ2V0QXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkuc2VydmljZVwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgW2FjY291bnR0eXBlLCBzZXRBY2NvdW50dHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlzdGFjY291bnR0eXBlLCBzZXRMaXN0YWNjb3VudHR5cGVdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmbmFtZSwgc2V0Rm5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xuYW1lLCBzZXRMbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW5hbWUsIHNldE1uYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0ZWxudW0sIHNldFRlbG51bV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9iaWxlbnVtLCBzZXRNb2JpbGVudW1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JpcnRocGxhY2UsIHNldEJpcnRocGxhY2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JpcnRodERhdGUsIHNldEJpcnRoZGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGluLCBzZXRUaW5dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25hdGlvbmFsaXR5LCBzZXROYXRpb25hbGl0eV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2dlbmRlcnBpY2ssIHNldEdlbmRlcnBpY2tdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjaXZpbHN0YXR1cywgc2V0Q2l2aWxzdGF0dXNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Npdmlsc3RhdHVzcGljaywgc2V0Q2l2aWxzdGF0dXNwaWNrXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZW1wbG95ZXIsIHNldEVtcGxveWVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtqb2J0aXRsZSwgc2V0Sm9idGl0bGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1c2FkZCwgc2V0QnVzYWRkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcnNlbGVjdGdlbmRlciwgc2V0RXJyb3JzZWxlY3RnZW5kZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yc2VsZWN0Y2l2aWwsIHNldEVycm9yc2VsZWN0Y2l2aWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JhbmssIHNldEJhbmtdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JyYW5jaCwgc2V0QnJhY2hdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FjY291bnRuYW1lLCBzZXRBY2NvdW50bmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWNjb3VudG51bWJlciwgc2V0QWNjb3VudG51bWJlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW52ZXN0bWVudG9iamVjdGl2ZSwgc2V0SW52ZXN0bWVudG9iamVjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc291cmNlb2ZmdW5kcywgc2V0U291cmNlb2ZmdW5kc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc291cmNlb2ZmdW5kc3BpY2ssIHNldFNvdXJjZW9mZnVuZHNwaWNrXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b3RhbGFzc2V0cywgc2V0VG90YWxhc3NldHNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FubnVhbGluY29tZSwgc2V0QW5udWFsaW5jb21lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXR3b3J0aCwgc2V0TmV0d29ydGhdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yc2VsZWN0ZnVuZHMsIHNldEVycm9yc2VsZWN0ZnVuZHNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Fzc29jaWF0ZWQsIHNldEFzc29jaWF0ZWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Fzc29jaWF0ZWRjb21wYW55LCBzZXRBc3NvY2lhdGVkY29tcGFueV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb2ZmaWNlciwgc2V0T2ZmaWNlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb2ZmaWNlcm5hbWUsIHNldE9mZmljZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsYWRkLCBzZXRFbWFpbGFkZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29ycG9yYXRlbmFtZTEsIHNldENvcnBvcmF0ZW5hbWUxXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb3Jwb3JhdGVwb3NpdGlvbjEsIHNldENvcnBvcmF0ZXBvc2l0aW9uMV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29ycG9yYXRlbmFtZTIsIHNldENvcnBvcmF0ZW5hbWUyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb3Jwb3JhdGVwb3NpdGlvbjIsIHNldENvcnBvcmF0ZXBvc2l0aW9uMl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29ycG9yYXRlbmFtZTMsIHNldENvcnBvcmF0ZW5hbWUzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb3Jwb3JhdGVwb3NpdGlvbjMsIHNldENvcnBvcmF0ZXBvc2l0aW9uM10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3RbbmV3Y29ycG9yYXRlLCBzZXROZXdjb3Jwb3JhdGVdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlcnJvcjEsIHNldEVycm9yMV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IyLCBzZXRFcnJvcjJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yMywgc2V0RXJyb3IzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcjQsIHNldEVycm9yNF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3I1LCBzZXRFcnJvcjVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yNiwgc2V0RXJyb3I2XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcjcsIHNldEVycm9yN10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbXHJcbiAgICBsaXN0aW52ZXN0bWVudG9iamVjdGl2ZXMsXHJcbiAgICBzZXRMaXN0aW52ZXN0bWVudG9iamVjdGl2ZXMsXHJcbiAgXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdHRvdGFsYXNzZXRzLCBzZXRsaXN0VG90YWxhc3NldHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0YW5udWFsaW5jb21lLCBzZXRMaXN0YW5udWFsaW5jb21lXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdGZ1bmRzLCBzZXRMaXN0ZnVuZHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0bmV0d29ydGgsIHNldExpc3RuZXR3b3J0aF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2xpZW50cGljLCBzZXRDbGllbnRwaWNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2pvaW50aG9sZGVyLCBzZXRKb2ludGhvbGRlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbam9pbnRob2xkZXJwaWMsIHNldEpvaW50aG9sZGVycGljXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt2YWxpZGlkMSwgc2V0VmFsaWRpZDFdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZhbGlkaWQxcGljLCBzZXRWYWxpZGlkMXBpY10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmFsaWRpZDIsIHNldFZhbGlkaWQyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt2YWxpZGlkMnBpYywgc2V0VmFsaWRpZDJwaWNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGVwaWMsIHNldFByb2ZpbGVwaWNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGlucHV0RmlsZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYxID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMyA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWY0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkJ0bkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2sxID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMiA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjIuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazMgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYzLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2s0ID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmNC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gdHJ5bGFuZygpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG5ld2NvcnBvcmF0ZSkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHNhdmVhY2NvdW50KCkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB4c3JmQ29va2llTmFtZTogXCJYU1JGLVRPS0VOXCIsXHJcbiAgICAgICAgeHNyZkhlYWRlck5hbWU6IFwiWC1YU1JGLVRPS0VOXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsYWRkKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcIm5hbWVcIiwgdXNlcm5hbWUpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlyc3RuYW1lXCIsIGZuYW1lKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImxhc3RuYW1lXCIsIGxuYW1lKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcIm1pZGRsZW5hbWVcIiwgbW5hbWUpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwidGVsZXBob25lX25vXCIsIHRlbG51bSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJtb2JpbGVfbm9cIiwgbW9iaWxlbnVtKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImFkZHJlc3NcIiwgYWRkcmVzcyk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJiaXJ0aGRhdGVcIiwgbW9tZW50KGJpcnRodERhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIikpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwidGluX25vXCIsIHRpbik7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJuYXRpb25hbGl0eVwiLCBuYXRpb25hbGl0eSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJnZW5kZXJcIiwgZ2VuZGVyKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImNpdmlsX3N0YXR1c1wiLCBjaXZpbHN0YXR1cyk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJlbXBsb3llclwiLCBlbXBsb3llcik7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJqb2JfdGl0bGVcIiwgam9idGl0bGUpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiYnVzaW5lc3NfYWRkcmVzc1wiLCBidXNhZGQpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiYWNjb3VudF90eXBlXCIsIGFjY291bnR0eXBlKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImJhbmtfbmFtZVwiLCBiYW5rKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImJyYW5jaF9uYW1lXCIsIGJyYW5jaCk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJhY2NvdW50X25hbWVcIiwgYWNjb3VudG5hbWUpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiYWNjb3VudF9udW1iZXJcIiwgYWNjb3VudG51bWJlcik7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJpbnZlc3RtZW50X29iamVjdGl2ZVwiLCBpbnZlc3RtZW50b2JqZWN0aXZlKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcInNvdXJjZV9vZl9mdW5kc1wiLCBzb3VyY2VvZmZ1bmRzKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcInRvdGFsX2Fzc2V0c1wiLCB0b3RhbGFzc2V0cyk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJhbm51YWxfaW5jb21lXCIsIGFubnVhbGluY29tZSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJuZXRfd29ydGhcIiwgbmV0d29ydGgpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiaXNfYXNzb2NpYXRlZFwiLCBhc3NvY2lhdGVkKTtcclxuICAgIGlmIChhc3NvY2lhdGVkID09IFwiMVwiKSB7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImFzc29jaWF0ZV9jb21wYW55X25hbWVcIiwgYXNzb2NpYXRlZGNvbXBhbnkpO1xyXG4gICAgfVxyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiaXNfb2ZmaWNlcl9kaXJlY3RvclwiLCBvZmZpY2VyKTtcclxuICAgIGlmIChvZmZpY2VyID09IFwiMVwiKSB7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcIm9mZmljZXJfZGlyZWN0b3JfY29tcGFueV9uYW1lXCIsIG9mZmljZXJuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWNjb3VudHR5cGUgPT0gXCIzXCIpIHtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiY29ycG9yYXRlX2FjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KG5ld2NvcnBvcmF0ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiY29ycG9yYXRlX2FjY291bnRzXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiY2xpZW50X3NpZ25hdHVyZV9pbWFnZVwiLCBjbGllbnQsIGNsaWVudC5uYW1lKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcclxuICAgICAgXCJqb2ludF9hY2NvdW50X3NpZ25hdHVyZV9pbWFnZVwiLFxyXG4gICAgICBqb2ludGhvbGRlcixcclxuICAgICAgam9pbnRob2xkZXIubmFtZVxyXG4gICAgKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcInZhbGlkX2lkX29uZVwiLCB2YWxpZGlkMSwgdmFsaWRpZDEubmFtZSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJ2YWxpZF9pZF90d29cIiwgdmFsaWRpZDIsIHZhbGlkaWQyLm5hbWUpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwic2VsZl9pbWFnZVwiLCBwcm9maWxlLCBwcm9maWxlLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGFwaVVybF9hZGRfYWNjb3VudCA9XHJcbiAgICAgIGFwcGdsb2JhbC5hcGkuYmFzZV9hcGkgKyBhcHBnbG9iYWwuYXBpLmFkZF9hY2NvdW50O1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGFwaVVybF9hZGRfYWNjb3VudCwgZm9ybWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBmb3IgKHZhciBwYWlyIG9mIGZvcm1kYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocGFpclswXSArIFwiLCBcIiArIHBhaXJbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICQoXCIjbW9kYWxWZXJpZnlcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIHN3YWwoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMjBweCA4cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9jaGVjay5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiwgbWFyZ2luVG9wOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+U3VjY2VzczwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+QWNjb3VudCBzdWNjZXNmdWxseSBjcmVhdGVkLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5Zb3VyIHByb2ZpbGUgY2Fubm90IGJlIHNhdmVkLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc29sZS5sb2coZmlsZS5uYW1lKTtcclxuICAgICQoXCIucFVwbG9hZGNsaWVudFwiKS50ZXh0KGZpbGUubmFtZSk7XHJcbiAgICBzZXRDbGllbnRwaWMoZmlsZS5uYW1lKTtcclxuICAgIHNldENsaWVudChmaWxlKTtcclxuICAgICQoXCIuZGl2Q2xpZW50XCIpLmF0dHIoXCJzdHlsZVwiLCBcIjJweCBzb2xpZCAjOTA5OEE5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTEoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUubmFtZSk7XHJcbiAgICAkKFwiLnBVcGxvYWRqb2ludFwiKS50ZXh0KGZpbGUubmFtZSk7XHJcbiAgICBzZXRKb2ludGhvbGRlcnBpYyhmaWxlLm5hbWUpO1xyXG4gICAgc2V0Sm9pbnRob2xkZXIoZmlsZSk7XHJcbiAgICAkKFwiLmRpdkpvaW50XCIpLmF0dHIoXCJzdHlsZVwiLCBcIjJweCBzb2xpZCAjOTA5OEE5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTIoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUubmFtZSk7XHJcbiAgICAkKFwiLnBVcGxvYWR2YWxpZDFcIikudGV4dChmaWxlLm5hbWUpO1xyXG4gICAgc2V0VmFsaWRpZDFwaWMoZmlsZS5uYW1lKTtcclxuICAgIHNldFZhbGlkaWQxKGZpbGUpO1xyXG4gICAgJChcIi5kaXZWYWxpZDFcIikuYXR0cihcInN0eWxlXCIsIFwiMnB4IHNvbGlkICM5MDk4QTlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWxlMyhlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc29sZS5sb2coZmlsZS5uYW1lKTtcclxuICAgICQoXCIucFVwbG9hZHZhbGlkMlwiKS50ZXh0KGZpbGUubmFtZSk7XHJcbiAgICBzZXRWYWxpZGlkMnBpYyhmaWxlLm5hbWUpO1xyXG4gICAgc2V0VmFsaWRpZDIoZmlsZSk7XHJcbiAgICAkKFwiLmRpdlZhbGlkMlwiKS5hdHRyKFwic3R5bGVcIiwgXCIycHggc29saWQgIzkwOThBOVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGU0KGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlLm5hbWUpO1xyXG4gICAgJChcIi5wUHJvZmlsZXBpY1wiKS50ZXh0KGZpbGUubmFtZSk7XHJcbiAgICBzZXRQcm9maWxlcGljKGZpbGUubmFtZSk7XHJcbiAgICBzZXRQcm9maWxlKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0QWNjb3VudChlKSB7XHJcbiAgICBzZXRBY2NvdW50dHlwZShlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlRm5hbWUoZSkge1xyXG4gICAgc2V0Rm5hbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VNbmFtZShlKSB7XHJcbiAgICBzZXRNbmFtZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlTG5hbWUoZSkge1xyXG4gICAgc2V0TG5hbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZVRlbG51bShlKSB7XHJcbiAgICBzZXRUZWxudW0oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZU1vYmlsZW51bShlKSB7XHJcbiAgICBzZXRNb2JpbGVudW0oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUJpcnRocGxhY2UoZSkge1xyXG4gICAgc2V0QmlydGhwbGFjZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQWRkcmVzcyhlKSB7XHJcbiAgICBzZXRBZGRyZXNzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VCaXJ0aGRhdGUoZGF0ZSkge1xyXG4gICAgY29uc29sZS5sb2cobW9tZW50KGRhdGUpLmZvcm1hdChcImxcIikpO1xyXG4gICAgdmFyIGZpbHRlciA9IChtb21lbnQoKS5kaWZmKGRhdGUsJ3llYXJzJykpO1xyXG4gICAgaWYgKGZpbHRlciA+IDE3KSB7XHJcbiAgICAgIHNldEJpcnRoZGF0ZShkYXRlKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMjBweCA4cHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiwgbWFyZ2luVG9wOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPk9vb29wcyE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5NdXN0IGJlIDE4eXJzIG9sZCBhYm92ZS48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAkKFwiLnJlYWN0LWRhdGVwaWNrZXJfX2lucHV0LWNvbnRhaW5lclwiKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZXRpbihlKSB7XHJcbiAgICBzZXRUaW4oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZU5hdGlvbmFsaXR5KGUpIHtcclxuICAgIHNldE5hdGlvbmFsaXR5KGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VHZW5kZXIoZSkge1xyXG4gICAgc2V0R2VuZGVyKGUubGFiZWwpO1xyXG4gICAgc2V0R2VuZGVycGljayh7IHZhbHVlOiBlLnZhbHVlLCBsYWJlbDogZS5sYWJlbCB9KTtcclxuICAgIGNvbnNvbGUubG9nKGUubGFiZWwpO1xyXG4gICAgc2V0RXJyb3JzZWxlY3RnZW5kZXIoXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VDaXZpbChlKSB7XHJcbiAgICBzZXRDaXZpbHN0YXR1cyhlLmxhYmVsKTtcclxuICAgIHNldENpdmlsc3RhdHVzcGljayh7IHZhbHVlOiBlLnZhbHVlLCBsYWJlbDogZS5sYWJlbCB9KTtcclxuICAgIHNldEVycm9yc2VsZWN0Y2l2aWwoXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VFbXBsb3llcihlKSB7XHJcbiAgICBzZXRFbXBsb3llcihlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlSm9idGl0bGUoZSkge1xyXG4gICAgc2V0Sm9idGl0bGUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUJ1c2FkZChlKSB7XHJcbiAgICBzZXRCdXNhZGQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUJhbmsoZSkge1xyXG4gICAgc2V0QmFuayhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQnJhbmNoKGUpIHtcclxuICAgIHNldEJyYWNoKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VBY2NvdW50bmFtZShlKSB7XHJcbiAgICBzZXRBY2NvdW50bmFtZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQWNjb3VudG51bWJlcihlKSB7XHJcbiAgICBzZXRBY2NvdW50bnVtYmVyKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VJbnZlc3RtZW50b2JqZWN0aXZlKGUpIHtcclxuICAgIHNldEludmVzdG1lbnRvYmplY3RpdmUoZS5jdXJyZW50VGFyZ2V0LmlkKTtcclxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlU291cmNlb2ZmdW5kcyhlKSB7XHJcbiAgICBzZXRTb3VyY2VvZmZ1bmRzKGUudmFsdWUpO1xyXG4gICAgc2V0U291cmNlb2ZmdW5kc3BpY2soeyB2YWx1ZTogZS52YWx1ZSwgbGFiZWw6IGUubGFiZWwgfSk7XHJcbiAgICBzZXRFcnJvcnNlbGVjdGZ1bmRzKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlVG90YWxhc3NldHMoZSkge1xyXG4gICAgc2V0VG90YWxhc3NldHMoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VBbm51YWxpbmNvbWUoZSkge1xyXG4gICAgc2V0QW5udWFsaW5jb21lKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlTmV0d29ydGgoZSkge1xyXG4gICAgc2V0TmV0d29ydGgoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VBc3MoZSkge1xyXG4gICAgc2V0QXNzb2NpYXRlZChlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09IFwiMFwiKSB7XHJcbiAgICAgIHNldEFzc29jaWF0ZWRjb21wYW55KFwiXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlT2ZmaWNlcihlKSB7XHJcbiAgICBzZXRPZmZpY2VyKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUpO1xyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT0gXCIwXCIpIHtcclxuICAgICAgc2V0T2ZmaWNlcm5hbWUoXCJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VBc3Njb21wYW55KGUpIHtcclxuICAgIHNldEFzc29jaWF0ZWRjb21wYW55KGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VPZmZpY2VybmFtZShlKSB7XHJcbiAgICBzZXRPZmZpY2VybmFtZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgc2V0VXNlcm5hbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUVtYWlsYWRkKGUpIHtcclxuICAgIHNldEVtYWlsYWRkKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VDb3Jwb3JhdGVuYW1lMShlKSB7XHJcbiAgICBzZXRDb3Jwb3JhdGVuYW1lMShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ29ycG9yYXRlcG9zaXRpb24xKGUpIHtcclxuICAgIHNldENvcnBvcmF0ZXBvc2l0aW9uMShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ29ycG9yYXRlbmFtZTIoZSkge1xyXG4gICAgc2V0Q29ycG9yYXRlbmFtZTIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUNvcnBvcmF0ZXBvc2l0aW9uMihlKSB7XHJcbiAgICBzZXRDb3Jwb3JhdGVwb3NpdGlvbjIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUNvcnBvcmF0ZW5hbWUzKGUpIHtcclxuICAgIHNldENvcnBvcmF0ZW5hbWUzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VDb3Jwb3JhdGVwb3NpdGlvbjMoZSkge1xyXG4gICAgc2V0Q29ycG9yYXRlcG9zaXRpb24zKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0eWVhciA9IFtdO1xyXG4gIGNvbnN0IGxpc3Rzb3VyY2VmdW5kcyA9IFtdO1xyXG5cclxuICBjb25zdCBvcHRpb25zX2dlbmRlciA9IFtcclxuICAgIHsgdmFsdWU6IFwiTWFsZVwiLCBsYWJlbDogXCJNYWxlXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiRmVtYWxlXCIsIGxhYmVsOiBcIkZlbWFsZVwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc19jaXZpbHN0YXR1cyA9IFtcclxuICAgIHsgdmFsdWU6IFwiU2luZ2xlXCIsIGxhYmVsOiBcIlNpbmdsZVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk1hcnJpZWRcIiwgbGFiZWw6IFwiTWFycmllZFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkRpdm9yY2VkXCIsIGxhYmVsOiBcIkRpdm9yY2VkXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiV2lkb3dlZFwiLCBsYWJlbDogXCJXaWRvd2VkXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2VjZWNlXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwiIzIxMjEyMVwiLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzX2Vycm9yID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBjb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwiIzIxMjEyMVwiLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzX2JpcnRoID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBjb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NlY2VjZVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG5leHRGb3JtKCkge1xyXG4gICAgaWYgKCQoXCIuZGl2Rm9ybTFcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKCFhY2NvdW50dHlwZSkge1xyXG4gICAgICAgIHN3YWwoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMjBweCA4cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9lcnJvci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiwgbWFyZ2luVG9wOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+T29vb3BzITwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+UGxlYXNlIHNlbGVjdCBhbiBhY2NvdW50IHR5cGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmICghJChcIiNjYnhcIikuaXMoXCI6Y2hlY2tlZFwiKSB8fCAhJChcIiNjYngxXCIpLmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgYWdncmVlIHRvIG91ciB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhbmQgcHJpdmFjeVxyXG4gICAgICAgICAgICAgICAgICAgIHBvbGljeS5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbEltYWdlXCIpLmFkZENsYXNzKFwiY29sLXNtLTQgY29sLTRcIik7XHJcbiAgICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsIFwiNTBweFwiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlMlwiKS5hZGRDbGFzcyhcImNpcmNsZWFjdGl2ZW1vYmlsZVwiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlMVwiKS5hZGRDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZW1vYmlsZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICAkKFwiLmltZ0NpcmNsZTJcIikuY3NzKFwid2lkdGhcIiwgXCIyNXB4XCIpO1xyXG4gICAgICAgICAgJChcIi5pbWdDaXJjbGUxXCIpLmNzcyhcIndpZHRoXCIsIFwiMTVweFwiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlMlwiKS5yZW1vdmVDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZVwiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlMVwiKS5hZGRDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIi5jb2xMZWZ0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLTZcIik7XHJcbiAgICAgICAgJChcIi5jb2xMZWZ0XCIpLmFkZENsYXNzKFwiY29sLWxnLThcIik7XHJcbiAgICAgICAgJChcIi5jb2xSaWdodFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy02XCIpO1xyXG4gICAgICAgICQoXCIuY29sUmlnaHRcIikuYWRkQ2xhc3MoXCJjb2wtbGctNFwiKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm0yXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTFcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjUwMHB4XCIpO1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvZm9ybTIuc3ZnXCIpO1xyXG4gICAgICAgICQoXCIucEZvcm0xXCIpLmZhZGVJbigyMDApO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgICQoXCIuY29sQmFja1wiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtMlwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWZuYW1lIHx8XHJcbiAgICAgICAgIW1uYW1lIHx8XHJcbiAgICAgICAgIWxuYW1lIHx8XHJcbiAgICAgICAgIXRlbG51bSB8fFxyXG4gICAgICAgICFtb2JpbGVudW0gfHxcclxuICAgICAgICAhYmlydGhwbGFjZSB8fFxyXG4gICAgICAgICFhZGRyZXNzIHx8XHJcbiAgICAgICAgIWJpcnRodERhdGVcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3dhbChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Pb29vcHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIG1pc3NpbmcgZmllbGRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBlbXB0eSA9IDA7XHJcbiAgICAgICAgJChcIi50eHRGb3JtMlwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZW1wdHkrKztcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghYmlydGh0RGF0ZSkge1xyXG4gICAgICAgICAgJChcIi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC1jb250YWluZXJcIikuY3NzKFxyXG4gICAgICAgICAgICBcImJvcmRlclwiLFxyXG4gICAgICAgICAgICBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtM1wiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm0yXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI0NTBweFwiKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsIFwiLTQwcHhcIik7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0zXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhZ2VuZGVyIHx8XHJcbiAgICAgICAgIXRpbiB8fFxyXG4gICAgICAgICFuYXRpb25hbGl0eSB8fFxyXG4gICAgICAgICFjaXZpbHN0YXR1cyB8fFxyXG4gICAgICAgICFlbXBsb3llciB8fFxyXG4gICAgICAgICFqb2J0aXRsZSB8fFxyXG4gICAgICAgICFidXNhZGRcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3dhbChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Pb29vcHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIG1pc3NpbmcgZmllbGRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBlbXB0eSA9IDA7XHJcbiAgICAgICAgJChcIi50eHRGb3JtM1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZW1wdHkrKztcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWdlbmRlcikge1xyXG4gICAgICAgICAgc2V0RXJyb3JzZWxlY3RnZW5kZXIoXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNpdmlsc3RhdHVzKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnNlbGVjdGNpdmlsKFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNTAxKSB7XHJcbiAgICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiNTAlXCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xJbWFnZVwiKS5hZGRDbGFzcyhcImNvbC1zbS00IGNvbC00XCIpO1xyXG4gICAgICAgICAgJChcIi5ib3hcIikuY3NzKFwibWFyZ2luLXRvcFwiLCBcIjUwcHhcIik7XHJcbiAgICAgICAgICAkKFwiLmNpcmNsZTNcIikuYWRkQ2xhc3MoXCJjaXJjbGVhY3RpdmVtb2JpbGVcIik7XHJcbiAgICAgICAgICAkKFwiLmNpcmNsZTJcIikuYWRkQ2xhc3MoXCJjaXJjbGVub3RhY3RpdmVtb2JpbGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIuaW1nQ2lyY2xlM1wiKS5jc3MoXCJ3aWR0aFwiLCBcIjI1cHhcIik7XHJcbiAgICAgICAgICAkKFwiLmltZ0NpcmNsZTJcIikuY3NzKFwid2lkdGhcIiwgXCIxNXB4XCIpO1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuYXR0cihcInNyY1wiLCBcIkltYWdlL2Zvcm0zLnN2Z1wiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlM1wiKS5yZW1vdmVDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZVwiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlMlwiKS5hZGRDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIi5kaXZGb3JtNFwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm0zXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI1MjBweFwiKTtcclxuXHJcbiAgICAgICAgJChcIi5wRm9ybVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib3hcIikuY3NzKFwibWFyZ2luLXRvcFwiLCBcIjEwcHhcIik7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAkKFwiLnBGb3JtMlwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm00XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhYmFuayB8fFxyXG4gICAgICAgICFicmFuY2ggfHxcclxuICAgICAgICAhYWNjb3VudG51bWJlciB8fFxyXG4gICAgICAgICFhY2NvdW50bmFtZSB8fFxyXG4gICAgICAgICFpbnZlc3RtZW50b2JqZWN0aXZlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHN3YWwoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMjBweCA4cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9lcnJvci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiwgbWFyZ2luVG9wOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+T29vb3BzITwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGZpbGwgdXAgYWxsIHRoZSBtaXNzaW5nIGZpZWxkcy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgZW1wdHkgPSAwO1xyXG4gICAgICAgICQoXCIudHh0Rm9ybTRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGVtcHR5Kys7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmRpdkZvcm01XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTRcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjU1MHB4XCIpO1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtNVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoIXNvdXJjZW9mZnVuZHMgfHwgIXRvdGFsYXNzZXRzIHx8ICFhbm51YWxpbmNvbWUgfHwgIW5ldHdvcnRoKSB7XHJcbiAgICAgICAgc3dhbChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Pb29vcHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIG1pc3NpbmcgZmllbGRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghc291cmNlb2ZmdW5kcykge1xyXG4gICAgICAgICAgc2V0RXJyb3JzZWxlY3RmdW5kcyhcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTZcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtNVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiNTUwcHhcIik7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm02XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFzc29jaWF0ZWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhvZmZpY2VyKTtcclxuICAgICAgaWYgKCFhc3NvY2lhdGVkIHx8ICFvZmZpY2VyKSB7XHJcbiAgICAgICAgc3dhbChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Pb29vcHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIG1pc3NpbmcgZmllbGRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKGFzc29jaWF0ZWQgPT0gXCIxXCIgJiYgIWFzc29jaWF0ZWRjb21wYW55KSB7XHJcbiAgICAgICAgJChcIi50eHRhc3NcIikuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChvZmZpY2VyID09IFwiMVwiICYmICFvZmZpY2VybmFtZSkge1xyXG4gICAgICAgICQoXCIudHh0b2ZmaWNlcm5hbWVcIikuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYWNjb3VudHR5cGUgPT0gXCIzXCIpIHtcclxuICAgICAgICAgICQoXCIuY29sTGVmdFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy04XCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xMZWZ0XCIpLmFkZENsYXNzKFwiY29sLWxnLTZcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbFJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLTRcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbFJpZ2h0XCIpLmFkZENsYXNzKFwiY29sLWxnLTZcIik7XHJcbiAgICAgICAgICAkKFwiLmRpdkZvcm03XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgJChcIi5kaXZGb3JtNlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI0NTBweFwiKTtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmF0dHIoXCJzcmNcIiwgXCJJbWFnZS9mb3JtNy5zdmdcIik7XHJcbiAgICAgICAgICAkKFwiLnBGb3JtXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIucEZvcm03XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNTAxKSB7XHJcbiAgICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCIzMCVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY29sSW1hZ2VcIikucmVtb3ZlQ2xhc3MoXCJjb2wtc20tNCBjb2wtNFwiKTtcclxuICAgICAgICAgICAgJChcIi5wRm9ybTdcIikuYWRkQ2xhc3MoXCJwSW1wb3J0YW50XCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbFRleHRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtc20tOCBjb2wtOFwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIi5jb2xMZWZ0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLThcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbExlZnRcIikuYWRkQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgICAgICQoXCIuY29sUmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctNFwiKTtcclxuICAgICAgICAgICQoXCIuY29sUmlnaHRcIikuYWRkQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgICAgICQoXCIuZGl2Rm9ybThcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAkKFwiLmRpdkZvcm02XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjM1MHB4XCIpO1xyXG4gICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtN1wiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICB2YXIgY2xlYXIgPSAwO1xyXG4gICAgICBpZiAoY29ycG9yYXRlbmFtZTEgJiYgIWNvcnBvcmF0ZXBvc2l0aW9uMSkge1xyXG4gICAgICAgICQoXCIudHh0cG9zaXRpb24xXCIpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCByZWRcIik7XHJcbiAgICAgICAgY2xlYXIgPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKCFjb3Jwb3JhdGVuYW1lMSAmJiBjb3Jwb3JhdGVwb3NpdGlvbjEpIHtcclxuICAgICAgICAkKFwiLnR4dG5hbWUxXCIpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCByZWRcIik7XHJcbiAgICAgICAgY2xlYXIgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb3Jwb3JhdGVuYW1lMiAmJiAhY29ycG9yYXRlcG9zaXRpb24yKSB7XHJcbiAgICAgICAgJChcIi50eHRwb3NpdGlvbjJcIikuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgICBjbGVhciA9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWNvcnBvcmF0ZW5hbWUyICYmIGNvcnBvcmF0ZXBvc2l0aW9uMikge1xyXG4gICAgICAgICQoXCIudHh0bmFtZTJcIikuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgICBjbGVhciA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvcnBvcmF0ZW5hbWUzICYmICFjb3Jwb3JhdGVwb3NpdGlvbjMpIHtcclxuICAgICAgICAkKFwiLnR4dHBvc2l0aW9uM1wiKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgIGNsZWFyID0gMTtcclxuICAgICAgfSBlbHNlIGlmICghY29ycG9yYXRlbmFtZTMgJiYgY29ycG9yYXRlcG9zaXRpb24zKSB7XHJcbiAgICAgICAgJChcIi50eHRuYW1lM1wiKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgIGNsZWFyID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNsZWFyID09IDApIHtcclxuICAgICAgICBpZiAoY29ycG9yYXRlbmFtZTEgJiYgY29ycG9yYXRlcG9zaXRpb24xKSB7XHJcbiAgICAgICAgICBuZXdjb3Jwb3JhdGUucHVzaCh7XHJcbiAgICAgICAgICAgIGNvcnBvcmF0ZV9uYW1lOiBjb3Jwb3JhdGVuYW1lMSxcclxuICAgICAgICAgICAgY29ycG9yYXRlX3Bvc2l0aW9uOiBjb3Jwb3JhdGVwb3NpdGlvbjEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3Jwb3JhdGVuYW1lMiAmJiBjb3Jwb3JhdGVwb3NpdGlvbjIpIHtcclxuICAgICAgICAgIG5ld2NvcnBvcmF0ZS5wdXNoKHtcclxuICAgICAgICAgICAgY29ycG9yYXRlX25hbWU6IGNvcnBvcmF0ZW5hbWUyLFxyXG4gICAgICAgICAgICBjb3Jwb3JhdGVfcG9zaXRpb246IGNvcnBvcmF0ZXBvc2l0aW9uMixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29ycG9yYXRlbmFtZTMgJiYgY29ycG9yYXRlcG9zaXRpb24zKSB7XHJcbiAgICAgICAgICBuZXdjb3Jwb3JhdGUucHVzaCh7XHJcbiAgICAgICAgICAgIGNvcnBvcmF0ZV9uYW1lOiBjb3Jwb3JhdGVuYW1lMyxcclxuICAgICAgICAgICAgY29ycG9yYXRlX3Bvc2l0aW9uOiBjb3Jwb3JhdGVwb3NpdGlvbjMsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDUwMSkge1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcIjMwJVwiKTtcclxuICAgICAgICAgICQoXCIuY29sSW1hZ2VcIikucmVtb3ZlQ2xhc3MoXCJjb2wtc20tNCBjb2wtNFwiKTtcclxuICAgICAgICAgICQoXCIucEZvcm03XCIpLmFkZENsYXNzKFwicEltcG9ydGFudFwiKTtcclxuICAgICAgICAgICQoXCIuY29sVGV4dFwiKS5yZW1vdmVDbGFzcyhcImNvbC1zbS04IGNvbC04XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiYXV0b1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIi5kaXZGb3JtOFwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm03XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCIzNTBweFwiKTtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybThcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKCFjbGllbnRwaWMpIHtcclxuICAgICAgICAkKFwiLmRpdkNsaWVudFwiKS5hdHRyKFwic3R5bGVcIiwgXCJib3JkZXI6IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtOVwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm04XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCIzNTBweFwiKTtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTlcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKCFqb2ludGhvbGRlcnBpYykge1xyXG4gICAgICAgICQoXCIuZGl2Sm9pbnRcIikuYXR0cihcInN0eWxlXCIsIFwiYm9yZGVyOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTEwXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTlcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjQ1MHB4XCIpO1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtMTBcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKCF2YWxpZGlkMXBpYyB8fCAhdmFsaWRpZDJwaWMpIHtcclxuICAgICAgICAkKFwiLmRpdlZhbGlkMSwgLmRpdlZhbGlkMlwiKS5hdHRyKFxyXG4gICAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgICAgXCJib3JkZXI6IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXZhbGlkaWQxcGljKSB7XHJcbiAgICAgICAgJChcIi5kaXZWYWxpZDFcIikuYXR0cihcInN0eWxlXCIsIFwiYm9yZGVyOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF2YWxpZGlkMnBpYykge1xyXG4gICAgICAgICQoXCIuZGl2VmFsaWQyXCIpLmF0dHIoXCJzdHlsZVwiLCBcImJvcmRlcjogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmRpdkZvcm0xMVwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm0xMFwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiMzAwcHhcIik7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI3MCVcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbEltYWdlXCIpLnJlbW92ZUNsYXNzKFwiY29sLXNtLTQgY29sLTRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiODAlXCIpO1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvcGhvbmUxLnBuZ1wiKTtcclxuICAgICAgICAkKFwiLnBGb3JtXCIpLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0xMVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoIXVzZXJuYW1lIHx8ICFlbWFpbGFkZCkge1xyXG4gICAgICAgIHZhciBlbXB0eSA9IDA7XHJcbiAgICAgICAgJChcIi50eHRGb3JtMTFcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGVtcHR5Kys7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB4c3JmQ29va2llTmFtZTogXCJYU1JGLVRPS0VOXCIsXHJcbiAgICAgICAgICAgIHhzcmZIZWFkZXJOYW1lOiBcIlgtWFNSRi1UT0tFTlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhcGlVcmxfY2hlY2tfdXNlciA9XHJcbiAgICAgICAgICBhcHBnbG9iYWwuYXBpLmJhc2VfYXBpICsgYXBwZ2xvYmFsLmFwaS5jaGVja191c2VyX2V4aXN0O1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICBhcGlVcmxfY2hlY2tfdXNlcixcclxuICAgICAgICAgICAgeyBwYXJhbXM6IHsgbmFtZTogdXNlcm5hbWUsIGVtYWlsOiBlbWFpbGFkZCB9IH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICQoXCIucEJveFwiKS5jc3MoXCJmb250LXNpemVcIiwgXCIyLjJyZW1cIik7XHJcbiAgICAgICAgICAgICQoXCIuZGl2Rm9ybTEyXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgICAkKFwiLmRpdkZvcm0xMVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI4MCVcIik7XHJcbiAgICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuYXR0cihcInNyY1wiLCBcIkltYWdlL3NlbGZpZS5zdmdcIik7XHJcbiAgICAgICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjMxNXB4XCIpO1xyXG4gICAgICAgICAgICAkKFwiLnBGb3JtXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5wRm9ybThcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiLmJ0bk5leHRcIikuaHRtbChcIkNSRUFURVwiKTtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+T29vb3BzITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPntlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTEyICBcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgJChcIiNtb2RhbFZlcmlmeVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgIHNhdmVhY2NvdW50KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByZXZGb3JtKCkge1xyXG4gICAgaWYgKCQoXCIuZGl2Rm9ybTJcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNTAxKSB7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcIjcwJVwiKTtcclxuICAgICAgICAkKFwiLmNvbEltYWdlXCIpLnJlbW92ZUNsYXNzKFwiY29sLXNtLTQgY29sLTRcIik7XHJcblxyXG4gICAgICAgICQoXCIuY2lyY2xlMVwiKS5hZGRDbGFzcyhcImNpcmNsZWFjdGl2ZW1vYmlsZVwiKTtcclxuXHJcbiAgICAgICAgJChcIi5jaXJjbGUyXCIpLnJlbW92ZUNsYXNzKFwiY2lyY2xlYWN0aXZlbW9iaWxlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIuY29sTGVmdFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy04XCIpO1xyXG4gICAgICAkKFwiLmNvbExlZnRcIikuYWRkQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgJChcIi5jb2xSaWdodFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy00XCIpO1xyXG4gICAgICAkKFwiLmNvbFJpZ2h0XCIpLmFkZENsYXNzKFwiY29sLWxnLTZcIik7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTFcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTJcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCIzNTBweFwiKTtcclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvcGhvbmUxLnBuZ1wiKTtcclxuICAgICAgJChcIi5wRm9ybVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuaW1nQ2lyY2xlMVwiKS5jc3MoXCJ3aWR0aFwiLCBcIjI1cHhcIik7XHJcbiAgICAgICQoXCIuaW1nQ2lyY2xlMlwiKS5jc3MoXCJ3aWR0aFwiLCBcIjE1cHhcIik7XHJcbiAgICAgICQoXCIuY2lyY2xlMVwiKS5yZW1vdmVDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZVwiKTtcclxuICAgICAgJChcIi5jaXJjbGUyXCIpLmFkZENsYXNzKFwiY2lyY2xlbm90YWN0aXZlXCIpO1xyXG4gICAgICAkKFwiLmNvbEJhY2tcIikuaGlkZSgpO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0zXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTJcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTNcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI1MDBweFwiKTtcclxuICAgICAgJChcIi5ib3hcIikuY3NzKFwibWFyZ2luLXRvcFwiLCBcIjMwcHhcIik7XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTRcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNTAxKSB7XHJcbiAgICAgICAgJChcIi5jaXJjbGUyXCIpLmFkZENsYXNzKFwiY2lyY2xlYWN0aXZlbW9iaWxlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLmNpcmNsZTNcIikucmVtb3ZlQ2xhc3MoXCJjaXJjbGVhY3RpdmVtb2JpbGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5pbWdDaXJjbGUyXCIpLmNzcyhcIndpZHRoXCIsIFwiMjVweFwiKTtcclxuICAgICAgICAkKFwiLmltZ0NpcmNsZTNcIikuY3NzKFwid2lkdGhcIiwgXCIxNXB4XCIpO1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvZm9ybTIuc3ZnXCIpO1xyXG4gICAgICAgICQoXCIuY2lyY2xlMlwiKS5yZW1vdmVDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiLmNpcmNsZTNcIikuYWRkQ2xhc3MoXCJjaXJjbGVub3RhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgJChcIi5kaXZGb3JtM1wiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgJChcIi5kaXZGb3JtNFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjQ1MHB4XCIpO1xyXG5cclxuICAgICAgJChcIi5wRm9ybTJcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLnBGb3JtMVwiKS5mYWRlSW4oMjAwKTtcclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtNVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICAkKFwiLmRpdkZvcm00XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAkKFwiLmRpdkZvcm01XCIpLmhpZGUoKTtcclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtNlwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICAkKFwiLmRpdkZvcm01XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAkKFwiLmRpdkZvcm02XCIpLmhpZGUoKTtcclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtN1wiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiNTAlXCIpO1xyXG4gICAgICAgICQoXCIuY29sSW1hZ2VcIikuYWRkQ2xhc3MoXCJjb2wtc20tNCBjb2wtNFwiKTtcclxuICAgICAgICAkKFwiLmNvbFRleHRcIikuYWRkQ2xhc3MoXCJjb2wtc20tOCBjb2wtOFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiYXV0b1wiKTtcclxuICAgICAgfVxyXG4gICAgICAkKFwiLmNvbExlZnRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgJChcIi5jb2xMZWZ0XCIpLmFkZENsYXNzKFwiY29sLWxnLThcIik7XHJcbiAgICAgICQoXCIuY29sUmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgJChcIi5jb2xSaWdodFwiKS5hZGRDbGFzcyhcImNvbC1sZy00XCIpO1xyXG4gICAgICAkKFwiLmRpdkZvcm02XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAkKFwiLmRpdkZvcm03XCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiNTUwcHhcIik7XHJcbiAgICAgICQoXCIucEZvcm03XCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5wRm9ybTJcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICQoXCIuaW1nUmlnaHRcIikuYXR0cihcInNyY1wiLCBcIkltYWdlL2Zvcm0zLnN2Z1wiKTtcclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtOFwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoYWNjb3VudHR5cGUgPT0gXCIzXCIpIHtcclxuICAgICAgICBuZXdjb3Jwb3JhdGUubGVuZ3RoID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5hbW8ga2FcIik7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtN1wiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm04XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI0NTBweFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50dHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3RhIGxhbmdcIik7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNTAxKSB7XHJcbiAgICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiNTAlXCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xJbWFnZVwiKS5hZGRDbGFzcyhcImNvbC1zbS00IGNvbC00XCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xUZXh0XCIpLmFkZENsYXNzKFwiY29sLXNtLTggY29sLThcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLmNvbExlZnRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgICAkKFwiLmNvbExlZnRcIikuYWRkQ2xhc3MoXCJjb2wtbGctOFwiKTtcclxuICAgICAgICAkKFwiLmNvbFJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLTZcIik7XHJcbiAgICAgICAgJChcIi5jb2xSaWdodFwiKS5hZGRDbGFzcyhcImNvbC1sZy00XCIpO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTZcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtOFwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiNTUwcHhcIik7XHJcbiAgICAgICAgJChcIi5wRm9ybTdcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIucEZvcm0yXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvZm9ybTMuc3ZnXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTlcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgJChcIi5kaXZGb3JtOFwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgJChcIi5kaXZGb3JtOVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjM1MHB4XCIpO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0xMFwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICAkKFwiLmRpdkZvcm05XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAkKFwiLmRpdkZvcm0xMFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjM1MHB4XCIpO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0xMVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiNTAlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICQoXCIuaW1nUmlnaHRcIikuYXR0cihcInNyY1wiLCBcIkltYWdlL2Zvcm03LnN2Z1wiKTtcclxuICAgICAgJChcIi5wRm9ybTdcIikuc2hvdygpO1xyXG4gICAgICAkKFwiLmRpdkZvcm0xMFwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgJChcIi5kaXZGb3JtMTFcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI0NTBweFwiKTtcclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtMTJcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgJChcIi5kaXZGb3JtMTFcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTEyXCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiMzAwcHhcIik7XHJcbiAgICAgICQoXCIuaW1nUmlnaHRcIikuYWRkQ2xhc3MoXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX196b29tSW5cIik7XHJcbiAgICAgICQoXCIuaW1nUmlnaHRcIikuYXR0cihcInNyY1wiLCBcIkltYWdlL1Bob25lLnBuZ1wiKTtcclxuICAgICAgJChcIi5wRm9ybVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIucEZvcm03XCIpLnNob3coKTtcclxuXHJcbiAgICAgICQoXCIuYnRuTmV4dFwiKS5odG1sKFwiTkVYVFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGxldCBtaW5PZmZzZXQgPSAxOCxcclxuICAgICAgbWF4T2Zmc2V0ID0gMTAwO1xyXG4gICAgbGV0IHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGV0IHllYXJzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gbWluT2Zmc2V0OyBpIDw9IG1heE9mZnNldDsgaSsrKSB7XHJcbiAgICAgIGxldCB5ZWFyID0gdGhpc1llYXIgLSBpO1xyXG5cclxuICAgICAgbGlzdHllYXIucHVzaCh7IHZhbHVlOiB5ZWFyLCBsYWJlbDogeWVhciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIHhzcmZDb29raWVOYW1lOiBcIlhTUkYtVE9LRU5cIixcclxuICAgICAgICB4c3JmSGVhZGVyTmFtZTogXCJYLVhTUkYtVE9LRU5cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYXBpVXJsX2ZldGNoX2FjY291bnRzID1cclxuICAgICAgYXBwZ2xvYmFsLmFwaS5iYXNlX2FwaSArIGFwcGdsb2JhbC5hcGkuYWNjb3VudF90eXBlcztcclxuICAgIGNvbnN0IGFwaVVybF9hbm51YWxfaW5jb21lID1cclxuICAgICAgYXBwZ2xvYmFsLmFwaS5iYXNlX2FwaSArIGFwcGdsb2JhbC5hcGkuYW5udWFsX2luY29tZTtcclxuICAgIGNvbnN0IGFwaVVybF9pbnZlc3RtZW50X29iamVjdGl2ZXMgPVxyXG4gICAgICBhcHBnbG9iYWwuYXBpLmJhc2VfYXBpICsgYXBwZ2xvYmFsLmFwaS5pbnZlc3RtZW50X29iamVjdGl2ZTtcclxuICAgIGNvbnN0IGFwaVVybF9zb3VyY2Vfb2ZfZnVuZHMgPVxyXG4gICAgICBhcHBnbG9iYWwuYXBpLmJhc2VfYXBpICsgYXBwZ2xvYmFsLmFwaS5zb3VyY2Vfb2ZfZnVuZHM7XHJcbiAgICBjb25zdCBhcGlVcmxfdG90YWxfYXNzZXRzID1cclxuICAgICAgYXBwZ2xvYmFsLmFwaS5iYXNlX2FwaSArIGFwcGdsb2JhbC5hcGkudG90YWxfYXNzZXRzO1xyXG4gICAgY29uc3QgYXBpVXJsX25ldF93b3J0aCA9IGFwcGdsb2JhbC5hcGkuYmFzZV9hcGkgKyBhcHBnbG9iYWwuYXBpLm5ldF93b3J0aDtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGFwaVVybF9mZXRjaF9hY2NvdW50cywge30sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHNldExpc3RhY2NvdW50dHlwZShyZXN1bHQuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRFcnJvcjEoXCIxXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldEVycm9yMShcIjJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGFwaVVybF9pbnZlc3RtZW50X29iamVjdGl2ZXMsIHt9LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBzZXRFcnJvcjcoXCIxXCIpO1xyXG4gICAgICAgIHNldExpc3RpbnZlc3RtZW50b2JqZWN0aXZlcyhyZXN1bHQuZGF0YS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRFcnJvcjEoXCIyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYXBpVXJsX3NvdXJjZV9vZl9mdW5kcywge30sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGZ1bmRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5kYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLmRhdGFbaV0uaWQgKyBcIiBcIiArIHJlc3BvbnNlLmRhdGEuZGF0YVtpXS5uYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZnVuZHMucHVzaCh7XHJcbiAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhLmRhdGFbaV0uaWQsXHJcbiAgICAgICAgICAgIGxhYmVsOiByZXNwb25zZS5kYXRhLmRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMaXN0ZnVuZHMoZnVuZHMpO1xyXG4gICAgICAgIHNldEVycm9yMihcIjFcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IyKFwiMlwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChhcGlVcmxfaW52ZXN0bWVudF9vYmplY3RpdmVzLCB7fSwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgc2V0TGlzdGludmVzdG1lbnRvYmplY3RpdmVzKHJlc3VsdC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldEVycm9yMyhcIjFcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJvcjMoXCIyXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGFwaVVybF90b3RhbF9hc3NldHMsIHt9LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBzZXRsaXN0VG90YWxhc3NldHMocmVzdWx0LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0RXJyb3I0KFwiMVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yNChcIjJcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYXBpVXJsX2FubnVhbF9pbmNvbWUsIHt9LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBzZXRMaXN0YW5udWFsaW5jb21lKHJlc3VsdC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldEVycm9yNShcIjFcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJvcjUoXCIyXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGFwaVVybF9uZXRfd29ydGgsIHt9LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBzZXRMaXN0bmV0d29ydGgocmVzdWx0LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0RXJyb3I2KFwiMVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yNihcIjJcIik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcjEgJiYgZXJyb3IyICYmIGVycm9yMyAmJiBlcnJvcjQgJiYgZXJyb3I1ICYmIGVycm9yNiAmJiBlcnJvcjcpIHtcclxuICAgICAgJChcIi5jb25Mb2FkZXJcIilcclxuICAgICAgICAuc2hvdygpXHJcbiAgICAgICAgLmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKFwiLmNvbk1haW5cIikuZmFkZUluKDI1MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZXJyb3IxID09IFwiMlwiIHx8IGVycm9yMiA9PSBcIjJcIiB8fCBlcnJvcjMgPT0gXCIyXCIgfHwgZXJyb3I0ID09IFwiMlwiIHx8IGVycm9yNSA9PSBcIjJcIiB8fCBlcnJvcjYgPT0gXCIyXCIgfHwgZXJyb3I3ID09IFwiMlwiKXtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMjBweCA4cHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiwgbWFyZ2luVG9wOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+UGxlYXNlIHJlZnJlc2ggdGhlIHdlYnNpdGUuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtlcnJvcjEsIGVycm9yMiwgZXJyb3IzLCBlcnJvcjQsIGVycm9yNSwgZXJyb3I2XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkpHTyBEZWxpdmVyeSBNYWFzYWhhbiEgQWJhbmdhbiFcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5FeHBlcmllbmNlIG5leHQgbGV2ZWwgdHJhZGluZzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiQUFBIEVxdWl0aWVzXCI+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiRXhwZXJpZW5jZSBuZXh0IGxldmVsIHRyYWRpbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJFeHBlcmllbmNlIG5leHQgbGV2ZWwgdHJhZGluZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29uTG9hZGVyICBoLTEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQm94XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMCBjb25NYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbExlZnQgb3JkZXItMiBvcmRlci1sZy0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hMaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZTFcIiBvbkNsaWNrPXtzYXZlYWNjb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS91c2VyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NpcmNsZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1cHhcIiwgcGFkZGluZ1RvcDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZSBjaXJjbGUyIGNpcmNsZW5vdGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RyeWxhbmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9yZWNvcmQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2lyY2xlMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVweFwiLCBwYWRkaW5nVG9wOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZTMgY2lyY2xlbm90YWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9jb21wdXRlci5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDaXJjbGUzXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIHBhZGRpbmdUb3A6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm0xXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+QWNjb3VudCBUeXBlPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY250clwiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdGFjY291bnR0eXBlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdycFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMH0gY3k9ezEwfSByPXs5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsNyBDOC4zNDMxNDU3NSw3IDcsOC4zNDMxNDU3NSA3LDEwIEM3LDExLjY1Njg1NDIgOC4zNDMxNDU3NSwxMyAxMCwxMyBDMTEuNjU2ODU0MiwxMyAxMywxMS42NTY4NTQyIDEzLDEwIEMxMyw4LjM0MzE0NTc1IDExLjY1Njg1NDIsNyAxMCw3IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDEgTDEwLDEgTDEwLDEgQzE0Ljk3MDU2MjcsMSAxOSw1LjAyOTQzNzI1IDE5LDEwIEwxOSwxMCBMMTksMTAgQzE5LDE0Ljk3MDU2MjcgMTQuOTcwNTYyNywxOSAxMCwxOSBMMTAsMTkgTDEwLDE5IEM1LjAyOTQzNzI1LDE5IDEsMTQuOTcwNTYyNyAxLDEwIEwxLDEwIEwxLDEwIEMxLDUuMDI5NDM3MjUgNS4wMjk0MzcyNSwxIDEwLDEgTDEwLDEgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwUmFkaW9cIj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnAtY2J4XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNieFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2J4XCIgaHRtbEZvcj1cImNieFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMHB4XCIgdmlld0JveD1cIjAgMCAxMiAxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMS41IDYgNC41IDkgMTAuNSAxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwQ2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEkgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnAtY2J4XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNieDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNieFwiIGh0bWxGb3I9XCJjYngxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDEyIDEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLjUgNiA0LjUgOSAxMC41IDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSSBoYXZlIHJlYWQgdGhlIHByaXZhY3kgcG9saWN5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUZuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlTW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pZGRsZSBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VMbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVsbnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVRlbG51bX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsZXBob25lIG51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW9iaWxlbnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZU1vYmlsZW51bX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9iaWxlIG51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JpcnRocGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQmlydGhwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmlydGhwbGFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVzaWRlbnRpYWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94VGl0bGVcIj5CaXJ0aCBEYXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJ5eXl5L01NL2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtiaXJ0aHREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUJpcnRoZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Rm9ybTNcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hcIj5QZXJzb25hbCBJbmZvcm1hdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVElOXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdldGlufVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF0aW9uYWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hdGlvbmFsaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZU5hdGlvbmFsaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc19nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnNlbGVjdGdlbmRlciA/IGN1c3RvbVN0eWxlc19lcnJvciA6IGN1c3RvbVN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dlbmRlcnBpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlR2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc19jaXZpbHN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yc2VsZWN0Y2l2aWwgPyBjdXN0b21TdHlsZXNfZXJyb3IgOiBjdXN0b21TdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaXZpbHN0YXR1c3BpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ2l2aWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpdmlsIFN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1wbG95ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUVtcGxveWVyfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9iIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtqb2J0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VKb2J0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2luZXNzIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1c2FkZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VCdXNhZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPkFjY291bnQgSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94U3ViXCI+VGVsbCB1cyB3aGVyZSB0byBzZW5kIHlvdXIgbW9uZXk8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jhbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQmFua31cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJyYW5jaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnJhbmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUJyYW5jaH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWNjb3VudCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VBY2NvdW50bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFjY291bnQgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50bnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUFjY291bnRudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94U3ViXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgVGVsbCB1cyBob3cgdG8gaGVscFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFN1YjFcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBJbnZlc3RtZW50IE9iamVjdGl2ZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZmxleFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0aW52ZXN0bWVudG9iamVjdGl2ZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lLmxlbmd0aCA+IDIwID8gXCJjb2wtbGctNVwiIDogXCJjb2wtbGctNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1pbnZlc3RtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUludmVzdG1lbnRvYmplY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMH0gY3k9ezEwfSByPXs5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDcgQzguMzQzMTQ1NzUsNyA3LDguMzQzMTQ1NzUgNywxMCBDNywxMS42NTY4NTQyIDguMzQzMTQ1NzUsMTMgMTAsMTMgQzExLjY1Njg1NDIsMTMgMTMsMTEuNjU2ODU0MiAxMywxMCBDMTMsOC4zNDMxNDU3NSAxMS42NTY4NTQyLDcgMTAsNyBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDEgTDEwLDEgTDEwLDEgQzE0Ljk3MDU2MjcsMSAxOSw1LjAyOTQzNzI1IDE5LDEwIEwxOSwxMCBMMTksMTAgQzE5LDE0Ljk3MDU2MjcgMTQuOTcwNTYyNywxOSAxMCwxOSBMMTAsMTkgTDEwLDE5IEM1LjAyOTQzNzI1LDE5IDEsMTQuOTcwNTYyNyAxLDEwIEwxLDEwIEwxLDEwIEMxLDUuMDI5NDM3MjUgNS4wMjk0MzcyNSwxIDEwLDEgTDEwLDEgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBSYWRpb1wiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm01XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+QWNjb3VudCBJbmZvcm1hdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hTdWJcIj5UZWxsIHVzIGhvdyB0byBoZWxwPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xpc3RmdW5kc31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yc2VsZWN0ZnVuZHMgPyBjdXN0b21TdHlsZXNfZXJyb3IgOiBjdXN0b21TdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU291cmNlIG9mIGZ1bmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb3VyY2VvZmZ1bmRzcGlja31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VTb3VyY2VvZmZ1bmRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94U3ViMVwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFRvdGFsIEFzc2V0c1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2xpc3R0b3RhbGFzc2V0cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aXRlbS5uYW1lfSBjbGFzc05hbWU9XCJidG4tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1ncnBBc3NldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVG90YWxhc3NldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMH0gY3k9ezEwfSByPXs5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDcgQzguMzQzMTQ1NzUsNyA3LDguMzQzMTQ1NzUgNywxMCBDNywxMS42NTY4NTQyIDguMzQzMTQ1NzUsMTMgMTAsMTMgQzExLjY1Njg1NDIsMTMgMTMsMTEuNjU2ODU0MiAxMywxMCBDMTMsOC4zNDMxNDU3NSAxMS42NTY4NTQyLDcgMTAsNyBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDEgTDEwLDEgTDEwLDEgQzE0Ljk3MDU2MjcsMSAxOSw1LjAyOTQzNzI1IDE5LDEwIEwxOSwxMCBMMTksMTAgQzE5LDE0Ljk3MDU2MjcgMTQuOTcwNTYyNywxOSAxMCwxOSBMMTAsMTkgTDEwLDE5IEM1LjAyOTQzNzI1LDE5IDEsMTQuOTcwNTYyNyAxLDEwIEwxLDEwIEwxLDEwIEMxLDUuMDI5NDM3MjUgNS4wMjk0MzcyNSwxIDEwLDEgTDEwLDEgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBSYWRpb1wiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hTdWIxXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQW5uYXVhbCBJbmNvbWVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0YW5udWFsaW5jb21lLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtcImFubnVhbFwiICsgaXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImFubnVhbFwiICsgaXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1ncnBBbm51YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQW5udWFsaW5jb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17MTB9IGN5PXsxMH0gcj17OX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCw3IEM4LjM0MzE0NTc1LDcgNyw4LjM0MzE0NTc1IDcsMTAgQzcsMTEuNjU2ODU0MiA4LjM0MzE0NTc1LDEzIDEwLDEzIEMxMS42NTY4NTQyLDEzIDEzLDExLjY1Njg1NDIgMTMsMTAgQzEzLDguMzQzMTQ1NzUgMTEuNjU2ODU0Miw3IDEwLDcgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCwxIEwxMCwxIEwxMCwxIEMxNC45NzA1NjI3LDEgMTksNS4wMjk0MzcyNSAxOSwxMCBMMTksMTAgTDE5LDEwIEMxOSwxNC45NzA1NjI3IDE0Ljk3MDU2MjcsMTkgMTAsMTkgTDEwLDE5IEwxMCwxOSBDNS4wMjk0MzcyNSwxOSAxLDE0Ljk3MDU2MjcgMSwxMCBMMSwxMCBMMSwxMCBDMSw1LjAyOTQzNzI1IDUuMDI5NDM3MjUsMSAxMCwxIEwxMCwxIFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwUmFkaW9cIj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94U3ViMVwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE5ldCBXb3J0aFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2xpc3RuZXR3b3J0aC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJuZXRcIiArIGl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiYnRuLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wibmV0XCIgKyBpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdycE5ldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VOZXR3b3J0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ezEwfSBjeT17MTB9IHI9ezl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsNyBDOC4zNDMxNDU3NSw3IDcsOC4zNDMxNDU3NSA3LDEwIEM3LDExLjY1Njg1NDIgOC4zNDMxNDU3NSwxMyAxMCwxMyBDMTEuNjU2ODU0MiwxMyAxMywxMS42NTY4NTQyIDEzLDEwIEMxMyw4LjM0MzE0NTc1IDExLjY1Njg1NDIsNyAxMCw3IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsMSBMMTAsMSBMMTAsMSBDMTQuOTcwNTYyNywxIDE5LDUuMDI5NDM3MjUgMTksMTAgTDE5LDEwIEwxOSwxMCBDMTksMTQuOTcwNTYyNyAxNC45NzA1NjI3LDE5IDEwLDE5IEwxMCwxOSBMMTAsMTkgQzUuMDI5NDM3MjUsMTkgMSwxNC45NzA1NjI3IDEsMTAgTDEsMTAgTDEsMTAgQzEsNS4wMjk0MzcyNSA1LjAyOTQzNzI1LDEgMTAsMSBMMTAsMSBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicFJhZGlvXCI+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Rm9ybTZcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFRpdGxlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjE4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQXJlIHlvdSBhc3NvY2lhdGVkIHdpdGggYW5vdGhlciBicm9rZXIgb3IgZGVhbGVyP1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJkby0xMVwiIGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmRvLTExXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdycEFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17MTB9IGN5PXsxMH0gcj17OX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsNyBDOC4zNDMxNDU3NSw3IDcsOC4zNDMxNDU3NSA3LDEwIEM3LDExLjY1Njg1NDIgOC4zNDMxNDU3NSwxMyAxMCwxMyBDMTEuNjU2ODU0MiwxMyAxMywxMS42NTY4NTQyIDEzLDEwIEMxMyw4LjM0MzE0NTc1IDExLjY1Njg1NDIsNyAxMCw3IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCwxIEwxMCwxIEwxMCwxIEMxNC45NzA1NjI3LDEgMTksNS4wMjk0MzcyNSAxOSwxMCBMMTksMTAgTDE5LDEwIEMxOSwxNC45NzA1NjI3IDE0Ljk3MDU2MjcsMTkgMTAsMTkgTDEwLDE5IEwxMCwxOSBDNS4wMjk0MzcyNSwxOSAxLDE0Ljk3MDU2MjcgMSwxMCBMMSwxMCBMMSwxMCBDMSw1LjAyOTQzNzI1IDUuMDI5NDM3MjUsMSAxMCwxIEwxMCwxIFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBSYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgWWVzLCBpZiBzbyBzdGF0ZSB0aGUgbmFtZSBvZiB0aGUgY29tcGFueVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fzc29jaWF0ZWRjb21wYW55fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUFzc2NvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZG8tMTJcIiBjbGFzc05hbWU9XCJidG4tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJkby0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdycEFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUFzc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ezEwfSBjeT17MTB9IHI9ezl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsNyBDOC4zNDMxNDU3NSw3IDcsOC4zNDMxNDU3NSA3LDEwIEM3LDExLjY1Njg1NDIgOC4zNDMxNDU3NSwxMyAxMCwxMyBDMTEuNjU2ODU0MiwxMyAxMywxMS42NTY4NTQyIDEzLDEwIEMxMyw4LjM0MzE0NTc1IDExLjY1Njg1NDIsNyAxMCw3IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsMSBMMTAsMSBMMTAsMSBDMTQuOTcwNTYyNywxIDE5LDUuMDI5NDM3MjUgMTksMTAgTDE5LDEwIEwxOSwxMCBDMTksMTQuOTcwNTYyNyAxNC45NzA1NjI3LDE5IDEwLDE5IEwxMCwxOSBMMTAsMTkgQzUuMDI5NDM3MjUsMTkgMSwxNC45NzA1NjI3IDEsMTAgTDEsMTAgTDEsMTAgQzEsNS4wMjk0MzcyNSA1LjAyOTQzNzI1LDEgMTAsMSBMMTAsMSBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicFJhZGlvXCI+Tm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFRpdGxlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQXJlIHlvdSBhbiBvZmZpY2VyL2RpcmVjdG9yIG9mIGEgbGlzdGVkIGNvbXBhbnk/XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJkby0xM1wiIGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmRvLTEzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JwQ29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZU9mZmljZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMH0gY3k9ezEwfSByPXs5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDcgQzguMzQzMTQ1NzUsNyA3LDguMzQzMTQ1NzUgNywxMCBDNywxMS42NTY4NTQyIDguMzQzMTQ1NzUsMTMgMTAsMTMgQzExLjY1Njg1NDIsMTMgMTMsMTEuNjU2ODU0MiAxMywxMCBDMTMsOC4zNDMxNDU3NSAxMS42NTY4NTQyLDcgMTAsNyBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDEgTDEwLDEgTDEwLDEgQzE0Ljk3MDU2MjcsMSAxOSw1LjAyOTQzNzI1IDE5LDEwIEwxOSwxMCBMMTksMTAgQzE5LDE0Ljk3MDU2MjcgMTQuOTcwNTYyNywxOSAxMCwxOSBMMTAsMTkgTDEwLDE5IEM1LjAyOTQzNzI1LDE5IDEsMTQuOTcwNTYyNyAxLDEwIEwxLDEwIEwxLDEwIEMxLDUuMDI5NDM3MjUgNS4wMjk0MzcyNSwxIDEwLDEgTDEwLDEgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBSYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFllcywgaWYgc28gc3RhdGUgdGhlIG5hbWUgb2YgdGhlIGNvbXBhbnlcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0b2ZmaWNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29mZmljZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZU9mZmljZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZG8tMTRcIiBjbGFzc05hbWU9XCJidG4tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJkby0xNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdycENvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VPZmZpY2VyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17MTB9IGN5PXsxMH0gcj17OX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCw3IEM4LjM0MzE0NTc1LDcgNyw4LjM0MzE0NTc1IDcsMTAgQzcsMTEuNjU2ODU0MiA4LjM0MzE0NTc1LDEzIDEwLDEzIEMxMS42NTY4NTQyLDEzIDEzLDExLjY1Njg1NDIgMTMsMTAgQzEzLDguMzQzMTQ1NzUgMTEuNjU2ODU0Miw3IDEwLDcgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCwxIEwxMCwxIEwxMCwxIEMxNC45NzA1NjI3LDEgMTksNS4wMjk0MzcyNSAxOSwxMCBMMTksMTAgTDE5LDEwIEMxOSwxNC45NzA1NjI3IDE0Ljk3MDU2MjcsMTkgMTAsMTkgTDEwLDE5IEwxMCwxOSBDNS4wMjk0MzcyNSwxOSAxLDE0Ljk3MDU2MjcgMSwxMCBMMSwxMCBMMSwxMCBDMSw1LjAyOTQzNzI1IDUuMDI5NDM3MjUsMSAxMCwxIEwxMCwxIFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwUmFkaW9cIj5Obzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtN1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPkZvciBDb3Jwb3JhdGUgQWNjb3VudHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94VGl0bGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBJbmRpY2F0ZSB0aGUgbmFtZXMgb2YgcGVyc29ubmVsIGF1dGhvcml6ZWQgdG8gdHJhbnNhY3Qgb25cclxuICAgICAgICAgICAgICAgICAgYmVoYWxmIG9mIHRoZSBjb21wYW55XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0bmFtZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidHh0bmFtZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvcnBvcmF0ZW5hbWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUNvcnBvcmF0ZW5hbWUxfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dHBvc2l0aW9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInR4dHBvc2l0aW9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Jwb3JhdGVwb3NpdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ29ycG9yYXRlcG9zaXRpb24xfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRuYW1lMiB0eHRCb3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Jwb3JhdGVuYW1lMn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VDb3Jwb3JhdGVuYW1lMn1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRwb3NpdGlvbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29ycG9yYXRlcG9zaXRpb24yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUNvcnBvcmF0ZXBvc2l0aW9uMn1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dG5hbWUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29ycG9yYXRlbmFtZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ29ycG9yYXRlbmFtZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0cG9zaXRpb24zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvcnBvcmF0ZXBvc2l0aW9uM31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VDb3Jwb3JhdGVwb3NpdGlvbjN9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtOFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPlVwbG9hZCBzaWduYXR1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlKGUpfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZn1cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VXBsb2FkIGRpdkNsaWVudFwiIG9uQ2xpY2s9e29uQnRuQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvdXBsb2FkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4XCJcclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVXBsb2FkIHBVcGxvYWRjbGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICBDbGllbnQgU2lnbmF0dXJlIG92ZXIgPGJyIC8+IFByaW50ZWQgTmFtZVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm05XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+VXBsb2FkIHNpZ25hdHVyZTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUxKGUpfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjF9XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlVwbG9hZCBkaXZKb2ludFwiIG9uQ2xpY2s9e29uQnRuQ2xpY2sxfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3VwbG9hZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFVwbG9hZCBwVXBsb2Fkam9pbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICBKb2ludCBBY2NvdW50IEhvbGRlcidzXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+IFNpb2duYXR1cmUgb3ZlciBQcmludGVkIE5hbWVcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hcIj5VcGxvYWQgdHdvIHZhbGlkIElEczwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUyKGUpfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjJ9XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlVwbG9hZCBkaXZWYWxpZDFcIiBvbkNsaWNrPXtvbkJ0bkNsaWNrMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS91cGxvYWQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBVcGxvYWQgcFVwbG9hZHZhbGlkMVwiPlVwbG9hZCBmaXJzdCBJRCBwaG90bzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTMoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmM31cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VXBsb2FkIGRpdlZhbGlkMlwiIG9uQ2xpY2s9e29uQnRuQ2xpY2szfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3VwbG9hZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFVwbG9hZCBwVXBsb2FkdmFsaWQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkIHNlY29uZCBJRCBwaG90b1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm0xMVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPlVzZXIgSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTExXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTAgcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0xMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsYWRkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRW1haWxhZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGU0KGUpfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e2lucHV0RmlsZVJlZjR9XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnfGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+VXBsb2FkIGEgcGhvdG8gb2YgeW91ciBzZWxmPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZVcGxvYWRcIiBvbkNsaWNrPXtvbkJ0bkNsaWNrNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS91cGxvYWQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBVcGxvYWQgcFByb2ZpbGVwaWNcIj5UYWtlIGEgcGhvdG88L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbEJhY2sgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5CYWNrXCIgb25DbGljaz17cHJldkZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIEJBQ0tcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5OZXh0XCIgb25DbGljaz17bmV4dEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIE5FWFRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sUmlnaHQgb3JkZXItMSBvcmRlci1sZy0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Bob25lMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nUmlnaHQgbXgtYXV0byBkLWZsZXggYW5pbWF0ZV9fZmFzdGVyXCJcclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtc20tOCBjb2wtOCBjb2xUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9ybSBwRm9ybTFcIj5cclxuICAgICAgICAgICAgICAgICAgV2hlbiA8Yj5yZXNpc3RhbmNlPC9iPiBsZXZlbHMgYXJlIGJyb2tlbiwgYSBicmVha291dCBtYXlcclxuICAgICAgICAgICAgICAgICAgb2NjdXIuIEJ1eSBicmVha291dHMgYXV0b21hdGljYWxseSB3aXRoIENvbmRpdGlvbmFsIE9yZGVycy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBGb3JtIHBGb3JtMlwiPlxyXG4gICAgICAgICAgICAgICAgICBXaGVuIDxiPnN1cHBvcnQ8L2I+IGxldmVscyBhcmUgYnJva2VuLCBhIGJyZWFrb3V0IG1heSBvY2N1ci5cclxuICAgICAgICAgICAgICAgICAgU2V0IGF1dG9tYXRpYyBzdG9wcyB3aXRoIENvbmRpdGlvbmFsIG9yZGVycyB0byBwcm90ZWN0IHlvdXJcclxuICAgICAgICAgICAgICAgICAgY2FwaXRhbC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBGb3JtIHBGb3JtN1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5NYXJnaW48L2I+IGluY3JlYXNlcyB5b3VyIGJ1eWluZyBwb3dlciBieSBib3Jyb3dpbmcgZnVuZHMuXHJcbiAgICAgICAgICAgICAgICAgIFRvIHVzZSBtYXJnaW4sIHVwZ3JhZGUgeW91ciBhY2NvdW50IHRvIGEgQUFBIFR1cmJvIE1hcmdpblxyXG4gICAgICAgICAgICAgICAgICBBY2NvdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZvcm0gcEZvcm04XCI+XHJcbiAgICAgICAgICAgICAgICAgIFB1dCB5b3VyIHZhbGlkIElEIGJlbG93IHlvdXIgY2hpbiBhcyBzaG93biBhYm92ZSBhbmQgdGFrZSBhXHJcbiAgICAgICAgICAgICAgICAgIHBob3RvIG9mIHlvdXJzZWxmIVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwibW9kYWxWZXJpZnlcIlxyXG4gICAgICAgIGRhdGEtYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgIGRhdGEta2V5Ym9hcmQ9XCJmYWxzZVwiXHJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbENlbnRlclRpdGxlXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93ICBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xWZXJpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJwTW9kYWxcIj5QbGVhc2Ugd2FpdCB3aGlsZSB3ZSB2ZXJpZnkgeW91ciBhY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFwcGdsb2JhbCA9IHtcclxuICAgIGFwaToge1xyXG4gICAgICBiYXNlX2FwaTogXCJodHRwczovL2t5Yy5hYWEtZXF1aXRpZXMuY29tLnBoXCIsXHJcbiAgICAgIGFjY291bnRfdHlwZXM6IFwiL2FwaS9hY2NvdW50X3R5cGVzXCIsXHJcbiAgICAgIGFubnVhbF9pbmNvbWU6IFwiL2FwaS9hbm51YWxfaW5jb21lXCIsXHJcbiAgICAgIGludmVzdG1lbnRfb2JqZWN0aXZlOiBcIi9hcGkvaW52ZXN0bWVudF9vYmplY3RpdmVzXCIsXHJcbiAgICAgIHNvdXJjZV9vZl9mdW5kczogXCIvYXBpL3NvdXJjZV9vZl9mdW5kc1wiLFxyXG4gICAgICB0b3RhbF9hc3NldHM6IFwiL2FwaS90b3RhbF9hc3NldHNcIixcclxuICAgICAgbmV0X3dvcnRoOiAgXCIvYXBpL25ldF93b3J0aFwiLFxyXG4gICAgICBhZGRfYWNjb3VudDogIFwiL2FwaS9hY2NvdW50c1wiLFxyXG4gICAgICBjaGVja191c2VyX2V4aXN0OiBcIi9hcGkvY2hlY2tfdXNlcl9leGlzdHNcIixcclxuICAgIH0sXHJcbiAgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==