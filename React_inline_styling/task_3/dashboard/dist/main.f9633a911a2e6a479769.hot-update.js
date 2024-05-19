"use strict";
self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/CourseList/CourseListRow.js":
/*!*****************************************!*\
  !*** ./src/CourseList/CourseListRow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var rowStyle = {
  backgroundColor: '#f5f5f5ab'
};
var headerStyle = {
  backgroundColor: '#deb5b545'
};
var CourseListRow = function CourseListRow(_ref) {
  var isHeader = _ref.isHeader,
    textFirstCell = _ref.textFirstCell,
    textSecondCell = _ref.textSecondCell;
  if (isHeader) {
    if (textSecondCell === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        colSpan: 2
      }, textFirstCell));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, textFirstCell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, textSecondCell));
    }
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, textFirstCell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, textSecondCell));
  }
};
CourseListRow.propTypes = {
  isHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  textFirstCell: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  textSecondCell: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseListRow);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e3bd4e922d509a3fd44f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOTYzM2E5MTFhMmU2YTQ3OTc2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFHbkMsSUFBTUUsUUFBUSxHQUFHO0VBQ2ZDLGVBQWUsRUFBRTtBQUNuQixDQUFDO0FBRUQsSUFBTUMsV0FBVyxHQUFHO0VBQ2xCRCxlQUFlLEVBQUU7QUFDbkIsQ0FBQztBQUlELElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsSUFBQSxFQUFvRDtFQUFBLElBQTlDQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxhQUFhLEdBQUFGLElBQUEsQ0FBYkUsYUFBYTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztFQUM5RCxJQUFJRixRQUFRLEVBQUU7SUFDWixJQUFJRSxjQUFjLEtBQUssSUFBSSxFQUFFO01BQzNCLG9CQUNFVCwwREFBQSwwQkFDRUEsMERBQUE7UUFBSVcsT0FBTyxFQUFFO01BQUUsR0FBRUgsYUFBa0IsQ0FDakMsQ0FBQztJQUVULENBQUMsTUFBTTtNQUNMLG9CQUNFUiwwREFBQSwwQkFDRUEsMERBQUEsYUFBS1EsYUFBa0IsQ0FBQyxlQUN4QlIsMERBQUEsYUFBS1MsY0FBbUIsQ0FDdEIsQ0FBQztJQUVUO0VBQ0YsQ0FBQyxNQUFNO0lBQ0wsb0JBQ0VULDBEQUFBLDBCQUNFQSwwREFBQSxhQUFLUSxhQUFrQixDQUFDLGVBQ3hCUiwwREFBQSxhQUFLUyxjQUFtQixDQUN0QixDQUFDO0VBRVQ7QUFDRixDQUFDO0FBRURKLGFBQWEsQ0FBQ08sU0FBUyxHQUFHO0VBQ3hCTCxRQUFRLEVBQUVOLHdEQUFjO0VBQ3hCTyxhQUFhLEVBQUVQLDBEQUFnQixDQUFDYyxVQUFVO0VBQzFDTixjQUFjLEVBQUVSLDJEQUFtQixDQUFDLENBQUNBLDBEQUFnQixFQUFFQSwwREFBZ0IsQ0FBQztBQUMxRSxDQUFDO0FBRURJLGFBQWEsQ0FBQ2EsWUFBWSxHQUFHO0VBQzNCWCxRQUFRLEVBQUUsS0FBSztFQUNmRSxjQUFjLEVBQUU7QUFDbEIsQ0FBQztBQUVELGlFQUFlSixhQUFhOzs7Ozs7OztVQ25ENUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQ291cnNlTGlzdC9Db3Vyc2VMaXN0Um93LmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cblxuY29uc3Qgcm93U3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjVhYicsXG59O1xuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2RlYjViNTQ1Jyxcbn07XG5cblxuXG5jb25zdCBDb3Vyc2VMaXN0Um93ID0gKHsgaXNIZWFkZXIsIHRleHRGaXJzdENlbGwsIHRleHRTZWNvbmRDZWxsIH0pID0+IHtcbiAgaWYgKGlzSGVhZGVyKSB7XG4gICAgaWYgKHRleHRTZWNvbmRDZWxsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNvbFNwYW49ezJ9Pnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgICAgPHRoPnt0ZXh0U2Vjb25kQ2VsbH08L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPnt0ZXh0Rmlyc3RDZWxsfTwvdGQ+XG4gICAgICAgIDx0ZD57dGV4dFNlY29uZENlbGx9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufTtcblxuQ291cnNlTGlzdFJvdy5wcm9wVHlwZXMgPSB7XG4gIGlzSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGV4dEZpcnN0Q2VsbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0U2Vjb25kQ2VsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuQ291cnNlTGlzdFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzSGVhZGVyOiBmYWxzZSxcbiAgdGV4dFNlY29uZENlbGw6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VMaXN0Um93OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUzYmQ0ZTkyMmQ1MDlhM2ZkNDRmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwicm93U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWFkZXJTdHlsZSIsIkNvdXJzZUxpc3RSb3ciLCJfcmVmIiwiaXNIZWFkZXIiLCJ0ZXh0Rmlyc3RDZWxsIiwidGV4dFNlY29uZENlbGwiLCJjcmVhdGVFbGVtZW50IiwiY29sU3BhbiIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==