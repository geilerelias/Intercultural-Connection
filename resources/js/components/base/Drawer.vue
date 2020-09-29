<template>
    <v-navigation-drawer v-model="drawer" app clipped v-if="$vuetify.breakpoint.smAndDown">
        <v-img
            :aspect-ratio="16 / 9"
            :src="require('../../../images/drawer.jpg')"
        >
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
                <v-col>
                    <v-avatar tile>
                        <v-img :src="require('../../../images/logo-letras.png')"
                               alt="Foundation Intercultural Connections "/>
                    </v-avatar>
                    <div class="subheading">{{$t("intercultural-connections-foundation")}}</div>
                    <p class="Caption">
                        contacto@interculturalconnections.org
                    </p>
                </v-col>
            </v-row>
        </v-img>

        <v-list  >
            <template v-for="(item, i) in links">
                <v-divider v-if="item.divider" :key="i"></v-divider>
                <v-list-item  color="primary" v-else :key="item.title" :to="item.to">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>{{$t("header."+item.title) }}</v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapState} from "vuex";

export default {
    data: () => ({
        width: 300,

        links: [
            {to: "/", title: "home", icon:'mdi-home'},
            {to: "about-us", title: "about-us",icon:'mdi-account-question'},
            {to: "our-services", title: "our-services",icon:'mdi-face-agent'},
            {to: "projects", title: "projects",icon:'mdi-folder-multiple'},
            {to: "donations", title: "donations", icon:'mdi-hand-heart'},
            {to: "contact-us", title: "contact-us",icon:'mdi-card-account-mail'},
        ]
    }),
    computed: {
        ...mapState(["drawer", "page", "color", "flat", "pagePrincipal"]),
        drawer: {
            get() {
                return this.$store.state.drawer;
            },
            set(val) {
                this.$store.commit("setDrawer", val);
            }
        }
    }
};
</script>

<style scoped>
.v-navigation-drawer {
    transition: none !important;
}

.lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.4) 0%,
        transparent 72px
    );
}
</style>
>
