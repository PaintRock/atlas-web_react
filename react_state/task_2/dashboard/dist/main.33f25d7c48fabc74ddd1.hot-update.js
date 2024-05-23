"use strict";
self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/Header/Header.js":
/*!******************************!*\
  !*** ./src/Header/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_mascot_blue_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/mascot-blue.png */ "./src/assets/mascot-blue.png");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var _App_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App/AppContext */ "./src/App/AppContext.js");
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




var translateSpin = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '10%': {
    transform: 'rotate(-20deg)'
  },
  '20%': {
    transform: 'rotate(40deg)'
  },
  '30%': {
    transform: 'rotate(-50deg)'
  },
  '40%': {
    transform: 'rotate(10deg)'
  },
  '50%': {
    transform: 'rotate(0deg)'
  },
  '60%': {
    transform: 'rotate(180deg)'
  },
  '70%': {
    transform: 'rotate(200deg)'
  },
  '80%': {
    transform: 'rotate(180deg)'
  },
  '90%': {
    transform: 'rotate(200deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
};
var styles = aphrodite__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
  logo: {
    height: '100px',
    pointerEvents: 'none',
    marginRight: '20px',
    animationName: [translateSpin],
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out'
  },
  header: {
    textAlign: 'left'
  },
  appHeader: {
    backgroundColor: 'white',
    minHeight: '20vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: 'calc(3px + 2vmin)',
    color: 'lightcoral',
    marginBottom: '10px',
    borderBottom: '4px solid lightblue',
    paddingBottom: '10px'
  },
  welcome: {
    marginTop: '20px'
  },
  logout: {
    cursor: 'pointer',
    fontStyle: 'italic'
  }
});
var Header = /*#__PURE__*/function (_React$Component) {
  function Header() {
    _classCallCheck(this, Header);
    return _callSuper(this, Header, arguments);
  }
  _inherits(Header, _React$Component);
  return _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
        user = _this$context.user,
        logOut = _this$context.logOut;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.header)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.appHeader)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: _assets_mascot_blue_png__WEBPACK_IMPORTED_MODULE_1__["default"],
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.logo),
        alt: "logo"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "School dashboard")), user.isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.welcome)
      }, "Welcome ", user.email, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.logout),
        onClick: logOut
      }, "(logout)")));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
_defineProperty(Header, "contextType", _App_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

// {/* <a
//    className="App-link"
//    href="https://reactjs.org"
//    target="_blank"
//    rel="noopener noreferrer"
//  >
//    Learn React
//  </a> */}

/***/ }),

/***/ "./src/assets/mascot-blue.png":
/*!************************************!*\
  !*** ./src/assets/mascot-blue.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d64b917d2ba423503b3987cb7e10677e.png");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("099e2bfd534a4d34c1a3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zM2YyNWQ3YzQ4ZmFiYzc0ZGRkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ21CO0FBQ0Q7QUFDRztBQUUvQyxJQUFNSyxhQUFhLEdBQUc7RUFDbEIsSUFBSSxFQUFFO0lBQ0pDLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRCxLQUFLLEVBQUU7SUFDTEEsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNELEtBQUssRUFBRTtJQUNMQSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0QsS0FBSyxFQUFFO0lBQ0xBLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRCxLQUFLLEVBQUU7SUFDTEEsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNELEtBQUssRUFBRTtJQUNMQSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0QsS0FBSyxFQUFFO0lBQ0xBLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRCxLQUFLLEVBQUU7SUFDTEEsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNELEtBQUssRUFBRTtJQUNMQSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0QsS0FBSyxFQUFFO0lBQ0xBLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRCxNQUFNLEVBQUU7SUFDTkEsU0FBUyxFQUFFO0VBQ2I7QUFDRixDQUFDO0FBQ0gsSUFBTUMsTUFBTSxHQUFHTCxpREFBVSxDQUFDTSxNQUFNLENBQUM7RUFDL0JQLElBQUksRUFBRTtJQUNKUSxNQUFNLEVBQUUsT0FBTztJQUNmQyxhQUFhLEVBQUUsTUFBTTtJQUNyQkMsV0FBVyxFQUFFLE1BQU07SUFDbkJDLGFBQWEsRUFBRSxDQUFDUCxhQUFhLENBQUM7SUFDOUJRLGlCQUFpQixFQUFFLEtBQUs7SUFDeEJDLHVCQUF1QixFQUFFLFVBQVU7SUFDbkNDLHVCQUF1QixFQUFFO0VBQzNCLENBQUM7RUFDREMsTUFBTSxFQUFFO0lBQ05DLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDREMsU0FBUyxFQUFFO0lBQ1RDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCQyxTQUFTLEVBQUUsTUFBTTtJQUNqQkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLEtBQUs7SUFDcEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxjQUFjLEVBQUUsTUFBTTtJQUN0QkMsUUFBUSxFQUFFLG1CQUFtQjtJQUM3QkMsS0FBSyxFQUFFLFlBQVk7SUFDbkJDLFlBQVksRUFBRSxNQUFNO0lBQ3BCQyxZQUFZLEVBQUUscUJBQXFCO0lBQ25DQyxhQUFhLEVBQUU7RUFDakIsQ0FBQztFQUVIQyxPQUFPLEVBQUU7SUFDUEMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDTkMsTUFBTSxFQUFFLFNBQVM7SUFDakJDLFNBQVMsRUFBRTtFQUNiO0FBQ0EsQ0FBQyxDQUFDO0FBQUMsSUFFR0MsTUFBTSwwQkFBQUMsZ0JBQUE7RUFBQSxTQUFBRCxPQUFBO0lBQUFFLGVBQUEsT0FBQUYsTUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsTUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxNQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixNQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUdaLFNBQUFDLE9BQUEsRUFBUztNQUNQLElBQUFDLGFBQUEsR0FBeUIsSUFBSSxDQUFDQyxPQUFPO1FBQTdCQyxJQUFJLEdBQUFGLGFBQUEsQ0FBSkUsSUFBSTtRQUFFQyxNQUFNLEdBQUFILGFBQUEsQ0FBTkcsTUFBTTtNQUVwQixvQkFDRWhELDBEQUFBO1FBQVFrRCxTQUFTLEVBQUUvQyw4Q0FBRyxDQUFDSSxNQUFNLENBQUNTLE1BQU07TUFBRSxnQkFDcENoQiwwREFBQTtRQUFLa0QsU0FBUyxFQUFFL0MsOENBQUcsQ0FBQ0ksTUFBTSxDQUFDVyxTQUFTO01BQUUsZ0JBQ3BDbEIsMERBQUE7UUFBS21ELEdBQUcsRUFBRWxELCtEQUFLO1FBQUNpRCxTQUFTLEVBQUUvQyw4Q0FBRyxDQUFDSSxNQUFNLENBQUNOLElBQUksQ0FBRTtRQUFDbUQsR0FBRyxFQUFDO01BQU0sQ0FBRSxDQUFDLGVBQzFEcEQsMERBQUEsYUFBSSxrQkFBb0IsQ0FDckIsQ0FBQyxFQUNMK0MsSUFBSSxDQUFDTSxVQUFVLGlCQUNkckQsMERBQUE7UUFBU2tELFNBQVMsRUFBRS9DLDhDQUFHLENBQUNJLE1BQU0sQ0FBQ3VCLE9BQU87TUFBRSxHQUFDLFVBQy9CLEVBQUNpQixJQUFJLENBQUNPLEtBQUssRUFBQyxHQUFDLGVBQUF0RCwwREFBQTtRQUFHa0QsU0FBUyxFQUFFL0MsOENBQUcsQ0FBQ0ksTUFBTSxDQUFDeUIsTUFBTSxDQUFFO1FBQUN1QixPQUFPLEVBQUVQO01BQU8sR0FBQyxVQUFXLENBQzVFLENBRUwsQ0FBQztJQUViO0VBQUM7QUFBQSxFQW5Cb0JoRCx3REFBZTtBQUFBeUQsZUFBQSxDQUE5QnRCLE1BQU0saUJBQ1MvQix1REFBVTtBQXFCL0IsaUVBQWUrQixNQUFNLEVBQUM7O0FBR3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUdGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7O1VDQS9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2Fzc2V0cy9tYXNjb3QtYmx1ZS5wbmciLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL21hc2NvdC1ibHVlLnBuZyc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL0FwcC9BcHBDb250ZXh0JztcblxuY29uc3QgdHJhbnNsYXRlU3BpbiA9IHtcbiAgICAnMCUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxuICAgIH0sXG4gICAgJzEwJSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtMjBkZWcpJyxcbiAgICB9LFxuICAgICcyMCUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDBkZWcpJyxcbiAgICB9LFxuICAgICczMCUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTUwZGVnKScsXG4gICAgfSxcbiAgICAnNDAlJzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDEwZGVnKScsXG4gICAgfSxcbiAgICAnNTAlJzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcbiAgICB9LFxuICAgICc2MCUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgfSxcbiAgICAnNzAlJzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDIwMGRlZyknLFxuICAgIH0sXG4gICAgJzgwJSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICB9LFxuICAgICc5MCUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjAwZGVnKScsXG4gICAgfSxcbiAgICAnMTAwJSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJyxcbiAgICB9LFxuICB9O1xuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBsb2dvOiB7XG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgIGFuaW1hdGlvbk5hbWU6IFt0cmFuc2xhdGVTcGluXSxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzEwcycsXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCcsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICB9LFxuICBhcHBIZWFkZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgbWluSGVpZ2h0OiAnMjB2aCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gICAgZm9udFNpemU6ICdjYWxjKDNweCArIDJ2bWluKScsXG4gICAgY29sb3I6ICdsaWdodGNvcmFsJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICBib3JkZXJCb3R0b206ICc0cHggc29saWQgbGlnaHRibHVlJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gIH0sXG5cbndlbGNvbWU6IHtcbiAgbWFyZ2luVG9wOiAnMjBweCcsXG59LFxubG9nb3V0OiB7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBmb250U3R5bGU6ICdpdGFsaWMnLFxufSxcbn0pO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcblxucmVuZGVyKCkge1xuICBjb25zdCB7IHVzZXIsIGxvZ091dCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NzcyhzdHlsZXMuaGVhZGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5hcHBIZWFkZXIpfT5cbiAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5sb2dvKX0gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgIDxoMT5TY2hvb2wgZGFzaGJvYXJkPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAge3VzZXIuaXNMb2dnZWRJbiAmJiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzKHN0eWxlcy53ZWxjb21lKX0+XG4gICAgICAgICAgV2VsY29tZSB7dXNlci5lbWFpbH0gPGEgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLmxvZ291dCl9IG9uQ2xpY2s9e2xvZ091dH0+KGxvZ291dCk8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4gIC8vIHsvKiA8YVxuICAvLyAgICBjbGFzc05hbWU9XCJBcHAtbGlua1wiXG4gIC8vICAgIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnXCJcbiAgLy8gICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgLy8gICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gIC8vICA+XG4gIC8vICAgIExlYXJuIFJlYWN0XG4gIC8vICA8L2E+ICovfSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNjRiOTE3ZDJiYTQyMzUwM2IzOTg3Y2I3ZTEwNjc3ZS5wbmdcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwOTllMmJmZDUzNGE0ZDM0YzFhM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImxvZ28iLCJTdHlsZVNoZWV0IiwiY3NzIiwiQXBwQ29udGV4dCIsInRyYW5zbGF0ZVNwaW4iLCJ0cmFuc2Zvcm0iLCJzdHlsZXMiLCJjcmVhdGUiLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwibWFyZ2luUmlnaHQiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiaGVhZGVyIiwidGV4dEFsaWduIiwiYXBwSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsIndlbGNvbWUiLCJtYXJnaW5Ub3AiLCJsb2dvdXQiLCJjdXJzb3IiLCJmb250U3R5bGUiLCJIZWFkZXIiLCJfUmVhY3QkQ29tcG9uZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMkY29udGV4dCIsImNvbnRleHQiLCJ1c2VyIiwibG9nT3V0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImlzTG9nZ2VkSW4iLCJlbWFpbCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9