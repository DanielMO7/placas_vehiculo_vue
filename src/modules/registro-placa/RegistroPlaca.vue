<template>
  <div class="fondo">
    <v-container class="d-block align-center justify-center">
      <div class="placa d-block mx-auto mt-9">
        <v-container class="mx-auto xs">
          <h3
            text-transform="uppercase"
            style="font-size: 55px; max-height: 150px"
            class="d-block mx-0 justify-center input-placa text-center mt-9"
          >
            {{ placa }}
          </h3>
        </v-container>
      
      </div>
      
      <h1
        class="white--text mt-9 text-center"
        style="
          text-align: center;
          background: black;
          border-radius: 5px 5px 5px 5px;
        "
      >
        Información del Vehiculo
      </h1>
      <v-row>
        <v-col>
          <h2 class="white--text mt-9 text-center">Servicios Realizados</h2>
          <v-data-table
            style="border-radius: 0px 0px 5px 5px"
            :headers="headers"
            :items="datos_placa"
            hide-default-footer
          ></v-data-table>
        </v-col>
      </v-row>
      <v-btn
        max-width="374"
        color="primary"
        class="d-block mx-auto mt-10"
        @click="$router.go(-1)"
      >
        Regresar
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import registroPlacaService from "../general/services/buscarPlaca";
import Swal from "sweetalert2";

export default {
  data: function () {
    return {
      placa: "",
      loading: true,
      headers: [
        {
          text: "Tipo de Servicio",
          align: "start",
          sortable: false,
          value: "tipo_servicio",
        },
        { text: "Fecha del Serivcio", value: "fecha_cambio" },
        { text: "Tipo de Producto ", value: "tipo_producto" },
        { text: "Kilometraje Actual (km)", value: "kilometraje_actual" },
        { text: "Kilometraje Cambio (km)",  value: "kilometraje_cambio_sugerido"},
      ],
      datos_placa: [],
    };
  },
  methods: {
    uppercase() {
      this.code = this.code.toUpperCase();
    },
  },
  async created() {
    this.placa = this.$route.params.placa;

    await registroPlacaService.buscarPlaca({ placa: this.placa }).then((response) => {
      this.loading = false;
      if (response.data.length == 0) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor ingresa un número de placa!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Regresar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Genial!",
              "Aqui podras ingresar tu número de placa.",
              "success",
              this.$router.push({ name: "home" })
            );
          }else{
            this.$router.push({ name: "home" })
          }
        });
        
      } else {
        this.datos_placa = response.data;
      }
    });
  },
};
</script>

<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  background: url("../../assets/car-932455_1280.jpg");
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
@media (max-width:500px) {
    .fondo{
        background-size: 100% !important;
        background-repeat: no-repeat ;
    }
    .placa{
        height: 166px !important;
        background-size: 100% !important;
    }
    h2{
      width: 100% !important;
    }
    .container{
      padding: 7px !important;
    }
}
</style>
