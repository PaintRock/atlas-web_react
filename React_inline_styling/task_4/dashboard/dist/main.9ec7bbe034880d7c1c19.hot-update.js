"use strict";
self["webpackHotUpdatedashboard"]("main",{

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationItem */ "./src/Notifications/NotificationItem.js");
/* harmony import */ var _NotificationItemShape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationItemShape */ "./src/Notifications/NotificationItemShape.js");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login/Login */ "./src/Login/Login.js");


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
    listNotifications = _ref.listNotifications;
  var handleClick = function handleClick() {
    console.log('Close button has been clicked');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_Login_Login__WEBPACK_IMPORTED_MODULE_5__["default"])() && !displayDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.menuItem)
  }, "Your notifications"), displayDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.notifications, styles.NotificationOpened)
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '30px'
    }
  }, "\xD7")), listNotifications.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No new notification for now") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Here is the list of notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, listNotifications.map(function (notification) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: notification.id,
      type: notification.type,
      value: notification.value,
      html: notification.html
    });
  })))));
}
Notifications.propTypes = {
  displayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  listNotifications: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(_NotificationItemShape__WEBPACK_IMPORTED_MODULE_3__["default"])
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1d36f8db48df1daf3e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU0RCxZQUFZLENBQUM1RCxJQUFLO01BQ3hCSixLQUFLLEVBQUVnRSxZQUFZLENBQUNoRSxLQUFNO01BQzFCSyxJQUFJLEVBQUUyRCxZQUFZLENBQUMzRDtJQUFLLENBQ3pCLENBQUM7RUFBQSxDQUNILENBQ0MsQ0FDSixDQUVELENBRVAsQ0FBQztBQUVQO0FBRUE4QyxhQUFhLENBQUN0QyxTQUFTLEdBQUc7RUFDeEJ3QyxhQUFhLEVBQUUxRSx3REFBYztFQUM3QjJFLGlCQUFpQixFQUFFM0UseURBQWlCLENBQUMyQyw4REFBcUI7QUFDNUQsQ0FBQztBQUVENkIsYUFBYSxDQUFDOUIsWUFBWSxHQUFHO0VBQzNCZ0MsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLGlCQUFpQixFQUFFO0FBQ3JCLENBQUM7Ozs7Ozs7O1VDOUlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25JdGVtU2hhcGUuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgaXRlbToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDhweCcsXG4gIH0sXG4gIGRlZmF1bHRQcmlvcml0eToge1xuICAgIGNvbG9yOiAnYmx1ZScsXG4gIH0sXG4gIHVyZ2VudFByaW9yaXR5OiB7XG4gICAgY29sb3I6ICdyZWQnLFxuICB9LFxufSk7XG5cbmNsYXNzIE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUsIGh0bWwsIG1hcmtBc1JlYWQsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGxpc3RJdGVtO1xuXG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIGxpc3RJdGVtID0gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuaXRlbSwgdHlwZSA9PT0gJ3VyZ2VudCcgPyBzdHlsZXMudXJnZW50UHJpb3JpdHkgOiBzdHlsZXMuZGVmYXVsdFByaW9yaXR5KX1cbiAgICAgICAgICBkYXRhLW5vdGlmaWNhdGlvbi10eXBlPXt0eXBlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1hcmtBc1JlYWQoaWQpfVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtodG1sfVxuICAgICAgICA+PC9saT5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RJdGVtID0gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuaXRlbSwgdHlwZSA9PT0gJ3VyZ2VudCcgPyBzdHlsZXMudXJnZW50UHJpb3JpdHkgOiBzdHlsZXMuZGVmYXVsdFByaW9yaXR5KX1cbiAgICAgICAgICBkYXRhLW5vdGlmaWNhdGlvbi10eXBlPXt0eXBlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1hcmtBc1JlYWQoaWQpfVxuICAgICAgICA+XG4gICAgICAgICAge3ZhbHVlfVxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gIH1cbn1cblxuTm90aWZpY2F0aW9uSXRlbS5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGh0bWw6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgX19odG1sOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgbWFya0FzUmVhZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5Ob3RpZmljYXRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFsdWU6ICcnLFxuICBodG1sOiBudWxsLFxuICBtYXJrQXNSZWFkOiAoKSA9PiB7fSxcbiAgaWQ6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25JdGVtO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgTm90aWZpY2F0aW9uSXRlbVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBodG1sOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBfX2h0bWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgfSk7XG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25JdGVtU2hhcGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIGltcG9ydCAnLi9Ob3RpZmljYXRpb25zLmNzcyc7XG5pbXBvcnQgeyBnZXRMYXRlc3ROb3RpZmljYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tICcuL05vdGlmaWNhdGlvbkl0ZW0nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW1TaGFwZSBmcm9tICcuL05vdGlmaWNhdGlvbkl0ZW1TaGFwZSc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luJztcblxuY29uc3Qgb3BhY2l0eSA9IHtcbiAgJzAlJzoge1xuICAgIG9wYWNpdHk6IDAuNSxcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbn07XG5cbmNvbnN0IGJvdW5jZSA9IHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXG4gIH0sXG4gICc1MCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDVkZWcpJyxcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC01ZGVnKScsXG4gIH0sXG59O1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5ub3RpZmljYXRpb25zOiB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB0b3A6ICcwJyxcbiAgcmlnaHQ6ICcwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250U2l6ZTogJzIwcHgnLFxufSxcbk5vdGlmaWNhdGlvbk9wZW5lZDoge1xuICB0b3A6ICcwJyxcbiAgbGVmdDogJzAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJywgXG4gIHBhZGRpbmc6ICcwJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGZvbnRTaXplOiAnMjBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxufSxcblxubWVudUl0ZW06IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgdG9wOiAnMjBweCcsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICB6SW5kZXg6IDEsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGFuaW1hdGlvbk5hbWU6IFtvcGFjaXR5LCBib3VuY2VdLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFsnMXMnLCAnMC4ycyddLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgfSxcbiAgfSxcbiAgaGlkZU1lbnVJdGVtOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuXG5kZWZhdWx0Tm90aWZpY2F0aW9uU3R5bGU6IHtcbiAgY29sb3I6ICdibHVlJyxcbn0sXG51cmdlbnROb3RpZmljYXRpb25TdHlsZToge1xuICBjb2xvcjogJ3JlZCcsXG59LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbnMoeyBkaXNwbGF5RHJhd2VyLCBsaXN0Tm90aWZpY2F0aW9ucyB9KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDbG9zZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtMb2dpbigpICYmICFkaXNwbGF5RHJhd2VyICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLm1lbnVJdGVtKX0+WW91ciBub3RpZmljYXRpb25zPC9kaXY+XG4gICAgICApfVxuICAgICAge2Rpc3BsYXlEcmF3ZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5ub3RpZmljYXRpb25zLCBzdHlsZXMuTm90aWZpY2F0aW9uT3BlbmVkKX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnIH19PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwPk5vIG5ldyBub3RpZmljYXRpb24gZm9yIG5vdzwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgbGlzdCBvZiBub3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17bm90aWZpY2F0aW9uLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RpZmljYXRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGh0bWw9e25vdGlmaWNhdGlvbi5odG1sfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuTm90aWZpY2F0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IFByb3BUeXBlcy5ib29sLFxuICBsaXN0Tm90aWZpY2F0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoTm90aWZpY2F0aW9uSXRlbVNoYXBlKSxcbn07XG5cbk5vdGlmaWNhdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5RHJhd2VyOiBmYWxzZSxcbiAgbGlzdE5vdGlmaWNhdGlvbnM6IFtdLFxufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQxZDM2ZjhkYjQ4ZGYxZGFmM2UwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlN0eWxlU2hlZXQiLCJjc3MiLCJzdHlsZXMiLCJjcmVhdGUiLCJpdGVtIiwid2lkdGgiLCJib3JkZXJCb3R0b20iLCJmb250U2l6ZSIsInBhZGRpbmciLCJkZWZhdWx0UHJpb3JpdHkiLCJjb2xvciIsInVyZ2VudFByaW9yaXR5IiwiTm90aWZpY2F0aW9uSXRlbSIsIl9QdXJlQ29tcG9uZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJwcm9wcyIsInR5cGUiLCJodG1sIiwibWFya0FzUmVhZCIsImlkIiwibGlzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiX19odG1sIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsIk5vdGlmaWNhdGlvbkl0ZW1TaGFwZSIsImdldExhdGVzdE5vdGlmaWNhdGlvbiIsIkxvZ2luIiwib3BhY2l0eSIsImJvdW5jZSIsInRyYW5zZm9ybSIsIm5vdGlmaWNhdGlvbnMiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2l6aW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJOb3RpZmljYXRpb25PcGVuZWQiLCJsZWZ0IiwibWVudUl0ZW0iLCJjdXJzb3IiLCJ6SW5kZXgiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImhpZGVNZW51SXRlbSIsImRlZmF1bHROb3RpZmljYXRpb25TdHlsZSIsInVyZ2VudE5vdGlmaWNhdGlvblN0eWxlIiwiTm90aWZpY2F0aW9ucyIsIl9yZWYiLCJkaXNwbGF5RHJhd2VyIiwibGlzdE5vdGlmaWNhdGlvbnMiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJGcmFnbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm91dGxpbmUiLCJsZW5ndGgiLCJtYXAiLCJub3RpZmljYXRpb24iLCJib29sIiwiYXJyYXlPZiJdLCJzb3VyY2VSb290IjoiIn0=