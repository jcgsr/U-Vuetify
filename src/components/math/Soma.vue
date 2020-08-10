 <template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-card-title>Soma</v-card-title>
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="number1" v-model="number1" ></v-text-field>
    </v-input>
      +
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
      return parseFloat(this.number1) + parseFloat(this.number2);
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

<style scoped>
.card {
  max-width: 50%;
  margin-bottom: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

.card button {
  margin-top: 1rem;
}

@media only screen and (max-width: 600px) {
  .card {
    max-width: 80%;
  }
}
</style>