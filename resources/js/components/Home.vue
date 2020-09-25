<template>
    <v-app>
        <v-sheet>
            <!-- https://s2.best-wallpaper.net/wallpaper/1920x1200/1504/USA-San-Francisco-Golden-Gate-bridge-rocks-waves-beach_1920x1200.jpg -->
            <v-img
                height="50vh"
                :src="require('../../images/fotos/DSC_0192.jpg')"
                alt="principal"
                gradient="to top right, rgb(100 115 201 / 0.2), rgb(25 32 72 / 0.3)"
            >

                <v-container fluid class="fill-height white--text ">

                    <v-img v-if="$vuetify.breakpoint.mdAndUp"
                           style="left: 10px !important; ; padding-left: 0px !important;"
                           height="45vh"
                           contain
                           :src="require('../../images/logo-transparente.png')"
                           aspect-ratio="1"
                    ></v-img>


                    <v-card
                        flat
                        tile
                        style="height: 50vh;"
                        class="d-flex align-end  "
                        :class="$vuetify.breakpoint.smAndDown?'':'mr-12'"
                        color="transparent"
                    >
                        <v-row class="white--text text-left " :class="$vuetify.breakpoint.smAndDown?'':'mr-2'">
                            <v-col cols="12" class="d-flex justify-end align-end mb-4">
                                <h1 :class=" $vuetify.breakpoint.smAndDown?'display-1 text-center':'display-3 text-right'"
                                    class="font-weight-bold"
                                    style="font-weight: bold; font-stretch:ultra-condensed !important;">
                                    Fundación Intercultural Connections
                                </h1>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-container>
            </v-img>
        </v-sheet>

        <v-sheet color="primary darken-3" dark style="border-radius: 0px;">
            <v-container class="container--fluid py-0">
                <v-row class="align-center justify-center " :class="$vuetify.breakpoint.smAndDown?'':'mr-12'">
                    <v-col class="grow">
                        <h2 class=" font-weight-light float-right">
                            <div class="font-weight-light "
                                 :class="$vuetify.breakpoint.smAndDown?'text-sm-body-2':'mr-2 title'"
                                 style="font-stretch: ultra-condensed">
                                Construyendo puentes para que nadie se quede atrás
                            </div>
                        </h2>
                    </v-col>

                </v-row>
            </v-container>

        </v-sheet>
        <br/>

        <section id="notices">
            <div class="text-center py-9 grey lighten-4 mb-4">
                <v-avatar class="mb-4 primary" size="60 ">
                    <v-icon color="white" class="text--white">mdi-newspaper-variant-multiple-outline</v-icon>
                </v-avatar>
                <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                    {{ $t("outstanding-news") }}
                </h1>
                <v-divider class="primary mx-auto" style="max-width: 28px;">
                </v-divider>
            </div>
            <v-container>
                <v-row class="mb-6 d-flex child-flex" no-gutters>
                    <v-col cols="12" sm="8">
                        <v-subheader class="title">
                       <span class="title">
                           COMFACESAR FIRMÓ CONVENIO INTERNACIONAL PARA FORTALECER EL BILINGUISMO ENTRE SU COMUNIDAD
                           EDUCATIVA
                       </span>
                        </v-subheader>
                        <v-subheader>
                            <i class="caption">Valledupar, 25 de febrero de 2019.</i>
                        </v-subheader>

                        <v-card class="ma-2" outlined tile>

                            <v-carousel cycle hide-delimiters>
                                <v-carousel-item
                                    v-for="(item,i) in carousel"
                                    :key="i"
                                    aspect-ratio="1.7"
                                    :src="item.src"
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
                                            >

                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                    <v-row
                                        class="fill-height"
                                        align="end"
                                        justify="center"
                                    >
                                        <v-col class=" justify-center aling-center centered" color="#00000099"
                                               align="end"
                                               justify="center">
                                            <v-card class="d-flex justify-center pa-2" color="#00000099">
                                                <v-btn block text class=""
                                                       href="http://www.comfacesar.com/articulo.aspx?idc=1098&fbclid=IwAR21UE59KuJEyLxfrmn6kPiXe-GPUau7p_bXR07wASUU3TiaVzNqYJhJoBE"
                                                       target="_blank">
                                                    learn more
                                                </v-btn>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-carousel-item>
                            </v-carousel>
                        </v-card>
                    </v-col>
                    <v-col cols="12 mt-12 pt-6" sm="4">
                        <v-list three-line>
                            <template v-for="(item, index) in notices">
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

                                <v-list-item v-else :key="index" @click="$vuetify.goTo(item.to)">
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-html="item.title"
                                        ></v-list-item-title>
                                        <v-list-item-subtitle
                                            v-html="item.content"
                                        ></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="my-6" id="notice-1">
                    <v-col cols="12" sm="6">
                        <v-img
                            height="300"
                            :src="require('../../images/home/certificates of participation in TIA program.jpeg')"
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
                                <div>Noviembre 2019</div>
                                <p class="display-1 text--primary">
                                    Certificates of participation in TIA program
                                </p>
                                <div class="text--primary">
                                    Los estudiantes del Colegio XXXXX de Comfacesar en Tulsa: Certificates of
                                    participation
                                    in TIA program
                                </div>
                                <p>Tulsa, USA</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn text color="deep-purple accent-4">
                                    Learn More
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="my-6" id="notice-2">
                    <v-col cols="12" sm="6">
                        <v-img
                            height="300"
                            :src="require('../../images/home/docentes y estudiantes del colegio.jpeg')"
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
                                <div>Noviembre 2019</div>
                                <p class="display-1 text--primary">
                                    Actividad cultural
                                </p>
                                <div class="text--primary">
                                    Docentes y estudiantes del colegio XXXX de Comfacesar en actividad cultural en TCC
                                    Northeast Campus 2019.
                                </div>
                                <p>Tulsa, USA</p>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn text color="deep-purple accent-4">
                                    Learn More
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                </v-row>
                <!--  <v-row class="my-6">
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
                  </v-row>-->
            </v-container>
        </section>

        <v-divider></v-divider>

        <section id="team" class="mb-12">

            <div class="text-center py-9 grey lighten-5 mb-4">
                <v-avatar class="mb-4 primary" size="60 ">
                    <v-icon color="white" class="text--white">mdi-account-group-outline</v-icon>
                </v-avatar>
                <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                    {{ $t("meet-team") }}
                </h1>
                <v-divider class="primary mx-auto" style="max-width: 28px;">
                </v-divider>
            </div>
            <v-container grid-list-xl>

                <div class="layout justify-center wrap">
                    <div
                        class="flex xs12 sm6 md4"
                        v-for="(item, index) in group"
                        :key="index"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <div>
                                <v-card
                                    height="350" width="250"
                                    class="mx-auto"
                                    color="grey lighten-4"
                                >
                                    <v-img height="350" width="250" :src="item.img">
                                        <v-expand-transition>
                                            <div
                                                v-if="hover"
                                                class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal  white--text"
                                                style="height: 100%;"
                                            >
                                                <v-container
                                                    style="height:400px "
                                                    class="body-2 primary darken-4"

                                                >
                                                    <perfect-scrollbar>
                                                        <p class="pa-6 " v-html="item.description"></p>
                                                    </perfect-scrollbar>
                                                </v-container>
                                            </div>
                                        </v-expand-transition>
                                    </v-img>
                                </v-card>
                                <v-card flat width="250"
                                        class="mx-auto">
                                    <h3 class="title font-weight-black primary--text mb-2">
                                        {{ item.name }}
                                    </h3>
                                    <div class="base-body body-1 mx-auto grey--text text--darken-1 text-justify mb-10">
                                        {{ item.occupation }}<br/>
                                    </div>

                                </v-card>
                            </div>
                        </v-hover>

                    </div>
                </div>
            </v-container>
        </section>

    </v-app>
</template>
<script>
import {mapState, mapMutations} from "vuex";

export default {
    components: {
        language: () => import("./base/language.vue"),
    },
    data: () => ({
        carousel: [
            {
                src: 'images/carrousel/FCB 1.jpg',
                content: 'imagen 1'
            },
            {
                src: 'images/carrousel/FCB 2.jpg',
                content: 'imagen 2'
            },
            {
                src: 'images/carrousel/FCB 3.jpg',
                content: 'imagen 3'
            },
            {
                src: 'images/carrousel/FCB 4.jpg',
                content: 'imagen 4'
            },
        ],
        notices: [
            {header: "Ultimas Noticias"},
            {
                title: 'Certificates of participation in TIA program',
                src: '../../images/home/certificates of participation in TIA program.jpeg',
                content: 'Los estudiantes del Colegio XXXXX de Comfacesar en Tulsa: Certificates of participation in TIA program',
                location: 'Tulsa, USA',
                date: 'Noviembre 2019',
                to: '#notice-1'
            },
            {divider: true, inset: true},
            {
                title: "Actividad cultural",
                src: '../../images/home/docentes y estudiantes del colegio.jpeg',
                content: 'Docentes y estudiantes del colegio XXXX de  Comfacesar en actividad cultural en  TCC Northeast Campus  2019.',
                location: 'Tulsa, USA',
                date: 'Noviembre 2019',
                to: '#notice-2'
            },
            {divider: true, inset: true},

        ],
        items: [
            {header: "Ultimas Noticias"},
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "Brunch this weekend?",
                subtitle:
                    "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
            },
            {divider: true, inset: true},
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title:
                    'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle:
                    "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
            },
            {divider: true, inset: true},
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "Oui oui",
                subtitle:
                    "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
            },
            {divider: true, inset: true},
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Birthday gift",
                subtitle:
                    "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
            },
            {divider: true, inset: true},
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Recipe to try",
                subtitle:
                    "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
            },
        ],
        align: ["start", "end", "center", "baseline", "stretch"],

        group: [
            {
                img:
                    "images/team/Alexander Castillo.jpg",
                name: "Alexander Castillo",
                email: "alexandercastrillo@hotmail.com",
                occupation: "Director",
                description: `<p>
                     Asesor y consultor socio-empresarial
                        <ul>
                            <li>Phd(c) en Ciencias Empresariales de la universidad de Antonio de Nebrija.</li>
                            <li>Maestría en Creación de Empresas, Universidad EAN Btá.</li>
                            <li>Maestría en Dirección de Empresas, U. de antonio de Nebrija.</li>
                            <li>Especialista en Pedagogía para el Aprendizaje Autónomo.</li>
                            <li>Administrador Financiero.</li>
                        </ul>
                </p> `
            },
            {
                img:
                    "images/team/Daniel Chaboya.jpg",
                name: "Daniel Chanboya",
                email: "DanielChanboya@hotmail.com",
                occupation: "Director TIA en Tulsa, USA",
                description: `<p>
                    Director TIA en Tulsa, USA
                </p> `
            },
            {
                img:
                    "images/team/Jenis Sagbini.jpg",
                name: "Jenis Sagbini",
                email: "contacto@jenissagbini.com",
                occupation: "Directora de Marketing",
                description: `
                     Ingeniera de Sistemas con MSc en Marketing y
                     Dirección Comercial y con MSc en Gobierno de Tecnologías
                     de la Información. Con amplia experiencia en Estrategias
                     comerciales, manejo del recurso humano y capacitación.
                     Docente Universitaria, Investigadora, Asesora Tecnológica
                     y Conferencista Internacional. `
            },
            {
                img:
                    "images/team/Stefanny Castrillo.jpg",
                name: "Stefanny Castrillo",
                email: "StefannyCastrillo@hotmail.com",
                occupation: "Community Manager",
                description: `Ingeniera Industrial, egresada de la Universidad de
                Santander-Campus  Valledupar. Con competencias para la creación y
                dirección de empresas y gestora de proyectos enfocados en el entorno
                educativo y empresarial. Con experiencia práctica de implementación
                de proyectos enfocados en la estandarización y optimización de
                procesos logísticos en la fábrica de Cueros Veléz S.A.S.Ha
                tenido la oportunidad de liderar procesos y proyectos como
                director de desarrollo (2017) y  presidente (2018-2019)
                en la Asociación Nacional de Estudiantes de Ingeniería Industrial,
                Administrativa y de Producción -ANEIAP , logrando aportar en el crecimiento
                tanto personal como profesional de los asociados. Ha participado en la gestión
                y organización de eventos regionales y nacionales dirigidos a estudiantes.
                Vinculada actualmente al proyecto bilingüe e intercultural de organizaciones
                internacionales como TCC (Tulsa Community College).`
            },
            {
                img:
                    "images/team/Geiler Radillo.jpg",
                name: "Geiler Radillo",
                email: "geilerelias@hotmail.com",
                occupation: "Desarrollador ",
                description: `Ingeniero de Sistemas, egresado de la Universidad Popular del Cesar.
                 Con amplios conocimientos en la gestión de las tecnologías de la información y
                 la comunicación con énfasis en el desarrollo de software`
            },
        ],
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
        ],
        model: 0,


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
    height: 350px;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.8;
    position: absolute;
    width: 100%;
}
</style>
