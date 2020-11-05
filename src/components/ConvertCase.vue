 <template>
  <div class="convert-case">
    <v-card class="mx-auto mb-3 animate__animated animate__backInRight" width="544" outlined>
      <v-card-title>MAIÚSCULAS</v-card-title>
      <v-input>
        <v-textarea @focus="$event.target.select()" type="text" name="text1" v-model="text1"></v-textarea>
      </v-input>    
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar">limpar</v-btn>
      <h2 class="display-3">{{ result1 }}</h2>
    </v-card>

    <v-card class="mx-auto mb-3 animate__animated animate__backInRight" width="544" outlined>
      <v-card-title>minúsculas</v-card-title>
      <v-input>
        <v-textarea @focus="$event.target.select()" type="text" name="text2" v-model="text2"></v-textarea>
      </v-input>    
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar">limpar</v-btn>
      <h2 class="display-3">{{ result2 }}</h2>
    </v-card>

    <!-- <v-card class="mx-auto mb-3 animate__animated animate__backInRight" width="544" outlined>
      <v-card-title>Primeira Letra Da Palavra Maiúscula</v-card-title>
      <v-input>
        <v-textarea @focus="$event.target.select()" type="text" name="text3" v-model="text3"></v-textarea>
      </v-input>    
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar">limpar</v-btn>
      <h2 class="display-3">{{ result3 }}</h2>
    </v-card> -->
  </div>


</template>

<script>
export default {
  data() {
    return {
      text1: "",      
      text2: "",      
    };
  },
  computed: {
    result1() {
      return this.text1.toUpperCase()
    },
    result2() {
      return this.text2.toLowerCase()
    },
    // result3() {
    //   this.text3.charAt(0).toUpperCase() + this.text3.slice(1)
    //   return this.text3.split(' ').map(this.text3).join(' ')
    // }
  },
  methods: {
    zerar: function () {
      this.text1 = "";      
      this.text2 = "";      
      this.text3 = "";      
    },
  },
};
</script>

