<template>
  <div id="volume">
    <v-card class="mx-auto mb-3 mt-3 animate__animated animate__fadeInLeft" max-width="544" outlined>
      <v-card-title>Litro para Mililitro</v-card-title>
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" name="number" v-model="number"></v-text-field>
      </v-input>
      <h3 class="display-3 mb-5">{{ result }}</h3>
    </v-card>

   <v-card class="mx-auto mb-3 mt-3 animate__animated animate__fadeInRight" max-width="544" outlined>
      <v-card-title>Mililitro para Litro</v-card-title>
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" name="number1" v-model="number1"></v-text-field>
      </v-input>
      <h3 class="display-3 mb-5">{{ result1 }}</h3>
    </v-card>
  </div>  
</template>

<script>
export default {
  data() {
    return {      
      number: 1,
      number1: 1,
    };
  },

  computed: {
    result() {
      return (this.number * 1000) + 'ml' 
    },
    result1() {
      return (this.number1 / 1000) + 'l'
    }
  }
};
</script>

<style lang="css">

h3 {
  padding: 1rem;
}
</style>