<template>
  <v-app>
    <Toolbar />
    <v-main>
      <v-container>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
export default {
  name: "App",

  components: {
    Toolbar,
    Footer,
  },

  data: () => ({
    //
  }),
  watch: {
    '$route':{
      handler: (to) => {
        document.title = to.meta.title || 'U-Vue'
      },
      immediate: true
    }
  },
};
</script>

<style lang="css">
*,
html,
body {
  color: rgb(235, 235, 21);
  text-align: center;
  margin: 0 auto;
}
</style>
