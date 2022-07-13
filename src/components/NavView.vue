<template>
  <v-container>
    <v-app-bar app absolute dark class="pb-0">
      <div class="d-flex align-center">

        <v-img
        class="shrink mr-2"
        width="60"
        src="../assets/car2.png"
        ></v-img>
        <!--<v-icon
        large
        >directions_car</v-icon>-->
        <h2 style="font-size: 31px;">SERVITECA</h2>
      </div>
    

      <v-spacer></v-spacer>

      <v-btn
        text
        style="height: 100%"
      >
        <span class="mr-2">Soporte</span>
        <v-icon>support_agent</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>
<style>
  .v-main{
    padding: 40px 0px 0px !important;
  }
</style>