<template>
    <v-app>
        <v-card
            flat
            tile
            style="height: 40vh;"
            class="d-flex align-end"
            color="primary darken-2"
        >
            <v-row class="white--text">
                <v-col cols="12" class="d-flex justify-center align-center">
                    <h1 class="display-2 text-center ">
                        {{ $t("contact-us") }}
                    </h1>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                    <v-breadcrumbs
                        dark
                        :items="links"
                        class="white--text"
                    ></v-breadcrumbs>
                </v-col>
            </v-row>
        </v-card>
        <v-container class="my-12">
            <v-row class="d-flex align-end justify-center">
                <v-col md="3" cols="12">
                    <div class="text-center">
                        <v-icon size="64">mdi-crosshairs-gps</v-icon>
                        <div class="mb-2 headline">2620 Smith Drive</div>
                        <div>Titusville, FL 32796</div>
                    </div>
                </v-col>

                <v-col md="3" cols="12">
                    <div class="text-center">
                        <v-icon size="64">mdi-email</v-icon>
                        <div class="mb-2 headline">info@example.com</div>
                        <div>contact@example.com</div>
                    </div>
                </v-col>

                <v-col md="3" cols="12">
                    <div class="text-center">
                        <v-icon size="64">mdi-phone</v-icon>
                        <div class="mb-2 headline">+1 (321) 383-4531</div>
                        <div>+1 (321) 383-4531</div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-card flat color="indigo lighten-5">
            <v-form novalidate="novalidate" class="v-form">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                :label="`${$t('your-name')}*`"
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                :label="`${$t('your-email')}*`"
                                outlined
                                type="email"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                outlined
                                :label="`${$t('subject')}*`"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                outlined
                                :label="`${$t('your-message')}*`"
                            ></v-textarea>
                        </v-col>
                        <v-col
                            cols="12"
                            class="d-flex justify-end align-center"
                        >
                            <v-btn outline dark>
                                {{ $t("send") }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    text: "Home",
                    disabled: false,
                    href: "/"
                },
                {
                    text: "Contact Us",
                    disabled: true,
                    href: "/contact-us"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
