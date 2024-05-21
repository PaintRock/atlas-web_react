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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationItem */ "./src/Notifications/NotificationItem.js");
/* harmony import */ var _NotificationItemShape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationItemShape */ "./src/Notifications/NotificationItemShape.js");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login/Login */ "./src/Login/Login.js");


// import './Notifications.css';





var styles = aphrodite__WEBPACK_IMPORTED_MODULE_4__.StyleSheet.create({
  notifications: {
    position: 'fixed',
    top: '30px',
    right: '20px',
    width: '33.33%',
    height: '140px',
    padding: '20px',
    border: '2px dashed lightblue',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left'
  },
  menuItem: {
    position: 'fixed',
    padding: '10px',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    color: '#e1354b'
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.menuItem)
  }, "Your notifications"), displayDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.notifications)
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
  displayDrawer: true,
  listNotifications: []
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ba0855c13d70e3e3215")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FDSCxDQUNDLENBQ0osQ0FFRCxDQUVQLENBQUM7QUFFUDtBQUVBdEIsYUFBYSxDQUFDdUIsU0FBUyxHQUFHO0VBQ3hCckIsYUFBYSxFQUFFOUIsd0RBQWM7RUFDN0IrQixpQkFBaUIsRUFBRS9CLHlEQUFpQixDQUFDRyw4REFBcUI7QUFDNUQsQ0FBQztBQUVEeUIsYUFBYSxDQUFDMEIsWUFBWSxHQUFHO0VBQzNCeEIsYUFBYSxFQUFFLElBQUk7RUFDbkJDLGlCQUFpQixFQUFFO0FBQ3JCLENBQUM7Ozs7Ozs7O1VDakdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gaW1wb3J0ICcuL05vdGlmaWNhdGlvbnMuY3NzJztcbmltcG9ydCB7IGdldExhdGVzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtIGZyb20gJy4vTm90aWZpY2F0aW9uSXRlbSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbVNoYXBlIGZyb20gJy4vTm90aWZpY2F0aW9uSXRlbVNoYXBlJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5pbXBvcnQgeyBpc0xvZ2dlZEluIH0gZnJvbSAnLi4vTG9naW4vTG9naW4nO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5ub3RpZmljYXRpb25zOiB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB0b3A6ICczMHB4JyxcbiAgcmlnaHQ6ICcyMHB4JyxcbiAgd2lkdGg6ICczMy4zMyUnLFxuICBoZWlnaHQ6ICcxNDBweCcsXG4gIHBhZGRpbmc6ICcyMHB4JyxcbiAgYm9yZGVyOiAnMnB4IGRhc2hlZCBsaWdodGJsdWUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdsZWZ0Jyxcbn0sXG5tZW51SXRlbToge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgcGFkZGluZzogJzEwcHgnLFxuICB0b3A6ICcyMHB4JyxcbiAgcmlnaHQ6ICcyMHB4JyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGNvbG9yOiAnI2UxMzU0YicsXG59LFxuZGVmYXVsdE5vdGlmaWNhdGlvblN0eWxlOiB7XG4gIGNvbG9yOiAnYmx1ZScsXG59LFxudXJnZW50Tm90aWZpY2F0aW9uU3R5bGU6IHtcbiAgY29sb3I6ICdyZWQnLFxufSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25zKHsgZGlzcGxheURyYXdlciwgbGlzdE5vdGlmaWNhdGlvbnMgfSkge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ2xvc2UgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5tZW51SXRlbSl9PllvdXIgbm90aWZpY2F0aW9uczwvZGl2PlxuICAgICAge2Rpc3BsYXlEcmF3ZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5ub3RpZmljYXRpb25zKX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnIH19PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwPk5vIG5ldyBub3RpZmljYXRpb24gZm9yIG5vdzwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgbGlzdCBvZiBub3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17bm90aWZpY2F0aW9uLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RpZmljYXRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGh0bWw9e25vdGlmaWNhdGlvbi5odG1sfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuTm90aWZpY2F0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IFByb3BUeXBlcy5ib29sLFxuICBsaXN0Tm90aWZpY2F0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoTm90aWZpY2F0aW9uSXRlbVNoYXBlKSxcbn07XG5cbk5vdGlmaWNhdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5RHJhd2VyOiB0cnVlLFxuICBsaXN0Tm90aWZpY2F0aW9uczogW10sXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2JhMDg1NWMxM2Q3MGUzZTMyMTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRMYXRlc3ROb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25JdGVtIiwiTm90aWZpY2F0aW9uSXRlbVNoYXBlIiwiU3R5bGVTaGVldCIsImNzcyIsImlzTG9nZ2VkSW4iLCJzdHlsZXMiLCJjcmVhdGUiLCJub3RpZmljYXRpb25zIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImJveFNpemluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWVudUl0ZW0iLCJjdXJzb3IiLCJjb2xvciIsImRlZmF1bHROb3RpZmljYXRpb25TdHlsZSIsInVyZ2VudE5vdGlmaWNhdGlvblN0eWxlIiwiTm90aWZpY2F0aW9ucyIsIl9yZWYiLCJkaXNwbGF5RHJhd2VyIiwibGlzdE5vdGlmaWNhdGlvbnMiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJvdXRsaW5lIiwib25DbGljayIsImZvbnRTaXplIiwibGVuZ3RoIiwibWFwIiwibm90aWZpY2F0aW9uIiwia2V5IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwicHJvcFR5cGVzIiwiYm9vbCIsImFycmF5T2YiLCJkZWZhdWx0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9