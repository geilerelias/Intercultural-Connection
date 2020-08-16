<template>
    <v-navigation-drawer v-model="drawer" app clipped v-if="$vuetify.breakpoint.smAndDown">
        <v-img
            :aspect-ratio="16 / 9"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
                <v-col>
                    <div class="subheading">Jonathan Lee</div>
                    <div class="body-1">
                        heyfromjonathan@gmail.com
                    </div>
                </v-col>
            </v-row>
        </v-img>

        <v-list  >
            <template v-for="(item, i) in menu">
                <v-divider v-if="item.divider" :key="i"></v-divider>
                <v-list-item  color="primary" v-else :key="item.title" :to="item.to">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>{{$t(item.title) }}</v-list-item-title>
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

        menu: [
            {to: "/", title: "home", icon:'mdi-home'},
            {to: "about-us", title: "about-us",icon:'mdi-account-question'},
            {to: "our-services", title: "our-services",icon:'mdi-face-agent'},
            {to: "projects", title: "projects",icon:'mdi-folder-multiple'},
            {to: "donations", title: "donations", icon:'mdi-hand-heart'},
            {to: "contact-us", title: "contact-us",icon:'mdi-card-account-mail'},
        ],
        items: [
            {icon: "mdi-inbox", title: "Inbox"},
            {icon: "mdi-star", title: "Starred"},
            {icon: "mdi-send", title: "Sent mail"},
            {icon: "mdi-drafts", title: "Drafts"},
            {divider: true},
            {icon: "mdi-mail", title: "All mail"},
            {icon: "mdi-delete", title: "Trash"},
            {icon: "mdi-error", title: "Spam"}
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
