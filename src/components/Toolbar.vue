<template>
  <v-card>
    <v-app-bar app fixed dense>
      <v-toolbar-title class="headline text-uppercase">
        <span>U</span>
        <span class="font-weight-light">-Vue</span>
      </v-toolbar-title>
      <v-app-bar-nav-icon       
        style="color:rgb(235, 235, 21)"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <router-link class="text-decoration-none" to="/" style="color:rgb(235, 235, 21)">
            <v-icon title="Início">mdi-home</v-icon>
            <h6>Início</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/math" style="color:rgb(235, 235, 21)">
            <v-icon title="Operações Matemáticas">mdi-numeric</v-icon>
            <h6>Matemática</h6>
          </router-link>
        </v-btn>
        <v-btn>
        <router-link class="text-decoration-none" to="/calculadora" style="color:rgb(235, 235, 21)">
          <v-icon title="Calculadora">mdi-calculator</v-icon>
          <h6>Calculadora</h6>
        </router-link>
      </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/media" style="color:rgb(235, 235, 21)">
            <v-icon title="Média Escolar">mdi-school</v-icon>
            <h6>Média Escolar</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/conversor" style="color:rgb(235, 235, 21)">
            <v-icon title="Conversor">mdi-temperature-celsius</v-icon>
            <h6>Conversor</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/cambio" style="color:rgb(235, 235, 21)">
            <v-icon title="Câmbio">mdi-cash-usd</v-icon>
            <h6>Câmbio</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/afinador" style="color:rgb(235, 235, 21)">
            <v-icon title="Câmbio">mdi-guitar-acoustic</v-icon>
            <h6>Afinador</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/imc" style="color:rgb(235, 235, 21)">
            <v-icon title="Câmbio">mdi-weight-kilogram</v-icon>
            <h6>IMC</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/cep" style="color:rgb(235, 235, 21)">
            <v-icon title="Endereço">mdi-email</v-icon>
            <h6>Endereço</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/info" style="color:rgb(235, 235, 21)">
            <v-icon title="Informações">mdi-information-variant</v-icon>
            <h6>Info</h6>
          </router-link>
        </v-btn>
      </v-toolbar-items> -->
    </v-app-bar>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app right class="text-sm-left">
      <v-btn>
        <router-link class="text-decoration-none" to="/" style="color:rgb(235, 235, 21)">
          <v-icon title="Início">mdi-home</v-icon>
          <h6>Início</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/math" style="color:rgb(235, 235, 21)">
          <v-icon title="Operações Matemáticas">mdi-numeric</v-icon>
          <h6>Matemática</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/calculadora" style="color:rgb(235, 235, 21)">
          <v-icon title="Calculadora">mdi-calculator</v-icon>
          <h6>Calculadora</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/media" style="color:rgb(235, 235, 21)">
          <v-icon title="Média Esolar">mdi-school</v-icon>
          <h6>Média Escolar</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/convertcase" style="color:rgb(235, 235, 21)">
          <v-icon title="Conversor de Texto">mdi-format-letter-case-lower</v-icon>
          <h6>Conversor de Texto</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/conversor" style="color:rgb(235, 235, 21)">
          <v-icon title="Conversor">mdi-temperature-celsius</v-icon>
          <h6>Conversor</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/cambio" style="color:rgb(235, 235, 21)">
          <v-icon title="Câmbio">mdi-cash-usd</v-icon>
          <h6>Câmbio</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/afinador" style="color:rgb(235, 235, 21)">
          <v-icon title="Afinador">mdi-guitar-acoustic</v-icon>
          <h6>Afinador</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/imc" style="color:rgb(235, 235, 21)">
          <v-icon title="IMC">mdi-weight-kilogram</v-icon>
          <h6>IMC</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/cep" style="color:rgb(235, 235, 21)">
          <v-icon title="Endereço">mdi-email</v-icon>
          <h6>Endereço</h6>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link class="text-decoration-none" to="/info" style="color:rgb(235, 235, 21)">
          <v-icon title="Informações">mdi-information-variant</v-icon>
          <h6>Info</h6>
        </router-link>
      </v-btn>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="css">
.v-navigation-drawer__content {
  display: contents;
}

.v-application .text-uppercase {
  text-align: left;
}

.v-navigation-drawer__content button {
  margin-bottom: 0.3rem;
  width: 100%;
}
</style>



