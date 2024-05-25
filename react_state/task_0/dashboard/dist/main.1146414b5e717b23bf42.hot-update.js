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
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.menuItem),
    onClick: handleDisplayDrawer
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
    onClick: handleHideDrawer
  }, "Close", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
/******/ 	__webpack_require__.h = () => ("fe09e7455b7349f4d41d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMTQ2NDE0YjVlNzE3YjIzYmY0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ29CO0FBQ0w7QUFDVTtBQUNoQjtBQUU1QyxJQUFNTyxPQUFPLEdBQUc7RUFDZCxJQUFJLEVBQUU7SUFDSkEsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNELE1BQU0sRUFBRTtJQUNOQSxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFFRCxJQUFNQyxNQUFNLEdBQUc7RUFDYixJQUFJLEVBQUU7SUFDSkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNELEtBQUssRUFBRTtJQUNMQSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0QsTUFBTSxFQUFFO0lBQ05BLFNBQVMsRUFBRTtFQUNiO0FBQ0YsQ0FBQztBQUVELElBQU1DLE1BQU0sR0FBR0wsaURBQVUsQ0FBQ00sTUFBTSxDQUFDO0VBQ2pDQyxhQUFhLEVBQUU7SUFDYkMsUUFBUSxFQUFFLE9BQU87SUFDakJDLEdBQUcsRUFBRSxHQUFHO0lBQ1JDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLEtBQUssRUFBRSxNQUFNO0lBQ2JDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE9BQU8sRUFBRSxHQUFHO0lBQ1pDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLFFBQVE7SUFDdkJDLGNBQWMsRUFBRSxZQUFZO0lBQzVCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxrQkFBa0IsRUFBRTtJQUNsQmIsR0FBRyxFQUFFLEdBQUc7SUFDUmMsSUFBSSxFQUFFLEdBQUc7SUFDVFosS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFLE1BQU07SUFDZEMsT0FBTyxFQUFFLEdBQUc7SUFDWkMsTUFBTSxFQUFFLE1BQU07SUFDZE8sUUFBUSxFQUFFLE1BQU07SUFDaEJGLGNBQWMsRUFBRSxZQUFZO0lBQzVCQyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBRURJLFFBQVEsRUFBRTtJQUNSaEIsUUFBUSxFQUFFLE9BQU87SUFDakJLLE9BQU8sRUFBRSxNQUFNO0lBQ2ZKLEdBQUcsRUFBRSxNQUFNO0lBQ1hDLEtBQUssRUFBRSxNQUFNO0lBQ2JlLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxNQUFNLEVBQUUsQ0FBQztJQUNQLFFBQVEsRUFBRTtNQUNSQyxhQUFhLEVBQUUsQ0FBQ3pCLE9BQU8sRUFBRUMsTUFBTSxDQUFDO01BQ2hDeUIsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO01BQ2pDQyx1QkFBdUIsRUFBRTtJQUMzQjtFQUNGLENBQUM7RUFDREMsWUFBWSxFQUFFO0lBQ1piLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFFSGMsd0JBQXdCLEVBQUU7SUFDeEJDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDREMsdUJBQXVCLEVBQUU7SUFDdkJELEtBQUssRUFBRTtFQUNUO0FBQ0EsQ0FBQyxDQUFDO0FBRWEsU0FBU0UsYUFBYUEsQ0FBQUMsSUFBQSxFQUEwRjtFQUFBLElBQXZGQyxhQUFhLEdBQUFELElBQUEsQ0FBYkMsYUFBYTtJQUFFQyxpQkFBaUIsR0FBQUYsSUFBQSxDQUFqQkUsaUJBQWlCO0lBQUVDLG1CQUFtQixHQUFBSCxJQUFBLENBQW5CRyxtQkFBbUI7SUFBRUMsZ0JBQWdCLEdBQUFKLElBQUEsQ0FBaEJJLGdCQUFnQjtJQUFFQyxVQUFVLEdBQUFMLElBQUEsQ0FBVkssVUFBVTtFQUN6SCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3hCRixnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztFQUM5QyxDQUFDO0VBRUQsb0JBQ0VoRCwwREFBQSxDQUFBQSx1REFBQSxRQUNHNkMsVUFBVSxJQUFJLENBQUNKLGFBQWEsaUJBQ2pDekMsMERBQUE7SUFBS21ELFNBQVMsRUFBRTdDLDhDQUFHLENBQUNJLE1BQU0sQ0FBQ21CLFFBQVEsQ0FBRTtJQUFDdUIsT0FBTyxFQUFFVDtFQUFvQixHQUFDLG9CQUUvRCxDQUNOLEVBQ01GLGFBQWEsaUJBQ1p6QywwREFBQTtJQUFLbUQsU0FBUyxFQUFFN0MsOENBQUcsQ0FBQ0ksTUFBTSxDQUFDRSxhQUFhLEVBQUU2QixhQUFhLElBQUkvQixNQUFNLENBQUNpQixrQkFBa0I7RUFBRSxnQkFDM0UzQiwwREFBQTtJQUNQcUQsS0FBSyxFQUFFO01BQ0x4QyxRQUFRLEVBQUUsVUFBVTtNQUNwQkUsS0FBSyxFQUFFLE1BQU07TUFDYkQsR0FBRyxFQUFFLE1BQU07TUFDWHdDLFVBQVUsRUFBRSxNQUFNO01BQ2xCbkMsTUFBTSxFQUFFLE1BQU07TUFDZFcsTUFBTSxFQUFFLFNBQVM7TUFDakJ5QixPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsY0FBVyxPQUFPO0lBQ2xCSCxPQUFPLEVBQUVSO0VBQWlCLEdBQzNCLE9BRUMsZUFBQTVDLDBEQUFBO0lBQU1xRCxLQUFLLEVBQUU7TUFBRTNCLFFBQVEsRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFhLENBQzFDLENBQUMsRUFDUmdCLGlCQUFpQixDQUFDYyxNQUFNLEtBQUssQ0FBQyxnQkFDN0J4RCwwREFBQSxZQUFHLDZCQUE4QixDQUFDLGdCQUVsQ0EsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLFlBQUcsbUNBQW9DLENBQUMsZUFDeENBLDBEQUFBLGFBQ0cwQyxpQkFBaUIsQ0FBQ2UsR0FBRyxDQUFDLFVBQUNDLFlBQVk7SUFBQSxvQkFDbEMxRCwwREFBQSxDQUFDRyx5REFBZ0I7TUFDZndELEdBQUcsRUFBRUQsWUFBWSxDQUFDRSxFQUFHO01BQ3JCQyxJQUFJLEVBQUVILFlBQVksQ0FBQ0csSUFBSztNQUN4QkMsS0FBSyxFQUFFSixZQUFZLENBQUNJLEtBQU07TUFDMUJDLElBQUksRUFBRUwsWUFBWSxDQUFDSztJQUFLLENBQ3pCLENBQUM7RUFBQSxDQUNILENBQ0MsQ0FDSixDQUVELENBRVAsQ0FBQztBQUVQO0FBRUF4QixhQUFhLENBQUN5QixTQUFTLEdBQUc7RUFDeEJ2QixhQUFhLEVBQUV4Qyx3REFBYztFQUM3QnlDLGlCQUFpQixFQUFFekMseURBQWlCLENBQUNHLDhEQUFxQixDQUFDO0VBQzNEdUMsbUJBQW1CLEVBQUUxQyx3REFBYztFQUNuQzJDLGdCQUFnQixFQUFFM0Msd0RBQWM7RUFDaEM0QyxVQUFVLEVBQUU1Qyx3REFBY2dFO0FBQzVCLENBQUM7QUFFRDFCLGFBQWEsQ0FBQzZCLFlBQVksR0FBRztFQUMzQjNCLGFBQWEsRUFBRSxLQUFLO0VBQ3BCQyxpQkFBaUIsRUFBRSxFQUFFO0VBQ3JCQyxtQkFBbUIsRUFBRSxTQUFBQSxvQkFBQSxFQUFNLENBQUMsQ0FBQztFQUM3QkMsZ0JBQWdCLEVBQUUsU0FBQUEsaUJBQUEsRUFBTSxDQUFDLENBQUM7RUFDMUJDLFVBQVUsRUFBRTtBQUNkLENBQUM7Ozs7Ozs7O1VDdEpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW0gZnJvbSAnLi9Ob3RpZmljYXRpb25JdGVtJztcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtU2hhcGUgZnJvbSAnLi9Ob3RpZmljYXRpb25JdGVtU2hhcGUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcblxuY29uc3Qgb3BhY2l0eSA9IHtcbiAgJzAlJzoge1xuICAgIG9wYWNpdHk6IDAuNSxcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbn07XG5cbmNvbnN0IGJvdW5jZSA9IHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXG4gIH0sXG4gICc1MCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDVkZWcpJyxcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC01ZGVnKScsXG4gIH0sXG59O1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5ub3RpZmljYXRpb25zOiB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB0b3A6ICcwJyxcbiAgcmlnaHQ6ICcwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250U2l6ZTogJzIwcHgnLFxufSxcbk5vdGlmaWNhdGlvbk9wZW5lZDoge1xuICB0b3A6ICcwJyxcbiAgbGVmdDogJzAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJywgXG4gIHBhZGRpbmc6ICcwJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGZvbnRTaXplOiAnMjBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxufSxcblxubWVudUl0ZW06IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgdG9wOiAnMjBweCcsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICB6SW5kZXg6IDEsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGFuaW1hdGlvbk5hbWU6IFtvcGFjaXR5LCBib3VuY2VdLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFsnMXMnLCAnMC4ycyddLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgfSxcbiAgfSxcbiAgaGlkZU1lbnVJdGVtOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuXG5kZWZhdWx0Tm90aWZpY2F0aW9uU3R5bGU6IHtcbiAgY29sb3I6ICdibHVlJyxcbn0sXG51cmdlbnROb3RpZmljYXRpb25TdHlsZToge1xuICBjb2xvcjogJ3JlZCcsXG59LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbnMoeyBkaXNwbGF5RHJhd2VyLCBsaXN0Tm90aWZpY2F0aW9ucywgaGFuZGxlRGlzcGxheURyYXdlciwgaGFuZGxlSGlkZURyYXdlciwgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUhpZGVEcmF3ZXIoKTtcbiAgICBjb25zb2xlLmxvZygnQ2xvc2UgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNMb2dnZWRJbiAmJiAhZGlzcGxheURyYXdlciAmJiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLm1lbnVJdGVtKX0gb25DbGljaz17aGFuZGxlRGlzcGxheURyYXdlcn0+XG4gICAgWW91ciBub3RpZmljYXRpb25zXG4gIDwvZGl2PlxuKX1cbiAgICAgIHtkaXNwbGF5RHJhd2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMubm90aWZpY2F0aW9ucywgZGlzcGxheURyYXdlciAmJiBzdHlsZXMuTm90aWZpY2F0aW9uT3BlbmVkKX0+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVIaWRlRHJhd2VyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnIH19PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwPk5vIG5ldyBub3RpZmljYXRpb24gZm9yIG5vdzwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgbGlzdCBvZiBub3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3ROb3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17bm90aWZpY2F0aW9uLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RpZmljYXRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGh0bWw9e25vdGlmaWNhdGlvbi5odG1sfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuTm90aWZpY2F0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIGRpc3BsYXlEcmF3ZXI6IFByb3BUeXBlcy5ib29sLFxuICBsaXN0Tm90aWZpY2F0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoTm90aWZpY2F0aW9uSXRlbVNoYXBlKSxcbiAgaGFuZGxlRGlzcGxheURyYXdlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGhhbmRsZUhpZGVEcmF3ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbk5vdGlmaWNhdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5RHJhd2VyOiBmYWxzZSxcbiAgbGlzdE5vdGlmaWNhdGlvbnM6IFtdLFxuICBoYW5kbGVEaXNwbGF5RHJhd2VyOiAoKSA9PiB7fSxcbiAgaGFuZGxlSGlkZURyYXdlcjogKCkgPT4ge30sXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmUwOWU3NDU1YjczNDlmNGQ0MWRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRMYXRlc3ROb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25JdGVtIiwiTm90aWZpY2F0aW9uSXRlbVNoYXBlIiwiU3R5bGVTaGVldCIsImNzcyIsIm9wYWNpdHkiLCJib3VuY2UiLCJ0cmFuc2Zvcm0iLCJzdHlsZXMiLCJjcmVhdGUiLCJub3RpZmljYXRpb25zIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImJveFNpemluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJOb3RpZmljYXRpb25PcGVuZWQiLCJsZWZ0IiwibWVudUl0ZW0iLCJjdXJzb3IiLCJ6SW5kZXgiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImhpZGVNZW51SXRlbSIsImRlZmF1bHROb3RpZmljYXRpb25TdHlsZSIsImNvbG9yIiwidXJnZW50Tm90aWZpY2F0aW9uU3R5bGUiLCJOb3RpZmljYXRpb25zIiwiX3JlZiIsImRpc3BsYXlEcmF3ZXIiLCJsaXN0Tm90aWZpY2F0aW9ucyIsImhhbmRsZURpc3BsYXlEcmF3ZXIiLCJoYW5kbGVIaWRlRHJhd2VyIiwiaXNMb2dnZWRJbiIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmQiLCJvdXRsaW5lIiwibGVuZ3RoIiwibWFwIiwibm90aWZpY2F0aW9uIiwia2V5IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwicHJvcFR5cGVzIiwiYm9vbCIsImFycmF5T2YiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==