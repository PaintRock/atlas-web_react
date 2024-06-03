"use strict";
self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/CourseList/CourseList.js":
/*!**************************************!*\
  !*** ./src/CourseList/CourseList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CourseListRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseListRow */ "./src/CourseList/CourseListRow.js");
/* harmony import */ var _CourseShape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseShape */ "./src/CourseList/CourseShape.js");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");




// import './CourseList.css';

var styles = aphrodite__WEBPACK_IMPORTED_MODULE_3__.StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px'
  },
  courseListThv: {
    padding: '8px',
    textAlign: 'center',
    border: '1px solid black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderWidth: '100%'
  },
  courseListTh: {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid black',
    backgroundColor: 'white',
    fontWeight: 'bold'
  },
  courseListTd: {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid black'
  },
  courseListTr: {
    ':hover': {
      backgroundColor: '#f5f5f5'
    }
  },
  courseListTheadTrFirstChild: {
    textAlign: 'center',
    borderWidth: '100%'
  },
  tableContainer: {
    marginBottom: '20px'
  }
});
var CourseList = function CourseList(_ref) {
  var listCourses = _ref.listCourses;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.tableContainer)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    id: "CourseList",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseList)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseListTheadTrFirstChild)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseListThv)
  }, "Available Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseListTh)
  }, "Course Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseListTh)
  }, "Credit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, listCourses.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CourseListRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    textFirstCell: "No course available yet"
  }), listCourses.map(function (course) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CourseListRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: course.id,
      textFirstCell: course.name,
      textSecondCell: course.credit,
      className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseListTrHover)
    });
  }))));
};
CourseList.propTypes = {
  listCourses: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(_CourseShape__WEBPACK_IMPORTED_MODULE_2__["default"])
};
CourseList.defaultProps = {
  listCourses: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0797e342fcab52fc4666")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUVEZCxVQUFVLENBQUNlLFNBQVMsR0FBRztFQUNyQmIsV0FBVyxFQUFFekIseURBQWlCLENBQUNFLG9EQUFXO0FBQzVDLENBQUM7QUFFRHFCLFVBQVUsQ0FBQ2lCLFlBQVksR0FBRztFQUN4QmYsV0FBVyxFQUFFO0FBQ2YsQ0FBQztBQUVELGlFQUFlRixVQUFVOzs7Ozs7OztVQ3JGekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQ291cnNlTGlzdC9Db3Vyc2VMaXN0LmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ291cnNlTGlzdFJvdyBmcm9tICcuL0NvdXJzZUxpc3RSb3cnO1xuaW1wb3J0IENvdXJzZVNoYXBlIGZyb20gJy4vQ291cnNlU2hhcGUnO1xuLy8gaW1wb3J0ICcuL0NvdXJzZUxpc3QuY3NzJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY291cnNlTGlzdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gIH0sXG4gIGNvdXJzZUxpc3RUaHY6IHtcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBib3JkZXJXaWR0aDogJzEwMCUnLCBcbiAgfSxcbiAgY291cnNlTGlzdFRoOiB7XG4gICAgcGFkZGluZzogJzhweCcsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBjb3Vyc2VMaXN0VGQ6IHtcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICB9LFxuICBjb3Vyc2VMaXN0VHI6IHtcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsXG4gICAgfSxcbiAgfSxcbiAgY291cnNlTGlzdFRoZWFkVHJGaXJzdENoaWxkOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBib3JkZXJXaWR0aDogJzEwMCUnLFxuICB9LFxuICB0YWJsZUNvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICB9LFxufSk7XG5jb25zdCBDb3Vyc2VMaXN0ID0gKHsgbGlzdENvdXJzZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLnRhYmxlQ29udGFpbmVyKX0+XG4gICAgICA8dGFibGUgaWQ9XCJDb3Vyc2VMaXN0XCIgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmNvdXJzZUxpc3QpfT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2NzcyhzdHlsZXMuY291cnNlTGlzdFRoZWFkVHJGaXJzdENoaWxkKX0+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmNvdXJzZUxpc3RUaHYpfT5BdmFpbGFibGUgQ291cnNlczwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmNvdXJzZUxpc3RUaCl9PkNvdXJzZSBOYW1lPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e2NzcyhzdHlsZXMuY291cnNlTGlzdFRoKX0+Q3JlZGl0PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2xpc3RDb3Vyc2VzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8Q291cnNlTGlzdFJvdyB0ZXh0Rmlyc3RDZWxsPVwiTm8gY291cnNlIGF2YWlsYWJsZSB5ZXRcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2xpc3RDb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXG4gICAgICAgICAgICA8Q291cnNlTGlzdFJvd1xuICAgICAgICAgICAgICBrZXk9e2NvdXJzZS5pZH1cbiAgICAgICAgICAgICAgdGV4dEZpcnN0Q2VsbD17Y291cnNlLm5hbWV9XG4gICAgICAgICAgICAgIHRleHRTZWNvbmRDZWxsPXtjb3Vyc2UuY3JlZGl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuY291cnNlTGlzdFRySG92ZXIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db3Vyc2VMaXN0LnByb3BUeXBlcyA9IHtcbiAgbGlzdENvdXJzZXM6IFByb3BUeXBlcy5hcnJheU9mKENvdXJzZVNoYXBlKSxcbn07XG5cbkNvdXJzZUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBsaXN0Q291cnNlczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VMaXN0O1xuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA3OTdlMzQyZmNhYjUyZmM0NjY2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQ291cnNlTGlzdFJvdyIsIkNvdXJzZVNoYXBlIiwiU3R5bGVTaGVldCIsImNzcyIsInN0eWxlcyIsImNyZWF0ZSIsImNvdXJzZUxpc3QiLCJ3aWR0aCIsImJvcmRlckNvbGxhcHNlIiwibWFyZ2luQm90dG9tIiwiY291cnNlTGlzdFRodiIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiYm9yZGVyV2lkdGgiLCJjb3Vyc2VMaXN0VGgiLCJjb3Vyc2VMaXN0VGQiLCJjb3Vyc2VMaXN0VHIiLCJjb3Vyc2VMaXN0VGhlYWRUckZpcnN0Q2hpbGQiLCJ0YWJsZUNvbnRhaW5lciIsIkNvdXJzZUxpc3QiLCJfcmVmIiwibGlzdENvdXJzZXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJsZW5ndGgiLCJ0ZXh0Rmlyc3RDZWxsIiwibWFwIiwiY291cnNlIiwia2V5IiwibmFtZSIsInRleHRTZWNvbmRDZWxsIiwiY3JlZGl0IiwiY291cnNlTGlzdFRySG92ZXIiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==