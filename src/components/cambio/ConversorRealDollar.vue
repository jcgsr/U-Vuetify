<template>
  <div class="container">
    <v-alert type="danger" id="danger" v-if="errored" dismissible class="mt-2">
      <p>Erro! O servidor não está respondendo. 🙁</p>
    </v-alert>
    <v-card class="mx-auto animate__animated animate__backInLeft" width="544" outlined>
      <v-card-title>{{ moedaA }} para {{ moedaB }}</v-card-title>

      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          :placeholder="moedaA"
          v-model="moedaA_value"
        ></v-text-field>
      </v-input>
      <h2 class="display-3 mb-3">{{ result | currency }}</h2>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Conversor",
  props: ["moedaA", "moedaB"],
  data() {
    return {
      moedaA_value: "",
      moedaB_value: 0,
      errored: false,
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://economia.awesomeapi.com.br/all/USD-BRL")
      .then((res) => (this.info = res.data.USD.bid))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },

  computed: {
    result() {
      return (this.moedaA_value / this.info).toFixed(2);
    },
  },

  filters: {
    currency(value) {
      return "US$ " + value.toLocaleString();
    },
  },
};
</script>


