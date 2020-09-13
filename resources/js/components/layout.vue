<template>
    <v-app>
        <header-component></header-component>
        <drawer-component></drawer-component>
        <div class="content">
            <transition>
                <router-view></router-view>
            </transition>
        </div>

        <footer-component></footer-component>
    </v-app>
</template>
<script>
require('vue2-animate/dist/vue2-animate.min.css');
export default {

    components: {
        "header-component": () => import("./base/Header.vue"),
        "drawer-component": () => import("./base/Drawer.vue"),
        "footer-component": () => import("./base/Footer.vue"),
    },
};
</script>
<style>
.content {
    min-height: 100vh;
}

</style>

