"use strict";
self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/Login/Login.js":
/*!****************************!*\
  !*** ./src/Login/Login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var styles = aphrodite__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  formRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1rem',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '1rem',
    '@media (max-width: 900px)': {
      marginBottom: '0.5rem',
      width: '100%'
    }
  },
  formLabel: {
    marginRight: '0.5rem',
    width: '70px',
    textAlign: 'right'
  },
  formInput: {
    flex: '1',
    border: 'none'
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      marginTop: '1rem',
      width: 'auto'
    }
  }
});
function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    email = _useState4[0],
    setEmail = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    enableSubmit = _useState8[0],
    setEnableSubmit = _useState8[1];
  var handleLoginSubmit = function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  var handleChangeEmail = function handleChangeEmail(e) {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value !== '' && password !== '');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Login to access the full dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleLoginSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formGroup)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formLabel)
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formInput),
    value: email,
    onChange: handleChangeEmail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formGroup)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "password",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formLabel)
  }, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formInput),
    value: password,
    style: {
      marginLeft: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.button),
    disabled: !enableSubmit,
    value: "OK"
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d9e449aedb6e2a72cb7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhDQUFHLENBQUNFLE1BQU0sQ0FBQ2UsTUFBTSxDQUFFO0lBQzVCeUMsUUFBUSxFQUFFLENBQUNsQixZQUFhO0lBQ3hCTyxLQUFLLEVBQUM7RUFBSSxDQUNULENBQ0EsQ0FDRCxDQUNILENBQUM7QUFFVjtBQUVBLGlFQUFldkIsS0FBSzs7Ozs7Ozs7VUMzR3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSBcImFwaHJvZGl0ZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZm9ybVJvdzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxcmVtJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSc6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1Hcm91cDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5SaWdodDogJzFyZW0nLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMC41cmVtJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbiAgZm9ybUxhYmVsOiB7XG4gICAgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nLFxuICAgIHdpZHRoOiAnNzBweCcsXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICB9LFxuICBmb3JtSW5wdXQ6IHtcbiAgICBmbGV4OiAnMScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHBhZGRpbmc6ICcwLjVyZW0gMXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSc6IHtcbiAgICAgIG1hcmdpblRvcDogJzFyZW0nLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2VuYWJsZVN1Ym1pdCwgc2V0RW5hYmxlU3VibWl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgICB9O1xuICAgIFxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlRW1haWwgPSAoZSkgPT4ge1xuICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0RW5hYmxlU3VibWl0KGUudGFyZ2V0LnZhbHVlICE9PSAnJyAmJiBwYXNzd29yZCAhPT0gJycpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwLWJvZHlcIj5cbiAgICAgIDxwPkxvZ2luIHRvIGFjY2VzcyB0aGUgZnVsbCBkYXNoYm9hcmQ8L3A+XG4gICAgICA8Zm9ybSAgb25TdWJtaXQ9e2hhbmRsZUxvZ2luU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybVJvdyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1Hcm91cCl9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb3JtTGFiZWwpfT5cbiAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICBpZD1cImVtYWlsXCIgXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1JbnB1dCl9XG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRW1haWx9XG4gICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1Hcm91cCl9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb3JtTGFiZWwpfT5cbiAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybUlucHV0KX1cbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNDBweCcgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmJ1dHRvbil9XG4gICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZVN1Ym1pdH0gXG4gICAgICAgICAgICB2YWx1ZT1cIk9LXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZDllNDQ5YWVkYjZlMmE3MmNiN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlU2hlZXQiLCJjc3MiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImNyZWF0ZSIsImZvcm1Sb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJmb3JtR3JvdXAiLCJtYXJnaW5SaWdodCIsIndpZHRoIiwiZm9ybUxhYmVsIiwidGV4dEFsaWduIiwiZm9ybUlucHV0IiwiZmxleCIsImJvcmRlciIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsIm1hcmdpblRvcCIsIkxvZ2luIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVtYWlsIiwic2V0RW1haWwiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImVuYWJsZVN1Ym1pdCIsInNldEVuYWJsZVN1Ym1pdCIsImhhbmRsZUxvZ2luU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlRW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJuYW1lIiwib25DaGFuZ2UiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=