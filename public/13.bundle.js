(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"amplify_checkbox\", function() { return AmplifyCheckbox; });\n/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ \"./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js\");\n\nvar amplifyCheckboxCss = \":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}\";\nvar AmplifyCheckbox = /** @class */ (function () {\n    function AmplifyCheckbox(hostRef) {\n        var _this = this;\n        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n        /** If `true`, the checkbox is selected. */\n        this.checked = false;\n        /** If `true`, the checkbox is disabled */\n        this.disabled = false;\n        this.onClick = function () {\n            _this.checked = !_this.checked;\n        };\n    }\n    AmplifyCheckbox.prototype.render = function () {\n        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\", { class: \"checkbox\" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", { onClick: this.onClick, type: \"checkbox\", name: this.name, value: this.value, id: this.fieldId, checked: this.checked, disabled: this.disabled }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"amplify-label\", { htmlFor: this.fieldId }, this.label)));\n    };\n    return AmplifyCheckbox;\n}());\nAmplifyCheckbox.style = amplifyCheckboxCss;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGF3cy1hbXBsaWZ5L3VpLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L2FtcGxpZnktY2hlY2tib3guZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGF3cy1hbXBsaWZ5L3VpLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L2FtcGxpZnktY2hlY2tib3guZW50cnkuanM/ZGI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGggfSBmcm9tICcuL2luZGV4LTM5OTY5Nzg1LmpzJztcbnZhciBhbXBsaWZ5Q2hlY2tib3hDc3MgPSBcIjpob3N0ey0tZm9udC1mYW1pbHk6dmFyKC0tYW1wbGlmeS1mb250LWZhbWlseSl9LmNoZWNrYm94e21hcmdpbi1ib3R0b206MjJweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZzoxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtc20pO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KX0uY2hlY2tib3ggaW5wdXR7bWFyZ2luLXJpZ2h0OjEycHh9XCI7XG52YXIgQW1wbGlmeUNoZWNrYm94ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlDaGVja2JveChob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCBpcyBzZWxlY3RlZC4gKi9cbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIC8qKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZCAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNoZWNrZWQgPSAhX3RoaXMuY2hlY2tlZDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQW1wbGlmeUNoZWNrYm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczogXCJjaGVja2JveFwiIH0sIGgoXCJpbnB1dFwiLCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgdHlwZTogXCJjaGVja2JveFwiLCBuYW1lOiB0aGlzLm5hbWUsIHZhbHVlOiB0aGlzLnZhbHVlLCBpZDogdGhpcy5maWVsZElkLCBjaGVja2VkOiB0aGlzLmNoZWNrZWQsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIH0pLCBoKFwiYW1wbGlmeS1sYWJlbFwiLCB7IGh0bWxGb3I6IHRoaXMuZmllbGRJZCB9LCB0aGlzLmxhYmVsKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFtcGxpZnlDaGVja2JveDtcbn0oKSk7XG5BbXBsaWZ5Q2hlY2tib3guc3R5bGUgPSBhbXBsaWZ5Q2hlY2tib3hDc3M7XG5leHBvcnQgeyBBbXBsaWZ5Q2hlY2tib3ggYXMgYW1wbGlmeV9jaGVja2JveCB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js\n");

/***/ })

}]);