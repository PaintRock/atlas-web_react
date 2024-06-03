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
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(styles.courseList)
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
/******/ 	__webpack_require__.h = () => ("c9303430c5d9cf11bc6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NjE5MDEyZmY2NGVhYjM0MWNmMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDUztBQUNKO0FBQ3hDO0FBQzRDO0FBRTVDLElBQU1NLE1BQU0sR0FBR0YsaURBQVUsQ0FBQ0csTUFBTSxDQUFDO0VBQy9CQyxVQUFVLEVBQUU7SUFDVkMsS0FBSyxFQUFFLE1BQU07SUFDYkMsY0FBYyxFQUFFLFVBQVU7SUFDMUJDLFlBQVksRUFBRTtFQUNoQixDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBQyxZQUFZLEVBQUU7SUFDWkMsT0FBTyxFQUFFLEtBQUs7SUFDZEMsU0FBUyxFQUFFLE1BQU07SUFDakJDLE1BQU0sRUFBRSxpQkFBaUI7SUFDekJDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCQyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBQ0RDLFlBQVksRUFBRTtJQUNaTCxPQUFPLEVBQUUsS0FBSztJQUNkQyxTQUFTLEVBQUUsTUFBTTtJQUNqQkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNESSxZQUFZLEVBQUU7SUFDWixRQUFRLEVBQUU7TUFDUkgsZUFBZSxFQUFFO0lBQ25CO0VBQ0YsQ0FBQztFQUNESSwyQkFBMkIsRUFBRTtJQUMzQk4sU0FBUyxFQUFFLFFBQVE7SUFDbkJPLFdBQVcsRUFBRTtFQUNmLENBQUM7RUFDREMsY0FBYyxFQUFFO0lBQ2RYLFlBQVksRUFBRTtFQUNoQjtBQUNGLENBQUMsQ0FBQztBQUNGLElBQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQy9CLG9CQUNFekIsMERBQUE7SUFBSzJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ2dCLGNBQWM7RUFBRSxnQkFDekN0QiwwREFBQTtJQUFPNEIsRUFBRSxFQUFDLFlBQVk7SUFBQ0QsU0FBUyxFQUFFdEIsOENBQUcsQ0FBQ0MsTUFBTSxDQUFDRSxVQUFVO0VBQUUsZ0JBQ3ZEUiwwREFBQSw2QkFDRUEsMERBQUE7SUFBSTJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ2MsMkJBQTJCO0VBQUUsZ0JBQ3JEcEIsMERBQUE7SUFBSTJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ0UsVUFBVTtFQUFFLEdBQUMsbUJBQXFCLENBQzFELENBQUMsZUFDTFIsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUkyQixTQUFTLEVBQUV0Qiw4Q0FBRyxDQUFDQyxNQUFNLENBQUNNLFlBQVk7RUFBRSxHQUFDLGFBQWUsQ0FBQyxlQUN6RFosMERBQUE7SUFBSTJCLFNBQVMsRUFBRXRCLDhDQUFHLENBQUNDLE1BQU0sQ0FBQ00sWUFBWTtFQUFFLEdBQUMsUUFBVSxDQUNqRCxDQUNDLENBQUMsZUFDUlosMERBQUEsZ0JBQ0d5QixXQUFXLENBQUNJLE1BQU0sS0FBSyxDQUFDLGlCQUN2QjdCLDBEQUFBLENBQUNFLHNEQUFhO0lBQUM0QixhQUFhLEVBQUM7RUFBeUIsQ0FBRSxDQUN6RCxFQUNBTCxXQUFXLENBQUNNLEdBQUcsQ0FBQyxVQUFDQyxNQUFNO0lBQUEsb0JBQ3RCaEMsMERBQUEsQ0FBQ0Usc0RBQWE7TUFDWitCLEdBQUcsRUFBRUQsTUFBTSxDQUFDSixFQUFHO01BQ2ZFLGFBQWEsRUFBRUUsTUFBTSxDQUFDRSxJQUFLO01BQzNCQyxjQUFjLEVBQUVILE1BQU0sQ0FBQ0ksTUFBTztNQUM5QlQsU0FBUyxFQUFFdEIsOENBQUcsQ0FBQ0MsTUFBTSxDQUFDK0IsaUJBQWlCO0lBQUUsQ0FDMUMsQ0FBQztFQUFBLENBQ0gsQ0FDSSxDQUNGLENBQ0osQ0FBQztBQUVWLENBQUM7QUFFRGQsVUFBVSxDQUFDZSxTQUFTLEdBQUc7RUFDckJiLFdBQVcsRUFBRXhCLHlEQUFpQixDQUFDRSxvREFBVztBQUM1QyxDQUFDO0FBRURvQixVQUFVLENBQUNpQixZQUFZLEdBQUc7RUFDeEJmLFdBQVcsRUFBRTtBQUNmLENBQUM7QUFFRCxpRUFBZUYsVUFBVTs7Ozs7Ozs7VUNyRnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0NvdXJzZUxpc3QvQ291cnNlTGlzdC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvdXJzZUxpc3RSb3cgZnJvbSAnLi9Db3Vyc2VMaXN0Um93JztcbmltcG9ydCBDb3Vyc2VTaGFwZSBmcm9tICcuL0NvdXJzZVNoYXBlJztcbi8vIGltcG9ydCAnLi9Db3Vyc2VMaXN0LmNzcyc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvdXJzZUxpc3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLFxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICB9LFxuICAvLyBjb3Vyc2VMaXN0VGh2OiB7XG4gIC8vICAgcGFkZGluZzogJzhweCcsXG4gIC8vICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgLy8gICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAvLyAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgLy8gICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIC8vICAgYm9yZGVyV2lkdGg6ICcxMDAlJywgXG4gIC8vIH0sXG4gIGNvdXJzZUxpc3RUaDoge1xuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgY291cnNlTGlzdFRkOiB7XG4gICAgcGFkZGluZzogJzhweCcsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgfSxcbiAgY291cnNlTGlzdFRyOiB7XG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLFxuICAgIH0sXG4gIH0sXG4gIGNvdXJzZUxpc3RUaGVhZFRyRmlyc3RDaGlsZDoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYm9yZGVyV2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgdGFibGVDb250YWluZXI6IHtcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgfSxcbn0pO1xuY29uc3QgQ291cnNlTGlzdCA9ICh7IGxpc3RDb3Vyc2VzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy50YWJsZUNvbnRhaW5lcil9PlxuICAgICAgPHRhYmxlIGlkPVwiQ291cnNlTGlzdFwiIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5jb3Vyc2VMaXN0KX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmNvdXJzZUxpc3RUaGVhZFRyRmlyc3RDaGlsZCl9PlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5jb3Vyc2VMaXN0KX0+QXZhaWxhYmxlIENvdXJzZXM8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5jb3Vyc2VMaXN0VGgpfT5Db3Vyc2UgTmFtZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmNvdXJzZUxpc3RUaCl9PkNyZWRpdDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtsaXN0Q291cnNlcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgPENvdXJzZUxpc3RSb3cgdGV4dEZpcnN0Q2VsbD1cIk5vIGNvdXJzZSBhdmFpbGFibGUgeWV0XCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtsaXN0Q291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKFxuICAgICAgICAgICAgPENvdXJzZUxpc3RSb3dcbiAgICAgICAgICAgICAga2V5PXtjb3Vyc2UuaWR9XG4gICAgICAgICAgICAgIHRleHRGaXJzdENlbGw9e2NvdXJzZS5uYW1lfVxuICAgICAgICAgICAgICB0ZXh0U2Vjb25kQ2VsbD17Y291cnNlLmNyZWRpdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmNvdXJzZUxpc3RUckhvdmVyKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ291cnNlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGxpc3RDb3Vyc2VzOiBQcm9wVHlwZXMuYXJyYXlPZihDb3Vyc2VTaGFwZSksXG59O1xuXG5Db3Vyc2VMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdENvdXJzZXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlTGlzdDtcblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOTMwMzQzMGM1ZDljZjExYmM2Y1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNvdXJzZUxpc3RSb3ciLCJDb3Vyc2VTaGFwZSIsIlN0eWxlU2hlZXQiLCJjc3MiLCJzdHlsZXMiLCJjcmVhdGUiLCJjb3Vyc2VMaXN0Iiwid2lkdGgiLCJib3JkZXJDb2xsYXBzZSIsIm1hcmdpbkJvdHRvbSIsImNvdXJzZUxpc3RUaCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiY291cnNlTGlzdFRkIiwiY291cnNlTGlzdFRyIiwiY291cnNlTGlzdFRoZWFkVHJGaXJzdENoaWxkIiwiYm9yZGVyV2lkdGgiLCJ0YWJsZUNvbnRhaW5lciIsIkNvdXJzZUxpc3QiLCJfcmVmIiwibGlzdENvdXJzZXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJsZW5ndGgiLCJ0ZXh0Rmlyc3RDZWxsIiwibWFwIiwiY291cnNlIiwia2V5IiwibmFtZSIsInRleHRTZWNvbmRDZWxsIiwiY3JlZGl0IiwiY291cnNlTGlzdFRySG92ZXIiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==