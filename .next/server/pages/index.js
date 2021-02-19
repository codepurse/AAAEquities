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
    setBirthdate(date);
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
                  lineNumber: 553,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 552,
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
                  lineNumber: 559,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please select an account type."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 560,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 558,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 551,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 549,
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
                  lineNumber: 572,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 571,
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
                  lineNumber: 578,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please aggree to our terms and conditions and privacy policy."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 579,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 577,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 570,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 569,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 568,
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
                  lineNumber: 632,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 631,
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
                  lineNumber: 638,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 639,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 637,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 630,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 629,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 628,
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
                  lineNumber: 682,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 681,
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
                  lineNumber: 688,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 689,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 687,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 680,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 679,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 678,
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
                  lineNumber: 748,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 747,
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
                  lineNumber: 754,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 755,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 753,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 746,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 745,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 744,
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
                  lineNumber: 783,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 782,
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
                  lineNumber: 789,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 790,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 788,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 781,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 780,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 779,
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
                  lineNumber: 816,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 815,
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
                  lineNumber: 822,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pErrorSub",
                  children: "Please fill up all the missing fields."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 823,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 821,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 814,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 813,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 812,
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
                    lineNumber: 1018,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1017,
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
                    lineNumber: 1024,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "pErrorSub",
                    children: err.response.data.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1025,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1023,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1016,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1015,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1014,
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
                lineNumber: 1318,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1317,
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
                lineNumber: 1324,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pErrorSub",
                children: "Please refresh the website."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1325,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1323,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1316,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1315,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1314,
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
        lineNumber: 1337,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1338,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "JGO Delivery Maasahan! Abangan!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1339,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Experience next level trading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1340,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "AAA Equities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1341,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Experience next level trading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1342,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Experience next level trading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1343,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1336,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1348,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1349,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container conLoader  h-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1353,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1352,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1351,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1350,
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
              lineNumber: 1362,
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
                  lineNumber: 1365,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1364,
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
                  lineNumber: 1375,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1371,
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
                  lineNumber: 1382,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1381,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1363,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1391,
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
                    lineNumber: 1396,
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
                      lineNumber: 1404,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                      className: "inner"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1405,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                      className: "outer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1409,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1403,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pRadio",
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1414,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1395,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1393,
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
                  lineNumber: 1419,
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
                        lineNumber: 1428,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1427,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1426,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pCheck",
                    children: "I agree to the terms and conditions"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1431,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1425,
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
                  lineNumber: 1435,
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
                        lineNumber: 1444,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1443,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1442,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pCheck",
                    children: "I have read the privacy policy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1447,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1441,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1418,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1390,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Personal Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1454,
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
                    lineNumber: 1457,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1456,
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
                    lineNumber: 1467,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1466,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1455,
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
                    lineNumber: 1479,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1478,
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
                    lineNumber: 1489,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1488,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1477,
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
                    lineNumber: 1501,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1500,
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
                    lineNumber: 1511,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1510,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1499,
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
                    lineNumber: 1523,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1522,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1521,
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
                    lineNumber: 1538,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1537,
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
                    lineNumber: 1541,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1540,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1533,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1453,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Personal Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1551,
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
                    lineNumber: 1554,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1553,
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
                    lineNumber: 1564,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1563,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1552,
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
                    lineNumber: 1576,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1575,
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
                    lineNumber: 1587,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1586,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1574,
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
                    lineNumber: 1600,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1599,
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
                    lineNumber: 1610,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1609,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1598,
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
                    lineNumber: 1622,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1621,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1620,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1550,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1634,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub",
                children: "Tell us where to send your money"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1635,
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
                    lineNumber: 1638,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1637,
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
                    lineNumber: 1648,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1647,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1636,
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
                    lineNumber: 1660,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1659,
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
                    lineNumber: 1670,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1669,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1658,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub",
                style: {
                  marginTop: "15px"
                },
                children: "Tell us how to help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1680,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "10px"
                },
                children: "Investment Objective"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1683,
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
                      lineNumber: 1694,
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
                        lineNumber: 1702,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1703,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1707,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1701,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1712,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1693,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1688,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1686,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1633,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1719,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub",
                children: "Tell us how to help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1720,
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
                    lineNumber: 1723,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1722,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1721,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "18px"
                },
                children: "Total Assets"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1734,
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
                      lineNumber: 1741,
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
                        lineNumber: 1749,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1750,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1754,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1748,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1759,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1740,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1739,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1737,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "18px"
                },
                children: "Annaual Income"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1764,
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
                      lineNumber: 1774,
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
                        lineNumber: 1782,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1783,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1787,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1781,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1792,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1770,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1769,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1767,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxSub1",
                style: {
                  marginTop: "18px"
                },
                children: "Net Worth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1797,
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
                      lineNumber: 1804,
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
                        lineNumber: 1812,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                        className: "inner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1813,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                        className: "outer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1817,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1811,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pRadio",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1822,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1803,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1802,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1800,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1718,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Account Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1829,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxTitle",
                style: {
                  marginBottom: "18px"
                },
                children: "Are you associated with another broker or dealer?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1830,
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
                    lineNumber: 1835,
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
                      lineNumber: 1843,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                      className: "inner"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1844,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                      className: "outer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1848,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1842,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "pRadio",
                    children: "Yes, if so state the name of the company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1853,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1834,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1833,
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
                    lineNumber: 1863,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1862,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1858,
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
                  lineNumber: 1874,
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
                    lineNumber: 1882,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                    className: "inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1883,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                    className: "outer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1887,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1881,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pRadio",
                  children: "No"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1892,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1873,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxTitle",
                style: {
                  marginBottom: "20px"
                },
                children: "Are you an officer/director of a listed company?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1894,
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
                  lineNumber: 1898,
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
                    lineNumber: 1906,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                    className: "inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1907,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                    className: "outer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1911,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1905,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pRadio",
                  children: "Yes, if so state the name of the company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1916,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1897,
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
                    lineNumber: 1925,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1924,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1920,
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
                  lineNumber: 1935,
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
                    lineNumber: 1943,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",
                    className: "inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1944,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",
                    className: "outer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1948,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1942,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pRadio",
                  children: "No"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1953,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1934,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1828,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm7",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "For Corporate Accounts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1957,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBoxTitle",
                style: {
                  marginBottom: "20px"
                },
                children: "Indicate the names of personnel authorized to transact on behalf of the company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1958,
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
                    lineNumber: 1964,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1963,
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
                    lineNumber: 1975,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1974,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1962,
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
                    lineNumber: 1988,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1987,
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
                    lineNumber: 1998,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1997,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1986,
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
                    lineNumber: 2010,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2009,
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
                    lineNumber: 2020,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2019,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2008,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1956,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload signature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2032,
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
                lineNumber: 2033,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divClient",
                onClick: onBtnClick,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2042,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadclient",
                  children: ["Client Signature over ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2047,
                    columnNumber: 43
                  }, this), " Printed Name"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 2046,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2041,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2031,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm9",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload signature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2052,
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
                lineNumber: 2053,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divJoint",
                onClick: onBtnClick1,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2062,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadjoint",
                  children: ["Joint Account Holder's", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2068,
                    columnNumber: 21
                  }, this), " Siognature over Printed Name"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 2066,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2061,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2051,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm10",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload two valid IDs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2073,
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
                lineNumber: 2074,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divValid1",
                onClick: onBtnClick2,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2083,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadvalid1",
                  children: "Upload first ID photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2087,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2082,
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
                lineNumber: 2089,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload divValid2",
                onClick: onBtnClick3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2098,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pUploadvalid2",
                  children: "Upload second ID photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2102,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2097,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2072,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "divForm11",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "User Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2108,
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
                    lineNumber: 2111,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2110,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2109,
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
                    lineNumber: 2123,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2122,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2121,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2107,
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
                lineNumber: 2136,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pBox",
                children: "Upload a photo of your self"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2144,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "divUpload",
                onClick: onBtnClick4,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "Image/upload.png",
                  className: "img-fluid mx-auto d-flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2146,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "pUpload pProfilepic",
                  children: "Take a photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2150,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2145,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2135,
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
                  lineNumber: 2155,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2154,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-4 col-sm-6 col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btnNext",
                  onClick: nextForm,
                  children: "NEXT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2160,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2159,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2153,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1361,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1360,
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
                lineNumber: 2170,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 2169,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-12 col-sm-8 col-8 colText",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm1",
                children: ["When ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "resistance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2177,
                  columnNumber: 24
                }, this), " levels are broken, a breakout may occur. Buy breakouts automatically with Conditional Orders."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2176,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm2",
                children: ["When ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "support"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2181,
                  columnNumber: 24
                }, this), " levels are broken, a breakout may occur. Set automatic stops with Conditional orders to protect your capital."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2180,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm7",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Margin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2186,
                  columnNumber: 19
                }, this), " increases your buying power by borrowing funds. To use margin, upgrade your account to a AAA Turbo Margin Account."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2185,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "pForm pForm8",
                children: "Put your valid ID below your chin as shown above and take a photo of yourself!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2190,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2175,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 2168,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2167,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1359,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1358,
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
                          lineNumber: 2218,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 2217,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 2216,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2215,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "pModal",
                    children: "Please wait while we verify your account"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2222,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 2214,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2213,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 2212,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2211,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2210,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 2209,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 2199,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaGVhZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwibmF2YmFyIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luTGVmdCIsInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwidmFsaWRhdGUiLCJwYXJzZWREZXN0aW5hdGlvbiIsImhhZExvY2FsZSIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJzdHJPckFycmF5IiwiY29tcGlsZU5vblBhdGgiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsImZzUGF0aG5hbWUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiaW5kZXgiLCJhY2NvdW50dHlwZSIsInNldEFjY291bnR0eXBlIiwidXNlU3RhdGUiLCJsaXN0YWNjb3VudHR5cGUiLCJzZXRMaXN0YWNjb3VudHR5cGUiLCJmbmFtZSIsInNldEZuYW1lIiwibG5hbWUiLCJzZXRMbmFtZSIsIm1uYW1lIiwic2V0TW5hbWUiLCJ0ZWxudW0iLCJzZXRUZWxudW0iLCJtb2JpbGVudW0iLCJzZXRNb2JpbGVudW0iLCJiaXJ0aHBsYWNlIiwic2V0QmlydGhwbGFjZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiYmlydGh0RGF0ZSIsInNldEJpcnRoZGF0ZSIsInRpbiIsInNldFRpbiIsIm5hdGlvbmFsaXR5Iiwic2V0TmF0aW9uYWxpdHkiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJnZW5kZXJwaWNrIiwic2V0R2VuZGVycGljayIsImNpdmlsc3RhdHVzIiwic2V0Q2l2aWxzdGF0dXMiLCJjaXZpbHN0YXR1c3BpY2siLCJzZXRDaXZpbHN0YXR1c3BpY2siLCJlbXBsb3llciIsInNldEVtcGxveWVyIiwiam9idGl0bGUiLCJzZXRKb2J0aXRsZSIsImJ1c2FkZCIsInNldEJ1c2FkZCIsImVycm9yc2VsZWN0Z2VuZGVyIiwic2V0RXJyb3JzZWxlY3RnZW5kZXIiLCJlcnJvcnNlbGVjdGNpdmlsIiwic2V0RXJyb3JzZWxlY3RjaXZpbCIsImJhbmsiLCJzZXRCYW5rIiwiYnJhbmNoIiwic2V0QnJhY2giLCJhY2NvdW50bmFtZSIsInNldEFjY291bnRuYW1lIiwiYWNjb3VudG51bWJlciIsInNldEFjY291bnRudW1iZXIiLCJpbnZlc3RtZW50b2JqZWN0aXZlIiwic2V0SW52ZXN0bWVudG9iamVjdGl2ZSIsInNvdXJjZW9mZnVuZHMiLCJzZXRTb3VyY2VvZmZ1bmRzIiwic291cmNlb2ZmdW5kc3BpY2siLCJzZXRTb3VyY2VvZmZ1bmRzcGljayIsInRvdGFsYXNzZXRzIiwic2V0VG90YWxhc3NldHMiLCJhbm51YWxpbmNvbWUiLCJzZXRBbm51YWxpbmNvbWUiLCJuZXR3b3J0aCIsInNldE5ldHdvcnRoIiwiZXJyb3JzZWxlY3RmdW5kcyIsInNldEVycm9yc2VsZWN0ZnVuZHMiLCJhc3NvY2lhdGVkIiwic2V0QXNzb2NpYXRlZCIsImFzc29jaWF0ZWRjb21wYW55Iiwic2V0QXNzb2NpYXRlZGNvbXBhbnkiLCJvZmZpY2VyIiwic2V0T2ZmaWNlciIsIm9mZmljZXJuYW1lIiwic2V0T2ZmaWNlcm5hbWUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWxhZGQiLCJzZXRFbWFpbGFkZCIsImNvcnBvcmF0ZW5hbWUxIiwic2V0Q29ycG9yYXRlbmFtZTEiLCJjb3Jwb3JhdGVwb3NpdGlvbjEiLCJzZXRDb3Jwb3JhdGVwb3NpdGlvbjEiLCJjb3Jwb3JhdGVuYW1lMiIsInNldENvcnBvcmF0ZW5hbWUyIiwiY29ycG9yYXRlcG9zaXRpb24yIiwic2V0Q29ycG9yYXRlcG9zaXRpb24yIiwiY29ycG9yYXRlbmFtZTMiLCJzZXRDb3Jwb3JhdGVuYW1lMyIsImNvcnBvcmF0ZXBvc2l0aW9uMyIsInNldENvcnBvcmF0ZXBvc2l0aW9uMyIsIm5ld2NvcnBvcmF0ZSIsInNldE5ld2NvcnBvcmF0ZSIsImVycm9yMSIsInNldEVycm9yMSIsImVycm9yMiIsInNldEVycm9yMiIsImVycm9yMyIsInNldEVycm9yMyIsImVycm9yNCIsInNldEVycm9yNCIsImVycm9yNSIsInNldEVycm9yNSIsImVycm9yNiIsInNldEVycm9yNiIsImVycm9yNyIsInNldEVycm9yNyIsImxpc3RpbnZlc3RtZW50b2JqZWN0aXZlcyIsInNldExpc3RpbnZlc3RtZW50b2JqZWN0aXZlcyIsImxpc3R0b3RhbGFzc2V0cyIsInNldGxpc3RUb3RhbGFzc2V0cyIsImxpc3Rhbm51YWxpbmNvbWUiLCJzZXRMaXN0YW5udWFsaW5jb21lIiwibGlzdGZ1bmRzIiwic2V0TGlzdGZ1bmRzIiwibGlzdG5ldHdvcnRoIiwic2V0TGlzdG5ldHdvcnRoIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiY2xpZW50cGljIiwic2V0Q2xpZW50cGljIiwiam9pbnRob2xkZXIiLCJzZXRKb2ludGhvbGRlciIsImpvaW50aG9sZGVycGljIiwic2V0Sm9pbnRob2xkZXJwaWMiLCJ2YWxpZGlkMSIsInNldFZhbGlkaWQxIiwidmFsaWRpZDFwaWMiLCJzZXRWYWxpZGlkMXBpYyIsInZhbGlkaWQyIiwic2V0VmFsaWRpZDIiLCJ2YWxpZGlkMnBpYyIsInNldFZhbGlkaWQycGljIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJwcm9maWxlcGljIiwic2V0UHJvZmlsZXBpYyIsImlucHV0RmlsZVJlZiIsInVzZVJlZiIsImlucHV0RmlsZVJlZjEiLCJpbnB1dEZpbGVSZWYyIiwiaW5wdXRGaWxlUmVmMyIsImlucHV0RmlsZVJlZjQiLCJvbkJ0bkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwib25CdG5DbGljazEiLCJvbkJ0bkNsaWNrMiIsIm9uQnRuQ2xpY2szIiwib25CdG5DbGljazQiLCJ0cnlsYW5nIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhdmVhY2NvdW50IiwiaGVhZGVycyIsIkFjY2VwdCIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibW9tZW50IiwiZm9ybWF0IiwiYXBpVXJsX2FkZF9hY2NvdW50IiwiYXBwZ2xvYmFsIiwiYXBpIiwiYmFzZV9hcGkiLCJhZGRfYWNjb3VudCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJwYWlyIiwiJCIsIm1vZGFsIiwic3dhbCIsIm1hcmdpblRvcCIsImNhdGNoIiwiaGFuZGxlRmlsZSIsImZpbGUiLCJmaWxlcyIsImF0dHIiLCJoYW5kbGVGaWxlMSIsImhhbmRsZUZpbGUyIiwiaGFuZGxlRmlsZTMiLCJoYW5kbGVGaWxlNCIsInNldEFjY291bnQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NOYW1lIiwiY2hhbmdlRm5hbWUiLCJjaGFuZ2VNbmFtZSIsImNoYW5nZUxuYW1lIiwiY2hhbmdlVGVsbnVtIiwiY2hhbmdlTW9iaWxlbnVtIiwiY2hhbmdlQmlydGhwbGFjZSIsImNoYW5nZUFkZHJlc3MiLCJjaGFuZ2VCaXJ0aGRhdGUiLCJkYXRlIiwiY2hhbmdldGluIiwiY2hhbmdlTmF0aW9uYWxpdHkiLCJjaGFuZ2VHZW5kZXIiLCJsYWJlbCIsImNoYW5nZUNpdmlsIiwiY2hhbmdlRW1wbG95ZXIiLCJjaGFuZ2VKb2J0aXRsZSIsImNoYW5nZUJ1c2FkZCIsImNoYW5nZUJhbmsiLCJjaGFuZ2VCcmFuY2giLCJjaGFuZ2VBY2NvdW50bmFtZSIsImNoYW5nZUFjY291bnRudW1iZXIiLCJjaGFuZ2VJbnZlc3RtZW50b2JqZWN0aXZlIiwiY2hhbmdlU291cmNlb2ZmdW5kcyIsImNoYW5nZVRvdGFsYXNzZXRzIiwiY2hhbmdlQW5udWFsaW5jb21lIiwiY2hhbmdlTmV0d29ydGgiLCJjaGFuZ2VBc3MiLCJjaGFuZ2VPZmZpY2VyIiwiY2hhbmdlQXNzY29tcGFueSIsImNoYW5nZU9mZmljZXJuYW1lIiwiY2hhbmdlVXNlcm5hbWUiLCJjaGFuZ2VFbWFpbGFkZCIsImNoYW5nZUNvcnBvcmF0ZW5hbWUxIiwiY2hhbmdlQ29ycG9yYXRlcG9zaXRpb24xIiwiY2hhbmdlQ29ycG9yYXRlbmFtZTIiLCJjaGFuZ2VDb3Jwb3JhdGVwb3NpdGlvbjIiLCJjaGFuZ2VDb3Jwb3JhdGVuYW1lMyIsImNoYW5nZUNvcnBvcmF0ZXBvc2l0aW9uMyIsImxpc3R5ZWFyIiwibGlzdHNvdXJjZWZ1bmRzIiwib3B0aW9uc19nZW5kZXIiLCJvcHRpb25zX2Npdmlsc3RhdHVzIiwiY3VzdG9tU3R5bGVzIiwiY29udHJvbCIsImNvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwiY3VzdG9tU3R5bGVzX2Vycm9yIiwiY3VzdG9tU3R5bGVzX2JpcnRoIiwibmV4dEZvcm0iLCJpcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmYWRlSW4iLCJoaWRlIiwic2Nyb2xsVG9wIiwic2hvdyIsImVtcHR5IiwiZWFjaCIsImNsZWFyIiwiY29ycG9yYXRlX25hbWUiLCJjb3Jwb3JhdGVfcG9zaXRpb24iLCJhcGlVcmxfY2hlY2tfdXNlciIsImNoZWNrX3VzZXJfZXhpc3QiLCJlbWFpbCIsInJlc3BvbnNlIiwiaHRtbCIsInByZXZGb3JtIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiYXBpVXJsX2ZldGNoX2FjY291bnRzIiwiYWNjb3VudF90eXBlcyIsImFwaVVybF9hbm51YWxfaW5jb21lIiwiYW5udWFsX2luY29tZSIsImFwaVVybF9pbnZlc3RtZW50X29iamVjdGl2ZXMiLCJpbnZlc3RtZW50X29iamVjdGl2ZSIsImFwaVVybF9zb3VyY2Vfb2ZfZnVuZHMiLCJzb3VyY2Vfb2ZfZnVuZHMiLCJhcGlVcmxfdG90YWxfYXNzZXRzIiwidG90YWxfYXNzZXRzIiwiYXBpVXJsX25ldF93b3J0aCIsIm5ldF93b3J0aCIsImZ1bmRzIiwiZmFkZU91dCIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgaGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPkFBQSBFcXVpdGllczwvdGl0bGU+XHJcbiAgXHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJDc3MvaW5kZXguY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9tZW50LmpzLzIuMjQuMC9tb21lbnQubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMjU2LTRpUVo2QlZMNHFOS2xRMjdURXhFaEJOMUhGUHZBdkFNYkZhdktLb3NTV1E9XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMjU2LVFXbzdMRHZ4YldUMnRiYlE5N0I1M3lKbllVM1doSC9DOHljYlJBa2pQRGM9XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9qcy9ib290c3RyYXAubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1PZ1ZSdnVBVFAxejdKakhMa3VPVTdYdzcwNCtoODM1THIrNlFMOVV2WWpaRTNJcHU2VHA3NWo3Qmgva1IwSktJXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4xL2Nzcy9hbGwubWluLmNzc1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgXHJcbiBcclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy80LjEuMS9hbmltYXRlLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgbmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxuYXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIGZpeGVkLXRvcFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHggMjBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2ltZ2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBtYXJnaW5MZWZ0OiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKFxuICAgICAgICAgIGFkZExvY2FsZShkZWxCYXNlUGF0aChwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSksIHRoaXMubG9jYWxlKVxuICAgICAgICApLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHJlc29sdmVkQXMpID8gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICAgICApLnBhdGhuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShyZXNvbHZlZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8IChvcHRpb25zLnNjcm9sbCA/IHsgeDogMCwgeTogMCB9IDogbnVsbClcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVOb25QYXRoKHZhbHVlOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogc3RyaW5nIHtcbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcygnOicpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJhbXMpKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKGA6JHtrZXl9YCkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwqYCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1NgXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFw/YCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTmBcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCtgLCAnZycpLCBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9QTFVTYClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fSg/IVxcXFx3KWAsICdnJyksXG4gICAgICAgICAgYC0tRVNDQVBFRF9QQVJBTV9DT0xPTiR7a2V5fWBcbiAgICAgICAgKVxuICAgIH1cbiAgfVxuICB2YWx1ZSA9IHZhbHVlXG4gICAgLnJlcGxhY2UoLyg6fFxcKnxcXD98XFwrfFxcKHxcXCl8XFx7fFxcfSkvZywgJ1xcXFwkMScpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9QTFVTL2csICcrJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0NPTE9OL2csICc6JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OL2csICc/JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLUy9nLCAnKicpXG5cbiAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gIC8vIGNvcnJlY3RseVxuICByZXR1cm4gcGF0aFRvUmVnZXhwXG4gICAgLmNvbXBpbGUoYC8ke3ZhbHVlfWAsIHsgdmFsaWRhdGU6IGZhbHNlIH0pKHBhcmFtcylcbiAgICAuc3Vic3RyKDEpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhblxuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICAvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG4gIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpXG4gIGNvbnN0IGhhZExvY2FsZSA9IHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHREZWZhdWx0TG9jYWxlXG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBjb21waWxlTm9uUGF0aCh2YWx1ZSwgcGFyYW1zKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGxldCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgLy8gcmVtb3ZlIGludGVybmFsIHBhcmFtIGZvciBpMThuXG4gIGlmIChoYWRMb2NhbGUpIHtcbiAgICBwYXJhbUtleXMgPSBwYXJhbUtleXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSAnbmV4dEludGVybmFsTG9jYWxlJylcbiAgfVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSAocGFyc2VkRGVzdGluYXRpb24gYXMgYW55KS5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi8uLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXNQYXRoLCBsb2NhbGVzKS5wYXRobmFtZSkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBjb25zdCBmc1BhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpLFxuICAgICAgICAgIGxvY2FsZXNcbiAgICAgICAgKS5wYXRobmFtZVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhmc1BhdGhuYW1lKSkge1xuICAgICAgICAgIGFzUGF0aCA9IGZzUGF0aG5hbWVcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGZzUGF0aG5hbWUpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZiYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IGdldEFwaSBmcm9tIFwiLi4vc2VydmljZXMvYXBpLnNlcnZpY2VcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IFthY2NvdW50dHlwZSwgc2V0QWNjb3VudHR5cGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc3RhY2NvdW50dHlwZSwgc2V0TGlzdGFjY291bnR0eXBlXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZm5hbWUsIHNldEZuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsbmFtZSwgc2V0TG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21uYW1lLCBzZXRNbmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGVsbnVtLCBzZXRUZWxudW1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21vYmlsZW51bSwgc2V0TW9iaWxlbnVtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiaXJ0aHBsYWNlLCBzZXRCaXJ0aHBsYWNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiaXJ0aHREYXRlLCBzZXRCaXJ0aGRhdGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Rpbiwgc2V0VGluXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYXRpb25hbGl0eSwgc2V0TmF0aW9uYWxpdHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtnZW5kZXJwaWNrLCBzZXRHZW5kZXJwaWNrXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2l2aWxzdGF0dXMsIHNldENpdmlsc3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaXZpbHN0YXR1c3BpY2ssIHNldENpdmlsc3RhdHVzcGlja10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VtcGxveWVyLCBzZXRFbXBsb3llcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbam9idGl0bGUsIHNldEpvYnRpdGxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXNhZGQsIHNldEJ1c2FkZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3JzZWxlY3RnZW5kZXIsIHNldEVycm9yc2VsZWN0Z2VuZGVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcnNlbGVjdGNpdmlsLCBzZXRFcnJvcnNlbGVjdGNpdmlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiYW5rLCBzZXRCYW5rXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFticmFuY2gsIHNldEJyYWNoXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY2NvdW50bmFtZSwgc2V0QWNjb3VudG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FjY291bnRudW1iZXIsIHNldEFjY291bnRudW1iZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ludmVzdG1lbnRvYmplY3RpdmUsIHNldEludmVzdG1lbnRvYmplY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NvdXJjZW9mZnVuZHMsIHNldFNvdXJjZW9mZnVuZHNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NvdXJjZW9mZnVuZHNwaWNrLCBzZXRTb3VyY2VvZmZ1bmRzcGlja10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG90YWxhc3NldHMsIHNldFRvdGFsYXNzZXRzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthbm51YWxpbmNvbWUsIHNldEFubnVhbGluY29tZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmV0d29ydGgsIHNldE5ldHdvcnRoXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcnNlbGVjdGZ1bmRzLCBzZXRFcnJvcnNlbGVjdGZ1bmRzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthc3NvY2lhdGVkLCBzZXRBc3NvY2lhdGVkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthc3NvY2lhdGVkY29tcGFueSwgc2V0QXNzb2NpYXRlZGNvbXBhbnldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29mZmljZXIsIHNldE9mZmljZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29mZmljZXJuYW1lLCBzZXRPZmZpY2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbGFkZCwgc2V0RW1haWxhZGRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvcnBvcmF0ZW5hbWUxLCBzZXRDb3Jwb3JhdGVuYW1lMV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29ycG9yYXRlcG9zaXRpb24xLCBzZXRDb3Jwb3JhdGVwb3NpdGlvbjFdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvcnBvcmF0ZW5hbWUyLCBzZXRDb3Jwb3JhdGVuYW1lMl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29ycG9yYXRlcG9zaXRpb24yLCBzZXRDb3Jwb3JhdGVwb3NpdGlvbjJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvcnBvcmF0ZW5hbWUzLCBzZXRDb3Jwb3JhdGVuYW1lM10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29ycG9yYXRlcG9zaXRpb24zLCBzZXRDb3Jwb3JhdGVwb3NpdGlvbjNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0W25ld2NvcnBvcmF0ZSwgc2V0TmV3Y29ycG9yYXRlXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IxLCBzZXRFcnJvcjFdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yMiwgc2V0RXJyb3IyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcjMsIHNldEVycm9yM10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3I0LCBzZXRFcnJvcjRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yNSwgc2V0RXJyb3I1XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcjYsIHNldEVycm9yNl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3I3LCBzZXRFcnJvcjddID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1xyXG4gICAgbGlzdGludmVzdG1lbnRvYmplY3RpdmVzLFxyXG4gICAgc2V0TGlzdGludmVzdG1lbnRvYmplY3RpdmVzLFxyXG4gIF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3R0b3RhbGFzc2V0cywgc2V0bGlzdFRvdGFsYXNzZXRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdGFubnVhbGluY29tZSwgc2V0TGlzdGFubnVhbGluY29tZV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RmdW5kcywgc2V0TGlzdGZ1bmRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdG5ldHdvcnRoLCBzZXRMaXN0bmV0d29ydGhdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NsaWVudHBpYywgc2V0Q2xpZW50cGljXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtqb2ludGhvbGRlciwgc2V0Sm9pbnRob2xkZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2pvaW50aG9sZGVycGljLCBzZXRKb2ludGhvbGRlcnBpY10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmFsaWRpZDEsIHNldFZhbGlkaWQxXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt2YWxpZGlkMXBpYywgc2V0VmFsaWRpZDFwaWNdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZhbGlkaWQyLCBzZXRWYWxpZGlkMl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmFsaWRpZDJwaWMsIHNldFZhbGlkaWQycGljXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlcGljLCBzZXRQcm9maWxlcGljXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBpbnB1dEZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmMSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnB1dEZpbGVSZWYyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlucHV0RmlsZVJlZjMgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRGaWxlUmVmNCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgb25CdG5DbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrMSA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjEuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CdG5DbGljazIgPSAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGVSZWYyLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQnRuQ2xpY2szID0gKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlUmVmMy5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCBvbkJ0bkNsaWNrNCA9ICgpID0+IHtcclxuICAgIGlucHV0RmlsZVJlZjQuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHRyeWxhbmcoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShuZXdjb3Jwb3JhdGUpKTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBzYXZlYWNjb3VudCgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgeHNyZkNvb2tpZU5hbWU6IFwiWFNSRi1UT0tFTlwiLFxyXG4gICAgICAgIHhzcmZIZWFkZXJOYW1lOiBcIlgtWFNSRi1UT0tFTlwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBlbWFpbGFkZCk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJuYW1lXCIsIHVzZXJuYW1lKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImZpcnN0bmFtZVwiLCBmbmFtZSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJsYXN0bmFtZVwiLCBsbmFtZSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJtaWRkbGVuYW1lXCIsIG1uYW1lKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcInRlbGVwaG9uZV9ub1wiLCB0ZWxudW0pO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwibW9iaWxlX25vXCIsIG1vYmlsZW51bSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJhZGRyZXNzXCIsIGFkZHJlc3MpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiYmlydGhkYXRlXCIsIG1vbWVudChiaXJ0aHREYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcInRpbl9ub1wiLCB0aW4pO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwibmF0aW9uYWxpdHlcIiwgbmF0aW9uYWxpdHkpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiZ2VuZGVyXCIsIGdlbmRlcik7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJjaXZpbF9zdGF0dXNcIiwgY2l2aWxzdGF0dXMpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiZW1wbG95ZXJcIiwgZW1wbG95ZXIpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiam9iX3RpdGxlXCIsIGpvYnRpdGxlKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImJ1c2luZXNzX2FkZHJlc3NcIiwgYnVzYWRkKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImFjY291bnRfdHlwZVwiLCBhY2NvdW50dHlwZSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJiYW5rX25hbWVcIiwgYmFuayk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJicmFuY2hfbmFtZVwiLCBicmFuY2gpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiYWNjb3VudF9uYW1lXCIsIGFjY291bnRuYW1lKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImFjY291bnRfbnVtYmVyXCIsIGFjY291bnRudW1iZXIpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiaW52ZXN0bWVudF9vYmplY3RpdmVcIiwgaW52ZXN0bWVudG9iamVjdGl2ZSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJzb3VyY2Vfb2ZfZnVuZHNcIiwgc291cmNlb2ZmdW5kcyk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJ0b3RhbF9hc3NldHNcIiwgdG90YWxhc3NldHMpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiYW5udWFsX2luY29tZVwiLCBhbm51YWxpbmNvbWUpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwibmV0X3dvcnRoXCIsIG5ldHdvcnRoKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImlzX2Fzc29jaWF0ZWRcIiwgYXNzb2NpYXRlZCk7XHJcbiAgICBpZiAoYXNzb2NpYXRlZCA9PSBcIjFcIikge1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJhc3NvY2lhdGVfY29tcGFueV9uYW1lXCIsIGFzc29jaWF0ZWRjb21wYW55KTtcclxuICAgIH1cclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImlzX29mZmljZXJfZGlyZWN0b3JcIiwgb2ZmaWNlcik7XHJcbiAgICBpZiAob2ZmaWNlciA9PSBcIjFcIikge1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJvZmZpY2VyX2RpcmVjdG9yX2NvbXBhbnlfbmFtZVwiLCBvZmZpY2VybmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjY291bnR0eXBlID09IFwiM1wiKSB7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImNvcnBvcmF0ZV9hY2NvdW50c1wiLCBKU09OLnN0cmluZ2lmeShuZXdjb3Jwb3JhdGUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImNvcnBvcmF0ZV9hY2NvdW50c1wiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGZvcm1kYXRhLmFwcGVuZChcImNsaWVudF9zaWduYXR1cmVfaW1hZ2VcIiwgY2xpZW50LCBjbGllbnQubmFtZSk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXHJcbiAgICAgIFwiam9pbnRfYWNjb3VudF9zaWduYXR1cmVfaW1hZ2VcIixcclxuICAgICAgam9pbnRob2xkZXIsXHJcbiAgICAgIGpvaW50aG9sZGVyLm5hbWVcclxuICAgICk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJ2YWxpZF9pZF9vbmVcIiwgdmFsaWRpZDEsIHZhbGlkaWQxLm5hbWUpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKFwidmFsaWRfaWRfdHdvXCIsIHZhbGlkaWQyLCB2YWxpZGlkMi5uYW1lKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZChcInNlbGZfaW1hZ2VcIiwgcHJvZmlsZSwgcHJvZmlsZS5uYW1lKTtcclxuXHJcbiAgICBjb25zdCBhcGlVcmxfYWRkX2FjY291bnQgPVxyXG4gICAgICBhcHBnbG9iYWwuYXBpLmJhc2VfYXBpICsgYXBwZ2xvYmFsLmFwaS5hZGRfYWNjb3VudDtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChhcGlVcmxfYWRkX2FjY291bnQsIGZvcm1kYXRhLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZm9yICh2YXIgcGFpciBvZiBmb3JtZGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHBhaXJbMF0gKyBcIiwgXCIgKyBwYWlyWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAkKFwiI21vZGFsVmVyaWZ5XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2hlY2sucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPlN1Y2Nlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPkFjY291bnQgc3VjY2VzZnVsbHkgY3JlYXRlZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc3dhbChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+WW91ciBwcm9maWxlIGNhbm5vdCBiZSBzYXZlZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUubmFtZSk7XHJcbiAgICAkKFwiLnBVcGxvYWRjbGllbnRcIikudGV4dChmaWxlLm5hbWUpO1xyXG4gICAgc2V0Q2xpZW50cGljKGZpbGUubmFtZSk7XHJcbiAgICBzZXRDbGllbnQoZmlsZSk7XHJcbiAgICAkKFwiLmRpdkNsaWVudFwiKS5hdHRyKFwic3R5bGVcIiwgXCIycHggc29saWQgIzkwOThBOVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUxKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlLm5hbWUpO1xyXG4gICAgJChcIi5wVXBsb2Fkam9pbnRcIikudGV4dChmaWxlLm5hbWUpO1xyXG4gICAgc2V0Sm9pbnRob2xkZXJwaWMoZmlsZS5uYW1lKTtcclxuICAgIHNldEpvaW50aG9sZGVyKGZpbGUpO1xyXG4gICAgJChcIi5kaXZKb2ludFwiKS5hdHRyKFwic3R5bGVcIiwgXCIycHggc29saWQgIzkwOThBOVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUyKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlLm5hbWUpO1xyXG4gICAgJChcIi5wVXBsb2FkdmFsaWQxXCIpLnRleHQoZmlsZS5uYW1lKTtcclxuICAgIHNldFZhbGlkaWQxcGljKGZpbGUubmFtZSk7XHJcbiAgICBzZXRWYWxpZGlkMShmaWxlKTtcclxuICAgICQoXCIuZGl2VmFsaWQxXCIpLmF0dHIoXCJzdHlsZVwiLCBcIjJweCBzb2xpZCAjOTA5OEE5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZTMoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUubmFtZSk7XHJcbiAgICAkKFwiLnBVcGxvYWR2YWxpZDJcIikudGV4dChmaWxlLm5hbWUpO1xyXG4gICAgc2V0VmFsaWRpZDJwaWMoZmlsZS5uYW1lKTtcclxuICAgIHNldFZhbGlkaWQyKGZpbGUpO1xyXG4gICAgJChcIi5kaXZWYWxpZDJcIikuYXR0cihcInN0eWxlXCIsIFwiMnB4IHNvbGlkICM5MDk4QTlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWxlNChlKSB7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc29sZS5sb2coZmlsZS5uYW1lKTtcclxuICAgICQoXCIucFByb2ZpbGVwaWNcIikudGV4dChmaWxlLm5hbWUpO1xyXG4gICAgc2V0UHJvZmlsZXBpYyhmaWxlLm5hbWUpO1xyXG4gICAgc2V0UHJvZmlsZShmaWxlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEFjY291bnQoZSkge1xyXG4gICAgc2V0QWNjb3VudHR5cGUoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUZuYW1lKGUpIHtcclxuICAgIHNldEZuYW1lKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlTW5hbWUoZSkge1xyXG4gICAgc2V0TW5hbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUxuYW1lKGUpIHtcclxuICAgIHNldExuYW1lKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VUZWxudW0oZSkge1xyXG4gICAgc2V0VGVsbnVtKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VNb2JpbGVudW0oZSkge1xyXG4gICAgc2V0TW9iaWxlbnVtKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VCaXJ0aHBsYWNlKGUpIHtcclxuICAgIHNldEJpcnRocGxhY2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUFkZHJlc3MoZSkge1xyXG4gICAgc2V0QWRkcmVzcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQmlydGhkYXRlKGRhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKG1vbWVudChkYXRlKS5mb3JtYXQoXCJsXCIpKTtcclxuICAgIHNldEJpcnRoZGF0ZShkYXRlKTtcclxuICAgICQoXCIucmVhY3QtZGF0ZXBpY2tlcl9faW5wdXQtY29udGFpbmVyXCIpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdldGluKGUpIHtcclxuICAgIHNldFRpbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlTmF0aW9uYWxpdHkoZSkge1xyXG4gICAgc2V0TmF0aW9uYWxpdHkoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUdlbmRlcihlKSB7XHJcbiAgICBzZXRHZW5kZXIoZS5sYWJlbCk7XHJcbiAgICBzZXRHZW5kZXJwaWNrKHsgdmFsdWU6IGUudmFsdWUsIGxhYmVsOiBlLmxhYmVsIH0pO1xyXG4gICAgY29uc29sZS5sb2coZS5sYWJlbCk7XHJcbiAgICBzZXRFcnJvcnNlbGVjdGdlbmRlcihcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUNpdmlsKGUpIHtcclxuICAgIHNldENpdmlsc3RhdHVzKGUubGFiZWwpO1xyXG4gICAgc2V0Q2l2aWxzdGF0dXNwaWNrKHsgdmFsdWU6IGUudmFsdWUsIGxhYmVsOiBlLmxhYmVsIH0pO1xyXG4gICAgc2V0RXJyb3JzZWxlY3RjaXZpbChcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUVtcGxveWVyKGUpIHtcclxuICAgIHNldEVtcGxveWVyKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VKb2J0aXRsZShlKSB7XHJcbiAgICBzZXRKb2J0aXRsZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQnVzYWRkKGUpIHtcclxuICAgIHNldEJ1c2FkZChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQmFuayhlKSB7XHJcbiAgICBzZXRCYW5rKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VCcmFuY2goZSkge1xyXG4gICAgc2V0QnJhY2goZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUFjY291bnRuYW1lKGUpIHtcclxuICAgIHNldEFjY291bnRuYW1lKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VBY2NvdW50bnVtYmVyKGUpIHtcclxuICAgIHNldEFjY291bnRudW1iZXIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUludmVzdG1lbnRvYmplY3RpdmUoZSkge1xyXG4gICAgc2V0SW52ZXN0bWVudG9iamVjdGl2ZShlLmN1cnJlbnRUYXJnZXQuaWQpO1xyXG4gICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VTb3VyY2VvZmZ1bmRzKGUpIHtcclxuICAgIHNldFNvdXJjZW9mZnVuZHMoZS52YWx1ZSk7XHJcbiAgICBzZXRTb3VyY2VvZmZ1bmRzcGljayh7IHZhbHVlOiBlLnZhbHVlLCBsYWJlbDogZS5sYWJlbCB9KTtcclxuICAgIHNldEVycm9yc2VsZWN0ZnVuZHMoXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VUb3RhbGFzc2V0cyhlKSB7XHJcbiAgICBzZXRUb3RhbGFzc2V0cyhlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUFubnVhbGluY29tZShlKSB7XHJcbiAgICBzZXRBbm51YWxpbmNvbWUoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VOZXR3b3J0aChlKSB7XHJcbiAgICBzZXROZXR3b3J0aChlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUFzcyhlKSB7XHJcbiAgICBzZXRBc3NvY2lhdGVkKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUpO1xyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT0gXCIwXCIpIHtcclxuICAgICAgc2V0QXNzb2NpYXRlZGNvbXBhbnkoXCJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VPZmZpY2VyKGUpIHtcclxuICAgIHNldE9mZmljZXIoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9PSBcIjBcIikge1xyXG4gICAgICBzZXRPZmZpY2VybmFtZShcIlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUFzc2NvbXBhbnkoZSkge1xyXG4gICAgc2V0QXNzb2NpYXRlZGNvbXBhbnkoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZU9mZmljZXJuYW1lKGUpIHtcclxuICAgIHNldE9mZmljZXJuYW1lKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VVc2VybmFtZShlKSB7XHJcbiAgICBzZXRVc2VybmFtZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlRW1haWxhZGQoZSkge1xyXG4gICAgc2V0RW1haWxhZGQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUNvcnBvcmF0ZW5hbWUxKGUpIHtcclxuICAgIHNldENvcnBvcmF0ZW5hbWUxKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VDb3Jwb3JhdGVwb3NpdGlvbjEoZSkge1xyXG4gICAgc2V0Q29ycG9yYXRlcG9zaXRpb24xKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNDRUNFQ0VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VDb3Jwb3JhdGVuYW1lMihlKSB7XHJcbiAgICBzZXRDb3Jwb3JhdGVuYW1lMihlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ29ycG9yYXRlcG9zaXRpb24yKGUpIHtcclxuICAgIHNldENvcnBvcmF0ZXBvc2l0aW9uMihlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjQ0VDRUNFXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ29ycG9yYXRlbmFtZTMoZSkge1xyXG4gICAgc2V0Q29ycG9yYXRlbmFtZTMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUNvcnBvcmF0ZXBvc2l0aW9uMyhlKSB7XHJcbiAgICBzZXRDb3Jwb3JhdGVwb3NpdGlvbjMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0NFQ0VDRVwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3R5ZWFyID0gW107XHJcbiAgY29uc3QgbGlzdHNvdXJjZWZ1bmRzID0gW107XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNfZ2VuZGVyID0gW1xyXG4gICAgeyB2YWx1ZTogXCJNYWxlXCIsIGxhYmVsOiBcIk1hbGVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJGZW1hbGVcIiwgbGFiZWw6IFwiRmVtYWxlXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBvcHRpb25zX2Npdmlsc3RhdHVzID0gW1xyXG4gICAgeyB2YWx1ZTogXCJTaW5nbGVcIiwgbGFiZWw6IFwiU2luZ2xlXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTWFycmllZFwiLCBsYWJlbDogXCJNYXJyaWVkXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiRGl2b3JjZWRcIiwgbGFiZWw6IFwiRGl2b3JjZWRcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJXaWRvd2VkXCIsIGxhYmVsOiBcIldpZG93ZWRcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgY29sb3I6IFwiIzIxMjEyMVwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjZWNlY2VcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXNfZXJyb3IgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZWRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXNfYmlydGggPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2VjZWNlXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwiIzIxMjEyMVwiLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dEZvcm0oKSB7XHJcbiAgICBpZiAoJChcIi5kaXZGb3JtMVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoIWFjY291bnR0eXBlKSB7XHJcbiAgICAgICAgc3dhbChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Pb29vcHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5QbGVhc2Ugc2VsZWN0IGFuIGFjY291bnQgdHlwZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKCEkKFwiI2NieFwiKS5pcyhcIjpjaGVja2VkXCIpIHx8ICEkKFwiI2NieDFcIikuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgICAgIHN3YWwoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMjBweCA4cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9lcnJvci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiwgbWFyZ2luVG9wOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBhZ2dyZWUgdG8gb3VyIHRlcm1zIGFuZCBjb25kaXRpb25zIGFuZCBwcml2YWN5XHJcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5LlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDUwMSkge1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcIjUwJVwiKTtcclxuICAgICAgICAgICQoXCIuY29sSW1hZ2VcIikuYWRkQ2xhc3MoXCJjb2wtc20tNCBjb2wtNFwiKTtcclxuICAgICAgICAgICQoXCIuYm94XCIpLmNzcyhcIm1hcmdpbi10b3BcIiwgXCI1MHB4XCIpO1xyXG4gICAgICAgICAgJChcIi5jaXJjbGUyXCIpLmFkZENsYXNzKFwiY2lyY2xlYWN0aXZlbW9iaWxlXCIpO1xyXG4gICAgICAgICAgJChcIi5jaXJjbGUxXCIpLmFkZENsYXNzKFwiY2lyY2xlbm90YWN0aXZlbW9iaWxlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiYXV0b1wiKTtcclxuICAgICAgICAgICQoXCIuaW1nQ2lyY2xlMlwiKS5jc3MoXCJ3aWR0aFwiLCBcIjI1cHhcIik7XHJcbiAgICAgICAgICAkKFwiLmltZ0NpcmNsZTFcIikuY3NzKFwid2lkdGhcIiwgXCIxNXB4XCIpO1xyXG4gICAgICAgICAgJChcIi5jaXJjbGUyXCIpLnJlbW92ZUNsYXNzKFwiY2lyY2xlbm90YWN0aXZlXCIpO1xyXG4gICAgICAgICAgJChcIi5jaXJjbGUxXCIpLmFkZENsYXNzKFwiY2lyY2xlbm90YWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLmNvbExlZnRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgICAkKFwiLmNvbExlZnRcIikuYWRkQ2xhc3MoXCJjb2wtbGctOFwiKTtcclxuICAgICAgICAkKFwiLmNvbFJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLTZcIik7XHJcbiAgICAgICAgJChcIi5jb2xSaWdodFwiKS5hZGRDbGFzcyhcImNvbC1sZy00XCIpO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTJcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtMVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiNTAwcHhcIik7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmF0dHIoXCJzcmNcIiwgXCJJbWFnZS9mb3JtMi5zdmdcIik7XHJcbiAgICAgICAgJChcIi5wRm9ybTFcIikuZmFkZUluKDIwMCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XHJcbiAgICAgICAgJChcIi5jb2xCYWNrXCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0yXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhZm5hbWUgfHxcclxuICAgICAgICAhbW5hbWUgfHxcclxuICAgICAgICAhbG5hbWUgfHxcclxuICAgICAgICAhdGVsbnVtIHx8XHJcbiAgICAgICAgIW1vYmlsZW51bSB8fFxyXG4gICAgICAgICFiaXJ0aHBsYWNlIHx8XHJcbiAgICAgICAgIWFkZHJlc3MgfHxcclxuICAgICAgICAhYmlydGh0RGF0ZVxyXG4gICAgICApIHtcclxuICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPk9vb29wcyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBmaWxsIHVwIGFsbCB0aGUgbWlzc2luZyBmaWVsZHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGVtcHR5ID0gMDtcclxuICAgICAgICAkKFwiLnR4dEZvcm0yXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBlbXB0eSsrO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCByZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFiaXJ0aHREYXRlKSB7XHJcbiAgICAgICAgICAkKFwiLnJlYWN0LWRhdGVwaWNrZXJfX2lucHV0LWNvbnRhaW5lclwiKS5jc3MoXHJcbiAgICAgICAgICAgIFwiYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmRpdkZvcm0zXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjQ1MHB4XCIpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcIm1hcmdpbi10b3BcIiwgXCItNDBweFwiKTtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTNcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFnZW5kZXIgfHxcclxuICAgICAgICAhdGluIHx8XHJcbiAgICAgICAgIW5hdGlvbmFsaXR5IHx8XHJcbiAgICAgICAgIWNpdmlsc3RhdHVzIHx8XHJcbiAgICAgICAgIWVtcGxveWVyIHx8XHJcbiAgICAgICAgIWpvYnRpdGxlIHx8XHJcbiAgICAgICAgIWJ1c2FkZFxyXG4gICAgICApIHtcclxuICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPk9vb29wcyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBmaWxsIHVwIGFsbCB0aGUgbWlzc2luZyBmaWVsZHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGVtcHR5ID0gMDtcclxuICAgICAgICAkKFwiLnR4dEZvcm0zXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBlbXB0eSsrO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCByZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghZ2VuZGVyKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnNlbGVjdGdlbmRlcihcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2l2aWxzdGF0dXMpIHtcclxuICAgICAgICAgIHNldEVycm9yc2VsZWN0Y2l2aWwoXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbEltYWdlXCIpLmFkZENsYXNzKFwiY29sLXNtLTQgY29sLTRcIik7XHJcbiAgICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsIFwiNTBweFwiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlM1wiKS5hZGRDbGFzcyhcImNpcmNsZWFjdGl2ZW1vYmlsZVwiKTtcclxuICAgICAgICAgICQoXCIuY2lyY2xlMlwiKS5hZGRDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZW1vYmlsZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcIi5pbWdDaXJjbGUzXCIpLmNzcyhcIndpZHRoXCIsIFwiMjVweFwiKTtcclxuICAgICAgICAgICQoXCIuaW1nQ2lyY2xlMlwiKS5jc3MoXCJ3aWR0aFwiLCBcIjE1cHhcIik7XHJcbiAgICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmFkZENsYXNzKFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fem9vbUluXCIpO1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvZm9ybTMuc3ZnXCIpO1xyXG4gICAgICAgICAgJChcIi5jaXJjbGUzXCIpLnJlbW92ZUNsYXNzKFwiY2lyY2xlbm90YWN0aXZlXCIpO1xyXG4gICAgICAgICAgJChcIi5jaXJjbGUyXCIpLmFkZENsYXNzKFwiY2lyY2xlbm90YWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLmRpdkZvcm00XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTNcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjUyMHB4XCIpO1xyXG5cclxuICAgICAgICAkKFwiLnBGb3JtXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsIFwiMTBweFwiKTtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgICQoXCIucEZvcm0yXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTRcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFiYW5rIHx8XHJcbiAgICAgICAgIWJyYW5jaCB8fFxyXG4gICAgICAgICFhY2NvdW50bnVtYmVyIHx8XHJcbiAgICAgICAgIWFjY291bnRuYW1lIHx8XHJcbiAgICAgICAgIWludmVzdG1lbnRvYmplY3RpdmVcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3dhbChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Pb29vcHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIG1pc3NpbmcgZmllbGRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBlbXB0eSA9IDA7XHJcbiAgICAgICAgJChcIi50eHRGb3JtNFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZW1wdHkrKztcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTVcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtNFwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiNTUwcHhcIik7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm01XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmICghc291cmNlb2ZmdW5kcyB8fCAhdG90YWxhc3NldHMgfHwgIWFubnVhbGluY29tZSB8fCAhbmV0d29ydGgpIHtcclxuICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPk9vb29wcyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBmaWxsIHVwIGFsbCB0aGUgbWlzc2luZyBmaWVsZHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCFzb3VyY2VvZmZ1bmRzKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnNlbGVjdGZ1bmRzKFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtNlwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm01XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI1NTBweFwiKTtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTZcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coYXNzb2NpYXRlZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9mZmljZXIpO1xyXG4gICAgICBpZiAoIWFzc29jaWF0ZWQgfHwgIW9mZmljZXIpIHtcclxuICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPk9vb29wcyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBmaWxsIHVwIGFsbCB0aGUgbWlzc2luZyBmaWVsZHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXNzb2NpYXRlZCA9PSBcIjFcIiAmJiAhYXNzb2NpYXRlZGNvbXBhbnkpIHtcclxuICAgICAgICAkKFwiLnR4dGFzc1wiKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKG9mZmljZXIgPT0gXCIxXCIgJiYgIW9mZmljZXJuYW1lKSB7XHJcbiAgICAgICAgJChcIi50eHRvZmZpY2VybmFtZVwiKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChhY2NvdW50dHlwZSA9PSBcIjNcIikge1xyXG4gICAgICAgICAgJChcIi5jb2xMZWZ0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLThcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbExlZnRcIikuYWRkQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgICAgICQoXCIuY29sUmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctNFwiKTtcclxuICAgICAgICAgICQoXCIuY29sUmlnaHRcIikuYWRkQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgICAgICQoXCIuZGl2Rm9ybTdcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAkKFwiLmRpdkZvcm02XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjQ1MHB4XCIpO1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuYXR0cihcInNyY1wiLCBcIkltYWdlL2Zvcm03LnN2Z1wiKTtcclxuICAgICAgICAgICQoXCIucEZvcm1cIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5wRm9ybTdcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcIjMwJVwiKTtcclxuICAgICAgICAgICAgJChcIi5jb2xJbWFnZVwiKS5yZW1vdmVDbGFzcyhcImNvbC1zbS00IGNvbC00XCIpO1xyXG4gICAgICAgICAgICAkKFwiLnBGb3JtN1wiKS5hZGRDbGFzcyhcInBJbXBvcnRhbnRcIik7XHJcbiAgICAgICAgICAgICQoXCIuY29sVGV4dFwiKS5yZW1vdmVDbGFzcyhcImNvbC1zbS04IGNvbC04XCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiLmNvbExlZnRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctOFwiKTtcclxuICAgICAgICAgICQoXCIuY29sTGVmdFwiKS5hZGRDbGFzcyhcImNvbC1sZy02XCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xSaWdodFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy00XCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xSaWdodFwiKS5hZGRDbGFzcyhcImNvbC1sZy02XCIpO1xyXG4gICAgICAgICAgJChcIi5kaXZGb3JtOFwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICQoXCIuZGl2Rm9ybTZcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiMzUwcHhcIik7XHJcbiAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm03XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIHZhciBjbGVhciA9IDA7XHJcbiAgICAgIGlmIChjb3Jwb3JhdGVuYW1lMSAmJiAhY29ycG9yYXRlcG9zaXRpb24xKSB7XHJcbiAgICAgICAgJChcIi50eHRwb3NpdGlvbjFcIikuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgICBjbGVhciA9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWNvcnBvcmF0ZW5hbWUxICYmIGNvcnBvcmF0ZXBvc2l0aW9uMSkge1xyXG4gICAgICAgICQoXCIudHh0bmFtZTFcIikuY3NzKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIHJlZFwiKTtcclxuICAgICAgICBjbGVhciA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvcnBvcmF0ZW5hbWUyICYmICFjb3Jwb3JhdGVwb3NpdGlvbjIpIHtcclxuICAgICAgICAkKFwiLnR4dHBvc2l0aW9uMlwiKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgIGNsZWFyID0gMTtcclxuICAgICAgfSBlbHNlIGlmICghY29ycG9yYXRlbmFtZTIgJiYgY29ycG9yYXRlcG9zaXRpb24yKSB7XHJcbiAgICAgICAgJChcIi50eHRuYW1lMlwiKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgIGNsZWFyID0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29ycG9yYXRlbmFtZTMgJiYgIWNvcnBvcmF0ZXBvc2l0aW9uMykge1xyXG4gICAgICAgICQoXCIudHh0cG9zaXRpb24zXCIpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCByZWRcIik7XHJcbiAgICAgICAgY2xlYXIgPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKCFjb3Jwb3JhdGVuYW1lMyAmJiBjb3Jwb3JhdGVwb3NpdGlvbjMpIHtcclxuICAgICAgICAkKFwiLnR4dG5hbWUzXCIpLmNzcyhcImJvcmRlclwiLCBcIjFweCBzb2xpZCByZWRcIik7XHJcbiAgICAgICAgY2xlYXIgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2xlYXIgPT0gMCkge1xyXG4gICAgICAgIGlmIChjb3Jwb3JhdGVuYW1lMSAmJiBjb3Jwb3JhdGVwb3NpdGlvbjEpIHtcclxuICAgICAgICAgIG5ld2NvcnBvcmF0ZS5wdXNoKHtcclxuICAgICAgICAgICAgY29ycG9yYXRlX25hbWU6IGNvcnBvcmF0ZW5hbWUxLFxyXG4gICAgICAgICAgICBjb3Jwb3JhdGVfcG9zaXRpb246IGNvcnBvcmF0ZXBvc2l0aW9uMSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvcnBvcmF0ZW5hbWUyICYmIGNvcnBvcmF0ZXBvc2l0aW9uMikge1xyXG4gICAgICAgICAgbmV3Y29ycG9yYXRlLnB1c2goe1xyXG4gICAgICAgICAgICBjb3Jwb3JhdGVfbmFtZTogY29ycG9yYXRlbmFtZTIsXHJcbiAgICAgICAgICAgIGNvcnBvcmF0ZV9wb3NpdGlvbjogY29ycG9yYXRlcG9zaXRpb24yLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb3Jwb3JhdGVuYW1lMyAmJiBjb3Jwb3JhdGVwb3NpdGlvbjMpIHtcclxuICAgICAgICAgIG5ld2NvcnBvcmF0ZS5wdXNoKHtcclxuICAgICAgICAgICAgY29ycG9yYXRlX25hbWU6IGNvcnBvcmF0ZW5hbWUzLFxyXG4gICAgICAgICAgICBjb3Jwb3JhdGVfcG9zaXRpb246IGNvcnBvcmF0ZXBvc2l0aW9uMyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNTAxKSB7XHJcbiAgICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiMzAlXCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xJbWFnZVwiKS5yZW1vdmVDbGFzcyhcImNvbC1zbS00IGNvbC00XCIpO1xyXG4gICAgICAgICAgJChcIi5wRm9ybTdcIikuYWRkQ2xhc3MoXCJwSW1wb3J0YW50XCIpO1xyXG4gICAgICAgICAgJChcIi5jb2xUZXh0XCIpLnJlbW92ZUNsYXNzKFwiY29sLXNtLTggY29sLThcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLmRpdkZvcm04XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTdcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjM1MHB4XCIpO1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtOFwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoIWNsaWVudHBpYykge1xyXG4gICAgICAgICQoXCIuZGl2Q2xpZW50XCIpLmF0dHIoXCJzdHlsZVwiLCBcImJvcmRlcjogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmRpdkZvcm05XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybThcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjM1MHB4XCIpO1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtOVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoIWpvaW50aG9sZGVycGljKSB7XHJcbiAgICAgICAgJChcIi5kaXZKb2ludFwiKS5hdHRyKFwic3R5bGVcIiwgXCJib3JkZXI6IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtMTBcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtOVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiNDUwcHhcIik7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0xMFwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoIXZhbGlkaWQxcGljIHx8ICF2YWxpZGlkMnBpYykge1xyXG4gICAgICAgICQoXCIuZGl2VmFsaWQxLCAuZGl2VmFsaWQyXCIpLmF0dHIoXHJcbiAgICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgICBcImJvcmRlcjogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmICghdmFsaWRpZDFwaWMpIHtcclxuICAgICAgICAkKFwiLmRpdlZhbGlkMVwiKS5hdHRyKFwic3R5bGVcIiwgXCJib3JkZXI6IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXZhbGlkaWQycGljKSB7XHJcbiAgICAgICAgJChcIi5kaXZWYWxpZDJcIikuYXR0cihcInN0eWxlXCIsIFwiYm9yZGVyOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTExXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybTEwXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCIzMDBweFwiKTtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDUwMSkge1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcIjcwJVwiKTtcclxuICAgICAgICAgICQoXCIuY29sSW1hZ2VcIikucmVtb3ZlQ2xhc3MoXCJjb2wtc20tNCBjb2wtNFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI4MCVcIik7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmF0dHIoXCJzcmNcIiwgXCJJbWFnZS9waG9uZTEucG5nXCIpO1xyXG4gICAgICAgICQoXCIucEZvcm1cIikuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTExXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmICghdXNlcm5hbWUgfHwgIWVtYWlsYWRkKSB7XHJcbiAgICAgICAgdmFyIGVtcHR5ID0gMDtcclxuICAgICAgICAkKFwiLnR4dEZvcm0xMVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZW1wdHkrKztcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJib3JkZXJcIiwgXCIxcHggc29saWQgcmVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIHhzcmZDb29raWVOYW1lOiBcIlhTUkYtVE9LRU5cIixcclxuICAgICAgICAgICAgeHNyZkhlYWRlck5hbWU6IFwiWC1YU1JGLVRPS0VOXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFwaVVybF9jaGVja191c2VyID1cclxuICAgICAgICAgIGFwcGdsb2JhbC5hcGkuYmFzZV9hcGkgKyBhcHBnbG9iYWwuYXBpLmNoZWNrX3VzZXJfZXhpc3Q7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgIGFwaVVybF9jaGVja191c2VyLFxyXG4gICAgICAgICAgICB7IHBhcmFtczogeyBuYW1lOiB1c2VybmFtZSwgZW1haWw6IGVtYWlsYWRkIH0gfSxcclxuICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgJChcIi5wQm94XCIpLmNzcyhcImZvbnQtc2l6ZVwiLCBcIjIuMnJlbVwiKTtcclxuICAgICAgICAgICAgJChcIi5kaXZGb3JtMTJcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAgICQoXCIuZGl2Rm9ybTExXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcIjgwJVwiKTtcclxuICAgICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2Uvc2VsZmllLnN2Z1wiKTtcclxuICAgICAgICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiMzE1cHhcIik7XHJcbiAgICAgICAgICAgICQoXCIucEZvcm1cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLnBGb3JtOFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIuYnRuTmV4dFwiKS5odG1sKFwiQ1JFQVRFXCIpO1xyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHN3YWwoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjIwcHggOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9lcnJvci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIsIG1hcmdpblRvcDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5Pb29vcHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+e2Vyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtMTIgIFwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICAkKFwiI21vZGFsVmVyaWZ5XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgc2F2ZWFjY291bnQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJldkZvcm0oKSB7XHJcbiAgICBpZiAoJChcIi5kaXZGb3JtMlwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmNzcyhcIndpZHRoXCIsIFwiNzAlXCIpO1xyXG4gICAgICAgICQoXCIuY29sSW1hZ2VcIikucmVtb3ZlQ2xhc3MoXCJjb2wtc20tNCBjb2wtNFwiKTtcclxuXHJcbiAgICAgICAgJChcIi5jaXJjbGUxXCIpLmFkZENsYXNzKFwiY2lyY2xlYWN0aXZlbW9iaWxlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLmNpcmNsZTJcIikucmVtb3ZlQ2xhc3MoXCJjaXJjbGVhY3RpdmVtb2JpbGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcImF1dG9cIik7XHJcbiAgICAgIH1cclxuICAgICAgJChcIi5jb2xMZWZ0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLThcIik7XHJcbiAgICAgICQoXCIuY29sTGVmdFwiKS5hZGRDbGFzcyhcImNvbC1sZy02XCIpO1xyXG4gICAgICAkKFwiLmNvbFJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiY29sLWxnLTRcIik7XHJcbiAgICAgICQoXCIuY29sUmlnaHRcIikuYWRkQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgJChcIi5kaXZGb3JtMVwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgJChcIi5kaXZGb3JtMlwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjM1MHB4XCIpO1xyXG4gICAgICAkKFwiLmltZ1JpZ2h0XCIpLmFkZENsYXNzKFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fem9vbUluXCIpO1xyXG4gICAgICAkKFwiLmltZ1JpZ2h0XCIpLmF0dHIoXCJzcmNcIiwgXCJJbWFnZS9waG9uZTEucG5nXCIpO1xyXG4gICAgICAkKFwiLnBGb3JtXCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5pbWdDaXJjbGUxXCIpLmNzcyhcIndpZHRoXCIsIFwiMjVweFwiKTtcclxuICAgICAgJChcIi5pbWdDaXJjbGUyXCIpLmNzcyhcIndpZHRoXCIsIFwiMTVweFwiKTtcclxuICAgICAgJChcIi5jaXJjbGUxXCIpLnJlbW92ZUNsYXNzKFwiY2lyY2xlbm90YWN0aXZlXCIpO1xyXG4gICAgICAkKFwiLmNpcmNsZTJcIikuYWRkQ2xhc3MoXCJjaXJjbGVub3RhY3RpdmVcIik7XHJcbiAgICAgICQoXCIuY29sQmFja1wiKS5oaWRlKCk7XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTNcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuICAgICAgJChcIi5kaXZGb3JtMlwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgJChcIi5kaXZGb3JtM1wiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjUwMHB4XCIpO1xyXG4gICAgICAkKFwiLmJveFwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsIFwiMzBweFwiKTtcclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtNFwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAkKFwiLmNpcmNsZTJcIikuYWRkQ2xhc3MoXCJjaXJjbGVhY3RpdmVtb2JpbGVcIik7XHJcblxyXG4gICAgICAgICQoXCIuY2lyY2xlM1wiKS5yZW1vdmVDbGFzcyhcImNpcmNsZWFjdGl2ZW1vYmlsZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmltZ0NpcmNsZTJcIikuY3NzKFwid2lkdGhcIiwgXCIyNXB4XCIpO1xyXG4gICAgICAgICQoXCIuaW1nQ2lyY2xlM1wiKS5jc3MoXCJ3aWR0aFwiLCBcIjE1cHhcIik7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmF0dHIoXCJzcmNcIiwgXCJJbWFnZS9mb3JtMi5zdmdcIik7XHJcbiAgICAgICAgJChcIi5jaXJjbGUyXCIpLnJlbW92ZUNsYXNzKFwiY2lyY2xlbm90YWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIuY2lyY2xlM1wiKS5hZGRDbGFzcyhcImNpcmNsZW5vdGFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICAkKFwiLmRpdkZvcm0zXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAkKFwiLmRpdkZvcm00XCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiNDUwcHhcIik7XHJcblxyXG4gICAgICAkKFwiLnBGb3JtMlwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIucEZvcm0xXCIpLmZhZGVJbigyMDApO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm01XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTRcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTVcIikuaGlkZSgpO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm02XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTVcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTZcIikuaGlkZSgpO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm03XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDUwMSkge1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICAgICAgJChcIi5jb2xJbWFnZVwiKS5hZGRDbGFzcyhcImNvbC1zbS00IGNvbC00XCIpO1xyXG4gICAgICAgICQoXCIuY29sVGV4dFwiKS5hZGRDbGFzcyhcImNvbC1zbS04IGNvbC04XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIuY29sTGVmdFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy02XCIpO1xyXG4gICAgICAkKFwiLmNvbExlZnRcIikuYWRkQ2xhc3MoXCJjb2wtbGctOFwiKTtcclxuICAgICAgJChcIi5jb2xSaWdodFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy02XCIpO1xyXG4gICAgICAkKFwiLmNvbFJpZ2h0XCIpLmFkZENsYXNzKFwiY29sLWxnLTRcIik7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTZcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTdcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI1NTBweFwiKTtcclxuICAgICAgJChcIi5wRm9ybTdcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLnBGb3JtMlwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvZm9ybTMuc3ZnXCIpO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm04XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmIChhY2NvdW50dHlwZSA9PSBcIjNcIikge1xyXG4gICAgICAgIG5ld2NvcnBvcmF0ZS5sZW5ndGggPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtbyBrYVwiKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm03XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICQoXCIuZGl2Rm9ybThcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjQ1MHB4XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnR0eXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBvdGEgbGFuZ1wiKTtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1MDEpIHtcclxuICAgICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbEltYWdlXCIpLmFkZENsYXNzKFwiY29sLXNtLTQgY29sLTRcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbFRleHRcIikuYWRkQ2xhc3MoXCJjb2wtc20tOCBjb2wtOFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIuY29sTGVmdFwiKS5yZW1vdmVDbGFzcyhcImNvbC1sZy02XCIpO1xyXG4gICAgICAgICQoXCIuY29sTGVmdFwiKS5hZGRDbGFzcyhcImNvbC1sZy04XCIpO1xyXG4gICAgICAgICQoXCIuY29sUmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJjb2wtbGctNlwiKTtcclxuICAgICAgICAkKFwiLmNvbFJpZ2h0XCIpLmFkZENsYXNzKFwiY29sLWxnLTRcIik7XHJcbiAgICAgICAgJChcIi5kaXZGb3JtNlwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAkKFwiLmRpdkZvcm04XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCI1NTBweFwiKTtcclxuICAgICAgICAkKFwiLnBGb3JtN1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5wRm9ybTJcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgICAkKFwiLmltZ1JpZ2h0XCIpLmF0dHIoXCJzcmNcIiwgXCJJbWFnZS9mb3JtMy5zdmdcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJChcIi5kaXZGb3JtOVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICAkKFwiLmRpdkZvcm04XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAkKFwiLmRpdkZvcm05XCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiMzUwcHhcIik7XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTEwXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTlcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTEwXCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5ib3hcIikuY3NzKFwiaGVpZ2h0XCIsIFwiMzUwcHhcIik7XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIuZGl2Rm9ybTExXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDUwMSkge1xyXG4gICAgICAgICQoXCIuaW1nUmlnaHRcIikuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5pbWdSaWdodFwiKS5jc3MoXCJ3aWR0aFwiLCBcImF1dG9cIik7XHJcbiAgICAgIH1cclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvZm9ybTcuc3ZnXCIpO1xyXG4gICAgICAkKFwiLnBGb3JtN1wiKS5zaG93KCk7XHJcbiAgICAgICQoXCIuZGl2Rm9ybTEwXCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAkKFwiLmRpdkZvcm0xMVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuYm94XCIpLmNzcyhcImhlaWdodFwiLCBcIjQ1MHB4XCIpO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiLmRpdkZvcm0xMlwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwiYmxvY2tcIikge1xyXG4gICAgICAkKFwiLmRpdkZvcm0xMVwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgJChcIi5kaXZGb3JtMTJcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmJveFwiKS5jc3MoXCJoZWlnaHRcIiwgXCIzMDBweFwiKTtcclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hZGRDbGFzcyhcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JblwiKTtcclxuICAgICAgJChcIi5pbWdSaWdodFwiKS5hdHRyKFwic3JjXCIsIFwiSW1hZ2UvUGhvbmUucG5nXCIpO1xyXG4gICAgICAkKFwiLnBGb3JtXCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5wRm9ybTdcIikuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgbGV0IG1pbk9mZnNldCA9IDE4LFxyXG4gICAgICBtYXhPZmZzZXQgPSAxMDA7XHJcbiAgICBsZXQgdGhpc1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBsZXQgeWVhcnMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSBtaW5PZmZzZXQ7IGkgPD0gbWF4T2Zmc2V0OyBpKyspIHtcclxuICAgICAgbGV0IHllYXIgPSB0aGlzWWVhciAtIGk7XHJcblxyXG4gICAgICBsaXN0eWVhci5wdXNoKHsgdmFsdWU6IHllYXIsIGxhYmVsOiB5ZWFyIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgeHNyZkNvb2tpZU5hbWU6IFwiWFNSRi1UT0tFTlwiLFxyXG4gICAgICAgIHhzcmZIZWFkZXJOYW1lOiBcIlgtWFNSRi1UT0tFTlwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhcGlVcmxfZmV0Y2hfYWNjb3VudHMgPVxyXG4gICAgICBhcHBnbG9iYWwuYXBpLmJhc2VfYXBpICsgYXBwZ2xvYmFsLmFwaS5hY2NvdW50X3R5cGVzO1xyXG4gICAgY29uc3QgYXBpVXJsX2FubnVhbF9pbmNvbWUgPVxyXG4gICAgICBhcHBnbG9iYWwuYXBpLmJhc2VfYXBpICsgYXBwZ2xvYmFsLmFwaS5hbm51YWxfaW5jb21lO1xyXG4gICAgY29uc3QgYXBpVXJsX2ludmVzdG1lbnRfb2JqZWN0aXZlcyA9XHJcbiAgICAgIGFwcGdsb2JhbC5hcGkuYmFzZV9hcGkgKyBhcHBnbG9iYWwuYXBpLmludmVzdG1lbnRfb2JqZWN0aXZlO1xyXG4gICAgY29uc3QgYXBpVXJsX3NvdXJjZV9vZl9mdW5kcyA9XHJcbiAgICAgIGFwcGdsb2JhbC5hcGkuYmFzZV9hcGkgKyBhcHBnbG9iYWwuYXBpLnNvdXJjZV9vZl9mdW5kcztcclxuICAgIGNvbnN0IGFwaVVybF90b3RhbF9hc3NldHMgPVxyXG4gICAgICBhcHBnbG9iYWwuYXBpLmJhc2VfYXBpICsgYXBwZ2xvYmFsLmFwaS50b3RhbF9hc3NldHM7XHJcbiAgICBjb25zdCBhcGlVcmxfbmV0X3dvcnRoID0gYXBwZ2xvYmFsLmFwaS5iYXNlX2FwaSArIGFwcGdsb2JhbC5hcGkubmV0X3dvcnRoO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYXBpVXJsX2ZldGNoX2FjY291bnRzLCB7fSwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgc2V0TGlzdGFjY291bnR0eXBlKHJlc3VsdC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldEVycm9yMShcIjFcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IxKFwiMlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYXBpVXJsX2ludmVzdG1lbnRfb2JqZWN0aXZlcywge30sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHNldEVycm9yNyhcIjFcIik7XHJcbiAgICAgICAgc2V0TGlzdGludmVzdG1lbnRvYmplY3RpdmVzKHJlc3VsdC5kYXRhLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldEVycm9yMShcIjJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChhcGlVcmxfc291cmNlX29mX2Z1bmRzLCB7fSwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgZnVuZHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZGF0YVtpXS5pZCArIFwiIFwiICsgcmVzcG9uc2UuZGF0YS5kYXRhW2ldLm5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmdW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGEuZGF0YVtpXS5pZCxcclxuICAgICAgICAgICAgbGFiZWw6IHJlc3BvbnNlLmRhdGEuZGF0YVtpXS5uYW1lLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExpc3RmdW5kcyhmdW5kcyk7XHJcbiAgICAgICAgc2V0RXJyb3IyKFwiMVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRFcnJvcjIoXCIyXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGFwaVVybF9pbnZlc3RtZW50X29iamVjdGl2ZXMsIHt9LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBzZXRMaXN0aW52ZXN0bWVudG9iamVjdGl2ZXMocmVzdWx0LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0RXJyb3IzKFwiMVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yMyhcIjJcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYXBpVXJsX3RvdGFsX2Fzc2V0cywge30sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHNldGxpc3RUb3RhbGFzc2V0cyhyZXN1bHQuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRFcnJvcjQoXCIxXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3I0KFwiMlwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChhcGlVcmxfYW5udWFsX2luY29tZSwge30sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHNldExpc3Rhbm51YWxpbmNvbWUocmVzdWx0LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0RXJyb3I1KFwiMVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yNShcIjJcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYXBpVXJsX25ldF93b3J0aCwge30sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHNldExpc3RuZXR3b3J0aChyZXN1bHQuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRFcnJvcjYoXCIxXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3I2KFwiMlwiKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yMSAmJiBlcnJvcjIgJiYgZXJyb3IzICYmIGVycm9yNCAmJiBlcnJvcjUgJiYgZXJyb3I2ICYmIGVycm9yNykge1xyXG4gICAgICAkKFwiLmNvbkxvYWRlclwiKVxyXG4gICAgICAgIC5zaG93KClcclxuICAgICAgICAuZmFkZU91dCg1MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoXCIuY29uTWFpblwiKS5mYWRlSW4oMjUwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihlcnJvcjEgPT0gXCIyXCIgfHwgZXJyb3IyID09IFwiMlwiIHx8IGVycm9yMyA9PSBcIjJcIiB8fCBlcnJvcjQgPT0gXCIyXCIgfHwgZXJyb3I1ID09IFwiMlwiIHx8IGVycm9yNiA9PSBcIjJcIiB8fCBlcnJvcjcgPT0gXCIyXCIpe1xyXG4gICAgICBzd2FsKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIyMHB4IDhweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZXJyb3IucG5nXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5QbGVhc2UgcmVmcmVzaCB0aGUgd2Vic2l0ZS48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2Vycm9yMSwgZXJyb3IyLCBlcnJvcjMsIGVycm9yNCwgZXJyb3I1LCBlcnJvcjZdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSkdPIERlbGl2ZXJ5IE1hYXNhaGFuISBBYmFuZ2FuIVwiIC8+XHJcbiAgICAgICAgPHRpdGxlPkV4cGVyaWVuY2UgbmV4dCBsZXZlbCB0cmFkaW5nPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJBQUEgRXF1aXRpZXNcIj48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJFeHBlcmllbmNlIG5leHQgbGV2ZWwgdHJhZGluZ1wiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkV4cGVyaWVuY2UgbmV4dCBsZXZlbCB0cmFkaW5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb25Mb2FkZXIgIGgtMTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCb3hcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwIGNvbk1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sTGVmdCBvcmRlci0yIG9yZGVyLWxnLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveExpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlMVwiIG9uQ2xpY2s9e3NhdmVhY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3VzZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2lyY2xlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiLCBwYWRkaW5nVG9wOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZTIgY2lyY2xlbm90YWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dHJ5bGFuZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3JlY29yZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDaXJjbGUyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIHBhZGRpbmdUb3A6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlMyBjaXJjbGVub3RhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2NvbXB1dGVyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NpcmNsZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgcGFkZGluZ1RvcDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Rm9ybTFcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hcIj5BY2NvdW50IFR5cGU8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbnRyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0YWNjb3VudHR5cGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiYnRuLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ezEwfSBjeT17MTB9IHI9ezl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCw3IEM4LjM0MzE0NTc1LDcgNyw4LjM0MzE0NTc1IDcsMTAgQzcsMTEuNjU2ODU0MiA4LjM0MzE0NTc1LDEzIDEwLDEzIEMxMS42NTY4NTQyLDEzIDEzLDExLjY1Njg1NDIgMTMsMTAgQzEzLDguMzQzMTQ1NzUgMTEuNjU2ODU0Miw3IDEwLDcgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsMSBMMTAsMSBMMTAsMSBDMTQuOTcwNTYyNywxIDE5LDUuMDI5NDM3MjUgMTksMTAgTDE5LDEwIEwxOSwxMCBDMTksMTQuOTcwNTYyNyAxNC45NzA1NjI3LDE5IDEwLDE5IEwxMCwxOSBMMTAsMTkgQzUuMDI5NDM3MjUsMTkgMSwxNC45NzA1NjI3IDEsMTAgTDEsMTAgTDEsMTAgQzEsNS4wMjk0MzcyNSA1LjAyOTQzNzI1LDEgMTAsMSBMMTAsMSBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBSYWRpb1wiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucC1jYnhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2J4XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYnhcIiBodG1sRm9yPVwiY2J4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDEyIDEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLjUgNiA0LjUgOSAxMC41IDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSSBhZ3JlZSB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucC1jYnhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2J4MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2J4XCIgaHRtbEZvcj1cImNieDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTBweFwiIHZpZXdCb3g9XCIwIDAgMTIgMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEuNSA2IDQuNSA5IDEwLjUgMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicENoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJIGhhdmUgcmVhZCB0aGUgcHJpdmFjeSBwb2xpY3lcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+UGVyc29uYWwgSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VNbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWlkZGxlIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZWxudW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVGVsbnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxlcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2JpbGVudW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlTW9iaWxlbnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb2JpbGUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmlydGhwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VCaXJ0aHBsYWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCaXJ0aHBsYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXNpZGVudGlhbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hUaXRsZVwiPkJpcnRoIERhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD1cIkNsaWNrIHRvIHNlbGVjdCBhIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cInl5eXkvTU0vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2JpcnRodERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQmlydGhkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtM1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUSU5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rpbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V0aW59XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYXRpb25hbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmF0aW9uYWxpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlTmF0aW9uYWxpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zX2dlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yc2VsZWN0Z2VuZGVyID8gY3VzdG9tU3R5bGVzX2Vycm9yIDogY3VzdG9tU3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2VuZGVycGlja31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VHZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zX2Npdmlsc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzZWxlY3RjaXZpbCA/IGN1c3RvbVN0eWxlc19lcnJvciA6IGN1c3RvbVN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Npdmlsc3RhdHVzcGlja31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VDaXZpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l2aWwgU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbXBsb3llclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRW1wbG95ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2IgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2pvYnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUpvYnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzaW5lc3MgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVzYWRkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUJ1c2FkZH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+QWNjb3VudCBJbmZvcm1hdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hTdWJcIj5UZWxsIHVzIHdoZXJlIHRvIHNlbmQgeW91ciBtb25leTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFua31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VCYW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnJhbmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXticmFuY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQnJhbmNofVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBY2NvdW50IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnRuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUFjY291bnRuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dEZvcm00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWNjb3VudCBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnRudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQWNjb3VudG51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hTdWJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBUZWxsIHVzIGhvdyB0byBoZWxwXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94U3ViMVwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEludmVzdG1lbnQgT2JqZWN0aXZlXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmbGV4XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2xpc3RpbnZlc3RtZW50b2JqZWN0aXZlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUubGVuZ3RoID4gMjAgPyBcImNvbC1sZy01XCIgOiBcImNvbC1sZy00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aXRlbS5pZH0gY2xhc3NOYW1lPVwiYnRuLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWludmVzdG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSW52ZXN0bWVudG9iamVjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ezEwfSBjeT17MTB9IHI9ezl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsNyBDOC4zNDMxNDU3NSw3IDcsOC4zNDMxNDU3NSA3LDEwIEM3LDExLjY1Njg1NDIgOC4zNDMxNDU3NSwxMyAxMCwxMyBDMTEuNjU2ODU0MiwxMyAxMywxMS42NTY4NTQyIDEzLDEwIEMxMyw4LjM0MzE0NTc1IDExLjY1Njg1NDIsNyAxMCw3IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsMSBMMTAsMSBMMTAsMSBDMTQuOTcwNTYyNywxIDE5LDUuMDI5NDM3MjUgMTksMTAgTDE5LDEwIEwxOSwxMCBDMTksMTQuOTcwNTYyNyAxNC45NzA1NjI3LDE5IDEwLDE5IEwxMCwxOSBMMTAsMTkgQzUuMDI5NDM3MjUsMTkgMSwxNC45NzA1NjI3IDEsMTAgTDEsMTAgTDEsMTAgQzEsNS4wMjk0MzcyNSA1LjAyOTQzNzI1LDEgMTAsMSBMMTAsMSBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicFJhZGlvXCI+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Rm9ybTVcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFN1YlwiPlRlbGwgdXMgaG93IHRvIGhlbHA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdGZ1bmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzZWxlY3RmdW5kcyA/IGN1c3RvbVN0eWxlc19lcnJvciA6IGN1c3RvbVN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb3VyY2Ugb2YgZnVuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvdXJjZW9mZnVuZHNwaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVNvdXJjZW9mZnVuZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hTdWIxXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgVG90YWwgQXNzZXRzXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdHRvdGFsYXNzZXRzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdycEFzc2V0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VUb3RhbGFzc2V0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ezEwfSBjeT17MTB9IHI9ezl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsNyBDOC4zNDMxNDU3NSw3IDcsOC4zNDMxNDU3NSA3LDEwIEM3LDExLjY1Njg1NDIgOC4zNDMxNDU3NSwxMyAxMCwxMyBDMTEuNjU2ODU0MiwxMyAxMywxMS42NTY4NTQyIDEzLDEwIEMxMyw4LjM0MzE0NTc1IDExLjY1Njg1NDIsNyAxMCw3IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsMSBMMTAsMSBMMTAsMSBDMTQuOTcwNTYyNywxIDE5LDUuMDI5NDM3MjUgMTksMTAgTDE5LDEwIEwxOSwxMCBDMTksMTQuOTcwNTYyNyAxNC45NzA1NjI3LDE5IDEwLDE5IEwxMCwxOSBMMTAsMTkgQzUuMDI5NDM3MjUsMTkgMSwxNC45NzA1NjI3IDEsMTAgTDEsMTAgTDEsMTAgQzEsNS4wMjk0MzcyNSA1LjAyOTQzNzI1LDEgMTAsMSBMMTAsMSBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicFJhZGlvXCI+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFN1YjFcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBBbm5hdWFsIEluY29tZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2xpc3Rhbm51YWxpbmNvbWUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e1wiYW5udWFsXCIgKyBpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiYW5udWFsXCIgKyBpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdycEFubnVhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VBbm51YWxpbmNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMH0gY3k9ezEwfSByPXs5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDcgQzguMzQzMTQ1NzUsNyA3LDguMzQzMTQ1NzUgNywxMCBDNywxMS42NTY4NTQyIDguMzQzMTQ1NzUsMTMgMTAsMTMgQzExLjY1Njg1NDIsMTMgMTMsMTEuNjU2ODU0MiAxMywxMCBDMTMsOC4zNDMxNDU3NSAxMS42NTY4NTQyLDcgMTAsNyBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDEgTDEwLDEgTDEwLDEgQzE0Ljk3MDU2MjcsMSAxOSw1LjAyOTQzNzI1IDE5LDEwIEwxOSwxMCBMMTksMTAgQzE5LDE0Ljk3MDU2MjcgMTQuOTcwNTYyNywxOSAxMCwxOSBMMTAsMTkgTDEwLDE5IEM1LjAyOTQzNzI1LDE5IDEsMTQuOTcwNTYyNyAxLDEwIEwxLDEwIEwxLDEwIEMxLDUuMDI5NDM3MjUgNS4wMjk0MzcyNSwxIDEwLDEgTDEwLDEgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBSYWRpb1wiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hTdWIxXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgTmV0IFdvcnRoXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdG5ldHdvcnRoLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcIm5ldFwiICsgaXRlbS5uYW1lfSBjbGFzc05hbWU9XCJidG4tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJuZXRcIiArIGl0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JwTmV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZU5ldHdvcnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17MTB9IGN5PXsxMH0gcj17OX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCw3IEM4LjM0MzE0NTc1LDcgNyw4LjM0MzE0NTc1IDcsMTAgQzcsMTEuNjU2ODU0MiA4LjM0MzE0NTc1LDEzIDEwLDEzIEMxMS42NTY4NTQyLDEzIDEzLDExLjY1Njg1NDIgMTMsMTAgQzEzLDguMzQzMTQ1NzUgMTEuNjU2ODU0Miw3IDEwLDcgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCwxIEwxMCwxIEwxMCwxIEMxNC45NzA1NjI3LDEgMTksNS4wMjk0MzcyNSAxOSwxMCBMMTksMTAgTDE5LDEwIEMxOSwxNC45NzA1NjI3IDE0Ljk3MDU2MjcsMTkgMTAsMTkgTDEwLDE5IEwxMCwxOSBDNS4wMjk0MzcyNSwxOSAxLDE0Ljk3MDU2MjcgMSwxMCBMMSwxMCBMMSwxMCBDMSw1LjAyOTQzNzI1IDUuMDI5NDM3MjUsMSAxMCwxIEwxMCwxIFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwUmFkaW9cIj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZGb3JtNlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPkFjY291bnQgSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94VGl0bGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBBcmUgeW91IGFzc29jaWF0ZWQgd2l0aCBhbm90aGVyIGJyb2tlciBvciBkZWFsZXI/XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmRvLTExXCIgY2xhc3NOYW1lPVwiYnRuLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZG8tMTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JwQXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VBc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMH0gY3k9ezEwfSByPXs5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCw3IEM4LjM0MzE0NTc1LDcgNyw4LjM0MzE0NTc1IDcsMTAgQzcsMTEuNjU2ODU0MiA4LjM0MzE0NTc1LDEzIDEwLDEzIEMxMS42NTY4NTQyLDEzIDEzLDExLjY1Njg1NDIgMTMsMTAgQzEzLDguMzQzMTQ1NzUgMTEuNjU2ODU0Miw3IDEwLDcgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDEgTDEwLDEgTDEwLDEgQzE0Ljk3MDU2MjcsMSAxOSw1LjAyOTQzNzI1IDE5LDEwIEwxOSwxMCBMMTksMTAgQzE5LDE0Ljk3MDU2MjcgMTQuOTcwNTYyNywxOSAxMCwxOSBMMTAsMTkgTDEwLDE5IEM1LjAyOTQzNzI1LDE5IDEsMTQuOTcwNTYyNyAxLDEwIEwxLDEwIEwxLDEwIEMxLDUuMDI5NDM3MjUgNS4wMjk0MzcyNSwxIDEwLDEgTDEwLDEgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicFJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBZZXMsIGlmIHNvIHN0YXRlIHRoZSBuYW1lIG9mIHRoZSBjb21wYW55XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBhbnkgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXNzb2NpYXRlZGNvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQXNzY29tcGFueX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJkby0xMlwiIGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmRvLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JwQXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQXNzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17MTB9IGN5PXsxMH0gcj17OX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCw3IEM4LjM0MzE0NTc1LDcgNyw4LjM0MzE0NTc1IDcsMTAgQzcsMTEuNjU2ODU0MiA4LjM0MzE0NTc1LDEzIDEwLDEzIEMxMS42NTY4NTQyLDEzIDEzLDExLjY1Njg1NDIgMTMsMTAgQzEzLDguMzQzMTQ1NzUgMTEuNjU2ODU0Miw3IDEwLDcgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCwxIEwxMCwxIEwxMCwxIEMxNC45NzA1NjI3LDEgMTksNS4wMjk0MzcyNSAxOSwxMCBMMTksMTAgTDE5LDEwIEMxOSwxNC45NzA1NjI3IDE0Ljk3MDU2MjcsMTkgMTAsMTkgTDEwLDE5IEwxMCwxOSBDNS4wMjk0MzcyNSwxOSAxLDE0Ljk3MDU2MjcgMSwxMCBMMSwxMCBMMSwxMCBDMSw1LjAyOTQzNzI1IDUuMDI5NDM3MjUsMSAxMCwxIEwxMCwxIFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwUmFkaW9cIj5Obzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94VGl0bGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBBcmUgeW91IGFuIG9mZmljZXIvZGlyZWN0b3Igb2YgYSBsaXN0ZWQgY29tcGFueT9cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmRvLTEzXCIgY2xhc3NOYW1lPVwiYnRuLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZG8tMTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1ncnBDb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlT2ZmaWNlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ezEwfSBjeT17MTB9IHI9ezl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsNyBDOC4zNDMxNDU3NSw3IDcsOC4zNDMxNDU3NSA3LDEwIEM3LDExLjY1Njg1NDIgOC4zNDMxNDU3NSwxMyAxMCwxMyBDMTEuNjU2ODU0MiwxMyAxMywxMS42NTY4NTQyIDEzLDEwIEMxMyw4LjM0MzE0NTc1IDExLjY1Njg1NDIsNyAxMCw3IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAsMSBMMTAsMSBMMTAsMSBDMTQuOTcwNTYyNywxIDE5LDUuMDI5NDM3MjUgMTksMTAgTDE5LDEwIEwxOSwxMCBDMTksMTQuOTcwNTYyNyAxNC45NzA1NjI3LDE5IDEwLDE5IEwxMCwxOSBMMTAsMTkgQzUuMDI5NDM3MjUsMTkgMSwxNC45NzA1NjI3IDEsMTAgTDEsMTAgTDEsMTAgQzEsNS4wMjk0MzcyNSA1LjAyOTQzNzI1LDEgMTAsMSBMMTAsMSBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicFJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgWWVzLCBpZiBzbyBzdGF0ZSB0aGUgbmFtZSBvZiB0aGUgY29tcGFueVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRvZmZpY2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBhbnkgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b2ZmaWNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlT2ZmaWNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJkby0xNFwiIGNsYXNzTmFtZT1cImJ0bi1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmRvLTE0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JwQ29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZU9mZmljZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMH0gY3k9ezEwfSByPXs5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDcgQzguMzQzMTQ1NzUsNyA3LDguMzQzMTQ1NzUgNywxMCBDNywxMS42NTY4NTQyIDguMzQzMTQ1NzUsMTMgMTAsMTMgQzExLjY1Njg1NDIsMTMgMTMsMTEuNjU2ODU0MiAxMywxMCBDMTMsOC4zNDMxNDU3NSAxMS42NTY4NTQyLDcgMTAsNyBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLDEgTDEwLDEgTDEwLDEgQzE0Ljk3MDU2MjcsMSAxOSw1LjAyOTQzNzI1IDE5LDEwIEwxOSwxMCBMMTksMTAgQzE5LDE0Ljk3MDU2MjcgMTQuOTcwNTYyNywxOSAxMCwxOSBMMTAsMTkgTDEwLDE5IEM1LjAyOTQzNzI1LDE5IDEsMTQuOTcwNTYyNyAxLDEwIEwxLDEwIEwxLDEwIEMxLDUuMDI5NDM3MjUgNS4wMjk0MzcyNSwxIDEwLDEgTDEwLDEgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBSYWRpb1wiPk5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm03XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+Rm9yIENvcnBvcmF0ZSBBY2NvdW50czwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hUaXRsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEluZGljYXRlIHRoZSBuYW1lcyBvZiBwZXJzb25uZWwgYXV0aG9yaXplZCB0byB0cmFuc2FjdCBvblxyXG4gICAgICAgICAgICAgICAgICBiZWhhbGYgb2YgdGhlIGNvbXBhbnlcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRuYW1lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRuYW1lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29ycG9yYXRlbmFtZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ29ycG9yYXRlbmFtZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0cG9zaXRpb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidHh0cG9zaXRpb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvcnBvcmF0ZXBvc2l0aW9uMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VDb3Jwb3JhdGVwb3NpdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dG5hbWUyIHR4dEJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvcnBvcmF0ZW5hbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUNvcnBvcmF0ZW5hbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0Qm94IHR4dHBvc2l0aW9uMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Jwb3JhdGVwb3NpdGlvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ29ycG9yYXRlcG9zaXRpb24yfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0bmFtZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Jwb3JhdGVuYW1lM31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VDb3Jwb3JhdGVuYW1lM31cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRwb3NpdGlvbjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29ycG9yYXRlcG9zaXRpb24zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUNvcnBvcmF0ZXBvc2l0aW9uM31cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm04XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+VXBsb2FkIHNpZ25hdHVyZTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmfVxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZVcGxvYWQgZGl2Q2xpZW50XCIgb25DbGljaz17b25CdG5DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS91cGxvYWQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBVcGxvYWQgcFVwbG9hZGNsaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENsaWVudCBTaWduYXR1cmUgb3ZlciA8YnIgLz4gUHJpbnRlZCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Rm9ybTlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hcIj5VcGxvYWQgc2lnbmF0dXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTEoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmMX1cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VXBsb2FkIGRpdkpvaW50XCIgb25DbGljaz17b25CdG5DbGljazF9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvdXBsb2FkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4XCJcclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVXBsb2FkIHBVcGxvYWRqb2ludFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEpvaW50IEFjY291bnQgSG9sZGVyJ3NcclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz4gU2lvZ25hdHVyZSBvdmVyIFByaW50ZWQgTmFtZVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveFwiPlVwbG9hZCB0d28gdmFsaWQgSURzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTIoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmMn1cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VXBsb2FkIGRpdlZhbGlkMVwiIG9uQ2xpY2s9e29uQnRuQ2xpY2syfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3VwbG9hZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFVwbG9hZCBwVXBsb2FkdmFsaWQxXCI+VXBsb2FkIGZpcnN0IElEIHBob3RvPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlMyhlKX1cclxuICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEZpbGVSZWYzfVxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAucG5nLCAuanBlZ3xpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZVcGxvYWQgZGl2VmFsaWQyXCIgb25DbGljaz17b25CdG5DbGljazN9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvdXBsb2FkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4XCJcclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVXBsb2FkIHBVcGxvYWR2YWxpZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICBVcGxvYWQgc2Vjb25kIElEIHBob3RvXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Rm9ybTExXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94XCI+VXNlciBJbmZvcm1hdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEJveCB0eHRGb3JtMTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMCBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRCb3ggdHh0Rm9ybTExXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxhZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbWFpbGFkZH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkZvcm0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZTQoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRGaWxlUmVmNH1cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWd8aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hcIj5VcGxvYWQgYSBwaG90byBvZiB5b3VyIHNlbGY8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlVwbG9hZFwiIG9uQ2xpY2s9e29uQnRuQ2xpY2s0fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3VwbG9hZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFVwbG9hZCBwUHJvZmlsZXBpY1wiPlRha2UgYSBwaG90bzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sQmFjayBjb2wtc20tNiBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkJhY2tcIiBvbkNsaWNrPXtwcmV2Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQkFDS1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bk5leHRcIiBvbkNsaWNrPXtuZXh0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgTkVYVFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xSaWdodCBvcmRlci0xIG9yZGVyLWxnLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcGhvbmUxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdSaWdodCBteC1hdXRvIGQtZmxleCBhbmltYXRlX19mYXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1zbS04IGNvbC04IGNvbFRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBGb3JtIHBGb3JtMVwiPlxyXG4gICAgICAgICAgICAgICAgICBXaGVuIDxiPnJlc2lzdGFuY2U8L2I+IGxldmVscyBhcmUgYnJva2VuLCBhIGJyZWFrb3V0IG1heVxyXG4gICAgICAgICAgICAgICAgICBvY2N1ci4gQnV5IGJyZWFrb3V0cyBhdXRvbWF0aWNhbGx5IHdpdGggQ29uZGl0aW9uYWwgT3JkZXJzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZvcm0gcEZvcm0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIFdoZW4gPGI+c3VwcG9ydDwvYj4gbGV2ZWxzIGFyZSBicm9rZW4sIGEgYnJlYWtvdXQgbWF5IG9jY3VyLlxyXG4gICAgICAgICAgICAgICAgICBTZXQgYXV0b21hdGljIHN0b3BzIHdpdGggQ29uZGl0aW9uYWwgb3JkZXJzIHRvIHByb3RlY3QgeW91clxyXG4gICAgICAgICAgICAgICAgICBjYXBpdGFsLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEZvcm0gcEZvcm03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPk1hcmdpbjwvYj4gaW5jcmVhc2VzIHlvdXIgYnV5aW5nIHBvd2VyIGJ5IGJvcnJvd2luZyBmdW5kcy5cclxuICAgICAgICAgICAgICAgICAgVG8gdXNlIG1hcmdpbiwgdXBncmFkZSB5b3VyIGFjY291bnQgdG8gYSBBQUEgVHVyYm8gTWFyZ2luXHJcbiAgICAgICAgICAgICAgICAgIEFjY291bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRm9ybSBwRm9ybThcIj5cclxuICAgICAgICAgICAgICAgICAgUHV0IHlvdXIgdmFsaWQgSUQgYmVsb3cgeW91ciBjaGluIGFzIHNob3duIGFib3ZlIGFuZCB0YWtlIGFcclxuICAgICAgICAgICAgICAgICAgcGhvdG8gb2YgeW91cnNlbGYhXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJtb2RhbFZlcmlmeVwiXHJcbiAgICAgICAgZGF0YS1iYWNrZHJvcD1cInN0YXRpY1wiXHJcbiAgICAgICAgZGF0YS1rZXlib2FyZD1cImZhbHNlXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsQ2VudGVyVGl0bGVcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFZlcmlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcInBNb2RhbFwiPlBsZWFzZSB3YWl0IHdoaWxlIHdlIHZlcmlmeSB5b3VyIGFjY291bnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYXBwZ2xvYmFsID0ge1xyXG4gICAgYXBpOiB7XHJcbiAgICAgIGJhc2VfYXBpOiBcImh0dHBzOi8va3ljLmFhYS1lcXVpdGllcy5jb20ucGhcIixcclxuICAgICAgYWNjb3VudF90eXBlczogXCIvYXBpL2FjY291bnRfdHlwZXNcIixcclxuICAgICAgYW5udWFsX2luY29tZTogXCIvYXBpL2FubnVhbF9pbmNvbWVcIixcclxuICAgICAgaW52ZXN0bWVudF9vYmplY3RpdmU6IFwiL2FwaS9pbnZlc3RtZW50X29iamVjdGl2ZXNcIixcclxuICAgICAgc291cmNlX29mX2Z1bmRzOiBcIi9hcGkvc291cmNlX29mX2Z1bmRzXCIsXHJcbiAgICAgIHRvdGFsX2Fzc2V0czogXCIvYXBpL3RvdGFsX2Fzc2V0c1wiLFxyXG4gICAgICBuZXRfd29ydGg6ICBcIi9hcGkvbmV0X3dvcnRoXCIsXHJcbiAgICAgIGFkZF9hY2NvdW50OiAgXCIvYXBpL2FjY291bnRzXCIsXHJcbiAgICAgIGNoZWNrX3VzZXJfZXhpc3Q6IFwiL2FwaS9jaGVja191c2VyX2V4aXN0c1wiLFxyXG4gICAgfSxcclxuICB9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVwaWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9