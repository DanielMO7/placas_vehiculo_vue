<template>
  <div class="fondo">
    <v-container class="d-block align-center justify-center mt-9">
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
        </v-form>        
       </div>
      <h1 class="white--text mt-9 text-center">Información del Vehiculo</h1>
      <v-row>
        <v-col>
      <h2 class="white--text mt-9 text-center">Servicios Realizados</h2>
      <v-data-table
        style="border-radius: 0px 0px 5px 5px;"
        :headers="headers"
        :items="desserts"
        hide-default-footer
      ></v-data-table>
        </v-col>
      </v-row>
      <v-btn 
        max-width="374" 
        color="primary" 
        class="d-block mx-auto  mt-10" 
      >
        Regresar
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      code: '',
      headers: [
        {
          text: 'Tipo de Servicio',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Fecha del Serivcio', value: 'fecha' },
        { text: 'Tipo de Producto ', value: 'producto' },
        { text: 'Kilometraje Actual (km)', value: 'kilometraje_actual' },
        { text: 'Kilometraje Cambio (km)', value: 'kilometraje_cambio' },
      ],
      desserts: [
        {
          name: 'Cambio Aceite',
          fecha: '09/02/2022',
          producto: 'Aceite 10w',
          kilometraje_actual: 3099,
          kilometraje_cambio: 5009,
        },
        {
          name: 'Cambio Llantas',
          fecha: '09/02/2022',
          producto: 'Continental',
          kilometraje_actual: 10000,
          kilometraje_cambio: 20000,
        },
      ],
    }
  },
  methods: {
    uppercase() {
      this.code = this.code.toUpperCase()
    },
  },
}
</script>

<style scoped>
    .fondo {
      height: 100vh;
      background: url('../../assets/orion-nebula-11107_1920.jpg');
      margin-top: -48px;
    }
    h2{
      background: blue;
      margin-top: 35px;
      border-radius: 5px 5px 0px 0px;
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
</style>
<style >
.v-input input {
    max-height: 70px;
    text-align: center;
}
</style>
