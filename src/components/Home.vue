<template>
  <div id="home">
    <h2 class="display-3 mt-3 mb-6">{{ title }}</h2>
    <h4  class="display-2 mb-3">{{ subtitle }}</h4>
    <div class="container">
      <div class="field">
        <router-link to="/math" class="nav-link">
          <v-icon title="Operações Matemáticas" style="color:rgb(235, 235, 21)">mdi-numeric</v-icon>
        </router-link>
      </div>
      <div class="field">
        <router-link to="/calculadora" class="nav-link">
          <v-icon title="Calculadora" style="color:rgb(235, 235, 21)">mdi-calculator</v-icon>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/media" class="nav-link">
          <v-icon title="Média Escolar" style="color:rgb(235, 235, 21)">mdi-school</v-icon>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/convertcase" class="nav-link">
          <v-icon title="Conversor de Texto" style="color:rgb(235, 235, 21)">mdi-format-letter-case-lower</v-icon>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/conversor" class="nav-link">
          <v-icon title="Conversor de Medidas" style="color:rgb(235, 235, 21)">mdi-temperature-celsius</v-icon>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/cambio" class="nav-link">
          <v-icon title="Câmbio" style="color:rgb(235, 235, 21)">mdi-cash</v-icon>
            
            
        </router-link>
      </div>

      <div class="field">
        <router-link to="/afinador" class="nav-link">
          <v-icon title="Afinador" style="color:rgb(235, 235, 21)">mdi-guitar-acoustic</v-icon>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/imc" class="nav-link">
          <v-icon title="IMC" style="color:rgb(235, 235, 21)">mdi-weight-kilogram</v-icon>
        </router-link>
      </div>

       <div class="field">
        <router-link to="/heartrates" class="nav-link">
          <v-icon title="Frequência Cardíaca" style="color:rgb(235, 235, 21)">mdi-heart</v-icon>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/cep" class="nav-link">
          <v-icon title="Endereço" style="color:rgb(235, 235, 21)">mdi-email</v-icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    title: "U-Vue",
    subtitle: "Webapps utilitários criados em VueJS",
  }),
};
</script>

<style>
.container {
  display: flex;
  margin: 0 auto;
}

.container .v-icon.v-icon{
  font-size: 4rem;
}
.field {   
  background-color: black;
  font-size: 5rem;  
  opacity: 0.6;
  transition: 0.8s;
}

.field:hover {
  opacity: 1;
}

@media only screen and (max-width: 450px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .field {
    width: 70%;
    height: 90%;
    margin: 1rem auto;
    opacity: 1;
  }
}
@media only screen and (min-width: 451px) {
  .field {
    width: 70%;
    height: 90%;
    margin: 1rem auto;
    margin-left: 0.5rem; 

  }
}
</style>
