(function() {
var __webpack_modules__ = {
"151": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _411 = __webpack_require__.ir(__webpack_require__("411"));
console.log(_411.default);
},
"411": function (module, exports, __webpack_require__) {
module.exports = {
  "my-class": "_07b83b82576f8086",
  "my-class2": "b2fabca1ec7065ff",
};
},

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
// ir
(function() {
function _getRequireCache(nodeInterop) {
	if (typeof WeakMap !== "function") return null;

	var cacheBabelInterop = new WeakMap();
	var cacheNodeInterop = new WeakMap();
	return (_getRequireCache = function (nodeInterop) {
		return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	})(nodeInterop);
}

__webpack_require__.ir = function (obj, nodeInterop) {
	if (!nodeInterop && obj && obj.__esModule) {
		return obj;
	}

	if (
		obj === null ||
		(typeof obj !== "object" && typeof obj !== "function")
	) {
		return { default: obj };
	}

	var cache = _getRequireCache(nodeInterop);
	if (cache && cache.has(obj)) {
		return cache.get(obj);
	}

	var newObj = {};
	var hasPropertyDescriptor =
		Object.defineProperty && Object.getOwnPropertyDescriptor;
	for (var key in obj) {
		if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor
				? Object.getOwnPropertyDescriptor(obj, key)
				: null;
			if (desc && (desc.get || desc.set)) {
				Object.defineProperty(newObj, key, desc);
			} else {
				newObj[key] = obj[key];
			}
		}
	}
	newObj.default = obj;
	if (cache) {
		cache.set(obj, newObj);
	}
	return newObj;
};

})();
var __webpack_exports__ = __webpack_require__("151");
})()

//# sourceMappingURL=main.js.map