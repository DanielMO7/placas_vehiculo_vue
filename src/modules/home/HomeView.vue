<template>
<div class="fondo">
    <v-container 
        class="d-block align-center justify-center">
        <h2 
        class="d-block mx-auto white--text mt-16"
        style="text-align:center"
        >
        Escriba la placa que desea consultar.
        </h2>
       
       <div class="placa d-block mx-auto mt-9">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class=""
            >
            <v-container class="mx-auto ">
                <v-text-field
                v-model="code"
                @input="uppercase"
                style="font-size:55px; max-height: 150px;"
                class="input-placa text-center"
                >
            </v-text-field>
            </v-container>
            <v-btn 
                max-width="374" 
                color="success" 
                class="d-block mx-auto  mt-16" 
                >
                consultar
            </v-btn>
        </v-form>        
       </div>
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
    .placa{
        width:400px;
        height:190px;
        background: url('../../assets/boxConsulta.png');
    }
    .input-placa{
        margin-top: 26px;
        margin-left: 30px;
        margin-right: 26px;
    }
</style>

<style scoped>
.v-input {
    font-size: 1.2em;
}
</style>
<style >
.v-input input {
    max-height: 70px;
    text-align: center;
}
</style>