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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
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
      displayDrawer: false,
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
        listNotifications = _this$state.listNotifications,
        displayDrawer = _this$state.displayDrawer;
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
var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.isUserLoggedIn
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_11__.connect)(mapStateToProps)(App));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1568498a198704685379")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NTE0ZDIxNzRhYWQxY2ZjN2FlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ0g7QUFDQTtBQUNIO0FBQ3VCO0FBQ1I7QUFDZ0M7QUFDaEM7QUFDRTtBQUNrQjtBQUN0QztBQUNHO0FBSXRDLElBQU1nQixNQUFNLEdBQUdmLGlEQUFVLENBQUNnQixNQUFNLENBQUM7RUFDL0JDLEdBQUcsRUFBRTtJQUNIQyxTQUFTLEVBQUUsTUFBTTtJQUNqQkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLFFBQVE7SUFDdkJDLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDREMsSUFBSSxFQUFFO0lBQ0pDLFFBQVEsRUFBRSxNQUFNO0lBQ2hCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsSUFBSSxFQUFFLENBQUM7SUFDUEMsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDTlQsU0FBUyxFQUFFLFFBQVE7SUFDbkJLLFFBQVEsRUFBRSxNQUFNO0lBQ2hCSyxTQUFTLEVBQUUsUUFBUTtJQUNuQkYsT0FBTyxFQUFFLE1BQU07SUFDZkcsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQkMsUUFBUSxFQUFFLE9BQU87SUFDakJDLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLElBQUksRUFBRSxDQUFDO0lBQ1BDLEtBQUssRUFBRSxDQUFDO0lBQ1JDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCQyxNQUFNLEVBQUU7RUFDVjtBQUNGLENBQUMsQ0FBQztBQUFDLElBRUdDLEdBQUcsMEJBQUFDLGdCQUFBO0VBQ1AsU0FBQUQsSUFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLEdBQUE7SUFDakJHLEtBQUEsR0FBQUUsVUFBQSxPQUFBTCxHQUFBLEdBQU1FLEtBQUs7SUFBRUksZUFBQSxDQUFBSCxLQUFBLFdBK0NQLFVBQUNJLEtBQUssRUFB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bUMsRUFBRSxDQUFDQztFQUN2QixDQUFDO0FBQUEsQ0FBQztBQUNGLGlFQUFlM0UscURBQU8sQ0FBQ3lFLGVBQWUsQ0FBQyxDQUFDbkQsR0FBRyxDQUFDOzs7Ozs7OztVQzlKNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlci5qcyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4vTG9naW4uanMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMuanMnO1xuaW1wb3J0IENvdXJzZUxpc3QgZnJvbSAnLi4vQ291cnNlTGlzdC9Db3Vyc2VMaXN0LmpzJztcbmltcG9ydCBCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20gZnJvbSAnLi4vQm9keVNlY3Rpb24vQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tJztcbmltcG9ydCBCb2R5U2VjdGlvbiBmcm9tICcuLi9Cb2R5U2VjdGlvbi9Cb2R5U2VjdGlvbic7XG5pbXBvcnQgeyBnZXRMYXRlc3ROb3RpZmljYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBBcHBDb250ZXh0LCBkZWZhdWx0VXNlciwgZGVmYXVsdExvZ091dCB9IGZyb20gJy4vQXBwQ29udGV4dC5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgYXBwOiB7XG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICBib2R5OiB7XG4gICAgZm9udFNpemU6IFwiMjhweFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgZmxleDogMSxcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgYm9yZGVyVG9wOiBcIjRweCBzb2xpZCBkYXJrYmx1ZVwiLFxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgekluZGV4OiAxLFxuICB9LFxufSk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyOiBkZWZhdWx0VXNlcixcbiAgICAgIGxvZ091dDogZGVmYXVsdExvZ091dCxcbiAgICAgIGRpc3BsYXlEcmF3ZXI6IGZhbHNlLFxuXG4gICAgICBsaXN0Q291cnNlczogW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnRVM2JywgY3JlZGl0OiA2MCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnV2VicGFjaycsIGNyZWRpdDogMjAgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ1JlYWN0JywgY3JlZGl0OiA0MCB9LFxuICAgICAgXSxcbiAgICAgIGxpc3ROb3RpZmljYXRpb25zOiBbXG4gICAgICAgIHsgaWQ6IDEsIHR5cGU6ICdkZWZhdWx0JywgdmFsdWU6ICdOZXcgY291cnNlIGF2YWlsYWJsZScgfSxcbiAgICAgICAgeyBpZDogMiwgdHlwZTogJ3VyZ2VudCcsIHZhbHVlOiAnTmV3IHJlc3VtZSBhdmFpbGFibGUnIH0sXG4gICAgICAgIHsgaWQ6IDMsIHR5cGU6ICd1cmdlbnQnLCBodG1sOiB7IF9faHRtbDogZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uKCkgfSB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIFxuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRGlzcGxheURyYXdlciA9IHRoaXMuaGFuZGxlRGlzcGxheURyYXdlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSGlkZURyYXdlciA9IHRoaXMuaGFuZGxlSGlkZURyYXdlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nSW4gPSB0aGlzLmxvZ0luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5rZXkgPT09ICdoJykge1xuICAgICAgYWxlcnQoJ0xvZ2dpbmcgeW91IG91dCcpO1xuICAgICAgdGhpcy5sb2dPdXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEaXNwbGF5RHJhd2VyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5RHJhd2VyOiB0cnVlIH0pO1xuICB9XG5cbiAgaGFuZGxlSGlkZURyYXdlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheURyYXdlcjogZmFsc2UgfSk7XG4gIH1cbiAgbG9nSW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgbG9nT3V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjogZGVmYXVsdFVzZXIsXG4gICAgfSk7XG4gIH07XG5cbiAgbWFya05vdGlmaWNhdGlvbkFzUmVhZCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIGxpc3ROb3RpZmljYXRpb25zOiBwcmV2U3RhdGUubGlzdE5vdGlmaWNhdGlvbnMuZmlsdGVyKFxuICAgICAgICAobm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaWQgIT09IGlkXG4gICAgICApLFxuICAgIH0pKTtcbiAgfTtcbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlciwgbGlzdENvdXJzZXMsIGxpc3ROb3RpZmljYXRpb25zLCBkaXNwbGF5RHJhd2VyIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ091dDogdGhpcy5sb2dPdXQgfX0+XG4gICAgICAgIDxOb3RpZmljYXRpb25cbiAgICAgICAgICBsaXN0Tm90aWZpY2F0aW9ucz17bGlzdE5vdGlmaWNhdGlvbnN9XG4gICAgICAgICAgZGlzcGxheURyYXdlcj17ZGlzcGxheURyYXdlcn1cbiAgICAgICAgICBoYW5kbGVEaXNwbGF5RHJhd2VyPXt0aGlzLmhhbmRsZURpc3BsYXlEcmF3ZXJ9XG4gICAgICAgICAgaGFuZGxlSGlkZURyYXdlcj17dGhpcy5oYW5kbGVIaWRlRHJhd2VyfVxuICAgICAgICAgIGlzTG9nZ2VkSW49e3VzZXIuaXNMb2dnZWRJbn1cbiAgICAgICAgICBtYXJrTm90aWZpY2F0aW9uQXNSZWFkPXt0aGlzLm1hcmtOb3RpZmljYXRpb25Bc1JlYWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmFwcCl9PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuYm9keSl9PlxuICAgICAgICAgICAge3VzZXIuaXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgPEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSB0aXRsZT1cIkNvdXJzZSBsaXN0XCI+XG4gICAgICAgICAgICAgICAgPENvdXJzZUxpc3QgbGlzdENvdXJzZXM9e2xpc3RDb3Vyc2VzfSAvPlxuICAgICAgICAgICAgICA8L0JvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20gdGl0bGU9XCJMb2dpbiB0byBjb250aW51ZVwiPlxuICAgICAgICAgICAgICAgIDxMb2dpbiBsb2dJbj17dGhpcy5sb2dJbn0gLz5cbiAgICAgICAgICAgICAgPC9Cb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJvZHlTZWN0aW9uIHRpdGxlPVwiTmV3cyBmcm9tIHRoZSBTY2hvb2xcIj5cbiAgICAgICAgICAgICAgPHA+U29tZSByYW5kb20gdGV4dDwvcD5cbiAgICAgICAgICAgIDwvQm9keVNlY3Rpb24+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvb3Rlcil9PlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBpc0xvZ2dlZEluOiBzdGF0ZS51aS5pc1VzZXJMb2dnZWRJbixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNTY4NDk4YTE5ODcwNDY4NTM3OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlU2hlZXQiLCJjc3MiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2dpbiIsIk5vdGlmaWNhdGlvbiIsIkNvdXJzZUxpc3QiLCJCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20iLCJCb2R5U2VjdGlvbiIsImdldExhdGVzdE5vdGlmaWNhdGlvbiIsIkFwcENvbnRleHQiLCJkZWZhdWx0VXNlciIsImRlZmF1bHRMb2dPdXQiLCJQcm9wVHlwZXMiLCJjb25uZWN0Iiwic3R5bGVzIiwiY3JlYXRlIiwiYXBwIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJib2R5IiwiZm9udFNpemUiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInBhZGRpbmciLCJmb290ZXIiLCJmb250U3R5bGUiLCJib3JkZXJUb3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIkFwcCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9kZWZpbmVQcm9wZXJ0eSIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRTdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwiaWQiLCJwcmV2U3RhdGUiLCJsaXN0Tm90aWZpY2F0aW9ucyIsImZpbHRlciIsIm5vdGlmaWNhdGlvbiIsInN0YXRlIiwibG9nT3V0IiwiZGlzcGxheURyYXdlciIsImxpc3RDb3Vyc2VzIiwibmFtZSIsImNyZWRpdCIsInR5cGUiLCJ2YWx1ZSIsImh0bWwiLCJfX2h0bWwiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImhhbmRsZURpc3BsYXlEcmF3ZXIiLCJoYW5kbGVIaWRlRHJhd2VyIiwibG9nSW4iLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3RybEtleSIsImFsZXJ0IiwicmVuZGVyIiwiX3RoaXMkc3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1aSIsImlzVXNlckxvZ2dlZEluIl0sInNvdXJjZVJvb3QiOiIifQ==