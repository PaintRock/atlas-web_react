"use strict";
self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mapStateToProps: () => (/* binding */ mapStateToProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var _Header_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header.js */ "./src/Header/Header.js");
/* harmony import */ var _Footer_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/Footer.js */ "./src/Footer/Footer.js");
/* harmony import */ var _Login_Login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Login/Login.js */ "./src/Login/Login.js");
/* harmony import */ var _Notifications_Notifications_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Notifications/Notifications.js */ "./src/Notifications/Notifications.js");
/* harmony import */ var _CourseList_CourseList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CourseList/CourseList.js */ "./src/CourseList/CourseList.js");
/* harmony import */ var _BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BodySection/BodySectionWithMarginBottom */ "./src/BodySection/BodySectionWithMarginBottom.js");
/* harmony import */ var _BodySection_BodySection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BodySection/BodySection */ "./src/BodySection/BodySection.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppContext.js */ "./src/App/AppContext.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
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













var styles = aphrodite__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  app: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  body: {
    fontSize: "28px",
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
    _defineProperty(_this, "logIn", function (email, password) {
      _this.setState({
        user: {
          email: email,
          password: password,
          isLoggedIn: true
        }
      });
    });
    _defineProperty(_this, "logOut", function () {
      _this.setState({
        user: _AppContext_js__WEBPACK_IMPORTED_MODULE_10__.defaultUser
      });
    });
    _defineProperty(_this, "markNotificationAsRead", function (id) {
      _this.setState(function (prevState) {
        return {
          listNotifications: prevState.listNotifications.filter(function (notification) {
            return notification.id !== id;
          })
        };
      });
    });
    _this.state = {
      user: _AppContext_js__WEBPACK_IMPORTED_MODULE_10__.defaultUser,
      logOut: _AppContext_js__WEBPACK_IMPORTED_MODULE_10__.defaultLogOut,
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
      }],
      listNotifications: [{
        id: 1,
        type: 'default',
        value: 'New course available'
      }, {
        id: 2,
        type: 'urgent',
        value: 'New resume available'
      }, {
        id: 3,
        type: 'urgent',
        html: {
          __html: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__.getLatestNotification)()
        }
      }]
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleDisplayDrawer = _this.handleDisplayDrawer.bind(_this);
    _this.handleHideDrawer = _this.handleHideDrawer.bind(_this);
    _this.logIn = _this.logIn.bind(_this);
    _this.logOut = _this.logOut.bind(_this);
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
        this.logOut();
      }
    }
  }, {
    key: "handleDisplayDrawer",
    value: function handleDisplayDrawer() {
      this.setState({
        displayDrawer: true
      });
    }
  }, {
    key: "handleHideDrawer",
    value: function handleHideDrawer() {
      this.setState({
        displayDrawer: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        user = _this$state.user,
        listCourses = _this$state.listCourses,
        listNotifications = _this$state.listNotifications;
      var displayDrawer = this.props.displayDrawer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AppContext_js__WEBPACK_IMPORTED_MODULE_10__.AppContext.Provider, {
        value: {
          user: user,
          logOut: this.logOut
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notifications_Notifications_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        listNotifications: listNotifications,
        displayDrawer: displayDrawer,
        handleDisplayDrawer: this.handleDisplayDrawer,
        handleHideDrawer: this.handleHideDrawer,
        isLoggedIn: user.isLoggedIn,
        markNotificationAsRead: this.markNotificationAsRead
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.app)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.body)
      }, user.isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Course list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CourseList_CourseList_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        listCourses: listCourses
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Login to continue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_Login_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        logIn: this.logIn
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySection__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "News from the School"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Some random text"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.footer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
App.propTypes = {
  displayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)
};
App.defaultProps = {
  displayDrawer: false
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.isUserLoggedIn,
    displayDrawer: state.ui.isNotificationDrawerVisible
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_12__.connect)(mapStateToProps)(App));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1493fbbc9407a109d48")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNTEyOTEyYWYxYTFhOGI2NDY4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDSDtBQUNBO0FBQ0g7QUFDdUI7QUFDUjtBQUNnQztBQUNoQztBQUNFO0FBQ2tCO0FBQ3RDO0FBQ0c7QUFJdEMsSUFBTWdCLE1BQU0sR0FBR2YsaURBQVUsQ0FBQ2dCLE1BQU0sQ0FBQztFQUMvQkMsR0FBRyxFQUFFO0lBQ0hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCQyxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDSkMsUUFBUSxFQUFFLE1BQU07SUFDaEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOVCxTQUFTLEVBQUUsUUFBUTtJQUNuQkssUUFBUSxFQUFFLE1BQU07SUFDaEJLLFNBQVMsRUFBRSxRQUFRO0lBQ25CRixPQUFPLEVBQUUsTUFBTTtJQUNmRyxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsSUFBSSxFQUFFLENBQUM7SUFDUEMsS0FBSyxFQUFFLENBQUM7SUFDUkMsZUFBZSxFQUFFLE9BQU87SUFDeEJDLE1BQU0sRUFBRTtFQUNWO0FBQ0YsQ0FBQyxDQUFDO0FBQUMsSUFFR0MsR0FBRywwQkFBQUMsZ0JBQUE7RUFDUCxTQUFBRCxJQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosR0FBQTtJQUNqQkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLEdBQUEsR0FBTUUsS0FBSztJQUFFSSxlQUFBLENBQUFILEtBQUEsV0E2Q1AsVUFBQ0ksS0FBSyxF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LFlBQVksR0FBRztFQUNqQlgsYUFBYSxFQUFFO0FBQ2pCLENBQUM7QUFFTSxJQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlyQyxLQUFLO0VBQUEsT0FBTTtJQUN6Q04sVUFBVSxFQUFFTSxLQUFLLENBQUNzQyxFQUFFLENBQUNDLGNBQWM7SUFDbkNkLGFBQWEsRUFBRXpCLEtBQUssQ0FBQ3NDLEVBQUUsQ0FBQ0U7RUFDMUIsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZS9FLHFEQUFPLENBQUM0RSxlQUFlLENBQUMsQ0FBQ3RELEdBQUcsQ0FBQzs7Ozs7Ozs7VUN2SzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlci5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXIuanMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luLmpzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzJztcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gJy4uL0NvdXJzZUxpc3QvQ291cnNlTGlzdC5qcyc7XG5pbXBvcnQgQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tIGZyb20gJy4uL0JvZHlTZWN0aW9uL0JvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSc7XG5pbXBvcnQgQm9keVNlY3Rpb24gZnJvbSAnLi4vQm9keVNlY3Rpb24vQm9keVNlY3Rpb24nO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgQXBwQ29udGV4dCwgZGVmYXVsdFVzZXIsIGRlZmF1bHRMb2dPdXQgfSBmcm9tICcuL0FwcENvbnRleHQuanMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGFwcDoge1xuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgfSxcbiAgYm9keToge1xuICAgIGZvbnRTaXplOiBcIjI4cHhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXg6IDEsXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXG4gIH0sXG4gIGZvb3Rlcjoge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgIGJvcmRlclRvcDogXCI0cHggc29saWQgZGFya2JsdWVcIixcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHpJbmRleDogMSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogZGVmYXVsdFVzZXIsXG4gICAgICBsb2dPdXQ6IGRlZmF1bHRMb2dPdXQsXG4gICAgICBsaXN0Q291cnNlczogW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnRVM2JywgY3JlZGl0OiA2MCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnV2VicGFjaycsIGNyZWRpdDogMjAgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ1JlYWN0JywgY3JlZGl0OiA0MCB9LFxuICAgICAgXSxcbiAgICAgIGxpc3ROb3RpZmljYXRpb25zOiBbXG4gICAgICAgIHsgaWQ6IDEsIHR5cGU6ICdkZWZhdWx0JywgdmFsdWU6ICdOZXcgY291cnNlIGF2YWlsYWJsZScgfSxcbiAgICAgICAgeyBpZDogMiwgdHlwZTogJ3VyZ2VudCcsIHZhbHVlOiAnTmV3IHJlc3VtZSBhdmFpbGFibGUnIH0sXG4gICAgICAgIHsgaWQ6IDMsIHR5cGU6ICd1cmdlbnQnLCBodG1sOiB7IF9faHRtbDogZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uKCkgfSB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIFxuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRGlzcGxheURyYXdlciA9IHRoaXMuaGFuZGxlRGlzcGxheURyYXdlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSGlkZURyYXdlciA9IHRoaXMuaGFuZGxlSGlkZURyYXdlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nSW4gPSB0aGlzLmxvZ0luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5rZXkgPT09ICdoJykge1xuICAgICAgYWxlcnQoJ0xvZ2dpbmcgeW91IG91dCcpO1xuICAgICAgdGhpcy5sb2dPdXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEaXNwbGF5RHJhd2VyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5RHJhd2VyOiB0cnVlIH0pO1xuICB9XG5cbiAgaGFuZGxlSGlkZURyYXdlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheURyYXdlcjogZmFsc2UgfSk7XG4gIH1cbiAgbG9nSW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgbG9nT3V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjogZGVmYXVsdFVzZXIsXG4gICAgfSk7XG4gIH07XG5cbiAgbWFya05vdGlmaWNhdGlvbkFzUmVhZCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIGxpc3ROb3RpZmljYXRpb25zOiBwcmV2U3RhdGUubGlzdE5vdGlmaWNhdGlvbnMuZmlsdGVyKFxuICAgICAgICAobm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaWQgIT09IGlkXG4gICAgICApLFxuICAgIH0pKTtcbiAgfTtcbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlciwgbGlzdENvdXJzZXMsIGxpc3ROb3RpZmljYXRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGlzcGxheURyYXdlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dPdXQ6IHRoaXMubG9nT3V0IH19PlxuICAgICAgICA8Tm90aWZpY2F0aW9uXG4gICAgICAgICAgbGlzdE5vdGlmaWNhdGlvbnM9e2xpc3ROb3RpZmljYXRpb25zfVxuICAgICAgICAgIGRpc3BsYXlEcmF3ZXI9e2Rpc3BsYXlEcmF3ZXJ9XG4gICAgICAgICAgaGFuZGxlRGlzcGxheURyYXdlcj17dGhpcy5oYW5kbGVEaXNwbGF5RHJhd2VyfVxuICAgICAgICAgIGhhbmRsZUhpZGVEcmF3ZXI9e3RoaXMuaGFuZGxlSGlkZURyYXdlcn1cbiAgICAgICAgICBpc0xvZ2dlZEluPXt1c2VyLmlzTG9nZ2VkSW59XG4gICAgICAgICAgbWFya05vdGlmaWNhdGlvbkFzUmVhZD17dGhpcy5tYXJrTm90aWZpY2F0aW9uQXNSZWFkfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5hcHApfT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmJvZHkpfT5cbiAgICAgICAgICAgIHt1c2VyLmlzTG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgIDxCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20gdGl0bGU9XCJDb3Vyc2UgbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxDb3Vyc2VMaXN0IGxpc3RDb3Vyc2VzPXtsaXN0Q291cnNlc30gLz5cbiAgICAgICAgICAgICAgPC9Cb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Qm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tIHRpdGxlPVwiTG9naW4gdG8gY29udGludWVcIj5cbiAgICAgICAgICAgICAgICA8TG9naW4gbG9nSW49e3RoaXMubG9nSW59IC8+XG4gICAgICAgICAgICAgIDwvQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCb2R5U2VjdGlvbiB0aXRsZT1cIk5ld3MgZnJvbSB0aGUgU2Nob29sXCI+XG4gICAgICAgICAgICAgIDxwPlNvbWUgcmFuZG9tIHRleHQ8L3A+XG4gICAgICAgICAgICA8L0JvZHlTZWN0aW9uPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb290ZXIpfT5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuQXBwLnByb3BUeXBlcyA9IHtcbiAgZGlzcGxheURyYXdlcjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5BcHAuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5RHJhd2VyOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGlzTG9nZ2VkSW46IHN0YXRlLnVpLmlzVXNlckxvZ2dlZEluLFxuICBkaXNwbGF5RHJhd2VyOiBzdGF0ZS51aS5pc05vdGlmaWNhdGlvbkRyYXdlclZpc2libGUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMTQ5M2ZiYmM5NDA3YTEwOWQ0OFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlU2hlZXQiLCJjc3MiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2dpbiIsIk5vdGlmaWNhdGlvbiIsIkNvdXJzZUxpc3QiLCJCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20iLCJCb2R5U2VjdGlvbiIsImdldExhdGVzdE5vdGlmaWNhdGlvbiIsIkFwcENvbnRleHQiLCJkZWZhdWx0VXNlciIsImRlZmF1bHRMb2dPdXQiLCJQcm9wVHlwZXMiLCJjb25uZWN0Iiwic3R5bGVzIiwiY3JlYXRlIiwiYXBwIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJib2R5IiwiZm9udFNpemUiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInBhZGRpbmciLCJmb290ZXIiLCJmb250U3R5bGUiLCJib3JkZXJUb3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIkFwcCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9kZWZpbmVQcm9wZXJ0eSIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRTdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwiaWQiLCJwcmV2U3RhdGUiLCJsaXN0Tm90aWZpY2F0aW9ucyIsImZpbHRlciIsIm5vdGlmaWNhdGlvbiIsInN0YXRlIiwibG9nT3V0IiwibGlzdENvdXJzZXMiLCJuYW1lIiwiY3JlZGl0IiwidHlwZSIsInZhbHVlIiwiaHRtbCIsIl9faHRtbCIsImhhbmRsZUtleURvd24iLCJiaW5kIiwiaGFuZGxlRGlzcGxheURyYXdlciIsImhhbmRsZUhpZGVEcmF3ZXIiLCJsb2dJbiIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdHJsS2V5IiwiYWxlcnQiLCJkaXNwbGF5RHJhd2VyIiwicmVuZGVyIiwiX3RoaXMkc3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwidWkiLCJpc1VzZXJMb2dnZWRJbiIsImlzTm90aWZpY2F0aW9uRHJhd2VyVmlzaWJsZSJdLCJzb3VyY2VSb290IjoiIn0=