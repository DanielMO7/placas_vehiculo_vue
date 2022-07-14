<template>
  <div class="fondo">
    <v-container class="d-block align-center justify-center">
      <v-card class="text-center mb-5" style="background-color: transparent">
        <h3 style="background: black; color: white">
          Seleccione el tipo de Modificacion que desea Registrar.
        </h3>
        <br />
        <v-btn
          class="mr-4 mb-4"
          style="background: #e1c843; color: black"
          @click="formulario_aceite"
        >
          Cambio de Aceite
        </v-btn>
        <v-btn
          class="mr-4 mb-4"
          style="background-color: rgba(0, 0, 0, 0.87); color: white"
          @click="formulario_llanta"
        >
          Cambio de Llantas
        </v-btn>
      </v-card>
      {{ tipo_formulario }}

      <div v-if="tipo_formulario == 1">
      <!--Formulario para Cambio de Aceite.-->
        <v-card>
          <v-container>
            <h1 class="text-center">Registrar Cambio de Aceite</h1>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="mostrar()"
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
                :rules="[(v) => !!v || 'Seleccione una opcion.']"
                label="Tipo de Vehículo"
                item-text="nombre_vehiculo"
                item-value="valor_en_codigo"
                required
              ></v-select>
  
              <v-select
                v-model="select_marca_aceite"
                :items="items_aceite"
                :rules="[(v) => !!v || 'Seleccione una opcion.']"
                label="Marca del Aceite"
                item-text="nombre_aceite"
                item-value="valor_en_codigo_aceite"
                required
              ></v-select>

              <v-text-field
                v-model="kilometraje_actual"
                :rules="kilometrajeRules"
                label="Kilometraje Actual"
                type="number"
                required
              ></v-text-field>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="mostrar()"
              >
                Guardar
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </div>
      <div v-if="tipo_formulario == 2">
      <!--Formulario para Cambio de Llanta.-->
        <v-card>
          <v-container>
            <h1 class="text-center">Registrar Cambio de Llanta</h1>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="submit"
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
                :rules="[(v) => !!v || '']"
                label="Tipo de Vehículo"
                item-text="nombre_vehiculo"
                item-value="valor_en_codigo"
                required
              ></v-select>
  
              <v-select
                v-model="select_marca_llanta"
                :items="items_llanta"
                :rules="[(v) => !!v || 'Seleccione una opcion.']"
                label="Marca de la LLanta"
                item-text="nombre_llanta"
                item-value="valor_en_codigo_llanta"
                required
              ></v-select>

              <v-text-field
                v-model="kilometraje_actual"
                :rules="kilometrajeRules"
                label="Kilometraje Actual"
                type="number"
                required
              ></v-text-field>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submit"
              >
                Guardar
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
//import registroPlacaService from "./services/registroPlacaService";
//import Swal from "sweetalert2";

export default {
  data: () => ({
    valid: true,
    tipo_formulario: false,

    placa: "",
    placaRules: [(v) => !!v || "Ingrese la placa de su vehículo."],
    select_tipo_vehiculo: "",
    items_vehiculo: [
      { nombre_vehiculo: "Automovil", valor_en_codigo: 1 },
      { nombre_vehiculo: "Motocicleta", valor_en_codigo: 2 },
    ],
    select_marca_aceite: "",
    items_aceite: [
      { nombre_aceite: "Aceite 10w", valor_en_codigo_aceite: 1 },
      { nombre_aceite: "Diesel", valor_en_codigo_aceite: 2 },
    ],
    select_marca_llanta: "",
    items_llanta: [
      { nombre_llanta: "Continental", valor_en_codigo_llanta: 1 },
      { nombre_llanta: "Diesel", valor_en_codigo_llanta: 2 },
    ],
    kilometraje_actual: "",
    kilometrajeRules: [(v) => !!v || "Ingrese el kilometraje actual del vehículo."],
    value: [],

    checkbox: false,
  }),

  methods: {
    /*validate () {
        this.$refs.form.validate()
      },*/
    uppercase() {
      this.placa = this.placa.toUpperCase();
    },
    mostrar() {
      console.log(this.select_tipo_cambio);
    },
    formulario_aceite() {
      this.tipo_formulario = 1;
    },
    formulario_llanta() {
      this.tipo_formulario = 2;
    },
    submit(){
    }
  },
};
</script>

<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  background: url("../../assets/car-932455_1280.jpg");
}
</style>
