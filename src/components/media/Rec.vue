 <template>
  <v-card class="mx-auto animate__animated animate__bounceInLeft" max-width="544" outlined>
    <v-card-title>Recuperação</v-card-title>1ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota1" v-model="nota1"></v-text-field>
    </v-input>2ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota2" v-model="nota2"></v-text-field>
    </v-input>Média 1º Semestre
    <h2 class="display-3 mt-1 mb-3">{{ mediaSem1 }}</h2>Recuperação 1º Semestre:
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="rec1" v-model="rec1"></v-text-field>
    </v-input>Média 1º Semestre com Recuperação
    <h2 class="display-3 mt-1 mb-3">{{ mRec1 }}</h2>3ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota3" v-model="nota3"></v-text-field>
    </v-input>4ª Nota
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="nota4" v-model="nota4"></v-text-field>
    </v-input>Média 2º Semestre
    <h2 class="display-3">{{ mediaSem2 }}</h2>Recuperação 1º Semestre:
    <v-input>
      <v-text-field @focus="$event.target.select()" type="number" name="rec2" v-model="rec2"></v-text-field>
    </v-input>Média 2º Semestre com Recuperação
    <h2 class="display-3 mt-1 mb-3">{{ mRec2 }}</h2>

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
      rec1: 0,
      rec2: 0,
      mediaRec1: 0,
      mediaRec2: 0,
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
    mRec1() {
      return (parseFloat(this.mediaSem1) + parseFloat(this.rec1)) / 2;
    },
    mRec2() {
      return (parseFloat(this.mediaSem2) + parseFloat(this.rec2)) / 2;
    },
    mFinal() {
      return (parseFloat(this.mRec1) + parseFloat(this.mRec2)) / 2;
    },
  },
};
</script>

