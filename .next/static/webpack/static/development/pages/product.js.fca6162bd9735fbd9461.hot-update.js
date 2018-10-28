webpackHotUpdate("static/development/pages/product.js",{

/***/ "./pages/product/productPresenter.js":
/*!*******************************************!*\
  !*** ./pages/product/productPresenter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      toggleCart = _ref.toggleCart;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, data.product.name, " | Nomad Store")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    centerColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Product"),
    rightColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: "/cart",
      text: "Cart"
    }),
    leftColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: "/",
      text: "Home"
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2417769094" + " " + "product"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: data.product.photo.url,
    className: "jsx-2417769094"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2417769094"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2417769094"
  }, data.product.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2417769094"
  }, data.product.subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2417769094"
  }, data.product.detail), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary"
  }, "Add to cart($", data.product.price, ")")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2417769094",
    css: ".product.jsx-2417769094{display:grid;margin:50px 0px;padding:0px 50px;grid-template-columns:repeat(2,1fr);grid-gap:50px;}.product.jsx-2417769094 img.jsx-2417769094{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXNhbmd5ZW9wL2VkdS9kaWdpdGFsbm9tYWQvcmVuZXcvbm9tYWQtc3RvcmUvcGFnZXMvcHJvZHVjdC9wcm9kdWN0UHJlc2VudGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFHOEIsQUFPRSxhQU5DLEVBT2hCLGNBTmlCLGlCQUNvQixvQ0FDdkIsY0FDZCIsImZpbGUiOiIvVXNlcnMveWlzYW5neWVvcC9lZHUvZGlnaXRhbG5vbWFkL3JlbmV3L25vbWFkLXN0b3JlL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdFByZXNlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEJ1dHRvbiBhcyBBbnRCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGRhdGEsIHRvZ2dsZUNhcnQgfSkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPntkYXRhLnByb2R1Y3QubmFtZX0gfCBOb21hZCBTdG9yZTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgY2VudGVyQ29sdW1uPXs8aDQ+UHJvZHVjdDwvaDQ+fVxuICAgICAgICAgICAgcmlnaHRDb2x1bW49ezxCdXR0b24gaHJlZj1cIi9jYXJ0XCIgdGV4dD1cIkNhcnRcIiAvPn1cbiAgICAgICAgICAgIGxlZnRDb2x1bW49ezxCdXR0b24gaHJlZj1cIi9cIiB0ZXh0PVwiSG9tZVwiIC8+fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwcm9kdWN0XCJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucHJvZHVjdC5waG90by51cmx9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj57ZGF0YS5wcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8aDM+e2RhdGEucHJvZHVjdC5zdWJ0aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxoND57ZGF0YS5wcm9kdWN0LmRldGFpbH08L2g0PlxuICAgICAgICAgICAgICAgIDxBbnRCdXR0b24gdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnQoJFxuICAgICAgICAgICAgICAgIHtkYXRhLnByb2R1Y3QucHJpY2V9KVxuICAgICAgICAgICAgICAgIDwvQW50QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvZHVjdCBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuKTsiXX0= */\n/*@ sourceURL=/Users/yisangyeop/edu/digitalnomad/renew/nomad-store/pages/product/productPresenter.js */"
  })));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product/productPresenter")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=product.js.fca6162bd9735fbd9461.hot-update.js.map