(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./base/language.vue */ "./resources/js/components/base/language.vue"));
    }
  },
  data: function data() {
    return {
      items: [{
        header: "Today"
      }, {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      }, {
        divider: true,
        inset: true
      }, {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      }, {
        divider: true,
        inset: true
      }, {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      }, {
        divider: true,
        inset: true
      }, {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
      }, {
        divider: true,
        inset: true
      }, {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }],
      align: ["start", "end", "center", "baseline", "stretch"]
    };
  },
  mounted: function mounted() {
    console.log("mounted principal");
    this.setPagePrincipal(true);
  },
  destroyed: function destroyed() {
    console.log("destroyed principal");
    this.setPagePrincipal(false);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["drawer", "page", "color", "flat", "pagePrincipal"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["setDrawer", "setPage", "setColor", "setFlat", "setPagePrincipal"]))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ps {\n    height: 200px;\n}\n.v-card--reveal {\n    align-items: center;\n    bottom: 0;\n    justify-content: center;\n    opacity: 0.5;\n    position: absolute;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
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
        "v-sheet",
        [
          _c(
            "v-img",
            {
              attrs: {
                height: "50vh",
                src: __webpack_require__(/*! ../../images/fotos/DSC_0192.jpg */ "./resources/images/fotos/DSC_0192.jpg"),
                alt: "principal",
                gradient:
                  "to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
              }
            },
            [
              _c(
                "v-container",
                {
                  staticClass: "fill-height white--text ",
                  attrs: { fluid: "" }
                },
                [
                  _c("v-img", {
                    staticStyle: {
                      left: "10px !important",
                      "margin-left": "calc(100% - 110%) !important",
                      "padding-left": "0px !important"
                    },
                    attrs: {
                      height: "40vh",
                      contain: "",
                      src: __webpack_require__(/*! ../../images/logo-letras.png */ "./resources/images/logo-letras.png"),
                      "aspect-ratio": "1"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col",
                      staticStyle: { "transform-origin": "center top 0px" },
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c("h1", { staticClass: "mb-2 display-3" }, [
                        _vm._v(
                          "\n                        Fundación Intercultural Connections\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "title font-weight-light" }, [
                        _vm._v(
                          "\n                        Construyendo puentes para que nadie se quede atrás.\n                    "
                        )
                      ])
                    ]
                  )
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
        "v-sheet",
        {
          staticStyle: { "border-radius": "0px" },
          attrs: { color: "indigo", dark: "" }
        },
        [
          _c("div", { staticClass: "v-alert__wrapper" }, [
            _c("div", { staticClass: "v-alert__content" }, [
              _c("div", { staticClass: "container py-0" }, [
                _c("div", { staticClass: "row align-center justify-center" }, [
                  _c("div", { staticClass: "grow hidden-sm-and-down col" }, [
                    _c("h2", { staticClass: "title font-weight-light" }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.$t("share-your-culture-with-others")) +
                          "\n                            "
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "h2",
        { staticClass: "display-1 font-weight-light text-center mb-4" },
        [_vm._v("\n        " + _vm._s(_vm.$t("outstanding-news")) + "\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            {
              staticClass: "mb-6 d-flex child-flex",
              attrs: { "no-gutters": "" }
            },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "8" } },
                [
                  _c("v-subheader", { staticClass: "title" }, [
                    _vm._v(
                      "\n                    Titulo de la noticia\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "ma-2", attrs: { outlined: "", tile: "" } },
                    [
                      _c("v-img", {
                        attrs: {
                          src: "https://picsum.photos/1920/1080?random",
                          "aspect-ratio": "1.7"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "placeholder",
                            fn: function() {
                              return [
                                _c(
                                  "v-row",
                                  {
                                    staticClass: "fill-height ma-0",
                                    attrs: {
                                      align: "center",
                                      justify: "center"
                                    }
                                  },
                                  [
                                    _c("v-progress-circular", {
                                      attrs: {
                                        indeterminate: "",
                                        color: "grey lighten-5"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "4" } },
                [
                  _c(
                    "v-list",
                    { attrs: { "three-line": "" } },
                    [
                      _vm._l(_vm.items, function(item, index) {
                        return [
                          item.header
                            ? _c("v-subheader", {
                                key: item.header,
                                domProps: { textContent: _vm._s(item.header) }
                              })
                            : item.divider
                            ? _c("v-divider", {
                                key: index,
                                attrs: { inset: item.inset }
                              })
                            : _c(
                                "v-list-item",
                                {
                                  key: item.title,
                                  on: { click: function($event) {} }
                                },
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        domProps: {
                                          innerHTML: _vm._s(item.title)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", {
                                        domProps: {
                                          innerHTML: _vm._s(item.subtitle)
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "my-6" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c("v-img", {
                    attrs: {
                      height: "300",
                      src: "https://picsum.photos/510/300?random",
                      "aspect-ratio": "1.7"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "placeholder",
                        fn: function() {
                          return [
                            _c(
                              "v-row",
                              {
                                staticClass: "fill-height ma-0",
                                attrs: { align: "center", justify: "center" }
                              },
                              [
                                _c("v-progress-circular", {
                                  attrs: {
                                    indeterminate: "",
                                    color: "grey lighten-5"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto",
                      attrs: { tile: "", flat: "", height: "300" }
                    },
                    [
                      _c("v-card-text", [
                        _c("div", [_vm._v("Word of the Day")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "display-1 text--primary" }, [
                          _vm._v(
                            "\n                            be•nev•o•lent\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("adjective")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text--primary" }, [
                          _vm._v(
                            "\n                            well meaning and kindly."
                          ),
                          _c("br"),
                          _vm._v(
                            '\n                            "a benevolent smile"\n                        '
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "deep-purple accent-4" }
                            },
                            [
                              _vm._v(
                                "\n                            Learn More\n                        "
                              )
                            ]
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
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "my-6" },
            _vm._l(5, function(n) {
              return _c(
                "v-col",
                {
                  key: n,
                  staticClass: "d-flex child-flex",
                  attrs: { sm: "6" }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-list",
                            { attrs: { "three-line": "" } },
                            [
                              [
                                _vm.items[1].header
                                  ? _c("v-subheader", {
                                      key: _vm.items[1].header,
                                      domProps: {
                                        textContent: _vm._s(_vm.items[1].header)
                                      }
                                    })
                                  : _vm.items[1].divider
                                  ? _c("v-divider", {
                                      key: _vm.index,
                                      attrs: { inset: _vm.items[1].inset }
                                    })
                                  : _c(
                                      "v-list-item",
                                      {
                                        key: _vm.items[1].title,
                                        staticClass: "ma-0",
                                        on: { click: function($event) {} }
                                      },
                                      [
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-img", {
                                              staticClass: "grey lighten-2",
                                              attrs: {
                                                height: "150",
                                                src:
                                                  "https://picsum.photos/500/300?image=" +
                                                  (n * 5 + 10),
                                                "aspect-ratio": "1.7"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "placeholder",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            staticClass:
                                                              "fill-height ma-0",
                                                            attrs: {
                                                              align: "center",
                                                              justify: "center"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-progress-circular",
                                                              {
                                                                attrs: {
                                                                  indeterminate:
                                                                    "",
                                                                  color:
                                                                    "grey lighten-5"
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-content",
                                          { staticClass: "ml-3" },
                                          [
                                            _c("v-list-item-title", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.items[1].title
                                                )
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-list-item-subtitle", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.items[1].subtitle
                                                )
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                              ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("v-divider")
                        ],
                        1
                      )
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
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-12" },
        [
          _c(
            "v-container",
            { attrs: { "grid-list-xl": "" } },
            [
              _c(
                "v-row",
                { staticClass: "align-center layout justify-center" },
                [
                  _c("div", { staticClass: "grow hidden-sm-and-down col" }, [
                    _c("h1", [_vm._v(_vm._s(_vm.$t("meet-team")))])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "layout justify-center wrap" },
                _vm._l(5, function(item, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "flex xs12 sm6 md4" },
                    [
                      _c(
                        "div",
                        { staticClass: "mb-4 text-center member" },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var hover = ref.hover
                                    return [
                                      _c(
                                        "v-avatar",
                                        {
                                          staticClass: "elevation-4",
                                          staticStyle: {
                                            height: "164px",
                                            "min-width": "164px",
                                            width: "164px",
                                            "background-color":
                                              "rgb(221, 240, 254)",
                                            "border-color": "rgb(221, 240, 254)"
                                          },
                                          attrs: { color: "indigo" }
                                        },
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              attrs: {
                                                src:
                                                  "https://cdn.vuetifyjs.com/images/john.jpg",
                                                alt: "John"
                                              }
                                            },
                                            [
                                              _c("v-expand-transition", [
                                                hover
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex transition-fast-in-fast-out indigo v-card--reveal headline white--text",
                                                        staticStyle: {
                                                          height: "100%"
                                                        }
                                                      },
                                                      [
                                                        _c("p", [
                                                          _vm._v(
                                                            "\n                                                Programador responsable\n                                            "
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "font-weight-light headline" },
                            [
                              _vm._v(
                                "\n                            Heather Hill\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                }),
                0
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

/***/ "./resources/images/fotos/DSC_0192.jpg":
/*!*********************************************!*\
  !*** ./resources/images/fotos/DSC_0192.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/DSC_0192.jpg?17eb3e80586fc6ccdcde7a5b948d119c";

/***/ }),

/***/ "./resources/images/logo-letras.png":
/*!******************************************!*\
  !*** ./resources/images/logo-letras.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-letras.png?3820cf0a9c0bc3dbe08a5ddffa1b5677";

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);