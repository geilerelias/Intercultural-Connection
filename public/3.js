(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Footer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/Footer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-google-plus", "mdi-linkedin", "mdi-instagram"],
      links: [{
        to: "/",
        title: "home",
        icon: 'mdi-home'
      }, {
        to: "about-us",
        title: "about-us",
        icon: 'mdi-account-question'
      }, {
        to: "our-services",
        title: "our-services",
        icon: 'mdi-face-agent'
      }, {
        to: "projects",
        title: "projects",
        icon: 'mdi-folder-multiple'
      }, {
        to: "donations",
        title: "donations",
        icon: 'mdi-hand-heart'
      }, {
        to: "contact-us",
        title: "contact-us",
        icon: 'mdi-card-account-mail'
      }],
      services: [{
        title: "Acompañamiento Al Tránsito De Colegios Académicos Regulares A\n" + "Colegios Bilingües."
      }, {
        title: "Formulación Proyecto Tipo De Bilingüismo DNP A Entidades\n" + "Territoriales"
      }, {
        title: "Formación en Ingles"
      }, {
        title: "Preparación a estudiantes para la prueba SABER 11º."
      }, {
        title: "English Together"
      }, {
        title: "Connecting Knowledge"
      }, {
        title: "Laboratorios de innovación Bilingüe:"
      }, {
        title: "Campamentos de Inmersión bilingüe"
      }],
      service: null
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Footer.vue?vue&type=template&id=707d9d3e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/Footer.vue?vue&type=template&id=707d9d3e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "v-footer",
    { attrs: { dark: "", padless: "", elevation: "24" } },
    [
      _c(
        "v-container",
        { staticClass: "ma-0 pa-0", attrs: { fluid: "" } },
        [
          _c(
            "v-card",
            {
              staticClass: "primary darken-3  white--text",
              attrs: { flat: "", tile: "" }
            },
            [
              _c(
                "v-row",
                { staticClass: "ma-0 pa-0" },
                [
                  _c(
                    "v-col",
                    {
                      staticClass:
                        "mx-4 pa-0 d-flex justify-start align-center "
                    },
                    [
                      _c(
                        "strong",
                        { staticClass: "subheading  white--text " },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("connect-social-media")) +
                              "\n                    "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "mx-4 pa-0 d-flex justify-end align-center "
                    },
                    _vm._l(_vm.icons, function(icon, i) {
                      return _c(
                        "v-btn",
                        {
                          key: i,
                          staticClass: "mx-4 my-1 white--text ",
                          attrs: { icon: "" }
                        },
                        [
                          _c("v-icon", { attrs: { size: "24px" } }, [
                            _vm._v(_vm._s(icon))
                          ])
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "ma-0" },
                [
                  _c(
                    "div",
                    { staticClass: "primary darken-2 pa-5 col-md-3 col-12" },
                    [
                      _c("h3", { staticClass: "headline mb-3 text-center" }, [
                        _vm._v(
                          "\n                        Fundación Intercultural Connections\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            " text-center d-flex justify-center align-center"
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("slogan-foundation")) +
                              "\n                    "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "primary darken-1 pa-5 col-md-9 col-12 " },
                    [
                      _c("v-row", [
                        _c(
                          "div",
                          { staticClass: "col-md-6 col-12 white--text" },
                          [
                            _c(
                              "v-list",
                              {
                                attrs: {
                                  rounded: "",
                                  color: "transparent",
                                  dense: ""
                                }
                              },
                              [
                                _c("v-subheader", [_vm._v("Links")]),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-group",
                                  { attrs: { color: "primary" } },
                                  _vm._l(_vm.links, function(item, i) {
                                    return _c(
                                      "v-list-item",
                                      { key: i, attrs: { to: item.to } },
                                      [
                                        _c(
                                          "v-list-item-icon",
                                          [
                                            _c("v-icon", {
                                              domProps: {
                                                textContent: _vm._s(item.icon)
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(_vm._s(_vm.$t(item.title)))
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
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
                          "div",
                          { staticClass: "col-md-6 col-12 white--text" },
                          [
                            _c(
                              "v-list",
                              {
                                attrs: {
                                  rounded: "",
                                  color: "transparent",
                                  dense: ""
                                }
                              },
                              [
                                _c("v-subheader", [
                                  _vm._v("Servicios que ofrecemos")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-group",
                                  {
                                    attrs: { color: "primary" },
                                    model: {
                                      value: _vm.service,
                                      callback: function($$v) {
                                        _vm.service = $$v
                                      },
                                      expression: "service"
                                    }
                                  },
                                  _vm._l(_vm.services, function(item, i) {
                                    return _c(
                                      "v-list-item",
                                      { key: i },
                                      [
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", {
                                              domProps: {
                                                textContent: _vm._s(item.title)
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-col", { staticClass: "text-center pa-3" }, [
                    _vm._v(
                      "\n                    © 2019 - " +
                        _vm._s(new Date().getFullYear()) +
                        "\n                    Fundación Intercultural Connection — All Rights reserved.\n                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/base/Footer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/base/Footer.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_707d9d3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=707d9d3e&scoped=true& */ "./resources/js/components/base/Footer.vue?vue&type=template&id=707d9d3e&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/base/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_707d9d3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_707d9d3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "707d9d3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/base/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/base/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base/Footer.vue?vue&type=template&id=707d9d3e&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/base/Footer.vue?vue&type=template&id=707d9d3e&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_707d9d3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=707d9d3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Footer.vue?vue&type=template&id=707d9d3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_707d9d3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_707d9d3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);