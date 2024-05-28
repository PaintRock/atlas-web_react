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
    marginLeft: '40px'
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
/******/ 	__webpack_require__.h = () => ("68be5e397779493ee14d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZGIwNDI2ZGY5MDJkZGM4YThlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUU1QyxJQUFNSSxNQUFNLEdBQUdGLGlEQUFVLENBQUNHLE1BQU0sQ0FBQztFQUMvQkMsT0FBTyxFQUFFO0lBQ1BDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsWUFBWSxFQUFFLE1BQU07SUFDcEIsMkJBQTJCLEVBQUU7TUFDM0JGLGFBQWEsRUFBRSxRQUFRO01BQ3ZCQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUM7RUFDREUsU0FBUyxFQUFFO0lBQ1RKLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkcsV0FBVyxFQUFFLE1BQU07SUFDbkIsMkJBQTJCLEVBQUU7TUFDM0JGLFlBQVksRUFBRSxRQUFRO01BQ3RCRyxLQUFLLEVBQUU7SUFDVDtFQUNGLENBQUM7RUFDREMsU0FBUyxFQUFFO0lBQ1RGLFdBQVcsRUFBRSxRQUFRO0lBQ3JCQyxLQUFLLEVBQUUsTUFBTTtJQUNiRSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLFNBQVMsRUFBRTtJQUNUQyxJQUFJLEVBQUUsR0FBRztJQUNUQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxVQUFVLEVBQUU7RUFFZCxDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOQyxlQUFlLEVBQUUsTUFBTTtJQUN2QkMsS0FBSyxFQUFFLE9BQU87SUFDZEMsT0FBTyxFQUFFLGFBQWE7SUFDdEJDLFlBQVksRUFBRSxLQUFLO0lBQ25CTixNQUFNLEVBQUUsTUFBTTtJQUNkTyxNQUFNLEVBQUUsU0FBUztJQUNqQiwyQkFBMkIsRUFBRTtNQUMzQkMsU0FBUyxFQUFFLE1BQU07TUFDakJiLEtBQUssRUFBRTtJQUNUO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFF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U0FBUztFQUFFLENBRWxDLENBQ0UsQ0FBQyxlQUNOaEIsMERBQUE7SUFDRXFELElBQUksRUFBQyxRQUFRO0lBQ2JULEtBQUssRUFBQyxJQUFJO0lBQ1ZhLFFBQVEsRUFBRSxDQUFDbEIsWUFBYTtJQUN4QlcsU0FBUyxFQUFFL0MsOENBQUcsQ0FBQ0MsTUFBTSxDQUFDZ0IsTUFBTTtFQUFFLENBQy9CLENBQ0UsQ0FDRCxDQUNILENBQUM7QUFFVjtBQUVBLGlFQUFlTyxLQUFLOzs7Ozs7OztVQ2pIcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gXCJhcGhyb2RpdGVcIjtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBmb3JtUm93OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpJzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgfSxcbiAgfSxcbiAgZm9ybUdyb3VwOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpblJpZ2h0OiAnMXJlbScsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA5MDBweCknOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxuICBmb3JtTGFiZWw6IHtcbiAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXG4gICAgd2lkdGg6ICc3MHB4JyxcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gIH0sXG4gIGZvcm1JbnB1dDoge1xuICAgIGZsZXg6ICcxJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW5MZWZ0OiAnNDBweCcsXG5cbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgcGFkZGluZzogJzAuNXJlbSAxcmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpJzoge1xuICAgICAgbWFyZ2luVG9wOiAnMXJlbScsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbmFibGVTdWJtaXQsIHNldEVuYWJsZVN1Ym1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlRW1haWwgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldEVuYWJsZVN1Ym1pdChldmVudC50YXJnZXQudmFsdWUgIT09IFwiXCIgJiYgcGFzc3dvcmQgIT09IFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRFbmFibGVTdWJtaXQoZW1haWwgIT09IFwiXCIgJiYgZXZlbnQudGFyZ2V0LnZhbHVlICE9PSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9nSW4oZW1haWwsIHBhc3N3b3JkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwLWJvZHlcIj5cbiAgICAgIDxwPkxvZ2luIHRvIGFjY2VzcyB0aGUgZnVsbCBkYXNoYm9hcmQ8L3A+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW5TdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb3JtUm93KX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybUdyb3VwKX0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1MYWJlbCl9PlxuICAgICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUVtYWlsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybUlucHV0KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybUdyb3VwKX0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1MYWJlbCl9PlxuICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybUlucHV0KX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YWx1ZT1cIk9LXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlU3VibWl0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmJ1dHRvbil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjhiZTVlMzk3Nzc5NDkzZWUxNGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlU2hlZXQiLCJjc3MiLCJzdHlsZXMiLCJjcmVhdGUiLCJmb3JtUm93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luQm90dG9tIiwiZm9ybUdyb3VwIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImZvcm1MYWJlbCIsInRleHRBbGlnbiIsImZvcm1JbnB1dCIsImZsZXgiLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwibWFyZ2luVG9wIiwiTG9naW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJlbWFpbCIsInNldEVtYWlsIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJlbmFibGVTdWJtaXQiLCJzZXRFbmFibGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2VFbWFpbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsImhhbmRsZUxvZ2luU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dJbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJuYW1lIiwib25DaGFuZ2UiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=