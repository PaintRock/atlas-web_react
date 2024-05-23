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
/******/ 	__webpack_require__.h = () => ("7f4c302abd93b5a30681")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MTgwMDVhNTM0ZDQ5MjEzOTE0Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUU1QyxJQUFNSSxNQUFNLEdBQUdGLGlEQUFVLENBQUNHLE1BQU0sQ0FBQztFQUMvQkMsT0FBTyxFQUFFO0lBQ1BDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsWUFBWSxFQUFFLE1BQU07SUFDcEIsMkJBQTJCLEVBQUU7TUFDM0JGLGFBQWEsRUFBRSxRQUFRO01BQ3ZCQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUM7RUFDREUsU0FBUyxFQUFFO0lBQ1RKLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkcsV0FBVyxFQUFFLE1BQU07SUFDbkIsMkJBQTJCLEVBQUU7TUFDM0JGLFlBQVksRUFBRSxRQUFRO01BQ3RCRyxLQUFLLEVBQUU7SUFDVDtFQUNGLENBQUM7RUFDREMsU0FBUyxFQUFFO0lBQ1RGLFdBQVcsRUFBRSxRQUFRO0lBQ3JCQyxLQUFLLEVBQUUsTUFBTTtJQUNiRSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLFNBQVMsRUFBRTtJQUNUQyxJQUFJLEVBQUUsR0FBRztJQUNUQyxNQUFNLEVBQUU7RUFFVixDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOQyxlQUFlLEVBQUUsTUFBTTtJQUN2QkMsS0FBSyxFQUFFLE9BQU87SUFDZEMsT0FBTyxFQUFFLGFBQWE7SUFDdEJDLFlBQVksRUFBRSxLQUFLO0lBQ25CTCxNQUFNLEVBQUUsTUFBTTtJQUNkTSxNQUFNLEVBQUUsU0FBUztJQUNqQiwyQkFBMkIsRUFBRTtNQUMzQkMsU0FBUyxFQUFFLE1BQU07TUFDakJaLEtBQUssRUFBRTtJQUNUO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixTQUFTYSxLQUFLQSxDQUFBLEVB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Q0FBQyxlQUNOaEIsMERBQUE7SUFDRW9ELElBQUksRUFBQyxRQUFRO0lBQ2JULEtBQUssRUFBQyxJQUFJO0lBQ1ZhLFFBQVEsRUFBRSxDQUFDbEIsWUFBYTtJQUN4QlcsU0FBUyxFQUFFOUMsOENBQUcsQ0FBQ0MsTUFBTSxDQUFDZSxNQUFNO0VBQUUsQ0FDL0IsQ0FDRSxDQUNELENBQ0gsQ0FBQztBQUVWO0FBRUEsaUVBQWVPLEtBQUs7Ozs7Ozs7O1VDL0dwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9Mb2dpbi9Mb2dpbi5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSBcImFwaHJvZGl0ZVwiO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGZvcm1Sb3c6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiAnMXJlbScsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA5MDBweCknOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICB9LFxuICB9LFxuICBmb3JtR3JvdXA6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luUmlnaHQ6ICcxcmVtJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAuNXJlbScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1MYWJlbDoge1xuICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcbiAgICB3aWR0aDogJzcwcHgnLFxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgfSxcbiAgZm9ybUlucHV0OiB7XG4gICAgZmxleDogJzEnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHBhZGRpbmc6ICcwLjVyZW0gMXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSc6IHtcbiAgICAgIG1hcmdpblRvcDogJzFyZW0nLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW5hYmxlU3VibWl0LCBzZXRFbmFibGVTdWJtaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUVtYWlsID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRFbmFibGVTdWJtaXQoZXZlbnQudGFyZ2V0LnZhbHVlICE9PSBcIlwiICYmIHBhc3N3b3JkICE9PSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYXNzd29yZCA9IChldmVudCkgPT4ge1xuICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0RW5hYmxlU3VibWl0KGVtYWlsICE9PSBcIlwiICYmIGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gXCJcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvZ0luKGVtYWlsLCBwYXNzd29yZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC1ib2R5XCI+XG4gICAgICA8cD5Mb2dpbiB0byBhY2Nlc3MgdGhlIGZ1bGwgZGFzaGJvYXJkPC9wPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2luU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9ybVJvdyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1Hcm91cCl9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb3JtTGFiZWwpfT5cbiAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VFbWFpbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1JbnB1dCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1Hcm91cCl9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb3JtTGFiZWwpfT5cbiAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvcm1JbnB1dCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YWx1ZT1cIk9LXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlU3VibWl0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmJ1dHRvbil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Y0YzMwMmFiZDkzYjVhMzA2ODFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlU2hlZXQiLCJjc3MiLCJzdHlsZXMiLCJjcmVhdGUiLCJmb3JtUm93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luQm90dG9tIiwiZm9ybUdyb3VwIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImZvcm1MYWJlbCIsInRleHRBbGlnbiIsImZvcm1JbnB1dCIsImZsZXgiLCJib3JkZXIiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJMb2dpbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImVtYWlsIiwic2V0RW1haWwiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImVuYWJsZVN1Ym1pdCIsInNldEVuYWJsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZUVtYWlsIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVBhc3N3b3JkIiwiaGFuZGxlTG9naW5TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==