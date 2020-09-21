require("./bootstrap");


window.Vue = require("vue");
window.Event = new Vue();


import Vuetify from "vuetify";


import {i18n} from './plugins/i18n'

import store from "./store";

import VueAxios from "vue-axios";
import VueClipboard from 'vue-clipboard2';

import router from "./routes.js";
import Auth from "./auth.js";
import Api from "./api.js";
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'


window.auth = new Auth();
window.api = new Api();


Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(VueClipboard);
Vue.use(PerfectScrollbar)
Vue.component("vue-app", require("./App.vue").default);


const app = new Vue({
    el: "#app",
    vuetify: new Vuetify({
        icons: {
            iconfont: "mdi"
        },
        theme: {
            themes: {
                light: {
                    primary: '#11bae7',
                    secondary: '#3297d3',
                    accent: '#448AFF',
                    error: '#c40b0a',
                    warning: '#ffc107',
                    info: '#03a9f4',
                    success: '#4caf50'
                },
                dark: {
                    primary: '#00bbe9',
                    secondary: '#1877f2',
                    accent: '#448AFF',
                    error: '#f44336',
                    warning: '#ffc107',
                    info: '#03a9f4',
                    success: '#4caf50'
                },
            },
        },
    }),
    i18n,
    store,
    router,
});
