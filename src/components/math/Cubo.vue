 <template>
  <v-card class="mx-auto" width="544" outlined>
    <v-card-title>Cubo</v-card-title>
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="number" v-model="number" ></v-text-field>
    </v-input>     
    <v-btn class="animate__animated animate__tada mb-4" @click="zerar">zerar</v-btn>
    <h2 class="display-3">{{ result }}</h2>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      number: 0                        
    };
  }, 
  computed: {
    result() {
      return Math.pow(this.number, 3)
    },
    
  },
  methods: {
     zerar: function() {        
        this.number = 0        
     }
  }  
}
</script>

