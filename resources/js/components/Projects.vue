<template>
    <v-app>
        <v-card
            flat
            tile
            style="height: 40vh;"
            class="d-flex  align-end"
            color="primary darken-2"
        >
            <v-row class=" white--text">
                <v-col cols="12" class="d-flex justify-center align-center">
                    <h1 class="display-2 text-center ">
                        {{ $t("header.projects") }}
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

        <!--main content-->
        <main>
            <v-sheet>
                <v-container class=" py-4 py-lg-8">
                    <v-row class="row">
                        <v-col class="col-lg-6 col-12">
                            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2 mt-0 mt-xl-10">
                                Our projects
                            </div>

                            <h2 class="text-h5 title text-lg-h5 font-weight-black ">
                                Comfacesar y entidad de EE. UU firman convenio de bilingüismo
                            </h2>

                            <div class="text-lg-h5  body-1 mt-5 text-justify">
                                Durante este año las instituciones educativas adscritas a la Caja de Compensación
                                Familiar del Cesar, Comfacesar, contarán con diferentes beneficios para que los
                                estudiantes y docentes que hacen parte de las mismas se fortalezcan en el manejo del
                                inglés como segunda lengua.
                            </div>

                            <div class="mt-4">
                                <v-btn outlined tile large color="black"  href="https://elpilon.com.co/comfacesar-y-entidad-de-ee-uu-firman-convenio-de-bilinguismo/" target="_blank"> Learn more</v-btn>
                                <v-btn  tile large color="secondary" href="http://www.comfacesar.com/articulo.aspx?idc=1098&fbclid=IwAR21UE59KuJEyLxfrmn6kPiXe-GPUau7p_bXR07wASUU3TiaVzNqYJhJoBE" target="_blank"> And here</v-btn>
                            </div>
                        </v-col>
                        <v-col class="col-lg-6 col-12">
                            <v-img cover style="max-height: 480px; width: 5930px" class="elevation-6"
                                   :src="imageConfacesarIntercultural">
                            </v-img>

                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </main>
    </v-app>
</template>

<script>
import imageConfacesarIntercultural from '../../images/COMFACESAR-INTERCULTURAL.jpg';

export default {
    data() {
        return {
            imageConfacesarIntercultural: imageConfacesarIntercultural,
            links: [
                {
                    text: "Home",
                    disabled: false,
                    href: "/"
                },
                {
                    text: "Projects",
                    disabled: true,
                    href: "/projects"
                }
            ],

        };
    }
};
</script>

<style lang="scss" scoped></style>
