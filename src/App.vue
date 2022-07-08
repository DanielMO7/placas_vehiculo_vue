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
