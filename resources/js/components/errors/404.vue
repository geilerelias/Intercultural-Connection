<template>

    <v-main >
        <v-toolbar dense  color="primary darken-1">
            <v-btn
                icon
                class="hidden-xs-only"
                href="/"
            >
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title >
                <v-avatar tile>
                    <v-img :src="require('../../../images/logo-letras.png')"
                           alt="Foundation Intercultural Connections "/>
                </v-avatar>

                {{$t("intercultural-connections-foundation")}}

            </v-toolbar-title>

            <v-spacer></v-spacer>


        </v-toolbar>
        <v-container>

            <div class="flex-center position-ref full-height">
                <div class="code">
                    404
                </div>

                <div class="message" style="padding: 10px;">
                    Not Found
                </div>
            </div>

        </v-container>
    </v-main>
</template>

<script>
export default {

};

</script>

<style>
html,
body {
    background-color: #fff;
    color: #636b6f;
    font-family: "Nunito", sans-serif;
    font-weight: 100;
    margin: 0;
}

.full-height {
    height: 90vh;
}

.flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
}

.position-ref {
    position: relative;
}

.code {
    border-right: 2px solid;
    font-size: 26px;
    padding: 0 15px 0 15px;
    text-align: center;
}

.message {
    font-size: 18px;
    text-align: center;
}
</style>
