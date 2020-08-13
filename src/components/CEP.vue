<template>
  <div id="cep">
    <h2 class="display-3 mb-3">{{ title }}</h2>
    <v-alert type="danger" id="danger" v-if="errored" dismissible class="mt-2">
      <p>
        Erro! O servidor não está respondendo. 🙁
        O CEP deve conter 8 números.
      </p>
    </v-alert>

    <v-card class="mx-auto animate__animated animate__backInUp" max-width="544" outlined>
      <v-card-title>Digite o CEP para ver o endereço</v-card-title>
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" v-model="cepInfo"></v-text-field>
      </v-input>
      <v-btn secondary @click="mostrar">Endereço</v-btn>
      <ul class="ml-1">
        <li v-for="(value, key) in info" :key="key">{{ key }}: {{ value}}</li>
      </ul>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Endereço",
  data() {
    return {
      title: "Endereço",
      cepInfo: "",
      info: null,
      errored: false,
      errored2: false,
    };
  },
  methods: {
    mostrar() {
      axios
        // "https://cep.awesomeapi.com.br/json/" + this.cepInfo
        .get("https://viacep.com.br/ws/" + this.cepInfo + "/json/")
        .then((res) => {
          this.info = res.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
  },
};
</script>

<style>
#cep h2 {
  text-align: center;
  padding: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

#cep .card {
  width: 50%;
}

#cep button {
  margin: 1rem 0;
}

#cep li {
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.3rem;
  text-align: left;
}

.alert button {
  max-width: 10%;
  display: block;
}

@media only screen and (max-width: 600px) {
  #cep .card {
    width: 80%;
  }

  #cep li {
    text-align: left;
  }
}
</style>