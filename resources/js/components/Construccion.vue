<template>
    <v-app>
        <v-img src="images/DSC_0192.jpg" style="min-height: 100vh">
            <v-app-bar
                app
                clipped-left
                :flat="flat"
                :color="flat ? 'transparent' : 'primary'"
                dark
            >
                <template v-slot:img="{ props }">
                    <v-img
                        v-bind="props"
                        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                    ></v-img>
                </template>
                <!-- class="hidden-md-and-up" -->

                <v-toolbar-title v-if="!pagePrincipal">
                    <v-avatar tile>
                        <img :src="require('../../images/logo-transparente.png')" :aspect-ratio="8/5" alt="John"/>
                    </v-avatar>
                    Intercultural Connections
                </v-toolbar-title>


                <v-spacer></v-spacer>


                <language></language>
            </v-app-bar>
            <v-btn
                v-scroll="onScroll"
                v-show="fab"
                fab
                dark
                fixed
                bottom
                right
                @click="toTop"
            >
                <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
            <div class="container fill-height">
                <v-row class="white--text mx-auto align-center justify-center"
                       style="background-color: #19677382; border-radius: 5px;">
                    <v-col class="white--text text-center col col-12 pa-5 mx-auto"
                    >
                        <span class="font-weight-light headline text-uppercase">
                             {{ $t("page-construction") }}
                        </span>

                    </v-col>
                    <v-col md="4" cols="12">
                        <div class="text-center">
                            <v-icon size="32" dark>mdi-crosshairs-gps</v-icon>
                            <div class="mb-2 headline text-truncate">Valledupar Cesar - Colombia</div>
                        </div>
                    </v-col>

                    <v-col md="4" cols="12">
                        <div class="text-center">
                            <v-icon size="32" class="text--white" dark>mdi-email</v-icon>

                            <div class="mb-2 headline text-truncate" v-clipboard:copy="aCopiar" text>

                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <span v-on="on">
                                            contacto@interculturalconnections.org
                                        </span>
                                    </template>
                                    <span> {{$t("copy")}} </span>
                                </v-tooltip>
                            </div>
                        </div>
                    </v-col>

                    <v-col md="4" cols="12">
                        <div class="text-center">
                            <v-icon size="32" dark>mdi-phone</v-icon>
                            <div class="mb-2 headline text-truncate">+57 310 7897485</div>
                        </div>
                    </v-col>

                </v-row>

            </div>

        </v-img>
        <footer-component></footer-component>
    </v-app>
</template>
<script>
    import {mapMutations, mapState} from "vuex";


    export default {
        components: {
            "header-component": () => import("./base/Header.vue"),
            "drawer-component": () => import("./base/Drawer.vue"),
            "footer-component": () => import("./base/Footer.vue"),
            language: () => import("./base/language.vue")
        },
        data() {
            return {
                aCopiar: 'contacto@interculturalconnections.org',
                fab: false
            };
        },
        computed: {
            ...mapState(["drawer", "page", "color", "flat", "pagePrincipal"])
        },
        methods: {
            ...mapMutations([
                "setDrawer",
                "setPage",
                "setColor",
                "setFlat",
                "setPagePrincipal"
            ]),
            toTop() {
                this.$vuetify.goTo(0);
            },
            onScroll(e) {

                if (typeof window === "undefined") return;
                const top = window.pageYOffset || e.target.scrollTop || 0;
                if (top > 50) {
                    this.fab = true;
                    this.setFlat(false);
                } else {
                    this.fab = false;
                    this.setFlat(true);
                }
            }
        },

    };
</script>
<style>
    .content {
        min-height: 100vh;
    }
</style>
