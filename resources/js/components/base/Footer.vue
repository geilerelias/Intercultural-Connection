<template>
    <v-footer dark padless elevation="24">
        <v-container fluid class="ma-0 pa-0">
            <v-card flat tile class="primary darken-3  white--text">
                <v-row class="ma-0 pa-0">
                    <v-col class="mx-4 pa-0 d-flex justify-start align-center ">
                        <strong class="subheading  white--text ">
                            {{ $t("connect-social-media") }}
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
                            Fundación Intercultural Connections
                        </h3>

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
                            >


                                <v-list rounded color="transparent" dense>
                                    <v-subheader>Links</v-subheader>
                                    <v-list-item-group  color="primary">
                                        <v-list-item
                                            v-for="(item, i) in links"
                                            :key="i"
                                            :to="item.to"

                                        >
                                            <v-list-item-icon>
                                                <v-icon v-text="item.icon" ></v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title >{{$t(item.title) }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </div>
                            <div
                                class="col-md-6 col-12 white--text"
                            >
                                <v-list rounded color="transparent" dense>
                                    <v-subheader>Servicios que ofrecemos</v-subheader>
                                    <v-list-item-group v-model="service" color="primary">
                                        <v-list-item
                                            v-for="(item, i) in services"
                                            :key="i"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title v-text="item.title"></v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </div>
                        </v-row>
                    </div>
                    <v-col class="text-center pa-3">
                        © 2019 - {{ new Date().getFullYear() }}
                        Fundación Intercultural Connection — All Rights reserved.
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
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
                {to: "/", title: "home", icon:'mdi-home'},
                {to: "about-us", title: "about-us",icon:'mdi-account-question'},
                {to: "our-services", title: "our-services",icon:'mdi-face-agent'},
                {to: "projects", title: "projects",icon:'mdi-folder-multiple'},
                {to: "donations", title: "donations", icon:'mdi-hand-heart'},
                {to: "contact-us", title: "contact-us",icon:'mdi-card-account-mail'},
            ],
            services: [

                {
                    title: "Acompañamiento Al Tránsito De Colegios Académicos Regulares A\n" +
                        "Colegios Bilingües.",
                },
                {
                    title: "Formulación Proyecto Tipo De Bilingüismo DNP A Entidades\n" +
                        "Territoriales",
                },
                {title: "Formación en Ingles",},
                {title: "Preparación a estudiantes para la prueba SABER 11º.",},
                {title: "English Together",},
                {title: "Connecting Knowledge",},
                {title: "Laboratorios de innovación Bilingüe:",},
                {title: "Campamentos de Inmersión bilingüe",}

            ],
            service: null
        };
    }
};
</script>

<style lang="scss" scoped></style>
