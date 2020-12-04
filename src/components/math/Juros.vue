 <template>
  <div class="cards">
    <v-card class="mx-auto mb-2" max-width="544" outlined>
      <v-card-title>Juros Simples</v-card-title>
      Capital
      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          name="capital"
          v-model="capital"
        ></v-text-field>
      </v-input>
      Taxa a.m. (%)
      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          name="taxa"
          v-model="taxa"
        ></v-text-field>
      </v-input>
      Período (meses)
      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          name="periodo"
          v-model="periodo"
        ></v-text-field>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >zerar</v-btn
      >
      Juros totais
      <h2 class="display-3 mt-2">R$ {{ juros }}</h2>
    </v-card>

    <v-card class="mx-auto" max-width="544" outlined>
      <v-card-title>Juros Compostos</v-card-title>
      Capital
      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          name="capitalC"
          v-model="capitalC"
        ></v-text-field>
      </v-input>
      Taxa a.a. (%)
      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          name="taxaC"
          v-model="taxaC"
        ></v-text-field>
      </v-input>
      Período (anos)
      <v-input>
        <v-text-field
          @focus="$event.target.select()"
          type="number"
          name="periodoC"
          v-model="periodoC"
        ></v-text-field>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >zerar</v-btn
      >
      Juros totais
      <h2 class="display-3 mt-2">R$ {{ jurosC }}</h2>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      capital: 0,
      taxa: 0,
      periodo: 0,
      capitalC: 0,
      taxaC: 0,
      periodoC: 0,
    };
  },
  computed: {
    juros() {
      return (((this.capital * this.taxa) / 100) * this.periodo).toFixed(2);
    },
    jurosC() {
      let juros_compostos = 0;

      let aplicacaAcumulada = this.capitalC;

      for (let mes = 0; mes < this.periodoC; mes++) {
        // juros compostos
        juros_compostos = (aplicacaAcumulada * this.taxaC) / 100;
        aplicacaAcumulada += juros_compostos;
      }
      return (
        this.capitalC *
        (Math.pow(1 + this.taxaC / 100, this.periodoC) - 1)
      ).toFixed(2);
    },
  },
  methods: {
    zerar: function () {
      this.number = 0;
    },
  },
};
</script>

