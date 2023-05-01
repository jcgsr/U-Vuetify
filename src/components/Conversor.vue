<template>
  <div id="conversor">
    <h2 class="display-3 mt-3 mb-3">{{ title }}</h2>
    <div class="button-div">
      <v-btn secondary style="color:rgb(235, 235, 21)"
        @click="temperatura"        
        class="animate__animated animate__backInLeft"
      >Temperatura</v-btn>
      <v-btn secondary style="color:rgb(235, 235, 21)"
        @click="comprimento"        
        class="animate__animated animate__fadeInDown"
      >Comprimento</v-btn>
      <v-btn secondary style="color:rgb(235, 235, 21)"
        @click="massa"       
        class="animate__animated animate__backInRight"
      >Massa</v-btn>
      <v-btn secondary style="color:rgb(235, 235, 21)"
        @click="volume"       
        class="animate__animated animate__backInRight"
      >Volume</v-btn>
    </div>
    <Temperatura v-if="showTemperatura" />
    <Comprimento v-if="showComprimento" />
    <Massa v-if="showMassa" /> 
    <Volume v-if="showVolume" />   
  </div>
</template>

<script>
import Temperatura from "./conversor/Temperatura";
import Massa from "./conversor/Massa";
import Comprimento from "./conversor/comprimentos/Comprimento";
import Volume from "./conversor/Volume";

export default {
  data() {
    return {
      title: "Conversor",
      showTemperatura: true,
      showComprimento: false,
      showMassa: false,
      showVolume: false     
    };
  },
  components: {
    Temperatura,
    Comprimento,
    Massa,
    Volume
  },
  methods: {
    temperatura() {
      this.showTemperatura = true;
      this.showComprimento = false;
      this.showMassa = false;
      this.showVolume = false
    },
    comprimento() {
      this.showComprimento = true; 
      this.showTemperatura = false;
      this.showMassa = false; 
      this.showVolume = false;
    },
    massa() {
      this.showMassa = true;
      this.showComprimento = false;
      this.showTemperatura = false;
      this.showVolume = false;
    } ,
    volume() {
      this.showVolume = true;
      this.showMassa = false;
      this.showComprimento = false;
      this.showTemperatura = false;
    }  
  },  
};
</script>

<style>
	/* #conversor h2 {
		text-align: center;
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	} */

.button-div {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  max-width: 25%;
}

.button-div button {
	margin-left: .5rem;
	color: rgba(245, 245, 7, 0.479);
}

@media screen and (max-width: 456px) {
  .button-div {
    display: flex;
    flex-direction: column;
    max-width: 50%;   
  }
  .button-div button {
    margin-bottom: .5rem;
    flex-direction: column;
  }
  #conversor {
    max-width: 85%;
    margin: 0 auto;
     }
  #conversor .button-div {
    flex-direction: column;
    margin-bottom: 1rem;
  }

  #conversor .button-div button {
    margin-bottom: 1.5rem;
  }
}
</style>
