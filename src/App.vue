<template>
  <v-app>

    <NavView/>

    <v-main>
      <router-view/>
    </v-main>

    <FooterView/>
  </v-app>
</template>

<script>
import NavView from './components/NavView.vue'
import FooterView from './components/FooterView.vue'


export default {
    name: "App",
    
    data: () => ({
    //
    }),
    components: { 
      NavView,
      FooterView
    }
};
</script>
<style>
.swal2-popup {
  font-family: Arial, Helvetica, sans-serif !important;
}
.swal2-styled.swal2-confirm{
  background: #1976d2 !important;
  background-color: #1976d2 !important;
}
</style>
