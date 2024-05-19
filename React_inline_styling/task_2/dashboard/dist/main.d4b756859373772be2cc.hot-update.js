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
/******/ 	__webpack_require__.h = () => ("d83b33536e53fabe1ce8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNGI3NTY4NTkzNzM3NzJiZTJjYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ1M7QUFHNUMsSUFBTUksUUFBUSxHQUFHO0VBQ2ZDLGVBQWUsRUFBRTtBQUNuQixDQUFDO0FBRUQsSUFBTUMsV0FBVyxHQUFHO0VBQ2xCRCxlQUFlLEVBQUU7QUFDbkIsQ0FBQztBQUlELElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsSUFBQSxFQUFvRDtFQUFBLElBQTlDQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxhQUFhLEdBQUFGLElBQUEsQ0FBYkUsYUFBYTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztFQUM5RCxJQUFJRixRQUFRLEVBQUU7SUFDWixJQUFJRSxjQUFjLEtBQUssSUFBSSxFQUFFO01BQzNCLG9CQUNFWCwwREFBQSwwQkFDRUEsMERBQUE7UUFBSWEsT0FBTyxFQUFFO01BQUUsR0FBRUgsYUFBa0IsQ0FDakMsQ0FBQztJQUVULENBQUMsTUFBTTtNQUNMLG9CQUNFViwwREFBQSwwQkFDRUEsMERBQUEsYUFBS1UsYUFBa0IsQ0FBQyxlQUN4QlYsMERBQUEsYUFBS1csY0FBbUIsQ0FDdEIsQ0FBQztJQUVUO0VBQ0YsQ0FBQyxNQUFNO0lBQ0wsb0JBQ0VYLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFLVSxhQUFrQixDQUFDLGVBQ3hCViwwREFBQSxhQUFLVyxjQUFtQixDQUN0QixDQUFDO0VBRVQ7QUFDRixDQUFDO0FBRURKLGFBQWEsQ0FBQ08sU0FBUyxHQUFHO0VBQ3hCTCxRQUFRLEVBQUVSLHdEQUFjO0VBQ3hCUyxhQUFhLEVBQUVULDBEQUFnQixDQUFDZ0IsVUFBVTtFQUMxQ04sY0FBYyxFQUFFViwyREFBbUIsQ0FBQyxDQUFDQSwwREFBZ0IsRUFBRUEsMERBQWdCLENBQUM7QUFDMUUsQ0FBQztBQUVETSxhQUFhLENBQUNhLFlBQVksR0FBRztFQUMzQlgsUUFBUSxFQUFFLEtBQUs7RUFDZkUsY0FBYyxFQUFFO0FBQ2xCLENBQUM7QUFFRCxpRUFBZUosYUFBYTs7Ozs7Ozs7VUNwRDVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0NvdXJzZUxpc3QvQ291cnNlTGlzdFJvdy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcblxuXG5jb25zdCByb3dTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNWFiJyxcbn07XG5cbmNvbnN0IGhlYWRlclN0eWxlID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZGViNWI1NDUnLFxufTtcblxuXG5cbmNvbnN0IENvdXJzZUxpc3RSb3cgPSAoeyBpc0hlYWRlciwgdGV4dEZpcnN0Q2VsbCwgdGV4dFNlY29uZENlbGwgfSkgPT4ge1xuICBpZiAoaXNIZWFkZXIpIHtcbiAgICBpZiAodGV4dFNlY29uZENlbGwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggY29sU3Bhbj17Mn0+e3RleHRGaXJzdENlbGx9PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+e3RleHRGaXJzdENlbGx9PC90aD5cbiAgICAgICAgICA8dGg+e3RleHRTZWNvbmRDZWxsfTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+e3RleHRGaXJzdENlbGx9PC90ZD5cbiAgICAgICAgPHRkPnt0ZXh0U2Vjb25kQ2VsbH08L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59O1xuXG5Db3Vyc2VMaXN0Um93LnByb3BUeXBlcyA9IHtcbiAgaXNIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICB0ZXh0Rmlyc3RDZWxsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHRTZWNvbmRDZWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5Db3Vyc2VMaXN0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNIZWFkZXI6IGZhbHNlLFxuICB0ZXh0U2Vjb25kQ2VsbDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZUxpc3RSb3c7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDgzYjMzNTM2ZTUzZmFiZTFjZThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJTdHlsZVNoZWV0IiwiY3NzIiwicm93U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWFkZXJTdHlsZSIsIkNvdXJzZUxpc3RSb3ciLCJfcmVmIiwiaXNIZWFkZXIiLCJ0ZXh0Rmlyc3RDZWxsIiwidGV4dFNlY29uZENlbGwiLCJjcmVhdGVFbGVtZW50IiwiY29sU3BhbiIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==