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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");



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
  isHeader: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  textFirstCell: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  textSecondCell: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)])
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
/******/ 	__webpack_require__.h = () => ("d4b756859373772be2cc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lM2JkNGU5MjJkNTA5YTNmZDQ0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ1M7QUFFNUMsSUFBTUksUUFBUSxHQUFHO0VBQ2ZDLGVBQWUsRUFBRTtBQUNuQixDQUFDO0FBRUQsSUFBTUMsV0FBVyxHQUFHO0VBQ2xCRCxlQUFlLEVBQUU7QUFDbkIsQ0FBQztBQUlELElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsSUFBQSxFQUFvRDtFQUFBLElBQTlDQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxhQUFhLEdBQUFGLElBQUEsQ0FBYkUsYUFBYTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztFQUM5RCxJQUFJRixRQUFRLEVBQUU7SUFDWixJQUFJRSxjQUFjLEtBQUssSUFBSSxFQUFFO01BQzNCLG9CQUNFWCwwREFBQSwwQkFDRUEsMERBQUE7UUFBSWEsT0FBTyxFQUFFO01BQUUsR0FBRUgsYUFBa0IsQ0FDakMsQ0FBQztJQUVULENBQUMsTUFBTTtNQUNMLG9CQUNFViwwREFBQSwwQkFDRUEsMERBQUEsYUFBS1UsYUFBa0IsQ0FBQyxlQUN4QlYsMERBQUEsYUFBS1csY0FBbUIsQ0FDdEIsQ0FBQztJQUVUO0VBQ0YsQ0FBQyxNQUFNO0lBQ0wsb0JBQ0VYLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFLVSxhQUFrQixDQUFDLGVBQ3hCViwwREFBQSxhQUFLVyxjQUFtQixDQUN0QixDQUFDO0VBRVQ7QUFDRixDQUFDO0FBRURKLGFBQWEsQ0FBQ08sU0FBUyxHQUFHO0VBQ3hCTCxRQUFRLEVBQUVSLHdEQUFjO0VBQ3hCUyxhQUFhLEVBQUVULDBEQUFnQixDQUFDZ0IsVUFBVTtFQUMxQ04sY0FBYyxFQUFFViwyREFBbUIsQ0FBQyxDQUFDQSwwREFBZ0IsRUFBRUEsMERBQWdCLENBQUM7QUFDMUUsQ0FBQztBQUVETSxhQUFhLENBQUNhLFlBQVksR0FBRztFQUMzQlgsUUFBUSxFQUFFLEtBQUs7RUFDZkUsY0FBYyxFQUFFO0FBQ2xCLENBQUM7QUFFRCxpRUFBZUosYUFBYTs7Ozs7Ozs7VUNuRDVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0NvdXJzZUxpc3QvQ291cnNlTGlzdFJvdy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcblxuY29uc3Qgcm93U3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjVhYicsXG59O1xuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2RlYjViNTQ1Jyxcbn07XG5cblxuXG5jb25zdCBDb3Vyc2VMaXN0Um93ID0gKHsgaXNIZWFkZXIsIHRleHRGaXJzdENlbGwsIHRleHRTZWNvbmRDZWxsIH0pID0+IHtcbiAgaWYgKGlzSGVhZGVyKSB7XG4gICAgaWYgKHRleHRTZWNvbmRDZWxsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNvbFNwYW49ezJ9Pnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgICAgPHRoPnt0ZXh0U2Vjb25kQ2VsbH08L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPnt0ZXh0Rmlyc3RDZWxsfTwvdGQ+XG4gICAgICAgIDx0ZD57dGV4dFNlY29uZENlbGx9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufTtcblxuQ291cnNlTGlzdFJvdy5wcm9wVHlwZXMgPSB7XG4gIGlzSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGV4dEZpcnN0Q2VsbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0U2Vjb25kQ2VsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuQ291cnNlTGlzdFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzSGVhZGVyOiBmYWxzZSxcbiAgdGV4dFNlY29uZENlbGw6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VMaXN0Um93OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0Yjc1Njg1OTM3Mzc3MmJlMmNjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiU3R5bGVTaGVldCIsImNzcyIsInJvd1N0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGVhZGVyU3R5bGUiLCJDb3Vyc2VMaXN0Um93IiwiX3JlZiIsImlzSGVhZGVyIiwidGV4dEZpcnN0Q2VsbCIsInRleHRTZWNvbmRDZWxsIiwiY3JlYXRlRWxlbWVudCIsImNvbFNwYW4iLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=