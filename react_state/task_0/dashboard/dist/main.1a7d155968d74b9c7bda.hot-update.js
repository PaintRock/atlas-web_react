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
    border: 'none',
    marginL: marginL
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    enableSubmit = _useState6[0],
    setEnableSubmit = _useState6[1];
  var handleChangeEmail = function handleChangeEmail(event) {
    setEmail(event.target.value);
    setEnableSubmit(event.target.value !== "" && password !== "");
  };
  var handleChangePassword = function handleChangePassword(event) {
    setPassword(event.target.value);
    setEnableSubmit(email !== "" && event.target.value !== "");
  };
  var handleLoginSubmit = function handleLoginSubmit(event) {
    event.preventDefault();
    logIn(email, password);
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
    value: email,
    onChange: handleChangeEmail,
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formInput)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formGroup)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "password",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formLabel)
  }, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: handleChangePassword,
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.formInput)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "OK",
    disabled: !enableSubmit,
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.button)
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd9f6ac8ef958435eb10")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYTdkMTU1OTY4ZDc0YjljN2JkYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUU1QyxJQUFNSSxNQUFNLEdBQUdGLGlEQUFVLENBQUNHLE1BQU0sQ0FBQztFQUMvQkMsT0FBTyxFQUFFO0lBQ1BDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsWUFBWSxFQUFFLE1BQU07SUFDcEIsMkJBQTJCLEVBQUU7TUFDM0JGLGFBQWEsRUFBRSxRQUFRO01BQ3ZCQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUM7RUFDREUsU0FBUyxFQUFFO0lBQ1RKLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkcsV0FBVyxFQUFFLE1BQU07SUFDbkIsMkJBQTJCLEVBQUU7TUFDM0JGLFlBQVksRUFBRSxRQUFRO01BQ3RCRyxLQUFLLEVBQUU7SUFDVDtFQUNGLENBQUM7RUFDREMsU0FBUyxFQUFFO0lBQ1RGLFdBQVcsRUFBRSxRQUFRO0lBQ3JCQyxLQUFLLEVBQUUsTUFBTTtJQUNiRSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLFNBQVMsRUFBRTtJQUNUQyxJQUFJLEVBQUUsR0FBRztJQUNUQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxPQUFPLEVBQVBBO0VBRUYsQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDTkMsZUFBZSxFQUFFLE1BQU07SUFDdkJDLEtBQUssRUFBRSxPQUFPO0lBQ2RDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCQyxZQUFZLEVBQUUsS0FBSztJQUNuQk4sTUFBTSxFQUFFLE1BQU07SUFDZE8sTUFBTSxFQUFFLFNBQVM7SUFDakIsMkJBQTJCLEVBQUU7TUFDM0JDLFNBQVMsRUFBRSxNQUFNO01BQ2pCYixLQUFLLEVBQUU7SUFDVDtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FB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LFNBQVM7RUFBRSxDQUVsQyxDQUNFLENBQUMsZUFDTmhCLDBEQUFBO0lBQ0VxRCxJQUFJLEVBQUMsUUFBUTtJQUNiVCxLQUFLLEVBQUMsSUFBSTtJQUNWYSxRQUFRLEVBQUUsQ0FBQ2xCLFlBQWE7SUFDeEJXLFNBQVMsRUFBRS9DLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ2dCLE1BQU07RUFBRSxDQUMvQixDQUNFLENBQ0QsQ0FDSCxDQUFDO0FBRVY7QUFFQSxpRUFBZU8sS0FBSzs7Ozs7Ozs7VUNqSHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tIFwiYXBocm9kaXRlXCI7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZm9ybVJvdzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxcmVtJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSc6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1Hcm91cDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5SaWdodDogJzFyZW0nLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMC41cmVtJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbiAgZm9ybUxhYmVsOiB7XG4gICAgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nLFxuICAgIHdpZHRoOiAnNzBweCcsXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICB9LFxuICBmb3JtSW5wdXQ6IHtcbiAgICBmbGV4OiAnMScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luTFxuXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHBhZGRpbmc6ICcwLjVyZW0gMXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSc6IHtcbiAgICAgIG1hcmdpblRvcDogJzFyZW0nLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW5hYmxlU3VibWl0LCBzZXRFbmFibGVTdWJtaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUVtYWlsID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRFbmFibGVTdWJtaXQoZXZlbnQudGFyZ2V0LnZhbHVlICE9PSBcIlwiICYmIHBhc3N3b3JkICE9PSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYXNzd29yZCA9IChldmVudCkgPT4ge1xuICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0RW5hYmxlU3VibWl0KGVtYWlsICE9PSBcIlwiICYmIGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gXCJcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvZ0luKGVtYWlsLCBwYXNzd29yZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC1ib2R5XCI+XG4gICAgICA8cD5Mb2dpbiB0byBhY2Nlc3MgdGhlIGZ1bGwgZGFzaGJvYXJkPC9wPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2luU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybVJvdyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1Hcm91cCl9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb3JtTGFiZWwpfT5cbiAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VFbWFpbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1JbnB1dCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1Hcm91cCl9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb3JtTGFiZWwpfT5cbiAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1JbnB1dCl9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFsdWU9XCJPS1wiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZVN1Ym1pdH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5idXR0b24pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNkOWY2YWM4ZWY5NTg0MzVlYjEwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTdHlsZVNoZWV0IiwiY3NzIiwic3R5bGVzIiwiY3JlYXRlIiwiZm9ybVJvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Hcm91cCIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJmb3JtTGFiZWwiLCJ0ZXh0QWxpZ24iLCJmb3JtSW5wdXQiLCJmbGV4IiwiYm9yZGVyIiwibWFyZ2luTCIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsIm1hcmdpblRvcCIsIkxvZ2luIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZW5hYmxlU3VibWl0Iiwic2V0RW5hYmxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlRW1haWwiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJoYW5kbGVMb2dpblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9nSW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJodG1sRm9yIiwidHlwZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9