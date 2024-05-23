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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("80b3031d5ac3eb0f1e6e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQ3BCQyxFQUFFLEVBQUU7QUFDTixDQUFDO0FBRUQsaUVBQWVmLGdCQUFnQjs7Ozs7Ozs7VUNuRS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgaXRlbToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDhweCcsXG4gIH0sXG4gIGRlZmF1bHRQcmlvcml0eToge1xuICAgIGNvbG9yOiAnYmx1ZScsXG4gIH0sXG4gIHVyZ2VudFByaW9yaXR5OiB7XG4gICAgY29sb3I6ICdyZWQnLFxuICB9LFxufSk7XG5cbmNsYXNzIE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUsIGh0bWwsIG1hcmtBc1JlYWQsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGxpc3RJdGVtO1xuXG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIGxpc3RJdGVtID0gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuaXRlbSwgdHlwZSA9PT0gJ3VyZ2VudCcgPyBzdHlsZXMudXJnZW50UHJpb3JpdHkgOiBzdHlsZXMuZGVmYXVsdFByaW9yaXR5KX1cbiAgICAgICAgICBkYXRhLW5vdGlmaWNhdGlvbi10eXBlPXt0eXBlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1hcmtBc1JlYWQoaWQpfVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtodG1sfVxuICAgICAgICA+PC9saT5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RJdGVtID0gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NzcyhzdHlsZXMuaXRlbSwgdHlwZSA9PT0gJ3VyZ2VudCcgPyBzdHlsZXMudXJnZW50UHJpb3JpdHkgOiBzdHlsZXMuZGVmYXVsdFByaW9yaXR5KX1cbiAgICAgICAgICBkYXRhLW5vdGlmaWNhdGlvbi10eXBlPXt0eXBlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1hcmtBc1JlYWQoaWQpfVxuICAgICAgICA+XG4gICAgICAgICAge3ZhbHVlfVxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gIH1cbn1cblxuTm90aWZpY2F0aW9uSXRlbS5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGh0bWw6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgX19odG1sOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgbWFya0FzUmVhZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5Ob3RpZmljYXRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFsdWU6ICcnLFxuICBodG1sOiBudWxsLFxuICBtYXJrQXNSZWFkOiAoKSA9PiB7fSxcbiAgaWQ6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25JdGVtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgwYjMwMzFkNWFjM2ViMGYxZTZlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlN0eWxlU2hlZXQiLCJjc3MiLCJzdHlsZXMiLCJjcmVhdGUiLCJpdGVtIiwid2lkdGgiLCJib3JkZXJCb3R0b20iLCJmb250U2l6ZSIsInBhZGRpbmciLCJkZWZhdWx0UHJpb3JpdHkiLCJjb2xvciIsInVyZ2VudFByaW9yaXR5IiwiTm90aWZpY2F0aW9uSXRlbSIsIl9QdXJlQ29tcG9uZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJwcm9wcyIsInR5cGUiLCJodG1sIiwibWFya0FzUmVhZCIsImlkIiwibGlzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiX19odG1sIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=