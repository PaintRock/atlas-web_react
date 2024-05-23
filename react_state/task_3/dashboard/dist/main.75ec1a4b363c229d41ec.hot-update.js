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
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.notifications, dislplayDrawerstyles.NotificationOpened)
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
/******/ 	__webpack_require__.h = () => ("3d7012deabfec4b07cdc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NWVjMWE0YjM2M2MyMjlkNDFlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ25DO0FBQ3VEO0FBQ0w7QUFDVTtBQUNoQjtBQUU1QyxJQUFNTyxPQUFPLEdBQUc7RUFDZCxJQUFJLEVBQUU7SUFDSkEsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNELE1BQU0sRUFBRTtJQUNOQSxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFFRCxJQUFNQyxNQUFNLEdBQUc7RUFDYixJQUFJLEVBQUU7SUFDSkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNELEtBQUssRUFBRTtJQUNMQSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0QsTUFBTSxFQUFFO0lBQ05BLFNBQVMsRUFBRTtFQUNiO0FBQ0YsQ0FBQztBQUVELElBQU1DLE1BQU0sR0FBR0wsaURBQVUsQ0FBQ00sTUFBTSxDQUFDO0VBQ2pDQyxhQUFhLEVBQUU7SUFDYkMsUUFBUSxFQUFFLE9BQU87SUFDakJDLEdBQUcsRUFBRSxHQUFHO0lBQ1JDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLEtBQUssRUFBRSxNQUFNO0lBQ2JDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE9BQU8sRUFBRSxHQUFHO0lBQ1pDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLFFBQVE7SUFDdkJDLGNBQWMsRUFBRSxZQUFZO0lBQzVCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxrQkFBa0IsRUFBRTtJQUNsQmIsR0FBRyxFQUFFLEdBQUc7SUFDUmMsSUFBSSxFQUFFLEdBQUc7SUFDVFosS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFLE1BQU07SUFDZEMsT0FBTyxFQUFFLEdBQUc7SUFDWkMsTUFBTSxFQUFFLE1B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QUVQO0FBRUF6QixhQUFhLENBQUMwQixTQUFTLEdBQUc7RUFDeEJ4QixhQUFhLEVBQUV4Qyx3REFBYztFQUM3QnlDLGlCQUFpQixFQUFFekMseURBQWlCLENBQUNHLDhEQUFxQixDQUFDO0VBQzNEdUMsbUJBQW1CLEVBQUUxQyx3REFBYztFQUNuQzJDLGdCQUFnQixFQUFFM0Msd0RBQWM7RUFDaEM0QyxVQUFVLEVBQUU1Qyx3REFBY2lFO0FBQzVCLENBQUM7QUFFRDNCLGFBQWEsQ0FBQzhCLFlBQVksR0FBRztFQUMzQjVCLGFBQWEsRUFBRSxLQUFLO0VBQ3BCQyxpQkFBaUIsRUFBRSxFQUFFO0VBQ3JCQyxtQkFBbUIsRUFBRSxTQUFBQSxvQkFBQSxFQUFNLENBQUMsQ0FBQztFQUM3QkMsZ0JBQWdCLEVBQUUsU0FBQUEsaUJBQUEsRUFBTSxDQUFDLENBQUM7RUFDMUJDLFVBQVUsRUFBRTtBQUNkLENBQUM7Ozs7Ozs7O1VDcEpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gaW1wb3J0ICcuL05vdGlmaWNhdGlvbnMuY3NzJztcbmltcG9ydCB7IGdldExhdGVzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtIGZyb20gJy4vTm90aWZpY2F0aW9uSXRlbSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbVNoYXBlIGZyb20gJy4vTm90aWZpY2F0aW9uSXRlbVNoYXBlJztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZSc7XG5cbmNvbnN0IG9wYWNpdHkgPSB7XG4gICcwJSc6IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuXG5jb25zdCBib3VuY2UgPSB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxuICB9LFxuICAnNTAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg1ZGVnKScsXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNWRlZyknLFxuICB9LFxufTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xubm90aWZpY2F0aW9uczoge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAnMCcsXG4gIHJpZ2h0OiAnMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFNpemU6ICcyMHB4Jyxcbn0sXG5Ob3RpZmljYXRpb25PcGVuZWQ6IHtcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsIFxuICBwYWRkaW5nOiAnMCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBmb250U2l6ZTogJzIwcHgnLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn0sXG5cbm1lbnVJdGVtOiB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIHRvcDogJzIwcHgnLFxuICByaWdodDogJzQwcHgnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgekluZGV4OiAxLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBhbmltYXRpb25OYW1lOiBbb3BhY2l0eSwgYm91bmNlXSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBbJzFzJywgJzAuMnMnXSxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgIH0sXG4gIH0sXG4gIGhpZGVNZW51SXRlbToge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcblxuZGVmYXVsdE5vdGlmaWNhdGlvblN0eWxlOiB7XG4gIGNvbG9yOiAnYmx1ZScsXG59LFxudXJnZW50Tm90aWZpY2F0aW9uU3R5bGU6IHtcbiAgY29sb3I6ICdyZWQnLFxufSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25zKHsgZGlzcGxheURyYXdlciwgbGlzdE5vdGlmaWNhdGlvbnMsIGhhbmRsZURpc3BsYXlEcmF3ZXIsIGhhbmRsZUhpZGVEcmF3ZXIsIGlzTG9nZ2VkSW4gfSkge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBoYW5kbGVIaWRlRHJhd2VyKCk7XG4gICAgY29uc29sZS5sb2coJ0Nsb3NlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzTG9nZ2VkSW4gJiYgIWRpc3BsYXlEcmF3ZXIgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMubWVudUl0ZW0pfT5Zb3VyIG5vdGlmaWNhdGlvbnM8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7ZGlzcGxheURyYXdlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLm5vdGlmaWNhdGlvbnMsIGRpc2xwbGF5RHJhd2Vyc3R5bGVzLk5vdGlmaWNhdGlvbk9wZW5lZCl9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICByaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgICB0b3A6ICcyMHB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgPiBDbG9zZVxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICczMHB4JyB9fT4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtsaXN0Tm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8cD5ObyBuZXcgbm90aWZpY2F0aW9uIGZvciBub3c8L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPkhlcmUgaXMgdGhlIGxpc3Qgb2Ygbm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtsaXN0Tm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZmljYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e25vdGlmaWNhdGlvbi50eXBlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90aWZpY2F0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBodG1sPXtub3RpZmljYXRpb24uaHRtbH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbk5vdGlmaWNhdGlvbnMucHJvcFR5cGVzID0ge1xuICBkaXNwbGF5RHJhd2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGlzdE5vdGlmaWNhdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE5vdGlmaWNhdGlvbkl0ZW1TaGFwZSksXG4gIGhhbmRsZURpc3BsYXlEcmF3ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBoYW5kbGVIaWRlRHJhd2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Ob3RpZmljYXRpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheURyYXdlcjogZmFsc2UsXG4gIGxpc3ROb3RpZmljYXRpb25zOiBbXSxcbiAgaGFuZGxlRGlzcGxheURyYXdlcjogKCkgPT4ge30sXG4gIGhhbmRsZUhpZGVEcmF3ZXI6ICgpID0+IHt9LFxuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZDcwMTJkZWFiZmVjNGIwN2NkY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImdldExhdGVzdE5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbkl0ZW0iLCJOb3RpZmljYXRpb25JdGVtU2hhcGUiLCJTdHlsZVNoZWV0IiwiY3NzIiwib3BhY2l0eSIsImJvdW5jZSIsInRyYW5zZm9ybSIsInN0eWxlcyIsImNyZWF0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2l6aW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsIk5vdGlmaWNhdGlvbk9wZW5lZCIsImxlZnQiLCJtZW51SXRlbSIsImN1cnNvciIsInpJbmRleCIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiaGlkZU1lbnVJdGVtIiwiZGVmYXVsdE5vdGlmaWNhdGlvblN0eWxlIiwiY29sb3IiLCJ1cmdlbnROb3RpZmljYXRpb25TdHlsZSIsIk5vdGlmaWNhdGlvbnMiLCJfcmVmIiwiZGlzcGxheURyYXdlciIsImxpc3ROb3RpZmljYXRpb25zIiwiaGFuZGxlRGlzcGxheURyYXdlciIsImhhbmRsZUhpZGVEcmF3ZXIiLCJpc0xvZ2dlZEluIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiZGlzbHBsYXlEcmF3ZXJzdHlsZXMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJvdXRsaW5lIiwib25DbGljayIsImxlbmd0aCIsIm1hcCIsIm5vdGlmaWNhdGlvbiIsImtleSIsImlkIiwidHlwZSIsInZhbHVlIiwiaHRtbCIsInByb3BUeXBlcyIsImJvb2wiLCJhcnJheU9mIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=