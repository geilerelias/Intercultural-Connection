<template>
    <v-footer dark elevation="24" padless>
        <v-container class="ma-0 pa-0" fluid>
            <v-card class="primary darken-3  white--text" flat tile>

                <div>
                    <v-card
                        class="d-flex justify-space-between mb-6"
                        color="transparent"
                        flat
                        tile
                    >
                        <v-card
                            class="pa-2 mx-4 transparent"
                            outlined
                            tile
                        >
                            <p>
                                <strong class="subheading  white--text ">
                                    {{ $t("connect-social-media") }}
                                </strong>
                            </p>
                        </v-card>
                        <v-card
                            class="pa-2 mx-4 transparent"
                            outlined
                            tile
                        >
                            <v-layout class="justify-center wrap">
                                <div v-for="(icon, i) in icons" :key="i"
                                     class="flex xs1 sm2 md1 mx-4 my-1">
                                    <v-btn
                                        class=" white--text "
                                        icon
                                    >
                                        <v-icon size="24px">{{ icon }}</v-icon>
                                    </v-btn>
                                </div>
                            </v-layout>
                        </v-card>
                    </v-card>
                </div>

                <v-row class="ma-0">
                    <div class="primary darken-2 pa-5 col-md-3 col-12">


                        <v-img v-if="$vuetify.breakpoint.mdAndUp"
                               :height="$vuetify.breakpoint.mdAndUp?'25vh': $vuetify.breakpoint.smAndUp?'100vh':''"
                               :src="require('../../../images/logo-letras.png')"
                               aspect-ratio="1"
                               contain
                               style="left: 10px !important; ; padding-left: 0px !important;"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                    align="center"
                                    class="fill-height ma-0"
                                    justify="center"
                                >
                                    <v-progress-circular
                                        color="grey lighten-5"
                                        indeterminate
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <h3 v-else class="headline mb-3 text-center">
                            {{ $t("intercultural-connections-foundation") }}
                        </h3>
                        <div
                            class=" text-center d-flex justify-center align-center"
                        >
                            {{ $t("slogan-foundation") }}
                        </div>


                    </div>
                    <div class="primary darken-1 pa-5 col-md-9 col-12 ">
                        <v-row>
                            <v-col
                                class="col-md-4 col-sm-6 col-12 white--text"
                            >
                                <v-list color="transparent" dense rounded>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ $t("footer.quick-links") }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item
                                        v-for="(item, i) in links"
                                        :key="i"
                                        :to="item.to"

                                    >
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ $t("header." + item.title) }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            <v-col v-if="$vuetify.breakpoint.xsOnly" class="col-sm-6 col-12">
                                <v-divider class="white text--white"
                                           style="height: 5px"></v-divider>
                            </v-col>

                            <v-col
                                class="col-md-8 col-sm-6 col-12 white--text"
                            >
                                <div v-if="$vuetify.breakpoint.mdAndUp">
                                    <v-list-item-content>
                                        <v-list-item-title>{{ $t("services.our-services") }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-row>
                                        <v-col class="col-md-6 col-12 white--text">
                                            <v-list color="transparent" dense rounded>
                                                <v-list-item v-for="(item, i) in services" v-if="i%2==0"
                                                             :key="i"
                                                             v-model="service"
                                                             color="primary"
                                                             :to="`/our-services#${item.title}`"
                                                >
                                                    <v-list-item-avatar>
                                                        <v-img :src="`/storage/${item.src}`"></v-img>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col class="col-md-6 col-12 white--text">
                                            <v-list color="transparent" dense rounded>
                                                <v-list-item v-for="(item, i) in services" v-if="i%2!=0"
                                                             :key="i"
                                                             v-model="service"
                                                             color="primary"
                                                             :to="`/our-services#${item.title}`"
                                                >
                                                    <v-list-item-avatar>
                                                        <v-img :src="`/storage/${item.src}`"></v-img>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-else>
                                    <v-list color="transparent" dense rounded>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ $t("services.our-services") }}</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item v-for="(item, i) in services"
                                                     :key="i"
                                                     v-model="service"
                                                     color="primary"
                                                     :to="`/our-services#${item.title}`"
                                        >
                                            <v-list-item-avatar>
                                                <v-img :src="`/storage/${item.src}`"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title v-text="item.title"></v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <v-col class="text-center pa-3">
                        © 2019 - {{ new Date().getFullYear() }}
                        {{ $t("intercultural-connections-foundation") }} — {{ $t("footer.all-rights-reserved") }}
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
                {to: "/", title: "home", icon: 'mdi-home'},
                {to: "about-us", title: "about-us", icon: 'mdi-account-question'},
                {to: "our-services", title: "our-services", icon: 'mdi-face-agent'},
                {to: "projects", title: "projects", icon: 'mdi-folder-multiple'},
                {to: "donations", title: "donations", icon: 'mdi-hand-heart'},
                {to: "contact-us", title: "contact-us", icon: 'mdi-card-account-mail'},
            ],
            services: [
                {
                    src: "services/acompanamiento-al-transito-de-colegios-academicos-regulares.jpg",
                    title: "Acompañamiento al tránsito de Colegios Académicos Regulares a Colegios Bilingües.",
                    description: `Este programa buscar acompañar a directivos docentes de colegios
                    oficiales y privados en temas relacionados con bilingüismo y sus metas de
                    convertirse en Colegios Reconocidos oficialmente como Bilingües. Tiene
                    como objetivo promover y/o motivar transformaciones curriculares
                    sostenibles desde quienes toman decisiones institucionales en la educación
                    escolar.
                    Dada nuestra experiencia en este campo, la fundación Intercultural
                    Connections está en la capacidad de acompañar y asesorar el tránsito de
                    colegios de tipo académicos regulares a colegios con educación bilingüe,
                    teniendo en cuenta los tres tipos de colegio bilingüe que distingue el
                    Ministerio de Educación Nacional así:<br>
                    ✅ Intensificación
                    ✅ Colegio bilingüe nacional
                    ✅ Colegio bilingüe internacional.`

                },
                {
                    src: "services/proyectos-de-educacion.jpg",
                    title: "Proyectos De Educación Bilingüe.",
                    description: `Ofrecemos completo e integral acompañamiento en las diferentes iniciativas
                    escolares o académicas que promuevan el uso del inglés como segunda
                    lengua.`
                },
                {
                    src: "services/formulacion-de-proyectos.jpg",
                    title: "Formulación Proyecto tipo De Bilingüismo DNP a Entidades\n" +
                        "Territoriales",
                    description: `El equipo especializado de la Fundación Intercultural Connections le
                    asesora en las distintas las fases de formulación, implementación,
                    monitoreo y evaluación acorde con el plan de Desarrollo de su
                    municipalidad o Departamental en materia de bilingüismo, tomando como
                    referencia y realizando el análisis de las competencias comunicativas en
                    inglés de los niños, niñas, adolescentes y jóvenes que asisten a las
                    Instituciones Educativas sean estas oficiales o privadas del país; Las líneas
                    de acción propuestas son: - Formación Docente - Inmersiones para
                    docentes y estudiantes - Evaluación de docentes y estudiantes -
                    Acompañamiento a las prácticas pedagógicas de aula - Dotación de
                    materiales y recursos educativos`
                },
                {
                    src: "services/formacion-en-ingles.jpg",
                    title: "Formación en Ingles",
                    description: `Desarrollar habilidades comunicativas en inglés. Fortalecer prácticas de
                    enseñanza del inglés. Integrar el inglés con otras áreas curriculares. Aplicar
                    los estándares del MEN para el área de inglés.
                    Manejar nuevas metodologías para la enseñanza del inglés.`
                },
                {
                    src: "services/preparacion-a-estudiantes.jpg",
                    title: "Preparación a estudiantes para la prueba SABER 11º.",
                    description: `En Intercultural Connections Foundation acompañamos a Secretarías de
                    Educación e Instituciones Educativas en el proceso de preparación de
                    estudiantes de grado 11º para la presentación de la prueba SABER 11º. El
                    proceso incluye la construcción de un análisis de contexto y necesidades
                    por institución, la aplicación de dos simulacros (de entrada y salida) para
                    determinar el nivel de los estudiantes en cada una de las áreas evaluadas y
                    la detección de aspectos que requieren fortalecimiento. Adicionalmente,
                    brindamos un proceso de formación a estudiantes con una intensidad de 40
                    horas presenciales y 20 horas de trabajo autónomo, complementado con
                    una estrategia de acompañamiento virtual.`
                },
                {
                    src: "services/english-together.jpg",
                    title: "English Together",
                    description: `Encuentros lúdico/académicos entre estudiantes de grados 6 a 9 de
                    Instituciones Educativas Oficiales y de colegios privados bilingües, para
                    estimular el aprendizaje y la práctica del inglés en ambientes diferentes y
                    con metodologías efectivas.
                    Cada colegio privado bilingüe aporta: profesores y estudiantes bilingües,
                    instalaciones del colegio, material didáctico y refrigerios.
                    La Secretaría de Educación Municipal financia el transporte de los
                    estudiantes de las Instituciones Educativas Oficiales.`
                },
                {
                    src: "services/connecting-knowledge.jpg",
                    title: "Connecting Knowledge",
                    description: `¿En qué consiste?
                    Con el propósito de conectar el conocimiento, las ideas, las reflexiones, las
                    lecciones y las perspectivas que se construyen en los procesos de
                    Enseñanza y Aprendizaje del Ingles como segunda lengua con la
                    producción académica de la región, nace una línea de trabajo que se ha
                    denominado Connecting knowledge, cuyo propósito es impulsar la creación
                    de conocimiento e investigación alrededor del bilingüismo en cada región
                    donde se promovida esta iniciativa, de la mano con la academia y las
                    instituciones educativas de la región.
                    Con esta línea, se busca generar alianzas y trabajo colaborativo con las
                    universidades y centros académicos interesados, para visibilizar y abordar,
                    desde la investigación, problemáticas trabajadas en mesas de trabajo
                    relacionadas con políticas, inversión, aprendizaje y enseñanza del inglés,
                    en los que se está en capacidad de ofrecer insumos e información
                    significativa. La idea es que estas problemáticas puedan desarrollarse
                    desde los trabajos de grado de los estudiantes de licenciatura, maestrías en
                    lenguas extranjeras y carreras o posgrados afines.
                    En suma, esta iniciativa pretende articular la producción académica de los
                    estudiantes de las universidades con las reflexiones y propuestas de
                    intervención construidas desde las mesas de trabajo propuestas para que
                    haya retroalimentación en doble vía.`
                },
                {
                    src: "services/laboratorios-de-innovacion.jpg",
                    title: "Laboratorios de innovación Bilingüe:",
                    description: `Laboratorios de innovación para la enseñanza del inglés para docentes de
                    inglés de colegios oficiales y privados. Estos programas podrán ser
                    subvencionados por patrocinadores estatales o privados y ello promoverá la
                    gratuidad de la participación de docentes que no cuenten con los recursos
                    necesarios para cubrir los costos de su participación.`
                },
                {
                    src: "services/campamentos-de-inmersion.jpg",
                    title: "Campamentos de Inmersión bilingüe",
                    description: `Cuando hablamos de Campamentos de Inmersión Bilingüe no sólo
                    hablamos de un campamento en inglés. En un Campamento de Inmersión
                    Bilingüe (Inglés) el contacto con el idioma es TOTAL.
                    En los Campamentos de Inmersión Lingüística en Inglés los monitores y
                    profesores son bilingües y también nativos.
                    LA INMERSIÓN CULTURAL es la clave para el éxito de estos
                    campamentos: los niños y jóvenes conocen gente joven de otras lugares al
                    tiempo que aprenden de sus propias vivencias con sus monitores y
                    profesores. Se encuentran en todo momento en un entorno seguro,
                    divertido y dónde el único idioma empleado es el inglés.`
                },
            ],
            service: null
        };
    }
};
</script>

<style lang="scss" scoped></style>
