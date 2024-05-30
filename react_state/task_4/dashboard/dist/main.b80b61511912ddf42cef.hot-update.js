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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var styles = aphrodite__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab'
  },
  headerStyle: {
    backgroundColor: '#deb5b545'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});
var CourseListRow = function CourseListRow(_ref) {
  var isHeader = _ref.isHeader,
    textFirstCell = _ref.textFirstCell,
    textSecondCell = _ref.textSecondCell;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var handleCheckboxChange = function handleCheckboxChange() {
    setIsChecked(!isChecked);
  };
  var rowStyles = isHeader ? styles.headerStyle : isChecked ? styles.rowChecked : styles.rowStyle;
  var renderCourseNamesAndCheckbox = function renderCourseNamesAndCheckbox() {
    if (!isHeader) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: isChecked,
        onChange: handleCheckboxChange
      }), textFirstCell);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, textFirstCell);
  };
  if (isHeader) {
    if (textSecondCell === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(rowStyles)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        colSpan: 2
      }, textFirstCell));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(rowStyles)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, textFirstCell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, textSecondCell));
    }
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(rowStyles)
    }, renderCourseNamesAndCheckbox(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, textSecondCell));
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
/******/ 	__webpack_require__.h = () => ("1e99d2bf84579f553f53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXNoYm9hcmQvLi9zcmMvQ291cnNlTGlzdC9Db3Vyc2VMaXN0Um93LmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgcm93U3R5bGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1YWInLFxuICB9LFxuICBoZWFkZXJTdHlsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNkZWI1YjU0NScsXG4gIH0sXG4gIHJvd0NoZWNrZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTZlNGU0JyxcbiAgfSxcbn0pO1xuXG5jb25zdCBDb3Vyc2VMaXN0Um93ID0gKHsgaXNIZWFkZXIsIHRleHRGaXJzdENlbGwsIHRleHRTZWNvbmRDZWxsIH0pID0+IHtcbiAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3Qgcm93U3R5bGVzID0gaXNIZWFkZXJcbiAgICA/IHN0eWxlcy5oZWFkZXJTdHlsZVxuICAgIDogaXNDaGVja2VkXG4gICAgPyBzdHlsZXMucm93Q2hlY2tlZFxuICAgIDogc3R5bGVzLnJvd1N0eWxlO1xuXG4gIGNvbnN0IHJlbmRlckNvdXJzZU5hbWVzQW5kQ2hlY2tib3ggPSAoKSA9PiB7XG4gICAgaWYgKCFpc0hlYWRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0NoZWNrZWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveENoYW5nZX0gLz5cbiAgICAgICAgICB7dGV4dEZpcnN0Q2VsbH1cbiAgICAgICAgPC90ZD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8dGg+e3RleHRGaXJzdENlbGx9PC90aD47XG4gIH07XG5cbiAgaWYgKGlzSGVhZGVyKSB7XG4gICAgaWYgKHRleHRTZWNvbmRDZWxsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIgY2xhc3NOYW1lPXtjc3Mocm93U3R5bGVzKX0+XG4gICAgICAgICAgPHRoIGNvbFNwYW49ezJ9Pnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIgY2xhc3NOYW1lPXtjc3Mocm93U3R5bGVzKX0+XG4gICAgICAgICAgPHRoPnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgICAgPHRoPnt0ZXh0U2Vjb25kQ2VsbH08L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBjbGFzc05hbWU9e2Nzcyhyb3dTdHlsZXMpfT5cbiAgICAgICAge3JlbmRlckNvdXJzZU5hbWVzQW5kQ2hlY2tib3goKX1cbiAgICAgICAgPHRkPnt0ZXh0U2Vjb25kQ2VsbH08L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59O1xuXG5Db3Vyc2VMaXN0Um93LnByb3BUeXBlcyA9IHtcbiAgaXNIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICB0ZXh0Rmlyc3RDZWxsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHRTZWNvbmRDZWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5Db3Vyc2VMaXN0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNIZWFkZXI6IGZhbHNlLFxuICB0ZXh0U2Vjb25kQ2VsbDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZUxpc3RSb3c7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWU5OWQyYmY4NDU3OWY1NTNmNTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsIlN0eWxlU2hlZXQiLCJjc3MiLCJzdHlsZXMiLCJjcmVhdGUiLCJyb3dTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhlYWRlclN0eWxlIiwicm93Q2hlY2tlZCIsIkNvdXJzZUxpc3RSb3ciLCJfcmVmIiwiaXNIZWFkZXIiLCJ0ZXh0Rmlyc3RDZWxsIiwidGV4dFNlY29uZENlbGwiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsInJvd1N0eWxlcyIsInJlbmRlckNvdXJzZU5hbWVzQW5kQ2hlY2tib3giLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImNvbFNwYW4iLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=