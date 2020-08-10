<template>
  <v-app>
    <Toolbar />
    <v-main>
      <v-container>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut" mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
export default {
  name: "App",

  components: {
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="css">
  *, html, body {
    color: rgb(129, 129, 6);
    text-align: center;
  }
</style>
