<template>
  <div id="cambio">
    <h2 class="display-3 mt-3 mb-3">{{ title }}</h2>
    <div class="button-div">
      <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="dollarreal"        
      class="animate__animated animate__backInLeft"
      >US$ - R$</v-btn>
       
       <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="euroreal"        
      class="animate__animated animate__backInLeft"
      >€ - R$</v-btn>

       <v-btn secondary style="color:rgb(235, 235, 21)"
      @click="poundreal"        
      class="animate__animated animate__backInLeft"
      >£ - R$</v-btn>

    </div>
    <div class="conversor">
      <ConversorDollarReal v-if="showDollarReal" moeda-a="USD" moeda-b="BRL" />
      <ConversorEuroReal v-if="showEuroReal" moeda-a="EUR" moeda-b="BRL" />
      <ConversorLibraReal v-if="showPoundReal" moeda-a="GBP" moeda-b="BRL" />
      <ConversorRealDollar v-if="showDollarReal" moeda-a="BRL" moeda-b="USD" />
      <ConversorRealEuro v-if="showEuroReal" moeda-a="BRL" moeda-b="EUR" />
      <ConversorRealLibra v-if="showPoundReal" moeda-a="BRL" moeda-b="GBP" />
    </div>
  </div>
</template>

<script>
import ConversorDollarReal from "./cambio/ConversorDollarReal";
import ConversorEuroReal from "./cambio/ConversorEuroReal";
import ConversorRealDollar from "./cambio/ConversorRealDollar";
import ConversorRealEuro from "./cambio/ConversorRealEuro";
import ConversorRealLibra from "./cambio/ConversorRealLibra";
import ConversorLibraReal from "./cambio/ConversorLibraReal";

export default {
  components: { ConversorDollarReal, ConversorEuroReal, ConversorRealDollar, ConversorRealEuro, ConversorRealLibra, ConversorLibraReal },
  name: "Cambio",
  data: () => ({
    title: "Taxa de Câmbio",
    showDollarReal: true,
    showEuroReal: false,
    showPoundReal: false,
  }),
  methods: {
    dollarreal() {
      this.showDollarReal = true
      this.showEuroReal = false
      this.showPoundReal = false
    },
    euroreal() {
      this.showDollarReal = false
      this.showEuroReal = true
      this.showPoundReal = false
    },
    poundreal() {
      this.showDollarReal = false
      this.showEuroReal = false
      this.showPoundReal = true
    }
  }
};
</script>

<style lang="css">
.button-div {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  max-width: 15%;
}

.button-div button {
  margin-left: .5rem;
  color: rgba(245, 245, 7, 0.479);
}
@media only screen and (max-width: 456px) {
  #cambio {
    width: 85%;
    margin: 0 auto;
  }
}
</style>

