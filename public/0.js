(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/language.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/language.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/i18n */ "./resources/js/plugins/i18n.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "LanguageComponent",
  data: function data() {
    return {
      select: {
        locale: process.env.VUE_APP_I18N_LOCALE,
        title: "".concat(process.env.VUE_APP_I18N_LOCALE)
      },
      model: null,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
    };
  },
  computed: {
    languages: function languages() {
      return [{
        locale: "es",
        title: this.$t("spanish"),
        img: "images/flags/Colombia-flag.png"
      }, {
        locale: "en",
        title: this.$t("english"),
        img: "images/flags/USA-flag.png"
      }];
    }
  },
  methods: {
    changeLanguage: function changeLanguage(item) {
      _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].locale = item;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/language.vue?vue&type=template&id=26a2899b&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/language.vue?vue&type=template&id=26a2899b& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        "v-menu",
        {
          attrs: { bottom: "", left: "" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                return [
                  _c(
                    "v-btn",
                    _vm._g({ attrs: { dark: "", icon: "" } }, on),
                    [_c("v-icon", [_vm._v("mdi-translate")])],
                    1
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c("v-subheader", [_vm._v("Cambio de idioma")]),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                {
                  attrs: { color: "primary" },
                  model: {
                    value: _vm.model,
                    callback: function($$v) {
                      _vm.model = $$v
                    },
                    expression: "model"
                  }
                },
                _vm._l(_vm.languages, function(language, i) {
                  return _c(
                    "v-list-item",
                    {
                      key: i,
                      on: {
                        click: function($event) {
                          return _vm.changeLanguage(language.locale)
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-item-avatar",
                        { attrs: { tile: "" } },
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": "1.7",
                              contain: "",
                              src: language.img
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v(_vm._s(language.title))])
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/base/language.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/base/language.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _language_vue_vue_type_template_id_26a2899b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.vue?vue&type=template&id=26a2899b& */ "./resources/js/components/base/language.vue?vue&type=template&id=26a2899b&");
/* harmony import */ var _language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.vue?vue&type=script&lang=js& */ "./resources/js/components/base/language.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _language_vue_vue_type_template_id_26a2899b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _language_vue_vue_type_template_id_26a2899b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base/language.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/base/language.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/base/language.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./language.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/language.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base/language.vue?vue&type=template&id=26a2899b&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/base/language.vue?vue&type=template&id=26a2899b& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_language_vue_vue_type_template_id_26a2899b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./language.vue?vue&type=template&id=26a2899b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/language.vue?vue&type=template&id=26a2899b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_language_vue_vue_type_template_id_26a2899b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_language_vue_vue_type_template_id_26a2899b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);