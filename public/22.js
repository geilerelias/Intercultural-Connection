(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Construccion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "header-component": function headerComponent() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./base/Header.vue */ "./resources/js/components/base/Header.vue"));
    },
    "drawer-component": function drawerComponent() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./base/Drawer.vue */ "./resources/js/components/base/Drawer.vue"));
    },
    "footer-component": function footerComponent() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./base/Footer.vue */ "./resources/js/components/base/Footer.vue"));
    },
    language: function language() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./base/language.vue */ "./resources/js/components/base/language.vue"));
    }
  },
  data: function data() {
    return {
      fab: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["drawer", "page", "color", "flat", "pagePrincipal"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["setDrawer", "setPage", "setColor", "setFlat", "setPagePrincipal"]), {
    toTop: function toTop() {
      this.$vuetify.goTo(0);
    },
    onScroll: function onScroll(e) {
      if (typeof window === "undefined") return;
      var top = window.pageYOffset || e.target.scrollTop || 0;

      if (top > 50) {
        this.fab = true;
        this.setFlat(false);
      } else {
        this.fab = false;
        this.setFlat(true);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content {\n    min-height: 100vh;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Construccion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=template&id=3700b96d&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Construccion.vue?vue&type=template&id=3700b96d& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c("drawer-component"),
      _vm._v(" "),
      _c(
        "v-img",
        { attrs: { src: __webpack_require__(/*! ../../images/san-francisco.jpg */ "./resources/images/san-francisco.jpg") } },
        [
          _c(
            "v-app-bar",
            {
              attrs: {
                app: "",
                "clipped-left": "",
                flat: _vm.flat,
                color: _vm.flat ? "transparent" : "primary",
                dark: ""
              },
              scopedSlots: _vm._u([
                {
                  key: "img",
                  fn: function(ref) {
                    var props = ref.props
                    return [
                      _c(
                        "v-img",
                        _vm._b(
                          {
                            attrs: {
                              gradient:
                                "to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                            }
                          },
                          "v-img",
                          props,
                          false
                        )
                      )
                    ]
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              !_vm.pagePrincipal
                ? _c(
                    "v-toolbar-title",
                    [
                      _c("v-avatar", { attrs: { tile: "" } }, [
                        _c("img", {
                          attrs: { src: "images/logo.png", alt: "John" }
                        })
                      ]),
                      _vm._v(
                        "\n                Intercultural Connections\n            "
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("language")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              directives: [
                {
                  name: "scroll",
                  rawName: "v-scroll",
                  value: _vm.onScroll,
                  expression: "onScroll"
                },
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.fab,
                  expression: "fab"
                }
              ],
              attrs: { fab: "", dark: "", fixed: "", bottom: "", right: "" },
              on: { click: _vm.toTop }
            },
            [_c("v-icon", [_vm._v("mdi-chevron-up")])],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container fill-height" },
            [
              _c(
                "v-row",
                {
                  staticClass:
                    "white--text mx-auto align-center justify-center",
                  staticStyle: {
                    "background-color": "#19677382",
                    "border-radius": "5px"
                  }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass:
                        "white--text text-center col col-12 pa-5 mx-auto"
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-light display-2 text-uppercase"
                        },
                        [
                          _vm._v(
                            "\n                         Pagina en\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-black display-4 text-uppercase"
                        },
                        [
                          _vm._v(
                            "\n                     Construcción\n                    "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-col", { attrs: { md: "3", cols: "12" } }, [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c("v-icon", { attrs: { size: "64", dark: "" } }, [
                          _vm._v("mdi-crosshairs-gps")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-2 headline" }, [
                          _vm._v("2620 Smith Drive")
                        ]),
                        _vm._v(" "),
                        _c("div", [_vm._v("Titusville, FL 32796")])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { md: "3", cols: "12" } }, [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "text--white",
                            attrs: { size: "64", dark: "" }
                          },
                          [_vm._v("mdi-email")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-2 headline" }, [
                          _vm._v("info@example.com")
                        ]),
                        _vm._v(" "),
                        _c("div", [_vm._v("contact@example.com")])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { md: "3", cols: "12" } }, [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c("v-icon", { attrs: { size: "64", dark: "" } }, [
                          _vm._v("mdi-phone")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-2 headline" }, [
                          _vm._v("+1 (321) 383-4531")
                        ]),
                        _vm._v(" "),
                        _c("div", [_vm._v("+1 (321) 383-4531")])
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("footer-component")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/san-francisco.jpg":
/*!********************************************!*\
  !*** ./resources/images/san-francisco.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/san-francisco.jpg?3dcb7d10675518388a2f3c8499c3492c";

/***/ }),

/***/ "./resources/js/components/Construccion.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Construccion.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Construccion_vue_vue_type_template_id_3700b96d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Construccion.vue?vue&type=template&id=3700b96d& */ "./resources/js/components/Construccion.vue?vue&type=template&id=3700b96d&");
/* harmony import */ var _Construccion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Construccion.vue?vue&type=script&lang=js& */ "./resources/js/components/Construccion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Construccion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Construccion.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Construccion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Construccion_vue_vue_type_template_id_3700b96d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Construccion_vue_vue_type_template_id_3700b96d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Construccion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Construccion.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Construccion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Construccion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Construccion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Construccion.vue?vue&type=template&id=3700b96d&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Construccion.vue?vue&type=template&id=3700b96d& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_template_id_3700b96d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Construccion.vue?vue&type=template&id=3700b96d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construccion.vue?vue&type=template&id=3700b96d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_template_id_3700b96d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Construccion_vue_vue_type_template_id_3700b96d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);