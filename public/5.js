(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      carousel: [{
        src: 'images/carrousel/FCB 1.jpg',
        content: 'imagen 1'
      }, {
        src: 'images/carrousel/FCB 2.jpg',
        content: 'imagen 2'
      }, {
        src: 'images/carrousel/FCB 3.jpg',
        content: 'imagen 3'
      }, {
        src: 'images/carrousel/FCB 4.jpg',
        content: 'imagen 4'
      }],
      notices: [{
        header: "Ultimas Noticias"
      }, {
        title: 'Certificates of participation in TIA program',
        src: '../../images/home/certificates of participation in TIA program.jpeg',
        content: 'Los estudiantes del Colegio Rodolfo Campo Soto de la Caja de Compensación familiar\n' + '       Comfacesar recibieron certificado de participación en el programa TIA. en Tulsa:\n' + '       Certificates of\n' + '       participation in TIA program',
        location: 'Tulsa, USA',
        date: 'Noviembre 2019',
        to: '#notice-1'
      }, {
        divider: true,
        inset: true
      }, {
        title: "Actividad cultural",
        src: '../../images/home/docentes y estudiantes del colegio.jpeg',
        content: 'Docentes y estudiantes del Colegio Rodolfo Campo Soto de la Caja de Compensación familiar Comfacesar en actividad cultural en TCC\n' + ' Northeast Campus 2019.',
        location: 'Tulsa, USA',
        date: 'Noviembre 2019',
        to: '#notice-2'
      }, {
        divider: true,
        inset: true
      }],
      items: [{
        header: "Ultimas Noticias"
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
      align: ["start", "end", "center", "baseline", "stretch"],
      group: [{
        img: "images/team/Alexander Castillo.jpg",
        name: "Alexander Castillo",
        email: "alexandercastrillo@hotmail.com",
        occupation: "Director",
        description: "<p>\n                     Asesor y consultor socio-empresarial\n                        <ul>\n                            <li>Phd(c) en Ciencias Empresariales de la universidad de Antonio de Nebrija.</li>\n                            <li>Maestr\xEDa en Creaci\xF3n de Empresas, Universidad EAN Bt\xE1.</li>\n                            <li>Maestr\xEDa en Direcci\xF3n de Empresas, U. de antonio de Nebrija.</li>\n                            <li>Especialista en Pedagog\xEDa para el Aprendizaje Aut\xF3nomo.</li>\n                            <li>Administrador Financiero.</li>\n                        </ul>\n                </p> "
      }, {
        img: "images/team/Daniel Chaboya.jpg",
        name: "Daniel Chanboya",
        email: "DanielChanboya@hotmail.com",
        occupation: "Director TIA en Tulsa, USA",
        description: "\n                    \u2714\tMarried to Nasiba from Kyrgystan, two kids: Lilah (10 yrs.) and Alek (5 yrs.) <br>\n\n                    \u2714\tLoves to spend time with his family, play soccer, travel, eat international cuisine, listen to global music\u2026 <br>\n\n                    \u2714\tStudied at Oral Roberts University (B.S. Marketing)  and University of Oklahoma (Master of Human Relations)<br>\n\n                    \u2714\tDirector of the English as a Second Language Program at Tulsa Community College where he has worked for over 18 years helping people learn English to find better jobs, enroll in college, and connect with others in their communities. <br>\n\n                    \u2714\tHas served our local and global community for many years mostly focused on improving the lives of immigrants and refugees by providing access to educational, workplace, and intercultural exchange opportunities. <br>\n\n                    \u2714\tIn 2012, he and his wife Nasiba founded the non-profit organization Tulsa Intercultural Association that promotes intercultural competency, language proficiency, community service, and academic excellence.  They are currently involved in various projects in Colombia, Honduras, Krygyzstan, and other places through English training programs for teachers and English language classes for students plus intercultural exchange opportunities in Tulsa. <br>\n\n                    \u2714\tIn 2020, he founded the Fundacion Intercultural Connections with Alexander Castrillo in Valledupar, Colombia.  This foundation is committed to providing programs, activities, and exchange opportunities which promote bilingualism and intercultural awareness in Colombia and throughout the world. <br>\n\n                    \u2714\tDaniel is committed to helping people communicate more effectively and empowering people to reach their dreams! <br>"
      }, {
        img: "images/team/Jenis Sagbini.jpg",
        name: "Jenis Sagbini",
        email: "contacto@jenissagbini.com",
        occupation: "Directora de Marketing",
        description: "\n                     Ingeniera de Sistemas con MSc en Marketing y\n                     Direcci\xF3n Comercial y con MSc en Gobierno de Tecnolog\xEDas\n                     de la Informaci\xF3n. Con amplia experiencia en Estrategias\n                     comerciales, manejo del recurso humano y capacitaci\xF3n.\n                     Docente Universitaria, Investigadora, Asesora Tecnol\xF3gica\n                     y Conferencista Internacional. "
      }, {
        img: "images/team/Stefanny Castrillo.jpg",
        name: "Stefanny Castrillo",
        email: "StefannyCastrillo@hotmail.com",
        occupation: "Community Manager",
        description: "Ingeniera Industrial, egresada de la Universidad de\n                Santander-Campus  Valledupar. Con competencias para la creaci\xF3n y\n                direcci\xF3n de empresas y gestora de proyectos enfocados en el entorno\n                educativo y empresarial. Con experiencia pr\xE1ctica de implementaci\xF3n\n                de proyectos enfocados en la estandarizaci\xF3n y optimizaci\xF3n de\n                procesos log\xEDsticos en la f\xE1brica de Cueros Vel\xE9z S.A.S.Ha\n                tenido la oportunidad de liderar procesos y proyectos como\n                director de desarrollo (2017) y  presidente (2018-2019)\n                en la Asociaci\xF3n Nacional de Estudiantes de Ingenier\xEDa Industrial,\n                Administrativa y de Producci\xF3n -ANEIAP , logrando aportar en el crecimiento\n                tanto personal como profesional de los asociados. Ha participado en la gesti\xF3n\n                y organizaci\xF3n de eventos regionales y nacionales dirigidos a estudiantes.\n                Vinculada actualmente al proyecto biling\xFCe e intercultural de organizaciones\n                internacionales como TCC (Tulsa Community College)."
      }, {
        img: "images/team/Geiler Radillo.jpg",
        name: "Geiler Radillo",
        email: "geilerelias@hotmail.com",
        occupation: "Desarrollador ",
        description: "Ingeniero de Sistemas, egresado de la Universidad Popular del Cesar.\n                 Con amplios conocimientos en la gesti\xF3n de las tecnolog\xEDas de la informaci\xF3n y\n                 la comunicaci\xF3n con \xE9nfasis en el desarrollo de software"
      }],
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      model: 0
    };
  },
  mounted: function mounted() {
    this.setPagePrincipal(true);
  },
  destroyed: function destroyed() {
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
exports.push([module.i, "\n.ps {\n    height: 350px;\n}\n.v-card--reveal {\n    align-items: center;\n    bottom: 0;\n    justify-content: center;\n    opacity: 0.8;\n    position: absolute;\n    width: 100%;\n}\n", ""]);

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
                src: __webpack_require__(/*! ../../images/fotos/DSC_0192.jpg */ "./resources/images/fotos/DSC_0192.jpg"),
                alt: "principal",
                gradient:
                  "to top right, rgb(100 115 201 / 0.2), rgb(25 32 72 / 0.3)",
                height: "50vh"
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
                  _vm.$vuetify.breakpoint.mdAndUp
                    ? _c("v-img", {
                        staticStyle: {
                          left: "10px !important",
                          "padding-left": "0px !important"
                        },
                        attrs: {
                          height: _vm.$vuetify.breakpoint.mdAndUp
                            ? "45vh"
                            : _vm.$vuetify.breakpoint.smAndUp
                            ? "100vh"
                            : "",
                          src: __webpack_require__(/*! ../../images/logo-transparente.png */ "./resources/images/logo-transparente.png"),
                          "aspect-ratio": "1",
                          contain: ""
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    {
                      staticClass: "d-flex align-end  ",
                      class: _vm.$vuetify.breakpoint.smAndDown ? "" : "mr-12",
                      staticStyle: { height: "50vh" },
                      attrs: { color: "transparent", flat: "", tile: "" }
                    },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "white--text text-left ",
                          class: _vm.$vuetify.breakpoint.smAndDown ? "" : "mr-2"
                        },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "d-flex justify-end align-end mb-4",
                              attrs: { cols: "12" }
                            },
                            [
                              _c(
                                "h1",
                                {
                                  staticClass: "font-weight-bold",
                                  class: _vm.$vuetify.breakpoint.smAndDown
                                    ? "display-1 text-center"
                                    : "display-3 text-right",
                                  staticStyle: {
                                    "font-weight": "bold",
                                    "font-stretch": "ultra-condensed !important"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.$t(
                                          "intercultural-connections-foundation"
                                        )
                                      ) +
                                      "\n                            "
                                  )
                                ]
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-sheet",
        {
          staticStyle: { "border-radius": "0px" },
          attrs: { color: "primary darken-3", dark: "" }
        },
        [
          _c(
            "v-container",
            { staticClass: "container--fluid py-0" },
            [
              _c(
                "v-row",
                {
                  staticClass: "align-center justify-center ",
                  class: _vm.$vuetify.breakpoint.smAndDown ? "" : "mr-12"
                },
                [
                  _c("v-col", { staticClass: "grow" }, [
                    _c(
                      "h2",
                      { staticClass: " font-weight-light float-right" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "font-weight-light ",
                            class: _vm.$vuetify.breakpoint.smAndDown
                              ? "text-sm-body-2"
                              : "mr-2 title",
                            staticStyle: { "font-stretch": "ultra-condensed" }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.$t(
                                    "home.building-bridges-so-no-one-is-left-behind"
                                  )
                                ) +
                                "\n                        "
                            )
                          ]
                        )
                      ]
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
      _c("br"),
      _vm._v(" "),
      _c(
        "section",
        { attrs: { id: "notices" } },
        [
          _c(
            "div",
            { staticClass: "text-center py-9 grey lighten-4 mb-4" },
            [
              _c(
                "v-avatar",
                { staticClass: "mb-4 primary", attrs: { size: "60 " } },
                [
                  _c(
                    "v-icon",
                    { staticClass: "text--white", attrs: { color: "white" } },
                    [_vm._v("mdi-newspaper-variant-multiple-outline")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h1",
                {
                  staticClass:
                    "text-uppercase headline font-weight-bold mb-2 text-center"
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("home.outstanding-news")) +
                      "\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "primary mx-auto",
                staticStyle: { "max-width": "28px" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { staticClass: "mb-6 d-flex child-flex" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "8" } },
                    [
                      _c("div", { staticClass: "title" }, [
                        _c("p", { staticClass: "title" }, [
                          _vm._v(
                            "\n                            COMFACESAR FIRMÓ CONVENIO INTERNACIONAL PARA FORTALECER EL BILINGUISMO ENTRE SU\n                            COMUNIDAD\n                            EDUCATIVA\n                        "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-subheader", [
                        _c("i", { staticClass: "caption" }, [
                          _vm._v("Valledupar, 25 de febrero de 2019.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "ma-2",
                          attrs: { outlined: "", tile: "" }
                        },
                        [
                          _c(
                            "v-carousel",
                            { attrs: { cycle: "", "hide-delimiters": "" } },
                            _vm._l(_vm.carousel, function(item, i) {
                              return _c(
                                "v-carousel-item",
                                {
                                  key: i,
                                  attrs: {
                                    src: item.src,
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
                                                staticClass: "fill-height ma-0",
                                                attrs: {
                                                  align: "center",
                                                  justify: "center"
                                                }
                                              },
                                              [
                                                _c("v-progress-circular", {
                                                  attrs: {
                                                    color: "grey lighten-5",
                                                    indeterminate: ""
                                                  }
                                                })
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
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    {
                                      staticClass: "fill-height",
                                      attrs: { align: "end", justify: "center" }
                                    },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass:
                                            " justify-center aling-center centered",
                                          attrs: {
                                            align: "end",
                                            color: "#00000099",
                                            justify: "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-card",
                                            {
                                              staticClass:
                                                "d-flex justify-center pa-2",
                                              attrs: { color: "#00000099" }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    block: "",
                                                    href:
                                                      "http://www.comfacesar.com/articulo.aspx?idc=1098&fbclid=IwAR21UE59KuJEyLxfrmn6kPiXe-GPUau7p_bXR07wASUU3TiaVzNqYJhJoBE",
                                                    target: "_blank",
                                                    text: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                learn more\n                                            "
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
                    "v-col",
                    { attrs: { cols: "12 mt-12 pt-6", sm: "4" } },
                    [
                      _c(
                        "v-list",
                        { attrs: { "three-line": "" } },
                        [
                          _vm._l(_vm.notices, function(item, index) {
                            return [
                              item.header
                                ? _c("v-subheader", {
                                    key: item.header,
                                    domProps: {
                                      textContent: _vm._s(item.header)
                                    }
                                  })
                                : item.divider
                                ? _c("v-divider", {
                                    key: index,
                                    attrs: { inset: item.inset }
                                  })
                                : _c(
                                    "v-list-item",
                                    {
                                      key: index,
                                      on: {
                                        click: function($event) {
                                          return _vm.$vuetify.goTo(item.to)
                                        }
                                      }
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
                                              innerHTML: _vm._s(item.content)
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
                { staticClass: "my-6", attrs: { id: "notice-1" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-img", {
                        attrs: {
                          src: __webpack_require__(/*! ../../images/home/certificates of participation in TIA program.jpeg */ "./resources/images/home/certificates of participation in TIA program.jpeg"),
                          "aspect-ratio": "1.7",
                          height: "300"
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
                                        color: "grey lighten-5",
                                        indeterminate: ""
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
                          attrs: { flat: "", height: "300", tile: "" }
                        },
                        [
                          _c("v-card-text", [
                            _c("div", [_vm._v("Noviembre 2019")]),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "display-1 text--primary" },
                              [
                                _vm._v(
                                  "\n                                Certificates of participation in TIA program\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text--primary" }, [
                              _vm._v(
                                "\n                                Los estudiantes del Colegio Rodolfo Campo Soto de la Caja de Compensación familiar\n                                Comfacesar recibieron certificado de participación en el programa TIA. en Tulsa:\n                                Certificates of\n                                participation in TIA program\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Tulsa, USA")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "deep-purple accent-4",
                                    text: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Learn More\n                            "
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
                { staticClass: "my-6", attrs: { id: "notice-2" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-img", {
                        attrs: {
                          src: __webpack_require__(/*! ../../images/home/docentes y estudiantes del colegio.jpeg */ "./resources/images/home/docentes y estudiantes del colegio.jpeg"),
                          "aspect-ratio": "1.7",
                          height: "300"
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
                                        color: "grey lighten-5",
                                        indeterminate: ""
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
                          attrs: { flat: "", height: "300", tile: "" }
                        },
                        [
                          _c("v-card-text", [
                            _c("div", [_vm._v("Noviembre 2019")]),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "display-1 text--primary" },
                              [
                                _vm._v(
                                  "\n                                Actividad cultural\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text--primary" }, [
                              _vm._v(
                                "\n                                Docentes y estudiantes del Colegio Rodolfo Campo Soto de la Caja de Compensación\n                                familiar Comfacesar en actividad cultural en TCC\n                                Northeast Campus 2019.\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Tulsa, USA")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "deep-purple accent-4",
                                    text: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Learn More\n                            "
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
        "section",
        { staticClass: "mb-12", attrs: { id: "team" } },
        [
          _c(
            "div",
            { staticClass: "text-center py-9 grey lighten-5 mb-4" },
            [
              _c(
                "v-avatar",
                { staticClass: "mb-4 primary", attrs: { size: "60 " } },
                [
                  _c(
                    "v-icon",
                    { staticClass: "text--white", attrs: { color: "white" } },
                    [_vm._v("mdi-account-group-outline")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h1",
                {
                  staticClass:
                    "text-uppercase headline font-weight-bold mb-2 text-center"
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("home.meet-team")) +
                      "\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "primary mx-auto",
                staticStyle: { "max-width": "28px" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-container", { attrs: { "grid-list-xl": "" } }, [
            _c(
              "div",
              { staticClass: "layout justify-center wrap" },
              _vm._l(_vm.group, function(item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "flex xs12 sm6 md4 " },
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
                                  "div",
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          color: "grey lighten-4",
                                          height: "350",
                                          width: "250"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-img",
                                          {
                                            attrs: {
                                              src: item.img,
                                              height: "350",
                                              width: "250"
                                            }
                                          },
                                          [
                                            _c("v-expand-transition", [
                                              hover
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal  white--text",
                                                      staticStyle: {
                                                        height: "100%"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-container",
                                                        {
                                                          staticClass:
                                                            "body-2 primary darken-4",
                                                          staticStyle: {
                                                            height: "400px"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "perfect-scrollbar",
                                                            [
                                                              _c("p", {
                                                                staticClass:
                                                                  "pa-6 text-justify",
                                                                domProps: {
                                                                  innerHTML: _vm._s(
                                                                    item.description
                                                                  )
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
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
                                      {
                                        staticClass: "mx-auto",
                                        attrs: { flat: "", width: "250" }
                                      },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "title font-weight-black primary--text mb-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(item.name) +
                                                "\n                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "base-body body-1 mx-auto grey--text text--darken-1 text-justify mb-10"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(item.occupation)
                                            ),
                                            _c("br")
                                          ]
                                        )
                                      ]
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
                    })
                  ],
                  1
                )
              }),
              0
            )
          ])
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

/***/ "./resources/images/home/certificates of participation in TIA program.jpeg":
/*!*********************************************************************************!*\
  !*** ./resources/images/home/certificates of participation in TIA program.jpeg ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/certificates of participation in TIA program.jpeg?82e38a17fb1799dd522de7febaa19b14";

/***/ }),

/***/ "./resources/images/home/docentes y estudiantes del colegio.jpeg":
/*!***********************************************************************!*\
  !*** ./resources/images/home/docentes y estudiantes del colegio.jpeg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/docentes y estudiantes del colegio.jpeg?326c8bf832c3b6877bd3e466b23ab7c0";

/***/ }),

/***/ "./resources/images/logo-transparente.png":
/*!************************************************!*\
  !*** ./resources/images/logo-transparente.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-transparente.png?21dffe43b5d750b16c6f2979f614b4db";

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