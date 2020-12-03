 <template>
  <v-card class="mx-auto" max-width="544" outlined>
    <v-card-title>Círculo</v-card-title>
    Raio
    <v-input>
      <v-text-field
        @focus="$event.target.select()"
        type="number"
        name="number"
        v-model="number"
      ></v-text-field>
    </v-input>
    <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
      >zerar</v-btn
    >
    Diâmetro
    <h2 class="display-3">{{ diametro }}</h2>
    Circunferência
    <h2 class="display-3">{{ circunferencia }}</h2>
    Área
    <h2 class="display-3">{{ area }}</h2>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    diametro() {
      return 2 * this.number;
    },
    circunferencia() {
       const pi = 3.14159;
       return 2 * this.number * pi;
    },
    area() {
       const pi = 3.14159;
       return pi * this.number * this.number
    }
  },
  methods: {
    zerar: function () {
      this.number = 0;
    },
  },
};
</script>

