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
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.notifications, dislplaystyles.NotificationOpened)
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
/******/ 	__webpack_require__.h = () => ("733e5a1ae83d43fe5c58")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iOTg0MDc5ZTI2OTk4NzEzYmI4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ25DO0FBQ3VEO0FBQ0w7QUFDVTtBQUNoQjtBQUU1QyxJQUFNTyxPQUFPLEdBQUc7RUFDZCxJQUFJLEVBQUU7SUFDSkEsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNELE1BQU0sRUFBRTtJQUNOQSxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFFRCxJQUFNQyxNQUFNLEdBQUc7RUFDYixJQUFJLEVBQUU7SUFDSkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNELEtBQUssRUFBRTtJQUNMQSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0QsTUFBTSxFQUFFO0lBQ05BLFNBQVMsRUFBRTtFQUNiO0FBQ0YsQ0FBQztBQUVELElBQU1DLE1BQU0sR0FBR0wsaURBQVUsQ0FBQ00sTUFBTSxDQUFDO0VBQ2pDQyxhQUFhLEVBQUU7SUFDYkMsUUFBUSxFQUFFLE9BQU87SUFDakJDLEdBQUcsRUFBRSxHQUFHO0lBQ1JDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLEtBQUssRUFBRSxNQUFNO0lBQ2JDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE9BQU8sRUFBRSxHQUFHO0lBQ1pDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLFFBQVE7SUFDdkJDLGNBQWMsRUFBRSxZQUFZO0lBQzVCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxrQkFBa0IsRUFBRTtJQUNsQmIsR0FBRyxFQUFFLEdBQUc7SUFDUmMsSUFBSSxFQUFFLEdBQUc7SUFDVFosS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFLE1BQU07SUFDZEMsT0FBTyxFQUFFLEdBQUc7SUFDWkMsTUFBTSxFQUFFLE1B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UDtBQUVBekIsYUFBYSxDQUFDMEIsU0FBUyxHQUFHO0VBQ3hCeEIsYUFBYSxFQUFFeEMsd0RBQWM7RUFDN0J5QyxpQkFBaUIsRUFBRXpDLHlEQUFpQixDQUFDRyw4REFBcUIsQ0FBQztFQUMzRHVDLG1CQUFtQixFQUFFMUMsd0RBQWM7RUFDbkMyQyxnQkFBZ0IsRUFBRTNDLHdEQUFjO0VBQ2hDNEMsVUFBVSxFQUFFNUMsd0RBQWNpRTtBQUM1QixDQUFDO0FBRUQzQixhQUFhLENBQUM4QixZQUFZLEdBQUc7RUFDM0I1QixhQUFhLEVBQUUsS0FBSztFQUNwQkMsaUJBQWlCLEVBQUUsRUFBRTtFQUNyQkMsbUJBQW1CLEVBQUUsU0FBQUEsb0JBQUEsRUFBTSxDQUFDLENBQUM7RUFDN0JDLGdCQUFnQixFQUFFLFNBQUFBLGlCQUFBLEVBQU0sQ0FBQyxDQUFDO0VBQzFCQyxVQUFVLEVBQUU7QUFDZCxDQUFDOzs7Ozs7OztVQ3BKRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIGltcG9ydCAnLi9Ob3RpZmljYXRpb25zLmNzcyc7XG5pbXBvcnQgeyBnZXRMYXRlc3ROb3RpZmljYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tICcuL05vdGlmaWNhdGlvbkl0ZW0nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW1TaGFwZSBmcm9tICcuL05vdGlmaWNhdGlvbkl0ZW1TaGFwZSc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnO1xuXG5jb25zdCBvcGFjaXR5ID0ge1xuICAnMCUnOiB7XG4gICAgb3BhY2l0eTogMC41LFxuICB9LFxuICAnMTAwJSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICB9LFxufTtcblxuY29uc3QgYm91bmNlID0ge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcbiAgfSxcbiAgJzUwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNWRlZyknLFxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTVkZWcpJyxcbiAgfSxcbn07XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbm5vdGlmaWNhdGlvbnM6IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHRvcDogJzAnLFxuICByaWdodDogJzAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgcGFkZGluZzogJzAnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiAnMjBweCcsXG59LFxuTm90aWZpY2F0aW9uT3BlbmVkOiB7XG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLCBcbiAgcGFkZGluZzogJzAnLFxuICBib3JkZXI6ICdub25lJyxcbiAgZm9udFNpemU6ICcyMHB4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG59LFxuXG5tZW51SXRlbToge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgcGFkZGluZzogJzEwcHgnLFxuICB0b3A6ICcyMHB4JyxcbiAgcmlnaHQ6ICc0MHB4JyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHpJbmRleDogMSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYW5pbWF0aW9uTmFtZTogW29wYWNpdHksIGJvdW5jZV0sXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogWycxcycsICcwLjJzJ10sXG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICB9LFxuICB9LFxuICBoaWRlTWVudUl0ZW06IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH0sXG5cbmRlZmF1bHROb3RpZmljYXRpb25TdHlsZToge1xuICBjb2xvcjogJ2JsdWUnLFxufSxcbnVyZ2VudE5vdGlmaWNhdGlvblN0eWxlOiB7XG4gIGNvbG9yOiAncmVkJyxcbn0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZpY2F0aW9ucyh7IGRpc3BsYXlEcmF3ZXIsIGxpc3ROb3RpZmljYXRpb25zLCBoYW5kbGVEaXNwbGF5RHJhd2VyLCBoYW5kbGVIaWRlRHJhd2VyLCBpc0xvZ2dlZEluIH0pIHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGFuZGxlSGlkZURyYXdlcigpO1xuICAgIGNvbnNvbGUubG9nKCdDbG9zZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0xvZ2dlZEluICYmICFkaXNwbGF5RHJhd2VyICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLm1lbnVJdGVtKX0+WW91ciBub3RpZmljYXRpb25zPC9kaXY+XG4gICAgICApfVxuICAgICAge2Rpc3BsYXlEcmF3ZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5ub3RpZmljYXRpb25zLCBkaXNscGxheXN0eWxlcy5Ob3RpZmljYXRpb25PcGVuZWQpfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgdG9wOiAnMjBweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgID4gQ2xvc2VcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcgfX0+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7bGlzdE5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPHA+Tm8gbmV3IG5vdGlmaWNhdGlvbiBmb3Igbm93PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cD5IZXJlIGlzIHRoZSBsaXN0IG9mIG5vdGlmaWNhdGlvbnM8L3A+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bGlzdE5vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25JdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtub3RpZmljYXRpb24udHlwZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGlmaWNhdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgaHRtbD17bm90aWZpY2F0aW9uLmh0bWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5Ob3RpZmljYXRpb25zLnByb3BUeXBlcyA9IHtcbiAgZGlzcGxheURyYXdlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGxpc3ROb3RpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihOb3RpZmljYXRpb25JdGVtU2hhcGUpLFxuICBoYW5kbGVEaXNwbGF5RHJhd2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlSGlkZURyYXdlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuTm90aWZpY2F0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IGZhbHNlLFxuICBsaXN0Tm90aWZpY2F0aW9uczogW10sXG4gIGhhbmRsZURpc3BsYXlEcmF3ZXI6ICgpID0+IHt9LFxuICBoYW5kbGVIaWRlRHJhd2VyOiAoKSA9PiB7fSxcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzMzZTVhMWFlODNkNDNmZTVjNThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRMYXRlc3ROb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25JdGVtIiwiTm90aWZpY2F0aW9uSXRlbVNoYXBlIiwiU3R5bGVTaGVldCIsImNzcyIsIm9wYWNpdHkiLCJib3VuY2UiLCJ0cmFuc2Zvcm0iLCJzdHlsZXMiLCJjcmVhdGUiLCJub3RpZmljYXRpb25zIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImJveFNpemluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJOb3RpZmljYXRpb25PcGVuZWQiLCJsZWZ0IiwibWVudUl0ZW0iLCJjdXJzb3IiLCJ6SW5kZXgiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImhpZGVNZW51SXRlbSIsImRlZmF1bHROb3RpZmljYXRpb25TdHlsZSIsImNvbG9yIiwidXJnZW50Tm90aWZpY2F0aW9uU3R5bGUiLCJOb3RpZmljYXRpb25zIiwiX3JlZiIsImRpc3BsYXlEcmF3ZXIiLCJsaXN0Tm90aWZpY2F0aW9ucyIsImhhbmRsZURpc3BsYXlEcmF3ZXIiLCJoYW5kbGVIaWRlRHJhd2VyIiwiaXNMb2dnZWRJbiIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImRpc2xwbGF5c3R5bGVzIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwib3V0bGluZSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJub3RpZmljYXRpb24iLCJrZXkiLCJpZCIsInR5cGUiLCJ2YWx1ZSIsImh0bWwiLCJwcm9wVHlwZXMiLCJib29sIiwiYXJyYXlPZiIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9