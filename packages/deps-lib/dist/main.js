(function() {
var __webpack_modules__ = {
"./src/index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'run': function() { return run; }
});
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* react */"react");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0__default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0_);

 function run() {
    console.log("deps-lib", react__WEBPACK_IMPORTED_MODULE_0__default);
}
},
"react": function (module, exports, __webpack_require__) {
module.exports = require('react')},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
// webpack/runtime/has_own_property
(function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/define_property_getters
(function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/make_namespace_object
(function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/compat_get_default_export
(function() {
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function(module) {
	// var getter = module && module.__esModule ?
    //     function() { return module['default']; } :
    //     function() { return module; }
	// __webpack_require__.d(getter, { a: getter });
	// return getter;
	return module && module.__esModule ? module['default'] : module;
};
})();
var __webpack_exports__ = __webpack_require__("./src/index.js");module["exports"] = __webpack_exports__;

})()

//# sourceMappingURL=main.js.map