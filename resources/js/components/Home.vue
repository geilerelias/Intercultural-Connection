<template>
    <v-app>
        <v-sheet>
            <!-- https://s2.best-wallpaper.net/wallpaper/1920x1200/1504/USA-San-Francisco-Golden-Gate-bridge-rocks-waves-beach_1920x1200.jpg -->
            <v-img
                height="50vh"
                src="./images/San-Francisco-Golden.png"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            >
                <v-container class="fill-height white--text">
                    <v-row>
                        <v-col align="center" justify="start">
                            <v-img
                                height="30vh"
                                contain
                                src="./images/logo.png"
                                aspect-ratio="1.7"
                            ></v-img>
                        </v-col>
                        <v-col align="center" justify="center">
                            <h1 class="mb-2 display-3">
                                Building a Culture of Excellence
                            </h1>
                            <div class="title font-weight-light">
                                Vestibulum volutpat pretium libero. Suspendisse
                                eu ligula.
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </v-sheet>
        <v-sheet color="indigo" dark style="border-radius: 0px;">
            <div class="v-alert__wrapper">
                <div class="v-alert__content">
                    <div class="container py-0">
                        <div class="row align-center justify-center">
                            <div class="grow hidden-sm-and-down col">
                                <h2 class="title font-weight-light">
                                    {{ $t("share-your-culture-with-others") }}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-sheet>
        <br />
        <h2 class="display-1 font-weight-light text-center mb-4">
            {{ $t("outstanding-news") }}
        </h2>
        <v-container>
            <v-row class="mb-6 d-flex child-flex" no-gutters>
                <v-col cols="12" sm="8">
                    <v-subheader class="title">
                        Titulo de la noticia
                    </v-subheader>
                    <v-card class="ma-2" outlined tile>
                        <v-img
                            src="https://picsum.photos/1920/1080?random"
                            aspect-ratio="1.7"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-list three-line>
                        <template v-for="(item, index) in items">
                            <v-subheader
                                v-if="item.header"
                                :key="item.header"
                                v-text="item.header"
                            ></v-subheader>

                            <v-divider
                                v-else-if="item.divider"
                                :key="index"
                                :inset="item.inset"
                            ></v-divider>

                            <v-list-item v-else :key="item.title" @click="">
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-html="item.title"
                                    ></v-list-item-title>
                                    <v-list-item-subtitle
                                        v-html="item.subtitle"
                                    ></v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="my-6">
                <v-col cols="12" sm="6">
                    <v-img
                        height="300"
                        src="https://picsum.photos/510/300?random"
                        aspect-ratio="1.7"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-card class="mx-auto" tile flat height="300">
                        <v-card-text>
                            <div>Word of the Day</div>
                            <p class="display-1 text--primary">
                                be•nev•o•lent
                            </p>
                            <p>adjective</p>
                            <div class="text--primary">
                                well meaning and kindly.<br />
                                "a benevolent smile"
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="deep-purple accent-4">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="my-6">
                <v-col v-for="n in 5" :key="n" class="d-flex child-flex" sm="6">
                    <v-row>
                        <v-col>
                            <v-list three-line>
                                <template>
                                    <v-subheader
                                        v-if="items[1].header"
                                        :key="items[1].header"
                                        v-text="items[1].header"
                                    ></v-subheader>

                                    <v-divider
                                        v-else-if="items[1].divider"
                                        :key="index"
                                        :inset="items[1].inset"
                                    ></v-divider>

                                    <v-list-item
                                        class="ma-0"
                                        v-else
                                        :key="items[1].title"
                                        @click=""
                                    >
                                        <v-list-item-content>
                                            <v-img
                                                height="150"
                                                :src="`https://picsum.photos/500/300?image=${
                                                    n * 5 + 10
                                                }`"
                                                aspect-ratio="1.7"
                                                class="grey lighten-2"
                                            >
                                                <template v-slot:placeholder>
                                                    <v-row
                                                        class="fill-height ma-0"
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <v-progress-circular
                                                            indeterminate
                                                            color="grey lighten-5"
                                                        ></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                        </v-list-item-content>
                                        <v-list-item-content class="ml-3">
                                            <v-list-item-title
                                                v-html="items[1].title"
                                            ></v-list-item-title>
                                            <v-list-item-subtitle
                                                v-html="items[1].subtitle"
                                            ></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-list>
                            <v-divider></v-divider>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>

        <div class="mb-12">
            <v-container grid-list-xl>
                <v-row class="align-center layout justify-center">
                    <div class="grow hidden-sm-and-down col">
                        <h1>{{ $t("meet-team") }}</h1>
                    </div>
                </v-row>
                <div class="layout justify-center wrap">
                    <div
                        class="flex xs12 sm6 md4"
                        v-for="(item, index) in 5"
                        :key="index"
                    >
                        <div class="mb-4 text-center member">
                            <v-hover v-slot:default="{ hover }">
                                <v-avatar
                                    color="indigo"
                                    class="elevation-4"
                                    style="
                                        height: 164px;
                                        min-width: 164px;
                                        width: 164px;
                                        background-color: rgb(221, 240, 254);
                                        border-color: rgb(221, 240, 254);
                                    "
                                >
                                    <v-img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                        <v-expand-transition>
                                            <div
                                                v-if="hover"
                                                class="d-flex transition-fast-in-fast-out indigo v-card--reveal headline white--text"
                                                style="height: 100%;"
                                            >
                                                <p>
                                                    Programador responsable
                                                </p>
                                            </div>
                                        </v-expand-transition>
                                    </v-img>
                                </v-avatar>
                            </v-hover>
                            <div class="font-weight-light headline">
                                Heather Hill
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </div>
    </v-app>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    components: {
        language: () => import("./base/language.vue"),
    },
    data: () => ({
        items: [
            { header: "Today" },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "Brunch this weekend?",
                subtitle:
                    "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title:
                    'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle:
                    "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "Oui oui",
                subtitle:
                    "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Birthday gift",
                subtitle:
                    "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Recipe to try",
                subtitle:
                    "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
            },
        ],
        align: ["start", "end", "center", "baseline", "stretch"],
    }),
    mounted() {
        console.log("mounted principal");
        this.setPagePrincipal(true);
    },
    destroyed() {
        console.log("destroyed principal");
        this.setPagePrincipal(false);
    },
    computed: {
        ...mapState(["drawer", "page", "color", "flat", "pagePrincipal"]),
    },
    methods: {
        ...mapMutations([
            "setDrawer",
            "setPage",
            "setColor",
            "setFlat",
            "setPagePrincipal",
        ]),
    },
};
</script>

<style>
.ps {
    height: 200px;
}
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
}
</style>
