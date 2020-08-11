<template>
  <div class="comprimento">
     <v-card class="mx-auto mb-3 mt-3 animate__animated animate__fadeInLeft" max-width="544" outlined>
      <v-card-title>Pé para Metro</v-card-title>
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" name="number" v-model="number"></v-text-field>
      </v-input>
      <h3 class="display-3 mb-5">{{ result }}</h3>
    </v-card>

    <v-card class="mx-auto mb-3 mt-3 animate__animated animate__fadeInLeft" max-width="544" outlined>
      <v-card-title>Metro para Pé</v-card-title>
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" name="number1" v-model="number1"></v-text-field>
      </v-input>
      <h3 class="display-3 mb-5">{{ result1 }}</h3>
    </v-card>
    <MilhasKm />
    <PolegadaCm />
  </div>  
</template>

<script>
import MilhasKm from './MilhasKm'
import PolegadaCm from './PolegadaCm'
export default {
  data() {
    return {
      subtitulo: "Pés - Metro",
      subtitulo1: "Metro - Pés",
      number: 1,
      number1: 1,
    };
  },

  computed: {
    result() {
      return (this.number / 3.281).toFixed(2) + 'ft' 
    },
    result1() {
      return (this.number1 * 3.281).toFixed(2) + 'm'
    }
  },
  components: {
    MilhasKm, PolegadaCm
  }
};
</script>

<style>
.comprimento {
  color: aliceblue;
  text-align: center;
}

h3 {
  padding: 1rem;
}
</style>