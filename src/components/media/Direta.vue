 <template>
  <v-card class="mx-auto animate__animated animate__backInRight" max-width="544" outlined>
    <v-card-title>Aprovação Direta</v-card-title>1ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota1" v-model="nota1"></v-text-field>
    </v-input>2ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota2" v-model="nota2"></v-text-field>
    </v-input>3ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota3" v-model="nota3"></v-text-field>
    </v-input>4ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota4" v-model="nota4"></v-text-field>
    </v-input>Média 1º Semestre
    <h2 class="display-3 mt-1 mb-3">{{ mediaSem1 }}</h2>
   Média 2º Semestre
    <h2 class="display-3">{{ mediaSem2 }}</h2>
    <br />Media Final
    <h2 class="display-3">{{ mFinal }}</h2>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      nota1: 0,
      nota2: 0,
      nota3: 0,
      nota4: 0,
      media1: 0,
      media2: 0,
      mediaFinal: 0,
    };
  },
  computed: {
    mediaSem1() {
      return (parseFloat(this.nota1) + parseFloat(this.nota2)) / 2;
    },
    mediaSem2() {
      return (parseFloat(this.nota3) + parseFloat(this.nota4)) / 2;
    },
    mFinal() {
      return (parseFloat(this.mediaSem1) + parseFloat(this.mediaSem2)) / 2;
    },
  },
};
</script>

