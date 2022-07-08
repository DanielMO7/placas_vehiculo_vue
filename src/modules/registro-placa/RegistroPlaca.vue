<template>
<div class="fondo">
    <v-container 
        class="d-block align-center justify-center">
        <h1 class="white--text mt-9">Registro Placa</h1>
    </v-container>   
</div>
</template>

<script>
export default{
    data: function() {
    return {
        code: ""
    };
    },
    methods: {
        uppercase() {
            this.code = this.code.toUpperCase();
        }
    }
}
</script>

<style scoped>
    .fondo {
        height: 100vh;
        background: url("../../assets/orion-nebula-11107_1920.jpg");
        margin-top: -48px;
    }   
</style>