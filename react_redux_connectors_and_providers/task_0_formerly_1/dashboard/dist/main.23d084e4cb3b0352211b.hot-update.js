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
/******/ 	__webpack_require__.h = () => ("a8c4e50e04f30e301314")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yM2QwODRlNGNiM2IwMzUyMjExYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDSDtBQUNBO0FBQ0g7QUFDdUI7QUFDUjtBQUNnQztBQUNoQztBQUNFO0FBQ2tCO0FBQ3RDO0FBQ0c7QUFJdEMsSUFBTWdCLE1BQU0sR0FBR2YsaURBQVUsQ0FBQ2dCLE1BQU0sQ0FBQztFQUMvQkMsR0FBRyxFQUFFO0lBQ0hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCQyxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDSkMsUUFBUSxFQUFFLE1BQU07SUFDaEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOVCxTQUFTLEVBQUUsUUFBUTtJQUNuQkssUUFBUSxFQUFFLE1BQU07SUFDaEJLLFNBQVMsRUFBRSxRQUFRO0lBQ25CRixPQUFPLEVBQUUsTUFBTTtJQUNmRyxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsSUFBSSxFQUFFLENBQUM7SUFDUEMsS0FBSyxFQUFFLENBQUM7SUFDUkMsZUFBZSxFQUFFLE9BQU87SUFDeEJDLE1BQU0sRUFBRTtFQUNWO0FBQ0YsQ0FBQyxDQUFDO0FBQUMsSUFFR0MsR0FBRywwQkFBQUMsZ0JBQUE7RUFDUCxTQUFBRCxJQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosR0FBQTtJQUNqQkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLEdBQUEsR0FBTUUsS0FBSztJQUFFSSxlQUFBLENBQUFILEtBQUEsV0ErQ1AsVUFBQ0ksS0FBSyxFQUFF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QyxFQUFFLENBQUNDO0VBQ3ZCLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWUzRSxxREFBTyxDQUFDeUUsZUFBZSxDQUFDLENBQUNuRCxHQUFHLENBQUM7Ozs7Ozs7O1VDL0o1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXIuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyLmpzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbi5qcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qcyc7XG5pbXBvcnQgQ291cnNlTGlzdCBmcm9tICcuLi9Db3Vyc2VMaXN0L0NvdXJzZUxpc3QuanMnO1xuaW1wb3J0IEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSBmcm9tICcuLi9Cb2R5U2VjdGlvbi9Cb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20nO1xuaW1wb3J0IEJvZHlTZWN0aW9uIGZyb20gJy4uL0JvZHlTZWN0aW9uL0JvZHlTZWN0aW9uJztcbmltcG9ydCB7IGdldExhdGVzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IEFwcENvbnRleHQsIGRlZmF1bHRVc2VyLCBkZWZhdWx0TG9nT3V0IH0gZnJvbSAnLi9BcHBDb250ZXh0LmpzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBhcHA6IHtcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gIH0sXG4gIGJvZHk6IHtcbiAgICBmb250U2l6ZTogXCIyOHB4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4OiAxLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICBib3JkZXJUb3A6IFwiNHB4IHNvbGlkIGRhcmtibHVlXCIsXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICB6SW5kZXg6IDEsXG4gIH0sXG59KTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6IGRlZmF1bHRVc2VyLFxuICAgICAgbG9nT3V0OiBkZWZhdWx0TG9nT3V0LFxuICAgICAgZGlzcGxheURyYXdlcjogZmFsc2UsXG5cbiAgICAgIGxpc3RDb3Vyc2VzOiBbXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdFUzYnLCBjcmVkaXQ6IDYwIH0sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdXZWJwYWNrJywgY3JlZGl0OiAyMCB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiAnUmVhY3QnLCBjcmVkaXQ6IDQwIH0sXG4gICAgICBdLFxuICAgICAgbGlzdE5vdGlmaWNhdGlvbnM6IFtcbiAgICAgICAgeyBpZDogMSwgdHlwZTogJ2RlZmF1bHQnLCB2YWx1ZTogJ05ldyBjb3Vyc2UgYXZhaWxhYmxlJyB9LFxuICAgICAgICB7IGlkOiAyLCB0eXBlOiAndXJnZW50JywgdmFsdWU6ICdOZXcgcmVzdW1lIGF2YWlsYWJsZScgfSxcbiAgICAgICAgeyBpZDogMywgdHlwZTogJ3VyZ2VudCcsIGh0bWw6IHsgX19odG1sOiBnZXRMYXRlc3ROb3RpZmljYXRpb24oKSB9IH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgXG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEaXNwbGF5RHJhd2VyID0gdGhpcy5oYW5kbGVEaXNwbGF5RHJhd2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVIaWRlRHJhd2VyID0gdGhpcy5oYW5kbGVIaWRlRHJhd2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dJbiA9IHRoaXMubG9nSW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gJ2gnKSB7XG4gICAgICBhbGVydCgnTG9nZ2luZyB5b3Ugb3V0Jyk7XG4gICAgICB0aGlzLmxvZ091dCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURpc3BsYXlEcmF3ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlEcmF3ZXI6IHRydWUgfSk7XG4gIH1cblxuICBoYW5kbGVIaWRlRHJhd2VyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5RHJhd2VyOiBmYWxzZSB9KTtcbiAgfVxuICBsb2dJbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBsb2dPdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VyOiBkZWZhdWx0VXNlcixcbiAgICB9KTtcbiAgfTtcblxuICBtYXJrTm90aWZpY2F0aW9uQXNSZWFkID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgbGlzdE5vdGlmaWNhdGlvbnM6IHByZXZTdGF0ZS5saXN0Tm90aWZpY2F0aW9ucy5maWx0ZXIoXG4gICAgICAgIChub3RpZmljYXRpb24pID0+IG5vdGlmaWNhdGlvbi5pZCAhPT0gaWRcbiAgICAgICksXG4gICAgfSkpO1xuICB9O1xuICBcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyLCBsaXN0Q291cnNlcywgbGlzdE5vdGlmaWNhdGlvbnMsIGRpc3BsYXlEcmF3ZXIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9nT3V0OiB0aGlzLmxvZ091dCB9fT5cbiAgICAgICAgPE5vdGlmaWNhdGlvblxuICAgICAgICAgIGxpc3ROb3RpZmljYXRpb25zPXtsaXN0Tm90aWZpY2F0aW9uc31cbiAgICAgICAgICBkaXNwbGF5RHJhd2VyPXtkaXNwbGF5RHJhd2VyfVxuICAgICAgICAgIGhhbmRsZURpc3BsYXlEcmF3ZXI9e3RoaXMuaGFuZGxlRGlzcGxheURyYXdlcn1cbiAgICAgICAgICBoYW5kbGVIaWRlRHJhd2VyPXt0aGlzLmhhbmRsZUhpZGVEcmF3ZXJ9XG4gICAgICAgICAgaXNMb2dnZWRJbj17dXNlci5pc0xvZ2dlZElufVxuICAgICAgICAgIG1hcmtOb3RpZmljYXRpb25Bc1JlYWQ9e3RoaXMubWFya05vdGlmaWNhdGlvbkFzUmVhZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuYXBwKX0+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5ib2R5KX0+XG4gICAgICAgICAgICB7dXNlci5pc0xvZ2dlZEluID8gKFxuICAgICAgICAgICAgICA8Qm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tIHRpdGxlPVwiQ291cnNlIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8Q291cnNlTGlzdCBsaXN0Q291cnNlcz17bGlzdENvdXJzZXN9IC8+XG4gICAgICAgICAgICAgIDwvQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSB0aXRsZT1cIkxvZ2luIHRvIGNvbnRpbnVlXCI+XG4gICAgICAgICAgICAgICAgPExvZ2luIGxvZ0luPXt0aGlzLmxvZ0lufSAvPlxuICAgICAgICAgICAgICA8L0JvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Qm9keVNlY3Rpb24gdGl0bGU9XCJOZXdzIGZyb20gdGhlIFNjaG9vbFwiPlxuICAgICAgICAgICAgICA8cD5Tb21lIHJhbmRvbSB0ZXh0PC9wPlxuICAgICAgICAgICAgPC9Cb2R5U2VjdGlvbj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NzcyhzdHlsZXMuZm9vdGVyKX0+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgaXNMb2dnZWRJbjogc3RhdGUudWkuaXNVc2VyTG9nZ2VkSW4sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhOGM0ZTUwZTA0ZjMwZTMwMTMxNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlU2hlZXQiLCJjc3MiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2dpbiIsIk5vdGlmaWNhdGlvbiIsIkNvdXJzZUxpc3QiLCJCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20iLCJCb2R5U2VjdGlvbiIsImdldExhdGVzdE5vdGlmaWNhdGlvbiIsIkFwcENvbnRleHQiLCJkZWZhdWx0VXNlciIsImRlZmF1bHRMb2dPdXQiLCJQcm9wVHlwZXMiLCJjb25uZWN0Iiwic3R5bGVzIiwiY3JlYXRlIiwiYXBwIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJib2R5IiwiZm9udFNpemUiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInBhZGRpbmciLCJmb290ZXIiLCJmb250U3R5bGUiLCJib3JkZXJUb3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIkFwcCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9kZWZpbmVQcm9wZXJ0eSIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRTdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwiaWQiLCJwcmV2U3RhdGUiLCJsaXN0Tm90aWZpY2F0aW9ucyIsImZpbHRlciIsIm5vdGlmaWNhdGlvbiIsInN0YXRlIiwibG9nT3V0IiwiZGlzcGxheURyYXdlciIsImxpc3RDb3Vyc2VzIiwibmFtZSIsImNyZWRpdCIsInR5cGUiLCJ2YWx1ZSIsImh0bWwiLCJfX2h0bWwiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImhhbmRsZURpc3BsYXlEcmF3ZXIiLCJoYW5kbGVIaWRlRHJhd2VyIiwibG9nSW4iLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3RybEtleSIsImFsZXJ0IiwicmVuZGVyIiwiX3RoaXMkc3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1aSIsImlzVXNlckxvZ2dlZEluIl0sInNvdXJjZVJvb3QiOiIifQ==