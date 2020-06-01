<template>
    <div>
        <div>
            <h1>numero: {{ numero }}</h1>
            <hijo-component></hijo-component>
        </div>
        <button></button>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    components: {
        "hijo-component": () => import("./exampleHijo.vue")
    },
    computed: {
        ...mapState(["numero"])
    }
};
</script>

<style lang="scss" scoped></style>
