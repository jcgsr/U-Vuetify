 <template>
  <v-card class="mx-auto animate__animated animate__backInRight" width="544" outlined>
    <v-card-title>Equação do 2º Grau Completa</v-card-title>
    Valor de 'a'
    <v-input>      
      <v-text-field @focus="$event.target.select()" type="number" name="numberA" v-model="numberA"></v-text-field>
    </v-input>
    Valor de 'b'
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="numberB" v-model="numberB"></v-text-field>
    </v-input>
    Valor de 'c'
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="numberC" v-model="numberC"></v-text-field>
    </v-input>
    <v-btn class="animate__animated animate__tada mb-4" @click="zerar">zerar</v-btn>
    x<sub>1</sub>
    <h2 class="display-3">{{ result1 }}</h2>
    x<sub>2</sub>
    <h2 class="display-3">{{ result2 }}</h2>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      numberA: 0,
      numberB: 0,
      numberC: 0,
    };
  },
  computed: {
    result1() {

      // eslint-disable-next-line no-unreachable
      let delta = (parseFloat(this.numberB) * parseFloat(this.numberB)) - (4 *  parseFloat(this.numberA) * parseFloat(this.numberC));
      
      let numberX1 = (- this.numberB + Math.sqrt(delta)) / (2 * this.numberA);
      return numberX1;
    },
    result2() {
      let delta = (parseFloat(this.numberB) * parseFloat(this.numberB)) - (4 *  parseFloat(this.numberA) * parseFloat(this.numberC));
      
      let numberX2 = (- this.numberB - Math.sqrt(delta)) / (2 * this.numberA);
      return numberX2;
    }
  },
  methods: {
    zerar: function () {
      this.numberA = 0;
      this.numberB = 0;
      this.numberC = 0;
    },
  },
};
</script>

