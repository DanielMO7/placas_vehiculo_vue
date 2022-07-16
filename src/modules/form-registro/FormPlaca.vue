<template>
  <div class="fondo">
    <v-container class="d-block align-center justify-center">
      <h3
        style="
          background: black;
          color: white;
          text-align: center;
          margin-top: 50px;
          font-size: 25px;
        "
      >
        Registrar Cambio
      </h3>
      <v-card>
        <v-container style="width: 95%">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mt-2"
            @submit.prevent="mostrar()"
          >
            <v-row>
              <v-col class="d-flex mb-n5" cols="12" sm="6">
                <v-text-field
                  v-model="placa"
                  :rules="placaRules"
                  @input="uppercase"
                  label="Placa"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col class="d-flex mb-n5" cols="12" sm="6">
                <v-select
                  v-model="select_tipo_vehiculo"
                  :items="items_vehiculo"
                  :rules="[(v) => !!v || 'Seleccione el tipo de vehículo.']"
                  label="Tipo de Vehículo"
                  item-text="nombre_vehiculo"
                  item-value="valor_en_codigo"
                  outlined
                  required
                ></v-select>
              </v-col>
              <v-col class="d-flex mb-n5" cols="12" sm="6">
                <v-select
                  v-model="tipo_formulario"
                  :items="items_tipo_formulario"
                  :rules="[(v) => !!v || 'Seleccione el tipo de modificación.']"
                  label="Tipo de modificacion"
                  item-text="nombre_cambio"
                  item-value="valor_en_codigo"
                  outlined
                  required
                ></v-select>
              </v-col>
              <v-col class="mb-n5" cols="12" sm="6">
                <div v-if="tipo_formulario == 1">
                  <v-select
                    v-model="select_marca_aceite"
                    :items="items_aceite"
                    :rules="[(v) => !!v || 'Seleccione la marca del aceite.']"
                    label="Marca del Aceite"
                    item-text="nombre_aceite"
                    item-value="valor_en_codigo_aceite"
                    outlined
                    required
                  ></v-select>
                </div>
                <div v-if="tipo_formulario == 2">
                  <v-select
                    v-model="select_marca_llanta"
                    :items="items_llanta"
                    :rules="[(v) => !!v || 'Seleccione la marca de la llanta.']"
                    label="Marca de la LLanta"
                    item-text="nombre_llanta"
                    item-value="valor_en_codigo_llanta"
                    outlined
                    required
                  ></v-select>
                </div>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="kilometraje_actual"
                  :rules="kilometrajeRules"
                  label="Kilometraje Actual"
                  type="number"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col class="d-flex justify-center" cols="12" sm="6">
                <div class="rueda rotate-img"></div>
              </v-col>
            </v-row>
            <v-btn
              :disabled="!valid"
              color="primary"
              style="background: #e1c843; color: black"
              class="d-block mx-auto white--text"
              @click="mostrar()"
            >
              Guardar
            </v-btn>
          </v-form>
        </v-container>
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
    tipo_formulario: false,
    items_tipo_formulario: [
      { nombre_cambio: "Cambio de Aceite", valor_en_codigo: 1 },
      { nombre_cambio: "Cambio de Llanta", valor_en_codigo: 2 },
    ],
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
    kilometrajeRules: [
      (v) => !!v || "Ingrese el kilometraje actual del vehículo.",
    ],
    value: [],

    checkbox: false,
  }),

  methods: {
    uppercase() {
      this.placa = this.placa.toUpperCase();
    },
    formulario_aceite() {
      this.tipo_formulario = 1;
    },
    formulario_llanta() {
      this.tipo_formulario = 2;
    },
    enviarDatos() {
      /*if(this.tipo_formulario == 1){
        // Datos Cambio de Aceite
        var datos = buscarPlaca({
          placa : this.placa, 
          tipo_vehiculo: this.select_tipo_vehiculo,
          tipo_cambio: this.tipo_formulario,
          marca_aceite: this.select_marca_aceite,
          kilometraje: this.kilometraje_actual,
          })

      }else{
        // Datos Cambio de llanta
         var datos = buscarPlaca({
          placa : this.placa, 
          tipo_vehiculo: this.select_tipo_vehiculo,
          tipo_cambio: this.tipo_formulario,
          marca_llanta: this.select_marca_llanta,
          kilometraje: this.kilometraje_actual,
          })
      }*/
    },
  },
  // Quita los espacios blancos que se encuentren en el input de la placa.
  updated() {
    this.placa = this.placa.replace(/ /g, "");
  },
};
</script>

<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  background: url("../../assets/car-932455_1280.jpg");
}
.rueda {
  width: 80px;
  height: 80px;
  background: url("../../assets/llanta.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.rotate-img {
  animation-name: rotate-gear;
  animation-duration: 28s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotate-gear {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotatez(360deg);
  }
}
</style>
<style>
.v-input input {
  text-align: start !important;
}
</style>
