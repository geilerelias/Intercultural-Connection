(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactUs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      }],
      snackbar: false,
      text: '',
      timeout: 2000,
      dialog: false,
      message: {
        name: '',
        email: '',
        subject: '',
        content: ''
      },
      contact: [{
        icon: "mdi-map-marker-outline",
        name: "Dirección",
        content: "<div class=\"mb-2 font-weight-black\">2620 Smith Drive</div>Valledupar Cesar - Colombia"
      }, {
        icon: "mdi-cellphone",
        name: "Teléfonos",
        content: "<div class=\"mb-2 font-weight-black\">+57 310 789 74 85. </div>+1 (321) 383-4531"
      }, {
        icon: "mdi-email",
        name: "Correos",
        content: "<div class=\"mb-2 font-weight-black\">contacto@interculturalconnections.org</div>alexandercastrillo@hotmail.com"
      }]
    };
  },
  methods: {
    enviar: function enviar() {
      var _this = this;

      if (this.message.name.trim() === '' || this.message.content.trim() === '') {
        this.text = 'Debes completar todos los campos antes de enviar';
        this.snackbar = true;
        return;
      }

      this.dialog = true;
      var messageNuevo = this.message;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/message', messageNuevo).then(function (response) {
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
                        _vm._s(_vm.$t("header.contact-us")) +
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
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c(
                        "h3",
                        {
                          staticClass:
                            "text-uppercase primary--text title font-weight-bold mb-1 text-left mb-4"
                        },
                        [
                          _vm._v(
                            "\n                        MANTENTE EN CONTACTO CON NOSOTROS\n                    "
                          )
                        ]
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
                            "\n                        Si quieres saber mas de lo que hacemos y como podemos\n                        ayudarte, no dudes en escribirnos a nuestros correos\n                        electrónicos o llamar a cualquiera de los números\n                        telefónicos que tenemos disponibles para ti. Para\n                        nosotros es un placer poder servirte.\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.contact, function(item) {
                        return _c(
                          "div",
                          {
                            key: item.name,
                            staticClass:
                              "pt-2 mb-0 d-flex justify-start align-content-start align-start"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "base-avatar d-inline-flex mb-3 ",
                                staticStyle: { "margin-left": "-10px" }
                              },
                              [
                                _c("v-icon", {
                                  staticClass: "mt-6",
                                  attrs: { color: "primary", size: "32" },
                                  domProps: { textContent: _vm._s(item.icon) }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "ml-3" }, [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "text-uppercase font-weight-black subtitle-2 mb-1 text-left primary--text"
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.name) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "base-body body-1 mx-auto  text--lighten-1 text-left mb-0"
                                },
                                [
                                  _c("div", {
                                    domProps: {
                                      innerHTML: _vm._s(item.content)
                                    }
                                  })
                                ]
                              )
                            ])
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c(
                        "h3",
                        {
                          staticClass:
                            "text-uppercase title primary--text  font-weight-bold mb-1 text-left mb-4"
                        },
                        [
                          _vm._v(
                            "\n                        Envíanos un correo electrónico\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-form", [
                        _c("div", [
                          _c(
                            "div",
                            [
                              _c("v-text-field", {
                                attrs: { label: "Nombre", outlined: "" },
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
                                  type: "email"
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
                              _c("v-text-field", {
                                attrs: { outlined: "", label: "Tema" },
                                model: {
                                  value: _vm.message.subject,
                                  callback: function($$v) {
                                    _vm.$set(_vm.message, "subject", $$v)
                                  },
                                  expression: "message.subject"
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
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { timeout: _vm.timeout, top: "", color: "error" },
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function(ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: { color: "blue", text: "" },
                            on: {
                              click: function($event) {
                                _vm.snackbar = false
                              }
                            }
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [
                          _vm._v(
                            "\n                    Close\n                "
                          )
                        ]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.snackbar,
                callback: function($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar"
              }
            },
            [_vm._v("\n            " + _vm._s(_vm.text) + "\n\n            ")]
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