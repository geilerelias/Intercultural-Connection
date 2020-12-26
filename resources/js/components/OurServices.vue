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
                        {{ $t("header.our-services") }}
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


        <section class="py-5">
            <h2 class="title font-weight-bold text-center mb-4">
               {{$t("services.these-are-the-main-services-we-offer")}}
            </h2>
            <div class="container">
                <div v-for="(item, index ) in services" :key="item.title">
                    <v-row class="mb-5 align-center">
                        <v-col class="col-md-4 col-12" :class="index%2!==0?'order-md-2':''">
                            <v-card outlined>
                                <v-img
                                    height="200"
                                    :src="`/storage/${item.src}`"
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
                        <div class="px-0 col-md-8 col-12">
                            <v-card flat color="transparent">
                                <v-card-title>
                                    <div class="base-section-heading text-center mt-5">
                                        <h3 class="text-h6 font-weight-bold  text-truncate">
                                            {{ item.title }}
                                        </h3>
                                        <v-divider class="primary  mr-auto mb-3" style="max-width: 28px;"></v-divider>
                                    </div>

                                </v-card-title>
                                <v-card-text class="text-justify" v-html="item.description">

                                </v-card-text>
                            </v-card>
                        </div>
                    </v-row>
                </div>
            </div>
        </section>



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
            ],
            ofertaDeFormacion: {
                title: "OFERTA DE FORMACIÓN",
                description: `La oferta del presente portafolio de servicios está centrado en acompañar a
                directivos docentes de colegios oficiales y privados en temas relacionados con
                bilingüismo y sus metas de convertirse en Colegios Reconocidos oficialmente
                como Bilingües. Desarrollar habilidades comunicativas en inglés. Igualmente
                fortalecer prácticas de enseñanza del inglés. Integrar el inglés con otras áreas
                curriculares y acompañar a los padres de familia y comunidad en general en su
                deseo de hacer del inglés su aliado estratégico para conectarse con el mundo.`
            },
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
                    title: "Formación en Inglés ",
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
                    description: `
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
            ]
        };
    },

};
</script>

<style lang="scss" scoped></style>
