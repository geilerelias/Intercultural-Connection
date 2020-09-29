<template>
    <div>
        <v-app-bar
            app
            clipped-left
            :flat="flat"
            :color="flat ? 'transparent' : 'primary darken-1'"
            tile
            dense
            dark
        >
            <v-toolbar-title v-if="$vuetify.breakpoint.smAndDown || !pagePrincipal || !flat">
                <v-avatar tile>
                    <v-img :src="require('../../../images/logo-letras.png')"
                           alt="Foundation Intercultural Connections "/>
                </v-avatar>
                <span v-if="showName || !flat">
                {{$t("intercultural-connections-foundation")}}
                </span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn to="/" style="font-stretch:ultra-condensed !important;" text>
                    {{ $t("header.home") }}
                </v-btn>
                <v-btn to="about-us" style="font-stretch:ultra-condensed !important;" text>
                    {{ $t("header.about-us") }}
                </v-btn>
                <v-btn to="our-services" style="font-stretch:ultra-condensed !important;" text>
                    {{ $t("header.our-services") }}
                </v-btn>
                <v-btn to="projects" style="font-stretch:ultra-condensed !important;" text>
                    {{ $t("header.projects") }}
                </v-btn>
                <v-btn to="donations" style="font-stretch:ultra-condensed !important;" text>
                    {{ $t("header.donations") }}
                </v-btn>
                <v-btn to="contact-us" style="font-stretch:ultra-condensed !important;" text>
                    {{ $t("header.contact-us") }}
                </v-btn>
            </template>
            <language></language>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer ? setDrawer(false) : setDrawer(true)"
            ></v-app-bar-nav-icon>
        </v-app-bar>

        <v-btn
            v-scroll="onScroll"
            color="primary"
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
    </div>
</template>
<script>
import {mapState, mapMutations} from "vuex";

export default {
    components: {
        language: () => import("./language.vue")
    },
    data() {
        return {
            fab: false
        };
    },
    computed: {
        ...mapState(["drawer", "page", "color", "flat", "pagePrincipal"])
        , showName: function () {
            if (!this.pagePrincipal) {
                return true;
            } else {
                if (this.pagePrincipal && this.$vuetify.breakpoint.smAndDown && this.fab) {
                    return true;
                }
                return false;
            }
            //! || $vuetify.breakpoint.smAndDown
        }
    },
    methods: {
        ...mapMutations([
            "setDrawer",
            "setPage",
            "setColor",
            "setFlat",
            "setPagePrincipal"
        ]),
        ocultarMostrarDrawer() {
            if (this.drawer) {
                setDrawer(false);
            } else {
                setDrawer(true);
            }
        },
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
    }
};
</script>
