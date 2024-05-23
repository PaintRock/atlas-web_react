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



var rowStyle = {
  backgroundColor: '#f5f5f5ab'
};
var headerStyle = {
  backgroundColor: '#deb5b545'
};
var rowChecked = {
  backgroundColor: '#e6e4e4'
};
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
  var rowStyles = isHeader ? headerStyle : isChecked ? rowChecked : rowStyle;
  var renderCheckbox = function renderCheckbox() {
    if (!isHeader) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: isChecked,
        onChange: handleCheckboxChange
      }));
    }
    return null;
  };
  if (isHeader) {
    if (textSecondCell === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        style: rowStyles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        colSpan: 2
      }, textFirstCell));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        style: rowStyles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, textFirstCell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, textSecondCell));
    }
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      style: rowStyles
    }, renderCheckbox(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, textFirstCell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, textSecondCell));
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
/******/ 	__webpack_require__.h = () => ("ea2da893b623ca37b11e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNTlhYzc2YzU3OTExOGNmZTU3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNMO0FBQ1M7QUFFNUMsSUFBTUssUUFBUSxHQUFHO0VBQUVDLGVBQWUsRUFBRTtBQUFZLENBQUM7QUFDakQsSUFBTUMsV0FBVyxHQUFHO0VBQUVELGVBQWUsRUFBRTtBQUFZLENBQUM7QUFDcEQsSUFBTUUsVUFBVSxHQUFHO0VBQUVGLGVBQWUsRUFBRTtBQUFVLENBQUM7QUFFakQsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQW9EO0VBQUEsSUFBOUNDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLGFBQWEsR0FBQUYsSUFBQSxDQUFiRSxhQUFhO0lBQUVDLGNBQWMsR0FBQUgsSUFBQSxDQUFkRyxjQUFjO0VBQzlELElBQUFDLFNBQUEsR0FBa0NiLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFjLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTFDRyxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBRTlCLElBQU1JLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUEsRUFBUztJQUNqQ0QsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztFQUMxQixDQUFDO0VBRUQsSUFBTUcsU0FBUyxHQUFHVCxRQUFRLEdBQUdKLFdBQVcsR0FBR1UsU0FBUyxHQUFHVCxVQUFVLEdBQUdILFFBQVE7RUFFNUUsSUFBTWdCLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBQzNCLElBQUksQ0FBQ1YsUUFBUSxFQUFFO01BQ2Isb0JBQ0VYLDBEQUFBLDBCQUNFQSwwREFBQTtRQUNFdUIsSUFBSSxFQUFDLFVBQVU7UUFDZkMsT0FBTyxFQUFFUCxTQUFVO1FBQ25CUSxRQUFRLEVBQUVOO01BQXFCLENBQ2hDLENBQ0MsQ0FBQztJQUVUO0lBQ0EsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVELElBQUlSLFFBQVEsRUFBRTtJQUNaLElBQUlFLGNBQWMsS0FBSyxJQUFJLEVBQUU7TUFDM0Isb0JBQ0ViLDBEQUFBO1FBQUkwQixLQUFLLEVBQUVOO01BQVUsZ0JBQ25CcEIsMERBQUE7UUFBSTJCLE9BQU8sRUFBRTtNQUFFLEdBQUVmLGFBQWtCLENBQ2pDLENBQUM7SUFFVCxDQUFDLE1BQU07TUFDTCxvQkFDRVosMERBQUE7UUFBSTBCLEtBQUssRUFBRU47TUFBVSxnQkFDbkJwQiwwREFBQSxhQUFLWSxhQUFrQixDQUFDLGVBQ3hCWiwwREFBQSxhQUFLYSxjQUFtQixDQUN0QixDQUFDO0lBRVQ7RUFDRixDQUFDLE1BQU07SUFDTCxvQkFDRWIsMERBQUE7TUFBSTBCLEtBQUssRUFBRU47SUFBVSxHQUNsQkMsY0FBYyxDQUFDLENBQUMsZUFDakJyQiwwREFBQSxhQUFLWSxhQUFrQixDQUFDLGVBQ3hCWiwwREFBQSxhQUFLYSxjQUFtQixDQUN0QixDQUFDO0VBRVQ7QUFDRixDQUFDO0FBRURKLGFBQWEsQ0FBQ21CLFNBQVMsR0FBRztFQUN4QmpCLFFBQVEsRUFBRVQsd0RBQWM7RUFDeEJVLGFBQWEsRUFBRVYsMERBQWdCLENBQUM2QixVQUFVO0VBQzFDbEIsY0FBYyxFQUFFWCwyREFBbUIsQ0FBQyxDQUFDQSwwREFBZ0IsRUFBRUEsMERBQWdCLENBQUM7QUFDMUUsQ0FBQztBQUVETyxhQUFhLENBQUN5QixZQUFZLEdBQUc7RUFDM0J2QixRQUFRLEVBQUUsS0FBSztFQUNmRSxjQUFjLEVBQUU7QUFDbEIsQ0FBQztBQUVELGlFQUFlSixhQUFhOzs7Ozs7OztVQ3JFNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQ291cnNlTGlzdC9Db3Vyc2VMaXN0Um93LmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5cbmNvbnN0IHJvd1N0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1YWInIH07XG5jb25zdCBoZWFkZXJTdHlsZSA9IHsgYmFja2dyb3VuZENvbG9yOiAnI2RlYjViNTQ1JyB9O1xuY29uc3Qgcm93Q2hlY2tlZCA9IHsgYmFja2dyb3VuZENvbG9yOiAnI2U2ZTRlNCcgfTtcblxuY29uc3QgQ291cnNlTGlzdFJvdyA9ICh7IGlzSGVhZGVyLCB0ZXh0Rmlyc3RDZWxsLCB0ZXh0U2Vjb25kQ2VsbCB9KSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IHJvd1N0eWxlcyA9IGlzSGVhZGVyID8gaGVhZGVyU3R5bGUgOiBpc0NoZWNrZWQgPyByb3dDaGVja2VkIDogcm93U3R5bGU7XG5cbiAgY29uc3QgcmVuZGVyQ2hlY2tib3ggPSAoKSA9PiB7XG4gICAgaWYgKCFpc0hlYWRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgaWYgKGlzSGVhZGVyKSB7XG4gICAgaWYgKHRleHRTZWNvbmRDZWxsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIgc3R5bGU9e3Jvd1N0eWxlc30+XG4gICAgICAgICAgPHRoIGNvbFNwYW49ezJ9Pnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIgc3R5bGU9e3Jvd1N0eWxlc30+XG4gICAgICAgICAgPHRoPnt0ZXh0Rmlyc3RDZWxsfTwvdGg+XG4gICAgICAgICAgPHRoPnt0ZXh0U2Vjb25kQ2VsbH08L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBzdHlsZT17cm93U3R5bGVzfT5cbiAgICAgICAge3JlbmRlckNoZWNrYm94KCl9XG4gICAgICAgIDx0ZD57dGV4dEZpcnN0Q2VsbH08L3RkPlxuICAgICAgICA8dGQ+e3RleHRTZWNvbmRDZWxsfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn07XG5cbkNvdXJzZUxpc3RSb3cucHJvcFR5cGVzID0ge1xuICBpc0hlYWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRleHRGaXJzdENlbGw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGV4dFNlY29uZENlbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbkNvdXJzZUxpc3RSb3cuZGVmYXVsdFByb3BzID0ge1xuICBpc0hlYWRlcjogZmFsc2UsXG4gIHRleHRTZWNvbmRDZWxsOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlTGlzdFJvdztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVhMmRhODkzYjYyM2NhMzdiMTFlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJTdHlsZVNoZWV0IiwiY3NzIiwicm93U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWFkZXJTdHlsZSIsInJvd0NoZWNrZWQiLCJDb3Vyc2VMaXN0Um93IiwiX3JlZiIsImlzSGVhZGVyIiwidGV4dEZpcnN0Q2VsbCIsInRleHRTZWNvbmRDZWxsIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJyb3dTdHlsZXMiLCJyZW5kZXJDaGVja2JveCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic3R5bGUiLCJjb2xTcGFuIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9