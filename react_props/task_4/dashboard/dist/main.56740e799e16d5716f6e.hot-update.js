"use strict";
self["webpackHotUpdatedashboard"]("main",{

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
/* harmony import */ var _Notifications_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.css */ "./src/Notifications/Notifications.css");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationItem */ "./src/Notifications/NotificationItem.js");
/* harmony import */ var _NotificationItemShape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationItemShape */ "./src/Notifications/NotificationItemShape.js");






function Notifications(_ref) {
  var displayDrawer = _ref.displayDrawer,
    listNotifications = _ref.listNotifications;
  var handleClick = function handleClick() {
    console.log('Close button has been clicked');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menuItem"
  }, "Your notifications"), displayDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Notifications"
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: notification.id,
      type: notification.type,
      value: notification.value,
      html: notification.html
    });
  })))));
}
Notifications.propTypes = {
  displayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  listNotifications: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(_NotificationItemShape__WEBPACK_IMPORTED_MODULE_4__["default"])
};
Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1494c5056bdbf1653a65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41Njc0MGU3OTllMTZkNTcxNmY2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ047QUFDMEI7QUFDTDtBQUNVO0FBRTdDLFNBQVNLLGFBQWFBLENBQUFDLElBQUEsRUFBdUM7RUFBQSxJQUFwQ0MsYUFBYSxHQUFBRCxJQUFBLENBQWJDLGFBQWE7SUFBRUMsaUJBQWlCLEdBQUFGLElBQUEsQ0FBakJFLGlCQUFpQjtFQUN0RSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztFQUM5QyxDQUFDO0VBRUQsb0JBQ0VYLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBVSxHQUFDLG9CQUF1QixDQUFDLEVBQ2pEUCxhQUFhLGlCQUNaUCwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBZSxnQkFDNUJkLDBEQUFBO0lBQ0VlLEtBQUssRUFBRTtNQUNMQyxRQUFRLEVBQUUsVUFBVTtNQUNwQkMsS0FBSyxFQUFFLE1BQU07TUFDYkMsR0FBRyxFQUFFLE1BQU07TUFDWEMsVUFBVSxFQUFFLE1BQU07TUFDbEJDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLE1BQU0sRUFBRSxTQUFTO01BQ2pCQyxPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsY0FBVyxPQUFPO0lBQ2xCQyxPQUFPLEVBQUVkO0VBQVksZ0JBRXJCVCwwREFBQTtJQUFNZSxLQUFLLEVBQUU7TUFBRVMsUUFBUSxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQWEsQ0FDMUMsQ0FBQyxFQUNSaEIsaUJBQWlCLENBQUNpQixNQUFNLEtBQUssQ0FBQyxnQkFDN0J6QiwwREFBQSxZQUFHLDZCQUE4QixDQUFDLGdCQUVsQ0EsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLFlBQUcsbUNBQW9DLENBQUMsZUFDeENBLDBEQUFBLGFBQ0dRLGlCQUFpQixDQUFDa0IsR0FBRyxDQUFDLFVBQUNDLFlBQVk7SUFBQSxvQkFDbEMzQiwwREFBQSxDQUFDRyx5REFBZ0I7TUFDZnlCLEdBQUcsRUFBRUQsWUFBWSxDQUFDRSxFQUFHO01BQ3JCQyxJQUFJLEVBQUVILFlBQVksQ0FBQ0csSUFBSztNQUN4QkMsS0FBSyxFQUFFSixZQUFZLENBQUNJLEtBQU07TUFDMUJDLElBQUksRUFBRUwsWUFBWSxDQUFDSztJQUFLLENBQ3pCLENBQUM7RUFBQSxDQUNILENBQ0MsQ0FDSixDQUVELENBRVAsQ0FBQztBQUVQO0FBRUEzQixhQUFhLENBQUM0QixTQUFTLEdBQUc7RUFDeEIxQixhQUFhLEVBQUVOLHdEQUFjO0VBQzdCTyxpQkFBaUIsRUFBRVAseURBQWlCLENBQUNHLDhEQUFxQjtBQUM1RCxDQUFDO0FBRURDLGFBQWEsQ0FBQytCLFlBQVksR0FBRztFQUMzQjdCLGFBQWEsRUFBRSxJQUFJO0VBQ25CQyxpQkFBaUIsRUFBRTtBQUNyQixDQUFDOzs7Ozs7OztVQy9ERCIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9Ob3RpZmljYXRpb25zLmNzcyc7XG5pbXBvcnQgeyBnZXRMYXRlc3ROb3RpZmljYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tICcuL05vdGlmaWNhdGlvbkl0ZW0nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW1TaGFwZSBmcm9tICcuL05vdGlmaWNhdGlvbkl0ZW1TaGFwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbnMoeyBkaXNwbGF5RHJhd2VyLCBsaXN0Tm90aWZpY2F0aW9ucyB9KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDbG9zZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudUl0ZW1cIj5Zb3VyIG5vdGlmaWNhdGlvbnM8L2Rpdj5cbiAgICAgIHtkaXNwbGF5RHJhd2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOb3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnIH19PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwPk5vIG5ldyBub3RpZmljYXRpb24gZm9yIG5vdzwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgbGlzdCBvZiBub3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17bm90aWZpY2F0aW9uLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RpZmljYXRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGh0bWw9e25vdGlmaWNhdGlvbi5odG1sfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuTm90aWZpY2F0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IFByb3BUeXBlcy5ib29sLFxuICBsaXN0Tm90aWZpY2F0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoTm90aWZpY2F0aW9uSXRlbVNoYXBlKSxcbn07XG5cbk5vdGlmaWNhdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5RHJhd2VyOiB0cnVlLFxuICBsaXN0Tm90aWZpY2F0aW9uczogW10sXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTQ5NGM1MDU2YmRiZjE2NTNhNjVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRMYXRlc3ROb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25JdGVtIiwiTm90aWZpY2F0aW9uSXRlbVNoYXBlIiwiTm90aWZpY2F0aW9ucyIsIl9yZWYiLCJkaXNwbGF5RHJhd2VyIiwibGlzdE5vdGlmaWNhdGlvbnMiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiY3Vyc29yIiwib3V0bGluZSIsIm9uQ2xpY2siLCJmb250U2l6ZSIsImxlbmd0aCIsIm1hcCIsIm5vdGlmaWNhdGlvbiIsImtleSIsImlkIiwidHlwZSIsInZhbHVlIiwiaHRtbCIsInByb3BUeXBlcyIsImJvb2wiLCJhcnJheU9mIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==