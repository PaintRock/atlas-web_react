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





var opacityKeyframes = {
  '0%': {
    opacity: 0.5
  },
  '100%': {
    opacity: 1
  }
};
var bounceKeyframes = {
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
      animationName: [opacityKeyframes, bounceKeyframes],
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
  displayDrawer: tru,
  listNotifications: []
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d79cd87f46d3ff75cb4e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44MmUyZDQ0NDZkYTBjOTVjZGNlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUztBQUNuQztBQUN1RDtBQUNMO0FBQ1U7QUFDaEI7QUFDVDtBQUVuQyxJQUFNUSxnQkFBZ0IsR0FBRztFQUN2QixJQUFJLEVBQUU7SUFDSkMsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNELE1BQU0sRUFBRTtJQUNOQSxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFFRCxJQUFNQyxlQUFlLEdBQUc7RUFDdEIsSUFBSSxFQUFFO0lBQ0pDLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRCxLQUFLLEVBQUU7SUFDTEEsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNELE1BQU0sRUFBRTtJQUNOQSxTQUFTLEVBQUU7RUFDYjtBQUNGLENBQUM7QUFFRCxJQUFNQyxNQUFNLEdBQUdQLGlEQUFVLENBQUNRLE1BQU0sQ0FBQztFQUNqQ0MsYUFBYSxFQUFFO0lBQ2JDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCQyxHQUFHLEVBQUUsR0FBRztJQUNSQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxLQUFLLEVBQUUsTUFBTTtJQUNiQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxPQUFPLEVBQUUsR0FBRztJQUNaQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxlQUFlLEVBQUUsT0FBTztJQUN4QkMsU0FBUyxFQUFFLFlBQVk7SUFDdkJDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCQyxjQUFjLEVBQUUsWUFBWTtJQUM1QkMsVUFBVSxFQUFFLFFBQVE7SUFDcEJDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREMsa0JBQWtCLEVBQUU7SUFDbEJiLEdBQUcsRUFBRSxHQUFHO0lBQ1JjLElBQUksRUFBRSxHQUFHO0lBQ1RaLEtBQUssRUFBRSxNQUFNO0lBQ2JDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE9BQU8sRUFBRSxHQUFHO0lBQ1pDLE1B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LENBQUN5QixZQUFZLEdBQUc7RUFDM0J2QixhQUFhLEVBQUV3QixHQUFHO0VBQ2xCdkIsaUJBQWlCLEVBQUU7QUFDckIsQ0FBQzs7Ozs7Ozs7VUM5SUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBpbXBvcnQgJy4vTm90aWZpY2F0aW9ucy5jc3MnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW0gZnJvbSAnLi9Ob3RpZmljYXRpb25JdGVtJztcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtU2hhcGUgZnJvbSAnLi9Ob3RpZmljYXRpb25JdGVtU2hhcGUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbic7XG5cbmNvbnN0IG9wYWNpdHlLZXlmcmFtZXMgPSB7XG4gICcwJSc6IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuXG5jb25zdCBib3VuY2VLZXlmcmFtZXMgPSB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxuICB9LFxuICAnNTAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg1ZGVnKScsXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNWRlZyknLFxuICB9LFxufTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xubm90aWZpY2F0aW9uczoge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAnMCcsXG4gIHJpZ2h0OiAnMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFNpemU6ICcyMHB4Jyxcbn0sXG5Ob3RpZmljYXRpb25PcGVuZWQ6IHtcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsIFxuICBwYWRkaW5nOiAnMCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBmb250U2l6ZTogJzIwcHgnLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn0sXG5cbm1lbnVJdGVtOiB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIHRvcDogJzIwcHgnLFxuICByaWdodDogJzQwcHgnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgekluZGV4OiAxLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBhbmltYXRpb25OYW1lOiBbb3BhY2l0eUtleWZyYW1lcywgYm91bmNlS2V5ZnJhbWVzXSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBbJzFzJywgJzAuMnMnXSxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgIH0sXG4gIH0sXG4gIGhpZGVNZW51SXRlbToge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcblxuZGVmYXVsdE5vdGlmaWNhdGlvblN0eWxlOiB7XG4gIGNvbG9yOiAnYmx1ZScsXG59LFxudXJnZW50Tm90aWZpY2F0aW9uU3R5bGU6IHtcbiAgY29sb3I6ICdyZWQnLFxufSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25zKHsgZGlzcGxheURyYXdlciwgbGlzdE5vdGlmaWNhdGlvbnMgfSkge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ2xvc2UgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7TG9naW4oKSAmJiAhZGlzcGxheURyYXdlciAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHN0eWxlcy5tZW51SXRlbSl9PllvdXIgbm90aWZpY2F0aW9uczwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtkaXNwbGF5RHJhd2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMubm90aWZpY2F0aW9ucywgc3R5bGVzLk5vdGlmaWNhdGlvbk9wZW5lZCl9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICByaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgICB0b3A6ICcyMHB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICczMHB4JyB9fT4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtsaXN0Tm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8cD5ObyBuZXcgbm90aWZpY2F0aW9uIGZvciBub3c8L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPkhlcmUgaXMgdGhlIGxpc3Qgb2Ygbm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtsaXN0Tm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZmljYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e25vdGlmaWNhdGlvbi50eXBlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90aWZpY2F0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBodG1sPXtub3RpZmljYXRpb24uaHRtbH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbk5vdGlmaWNhdGlvbnMucHJvcFR5cGVzID0ge1xuICBkaXNwbGF5RHJhd2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGlzdE5vdGlmaWNhdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE5vdGlmaWNhdGlvbkl0ZW1TaGFwZSksXG59O1xuXG5Ob3RpZmljYXRpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheURyYXdlcjogdHJ1LFxuICBsaXN0Tm90aWZpY2F0aW9uczogW10sXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDc5Y2Q4N2Y0NmQzZmY3NWNiNGVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRMYXRlc3ROb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25JdGVtIiwiTm90aWZpY2F0aW9uSXRlbVNoYXBlIiwiU3R5bGVTaGVldCIsImNzcyIsIkxvZ2luIiwib3BhY2l0eUtleWZyYW1lcyIsIm9wYWNpdHkiLCJib3VuY2VLZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJzdHlsZXMiLCJjcmVhdGUiLCJub3RpZmljYXRpb25zIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImJveFNpemluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJOb3RpZmljYXRpb25PcGVuZWQiLCJsZWZ0IiwibWVudUl0ZW0iLCJjdXJzb3IiLCJ6SW5kZXgiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImhpZGVNZW51SXRlbSIsImRlZmF1bHROb3RpZmljYXRpb25TdHlsZSIsImNvbG9yIiwidXJnZW50Tm90aWZpY2F0aW9uU3R5bGUiLCJOb3RpZmljYXRpb25zIiwiX3JlZiIsImRpc3BsYXlEcmF3ZXIiLCJsaXN0Tm90aWZpY2F0aW9ucyIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm91dGxpbmUiLCJvbkNsaWNrIiwibGVuZ3RoIiwibWFwIiwibm90aWZpY2F0aW9uIiwia2V5IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwicHJvcFR5cGVzIiwiYm9vbCIsImFycmF5T2YiLCJkZWZhdWx0UHJvcHMiLCJ0cnUiXSwic291cmNlUm9vdCI6IiJ9