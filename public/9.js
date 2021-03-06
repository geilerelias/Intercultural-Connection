(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Donations.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Donations.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        text: "Donations",
        disabled: true,
        href: "/donations"
      }],
      dialog: false,
      contact: [{
        icon: "mdi-map-marker-outline",
        name: "Dirección",
        content: "Cra 4-A # 54-52<br />Chapinero Alto, Bogot\xE1, Colombia"
      }, {
        icon: "mdi-cellphone",
        name: "Teléfonos",
        content: "+57 315 734 0385"
      }, {
        icon: "mdi-email",
        name: "Correos",
        content: "contacto@mvictoriaaponte.com<br/>contacto@soecolombia.com"
      }],
      message: {
        name: '',
        email: '',
        subject: '',
        content: ''
      },
      valor: null
    };
  },
  methods: {
    enviar: function enviar() {
      var _this = this;

      this.dialog = true;

      if (this.message.name.trim() === '' || this.message.content.trim() === '') {
        alert('Debes completar todos los campos antes de guardar');
        return;
      }

      var messageNuevo = this.message;
      axios.post('/message', messageNuevo).then(function (response) {
        if (response.status == 200) {
          console.log(response);
          console.log(response.data);
          _this.dialog = false;
          _this.message = {
            name: '',
            email: '',
            subject: '',
            content: ''
          };
          Swal.fire('Buen trabajo', 'Mensaje enviado con éxito!', 'success');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          });
          console.log(response.data);
          _this.dialog = false;
        }
      })["catch"](function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        });
        console.log(error);
        _this.dialog = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Donations.vue?vue&type=template&id=9528c674&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Donations.vue?vue&type=template&id=9528c674&scoped=true& ***!
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
          attrs: { flat: "", tile: "", color: "primary darken-3" }
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
                        _vm._s(_vm.$t("header.donations")) +
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
        "section",
        { staticClass: "mt-12" },
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
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _c(
                              "div",
                              {
                                staticClass: "base-section-heading text-center "
                              },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-uppercase text-h6 font-weight-bold  text-left"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    AYUDAR AHORA, ES SIMPLE\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-divider", {
                                  staticClass: "primary  mr-auto mb-3",
                                  staticStyle: { "max-width": "28px" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "base-body body-1 grey--text text--darken-1 text-left mb-6 text-justify"
                              },
                              [
                                _vm._v(
                                  "\n                                Atrévete a caminar aunque sea descalzo,\n                                a sonreír aunque no tengas motivos, a ayudar a otros sin recibir aplausos.\n                                "
                                ),
                                _c("v-subheader", [
                                  _vm._v(
                                    "\n                                    Anonymous.\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                                Aveces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar seria\n                                menos\n                                si\n                                le faltara esa gota.\n\n                                "
                                ),
                                _c("v-subheader", [
                                  _vm._v(
                                    "\n                                    Madre Teresa de Calcuta.\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("v-img", {
                                staticClass: "rounded-lg",
                                attrs: {
                                  "max-width": "400",
                                  src: __webpack_require__(/*! ./../../images/personas-que-llevan-donacion-caridad.jpg */ "./resources/images/personas-que-llevan-donacion-caridad.jpg")
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "base-section-heading text-center " },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "text-uppercase text-h6 font-weight-bold  text-left"
                            },
                            [
                              _vm._v(
                                "\n                            Envíanos un correo electrónico\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "primary  mr-auto mb-3",
                            staticStyle: { "max-width": "28px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("¿Cuanto quieres aportar?")]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass:
                            "d-flex flex-row mb-6 justify-start align-center",
                          attrs: { color: "transparent", flat: "", tile: "" }
                        },
                        [
                          _c(
                            "v-radio-group",
                            {
                              attrs: { row: "" },
                              model: {
                                value: _vm.valor,
                                callback: function($$v) {
                                  _vm.valor = $$v
                                },
                                expression: "valor"
                              }
                            },
                            [
                              _c("v-radio", {
                                attrs: { label: "$50.000", value: "50000" }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { label: "$100.000", value: "100000" }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { label: "$200.000", value: "200000" }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { label: "$300.000", value: "300000" }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { label: "$400.000", value: "400000" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mr-3" }, [
                            _vm._v(
                              "\n                            Otro valor\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Amount",
                                  value: "0.00",
                                  prefix: "$",
                                  type: "number"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-form", [
                        _c("div", [
                          _c(
                            "div",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Nombres",
                                  outlined: "",
                                  "prepend-inner-icon": "mdi-face"
                                },
                                model: {
                                  value: _vm.message.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.message, "name", $$v)
                                  },
                                  expression: "message.name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  small: "",
                                  label: "Correo",
                                  outlined: "",
                                  type: "email",
                                  "prepend-inner-icon": "mdi-email"
                                },
                                model: {
                                  value: _vm.message.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.message, "email", $$v)
                                  },
                                  expression: "message.email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  label: "Descripción o Mensaje"
                                },
                                model: {
                                  value: _vm.message.content,
                                  callback: function($$v) {
                                    _vm.$set(_vm.message, "content", $$v)
                                  },
                                  expression: "message.content"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "white--text",
                                  attrs: {
                                    disabled: _vm.dialog,
                                    loading: _vm.dialog,
                                    color: "primary",
                                    outlined: "",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.enviar()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Enviar\n                                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
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
          _c(
            "v-dialog",
            {
              attrs: { "hide-overlay": "", persistent: "", width: "300" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                { attrs: { color: "primary", dark: "" } },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "pa-4" },
                    [
                      _c("p", { staticClass: "mb-2" }, [
                        _vm._v("Por favor espere")
                      ]),
                      _vm._v(" "),
                      _c("v-progress-linear", {
                        staticClass: "mb-0",
                        attrs: { indeterminate: "", color: "white" }
                      })
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

/***/ "./resources/images/personas-que-llevan-donacion-caridad.jpg":
/*!*******************************************************************!*\
  !*** ./resources/images/personas-que-llevan-donacion-caridad.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/personas-que-llevan-donacion-caridad.jpg?fa566fd33d2b9a1e3fa41920a39cf2f1";

/***/ }),

/***/ "./resources/js/components/Donations.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Donations.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Donations_vue_vue_type_template_id_9528c674_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Donations.vue?vue&type=template&id=9528c674&scoped=true& */ "./resources/js/components/Donations.vue?vue&type=template&id=9528c674&scoped=true&");
/* harmony import */ var _Donations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Donations.vue?vue&type=script&lang=js& */ "./resources/js/components/Donations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Donations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Donations_vue_vue_type_template_id_9528c674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Donations_vue_vue_type_template_id_9528c674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9528c674",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Donations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Donations.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Donations.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Donations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Donations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Donations.vue?vue&type=template&id=9528c674&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Donations.vue?vue&type=template&id=9528c674&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Donations_vue_vue_type_template_id_9528c674_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Donations.vue?vue&type=template&id=9528c674&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Donations.vue?vue&type=template&id=9528c674&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Donations_vue_vue_type_template_id_9528c674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Donations_vue_vue_type_template_id_9528c674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);