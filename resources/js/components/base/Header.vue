<template>
    <div>
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
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer ? setDrawer(false) : setDrawer(true)"
            ></v-app-bar-nav-icon>

            <v-toolbar-title v-if="!pagePrincipal">
                <v-avatar tile>
                    <img src="images/logo.png" alt="John" />
                </v-avatar>
                Intercultural Connections
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn to="/" text>
                {{ $t("home") }}
            </v-btn>
            <v-btn to="about-us" text>
                {{ $t("about-us") }}
            </v-btn>
            <v-btn to="our-services" text>
                {{ $t("our-services") }}
            </v-btn>
            <v-btn to="projects" text>
                {{ $t("projects") }}
            </v-btn>
            <v-btn to="donations" text>
                {{ $t("donations") }}
            </v-btn>
            <v-btn to="contact-us" text>
                {{ $t("contact-us") }}
            </v-btn>

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
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
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
            console.log("ejecuto onScroll");

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
