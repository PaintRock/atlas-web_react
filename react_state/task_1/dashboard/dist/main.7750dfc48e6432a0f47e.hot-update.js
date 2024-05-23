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
        handleHideDrawer: this.handleHideDrawer
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
  isLoggedIn: false,
  logOut: function logOut() {}
});
_defineProperty(App, "propTypes", {
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  logOut: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f367c9974384347789bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NzUwZGZjNDhlNjQzMmEwZjQ3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDSDtBQUNBO0FBQ0g7QUFDdUI7QUFDMUI7QUFDa0I7QUFDZ0M7QUFDaEM7QUFDVTtBQUNSO0FBR3ZELElBQU1hLE1BQU0sR0FBR1osaURBQVUsQ0FBQ2EsTUFBTSxDQUFDO0VBQy9CQyxHQUFHLEVBQUU7SUFDSEMsU0FBUyxFQUFFLE1BQU07SUFDakJDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCQyxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLElBQUksRUFBRTtJQUNKQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsVUFBVSxFQUFFLFFBQVE7SUFDcEJDLElBQUksRUFBRSxDQUFDO0lBQ1BDLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0lBQ05ULFNBQVMsRUFBRSxRQUFRO0lBQ25CSyxRQUFRLEVBQUUsTUFBTTtJQUNoQkssU0FBUyxFQUFFLFFBQVE7SUFDbkJGLE9BQU8sRUFBRSxNQUFNO0lBQ2ZHLFNBQVMsRUFBRSxvQkFBb0I7SUFDL0JDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCQyxNQUFNLEVBQUUsQ0FBQztJQUNUQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxLQUFLLEVBQUUsQ0FBQztJQUNSQyxlQUFlLEVBQUUsT0FBTztJQUN4QkMsTUFBTSxFQUFFO0VBQ1Y7QUFDRixDQUFDLENBQUM7QUFBQyxJQUVHQyxHQUFHLDBCQUFBQyxnQkFBQTtFQVlQLFNBQUFELElBQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixHQUFBO0lBQ2pCRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsR0FBQSxHQUFNRSxLQUFLO0lBQUVJLGVBQUEsQ0FBQUgsS0FBQSx5QkFrQ1MsWUFBTTtNQUMxQkEsS0FBQSxDQUFL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R04sR0FBRyxlQU9ZO0VBQ2pCbUMsVUFBVSxFQUFFOUQseURBQWM7RUFDMUI0RCxNQUFNLEVBQUU1RCx5REFBY3NFO0FBQ3hCLENBQUM7QUFrRkgsaUVBQWUzQyxHQUFHOzs7Ozs7OztVQ3RJbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlci5qcyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4vTG9naW4uanMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMuanMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gJy4uL0NvdXJzZUxpc3QvQ291cnNlTGlzdC5qcyc7XG5pbXBvcnQgQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tIGZyb20gJy4uL0JvZHlTZWN0aW9uL0JvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSc7XG5pbXBvcnQgQm9keVNlY3Rpb24gZnJvbSAnLi4vQm9keVNlY3Rpb24vQm9keVNlY3Rpb24nO1xuaW1wb3J0IGxpc3ROb3RpZmljYXRpb25zIGZyb20gJy4uL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBnZXRMYXRlc3ROb3RpZmljYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBhcHA6IHtcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gIH0sXG4gIGJvZHk6IHtcbiAgICBmb250U2l6ZTogXCIyOHB4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4OiAxLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICBib3JkZXJUb3A6IFwiNHB4IHNvbGlkIGRhcmtibHVlXCIsXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICB6SW5kZXg6IDEsXG4gIH0sXG59KTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICBsb2dPdXQ6ICgpID0+IHt9LFxuXG4gIH07XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2dPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0Q291cnNlczogW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnRVM2JywgY3JlZGl0OiA2MCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnV2VicGFjaycsIGNyZWRpdDogMjAgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ1JlYWN0JywgY3JlZGl0OiA0MCB9LFxuICAgICAgXSxcbiAgICAgIGxpc3ROb3RpZmljYXRpb25zOiBbXG4gICAgICAgIHsgaWQ6IDEsIHR5cGU6ICdkZWZhdWx0JywgdmFsdWU6ICdOZXcgY291cnNlIGF2YWlsYWJsZScgfSxcbiAgICAgICAgeyBpZDogMiwgdHlwZTogJ3VyZ2VudCcsIHZhbHVlOiAnTmV3IHJlc3VtZSBhdmFpbGFibGUnIH0sXG4gICAgICAgIHsgaWQ6IDMsIHR5cGU6ICd1cmdlbnQnLCBodG1sOiB7IF9faHRtbDogZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uKCkgfSB9LFxuICAgICAgXSxcbiAgICAgIGRpc3BsYXlEcmF3ZXI6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEaXNwbGF5RHJhd2VyID0gdGhpcy5oYW5kbGVEaXNwbGF5RHJhd2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVIaWRlRHJhd2VyID0gdGhpcy5oYW5kbGVIaWRlRHJhd2VyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICB9XG5cblxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQua2V5ID09PSAnaCcpIHtcbiAgICAgIGFsZXJ0KCdMb2dnaW5nIHlvdSBvdXQnKTtcbiAgICAgIHRoaXMucHJvcHMubG9nT3V0KCk7XG4gICAgfVxuICB9XG4gICAgaGFuZGxlRGlzcGxheURyYXdlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5RHJhd2VyOiB0cnVlIH0pO1xuICAgIH07XG4gICAgaGFuZGxlSGlkZURyYXdlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5RHJhd2VyOiBmYWxzZSB9KTtcbiAgICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxpc3RDb3Vyc2VzLCBsaXN0Tm90aWZpY2F0aW9ucywgZGlzcGxheURyYXdlciB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Tm90aWZpY2F0aW9uIGxpc3ROb3RpZmljYXRpb25zPXtsaXN0Tm90aWZpY2F0aW9uc30gXG4gICAgICAgIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59XG4gICAgICAgIGRpc3BsYXlEcmF3ZXI9e2Rpc3BsYXlEcmF3ZXJ9XG4gICAgICAgIGhhbmRsZURpc3BsYXlEcmF3ZXI9e3RoaXMuaGFuZGxlRGlzcGxheURyYXdlcn1cbiAgICAgICAgaGFuZGxlSGlkZURyYXdlcj17dGhpcy5oYW5kbGVIaWRlRHJhd2VyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5hcHApfT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmJvZHkpfT5cbiAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxuICAgICAgICAgICAgICA8Qm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tIHRpdGxlPVwiQ291cnNlIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8Q291cnNlTGlzdCBsaXN0Q291cnNlcz17bGlzdENvdXJzZXN9IC8+XG4gICAgICAgICAgICAgIDwvQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJvZHlTZWN0aW9uV2l0aE1hcmdpbkJvdHRvbSB0aXRsZT1cIkxvZ2luIHRvIGNvbnRpbnVlXCI+XG4gICAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICAgIDwvQm9keVNlY3Rpb25XaXRoTWFyZ2luQm90dG9tPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCb2R5U2VjdGlvbiB0aXRsZT1cIk5ld3MgZnJvbSB0aGUgU2Nob29sXCI+XG4gICAgICAgICAgICAgIDxwPlNvbWUgcmFuZG9tIHRleHQ8L3A+XG4gICAgICAgICAgICA8L0JvZHlTZWN0aW9uPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5mb290ZXIpfT5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMzY3Yzk5NzQzODQzNDc3ODliZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlU2hlZXQiLCJjc3MiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2dpbiIsIk5vdGlmaWNhdGlvbiIsIlByb3BUeXBlcyIsIkNvdXJzZUxpc3QiLCJCb2R5U2VjdGlvbldpdGhNYXJnaW5Cb3R0b20iLCJCb2R5U2VjdGlvbiIsImxpc3ROb3RpZmljYXRpb25zIiwiZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIiwic3R5bGVzIiwiY3JlYXRlIiwiYXBwIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJib2R5IiwiZm9udFNpemUiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInBhZGRpbmciLCJmb290ZXIiLCJmb250U3R5bGUiLCJib3JkZXJUb3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIkFwcCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9kZWZpbmVQcm9wZXJ0eSIsInNldFN0YXRlIiwiZGlzcGxheURyYXdlciIsInN0YXRlIiwibGlzdENvdXJzZXMiLCJpZCIsIm5hbWUiLCJjcmVkaXQiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwiX19odG1sIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVEaXNwbGF5RHJhd2VyIiwiaGFuZGxlSGlkZURyYXdlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdHJsS2V5IiwiYWxlcnQiLCJsb2dPdXQiLCJyZW5kZXIiLCJpc0xvZ2dlZEluIiwiX3RoaXMkc3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkNvbXBvbmVudCIsImJvb2wiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==