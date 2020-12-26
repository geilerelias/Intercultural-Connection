<template>
    <v-app>
        <v-card
            flat
            tile
            style="height: 40vh;"
            class="d-flex align-end"
            color="primary darken-3"
        >
            <v-row class="white--text">
                <v-col cols="12" class="d-flex justify-center align-center">
                    <h1 class="display-2 text-center ">
                        {{ $t("header.donations") }}
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
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <div class="base-section-heading text-center ">
                                    <h3 class="text-uppercase text-h6 font-weight-bold  text-left">
                                        AYUDAR AHORA, ES SIMPLE
                                    </h3>
                                    <v-divider class="primary  mr-auto mb-3" style="max-width: 28px;"></v-divider>
                                </div>


                                <p
                                    class="base-body body-1 grey--text text--darken-1 text-left mb-6 text-justify"
                                >
                                    Atrévete a caminar aunque sea descalzo,
                                    a sonreír aunque no tengas motivos, a ayudar a otros sin recibir aplausos.
                                    <v-subheader>
                                        Anonymous.
                                    </v-subheader>
                                    <br>
                                    Aveces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar seria
                                    menos
                                    si
                                    le faltara esa gota.

                                    <v-subheader>
                                        Madre Teresa de Calcuta.
                                    </v-subheader>
                                </p>
                            </v-col>
                            <v-col>

                                <v-img max-width="400" class="rounded-lg"
                                       :src="require('./../../images/personas-que-llevan-donacion-caridad.jpg')"></v-img>

                            </v-col>
                        </v-row>


                        <div class="base-section-heading text-center ">
                            <h3 class="text-uppercase text-h6 font-weight-bold  text-left">
                                Envíanos un correo electrónico
                            </h3>
                            <v-divider class="primary  mr-auto mb-3" style="max-width: 28px;"></v-divider>
                        </div>
                        <p>¿Cuanto quieres aportar?</p>
                        <v-card
                            class="d-flex flex-row mb-6 justify-start align-center"
                            color="transparent"
                            flat
                            tile
                        >
                            <v-radio-group v-model="valor" row>
                                <v-radio label="$50.000" value="50000"></v-radio>
                                <v-radio label="$100.000" value="100000"></v-radio>
                                <v-radio label="$200.000" value="200000"></v-radio>
                                <v-radio label="$300.000" value="300000"></v-radio>
                                <v-radio label="$400.000" value="400000"></v-radio>
                            </v-radio-group>

                            <div class="mr-3">
                                Otro valor
                            </div>
                            <div>
                                <v-text-field
                                    label="Amount"
                                    value="0.00"
                                    prefix="$"
                                    type="number"
                                ></v-text-field>
                            </div>
                        </v-card>
                        <v-form>
                            <div>
                                <div>
                                    <v-text-field
                                        v-model="message.name"
                                        label="Nombres"
                                        outlined
                                        prepend-inner-icon="mdi-face"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="message.email"
                                        small
                                        label="Correo"
                                        outlined
                                        type="email"
                                        prepend-inner-icon="mdi-email"
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
                    text: "Donations",
                    disabled: true,
                    href: "/donations"
                }
            ],
            dialog: false,
            contact: [
                {
                    icon: "mdi-map-marker-outline",
                    name: "Dirección",
                    content: `Cra 4-A # 54-52<br />Chapinero Alto, Bogotá, Colombia`
                },
                {
                    icon: "mdi-cellphone",
                    name: "Teléfonos",
                    content: `+57 315 734 0385`
                },
                {
                    icon: "mdi-email",
                    name: "Correos",
                    content: `contacto@mvictoriaaponte.com<br/>contacto@soecolombia.com`
                }


            ],
            message: {
                name: '',
                email: '',
                subject: '',
                content: ''
            },
            valor: null
        };
    },
    methods: {
        enviar() {
            this.dialog = true;

            if (this.message.name.trim() === '' || this.message.content.trim() === '') {
                alert('Debes completar todos los campos antes de guardar');
                return;
            }
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
