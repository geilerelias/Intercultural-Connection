<template>
    <v-footer dark padless elevation="24">
        <v-layout>
            <v-card flat tile class="primary darken-3  white--text">
                <v-row class="ma-0 pa-0">
                    <v-col class="mx-4 pa-0 d-flex justify-start align-center ">
                        <strong class="subheading  white--text ">
                            Get connected with us on social networks!
                        </strong>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="mx-4 pa-0 d-flex justify-end align-center ">
                        <v-btn
                            v-for="(icon, i) in icons"
                            :key="i"
                            class="mx-4 my-1 white--text "
                            icon
                        >
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="ma-0">
                    <div class="primary darken-2 pa-5 col-md-3 col-12">
                        <h3 class="headline mb-3 text-center">
                            Intercultural Connections
                        </h3>
                        <!-- <v-row>
                            <v-col
                                cols="12"
                                v-for="link in links"
                                :key="link.text"
                                class="my-0 py-0"
                            >
                                <v-btn color="white" text rounded>
                                    {{ $t(link.text) }}
                                </v-btn>
                            </v-col>
                        </v-row> -->
                        <div
                            class=" text-center d-flex justify-center align-center"
                        >
                            {{ $t("slogan-foundation") }}
                        </div>
                    </div>
                    <div class="primary darken-1 pa-5 col-md-9 col-12 ">
                        <v-row>
                            <div
                                class="col-md-6 col-12 white--text"
                                v-for="item in 10"
                                :key="item"
                            >
                                texto {{ item }}
                            </div>
                        </v-row>
                    </div>
                    <v-col class="text-center pa-3">
                        © 2019 - {{ new Date().getFullYear() }}
                        Intercultural Connection — All Rights reserved.
                    </v-col>
                </v-row>
            </v-card>
        </v-layout>
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                "mdi-facebook",
                "mdi-twitter",
                "mdi-google-plus",
                "mdi-linkedin",
                "mdi-instagram"
            ],
            links: [
                { text: "home" },
                { text: "about-us" },
                { text: "our-services" },
                { text: "projects" },
                { text: "donations" },
                { text: "contact-us" }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
