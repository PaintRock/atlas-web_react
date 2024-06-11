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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _actions_uiActionCreators_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/uiActionCreators.js */ "./src/actions/uiActionCreators.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














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
    key: "logIn",
    value: function logIn(email, password) {
      this.setState({
        user: {
          email: email,
          password: password,
          isLoggedIn: true
        }
      });
    }
  }, {
    key: "logOut",
    value: function logOut() {
      this.setState({
        user: _AppContext_js__WEBPACK_IMPORTED_MODULE_10__.defaultUser
      });
    }
  }, {
    key: "markNotificationAsRead",
    value: function markNotificationAsRead(id) {
      this.setState(function (prevState) {
        return {
          listNotifications: prevState.listNotifications.filter(function (notification) {
            return notification.id !== id;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        user = _this$state.user,
        listCourses = _this$state.listCourses,
        listNotifications = _this$state.listNotifications;
      var _this$props = this.props,
        displayDrawer = _this$props.displayDrawer,
        displayNotificationDrawer = _this$props.displayNotificationDrawer,
        hideNotificationDrawer = _this$props.hideNotificationDrawer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AppContext_js__WEBPACK_IMPORTED_MODULE_10__.AppContext.Provider, {
        value: {
          user: user,
          logOut: this.logOut
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notifications_Notifications_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        listNotifications: listNotifications,
        displayDrawer: displayDrawer,
        handleDisplayDrawer: displayNotificationDrawer,
        handleHideDrawer: hideNotificationDrawer,
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
  displayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
  displayNotificationDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,
  hideNotificationDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired
};
App.defaultProps = {
  displayDrawer: false,
  displayNotificationDrawer: function displayNotificationDrawer() {},
  hideNotificationDrawer: function hideNotificationDrawer() {}
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.isUserLoggedIn,
    displayDrawer: state.ui.isNotificationDrawerVisible
  };
};
var mapDispatchToProps = {
  displayNotificationDrawer: _actions_uiActionCreators_js__WEBPACK_IMPORTED_MODULE_11__.displayNotificationDrawer,
  hideNotificationDrawer: _actions_uiActionCreators_js__WEBPACK_IMPORTED_MODULE_11__.hideNotificationDrawer
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_13__.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("151a5811903666d8f537")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZTZlNzg0YzFiMjM5MDZlNDZlOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNIO0FBQ0E7QUFDSDtBQUN1QjtBQUNSO0FBQ2dDO0FBQ2hDO0FBQ0U7QUFDa0I7QUFDdEM7QUFDRztBQUM0RDtBQUdsRyxJQUFNa0IsTUFBTSxHQUFHakIsaURBQVUsQ0FBQ2tCLE1BQU0sQ0FBQztFQUMvQkMsR0FBRyxFQUFFO0lBQ0hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCQyxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDSkMsUUFBUSxFQUFFLE1BQU07SUFDaEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOVCxTQUFTLEVBQUUsUUFBUTtJQUNuQkssUUFBUSxFQUFFLE1BQU07SUFDaEJLLFNBQVMsRUFBRSxRQUFRO0lBQ25CRixPQUFPLEVBQUUsTUFBTTtJQUNmRyxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsSUFBSSxFQUFFLENBQUM7SUFDUEMsS0FBSyxFQUFFLENBQUM7SUFDUkMsZUFBZSxFQUFFLE9BQU87SUFDeEJDLE1BQU0sRUFBRTtFQUNWO0FBQ0YsQ0FBQyxDQUFDO0FBQUMsSUFHR0MsR0FBRywwQkFBQUMsZ0JBQUE7RUFDUCxTQUFBRCxJQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosR0FBQTtJQUNqQkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLEdBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNYQyxJQUFJLEVBQUVsQyx3REFBVztNQUNqQm1DLE1BQU0sRUFBRWxDLDBEQUFhO01BQ3JCbUMsV0FBVyxFQUFFLENBQ1g7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLEtBQUs7UUFBRUMsTUFBTSxFQUFFO01BQUcsQ0FBQyxFQUNsQztRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsU0FBUztRQUFFQyxNQUFNLEVBQUU7TUFBRyxDQUFDLEVBQ3RDO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLE1BQU0sRUFBRTtNQUFHLENBQUMsQ0FDckM7TUFDREMsaUJBQWlCLEVBQUUsQ0FDakI7UUFBRUgsRUFBRSxFQUFFLENBQUM7UUFBRUksSUFBSSxFQUFFLFNBQVM7UUFBRUMsS0FBSyxFQUFFO01BQXVCLENBQUMsRUFDekQ7UUFBRUwsRUFBRSxFQUFFLENBQUM7UUFBRUksSUFBSSxFQUFFLFFBQVE7UUFBRUMsS0FBSyxFQUFFO01BQXVCLENBQUMsRUFDeEQ7UUFBRUwsRUFBRSxFQUFFLENBQUM7UUFBRUksSUFBSSxFQUFFLFFBQVE7UUFBRUUsSUFBSSxFQUFFO1VBQUVDLE1BQU0sRUFBRTlDLG1FQUFxQixDQUFDO1FBQUU7TUFBRSxDQUFDO0lBRXhFLENBQUM7SUFFRGdDLEtBQUEsQ0FBS2UsYUFBYSxHQUFHZixLQUFBLENBQUtlLGFBQWEsQ0FBQ0MsSUFBSSxDQUFBaEIsS0FBSyxDQUFDO0lBQ2xEQSxLQUFBLENBQUtpQixLQUFLLEdBQUdqQixLQUFBLENBQUtpQixLQUFLLENBQUNELElBQUksQ0FBQWhCLEtBQUssQ0FBQztJQUNsQ0EsS0FBQSxDQUFLSyxNQUFNLEdBQUdMLEtBQUEsQ0FBS0ssTUFBTSxDQUFDVyxJQUFJLENBQUFoQixLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBQ3ZDO0VBQUNrQixTQUFBLENBQUFyQixHQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQXFCLFlBQUEsQ0FBQXRCLEdBQUE7SUFBQXVCLEdBQUE7SUFBQVIsS0FBQSxFQUVELFNBQUFTLGtCQUFBLEVBQW9CO01BQ2xCQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNSLGFBQWEsQ0FBQztJQUMxRDtFQUFDO0lBQUFLLEdBQUE7SUFBQVIsS0FBQSxFQUVELFNBQUFZLHFCQUFBLEVBQXVCO01BQ3JCRixRQUFRLENBQUNHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNWLGFBQWEsQ0FBQztJQUM3RDtFQUFDO0lBQUFLLEdBQUE7SUFBQVIsS0FBQSxFQUVELFNBQUFHLGNBQWNXLEtBQUssRUFBRTtNQUNuQixJQUFJQSxLQUFLLENBQUNDLE9BQU8sSUFBSUQsS0FBSyxDQUFDTixHQUFHLEtBQUssR0FBRyxFQUFFO1FBQ3RDUSxLQUFLLENBQUMsaUJBQWlCLENBQUM7UUFDeEIsSUFBSSxDQUFDdkIsTUFBTSxDQUFDLENBQUM7TUFDZjtJQUNGO0VBQUM7SUFBQWUsR0FBQTtJQUFBUixLQUFBLEVBRUQsU0FBQUssTUFBTVksS0FBSyxFQUFFQyxRQUFRLEVBQUU7TUFDckIsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDWjNCLElBQUksRUFBRTtVQUNKeUIsS0FBSyxFQUFMQSxLQUFLO1VBQ0xDLFFBQVEsRUFBUkEsUUFBUTtVQUNSRSxVQUFVLEVBQUU7UUFDZDtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQVosR0FBQTtJQUFBUixLQUFBLEVBRUQsU0FBQVAsT0FBQSxFQUFTO01BQ1AsSUFBSSxDQUFDMEIsUUFBUSxDQUFDO1FBQ1ozQixJQUFJLEVBQUVsQyx3REFBV0E7TUFDbkIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBa0QsR0FBQTtJQUFBUixLQUFBLEVBRUQsU0FBQXFCLHVCQUF1QjFCLEVBQUUsRUFBRTtNQUN6QixJQUFJLENBQUN3QixRQUFRLENBQUMsVUFBQ0csU0FBUztRQUFBLE9BQU07VUFDNUJ4QixpQkFBaUIsRUFBRXdCLFNBQVMsQ0FBQ3hCLGlCQUFpQixDQUFDeUIsTUFBTSxDQUNuRCxVQUFDQyxZQUFZO1lBQUEsT0FBS0EsWUFBWSxDQUFDN0IsRUFBRSxLQUFLQSxFQUFFO1VBQUEsQ0FDMUM7UUFDRixDQUFDO01BQUEsQ0FBQyxDQUFDO0lBQ0w7RUFBQztJQUFBYSxHQUFBO0lBQUFSLEtBQUEsRUFFRCxTQUFBeUIsT0FBQSxFQUFTO01BQ1AsSUFBQUMsV0FBQSxHQUFpRCxJQUFJLENBQUNuQyxLQUFLO1FBQW5EQyxJQUFJLEdBQUFrQyxXQUFBLENBQUpsQyxJQUFJO1FBQUVFLFdBQVcsR0FBQWdDLFdBQUEsQ0FBWGhDLFdBQVc7UUFBRUksaUJBQWlCLEdBQUE0QixXQUFBLENBQWpCNUIsaUJBQWlCO01BQzVDLElBQUE2QixXQUFBLEdBQTZFLElBQUksQ0FBQ3hDLEtBQUs7UUFBL0V5QyxhQUFhLEdBQUFELFdBQUEsQ0FBYkMsYUFBYTtRQUFFbEUseUJBQXlCLEdBQUFpRSxXQUFBLENBQXpCakUseUJBQXlCO1FBQUVDLHNCQUFzQixHQUFBZ0UsV0FBQSxDQUF0QmhFLHNCQUFzQjtNQUV4RSxvQkFDRWpCLDBEQUFBLENBQUNXLHVEQUFVLENBQUN5RSxRQUFRO1FBQUM5QixLQUFLLEVBQUU7VUFBRVIsSUFBSSxFQUFKQSxJQUFJO1VBQUVDLE1BQU0sRUFBRSxJQUFJLENBQUNBO1FBQU87TUFBRSxnQkFDeEQvQywwREFBQSxDQUFDTSx1RUFBWTtRQUNYOEMsaUJBQWlCLEVBQUVBLGlCQUFrQjtRQUNyQzhCLGFBQWEsRUFBRUEsYUFBYztRQUM3QkcsbUJBQW1CLEVBQUVyRSx5QkFBMEI7UUFDL0NzRSxnQkFBZ0IsRUFBRXJFLHNCQUF1QjtRQUN6Q3lELFVBQVUsRUFBRTVCLElBQUksQ0FBQzRCLFVBQVc7UUFDNUJDLHNCQUFzQixFQUFFLElBQUksQ0FBQ0E7TUFBdUIsQ0FDckQsQ0FBQyxlQUNGM0UsMERBQUE7UUFBS3VGLFNBQVMsRUFBRXJGLDhDQUFHLENBQUNnQixNQUFNLENBQUNFLEdBQUc7TUFBRSxnQkFDOUJwQiwwREFBQSxDQUFDRyx5REFBTSxNQUFFLENBQUMsZUFDVkgsMERBQUE7UUFBTXVGLFNBQVMsRUFBRXJGLDhDQUFHLENBQUNnQixNQUFNLENBQUNPLElBQUk7TUFBRSxHQUMvQnFCLElBQUksQ0FBQzRCLFVBQVUsZ0JBQ2QxRSwwREFBQSxDQUFDUSxnRkFBMkI7UUFBQ2dGLEtBQUssRUFBQztNQUFhLGdCQUM5Q3hGLDBEQUFBLENBQUNPLGlFQUFVO1FBQUN5QyxXQUFXLEVBQUVBO01BQVksQ0FBRSxDQUNaLENBQUMsZ0JBRTlCaEQsMERBQUEsQ0FBQ1EsZ0ZBQTJCO1FBQUNnRixLQUFLLEVBQUM7TUFBbUIsZ0JBQ3BEeEYsMERBQUEsQ0FBQ0ssdURBQUs7UUFBQ3NELEtBQUssRUFBRSxJQUFJLENBQUNBO01BQU0sQ0FBRSxDQUNBLENBQzlCLGVBQ0QzRCwwREFBQSxDQUFDUyxnRUFBVztRQUFDK0UsS0FBSyxFQUFDO01BQXNCLGdCQUN2Q3hGLDBEQUFBLFlBQUcsa0JBQW1CLENBQ1gsQ0FDVCxDQUFDLGVBQ1BBLDBEQUFBO1FBQVF1RixTQUFTLEVBQUVyRiw4Q0FBRyxDQUFDZ0IsTUFBTSxDQUFDWSxNQUFNO01BQUUsZ0JBQ3BDOUIsMERBQUEsQ0FBQ0kseURBQU0sTUFBRSxDQUNILENBQ0wsQ0FDYyxDQUFDO0lBRTFCO0VBQUM7QUFBQSxFQWxHZUosd0RBQWU7QUFxR2pDdUMsR0FBRyxDQUFDbUQsU0FBUyxHQUFHO0VBQ2RSLGFBQWEsRUFBRXBFLHlEQUFjO0VBQzdCRSx5QkFBeUIsRUFBRUYseURBQWMsQ0FBQytFLFVBQVU7RUFDcEQ1RSxzQkFBc0IsRUFBRUgseURBQWMsQ0FBQytFO0FBQ3pDLENBQUM7QUFFRHRELEdBQUcsQ0FBQ3VELFlBQVksR0FBRztFQUNqQlosYUFBYSxFQUFFLEtBQUs7RUFDcEJsRSx5QkFBeUIsRUFBRSxTQUFBQSwwQkFBQSxFQUFNLENBQUMsQ0FBQztFQUNuQ0Msc0JBQXNCLEVBQUUsU0FBQUEsdUJBQUEsRUFBTSxDQUFDO0FBQ2pDLENBQUM7QUFFRCxJQUFNOEUsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJbEQsS0FBSztFQUFBLE9BQU07SUFDbEM2QixVQUFVLEVBQUU3QixLQUFLLENBQUNtRCxFQUFFLENBQUNDLGNBQWM7SUFDbkNmLGFBQWEsRUFBRXJDLEtBQUssQ0FBQ21ELEVBQUUsQ0FBQ0U7RUFDMUIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRztFQUN6Qm5GLHlCQUF5QixFQUF6QkEsb0ZBQXlCO0VBQ3pCQyxzQkFBc0IsRUFBdEJBLGlGQUFzQkE7QUFDeEIsQ0FBQztBQUVELGlFQUFlRixxREFBTyxDQUFDZ0YsZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDNUQsR0FBRyxDQUFDOzs7Ozs7OztVQ3hLaEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlci5qcyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4vTG9naW4uanMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMuanMnO1xuaW1wb3J0IENvdXJzZUxpc3QgZnJvbSAnLi4vQ291cnNlTGlzdC9Db3Vyc2VMaXN0LmpzJztcbmltcG9ydCBCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20gZnJvbSAnLi4vQm9keVNlY3Rpb24vQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tJztcbmltcG9ydCBCb2R5U2VjdGlvbiBmcm9tICcuLi9Cb2R5U2VjdGlvbi9Cb2R5U2VjdGlvbic7XG5pbXBvcnQgeyBnZXRMYXRlc3ROb3RpZmljYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBBcHBDb250ZXh0LCBkZWZhdWx0VXNlciwgZGVmYXVsdExvZ091dCB9IGZyb20gJy4vQXBwQ29udGV4dC5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRpc3BsYXlOb3RpZmljYXRpb25EcmF3ZXIsIGhpZGVOb3RpZmljYXRpb25EcmF3ZXIgfSBmcm9tICcuLi9hY3Rpb25zL3VpQWN0aW9uQ3JlYXRvcnMuanMnXG5cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBhcHA6IHtcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gIH0sXG4gIGJvZHk6IHtcbiAgICBmb250U2l6ZTogXCIyOHB4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4OiAxLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICBib3JkZXJUb3A6IFwiNHB4IHNvbGlkIGRhcmtibHVlXCIsXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICB6SW5kZXg6IDEsXG4gIH0sXG59KTtcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogZGVmYXVsdFVzZXIsXG4gICAgICBsb2dPdXQ6IGRlZmF1bHRMb2dPdXQsXG4gICAgICBsaXN0Q291cnNlczogW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnRVM2JywgY3JlZGl0OiA2MCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnV2VicGFjaycsIGNyZWRpdDogMjAgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ1JlYWN0JywgY3JlZGl0OiA0MCB9LFxuICAgICAgXSxcbiAgICAgIGxpc3ROb3RpZmljYXRpb25zOiBbXG4gICAgICAgIHsgaWQ6IDEsIHR5cGU6ICdkZWZhdWx0JywgdmFsdWU6ICdOZXcgY291cnNlIGF2YWlsYWJsZScgfSxcbiAgICAgICAgeyBpZDogMiwgdHlwZTogJ3VyZ2VudCcsIHZhbHVlOiAnTmV3IHJlc3VtZSBhdmFpbGFibGUnIH0sXG4gICAgICAgIHsgaWQ6IDMsIHR5cGU6ICd1cmdlbnQnLCBodG1sOiB7IF9faHRtbDogZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uKCkgfSB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dJbiA9IHRoaXMubG9nSW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gJ2gnKSB7XG4gICAgICBhbGVydCgnTG9nZ2luZyB5b3Ugb3V0Jyk7XG4gICAgICB0aGlzLmxvZ091dCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ0luKGVtYWlsLCBwYXNzd29yZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjoge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgbG9nT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjogZGVmYXVsdFVzZXIsXG4gICAgfSk7XG4gIH1cblxuICBtYXJrTm90aWZpY2F0aW9uQXNSZWFkKGlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgbGlzdE5vdGlmaWNhdGlvbnM6IHByZXZTdGF0ZS5saXN0Tm90aWZpY2F0aW9ucy5maWx0ZXIoXG4gICAgICAgIChub3RpZmljYXRpb24pID0+IG5vdGlmaWNhdGlvbi5pZCAhPT0gaWRcbiAgICAgICksXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlciwgbGlzdENvdXJzZXMsIGxpc3ROb3RpZmljYXRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGlzcGxheURyYXdlciwgZGlzcGxheU5vdGlmaWNhdGlvbkRyYXdlciwgaGlkZU5vdGlmaWNhdGlvbkRyYXdlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dPdXQ6IHRoaXMubG9nT3V0IH19PlxuICAgICAgICA8Tm90aWZpY2F0aW9uXG4gICAgICAgICAgbGlzdE5vdGlmaWNhdGlvbnM9e2xpc3ROb3RpZmljYXRpb25zfVxuICAgICAgICAgIGRpc3BsYXlEcmF3ZXI9e2Rpc3BsYXlEcmF3ZXJ9XG4gICAgICAgICAgaGFuZGxlRGlzcGxheURyYXdlcj17ZGlzcGxheU5vdGlmaWNhdGlvbkRyYXdlcn1cbiAgICAgICAgICBoYW5kbGVIaWRlRHJhd2VyPXtoaWRlTm90aWZpY2F0aW9uRHJhd2VyfVxuICAgICAgICAgIGlzTG9nZ2VkSW49e3VzZXIuaXNMb2dnZWRJbn1cbiAgICAgICAgICBtYXJrTm90aWZpY2F0aW9uQXNSZWFkPXt0aGlzLm1hcmtOb3RpZmljYXRpb25Bc1JlYWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmFwcCl9PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NzcyhzdHlsZXMuYm9keSl9PlxuICAgICAgICAgICAge3VzZXIuaXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgPEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSB0aXRsZT1cIkNvdXJzZSBsaXN0XCI+XG4gICAgICAgICAgICAgICAgPENvdXJzZUxpc3QgbGlzdENvdXJzZXM9e2xpc3RDb3Vyc2VzfSAvPlxuICAgICAgICAgICAgICA8L0JvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20gdGl0bGU9XCJMb2dpbiB0byBjb250aW51ZVwiPlxuICAgICAgICAgICAgICAgIDxMb2dpbiBsb2dJbj17dGhpcy5sb2dJbn0gLz5cbiAgICAgICAgICAgICAgPC9Cb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJvZHlTZWN0aW9uIHRpdGxlPVwiTmV3cyBmcm9tIHRoZSBTY2hvb2xcIj5cbiAgICAgICAgICAgICAgPHA+U29tZSByYW5kb20gdGV4dDwvcD5cbiAgICAgICAgICAgIDwvQm9keVNlY3Rpb24+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmZvb3Rlcil9PlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IFByb3BUeXBlcy5ib29sLFxuICBkaXNwbGF5Tm90aWZpY2F0aW9uRHJhd2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoaWRlTm90aWZpY2F0aW9uRHJhd2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuQXBwLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheURyYXdlcjogZmFsc2UsXG4gIGRpc3BsYXlOb3RpZmljYXRpb25EcmF3ZXI6ICgpID0+IHt9LFxuICBoaWRlTm90aWZpY2F0aW9uRHJhd2VyOiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgaXNMb2dnZWRJbjogc3RhdGUudWkuaXNVc2VyTG9nZ2VkSW4sXG4gIGRpc3BsYXlEcmF3ZXI6IHN0YXRlLnVpLmlzTm90aWZpY2F0aW9uRHJhd2VyVmlzaWJsZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGRpc3BsYXlOb3RpZmljYXRpb25EcmF3ZXIsXG4gIGhpZGVOb3RpZmljYXRpb25EcmF3ZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE1MWE1ODExOTAzNjY2ZDhmNTM3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3R5bGVTaGVldCIsImNzcyIsIkhlYWRlciIsIkZvb3RlciIsIkxvZ2luIiwiTm90aWZpY2F0aW9uIiwiQ291cnNlTGlzdCIsIkJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSIsIkJvZHlTZWN0aW9uIiwiZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIiwiQXBwQ29udGV4dCIsImRlZmF1bHRVc2VyIiwiZGVmYXVsdExvZ091dCIsIlByb3BUeXBlcyIsImNvbm5lY3QiLCJkaXNwbGF5Tm90aWZpY2F0aW9uRHJhd2VyIiwiaGlkZU5vdGlmaWNhdGlvbkRyYXdlciIsInN0eWxlcyIsImNyZWF0ZSIsImFwcCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwiYm9keSIsImZvbnRTaXplIiwiYWxpZ25JdGVtcyIsImZsZXgiLCJwYWRkaW5nIiwiZm9vdGVyIiwiZm9udFN0eWxlIiwiYm9yZGVyVG9wIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJBcHAiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJzdGF0ZSIsInVzZXIiLCJsb2dPdXQiLCJsaXN0Q291cnNlcyIsImlkIiwibmFtZSIsImNyZWRpdCIsImxpc3ROb3RpZmljYXRpb25zIiwidHlwZSIsInZhbHVlIiwiaHRtbCIsIl9faHRtbCIsImhhbmRsZUtleURvd24iLCJiaW5kIiwibG9nSW4iLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3RybEtleSIsImFsZXJ0IiwiZW1haWwiLCJwYXNzd29yZCIsInNldFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1hcmtOb3RpZmljYXRpb25Bc1JlYWQiLCJwcmV2U3RhdGUiLCJmaWx0ZXIiLCJub3RpZmljYXRpb24iLCJyZW5kZXIiLCJfdGhpcyRzdGF0ZSIsIl90aGlzJHByb3BzIiwiZGlzcGxheURyYXdlciIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsImhhbmRsZURpc3BsYXlEcmF3ZXIiLCJoYW5kbGVIaWRlRHJhd2VyIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1aSIsImlzVXNlckxvZ2dlZEluIiwiaXNOb3RpZmljYXRpb25EcmF3ZXJWaXNpYmxlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==