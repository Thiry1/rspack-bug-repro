(function() {
var __webpack_modules__ = {
"735": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _630 = __webpack_require__.ir(__webpack_require__("630"));
var _987 = __webpack_require__.ir(__webpack_require__("987"));
var ___CSS_LOADER_EXPORT___ = (0, _987.default)(_630.default);
___CSS_LOADER_EXPORT___.push([
    module.id,
    ".hRx2hZOU6co52DjT{font-size:100px}.Yx6_QbkUEc5y0zyr{font-size:100px}",
    "",
    {
        "version": 3,
        "sources": [
            "webpack://./src/style.module.scss"
        ],
        "names": [],
        "mappings": "AAAA,kBACE,eAAA,CAGF,kBACE,eAAA",
        "sourcesContent": [
            ".my-class:global {\n  font-size: 100px;\n}\n\n.my-class2 :global {\n  font-size: 100px;\n}\n"
        ],
        "sourceRoot": ""
    }
]);
___CSS_LOADER_EXPORT___.locals = {
    "my-class": "hRx2hZOU6co52DjT",
    "my-class2": "Yx6_QbkUEc5y0zyr"
};
var _default = ___CSS_LOADER_EXPORT___;
},
"987": function (module, exports, __webpack_require__) {
"use strict";
module.exports = function(cssWithMappingToString) {
    var list = [];
    list.toString = function toString() {
        return this.map(function(item) {
            var content = "";
            var needLayer = typeof item[5] !== "undefined";
            if (item[4]) content += "@supports (".concat(item[4], ") {");
            if (item[2]) content += "@media ".concat(item[2], " {");
            if (needLayer) content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
            content += cssWithMappingToString(item);
            if (needLayer) content += "}";
            if (item[2]) content += "}";
            if (item[4]) content += "}";
            return content;
        }).join("");
    };
    list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === "string") modules = [
            [
                null,
                modules,
                undefined
            ]
        ];
        var alreadyImportedModules = {};
        if (dedupe) for(var k = 0; k < this.length; k++){
            var id = this[k][0];
            if (id != null) alreadyImportedModules[id] = true;
        }
        for(var _k = 0; _k < modules.length; _k++){
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) continue;
            if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") item[5] = layer;
                else {
                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                    item[5] = layer;
                }
            }
            if (media) {
                if (!item[2]) item[2] = media;
                else {
                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                    item[2] = media;
                }
            }
            if (supports) {
                if (!item[4]) item[4] = "".concat(supports);
                else {
                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                    item[4] = supports;
                }
            }
            list.push(item);
        }
    };
    return list;
};
},
"630": function (module, exports, __webpack_require__) {
"use strict";
module.exports = function(item) {
    var content = item[1];
    var cssMapping = item[3];
    if (!cssMapping) return content;
    if (typeof btoa === "function") {
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        var sourceMapping = "/*# ".concat(data, " */");
        return [
            content
        ].concat([
            sourceMapping
        ]).join("\n");
    }
    return [
        content
    ].join("\n");
};
},
"585": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _676 = __webpack_require__.ir(__webpack_require__("676"));
var _144 = __webpack_require__.ir(__webpack_require__("144"));
var _774 = __webpack_require__.ir(__webpack_require__("774"));
var _751 = __webpack_require__.ir(__webpack_require__("751"));
var _214 = __webpack_require__.ir(__webpack_require__("214"));
var _245 = __webpack_require__.ir(__webpack_require__("245"));
var _735 = __webpack_require__.ir(__webpack_require__.es(__webpack_require__("735"), exports));
var options = {};
options.styleTagTransform = _245.default;
options.setAttributes = _751.default;
options.insert = _774.default.bind(null, "head");
options.domAPI = _144.default;
options.insertStyleElement = _214.default;
(0, _676.default)(_735.default, options);
var _default = _735.default && _735.default.locals ? _735.default.locals : undefined;
},
"676": function (module, exports, __webpack_require__) {
"use strict";
var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
    var result = -1;
    for(var i = 0; i < stylesInDOM.length; i++)if (stylesInDOM[i].identifier === identifier) {
        result = i;
        break;
    }
    return result;
}
function modulesToDom(list, options) {
    var idCountMap = {};
    var identifiers = [];
    for(var i = 0; i < list.length; i++){
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var indexByIdentifier = getIndexByIdentifier(identifier);
        var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5]
        };
        if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
        } else {
            var updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function addElementStyle(obj, options) {
    var api = options.domAPI(options);
    api.update(obj);
    var updater = function updater(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) return;
            api.update(obj = newObj);
        } else api.remove();
    };
    return updater;
}
module.exports = function(list, options) {
    options = options || {};
    list = list || [];
    var lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        for(var i = 0; i < lastIdentifiers.length; i++){
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
        }
        var newLastIdentifiers = modulesToDom(newList, options);
        for(var _i = 0; _i < lastIdentifiers.length; _i++){
            var _identifier = lastIdentifiers[_i];
            var _index = getIndexByIdentifier(_identifier);
            if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();
                stylesInDOM.splice(_index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};
},
"774": function (module, exports, __webpack_require__) {
"use strict";
var memo = {};
function getTarget(target) {
    if (typeof memo[target] === "undefined") {
        var styleTarget = document.querySelector(target);
        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
            styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
            styleTarget = null;
        }
        memo[target] = styleTarget;
    }
    return memo[target];
}
function insertBySelector(insert, style) {
    var target = getTarget(insert);
    if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    target.appendChild(style);
}
module.exports = insertBySelector;
},
"214": function (module, exports, __webpack_require__) {
"use strict";
function insertStyleElement(options) {
    var element = document.createElement("style");
    options.setAttributes(element, options.attributes);
    options.insert(element, options.options);
    return element;
}
module.exports = insertStyleElement;
},
"751": function (module, exports, __webpack_require__) {
"use strict";
function setAttributesWithoutAttributes(styleElement) {
    var nonce = typeof __webpack_nonce__ !== "undefined" ? __webpack_nonce__ : null;
    if (nonce) styleElement.setAttribute("nonce", nonce);
}
module.exports = setAttributesWithoutAttributes;
},
"144": function (module, exports, __webpack_require__) {
"use strict";
function apply(styleElement, options, obj) {
    var css = "";
    if (obj.supports) css += "@supports (".concat(obj.supports, ") {");
    if (obj.media) css += "@media ".concat(obj.media, " {");
    var needLayer = typeof obj.layer !== "undefined";
    if (needLayer) css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    css += obj.css;
    if (needLayer) css += "}";
    if (obj.media) css += "}";
    if (obj.supports) css += "}";
    var sourceMap = obj.sourceMap;
    if (sourceMap && typeof btoa !== "undefined") css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
    options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
    if (styleElement.parentNode === null) return false;
    styleElement.parentNode.removeChild(styleElement);
}
function domAPI(options) {
    if (typeof document === "undefined") return {
        update: function update() {},
        remove: function remove() {}
    };
    var styleElement = options.insertStyleElement(options);
    return {
        update: function update(obj) {
            apply(styleElement, options, obj);
        },
        remove: function remove() {
            removeStyleElement(styleElement);
        }
    };
}
module.exports = domAPI;
},
"245": function (module, exports, __webpack_require__) {
"use strict";
function styleTagTransform(css, styleElement) {
    if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
    else {
        while(styleElement.firstChild)styleElement.removeChild(styleElement.firstChild);
        styleElement.appendChild(document.createTextNode(css));
    }
}
module.exports = styleTagTransform;
},
"151": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _585 = __webpack_require__.ir(__webpack_require__("585"));
console.log(_585.default);
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
      id: moduleId,
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
// es
(function() {
__webpack_require__.es = function (from, to) {
	Object.keys(from).forEach(function (k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k))
			Object.defineProperty(to, k, {
				enumerable: true,
				get: function () {
					return from[k];
				}
			});
	});
	return from;
};

})();
var __webpack_exports__ = __webpack_require__("151");
})()

//# sourceMappingURL=main.js.map