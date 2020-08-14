<template>
  <div id="media">
    <h2 class="display-3 mt-3 mb-3">Média Escolar Vue</h2>
    <v-btn
      color="info"
      class="mb-3"
      v-scroll-to="'#info'"
      @click="showMessage = !showMessage"
    >Instruções</v-btn>
    <Direta />
    <Rec />

    <v-alert type="info" id="info" v-show="showMessage" class="mt-2">
      <ul>
        <li>
          A média utilizada nesse Webapp é
          5.0.
        </li>
        <li>
          Não se deve usar vírgula (,)
          mas ponto (.) nas casas decimais.
        </li>
        <li>
          No campo Aprovação Direta, deve-se colocar as notas
          que, somadas, sejam iguais ou superiores a 10.0.
        </li>
        <li>
          No campo Recuperação, deve-se colocar as notas que, somadas, sejam inferiores a
          10.0.
        </li>
        <li>
          Caso uma das Médias Semestrais no campo Recuperação seja
          igual ou maior a 5.0, deve-se repetir essa mesma média
          na nota de sua respectiva recuperação semestral.
        </li>
        <li>
          Caso a nota de qualquer
          Recuperação seja menor
          que a sua respectiva Média Semestral,
          <br />deve-se descartar
          a nota da recuperação e repetir a
          Média Semestral.
        </li>
      </ul>
    </v-alert>
  </div>
</template>

<script>
import Direta from "./media/Direta";
import Rec from "./media/Rec";
export default {
  name: "Media",
  components: { Direta, Rec },
  data() {
    return {
      showMessage: false,
    };
  },
};
</script>

<style lang="css">
.v-alert__content ul li {
  color: white;
  text-align: left;
}

@media only screen and (max-width: 456px) {
  #media {
    width: 85%;
  }
}
</style>
