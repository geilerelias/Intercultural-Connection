(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactUs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      links: [{
        text: "Home",
        disabled: false,
        href: "/"
      }, {
        text: "Contact Us",
        disabled: true,
        href: "/contact-us"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card",
        {
          staticClass: "d-flex align-end",
          staticStyle: { height: "40vh" },
          attrs: { flat: "", tile: "", color: "primary darken-2" }
        },
        [
          _c(
            "v-row",
            { staticClass: "white--text" },
            [
              _c(
                "v-col",
                {
                  staticClass: "d-flex justify-center align-center",
                  attrs: { cols: "12" }
                },
                [
                  _c("h1", { staticClass: "display-2 text-center " }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("contact-us")) +
                        "\n                "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "d-flex justify-center align-center" },
                [
                  _c("v-breadcrumbs", {
                    staticClass: "white--text",
                    attrs: { dark: "", items: _vm.links }
                  })
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
      _c(
        "v-container",
        { staticClass: "my-12" },
        [
          _c(
            "v-row",
            { staticClass: "d-flex align-end justify-center" },
            [
              _c("v-col", { attrs: { md: "3", cols: "12" } }, [
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c("v-icon", { attrs: { size: "64" } }, [
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
                    _c("v-icon", { attrs: { size: "64" } }, [
                      _vm._v("mdi-email")
                    ]),
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
                    _c("v-icon", { attrs: { size: "64" } }, [
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
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { flat: "", color: "indigo lighten-5" } },
        [
          _c(
            "v-form",
            { staticClass: "v-form", attrs: { novalidate: "novalidate" } },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: _vm.$t("your-name") + "*",
                              outlined: ""
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: _vm.$t("your-email") + "*",
                              outlined: "",
                              type: "email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              label: _vm.$t("subject") + "*"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              outlined: "",
                              label: _vm.$t("your-message") + "*"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex justify-end align-center",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-btn", { attrs: { outline: "", dark: "" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("send")) +
                                "\n                        "
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
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ContactUs.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ContactUs.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactUs_vue_vue_type_template_id_55d6b203_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=55d6b203&scoped=true& */ "./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/components/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_55d6b203_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactUs_vue_vue_type_template_id_55d6b203_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55d6b203",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ContactUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ContactUs.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ContactUs.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_55d6b203_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=template&id=55d6b203&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_55d6b203_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_55d6b203_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);