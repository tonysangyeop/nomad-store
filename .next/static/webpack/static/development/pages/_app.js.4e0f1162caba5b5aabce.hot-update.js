webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./resolvers.js":
/*!**********************!*\
  !*** ./resolvers.js ***!
  \**********************/
/*! exports provided: defaults, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
var defaults = {
  cart: []
};
var resolvers = {
  Mutation: {
    toggleProduct: function toggleProduct(_, variables, _ref) {
      var cache = _ref.cache,
          getCacheKey = _ref.getCacheKey;
      var id = getCacheKey({
        typename: "Product",
        id: variables.id
      });
      console.log;
    }
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.4e0f1162caba5b5aabce.hot-update.js.map