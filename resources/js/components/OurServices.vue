<template>
    <v-app>
        <v-card
            flat
            tile
            style="height: 40vh;"
            class="d-flex align-end"
            color="indigo darken-3"
        >
            <v-row class="white--text">
                <v-col cols="12" class="d-flex justify-center align-center">
                    <h1 class="display-2 text-center ">
                        {{ $t("our-services") }}
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

        <div class="v-content__wrap">
            <section id="services" class="py-5">
                <h2 class="display-1 font-weight-light text-center mb-4">
                    Our Services
                </h2>
                <div class="container">
                    <div class="row mb-5 align-center">
                        <div class="col-md-4 col-12">
                            <div
                                class="v-card v-card--outlined v-sheet theme--light"
                            >
                                <div
                                    class="v-responsive v-image"
                                    style="height: 250px;"
                                >
                                    <div
                                        class="v-responsive__sizer"
                                        style="padding-bottom: 66.25%;"
                                    ></div>
                                    <div
                                        class="v-image__image v-image__image--cover"
                                        style='background-image: url("https://alpha-construction.vuetifyjs.com/static/project6.png"); background-position: center center;'
                                    ></div>
                                    <div
                                        class="v-responsive__content"
                                        style="width: 400px;"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 col-md-8 col-12">
                            <div
                                class="v-card v-card--flat v-sheet theme--light transparent"
                            >
                                <div class="v-card__title">
                                    Realtime Global Deployments
                                </div>
                                <div class="v-card__text">
                                    Te dolor consul mei, etiam molestie indoctum
                                    usu ad, qui inermis eleifend an. Pro iriure
                                    alienum incorrupte ex, cu diceret moderatius
                                    mei. Te corrumpit posidonium sit, in cum
                                    nonumy utamur. Usu impedit patrioque
                                    vituperatoribus ei, cu voluptua nominati
                                    philosophia mel. Sea at legendos percipitur,
                                    nulla dicant convenire ne duo. Veniam
                                    epicuri vis cu, ea pri alii ceteros fierent.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5 align-center">
                        <div class="col-md-4 order-md-2 col-12">
                            <div
                                class="v-card v-card--outlined v-sheet theme--light"
                            >
                                <div
                                    class="v-responsive v-image"
                                    style="height: 250px;"
                                >
                                    <div
                                        class="v-responsive__sizer"
                                        style="padding-bottom: 66.75%;"
                                    ></div>
                                    <div
                                        class="v-image__image v-image__image--cover"
                                        style='background-image: url("https://alpha-construction.vuetifyjs.com/static/project4.png"); background-position: center center;'
                                    ></div>
                                    <div
                                        class="v-responsive__content"
                                        style="width: 400px;"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 col-md-8 col-12">
                            <div
                                class="v-card v-card--flat v-sheet theme--light transparent"
                            >
                                <div class="v-card__title">
                                    Focus On What Drives Your Business
                                </div>
                                <div class="v-card__text">
                                    <p>
                                        Lorem ipsum dolor sit amet, ea mutat
                                        tation constituam per, mei error
                                        ocurreret definiebas ne. Te harum
                                        constituto inciderint his. Vis no
                                        delenit mediocritatem. His et debet
                                        possim perpetua, assum argumentum ne
                                        quo, constituto eloquentiam sea ne. Ne
                                        has ludus graecis fabellas.
                                    </p>
                                    <p>
                                        Ei est iriure partiendo, ius falli
                                        tritani accumsan ad, mea altera eripuit
                                        fierent ut. Te quem legere fastidii ius.
                                        Ei vis quod qualisque, ignota nemore
                                        cotidieque mea eu. Scripta labitur ei
                                        vel, mei case quidam corpora no, est
                                        dico sale utroque ne. Eu erroribus
                                        delicatissimi eum, ut quem veri
                                        tincidunt vim.
                                    </p>
                                    <p>
                                        Velit eruditi an est, cu eius graeci
                                        sed. Vel ei dolorem sapientem
                                        temporibus. No his omnes meliore
                                        maiestatis, mei iisque molestiae
                                        gubergren ex. Usu placerat liberavisse
                                        et, eam dicta blandit evertitur an. Ea
                                        vim fabellas indoctum maiestatis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5 align-center">
                        <div class="col-md-4 col-12">
                            <div
                                class="v-card v-card--outlined v-sheet theme--light"
                            >
                                <div
                                    class="v-responsive v-image"
                                    style="height: 250px;"
                                >
                                    <div
                                        class="v-responsive__sizer"
                                        style="padding-bottom: 75%;"
                                    ></div>
                                    <div
                                        class="v-image__image v-image__image--cover"
                                        style='background-image: url("https://alpha-construction.vuetifyjs.com/static/project3.png"); background-position: center center;'
                                    ></div>
                                    <div
                                        class="v-responsive__content"
                                        style="width: 400px;"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 col-md-8 col-12">
                            <div
                                class="v-card v-card--flat v-sheet theme--light transparent"
                            >
                                <div class="v-card__title">
                                    Business Development That Just Works
                                </div>
                                <div class="v-card__text">
                                    <p>
                                        Te dolor consul mei, etiam molestie
                                        indoctum usu ad, qui inermis eleifend
                                        an. Pro iriure alienum incorrupte ex, cu
                                        diceret moderatius mei. Te corrumpit
                                        posidonium sit, in cum nonumy utamur.
                                        Usu impedit patrioque vituperatoribus
                                        ei, cu voluptua nominati philosophia
                                        mel. Sea at legendos percipitur, nulla
                                        dicant convenire ne duo. Veniam epicuri
                                        vis cu, ea pri alii ceteros fierent.
                                    </p>
                                    <p>
                                        Te dolor consul mei, etiam molestie
                                        indoctum usu ad, qui inermis eleifend
                                        an. Pro iriure alienum incorrupte ex, cu
                                        diceret moderatius mei. Te corrumpit
                                        posidonium sit, in cum nonumy utamur.
                                        Usu impedit patrioque vituperatoribus
                                        ei, cu voluptua nominati philosophia
                                        mel. Sea at legendos percipitur, nulla
                                        dicant convenire ne duo. Veniam epicuri
                                        vis cu, ea pri alii ceteros fierent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
                    text: "Our Services",
                    disabled: true,
                    href: "/our-services"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
