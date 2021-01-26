<template>
  <div id="imc">
    <h2 class="display-3 mt-3 mb-3">IMC</h2>
    <v-card class="mx-auto animate__animated animate__fadeInDown mb-3" width="544" outlined>
      Peso
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" name="peso" v-model="peso"></v-text-field>
      </v-input>Altura
      <v-input>
        <v-text-field @focus="$event.target.select()" type="number" name="altura" v-model="altura"></v-text-field>
      </v-input>

      <v-btn primary class="animate__animated animate__tada mb-3" @click="zerar">zerar</v-btn>
      <h2 class="display-3 mb-3">{{ result }}</h2>
    </v-card>

    <v-simple-table class="tabela animate__animated animate__bounceInUp">
      <table border="3">
        <thead>
          <tr class="table-active">
            <th scope="col">IMC</th>
            <th scope="col">Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo de 16</td>
            <td>Muito abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 16 e 19</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 19 e 25</td>
            <td>Peso normal</td>
          </tr>
          <tr>
            <td>Entre 25 e 30</td>
            <td>Excesso de peso</td>
          </tr>
          <tr>
            <td>Entre 30 e 35</td>
            <td>Obesidade</td>
          </tr>
          <tr>
            <td>Acima de 35</td>
            <td>Obesidade mórbida</td>
          </tr>
        </tbody>
      </table>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peso: 0,
      altura: 0,
    };
  },
  computed: {
    result() {
      return (
        parseFloat(this.peso) /
        (parseFloat(this.altura) * parseFloat(this.altura))
      ).toFixed(2);
    },
  },
  methods: {
    zerar: function () {
      this.peso = 0;
      this.altura = 0;
    },
  },
};
</script>

<style scoped>
.tabela {
  width: 70%;
  margin: 0 auto;
}

.tabela td,
tr,
th {
  font-weight: bold;
  padding: 1rem;
  font-size: 1.5rem;
}

@media only screen and (max-width: 456px) {
  .tabela {
    width: 75%;
    margin: 0 auto;
  }
  .tabela td,
  tr,
  th {
    font-weight: bold;
    padding: 1rem;
    font-size: 1rem;
  }
  #imc {
    width: 85%;
    margin: 0 auto;
  }
}
</style>
