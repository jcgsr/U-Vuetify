<template>
  <div id="math">
    <h2 class="display-3 mt-3 mb-4">{{ title }}</h2>
    <div class="button-div mb-4">
      <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="operacoes"        
      class="animate__animated animate__backInLeft"
      >Operações</v-btn>

      <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="potencias"        
      class="animate__animated animate__backInLeft"
      >Potências/Raízes</v-btn>

      <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="porcento"        
      class="animate__animated animate__backInLeft"
      >Porcentagem</v-btn>

      <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="eq2grau"        
      class="animate__animated animate__backInLeft"
      >Equação 2º Grau</v-btn>

      <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="fatorial"        
      class="animate__animated animate__backInLeft"
      >Fatorial</v-btn>
    </div>
    <Soma v-if="showOperacoes" class="mb-1" />
    <Subtracao v-if="showOperacoes" class="mb-1" />
    <Multiplicacao v-if="showOperacoes" class="mb-1" />
    <Divisao v-if="showOperacoes" class="mb-1" />
    <Quadrado v-if="showPotencias" class="mb-1" />
    <Cubo v-if="showPotencias" class="mb-1" />
    <Potencia v-if="showPotencias" class="mb-1" />
    <Porcentagem v-if="showPorcento" class="mb-1" />
    <RaizQuadrada v-if="showPotencias" class="mb-1" />
    <Eq2Grau v-if="showEq2grau" class="mb-1" />
    <Fatorial v-if="showFatorial" class="mb-1" />
  </div>
</template>

<script>
import Soma from "./math/Soma";
import Subtracao from "./math/Subtracao";
import Multiplicacao from "./math/Multiplicacao";
import Divisao from "./math/Divisao";
import Quadrado from "./math/Quadrado";
import Cubo from "./math/Cubo";
import Potencia from "./math/Potencia";
import Porcentagem from "./math/Porcentagem";
import RaizQuadrada from "./math/RaizQuadrada";
import Eq2Grau from "./math/Eq2Grau";
import Fatorial from "./math/Fatorial";
export default {
  name: "Math",
  data: () => ({
    title: "Matemática Básica",
    showOperacoes: true,
    showPotencias: false,
    showPorcento: false,
    showEq2grau: false,
    showFatorial: false
  }),
  components: {
    Soma,
    Subtracao,
    Multiplicacao,
    Divisao,
    Quadrado,
    Cubo,
    Potencia,
    Porcentagem,
    RaizQuadrada,
    Eq2Grau,
    Fatorial
  },
  methods: {
    operacoes() {
      this.showOperacoes = true
      this.showPotencias = false
      this.showPorcento = false
      this.showEq2grau = false
      this.showFatorial = false
    },
    potencias() {
     this.showOperacoes = false
     this.showPotencias = true
     this.showPorcento = false
     this.showEq2grau = false
     this.showFatorial = false
   },
   porcento() {
    this.showOperacoes = false
    this.showPotencias = false
    this.showPorcento = true
    this.showEq2grau = false
    this.showFatorial = false
  },
  eq2grau() {
    this.showOperacoes = false
    this.showPotencias = false
    this.showPorcento = false
    this.showEq2grau = true
    this.showFatorial = false
  },
  fatorial() {
    this.showOperacoes = false
    this.showPotencias = false
    this.showPorcento = false
    this.showEq2grau = false
    this.showFatorial = true
  }
}
};
</script>

<style lang="css">
#math .button-div {
  flex-direction: row;
  width: 17%;
}
.v-btn.v-size--default {
  font-size: .6rem;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 120px;
  padding: 0 16px;
  margin-bottom: 1px;
}
@media only screen and (max-width: 768px) {
  #math {
    width: 85%;
  }

  #math .button-div {
    flex-direction: column;
    width: 100%;
  }
}
</style>