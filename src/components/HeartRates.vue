 <template>
  <v-card class="mx-auto animate__animated animate__backInRight" width="544" outlined>
    <v-card-title>Frequência Cardíaca</v-card-title>
    Informe sua idade
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="number1" v-model="number1"></v-text-field>
    </v-input>
    
    <v-btn class="animate__animated animate__tada mb-4" @click="zerar">zerar</v-btn>
    Frequência Cardíaca Ideal Mínima
    <h2 class="display-3">{{ ideal50P }}</h2>
    Frequência Cardíaca Ideal Máxima
    <h2 class="display-3">{{ ideal85P }}</h2>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      number1: 0         
    };
  },
  computed: {
    ideal50P() {
      let taxa = 220 - parseFloat(this.number1);
      let ideal50 = taxa * 0.5;
      return ideal50;      
    },
    ideal85P() {
      let taxa = 220 - parseFloat(this.number1);
      let ideal85 = taxa * 0.85;
      return ideal85;      
    },
  },
  methods: {
    zerar: function () {
      this.number1 = 0;     
    },
  },
};
</script>

