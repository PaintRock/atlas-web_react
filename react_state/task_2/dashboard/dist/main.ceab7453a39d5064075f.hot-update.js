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
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.notifications, dislplayDrawer && styles.NotificationOpened)
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
      type: notification.type,
      value: notification.value,
      html: notification.html
    });
  })))));
}
Notifications.propTypes = {
  displayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  listNotifications: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(_NotificationItemShape__WEBPACK_IMPORTED_MODULE_3__["default"]),
  handleDisplayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  handleHideDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: function handleDisplayDrawer() {},
  handleHideDrawer: function handleHideDrawer() {},
  isLoggedIn: false
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a75918e2c5bce74173b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsZUFDeENBLDBEQUFBLGFBQ0c0RSxpQkFBaUIsQ0FBQ2EsR0FBRyxDQUFDLFVBQUNDLFlBQVk7SUFBQSxvQkFDbEMxRiwwREFBQSxDQUFDZSx5REFBZ0I7TUFDZk8sR0FBRyxFQUFFb0UsWUFBWSxDQUFDNUQsRUFBRztNQUNyQkgsSUFBSSxFQUFFK0QsWUFBWSxDQUFDL0QsSUFBSztNQUN4QkosS0FBSyxFQUFFbUUsWUFBWSxDQUFDbkUsS0FBTTtNQUMxQkssSUFBSSxFQUFFOEQsWUFBWSxDQUFDOUQ7SUFBSyxDQUN6QixDQUFDO0VBQUEsQ0FDSCxDQUNDLENBQ0osQ0FFRCxDQUVQLENBQUM7QUFFUDtBQUVBNkMsYUFBYSxDQUFDckMsU0FBUyxHQUFHO0VBQ3hCdUMsYUFBYSxFQUFFekUsd0RBQWM7RUFDN0IwRSxpQkFBaUIsRUFBRTFFLHlEQUFpQixDQUFDMkMsOERBQXFCLENBQUM7RUFDM0RnQyxtQkFBbUIsRUFBRTNFLHdEQUFjO0VBQ25DNEUsZ0JBQWdCLEVBQUU1RSx3REFBYztFQUNoQzZFLFVBQVUsRUFBRTdFLHdEQUFjeUY7QUFDNUIsQ0FBQztBQUVEbEIsYUFBYSxDQUFDN0IsWUFBWSxHQUFHO0VBQzNCK0IsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLGlCQUFpQixFQUFFLEVBQUU7RUFDckJDLG1CQUFtQixFQUFFLFNBQUFBLG9CQUFBLEVBQU0sQ0FBQyxDQUFDO0VBQzdCQyxnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBQSxFQUFNLENBQUMsQ0FBQztFQUMxQkMsVUFBVSxFQUFFO0FBQ2QsQ0FBQzs7Ozs7Ozs7VUNwSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25JdGVtLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbkl0ZW1TaGFwZS5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBpdGVtOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLFxuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgcGFkZGluZzogJzEwcHggOHB4JyxcbiAgfSxcbiAgZGVmYXVsdFByaW9yaXR5OiB7XG4gICAgY29sb3I6ICdibHVlJyxcbiAgfSxcbiAgdXJnZW50UHJpb3JpdHk6IHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gIH0sXG59KTtcblxuY2xhc3MgTm90aWZpY2F0aW9uSXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSwgaHRtbCwgbWFya0FzUmVhZCwgaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgbGlzdEl0ZW07XG5cbiAgICBpZiAoaHRtbCkge1xuICAgICAgbGlzdEl0ZW0gPSAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5pdGVtLCB0eXBlID09PSAndXJnZW50JyA/IHN0eWxlcy51cmdlbnRQcmlvcml0eSA6IHN0eWxlcy5kZWZhdWx0UHJpb3JpdHkpfVxuICAgICAgICAgIGRhdGEtbm90aWZpY2F0aW9uLXR5cGU9e3R5cGV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbWFya0FzUmVhZChpZCl9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2h0bWx9XG4gICAgICAgID48L2xpPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdEl0ZW0gPSAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5pdGVtLCB0eXBlID09PSAndXJnZW50JyA/IHN0eWxlcy51cmdlbnRQcmlvcml0eSA6IHN0eWxlcy5kZWZhdWx0UHJpb3JpdHkpfVxuICAgICAgICAgIGRhdGEtbm90aWZpY2F0aW9uLXR5cGU9e3R5cGV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbWFya0FzUmVhZChpZCl9XG4gICAgICAgID5cbiAgICAgICAgICB7dmFsdWV9XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0SXRlbTtcbiAgfVxufVxuXG5Ob3RpZmljYXRpb25JdGVtLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaHRtbDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBfX2h0bWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBtYXJrQXNSZWFkOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbk5vdGlmaWNhdGlvbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICB2YWx1ZTogJycsXG4gIGh0bWw6IG51bGwsXG4gIG1hcmtBc1JlYWQ6ICgpID0+IHt9LFxuICBpZDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkl0ZW07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBOb3RpZmljYXRpb25JdGVtU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGh0bWw6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIF9faHRtbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgICB9KTtcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkl0ZW1TaGFwZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gaW1wb3J0ICcuL05vdGlmaWNhdGlvbnMuY3NzJztcbmltcG9ydCB7IGdldExhdGVzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtIGZyb20gJy4vTm90aWZpY2F0aW9uSXRlbSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbVNoYXBlIGZyb20gJy4vTm90aWZpY2F0aW9uSXRlbVNoYXBlJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5cbmNvbnN0IG9wYWNpdHkgPSB7XG4gICcwJSc6IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuXG5jb25zdCBib3VuY2UgPSB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxuICB9LFxuICAnNTAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg1ZGVnKScsXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNWRlZyknLFxuICB9LFxufTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xubm90aWZpY2F0aW9uczoge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAnMCcsXG4gIHJpZ2h0OiAnMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFNpemU6ICcyMHB4Jyxcbn0sXG5Ob3RpZmljYXRpb25PcGVuZWQ6IHtcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsIFxuICBwYWRkaW5nOiAnMCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBmb250U2l6ZTogJzIwcHgnLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn0sXG5cbm1lbnVJdGVtOiB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIHRvcDogJzIwcHgnLFxuICByaWdodDogJzQwcHgnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgekluZGV4OiAxLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBhbmltYXRpb25OYW1lOiBbb3BhY2l0eSwgYm91bmNlXSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBbJzFzJywgJzAuMnMnXSxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgIH0sXG4gIH0sXG4gIGhpZGVNZW51SXRlbToge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcblxuZGVmYXVsdE5vdGlmaWNhdGlvblN0eWxlOiB7XG4gIGNvbG9yOiAnYmx1ZScsXG59LFxudXJnZW50Tm90aWZpY2F0aW9uU3R5bGU6IHtcbiAgY29sb3I6ICdyZWQnLFxufSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25zKHsgZGlzcGxheURyYXdlciwgbGlzdE5vdGlmaWNhdGlvbnMsIGhhbmRsZURpc3BsYXlEcmF3ZXIsIGhhbmRsZUhpZGVEcmF3ZXIsIGlzTG9nZ2VkSW4gfSkge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBoYW5kbGVIaWRlRHJhd2VyKCk7XG4gICAgY29uc29sZS5sb2coJ0Nsb3NlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzTG9nZ2VkSW4gJiYgIWRpc3BsYXlEcmF3ZXIgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMubWVudUl0ZW0pfT5Zb3VyIG5vdGlmaWNhdGlvbnM8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7ZGlzcGxheURyYXdlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLm5vdGlmaWNhdGlvbnMsIGRpc2xwbGF5RHJhd2VyICYmIHN0eWxlcy5Ob3RpZmljYXRpb25PcGVuZWQpfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgdG9wOiAnMjBweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgID4gQ2xvc2VcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcgfX0+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7bGlzdE5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPHA+Tm8gbmV3IG5vdGlmaWNhdGlvbiBmb3Igbm93PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cD5IZXJlIGlzIHRoZSBsaXN0IG9mIG5vdGlmaWNhdGlvbnM8L3A+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bGlzdE5vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25JdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtub3RpZmljYXRpb24udHlwZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGlmaWNhdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgaHRtbD17bm90aWZpY2F0aW9uLmh0bWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5Ob3RpZmljYXRpb25zLnByb3BUeXBlcyA9IHtcbiAgZGlzcGxheURyYXdlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGxpc3ROb3RpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihOb3RpZmljYXRpb25JdGVtU2hhcGUpLFxuICBoYW5kbGVEaXNwbGF5RHJhd2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlSGlkZURyYXdlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuTm90aWZpY2F0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IGZhbHNlLFxuICBsaXN0Tm90aWZpY2F0aW9uczogW10sXG4gIGhhbmRsZURpc3BsYXlEcmF3ZXI6ICgpID0+IHt9LFxuICBoYW5kbGVIaWRlRHJhd2VyOiAoKSA9PiB7fSxcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmE3NTkxOGUyYzViY2U3NDE3M2JcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiU3R5bGVTaGVldCIsImNzcyIsInN0eWxlcyIsImNyZWF0ZSIsIml0ZW0iLCJ3aWR0aCIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwicGFkZGluZyIsImRlZmF1bHRQcmlvcml0eSIsImNvbG9yIiwidXJnZW50UHJpb3JpdHkiLCJOb3RpZmljYXRpb25JdGVtIiwiX1B1cmVDb21wb25lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInByb3BzIiwidHlwZSIsImh0bWwiLCJtYXJrQXNSZWFkIiwiaWQiLCJsaXN0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJfX2h0bWwiLCJmdW5jIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwiTm90aWZpY2F0aW9uSXRlbVNoYXBlIiwiZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIiwib3BhY2l0eSIsImJvdW5jZSIsInRyYW5zZm9ybSIsIm5vdGlmaWNhdGlvbnMiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2l6aW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJOb3RpZmljYXRpb25PcGVuZWQiLCJsZWZ0IiwibWVudUl0ZW0iLCJjdXJzb3IiLCJ6SW5kZXgiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImhpZGVNZW51SXRlbSIsImRlZmF1bHROb3RpZmljYXRpb25TdHlsZSIsInVyZ2VudE5vdGlmaWNhdGlvblN0eWxlIiwiTm90aWZpY2F0aW9ucyIsIl9yZWYiLCJkaXNwbGF5RHJhd2VyIiwibGlzdE5vdGlmaWNhdGlvbnMiLCJoYW5kbGVEaXNwbGF5RHJhd2VyIiwiaGFuZGxlSGlkZURyYXdlciIsImlzTG9nZ2VkSW4iLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJGcmFnbWVudCIsImRpc2xwbGF5RHJhd2VyIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwib3V0bGluZSIsImxlbmd0aCIsIm1hcCIsIm5vdGlmaWNhdGlvbiIsImJvb2wiLCJhcnJheU9mIl0sInNvdXJjZVJvb3QiOiIifQ==