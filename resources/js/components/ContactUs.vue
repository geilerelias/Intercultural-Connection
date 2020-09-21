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

        <section class="mt-12">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <h3
                            class="text-uppercase primary--text title font-weight-bold mb-1 text-left mb-4"
                        >
                            MANTENTE EN CONTACTO CON NOSOTROS
                        </h3>
                        <p
                            class="base-body body-1 grey--text text--darken-1 text-left mb-6 text-justify"
                        >
                            Si quieres saber mas de lo que hacemos y como podemos
                            ayudarte, no dudes en escribirnos a nuestros correos
                            electrónicos o llamar a cualquiera de los números
                            telefónicos que tenemos disponibles para ti. Para
                            nosotros es un placer poder servirte.
                        </p>

                        <div
                            v-for="item in contact"
                            :key="item.name"
                            class="pt-2 mb-0 d-flex justify-start align-content-start align-start"
                        >
                            <div
                                class="base-avatar d-inline-flex mb-3 "
                                style="margin-left:-10px"
                            >
                                <v-icon
                                    color="primary"
                                    size="32"
                                    class="mt-6"
                                    v-text="item.icon"
                                />
                            </div>
                            <div class="ml-3">
                                <h3
                                    class="text-uppercase font-weight-black subtitle-2 mb-1 text-left primary--text"
                                >
                                    {{ item.name }}
                                </h3>
                                <div
                                    class="base-body body-1 mx-auto  text--lighten-1 text-left mb-0"
                                >
                                    <div v-html="item.content"></div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h3
                            class="text-uppercase title primary--text  font-weight-bold mb-1 text-left mb-4"
                        >
                            Envíanos un correo electrónico
                        </h3>

                        <v-form>
                            <div>
                                <div>
                                    <v-text-field
                                        v-model="message.name"
                                        label="Nombre"
                                        outlined
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="message.email"
                                        small
                                        label="Correo"
                                        outlined
                                        type="email"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="message.subject"
                                        outlined
                                        label="Tema"
                                    ></v-text-field>
                                    <v-textarea
                                        v-model="message.content"
                                        outlined
                                        label="Descripción o Mensaje"
                                    ></v-textarea>

                                    <v-btn
                                        :disabled="dialog"
                                        :loading="dialog"
                                        class="white--text"
                                        @click="enviar()"
                                        color="primary" outlined dark>
                                        Enviar
                                    </v-btn>
                                </div>
                            </div>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
            <v-dialog
                v-model="dialog"
                hide-overlay
                persistent
                width="300"
            >
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-text class="pa-4">
                        <p class="mb-2">Por favor espere</p>
                        <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                        ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                top
                color="error"
            >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="blue"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </section>
    </v-app>
</template>

<script>
import axios from "axios";

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
            ],
            snackbar: false,
            text: '',
            timeout: 2000,
            dialog: false,
            message: {
                name: '',
                email: '',
                subject: '',
                content: ''
            },

            contact: [
                {
                    icon: "mdi-map-marker-outline",
                    name: "Dirección",
                    content: `<div class="mb-2 font-weight-black">2620 Smith Drive</div>Valledupar Cesar - Colombia`
                },
                {
                    icon: "mdi-cellphone",
                    name: "Teléfonos",
                    content: `<div class="mb-2 font-weight-black">+57 310 789 74 85. </div>+1 (321) 383-4531`
                },
                {
                    icon: "mdi-email",
                    name: "Correos",
                    content: `<div class="mb-2 font-weight-black">contacto@interculturalconnections.org</div>alexandercastrillo@hotmail.com`
                }
            ]
        };
    },
    methods: {
        enviar() {
            if (this.message.name.trim() === '' || this.message.content.trim() === '') {
                this.text= 'Debes completar todos los campos antes de enviar';
                this.snackbar=true;
                return;
            }
            this.dialog = true;
            const messageNuevo = this.message;
            axios.post('/message', messageNuevo)
                .then(response => {
                    if (response.status == 200) {
                        console.log(response)
                        console.log(response.data);
                        this.dialog = false;
                        this.message = {
                            name: '',
                            email: '',
                            subject: '',
                            content: ''
                        }
                        Swal.fire(
                            'Buen trabajo',
                            'Mensaje enviado con éxito!',
                            'success'
                        )
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        })
                        console.log(response.data);
                        this.dialog = false;
                    }

                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                    console.log(error);
                    this.dialog = false;
                })
        }
    }
};
</script>

<style lang="scss" scoped></style>
