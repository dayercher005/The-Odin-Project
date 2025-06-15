/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\n    --header-font: Impact;\n    --regular-font: Roboto;\n    --background-color: hsl(30, 86%, 75%);\n    --background-hover-color: hsl(30, 86%, 60%);\n    --header-color: hsl(0, 0%, 100%);\n}\n\n*{\n    background-color:var(--background-color);\n    font-family: var(--regular-font);\n    margin: 0;\n}\n\n/* CSS Code for Navigation bar and Header*/\n\nnav{\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    margin-right: 5%;\n    gap: 80px;\n    background-color: var(--header-color);\n}\n\nh1[class=\"headerText\"]{\n    display: flex;\n    margin-left: 10%;\n    font-family: var(--header-font);\n    font-size: 40px;\n}\n\nbutton, button:hover{\n    height: 50px;\n    width: 100px;\n    border-radius: 20px;\n    font-size: 1.5rem;\n    font-family: var(--header-font);\n    border: none;\n\n}\n\nbutton:hover{\n    background-color: var(--background-hover-color);\n    transform: translateY(-5px);\n    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;\n    box-shadow: 0 10px 20px var(--background-hover-color);\n}\n\n\nheader[id = \"header\"]{\n    display: flex;\n    padding: 30px;\n}\n\nheader, nav[class=\"navButton\"], h1[class=\"headerText\"] {\n    background-color: var(--header-color);\n}\n\n/* CSS Code for HomePage in Javascript*/\n\n.HomeSushiImage{\n    width: 45%;\n    height: 50%;\n    max-width: 750px;\n    min-width: 300px;\n}\n\nh1[class=\"mainDescription\"]{\n    font-family: var(--regular-font);\n    font-weight: 800;\n    margin-right: auto;\n    margin-bottom: 20px;\n    font-size: 50px;\n}\n\n.descriptionContainer{\n    margin: auto 0 auto auto;\n    width: 500px;\n}\n\n\n.minorDescription{\n    margin-left: auto;\n    font-size: 20px;\n    color: hsl(0, 0%, 44%)\n}\n\nbutton[class=\"orderButton\"]{\n    margin-right: auto;\n    margin-top: 25px;\n    font-size: 20px;\n    font-weight: 500;\n    border-radius: 10px;\n    font-family: var(--regular-font);\n    width: 120px;\n    color: var(--header-color);\n    background-color: hsl(0, 72%, 60%)\n}   \n\n\nbutton[class=\"orderButton\"]:hover{\n    background-color: hsl(0, 72%, 45%);\n    transform: translateY(-5px);\n    transition: background-color 0.3s, transform 0.3s;\n    box-shadow: 0 5px 35px hsl(0, 72%, 55%);\n}\n\n/* CSS Code for Menu Page in Javascript*/\n\n.menuContainer > *  {\n    background-color: var(--header-color);\n}\n\n.menuHeader{\n    padding: 20px;\n    border-bottom: 3px solid hsl(0, 72%, 60%);\n    border-bottom-width: 0.3vw;\n}\n\n.menuContainer{\n    width: 90vw;\n    max-width: 1100px;\n}\n\n.menuTextContainer > *, .menuTextContainer, .menuItem{\n    background-color: hsl(0, 0%, 94%)\n}\n\n\n.menuGridContainer{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n}\n\n.menuItem{\n    display: flex;\n    gap: 10px;\n    margin: 20px;\n    border: 1px solid rgb(128, 126, 126);\n    border-radius: 10px;\n    padding: 15px;\n}\n\n.menuHeader{\n    text-align: center;\n}\n\n.menuImage{\n    width: 200px;\n    height: 150px;\n    border-radius: 10px;\n}\n\n.menuTextContainer{\n    display: grid;\n    gap: 20px\n}\n\n.menuItem:hover{\n    transform: translateY(-7px);\n    transition: transform 0.25s;\n}\n\n.price{\n    font-size: 1.5em;\n    font-weight: 800;\n}\n\n\n/* CSS Code for About Page in Javascript */\n\n.secondSushiImage{\n    width: 25%;\n    height: 35%;\n    max-width: 350px;\n    max-height: 350px;\n    align-self: center;\n}\n\n.aboutContainer{\n    background-color: var(--header-color);\n    width: 60vw;\n    margin: 5%;\n    border-radius: 20px;\n}\n\n.Section{\n    background-color: inherit;\n    line-height: 1.5;\n}\n\n.Content{\n    font-size: 20px;\n    margin: 20px;\n}\n\n.aboutHeader{\n    border-bottom: 4px solid hsl(0, 72%, 60%);\n    margin: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restauranthomepage/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restauranthomepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutFunction: () => (/* binding */ AboutFunction)\n/* harmony export */ });\n/* harmony import */ var _Sushi2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sushi2.png */ \"./src/Sushi2.png\");\n\n\nconst AboutFunction = () => {\n\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\";\n\n    const secondSushiImage = document.createElement(\"img\");\n    secondSushiImage.src = _Sushi2_png__WEBPACK_IMPORTED_MODULE_0__;\n    secondSushiImage.classList.add(\"secondSushiImage\");\n    content.appendChild(secondSushiImage);\n    \n    const aboutContainer = document.createElement(\"div\");\n    aboutContainer.classList.add(\"aboutContainer\");\n    content.appendChild(aboutContainer);\n    \n    const firstSectionHeader = document.createElement(\"h2\");\n    firstSectionHeader.classList.add(\"Section\", \"aboutHeader\");\n    firstSectionHeader.textContent = \"Who Are We?\"\n    aboutContainer.appendChild(firstSectionHeader);\n\n    const firstSectionContent = document.createElement(\"div\");\n    firstSectionContent.classList.add(\"Section\", \"Content\");\n    firstSectionContent.textContent = \"In our Japanese Restaurant, we are dedicated in honing our craft of making Sushis to spread the Japanese culture to our customers. We started this business in making Sushi through our love of Japan's rich traditional culture. Hence, we believe the best way to spread their culture is by serving their famous local delicacy, Sushi!\";\n    aboutContainer.appendChild(firstSectionContent);\n\n    const secondSectionHeader = document.createElement(\"h2\");\n    secondSectionHeader.classList.add(\"Section\", \"aboutHeader\");\n    secondSectionHeader.textContent = \"What We Do\"\n    aboutContainer.appendChild(secondSectionHeader);\n\n    const secondSectionContent = document.createElement(\"div\");\n    secondSectionContent.classList.add(\"Section\", \"Content\");\n    secondSectionContent.textContent = \"We specialise in making all types of Sushis. From the small and delicate Maki and Uramkai Sushi, to the classic Nigiri and Temaki Sushi, there will always be Sushis catered to your preference. Every Sushi we make is prepared with utmost precision and detail as to us, our customers experience is our top priority, and thats what makes us stand out. \";\n    aboutContainer.appendChild(secondSectionContent);\n\n    const thirdSectionHeader = document.createElement(\"h2\");\n    thirdSectionHeader.classList.add(\"Section\", \"aboutHeader\");\n    thirdSectionHeader.textContent = \"Why We're Here\"\n    aboutContainer.appendChild(thirdSectionHeader);\n\n    const thirdSectionContent = document.createElement(\"div\");\n    thirdSectionContent.classList.add(\"Section\", \"Content\");\n    thirdSectionContent.textContent = \"We're here to make an impact on our local community. Apart from spreading the Japanese culture, we also want our customers to have a great time in our restaurant. Our restaurant provides an ideal setting for our customers to unwind and connect with others whilst consuming Sushi.\";\n    aboutContainer.appendChild(thirdSectionContent);\n}\n\n\n//# sourceURL=webpack://restauranthomepage/./src/About.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeFunction: () => (/* binding */ HomeFunction)\n/* harmony export */ });\n/* harmony import */ var _Sushi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sushi.png */ \"./src/Sushi.png\");\n\n\nconst HomeFunction = () => {\n\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\";\n    content.style.display = \"flex\";\n    content.style.justifyContent = \"center\";\n    content.style.height = \"80vh\";\n    \n    const contentContainer = document.createElement(\"div\");\n    contentContainer.style.display = \"flex\";\n    contentContainer.classList.add(\"contentContainer\")\n    content.appendChild(contentContainer);\n\n\n    const descriptionContainer = document.createElement(\"div\");\n    descriptionContainer.classList.add(\"descriptionContainer\");\n    contentContainer.appendChild(descriptionContainer);\n    descriptionContainer.style.display = \"flex\";\n    descriptionContainer.style.alignItems = \"center\";\n    descriptionContainer.style.justifyContent = \"center;\"\n    descriptionContainer.style.flexDirection = \"column\";\n\n    const mainDescription = document.createElement(\"h1\");\n    mainDescription.classList.add(\"mainDescription\");\n    mainDescription.textContent = \"Serving you the best Sushi the country has to offer\";\n    descriptionContainer.appendChild(mainDescription);\n    \n    const minorDescription = document.createElement(\"div\");\n    minorDescription.classList.add(\"minorDescription\");\n    minorDescription.textContent = \"Sushi is a traditional Japanese dish primarily composed of cooked, vinegared rice, often combined with various ingredients like seafood, vegetables, or eggs\"\n    descriptionContainer.appendChild(minorDescription);\n    \n\n    const SushiImage = document.createElement(\"img\");\n    SushiImage.src = _Sushi_png__WEBPACK_IMPORTED_MODULE_0__\n    SushiImage.classList.add(\"HomeSushiImage\");\n    contentContainer.appendChild(SushiImage);\n    SushiImage.style.margin = \"auto\";\n\n    const orderButton = document.createElement(\"button\");\n    orderButton.classList.add(\"orderButton\");\n    descriptionContainer.appendChild(orderButton)\n    orderButton.textContent = \"Order Now\"\n}\n\n\n\n\n//# sourceURL=webpack://restauranthomepage/./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuFunction: () => (/* binding */ MenuFunction)\n/* harmony export */ });\n/* harmony import */ var _sushiMenu1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sushiMenu1.jpg */ \"./src/sushiMenu1.jpg\");\n/* harmony import */ var _sushiMenu2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sushiMenu2.jpg */ \"./src/sushiMenu2.jpg\");\n/* harmony import */ var _sushiMenu3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sushiMenu3.jpg */ \"./src/sushiMenu3.jpg\");\n/* harmony import */ var _sushiMenu4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sushiMenu4.jpg */ \"./src/sushiMenu4.jpg\");\n/* harmony import */ var _sushiMenu5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sushiMenu5.jpg */ \"./src/sushiMenu5.jpg\");\n/* harmony import */ var _sushiMenu6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sushiMenu6.jpg */ \"./src/sushiMenu6.jpg\");\n\n\n\n\n\n\n\nconst MenuFunction = () => {\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\";\n\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menuContainer\");\n    content.appendChild(menuContainer);\n    content.style.display = \"flex\";\n    content.style.alignItems = \"center\";\n\n    const menuHeader = document.createElement(\"h1\");\n    menuHeader.classList.add(\"menuHeader\");\n    menuContainer.appendChild(menuHeader);\n    menuHeader.textContent = \"Menu\";\n\n    const menuGridContainer = document.createElement(\"div\");\n    menuGridContainer.classList.add(\"menuGridContainer\");\n    menuContainer.appendChild(menuGridContainer);\n\n/* DOM for 1st Menu Item*/\n\n    const menuItem1 = document.createElement(\"div\");\n    menuItem1.classList.add(\"menuItem\");\n    menuGridContainer.appendChild(menuItem1)\n\n     const menuTextContainer1 = document.createElement(\"div\");\n    menuTextContainer1.classList.add(\"menuTextContainer\");\n    menuItem1.appendChild(menuTextContainer1);\n\n    const menuTextTitle1 = document.createElement(\"h2\");\n    menuTextTitle1.classList.add(\"menuTextTitle\");\n    menuTextTitle1.textContent = \"Gunkan Maki\";\n    menuTextContainer1.appendChild(menuTextTitle1);\n\n    const menuTextDescription1 = document.createElement(\"p\");\n    menuTextDescription1.classList.add(\"menuTextDescription\");\n    menuTextDescription1.textContent = \"A sushi that resembles a battleship, made of a ball of sushi rice wrapped with nori along the side.\"\n    menuTextContainer1.appendChild(menuTextDescription1);\n\n    const menuTextPrice1 = document.createElement(\"div\");\n    menuTextPrice1.classList.add(\"price\");\n    menuTextPrice1.textContent = \"$2.00\";\n    menuTextContainer1.appendChild(menuTextPrice1);\n\n    const menuImage1 = document.createElement(\"img\");\n    menuImage1.src = _sushiMenu1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    menuImage1.classList.add(\"menuImage\");\n    menuItem1.appendChild(menuImage1);\n\n\n/* DOM for 2nd Menu Item */\n\n    const menuItem2 = document.createElement(\"div\");\n    menuItem2.classList.add(\"menuItem\");\n    menuGridContainer.appendChild(menuItem2)\n\n     const menuTextContainer2 = document.createElement(\"div\");\n    menuTextContainer2.classList.add(\"menuTextContainer\");\n    menuItem2.appendChild(menuTextContainer2);\n\n    const menuTextTitle2 = document.createElement(\"h2\");\n    menuTextTitle2.classList.add(\"menuTextTitle\");\n    menuTextTitle2.textContent = \"Shrimp Nigiri\";\n    menuTextContainer2.appendChild(menuTextTitle2);\n\n    const menuTextDescription2 = document.createElement(\"p\");\n    menuTextDescription2.classList.add(\"menuTextDescription\");\n    menuTextDescription2.textContent = \"A delicate shrimp that is neatly placed over classic Japanese rice.\"\n    menuTextContainer2.appendChild(menuTextDescription2);\n\n    const menuTextPrice2 = document.createElement(\"div\");\n    menuTextPrice2.classList.add(\"price\");\n    menuTextPrice2.textContent = \"$3.00\";\n    menuTextContainer2.appendChild(menuTextPrice2);\n\n    const menuImage2 = document.createElement(\"img\");\n    menuImage2.src = _sushiMenu2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    menuImage2.classList.add(\"menuImage\");\n    menuItem2.appendChild(menuImage2);\n\n/* DOM for 3rd Menu Item */\n\n\n    const menuItem3 = document.createElement(\"div\");\n    menuItem3.classList.add(\"menuItem\");\n    menuGridContainer.appendChild(menuItem3)\n\n    const menuTextContainer3 = document.createElement(\"div\");\n    menuTextContainer3.classList.add(\"menuTextContainer\");\n    menuItem3.appendChild(menuTextContainer3);\n\n    const menuTextTitle3 = document.createElement(\"h2\");\n    menuTextTitle3.classList.add(\"menuTextTitle\");\n    menuTextTitle3.textContent = \"Uramaki\";\n    menuTextContainer3.appendChild(menuTextTitle3);\n\n    const menuTextDescription3 = document.createElement(\"p\");\n    menuTextDescription3.classList.add(\"menuTextDescription\");\n    menuTextDescription3.textContent = \"A western-influenced style maki (rolled sushi) where the rice is on the outside and the seaweed (nori) is on the inside.\"\n    menuTextContainer3.appendChild(menuTextDescription3);\n\n    const menuTextPrice3 = document.createElement(\"div\");\n    menuTextPrice3.classList.add(\"price\");\n    menuTextPrice3.textContent = \"$2.00\";\n    menuTextContainer3.appendChild(menuTextPrice3);\n\n    const menuImage3 = document.createElement(\"img\");\n    menuImage3.src = _sushiMenu3_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    menuImage3.classList.add(\"menuImage\");\n    menuItem3.appendChild(menuImage3);\n\n/* DOM for 4th Menu Item */\n\n    const menuItem4 = document.createElement(\"div\");\n    menuItem4.classList.add(\"menuItem\");\n    menuGridContainer.appendChild(menuItem4)\n\n    const menuTextContainer4 = document.createElement(\"div\");\n    menuTextContainer4.classList.add(\"menuTextContainer\");\n    menuItem4.appendChild(menuTextContainer4);\n\n    const menuTextTitle4 = document.createElement(\"h2\");\n    menuTextTitle4.classList.add(\"menuTextTitle\");\n    menuTextTitle4.textContent = \"Sashimi\";\n    menuTextContainer4.appendChild(menuTextTitle4);\n\n    const menuTextDescription4 = document.createElement(\"p\");\n    menuTextDescription4.classList.add(\"menuTextDescription\");\n    menuTextDescription4.textContent = \"Precisely cut slices of deep red (tuna), pale pink (salmon), translucent(snapper) with clean and pure flavors.\"\n    menuTextContainer4.appendChild(menuTextDescription4);\n\n    const menuTextPrice4 = document.createElement(\"div\");\n    menuTextPrice4.classList.add(\"price\");\n    menuTextPrice4.textContent = \"$10.00\";\n    menuTextContainer4.appendChild(menuTextPrice4);\n\n    const menuImage4 = document.createElement(\"img\");\n    menuImage4.src = _sushiMenu4_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    menuImage4.classList.add(\"menuImage\");\n    menuItem4.appendChild(menuImage4);\n\n    /* DOM for 5th Menu Item */\n\n    const menuItem5 = document.createElement(\"div\");\n    menuItem5.classList.add(\"menuItem\");\n    menuGridContainer.appendChild(menuItem5)\n\n    const menuTextContainer5 = document.createElement(\"div\");\n    menuTextContainer5.classList.add(\"menuTextContainer\");\n    menuItem5.appendChild(menuTextContainer5);\n\n    const menuTextTitle5 = document.createElement(\"h2\");\n    menuTextTitle5.classList.add(\"menuTextTitle\");\n    menuTextTitle5.textContent = \"Unagi & Inari Sushi\";\n    menuTextContainer5.appendChild(menuTextTitle5);\n\n    const menuTextDescription5 = document.createElement(\"p\");\n    menuTextDescription5.classList.add(\"menuTextDescription\");\n    menuTextDescription5.textContent = \"Rich and flavourful freshwater eel topped with tare on rice (Unagi Sushi) and a sweet and savoury Sushi stuffed with vinegared rice into seasoned fried tofu (Inari Sushi).\"\n    menuTextContainer5.appendChild(menuTextDescription5);\n\n    const menuTextPrice5 = document.createElement(\"div\");\n    menuTextPrice5.classList.add(\"price\");\n    menuTextPrice5.textContent = \"$4.50\";\n    menuTextContainer5.appendChild(menuTextPrice5);\n\n    const menuImage5 = document.createElement(\"img\");\n    menuImage5.src = _sushiMenu5_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    menuImage5.classList.add(\"menuImage\");\n    menuItem5.appendChild(menuImage5);\n\n/* DOM for 6th Menu Item */\n\n    const menuItem6 = document.createElement(\"div\");\n    menuItem6.classList.add(\"menuItem\");\n    menuGridContainer.appendChild(menuItem6)\n\n    const menuTextContainer6 = document.createElement(\"div\");\n    menuTextContainer6.classList.add(\"menuTextContainer\");\n    menuItem6.appendChild(menuTextContainer6);\n\n    const menuTextTitle6 = document.createElement(\"h2\");\n    menuTextTitle6.classList.add(\"menuTextTitle\");\n    menuTextTitle6.textContent = \"Sushi Platter\";\n    menuTextContainer6.appendChild(menuTextTitle6);\n\n    const menuTextDescription6 = document.createElement(\"p\");\n    menuTextDescription6.classList.add(\"menuTextDescription\");\n    menuTextDescription6.textContent = \"A deluxe combination of Sushi served including Sashimi, Maki Rolls and Temakis and more! \"\n    menuTextContainer6.appendChild(menuTextDescription6);\n\n    const menuTextPrice6 = document.createElement(\"div\");\n    menuTextPrice6.classList.add(\"price\");\n    menuTextPrice6.textContent = \"$15.00\";\n    menuTextContainer6.appendChild(menuTextPrice6);\n\n    const menuImage6 = document.createElement(\"img\");\n    menuImage6.src = _sushiMenu6_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    menuImage6.classList.add(\"menuImage\");\n    menuItem6.appendChild(menuImage6);\n}\n\n//# sourceURL=webpack://restauranthomepage/./src/Menu.js?");

/***/ }),

/***/ "./src/Sushi.png":
/*!***********************!*\
  !*** ./src/Sushi.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d7639d8f88b9cb75166a.png\";\n\n//# sourceURL=webpack://restauranthomepage/./src/Sushi.png?");

/***/ }),

/***/ "./src/Sushi2.png":
/*!************************!*\
  !*** ./src/Sushi2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2575fa86a432540fc86f.png\";\n\n//# sourceURL=webpack://restauranthomepage/./src/Sushi2.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n\n\n\n\n\n\nconst HomeBtn = document.querySelector(\"#HomeBtn\");\nconst AboutBtn = document.querySelector(\"#AboutBtn\");\nconst MenuBtn = document.querySelector(\"#MenuBtn\");\n\nHomeBtn.addEventListener(\"click\", () =>{\n    (0,_Home_js__WEBPACK_IMPORTED_MODULE_1__.HomeFunction)();\n})\n\nAboutBtn.addEventListener(\"click\", () =>{\n    ;(0,_About_js__WEBPACK_IMPORTED_MODULE_2__.AboutFunction)();\n})\n\nMenuBtn.addEventListener(\"click\", () =>{\n    ;(0,_Menu_js__WEBPACK_IMPORTED_MODULE_3__.MenuFunction)();\n})\n\n;(0,_Home_js__WEBPACK_IMPORTED_MODULE_1__.HomeFunction)();\n\n//# sourceURL=webpack://restauranthomepage/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restauranthomepage/./src/styles.css?");

/***/ }),

/***/ "./src/sushiMenu1.jpg":
/*!****************************!*\
  !*** ./src/sushiMenu1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4217f5ef4c17e66f4f1.jpg\";\n\n//# sourceURL=webpack://restauranthomepage/./src/sushiMenu1.jpg?");

/***/ }),

/***/ "./src/sushiMenu2.jpg":
/*!****************************!*\
  !*** ./src/sushiMenu2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0de5be2766363c2e2784.jpg\";\n\n//# sourceURL=webpack://restauranthomepage/./src/sushiMenu2.jpg?");

/***/ }),

/***/ "./src/sushiMenu3.jpg":
/*!****************************!*\
  !*** ./src/sushiMenu3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77f010984f9e1e80541c.jpg\";\n\n//# sourceURL=webpack://restauranthomepage/./src/sushiMenu3.jpg?");

/***/ }),

/***/ "./src/sushiMenu4.jpg":
/*!****************************!*\
  !*** ./src/sushiMenu4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40e44bc8c2bb3870b40e.jpg\";\n\n//# sourceURL=webpack://restauranthomepage/./src/sushiMenu4.jpg?");

/***/ }),

/***/ "./src/sushiMenu5.jpg":
/*!****************************!*\
  !*** ./src/sushiMenu5.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"48ddb44eadb85bcb8cd0.jpg\";\n\n//# sourceURL=webpack://restauranthomepage/./src/sushiMenu5.jpg?");

/***/ }),

/***/ "./src/sushiMenu6.jpg":
/*!****************************!*\
  !*** ./src/sushiMenu6.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0432fcc50a7182a7d610.jpg\";\n\n//# sourceURL=webpack://restauranthomepage/./src/sushiMenu6.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;