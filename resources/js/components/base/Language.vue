<template>
    <div>
        <!-- <v-row align="center" justify="center">
            <v-select
                width="50px"
                height="20px"
                v-model="select"
                prepend-icon="mdi-translate"
                :change="changeLanguage(select)"
                :items="languages"
                item-text="title"
                item-value="locale"
                label="select idioma"
                dense
                single-line
                solo
            ></v-select>
        </v-row> -->

        <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn dark icon v-on="on">
                    <v-icon>mdi-translate</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                    v-for="(language, i) in languages"
                    :key="i"
                    @click="changeLanguage(language.locale)"
                >
                    <v-list-item-avatar tile>
                        <v-img
                            aspect-ratio="1.7"
                            contain
                            :src="language.img"
                        ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ language.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- <select v-model="$i18n.locale">
            <option
                v-for="(lang, i) in languages"
                :key="`Lang${i}`"
                :value="lang.locale"
                >{{ lang.title }}</option
            >
        </select> -->
    </div>
</template>

<script>
import { i18n } from "../../plugins/i18n";
export default {
    name: "LanguageComponent",
    data() {
        return {
            select: {
                locale: process.env.VUE_APP_I18N_LOCALE,
                title: `${process.env.VUE_APP_I18N_LOCALE}`
            },
            model: null,

            options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
        };
    },
    computed: {
        languages() {
            return [
                {
                    locale: "es",
                    title: this.$t("spanish"),
                    img: "images/flags/Colombia-flag.png"
                },
                {
                    locale: "en",
                    title: this.$t("english"),
                    img: "images/flags/USA-flag.png"
                }
            ];
        }
    },
    methods: {
        changeLanguage(item) {
            console.log(item);
            i18n.locale = item;
        }
    }
};
</script>
