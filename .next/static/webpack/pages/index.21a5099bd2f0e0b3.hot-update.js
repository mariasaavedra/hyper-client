"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PostList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostList.component */ \"./components/PostList.component.tsx\");\n/* harmony import */ var _components_Button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button.component */ \"./components/Button.component.tsx\");\n/* harmony import */ var _components_Modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal.component */ \"./components/Modal.component.tsx\");\n/* harmony import */ var _components_CreatePostForm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CreatePostForm.component */ \"./components/CreatePostForm.component.tsx\");\n/* harmony import */ var _components_Layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout.component */ \"./components/Layout.component.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    console.log(\"development\", \"process env\");\n    var url = \"http://api.digitalbytes.com:1337/api\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), posts = ref[0], setPosts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showModal = ref1[0], setShowModal = ref1[1];\n    var toggleModal = function() {\n        setShowModal(!showModal);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"\".concat(url, \"/posts/?populate=*\")).then(function(response) {\n            setPosts(response.data.data);\n        });\n    }, []);\n    if (!posts) return null;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __source: {\n            fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actions) + \" container flex justify-end invisible md:visible lg:visible xl:visible sm:visible\",\n                    __source: {\n                        fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: toggleModal,\n                        priority: \"outline\",\n                        __source: {\n                            fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: \"Submit Content\"\n                    })\n                })\n            }),\n            showModal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Modal_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                confirmLabel: \"Submit\",\n                handleClose: toggleModal,\n                __source: {\n                    fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: \"Submit an entry below.\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CreatePostForm_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            __source: {\n                                fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"mt-4 grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-1 gap-4\",\n                __source: {\n                    fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PostList_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/mariasaavedra/Development/hypergenius/client/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"L4qw7OdHcfW40fT2oadAPo7jiuc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQztBQUN0QjtBQUNrQjtBQUdZO0FBRUo7QUFDRjtBQUNrQjtBQUNoQjs7O0FBaUJuRCxHQUFLLENBQUNTLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDOztJQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBOUJiLENBQWEsY0E4QnVCLENBQWE7SUFDL0MsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBc0M7SUFFbEQsR0FBSyxDQUFxQlYsR0FBZ0MsR0FBaENBLCtDQUFRLElBQTNCVyxLQUFLLEdBQWNYLEdBQWdDLEtBQTVDWSxRQUFRLEdBQUlaLEdBQWdDO0lBQzFELEdBQUssQ0FBNkJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXpDYSxTQUFTLEdBQWtCYixJQUFlLEtBQS9CYyxZQUFZLEdBQUlkLElBQWU7SUFDakQsR0FBSyxDQUFDZSxXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QkQsWUFBWSxFQUFFRCxTQUFTO0lBQ3pCLENBQUM7SUFFRFosZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkYsZ0RBQVMsQ0FBRSxHQUFNLE1BQWtCLENBQXRCVyxHQUFHLEVBQUMsQ0FBa0Isc0JBQUdPLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO1lBQ3hETixRQUFRLENBQUNNLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQSxJQUFJO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBRSxHQUFHUixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFFdkIsTUFBTSx1RUFDSEwsb0VBQU07Ozs7Ozs7O2lGQUNKYyxDQUFHOzs7Ozs7OytGQUNDQSxDQUFHO29CQUNGQyxTQUFTLEVBQUd2Qix5RUFBYyxHQUFFLENBQW1GOzs7Ozs7O21HQUM5R0ssb0VBQU07d0JBQUNvQixPQUFPLEVBQUVSLFdBQVc7d0JBQUVTLFFBQVEsRUFBQyxDQUFTOzs7Ozs7O2tDQUFDLENBRWpEOzs7O1lBSUhYLFNBQVMseUVBQ1BULG1FQUFLO2dCQUFDcUIsWUFBWSxFQUFDLENBQVE7Z0JBQUNDLFdBQVcsRUFBRVgsV0FBVzs7Ozs7Ozs7OzZGQUVoRFksQ0FBQzs7Ozs7OztzQ0FBQyxDQUFzQjs7NkZBQ3hCdEIsNEVBQWM7Ozs7Ozs7Ozs7O2lGQUlwQmUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXdEOzs7Ozs7OytGQUNwRW5CLHNFQUFROzs7Ozs7Ozs7OztBQUluQixDQUFDO0dBMUNLSyxJQUFJO0tBQUpBLElBQUk7QUE0Q1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgUG9zdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdExpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgQ3JlYXRlUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlUG9zdEZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC5jb21wb25lbnRcIjtcblxuaW50ZXJmYWNlIEF0dHJpYnV0ZXMge1xuICB1cmw6IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb3Zlcl91cmw/OiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgUG9zdHNSZXNwb25zZSB7XG4gIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXM7XG59XG5pbnRlcmZhY2UgUG9zdHNSZXNwb25zZSB7XG4gIGlkOiBudW1iZXI7XG4gIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXM7XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgXCJwcm9jZXNzIGVudlwiKVxuICBjb25zdCB1cmwgPSBcImh0dHA6Ly9hcGkuZGlnaXRhbGJ5dGVzLmNvbToxMzM3L2FwaVwiO1xuXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8QXJyYXk8UG9zdHNSZXNwb25zZT4+KCk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldFNob3dNb2RhbCghc2hvd01vZGFsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgJHt1cmx9L3Bvc3RzLz9wb3B1bGF0ZT0qYCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFBvc3RzKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXBvc3RzKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy5hY3Rpb25zICtcIiBjb250YWluZXIgZmxleCBqdXN0aWZ5LWVuZCBpbnZpc2libGUgbWQ6dmlzaWJsZSBsZzp2aXNpYmxlIHhsOnZpc2libGUgc206dmlzaWJsZVwifSA+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSBwcmlvcml0eT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgU3VibWl0IENvbnRlbnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgICAgPE1vZGFsIGNvbmZpcm1MYWJlbD1cIlN1Ym1pdFwiIGhhbmRsZUNsb3NlPXt0b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cD5TdWJtaXQgYW4gZW50cnkgYmVsb3cuPC9wPlxuICAgICAgICAgICAgICA8Q3JlYXRlUG9zdEZvcm0+PC9DcmVhdGVQb3N0Rm9ybT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBncmlkIGxnOmdyaWQtY29scy0zIHNtOmdyaWQtY29scy0xIHNtOmdhcC0xIGdhcC00XCI+XG4gICAgICAgICAgPFBvc3RMaXN0PjwvUG9zdExpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdExpc3QiLCJCdXR0b24iLCJNb2RhbCIsIkNyZWF0ZVBvc3RGb3JtIiwiTGF5b3V0IiwiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJwb3N0cyIsInNldFBvc3RzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidG9nZ2xlTW9kYWwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWN0aW9ucyIsIm9uQ2xpY2siLCJwcmlvcml0eSIsImNvbmZpcm1MYWJlbCIsImhhbmRsZUNsb3NlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});