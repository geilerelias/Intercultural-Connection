(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/Header.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    language: function language() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./language.vue */ "./resources/js/components/base/language.vue"));
    }
  },
  data: function data() {
    return {
      fab: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["drawer", "page", "color", "flat", "pagePrincipal"]), {
    showName: function showName() {
      if (!this.pagePrincipal) {
        return true;
      } else {
        if (this.pagePrincipal && this.$vuetify.breakpoint.smAndDown && this.fab) {
          return true;
        }

        return false;
      } //! || $vuetify.breakpoint.smAndDown

    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["setDrawer", "setPage", "setColor", "setFlat", "setPagePrincipal"]), {
    ocultarMostrarDrawer: function ocultarMostrarDrawer() {
      if (this.drawer) {
        setDrawer(false);
      } else {
        setDrawer(true);
      }
    },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-app-bar",
        {
          attrs: {
            app: "",
            "clipped-left": "",
            flat: _vm.flat,
            color: _vm.flat ? "transparent" : "primary darken-1",
            tile: "",
            dense: "",
            dark: ""
          }
        },
        [
          _vm.$vuetify.breakpoint.smAndDown || !_vm.pagePrincipal || !_vm.flat
            ? _c(
                "v-toolbar-title",
                [
                  _c(
                    "v-avatar",
                    { attrs: { tile: "" } },
                    [
                      _c("v-img", {
                        attrs: {
                          src: __webpack_require__(/*! ../../../images/logo-letras.png */ "./resources/images/logo-letras.png"),
                          alt: "Foundation Intercultural Connections "
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.showName || !_vm.flat
                    ? _c("span", [
                        _vm._v(
                          "\n            Fundación Intercultural Connections\n            "
                        )
                      ])
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.$vuetify.breakpoint.mdAndUp
            ? [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-stretch": "ultra-condensed !important"
                    },
                    attrs: { to: "/", text: "" }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("home")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-stretch": "ultra-condensed !important"
                    },
                    attrs: { to: "about-us", text: "" }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("about-us")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-stretch": "ultra-condensed !important"
                    },
                    attrs: { to: "our-services", text: "" }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("our-services")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-stretch": "ultra-condensed !important"
                    },
                    attrs: { to: "projects", text: "" }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("projects")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-stretch": "ultra-condensed !important"
                    },
                    attrs: { to: "donations", text: "" }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("donations")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-stretch": "ultra-condensed !important"
                    },
                    attrs: { to: "contact-us", text: "" }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("contact-us")) +
                        "\n            "
                    )
                  ]
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("language"),
          _vm._v(" "),
          _c("v-app-bar-nav-icon", {
            staticClass: "hidden-md-and-up",
            on: {
              click: function($event) {
                _vm.drawer ? _vm.setDrawer(false) : _vm.setDrawer(true)
              }
            }
          })
        ],
        2
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
          attrs: {
            color: "primary",
            fab: "",
            dark: "",
            fixed: "",
            bottom: "",
            right: ""
          },
          on: { click: _vm.toTop }
        },
        [_c("v-icon", [_vm._v("mdi-chevron-up")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/logo-letras.png":
/*!******************************************!*\
  !*** ./resources/images/logo-letras.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-letras.png?3820cf0a9c0bc3dbe08a5ddffa1b5677";

/***/ }),

/***/ "./resources/js/components/base/Header.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/base/Header.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_dc9ffda0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=dc9ffda0& */ "./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/base/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_dc9ffda0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_dc9ffda0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/base/Header.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/base/Header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_dc9ffda0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=dc9ffda0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_dc9ffda0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_dc9ffda0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);