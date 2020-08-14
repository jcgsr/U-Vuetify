<template>
  <v-footer id="footer" absolute>
    <v-card width="100%" class="black lighten-1 text-center">
      <v-card-text class="white--text">
        &copy;{{ footer }}
        <v-btn info>
          <a :href="link">Jovane</a>
        </v-btn>
        <br />
        {{ msg }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: "2020 - U-Vue criado e desenvolvido por ",
      link: "https://jcgsr.github.io/",
      msg: "Todos os Direitos Reservados",
    };
  },
};
</script>

<style scoped>
#footer {
  background-color: rgb(22, 21, 21);
}

.v-footer--absolute {
  position: inherit;
}

.v-application .white--text {
  color: rgb(129, 129, 6) !important;
}
</style>