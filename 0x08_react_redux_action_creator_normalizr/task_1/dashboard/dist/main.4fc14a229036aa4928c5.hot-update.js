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
  // courseListThv: {
  //   padding: '8px',
  //   textAlign: 'center',
  //   border: '1px solid black',
  //   backgroundColor: 'white',
  //   fontWeight: 'bold',
  //   borderWidth: '100%', 
  // },
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
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseListT)
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
/******/ 	__webpack_require__.h = () => ("6619012ff64eab341cf3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZmMxNGEyMjkwMzZhYTQ5MjhjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDUztBQUNKO0FBQ3hDO0FBQzRDO0FBRTVDLElBQU1NLE1BQU0sR0FBR0YsaURBQVUsQ0FBQ0csTUFBTSxDQUFDO0VBQy9CQyxVQUFVLEVBQUU7SUFDVkMsS0FBSyxFQUFFLE1BQU07SUFDYkMsY0FBYyxFQUFFLFVBQVU7SUFDMUJDLFlBQVksRUFBRTtFQUNoQixDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBQyxZQUFZLEVBQUU7SUFDWkMsT0FBTyxFQUFFLEtBQUs7SUFDZEMsU0FBUyxFQUFFLE1BQU07SUFDakJDLE1BQU0sRUFBRSxpQkFBaUI7SUFDekJDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCQyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBQ0RDLFlBQVksRUFBRTtJQUNaTCxPQUFPLEVBQUUsS0FBSztJQUNkQyxTQUFTLEVBQUUsTUFBTTtJQUNqQkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNESSxZQUFZLEVBQUU7SUFDWixRQUFRLEVBQUU7TUFDUkgsZUFBZSxFQUFFO0lBQ25CO0VBQ0YsQ0FBQztFQUNESSwyQkFBMkIsRUFBRTtJQUMzQk4sU0FBUyxFQUFFLFFBQVE7SUFDbkJPLFdBQVcsRUFBRTtFQUNmLENBQUM7RUFDREMsY0FBYyxFQUFFO0lBQ2RYLFlBQVksRUFBRTtFQUNoQjtBQUNGLENBQUMsQ0FBQztBQUNGLElBQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQy9CLG9CQUNFekIsMERBQUE7SUFBSzJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ2dCLGNBQWM7RUFBRSxnQkFDekN0QiwwREFBQTtJQUFPNEIsRUFBRSxFQUFDLFlBQVk7SUFBQ0QsU0FBUyxFQUFFdEIsOENBQUcsQ0FBQ0MsTUFBTSxDQUFDRSxVQUFVO0VBQUUsZ0JBQ3ZEUiwwREFBQSw2QkFDRUEsMERBQUE7SUFBSTJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ2MsMkJBQTJCO0VBQUUsZ0JBQ3JEcEIsMERBQUE7SUFBSTJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ3VCLFdBQVc7RUFBRSxHQUFDLG1CQUFxQixDQUMzRCxDQUFDLGVBQ0w3QiwwREFBQSwwQkFDRUEsMERBQUE7SUFBSTJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ00sWUFBWTtFQUFFLEdBQUMsYUFBZSxDQUFDLGVBQ3pEWiwwREFBQTtJQUFJMkIsU0FBUyxFQUFFdEIsOENBQUcsQ0FBQ0MsTUFBTSxDQUFDTSxZQUFZO0VBQUUsR0FBQyxRQUFVLENBQ2pELENBQ0MsQ0FBQyxlQUNSWiwwREFBQSxnQkFDR3lCLFdBQVcsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsaUJBQ3ZCOUIsMERBQUEsQ0FBQ0Usc0RBQWE7SUFBQzZCLGFBQWEsRUFBQztFQUF5QixDQUFFLENBQ3pELEVBQ0FOLFdBQVcsQ0FBQ08sR0FBRyxDQUFDLFVBQUNDLE1BQU07SUFBQSxvQkFDdEJqQywwREFBQSxDQUFDRSxzREFBYTtNQUNaZ0MsR0FBRyxFQUFFRCxNQUFNLENBQUNMLEVBQUc7TUFDZkcsYUFBYSxFQUFFRSxNQUFNLENBQUNFLElBQUs7TUFDM0JDLGNBQWMsRUFBRUgsTUFBTSxDQUFDSSxNQUFPO01BQzlCVixTQUFTLEVBQUV0Qiw4Q0FBRyxDQUFDQyxNQUFNLENBQUNnQyxpQkFBaUI7SUFBRSxDQUMxQyxDQUFDO0VBQUEsQ0FDSCxDQUNJLENBQ0YsQ0FDSixDQUFDO0FBRVYsQ0FBQztBQUVEZixVQUFVLENBQUNnQixTQUFTLEdBQUc7RUFDckJkLFdBQVcsRUFBRXhCLHlEQUFpQixDQUFDRSxvREFBVztBQUM1QyxDQUFDO0FBRURvQixVQUFVLENBQUNrQixZQUFZLEdBQUc7RUFDeEJoQixXQUFXLEVBQUU7QUFDZixDQUFDO0FBRUQsaUVBQWVGLFVBQVU7Ozs7Ozs7O1VDckZ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9Db3Vyc2VMaXN0L0NvdXJzZUxpc3QuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb3Vyc2VMaXN0Um93IGZyb20gJy4vQ291cnNlTGlzdFJvdyc7XG5pbXBvcnQgQ291cnNlU2hhcGUgZnJvbSAnLi9Db3Vyc2VTaGFwZSc7XG4vLyBpbXBvcnQgJy4vQ291cnNlTGlzdC5jc3MnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb3Vyc2VMaXN0OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgfSxcbiAgLy8gY291cnNlTGlzdFRodjoge1xuICAvLyAgIHBhZGRpbmc6ICc4cHgnLFxuICAvLyAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIC8vICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIC8vICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAvLyAgIGJvcmRlcldpZHRoOiAnMTAwJScsIFxuICAvLyB9LFxuICBjb3Vyc2VMaXN0VGg6IHtcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIGNvdXJzZUxpc3RUZDoge1xuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gIH0sXG4gIGNvdXJzZUxpc3RUcjoge1xuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyxcbiAgICB9LFxuICB9LFxuICBjb3Vyc2VMaXN0VGhlYWRUckZpcnN0Q2hpbGQ6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGJvcmRlcldpZHRoOiAnMTAwJScsXG4gIH0sXG4gIHRhYmxlQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gIH0sXG59KTtcbmNvbnN0IENvdXJzZUxpc3QgPSAoeyBsaXN0Q291cnNlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMudGFibGVDb250YWluZXIpfT5cbiAgICAgIDx0YWJsZSBpZD1cIkNvdXJzZUxpc3RcIiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuY291cnNlTGlzdCl9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5jb3Vyc2VMaXN0VGhlYWRUckZpcnN0Q2hpbGQpfT5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e2NzcyhzdHlsZXMuY291cnNlTGlzdFQpfT5BdmFpbGFibGUgQ291cnNlczwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmNvdXJzZUxpc3RUaCl9PkNvdXJzZSBOYW1lPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e2NzcyhzdHlsZXMuY291cnNlTGlzdFRoKX0+Q3JlZGl0PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2xpc3RDb3Vyc2VzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8Q291cnNlTGlzdFJvdyB0ZXh0Rmlyc3RDZWxsPVwiTm8gY291cnNlIGF2YWlsYWJsZSB5ZXRcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2xpc3RDb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXG4gICAgICAgICAgICA8Q291cnNlTGlzdFJvd1xuICAgICAgICAgICAgICBrZXk9e2NvdXJzZS5pZH1cbiAgICAgICAgICAgICAgdGV4dEZpcnN0Q2VsbD17Y291cnNlLm5hbWV9XG4gICAgICAgICAgICAgIHRleHRTZWNvbmRDZWxsPXtjb3Vyc2UuY3JlZGl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuY291cnNlTGlzdFRySG92ZXIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db3Vyc2VMaXN0LnByb3BUeXBlcyA9IHtcbiAgbGlzdENvdXJzZXM6IFByb3BUeXBlcy5hcnJheU9mKENvdXJzZVNoYXBlKSxcbn07XG5cbkNvdXJzZUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBsaXN0Q291cnNlczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VMaXN0O1xuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY2MTkwMTJmZjY0ZWFiMzQxY2YzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQ291cnNlTGlzdFJvdyIsIkNvdXJzZVNoYXBlIiwiU3R5bGVTaGVldCIsImNzcyIsInN0eWxlcyIsImNyZWF0ZSIsImNvdXJzZUxpc3QiLCJ3aWR0aCIsImJvcmRlckNvbGxhcHNlIiwibWFyZ2luQm90dG9tIiwiY291cnNlTGlzdFRoIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJjb3Vyc2VMaXN0VGQiLCJjb3Vyc2VMaXN0VHIiLCJjb3Vyc2VMaXN0VGhlYWRUckZpcnN0Q2hpbGQiLCJib3JkZXJXaWR0aCIsInRhYmxlQ29udGFpbmVyIiwiQ291cnNlTGlzdCIsIl9yZWYiLCJsaXN0Q291cnNlcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsImNvdXJzZUxpc3RUIiwibGVuZ3RoIiwidGV4dEZpcnN0Q2VsbCIsIm1hcCIsImNvdXJzZSIsImtleSIsIm5hbWUiLCJ0ZXh0U2Vjb25kQ2VsbCIsImNyZWRpdCIsImNvdXJzZUxpc3RUckhvdmVyIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=