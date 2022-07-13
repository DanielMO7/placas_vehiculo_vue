<template>
  <div class="fondo">
    <v-container class="d-block align-center justify-center">
      <h2 class="d-block mx-auto mt-16 white--text " 
        style="text-align: center; 
               background: black;
               width: 50%;
               border-radius: 5px 5px 5px 5px ;
               ">
        Escriba la placa que desea consultar.
      </h2>

      <div class="d-flex justify-center mx-auto mt-9">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class=""
              @submit.prevent="mostrarDatos()"
            >
            <div class="placa align-center mx-0"
                style="width: 400px;">
                <v-col>
                    <v-text-field
                      v-model="placa"
                      :rules="placaRules"
                      @keyup="uppercase"
                      autofocus
                      value="uppercase"
                      required
                      onclick=""
                      style="font-size: 55px; max-height: 150px; margin-top: 15px"
                      class="code input-placa mt-5 text-center"
                      
                    >
                    </v-text-field>     
                </v-col>
              </div>
              <v-btn
                max-width="374"
                color="success"
                class="d-block mx-auto mt-16"
                @click="mostrarDatos"
              >
                Consultar
              </v-btn>
            </v-form>
            
      </div>
    </v-container>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import validacionPlacaServices from "../general/services/buscarPlaca";

export default {
  data: function () {
    return {
      valid: false,
      placa: "",
      placaRules: [
        (v) => !!v || "Por favor, ingrese un número de placa.",
        (v) => (v && v.length <= 8) || "La placa no debe tener mas de 8 caracteres.",
        (v) => (v && v.length >= 4) || 'La placa debe tener por lo menos 6 caracteres.',
      ],
    };
  },
  methods: {
    uppercase() {
      this.placa = this.placa.toUpperCase();
    },
    mostrarDatos() {
        if ( this.$refs.form.validate()) {
            validacionPlacaServices.buscarPlaca({placa : this.placa })
            .then(response =>{
                 //console.log(response.data)
                if (response.data.length == 0){
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Esta placa no se encuentra registrada!",
                    })
                }else{
                    this.$router.push({ name: 'registro_placa', params: { placa: this.placa } })
                }
            })
        }
    },
    },
}
</script>

<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  background: url("../../assets/car-932455_1280.jpg");
}
.placa {
  width: 400px;
  height: 190px;
  background: url("../../assets/boxConsulta.png");
  background-repeat: no-repeat;
  background-size:100%;
}
.input-placa {
  margin-top: 26px;
  margin-left: 30px;
  margin-right: 26px;
}

</style>
<style >
.v-input input {
  max-height: 70px;
  text-align: center;
}
.code input {
  text-transform: uppercase;
}
@media (max-width:500px) {
    .placa{
        width: 350px !important;
    }
    h2{
      width: 100% !important;
    }
    .container{
      padding: 7px !important;
    }
}
</style>