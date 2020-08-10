<template>
  <v-card>
    <v-app-bar app fixed dense>      
      <v-toolbar-title class="headline text-uppercase mr-4">
        <span>U</span>
        <span class="font-weight-light">-Vue</span>
      </v-toolbar-title>      
      <v-app-bar-nav-icon class="hidden-lg-and-up ml-6" style="color:rgb(129, 129, 6)" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <router-link class="text-decoration-none" to="/" style="color:rgb(129, 129, 6)">
            <v-icon title="Início">mdi-home</v-icon>
            <h6>Início</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/math" style="color:rgb(129, 129, 6)">
            <v-icon title="Operações Matemáticas">mdi-calculator</v-icon>
            <h6>Operações Matemáticas</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/media" style="color:rgb(129, 129, 6)">
            <v-icon title="Operações Matemáticas">mdi-school</v-icon>
            <h6>Média Escolar</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/conversor" style="color:rgb(129, 129, 6)">
            <v-icon title="Operações Matemáticas">mdi-temperature-celsius</v-icon>
            <h6>Conversor</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/cambio" style="color:rgb(129, 129, 6)">
            <v-icon title="Câmbio">mdi-cash-usd</v-icon>
            <h6>Câmbio</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/afinador" style="color:rgb(129, 129, 6)">
            <v-icon title="Câmbio">mdi-guitar-acoustic</v-icon>
            <h6>Afinador</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/imc" style="color:rgb(129, 129, 6)">
            <v-icon title="Câmbio">mdi-weight-kilogram</v-icon>
            <h6>IMC</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/cep" style="color:rgb(129, 129, 6)">
            <v-icon title="Câmbio">mdi-email</v-icon>
            <h6>Endereço</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/info" style="color:rgb(129, 129, 6)">
            <v-icon title="Informações">mdi-information-variant</v-icon>
            <h6>Info</h6>
          </router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app right class="text-sm-left">
      <v-btn>
          <router-link class="text-decoration-none" to="/" style="color:rgb(129, 129, 6)">
            <v-icon title="Início">mdi-home</v-icon>
            <h6>Início</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/math" style="color:rgb(129, 129, 6)">
            <v-icon title="Operações Matemáticas">mdi-calculator</v-icon>
            <h6>Operações Matemáticas</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/media" style="color:rgb(129, 129, 6)">
            <v-icon title="Média Esolar">mdi-school</v-icon>
            <h6>Média Escolar</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/conversor" style="color:rgb(129, 129, 6)">
            <v-icon title="Conversor">mdi-temperature-celsius</v-icon>
            <h6>Conversor</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/cambio" style="color:rgb(129, 129, 6)">
            <v-icon title="Câmbio">mdi-cash-usd</v-icon>
            <h6>Câmbio</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/afinador" style="color:rgb(129, 129, 6)">
            <v-icon title="Afinador">mdi-guitar-acoustic</v-icon>
            <h6>Afinador</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/imc" style="color:rgb(129, 129, 6)">
            <v-icon title="IMC">mdi-weight-kilogram</v-icon>
            <h6>IMC</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/cep" style="color:rgb(129, 129, 6)">
            <v-icon title="Endereço">mdi-email</v-icon>
            <h6>Endereço</h6>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link class="text-decoration-none" to="/info" style="color:rgb(129, 129, 6)">
            <v-icon title="Informações">mdi-information-variant</v-icon>
            <h6>Info</h6>
          </router-link>
        </v-btn>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="css">
  .v-navigation-drawer__content {
    display: contents;    
  }

  .v-navigation-drawer__content button {
    margin-bottom: .3rem;
  }
</style>



