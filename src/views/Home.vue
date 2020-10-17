<template>
  <div class="home">
    <h1>Liste des abonnes</h1>
    <ul v-if="!loader">
      <li v-for="elt in abonnes" :key="elt.id">{{ elt.nom }}</li>
    </ul>
    <img v-if="loader" height="50" width="50" src="../assets/loader.gif" />
    <p v-if="loader">Chargement abonnes en cours...</p>
    <button @click="recupererAbonnes">Get abonne</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import { getAbonnes } from "../api/abonne";

export default {
  name: "Home",
  components: {},
  mounted() {},
  data() {
    return {
      abonnes: [],
      loader : false
    };
  },
  methods: {
    recupererAbonnes() {
      this.loader = true;
      getAbonnes().then((response) => {
        if(response.status == 200){
          this.abonnes = response.data;
          this.loader = false;
        }
      });
    },
  },
};
</script>

<style scoped></style>
