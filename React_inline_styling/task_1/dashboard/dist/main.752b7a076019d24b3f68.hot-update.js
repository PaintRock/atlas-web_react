"use strict";
self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var _Header_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header.js */ "./src/Header/Header.js");
/* harmony import */ var _Footer_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/Footer.js */ "./src/Footer/Footer.js");
/* harmony import */ var _Login_Login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Login/Login.js */ "./src/Login/Login.js");
/* harmony import */ var _Notifications_Notifications_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Notifications/Notifications.js */ "./src/Notifications/Notifications.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CourseList_CourseList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CourseList/CourseList.js */ "./src/CourseList/CourseList.js");
/* harmony import */ var _BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BodySection/BodySectionWithMarginBottom */ "./src/BodySection/BodySectionWithMarginBottom.js");
/* harmony import */ var _BodySection_BodySection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BodySection/BodySection */ "./src/BodySection/BodySection.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// import './App.css';









var styles = aphrodite__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  app: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  body: {
    fontSize: "24px",
    alignItems: "center",
    flex: 1,
    padding: "20px"
  },
  footer: {
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "italic",
    padding: "20px",
    borderTop: "4px solid darkblue",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1
  }
});
var App = /*#__PURE__*/function (_React$Component) {
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _callSuper(this, App, [props]);
    _this.state = {
      listCourses: [{
        id: 1,
        name: 'ES6',
        credit: 60
      }, {
        id: 2,
        name: 'Webpack',
        credit: 20
      }, {
        id: 3,
        name: 'React',
        credit: 40
      }]
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }
  _inherits(App, _React$Component);
  return _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var isLoggedIn = this.props.isLoggedIn;
      var listCourses = this.state.listCourses;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notifications_Notifications_js__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.app)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.body)
      }, isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Course list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CourseList_CourseList_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        listCourses: listCourses
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Log in to continue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_Login_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySection__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "News from the School"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Some random text"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.footer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
_defineProperty(App, "defaultProps", {
  isLoggedIn: true,
  logOut: function logOut() {}
});
_defineProperty(App, "propTypes", {
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
  logOut: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("57a1f133baa3c0a496b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NTJiN2EwNzYwMTlkMjRiM2Y2OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMxQjtBQUM0QztBQUNIO0FBQ0E7QUFDSDtBQUN1QjtBQUMxQjtBQUNrQjtBQUNnQztBQUNoQztBQUlyRCxJQUFNVyxNQUFNLEdBQUdWLGlEQUFVLENBQUNXLE1BQU0sQ0FBQztFQUMvQkMsR0FBRyxFQUFFO0lBQ0hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCQyxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDSkMsUUFBUSxFQUFFLE1BQU07SUFDaEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOVCxTQUFTLEVBQUUsUUFBUTtJQUNuQkssUUFBUSxFQUFFLE1BQU07SUFDaEJLLFNBQVMsRUFBRSxRQUFRO0lBQ25CRixPQUFPLEVBQUUsTUFBTTtJQUNmRyxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsSUFBSSxFQUFFLENBQUM7SUFDUEMsS0FBSyxFQUFFLENBQUM7SUFDUkMsZUFBZSxFQUFFLE9BQU87SUFDeEJDLE1BQU0sRUFBRTtFQUNWO0FBQ0YsQ0FBQyxDQUFDO0FBQUMsSUFFR0MsR0FBRywwQkFBQUMsZ0JBQUE7RUFXUCxTQUFBRCxJQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosR0FBQTtJQUNqQkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLEdBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNYQyxXQUFXLEVBQUUsQ0FDWDtRQUFFQyxF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O0VBQzFCa0QsTUFBTSxFQUFFbEQsd0RBQWM0RDtBQUN4QixDQUFDO0FBNkRILGlFQUFlbkMsR0FBRzs7Ozs7Ozs7VUNoSGxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlci5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXIuanMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luLmpzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ291cnNlTGlzdCBmcm9tICcuLi9Db3Vyc2VMaXN0L0NvdXJzZUxpc3QuanMnO1xuaW1wb3J0IEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSBmcm9tICcuLi9Cb2R5U2VjdGlvbi9Cb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20nO1xuaW1wb3J0IEJvZHlTZWN0aW9uIGZyb20gJy4uL0JvZHlTZWN0aW9uL0JvZHlTZWN0aW9uJztcblxuXG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgYXBwOiB7XG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICBib2R5OiB7XG4gICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgZmxleDogMSxcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgYm9yZGVyVG9wOiBcIjRweCBzb2xpZCBkYXJrYmx1ZVwiLFxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgekluZGV4OiAxLFxuICB9LFxufSk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICBsb2dPdXQ6ICgpID0+IHt9LFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9nT3V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdENvdXJzZXM6IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ0VTNicsIGNyZWRpdDogNjAgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogJ1dlYnBhY2snLCBjcmVkaXQ6IDIwIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdSZWFjdCcsIGNyZWRpdDogNDAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQua2V5ID09PSAnaCcpIHtcbiAgICAgIGFsZXJ0KCdMb2dnaW5nIHlvdSBvdXQnKTtcbiAgICAgIHRoaXMucHJvcHMubG9nT3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxpc3RDb3Vyc2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxOb3RpZmljYXRpb24gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuYXBwKX0+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5ib2R5KX0+XG4gICAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgPEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSB0aXRsZT1cIkNvdXJzZSBsaXN0XCI+XG4gICAgICAgICAgICAgICAgPENvdXJzZUxpc3QgbGlzdENvdXJzZXM9e2xpc3RDb3Vyc2VzfSAvPlxuICAgICAgICAgICAgICA8L0JvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20gdGl0bGU9XCJMb2cgaW4gdG8gY29udGludWVcIj5cbiAgICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgICAgPC9Cb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJvZHlTZWN0aW9uIHRpdGxlPVwiTmV3cyBmcm9tIHRoZSBTY2hvb2xcIj5cbiAgICAgICAgICAgICAgPHA+U29tZSByYW5kb20gdGV4dDwvcD5cbiAgICAgICAgICAgIDwvQm9keVNlY3Rpb24+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvb3Rlcil9PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU3YTFmMTMzYmFhM2MwYTQ5NmI2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3R5bGVTaGVldCIsImNzcyIsIkhlYWRlciIsIkZvb3RlciIsIkxvZ2luIiwiTm90aWZpY2F0aW9uIiwiUHJvcFR5cGVzIiwiQ291cnNlTGlzdCIsIkJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSIsIkJvZHlTZWN0aW9uIiwic3R5bGVzIiwiY3JlYXRlIiwiYXBwIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJib2R5IiwiZm9udFNpemUiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInBhZGRpbmciLCJmb290ZXIiLCJmb250U3R5bGUiLCJib3JkZXJUb3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIkFwcCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsInN0YXRlIiwibGlzdENvdXJzZXMiLCJpZCIsIm5hbWUiLCJjcmVkaXQiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN0cmxLZXkiLCJhbGVydCIsImxvZ091dCIsInJlbmRlciIsImlzTG9nZ2VkSW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIl9kZWZpbmVQcm9wZXJ0eSIsImJvb2wiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==