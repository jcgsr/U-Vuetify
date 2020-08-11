 <template>
  <v-card class="mx-auto" max-width="544" outlined>
    <v-card-title>Multiplicação</v-card-title>
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="number1" v-model="number1" ></v-text-field>
    </v-input>
      x
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
      return parseFloat(this.number1) * parseFloat(this.number2);
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

