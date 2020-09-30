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
                    <h1 class="display-2 text-center">
                        {{ $t("header.about-us") }}
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

        <v-card flat color="indigo lighten-5">
            <v-card color="primary" dark flat>
                <v-img
                    height="60vh"
                    :src="require('../../images/quinesSomos.jpg')"
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
                    </template
                    >
                </v-img>
            </v-card>

            <v-card
                class="mx-auto mb-6 px-6"
                :max-width="$vuetify.breakpoint.smAndDown?'90vw':'70vw'"
                style="margin-top: -64px;"
            >
                <v-card-title primary-title>
                    <h2 class="mt-4 headline text-justify">
                        SOMOS LA
                        <strong>
                            FUNDACIÓN INTERCULTURAL CONNECTIONS.
                        </strong>

                        <br/>
                    </h2>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text>
                    <p class="text-justify subtitle-1">
                        Nuestro objetivo es prestar el servicio público esencial
                        de educación, impartiendo educación formal bilingüe
                        (Inglés- español u otros idiomas), para niños, jóvenes y
                        adultos de ambos sexos, en colegios públicos y privados
                        con las modalidades de preescolar, básica primaria,
                        básica secundaria y media vocacional, o las que en el
                        futuro las sustituyan legalmente.
                    </p>
                    <ul>
                        <li>
                            <p>
                                Facilitamos la educación no formal, prestamos
                                servicios en áreas socio humanísticos,
                                turísticas, culturales, medioambientales,
                                deportivas y programas de extensión académica.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Buscamos el desarrollo y la formación integral
                                de los estudiantes, profesionales o personas de
                                la sociedad civil dentro de un profundo sentido
                                humanista y de los valores, así como de
                                conocimientos académicos y de prácticas
                                turísticas, culturales y deportivas, mediante la
                                educación formal y no formal.
                            </p>
                        </li>
                        <li>
                            <p>
                                Fomentamos el estudio del turismo y la cultura
                                colombiana en el marco de la cultura universal.
                            </p>
                        </li>
                        <li>
                            <p>
                                Establecemos mecanismos que proporcionen el
                                intercambio de experiencias con personas de
                                habla inglesa y otros idiomas.
                            </p>
                        </li>
                        <li>
                            <p>
                                Ofrecemos a los estudiantes, profesionales y a
                                toda la comunidad educativa medios o programas
                                que contribuyan a su capacitación y
                                actualización.
                            </p>
                        </li>
                        <li>
                            <p>
                                Establecemos actividades periódicas que
                                favorezcan el turismo, la cultura, el medio
                                ambiente, deporte y recreación del grupo
                                familiar de los asociados.
                            </p>
                        </li>
                        <li>
                            <p>
                                Estimulamos el acercamiento cultural con los
                                países de habla inglesa y/o países con cualquier
                                otro tipo de idiomas.
                                <v-btn text @click="show = !show">
                                    Seguir leyendo...
                                    <v-icon>
                                        {{
                                            show
                                                ? "mdi-chevron-up"
                                                : "mdi-chevron-down"
                                        }}
                                    </v-icon>
                                </v-btn>
                            </p>
                        </li>
                    </ul>
                </v-card-text>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                            <p class="text-justify mb-5">
                                Fomentar por los medios más eficaces el
                                intercambio cultural entre Colombia, los Estados
                                Unidos de América, Australia, Canadá entre otros
                                países de la región y el resto del mundo, y
                                contribuir al desarrollo educativo, social,
                                turístico, cultural y deportivo de su área de
                                influencia, para lo cual enfocará su actividad
                                meritoria en los siguientes programas: a) La
                                enseñanza del Inglés y de otras lenguas,
                                incluido el español; b) La adopción de programas
                                que permitan la actualización y mejoramiento
                                continuo de los métodos de enseñanza del Inglés
                                como segunda lengua y de otros idiomas; c) La
                                difusión del turismo y la cultura de Colombia y
                                de los Estados Unidos entre otros países por
                                medio de la creación de bibliotecas,
                                organización de conferencias, realización de
                                actos culturales, deportivos como exposiciones
                                de arte, conciertos, representaciones, difusión
                                de libros y en general, todo acto que tienda al
                                más amplio conocimiento de las producciones
                                intelectuales de Colombia y los Estados Unidos;
                                d) Fomento del turismo y la cultura en sus
                                distintas manifestaciones; e) Fomentar la
                                formación para el trabajo y desarrollo humano,
                                mediante programas de capacitación para el
                                desempeño ocupacional con enfoque en el idioma
                                Inglés y otros idiomas, el turismo, medio
                                ambiente y desarrollo humano, pertinentes para
                                las necesidades del contexto social, turístico y
                                cultural de su área de influencia; f) Diseñar,
                                elaborar y promover material de apoyo didáctico,
                                lúdico, pedagógico en soporte físico,
                                electrónico o digital, para el cumplimiento de
                                los objetivos misionales.
                            </p>
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-card>

        <v-card>
            <v-container grid-list-xs class="mb-12">
                <v-row class="mb-5 align-center">
                    <v-col class="col-md-4 col-12">
                        <v-card outlined>
                            <v-img
                                height="200"
                                :src="require('./../../images/mision.jpg')"
                                aspect-ratio="1"
                                class="grey lighten-2 "
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
                    <v-col class="px-0 col-md-8 col-12">
                        <v-card flat color="transparent">
                            <div class="base-section-heading text-center mt-5">
                                <h3 class="text-uppercase text-h6 font-weight-bold  text-left">
                                    Misión
                                </h3>
                                <v-divider class="primary  mr-auto mb-3" style="max-width: 28px;"></v-divider>
                            </div>
                            <p class="text-justify">
                                Promover el desarrollo intercultural, académico, recreativo,
                                turístico y deportivo en los diferentes territorios en donde
                                opera la organización para finalmente construir vínculos de
                                confianza con los clientes logrando el crecimiento y
                                reconocimiento en sus distintas áreas misionales.
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="mb-5 align-center">
                    <v-col class="col-md-4 col-12 order-md-2">
                        <v-card outlined>
                            <v-img
                                height="200"
                                :src="require('./../../images/vision.jpg')"
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
                        </v-card>

                    </v-col>
                    <v-col class="px-0 col-md-8 col-12">
                        <v-card flat color="transparent">
                            <div class="base-section-heading text-center ">
                                <h3 class="text-uppercase text-h6 font-weight-bold  text-left">
                                    Visión
                                </h3>
                                <v-divider class="primary  mr-auto mb-3" style="max-width: 28px;"></v-divider>
                            </div>
                            <p class="text-justify">
                                Para el año 2025 ser una organización altamente reconocida
                                que acompaña el liderazgo de las organizaciones cuyos
                                principios misionales son la promoción de la
                                interculturalidad, el desarrollo de la excelencia personal y
                                profesional y el intercambio de buenas prácticas que logren
                                mejores personas y naciones.
                            </p>
                        </v-card>
                    </v-col>
                </v-row>

                <div class="base-section-heading text-center ">
                    <h3 class="text-uppercase text-h6 font-weight-bold  text-left">
                        Valores
                    </h3>
                    <v-divider class="primary  mr-auto mb-3" style="max-width: 28px;"></v-divider>
                </div>

                <v-list three-line>
                    <v-list-item>
                        <v-list-item-avatar size="60">
                            <v-img
                                height="60"
                                :src="require('./../../images/compromiso.jpg')"
                                aspect-ratio="1"
                                class="grey lighten-2 "
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
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                COMPROMISO:
                            </v-list-item-title>
                            <v-list-item-content>
                                Excelencia profesional con miras a ser
                                considerados como socios operacionales, decididos a
                                contribuir en sus fortalezas individuales y grupales
                                que garanticen efectividad y cumplimiento de
                                entregables en cada proyecto o servicio ofrecido a
                                ustedes como clientes.
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="60">
                            <v-img
                                height="60"
                                :src="require('./../../images/confidencialidad.jpg')"
                                aspect-ratio="1"
                                class="grey lighten-2 "
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

                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                CONFIDENCIALIDAD:
                            </v-list-item-title>
                            <v-list-item-content>
                                Gestionamos toda la información y
                                documentación tanto de las compañías que asesoramos
                                como de terceros, con absoluta confidencialidad.
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="60">
                            <v-img
                                height="60"
                                :src="require('./../../images/etica.jpg')"
                                aspect-ratio="1"
                                class="grey lighten-2 "
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

                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                ÉTICA:
                            </v-list-item-title>
                            <v-list-item-content>
                                Individualmente identificados por un proceder
                                digno, establecido por firmes convicciones éticas y
                                morales y demostrado por la rectitud de nuestros
                                actos.
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="60">
                            <v-img
                                height="60"
                                :src="require('./../../images/Proactividad.jpg')"
                                aspect-ratio="1"
                                class="grey lighten-2 "
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
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                PROACTIVIDAD:
                            </v-list-item-title>
                            <v-list-item-content>
                                Distinguidos en el ámbito empresarial
                                como un equipo de profesionales de desempeño
                                dinámico, creativo y de respuestas efectivas y
                                ajustables a las cambiantes expectativas de nuestros
                                aliados y clientes.
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="60">
                            <v-img
                                height="60"
                                :src="require('./../../images/trabajo-en-equipo.jpg')"
                                aspect-ratio="1"
                                class="grey lighten-2 "
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
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                TRABAJO EN EQUIPO:
                            </v-list-item-title>
                            <v-list-item-content>
                                Trabajamos con comunicación,
                                confianza y compromiso para garantizar la ejecución
                                exitosa de cada proyecto o servicio.
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="60">
                            <v-img
                                height="60"
                                :src="require('./../../images/orientacion-al-cliente.jpg')"
                                aspect-ratio="1"
                                class="grey lighten-2 "
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
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                ORIENTACIÓN AL CLIENTE:
                            </v-list-item-title>
                            <v-list-item-content>
                                Mantenemos actualización
                                permanente y adecuamos los servicios de acuerdo a las
                                necesidades de los clientes, para de esta manera lograr
                                su satisfacción.
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-card>


    </v-app>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            links: [
                {
                    text: "Home",
                    disabled: false,
                    href: "/",
                },
                {
                    text: "About Us",
                    disabled: true,
                    href: "/about-us",
                },
            ],

        };
    },
    mounted() {
        console.log(window.navigator.language||navigator.browserLanguage)
    },
    created() {
        console.log(window.navigator.language||navigator.browserLanguage)
    }
};
</script>

<style lang="scss" scoped>
.v-application a {
    color: white !important;
    border-bottom: 1px solid black;
}

.title {
    border-bottom: 1.5px solid black;
}
</style>
