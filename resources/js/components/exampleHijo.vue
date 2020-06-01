<template>
    <div>
        <v-btn @click="$store.commit('aumentar')">+</v-btn>
        <h1>numero: {{ numero }}</h1>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        numero() {
            return this.$store.state.numero;
        }
    }
};
</script>

<style lang="scss" scoped></style>
