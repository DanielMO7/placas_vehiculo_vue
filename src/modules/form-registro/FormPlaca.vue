<template>
  <div class="fondo">
    <v-container class="d-block align-center justify-center ">
      <v-card>
        <v-card-text>
          
          <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <v-text-field
          v-model="placa"
          :rules="placaRules"
          @input="uppercase"
          label="Placa"
          required
        ></v-text-field>

        <v-select
          v-model="select_tipo_vehiculo"
          :items="items_vehiculo"
          :rules="[v => !!v || 'Item is required']"
          label="Tipo de Vehículo"
          item-text="nombre_vehiculo"
          item-value="valor_en_codigo"
          required
        ></v-select>

        <v-select
          v-model="select_tipo_cambio"
          :items="items_cambio"
          :rules="[v => !!v || 'Item is required']"
          label="Tipo de Cambio Realizado"
          item-text="nombre_cambio"
          item-value="valor_en_codigo_cambio"
          required
        ></v-select>
        
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
    
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

    
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>
    
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
    
        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>
    
        <v-btn
          color="warning"
          @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-form>
        </v-card-text>
      </v-card>
      </v-container>
    </div>

</template>

<script>
//import registroPlacaService from "./services/registroPlacaService";
//import Swal from "sweetalert2";

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      placa: '',
      placaRules: [
        v => !!v || 'E-mail is required',
      ],
      select_tipo_vehiculo: null,
      items_vehiculo: [ 
        {nombre_vehiculo: 'Automovil', valor_en_codigo: 1},
        {nombre_vehiculo: 'Motocicleta', valor_en_codigo: 2}
      ],
      select_tipo_cambio: null,
      items_cambio: [ 
        {nombre_cambio: 'Cambio de Aceite', valor_en_codigo_cambio: 1},
        {nombre_cambio: 'Cambio de Llanta', valor_en_codigo_cambio: 2}
      ],
      value: [],

      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      uppercase() {
      this.placa = this.placa.toUpperCase();
      },
    },
    updated(){
      console.log(this.items)
    },
  };
</script>

<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  background: url("../../assets/car-932455_1280.jpg");
  /*background: #ecf5fe;*/
  /*margin-top: -48px;*/
}
h2 {
  background: #1976d2;
  margin-top: 35px;
  border-radius: 5px 5px 0px 0px;
}
.placa {
  width: 400px;
  height: 190px;
  background: url("../../assets/boxConsulta.png");
}
.input-placa {
  margin-top: 26px;
  margin-left: 30px;
  margin-right: 26px;
}
</style>

<style scoped>
</style>

