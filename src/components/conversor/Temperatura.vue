<template>
  <div class="temperatura">
    <v-card class="mx-auto mb-3 mt-3 animate__animated animate__fadeInLeft" max-width="544" outlined>
      <v-card-title>°F para °C</v-card-title>
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" name="number" v-model="number"></v-text-field>
      </v-input>
      <h3 class="display-3 mb-5">{{ result }}</h3>
    </v-card>

    <v-card class="mx-auto mb-3 mt-3 animate__animated animate__fadeInRight" max-width="544" outlined>
      <v-card-title>°C para °F</v-card-title>
      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          name="number1"
          v-model="number1"
        ></v-text-field>
      </v-input>
      <h3 class="display-3 mb-5">{{ result1 }}</h3>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subtitulo: "Fahrenheit - Celsius",
      subtitulo1: "Celsius - Fahrenheit",
      number: 0,
      number1: 0,
    };
  },

  computed: {
    result() {
      return ((this.number - 32) / 1.8).toFixed(2) + " °C";
    },
    result1() {
      return (this.number1 * 1.8 + 32).toFixed(2) + " °F";
    },
  },
};
</script>
