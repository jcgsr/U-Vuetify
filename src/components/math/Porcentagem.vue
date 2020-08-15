 <template>
  <v-card class="mx-auto" max-width="544" outlined>
    <v-card-title>Porcentagem</v-card-title>
    <v-card-text style="color:rgb(235, 235, 21)">Porcento</v-card-text>
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="number1" v-model="number1"></v-text-field>
    </v-input>
    <v-card-text style="color:rgb(235, 235, 21)">Valor</v-card-text>

    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="number2" v-model="number2"></v-text-field>
    </v-input>
    <v-btn class="animate__animated animate__tada mb-4" @click="zerar">zerar</v-btn>
    <h2 class="display-3">{{ result }}</h2>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
    };
  },
  computed: {
    result() {
      return (this.number1 * this.number2) / 100;
    },
  },
  methods: {
    zerar: function () {
      this.number1 = 0;
      this.number2 = 0;
    },
  },
};
</script>

