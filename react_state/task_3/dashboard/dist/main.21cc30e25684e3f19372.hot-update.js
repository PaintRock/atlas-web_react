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
/* harmony import */ var _Notifications_Notifications_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Notifications/Notifications */ "./src/Notifications/Notifications.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CourseList_CourseList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CourseList/CourseList.js */ "./src/CourseList/CourseList.js");
/* harmony import */ var _BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BodySection/BodySectionWithMarginBottom */ "./src/BodySection/BodySectionWithMarginBottom.js");
/* harmony import */ var _BodySection_BodySection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BodySection/BodySection */ "./src/BodySection/BodySection.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
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
    _defineProperty(_this, "handleDisplayDrawer", function () {
      _this.setState({
        displayDrawer: true
      });
    });
    _defineProperty(_this, "handleHideDrawer", function () {
      _this.setState({
        displayDrawer: false
      });
    });
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
      }],
      displayDrawer: false
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleDisplayDrawer = _this.handleDisplayDrawer.bind(_this);
    _this.handleHideDrawer = _this.handleHideDrawer.bind(_this);
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
      var _this$state = this.state,
        listCourses = _this$state.listCourses,
        listNotifications = _this$state.listNotifications,
        displayDrawer = _this$state.displayDrawer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notifications_Notifications_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        listNotifications: listNotifications,
        isLoggedIn: isLoggedIn,
        displayDrawer: displayDrawer,
        handleDisplayDrawer: this.handleDisplayDrawer,
        handleHideDrawer: this.handleHideDrawer,
        markNotificationAsRead: this.markNotificationAsRead
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.app)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.body)
      }, isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Course list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CourseList_CourseList_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        listCourses: listCourses
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Login to continue"
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
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  logOut: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Notifications/NotificationItem.js":
/*!***********************************************!*\
  !*** ./src/Notifications/NotificationItem.js ***!
  \***********************************************/
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
  item: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px'
  },
  defaultPriority: {
    color: 'blue'
  },
  urgentPriority: {
    color: 'red'
  }
});
var NotificationItem = /*#__PURE__*/function (_PureComponent) {
  function NotificationItem() {
    _classCallCheck(this, NotificationItem);
    return _callSuper(this, NotificationItem, arguments);
  }
  _inherits(NotificationItem, _PureComponent);
  return _createClass(NotificationItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        type = _this$props.type,
        value = _this$props.value,
        html = _this$props.html,
        markAsRead = _this$props.markAsRead,
        id = _this$props.id;
      var listItem;
      if (html) {
        listItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.item, type === 'urgent' ? styles.urgentPriority : styles.defaultPriority),
          "data-notification-type": type,
          onClick: function onClick() {
            return markAsRead(id);
          },
          dangerouslySetInnerHTML: html
        });
      } else {
        listItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.item, type === 'urgent' ? styles.urgentPriority : styles.defaultPriority),
          "data-notification-type": type,
          onClick: function onClick() {
            return markAsRead(id);
          }
        }, value);
      }
      return listItem;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
NotificationItem.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  html: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    __html: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  markAsRead: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)])
};
NotificationItem.defaultProps = {
  value: '',
  html: null,
  markAsRead: function markAsRead() {},
  id: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationItem);

/***/ }),

/***/ "./src/Notifications/NotificationItemShape.js":
/*!****************************************************!*\
  !*** ./src/Notifications/NotificationItemShape.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var NotificationItemShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  type: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  html: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    __html: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationItemShape);

/***/ }),

/***/ "./src/Notifications/Notifications.js":
/*!********************************************!*\
  !*** ./src/Notifications/Notifications.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notifications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationItem */ "./src/Notifications/NotificationItem.js");
/* harmony import */ var _NotificationItemShape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationItemShape */ "./src/Notifications/NotificationItemShape.js");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");


// import './Notifications.css';




var opacity = {
  '0%': {
    opacity: 0.5
  },
  '100%': {
    opacity: 1
  }
};
var bounce = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '50%': {
    transform: 'rotate(5deg)'
  },
  '100%': {
    transform: 'rotate(-5deg)'
  }
};
var styles = aphrodite__WEBPACK_IMPORTED_MODULE_4__.StyleSheet.create({
  notifications: {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    height: '100%',
    padding: '0',
    border: 'none',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '20px'
  },
  NotificationOpened: {
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    padding: '0',
    border: 'none',
    fontSize: '20px',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  menuItem: {
    position: 'fixed',
    padding: '10px',
    top: '20px',
    right: '40px',
    cursor: 'pointer',
    zIndex: 1,
    ':hover': {
      animationName: [opacity, bounce],
      animationDuration: ['1s', '0.2s'],
      animationIterationCount: 'infinite'
    }
  },
  hideMenuItem: {
    display: 'none'
  },
  defaultNotificationStyle: {
    color: 'blue'
  },
  urgentNotificationStyle: {
    color: 'red'
  }
});
function Notifications(_ref) {
  var displayDrawer = _ref.displayDrawer,
    listNotifications = _ref.listNotifications,
    handleDisplayDrawer = _ref.handleDisplayDrawer,
    handleHideDrawer = _ref.handleHideDrawer,
    isLoggedIn = _ref.isLoggedIn;
  var handleClick = function handleClick() {
    handleHideDrawer();
    console.log('Close button has been clicked');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoggedIn && !displayDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.menuItem)
  }, "Your notifications"), displayDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.notifications, displayDrawer && styles.NotificationOpened)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      position: 'absolute',
      right: '20px',
      top: '20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      outline: 'none'
    },
    "aria-label": "Close",
    onClick: handleClick
  }, " Close", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '30px'
    }
  }, "\xD7")), listNotifications.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No new notification for now") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Here is the list of notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, listNotifications.map(function (notification) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: notification.id,
      id: notification.id,
      type: notification.type,
      value: notification.value,
      html: notification.html,
      markAsRead: markNotificationAsRead
    });
  })))));
}
Notifications.propTypes = {
  displayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  listNotifications: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(_NotificationItemShape__WEBPACK_IMPORTED_MODULE_3__["default"]),
  handleDisplayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  handleHideDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  markNotificationAsRead: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: function handleDisplayDrawer() {},
  handleHideDrawer: function handleHideDrawer() {},
  isLoggedIn: false,
  markNotificationAsRead: function markNotificationAsRead() {}
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("76487491d31f50106b0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMWNjMzBlMjU2ODRlM2YxOTM3Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDSDtBQUNBO0FBQ0g7QUFDdUI7QUFDMUI7QUFDa0I7QUFDZ0M7QUFDaEM7QUFDVTtBQUNSO0FBR3ZELElBQU1hLE1BQU0sR0FBR1osaURBQVUsQ0FBQ2EsTUFBTSxDQUFDO0VBQy9CQyxHQUFHLEVBQUU7SUFDSEMsU0FBUyxFQUFFLE1BQU07SUFDakJDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCQyxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLElBQUksRUFBRTtJQUNKQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsVUFBVSxFQUFFLFFBQVE7SUFDcEJDLElBQUksRUFBRSxDQUFDO0lBQ1BDLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0lBQ05ULFNBQVMsRUFBRSxRQUFRO0lBQ25CSyxRQUFRLEVBQUUsTUFBTTtJQUNoQkssU0FBUyxFQUFFLFFBQVE7SUFDbkJGLE9BQU8sRUFBRSxNQUFNO0lBQ2ZHLFNBQVMsRUFBRSxvQkFBb0I7SUFDL0JDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCQyxNQUFNLEVBQUUsQ0FBQztJQUNUQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxLQUFLLEVBQUUsQ0FBQztJQUNSQyxlQUFlLEVBQUUsT0FBTztJQUN4QkMsTUFBTSxFQUFFO0VBQ1Y7QUFDRixDQUFDLENBQUM7QUFBQyxJQUVHQyxHQUFHLDBCQUFBQyxnQkFBQTtFQVlQLFNBQUFELElBQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixHQUFBO0lBQ2pCRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsR0FBQSxHQUFNRSxLQUFLO0lBQUVJLGVBQUEsQ0FBQUgsS0FBQSx5QkFrQ1MsWUFBTTtNQUMxQkEsS0FBQSxDQUFL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RUFBRSxLQUFLO0VBQ2pCSSxzQkFBc0IsRUFBRSxTQUFBQSx1QkFBQSxFQUFNLENBQUM7QUFDakMsQ0FBQzs7Ozs7Ozs7VUN4SkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25JdGVtLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbkl0ZW1TaGFwZS5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXIuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyLmpzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbi5qcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvdXJzZUxpc3QgZnJvbSAnLi4vQ291cnNlTGlzdC9Db3Vyc2VMaXN0LmpzJztcbmltcG9ydCBCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20gZnJvbSAnLi4vQm9keVNlY3Rpb24vQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tJztcbmltcG9ydCBCb2R5U2VjdGlvbiBmcm9tICcuLi9Cb2R5U2VjdGlvbi9Cb2R5U2VjdGlvbic7XG5pbXBvcnQgbGlzdE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCB7IGdldExhdGVzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGFwcDoge1xuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgfSxcbiAgYm9keToge1xuICAgIGZvbnRTaXplOiBcIjI4cHhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXg6IDEsXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXG4gIH0sXG4gIGZvb3Rlcjoge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgIGJvcmRlclRvcDogXCI0cHggc29saWQgZGFya2JsdWVcIixcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHpJbmRleDogMSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgbG9nT3V0OiAoKSA9PiB7fSxcblxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9nT3V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdENvdXJzZXM6IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ0VTNicsIGNyZWRpdDogNjAgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogJ1dlYnBhY2snLCBjcmVkaXQ6IDIwIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdSZWFjdCcsIGNyZWRpdDogNDAgfSxcbiAgICAgIF0sXG4gICAgICBsaXN0Tm90aWZpY2F0aW9uczogW1xuICAgICAgICB7IGlkOiAxLCB0eXBlOiAnZGVmYXVsdCcsIHZhbHVlOiAnTmV3IGNvdXJzZSBhdmFpbGFibGUnIH0sXG4gICAgICAgIHsgaWQ6IDIsIHR5cGU6ICd1cmdlbnQnLCB2YWx1ZTogJ05ldyByZXN1bWUgYXZhaWxhYmxlJyB9LFxuICAgICAgICB7IGlkOiAzLCB0eXBlOiAndXJnZW50JywgaHRtbDogeyBfX2h0bWw6IGdldExhdGVzdE5vdGlmaWNhdGlvbigpIH0gfSxcbiAgICAgIF0sXG4gICAgICBkaXNwbGF5RHJhd2VyOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRGlzcGxheURyYXdlciA9IHRoaXMuaGFuZGxlRGlzcGxheURyYXdlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSGlkZURyYXdlciA9IHRoaXMuaGFuZGxlSGlkZURyYXdlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG5cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gJ2gnKSB7XG4gICAgICBhbGVydCgnTG9nZ2luZyB5b3Ugb3V0Jyk7XG4gICAgICB0aGlzLnByb3BzLmxvZ091dCgpO1xuICAgIH1cbiAgfVxuICAgIGhhbmRsZURpc3BsYXlEcmF3ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheURyYXdlcjogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIGhhbmRsZUhpZGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheURyYXdlcjogZmFsc2UgfSk7XG4gICAgfTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsaXN0Q291cnNlcywgbGlzdE5vdGlmaWNhdGlvbnMsIGRpc3BsYXlEcmF3ZXIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE5vdGlmaWNhdGlvbiBsaXN0Tm90aWZpY2F0aW9ucz17bGlzdE5vdGlmaWNhdGlvbnN9IFxuICAgICAgICBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufVxuICAgICAgICBkaXNwbGF5RHJhd2VyPXtkaXNwbGF5RHJhd2VyfVxuICAgICAgICBoYW5kbGVEaXNwbGF5RHJhd2VyPXt0aGlzLmhhbmRsZURpc3BsYXlEcmF3ZXJ9XG4gICAgICAgIGhhbmRsZUhpZGVEcmF3ZXI9e3RoaXMuaGFuZGxlSGlkZURyYXdlcn1cbiAgICAgICAgbWFya05vdGlmaWNhdGlvbkFzUmVhZD17dGhpcy5tYXJrTm90aWZpY2F0aW9uQXNSZWFkfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5hcHApfT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmJvZHkpfT5cbiAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxuICAgICAgICAgICAgICA8Qm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tIHRpdGxlPVwiQ291cnNlIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8Q291cnNlTGlzdCBsaXN0Q291cnNlcz17bGlzdENvdXJzZXN9IC8+XG4gICAgICAgICAgICAgIDwvQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSB0aXRsZT1cIkxvZ2luIHRvIGNvbnRpbnVlXCI+XG4gICAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICAgIDwvQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCb2R5U2VjdGlvbiB0aXRsZT1cIk5ld3MgZnJvbSB0aGUgU2Nob29sXCI+XG4gICAgICAgICAgICAgIDxwPlNvbWUgcmFuZG9tIHRleHQ8L3A+XG4gICAgICAgICAgICA8L0JvZHlTZWN0aW9uPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb290ZXIpfT5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGl0ZW06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCA4cHgnLFxuICB9LFxuICBkZWZhdWx0UHJpb3JpdHk6IHtcbiAgICBjb2xvcjogJ2JsdWUnLFxuICB9LFxuICB1cmdlbnRQcmlvcml0eToge1xuICAgIGNvbG9yOiAncmVkJyxcbiAgfSxcbn0pO1xuXG5jbGFzcyBOb3RpZmljYXRpb25JdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGUsIHZhbHVlLCBodG1sLCBtYXJrQXNSZWFkLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBsaXN0SXRlbTtcblxuICAgIGlmIChodG1sKSB7XG4gICAgICBsaXN0SXRlbSA9IChcbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLml0ZW0sIHR5cGUgPT09ICd1cmdlbnQnID8gc3R5bGVzLnVyZ2VudFByaW9yaXR5IDogc3R5bGVzLmRlZmF1bHRQcmlvcml0eSl9XG4gICAgICAgICAgZGF0YS1ub3RpZmljYXRpb24tdHlwZT17dHlwZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtYXJrQXNSZWFkKGlkKX1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17aHRtbH1cbiAgICAgICAgPjwvbGk+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0SXRlbSA9IChcbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLml0ZW0sIHR5cGUgPT09ICd1cmdlbnQnID8gc3R5bGVzLnVyZ2VudFByaW9yaXR5IDogc3R5bGVzLmRlZmF1bHRQcmlvcml0eSl9XG4gICAgICAgICAgZGF0YS1ub3RpZmljYXRpb24tdHlwZT17dHlwZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtYXJrQXNSZWFkKGlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xuICB9XG59XG5cbk5vdGlmaWNhdGlvbkl0ZW0ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBodG1sOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIF9faHRtbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIG1hcmtBc1JlYWQ6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuTm90aWZpY2F0aW9uSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbHVlOiAnJyxcbiAgaHRtbDogbnVsbCxcbiAgbWFya0FzUmVhZDogKCkgPT4ge30sXG4gIGlkOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbkl0ZW1TaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaHRtbDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgX19odG1sOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIH0pO1xuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbVNoYXBlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBpbXBvcnQgJy4vTm90aWZpY2F0aW9ucy5jc3MnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW0gZnJvbSAnLi9Ob3RpZmljYXRpb25JdGVtJztcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtU2hhcGUgZnJvbSAnLi9Ob3RpZmljYXRpb25JdGVtU2hhcGUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcblxuY29uc3Qgb3BhY2l0eSA9IHtcbiAgJzAlJzoge1xuICAgIG9wYWNpdHk6IDAuNSxcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbn07XG5cbmNvbnN0IGJvdW5jZSA9IHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXG4gIH0sXG4gICc1MCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDVkZWcpJyxcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC01ZGVnKScsXG4gIH0sXG59O1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5ub3RpZmljYXRpb25zOiB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB0b3A6ICcwJyxcbiAgcmlnaHQ6ICcwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250U2l6ZTogJzIwcHgnLFxufSxcbk5vdGlmaWNhdGlvbk9wZW5lZDoge1xuICB0b3A6ICcwJyxcbiAgbGVmdDogJzAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJywgXG4gIHBhZGRpbmc6ICcwJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGZvbnRTaXplOiAnMjBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxufSxcblxubWVudUl0ZW06IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgdG9wOiAnMjBweCcsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICB6SW5kZXg6IDEsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGFuaW1hdGlvbk5hbWU6IFtvcGFjaXR5LCBib3VuY2VdLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFsnMXMnLCAnMC4ycyddLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgfSxcbiAgfSxcbiAgaGlkZU1lbnVJdGVtOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuXG5kZWZhdWx0Tm90aWZpY2F0aW9uU3R5bGU6IHtcbiAgY29sb3I6ICdibHVlJyxcbn0sXG51cmdlbnROb3RpZmljYXRpb25TdHlsZToge1xuICBjb2xvcjogJ3JlZCcsXG59LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbnMoeyBkaXNwbGF5RHJhd2VyLCBsaXN0Tm90aWZpY2F0aW9ucywgaGFuZGxlRGlzcGxheURyYXdlciwgaGFuZGxlSGlkZURyYXdlciwgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUhpZGVEcmF3ZXIoKTtcbiAgICBjb25zb2xlLmxvZygnQ2xvc2UgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNMb2dnZWRJbiAmJiAhZGlzcGxheURyYXdlciAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5tZW51SXRlbSl9PllvdXIgbm90aWZpY2F0aW9uczwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtkaXNwbGF5RHJhd2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMubm90aWZpY2F0aW9ucywgZGlzcGxheURyYXdlciAmJiBzdHlsZXMuTm90aWZpY2F0aW9uT3BlbmVkKX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICA+IENsb3NlXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnIH19PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwPk5vIG5ldyBub3RpZmljYXRpb24gZm9yIG5vdzwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgbGlzdCBvZiBub3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICBpZD17bm90aWZpY2F0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgIHR5cGU9e25vdGlmaWNhdGlvbi50eXBlfVxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RpZmljYXRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgaHRtbD17bm90aWZpY2F0aW9uLmh0bWx9XG4gICAgICAgICAgICAgICAgICAgbWFya0FzUmVhZD17bWFya05vdGlmaWNhdGlvbkFzUmVhZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbk5vdGlmaWNhdGlvbnMucHJvcFR5cGVzID0ge1xuICBkaXNwbGF5RHJhd2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGlzdE5vdGlmaWNhdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE5vdGlmaWNhdGlvbkl0ZW1TaGFwZSksXG4gIGhhbmRsZURpc3BsYXlEcmF3ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBoYW5kbGVIaWRlRHJhd2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIG1hcmtOb3RpZmljYXRpb25Bc1JlYWQ6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuTm90aWZpY2F0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IGZhbHNlLFxuICBsaXN0Tm90aWZpY2F0aW9uczogW10sXG4gIGhhbmRsZURpc3BsYXlEcmF3ZXI6ICgpID0+IHt9LFxuICBoYW5kbGVIaWRlRHJhd2VyOiAoKSA9PiB7fSxcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIG1hcmtOb3RpZmljYXRpb25Bc1JlYWQ6ICgpID0+IHt9LFxufTtcblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NjQ4NzQ5MWQzMWY1MDEwNmIwZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlU2hlZXQiLCJjc3MiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2dpbiIsIk5vdGlmaWNhdGlvbiIsIlByb3BUeXBlcyIsIkNvdXJzZUxpc3QiLCJCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20iLCJCb2R5U2VjdGlvbiIsImxpc3ROb3RpZmljYXRpb25zIiwiZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIiwic3R5bGVzIiwiY3JlYXRlIiwiYXBwIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJib2R5IiwiZm9udFNpemUiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInBhZGRpbmciLCJmb290ZXIiLCJmb250U3R5bGUiLCJib3JkZXJUb3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIkFwcCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9kZWZpbmVQcm9wZXJ0eSIsInNldFN0YXRlIiwiZGlzcGxheURyYXdlciIsInN0YXRlIiwibGlzdENvdXJzZXMiLCJpZCIsIm5hbWUiLCJjcmVkaXQiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwiX19odG1sIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVEaXNwbGF5RHJhd2VyIiwiaGFuZGxlSGlkZURyYXdlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdHJsS2V5IiwiYWxlcnQiLCJsb2dPdXQiLCJyZW5kZXIiLCJpc0xvZ2dlZEluIiwiX3RoaXMkc3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJDb21wb25lbnQiLCJib29sIiwiZnVuYyIsIlB1cmVDb21wb25lbnQiLCJpdGVtIiwid2lkdGgiLCJib3JkZXJCb3R0b20iLCJkZWZhdWx0UHJpb3JpdHkiLCJjb2xvciIsInVyZ2VudFByaW9yaXR5IiwiTm90aWZpY2F0aW9uSXRlbSIsIl9QdXJlQ29tcG9uZW50IiwiYXJndW1lbnRzIiwiX3RoaXMkcHJvcHMiLCJtYXJrQXNSZWFkIiwibGlzdEl0ZW0iLCJvbkNsaWNrIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJOb3RpZmljYXRpb25JdGVtU2hhcGUiLCJvcGFjaXR5IiwiYm91bmNlIiwidHJhbnNmb3JtIiwibm90aWZpY2F0aW9ucyIsInRvcCIsImhlaWdodCIsImJvcmRlciIsImJveFNpemluZyIsImp1c3RpZnlDb250ZW50IiwiTm90aWZpY2F0aW9uT3BlbmVkIiwibWVudUl0ZW0iLCJjdXJzb3IiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImhpZGVNZW51SXRlbSIsImRlZmF1bHROb3RpZmljYXRpb25TdHlsZSIsInVyZ2VudE5vdGlmaWNhdGlvblN0eWxlIiwiTm90aWZpY2F0aW9ucyIsIl9yZWYiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImJhY2tncm91bmQiLCJvdXRsaW5lIiwibGVuZ3RoIiwibWFwIiwibm90aWZpY2F0aW9uIiwiYXJyYXlPZiJdLCJzb3VyY2VSb290IjoiIn0=