"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/imageProxy";
exports.ids = ["pages/api/imageProxy"];
exports.modules = {

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash.merge":
/*!*******************************!*\
  !*** external "lodash.merge" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash.merge");

/***/ }),

/***/ "user-agents":
/*!******************************!*\
  !*** external "user-agents" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("user-agents");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "(api)/./node_modules/@blazity/next-image-proxy/lib/next-image-proxy.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@blazity/next-image-proxy/lib/next-image-proxy.module.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withImageProxy\": () => (/* binding */ n)\n/* harmony export */ });\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stream */ \"stream\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.merge */ \"lodash.merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! user-agents */ \"user-agents\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(user_agents__WEBPACK_IMPORTED_MODULE_3__);\nfunction n(n){var a=lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({whitelistedPatterns:[],fallbackUrl:\"\",messages:{wrongFormat:\"Image url not provided or has wrong format\",notWhitelisted:\"Provided image url is not whitelisted\",imageFetchError:\"Couldn't fetch the image\"}},n);return function(s,n){try{var m=s.query.imageUrl;return!m||m&&Array.isArray(m)?(n.status(400).send({message:a.messages.wrongFormat}),Promise.resolve()):(u=m,a.whitelistedPatterns.some(function(e){return u.match(e)})?Promise.resolve(function(r){try{return Promise.resolve(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(r,{headers:{\"user-agent\":(new (user_agents__WEBPACK_IMPORTED_MODULE_3___default())).toString()}}).then(function(e){return e.body}))}catch(e){return Promise.reject(e)}}(m)).then(function(e){e?function(e,s,o){var n=new stream__WEBPACK_IMPORTED_MODULE_1__.Stream.PassThrough;stream__WEBPACK_IMPORTED_MODULE_1___default().pipeline(s,n,function(r){if(r)return console.log(r),void i(e,o)}),n.pipe(e)}(n,e,a):i(n,a)}):(n.status(422).send({message:a.messages.notWhitelisted}),Promise.resolve()))}catch(e){return Promise.reject(e)}var u}}function i(e,r){r.fallbackUrl.trim()?e.redirect(r.fallbackUrl):e.status(422).send({message:r.messages.imageFetchError})}\n//# sourceMappingURL=next-image-proxy.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQGJsYXppdHkvbmV4dC1pbWFnZS1wcm94eS9saWIvbmV4dC1pbWFnZS1wcm94eS5tb2R1bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRILGNBQWMsTUFBTSxtREFBQyxFQUFFLGdEQUFnRCw0SkFBNEosSUFBSSxxQkFBcUIsSUFBSSx1QkFBdUIsbURBQW1ELCtCQUErQixpRUFBaUUsa0JBQWtCLDhCQUE4QixJQUFJLHVCQUF1Qix5REFBQyxJQUFJLFNBQVMsa0JBQWtCLG9EQUFDLGNBQWMsbUJBQW1CLGNBQWMsR0FBRyxTQUFTLDBCQUEwQixzQkFBc0Isa0JBQWtCLFVBQVUsc0RBQWEsQ0FBQyxzREFBVSxpQkFBaUIsdUNBQXVDLFlBQVksZUFBZSx1QkFBdUIsa0NBQWtDLHNCQUFzQixTQUFTLHlCQUF5QixPQUFPLGdCQUFnQixtRUFBbUUsbUNBQW1DLEVBQThCO0FBQ2hwQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXRwbGFjZS8uL25vZGVfbW9kdWxlcy9AYmxheml0eS9uZXh0LWltYWdlLXByb3h5L2xpYi9uZXh0LWltYWdlLXByb3h5Lm1vZHVsZS5qcz9kOGE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlIGZyb21cImlzb21vcnBoaWMtdW5mZXRjaFwiO2ltcG9ydCByLHtTdHJlYW0gYXMgdH1mcm9tXCJzdHJlYW1cIjtpbXBvcnQgcyBmcm9tXCJsb2Rhc2gubWVyZ2VcIjtpbXBvcnQgbyBmcm9tXCJ1c2VyLWFnZW50c1wiO2Z1bmN0aW9uIG4obil7dmFyIGE9cyh7d2hpdGVsaXN0ZWRQYXR0ZXJuczpbXSxmYWxsYmFja1VybDpcIlwiLG1lc3NhZ2VzOnt3cm9uZ0Zvcm1hdDpcIkltYWdlIHVybCBub3QgcHJvdmlkZWQgb3IgaGFzIHdyb25nIGZvcm1hdFwiLG5vdFdoaXRlbGlzdGVkOlwiUHJvdmlkZWQgaW1hZ2UgdXJsIGlzIG5vdCB3aGl0ZWxpc3RlZFwiLGltYWdlRmV0Y2hFcnJvcjpcIkNvdWxkbid0IGZldGNoIHRoZSBpbWFnZVwifX0sbik7cmV0dXJuIGZ1bmN0aW9uKHMsbil7dHJ5e3ZhciBtPXMucXVlcnkuaW1hZ2VVcmw7cmV0dXJuIW18fG0mJkFycmF5LmlzQXJyYXkobSk/KG4uc3RhdHVzKDQwMCkuc2VuZCh7bWVzc2FnZTphLm1lc3NhZ2VzLndyb25nRm9ybWF0fSksUHJvbWlzZS5yZXNvbHZlKCkpOih1PW0sYS53aGl0ZWxpc3RlZFBhdHRlcm5zLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIHUubWF0Y2goZSl9KT9Qcm9taXNlLnJlc29sdmUoZnVuY3Rpb24ocil7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUoZShyLHtoZWFkZXJzOntcInVzZXItYWdlbnRcIjoobmV3IG8pLnRvU3RyaW5nKCl9fSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gZS5ib2R5fSkpfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19KG0pKS50aGVuKGZ1bmN0aW9uKGUpe2U/ZnVuY3Rpb24oZSxzLG8pe3ZhciBuPW5ldyB0LlBhc3NUaHJvdWdoO3IucGlwZWxpbmUocyxuLGZ1bmN0aW9uKHIpe2lmKHIpcmV0dXJuIGNvbnNvbGUubG9nKHIpLHZvaWQgaShlLG8pfSksbi5waXBlKGUpfShuLGUsYSk6aShuLGEpfSk6KG4uc3RhdHVzKDQyMikuc2VuZCh7bWVzc2FnZTphLm1lc3NhZ2VzLm5vdFdoaXRlbGlzdGVkfSksUHJvbWlzZS5yZXNvbHZlKCkpKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9dmFyIHV9fWZ1bmN0aW9uIGkoZSxyKXtyLmZhbGxiYWNrVXJsLnRyaW0oKT9lLnJlZGlyZWN0KHIuZmFsbGJhY2tVcmwpOmUuc3RhdHVzKDQyMikuc2VuZCh7bWVzc2FnZTpyLm1lc3NhZ2VzLmltYWdlRmV0Y2hFcnJvcn0pfWV4cG9ydHtuIGFzIHdpdGhJbWFnZVByb3h5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5leHQtaW1hZ2UtcHJveHkubW9kdWxlLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/@blazity/next-image-proxy/lib/next-image-proxy.module.js\n");

/***/ }),

/***/ "(api)/./pages/api/imageProxy.ts":
/*!*********************************!*\
  !*** ./pages/api/imageProxy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blazity_next_image_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blazity/next-image-proxy */ \"(api)/./node_modules/@blazity/next-image-proxy/lib/next-image-proxy.module.js\");\n// pages/api/imageProxy.ts\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_blazity_next_image_proxy__WEBPACK_IMPORTED_MODULE_0__.withImageProxy)({\n    whitelistedPatterns: [\n        /^https?:\\/\\/(.*).ipfs.w3s.link/\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2VQcm94eS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBCQUEwQjtBQUVnQztBQUUxRCxpRUFBZUEseUVBQWMsQ0FBQztJQUFFQyxtQkFBbUIsRUFBRTs7S0FBa0M7Q0FBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0LW1hcmtldHBsYWNlLy4vcGFnZXMvYXBpL2ltYWdlUHJveHkudHM/NWI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvaW1hZ2VQcm94eS50c1xuXG5pbXBvcnQgeyB3aXRoSW1hZ2VQcm94eSB9IGZyb20gJ0BibGF6aXR5L25leHQtaW1hZ2UtcHJveHknXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhJbWFnZVByb3h5KHsgd2hpdGVsaXN0ZWRQYXR0ZXJuczogWy9eaHR0cHM/OlxcL1xcLyguKikuaXBmcy53M3MubGluay9dIH0pIl0sIm5hbWVzIjpbIndpdGhJbWFnZVByb3h5Iiwid2hpdGVsaXN0ZWRQYXR0ZXJucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/imageProxy.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/imageProxy.ts"));
module.exports = __webpack_exports__;

})();