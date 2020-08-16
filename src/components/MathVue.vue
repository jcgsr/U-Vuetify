<template>
  <div id="math">
    <h2 class="display-3 mt-3 mb-4">Operações Matemáticas</h2>
    <Soma class="mb-1" />
    <Subtracao class="mb-1" />
    <Multiplicacao class="mb-1" />
    <Divisao class="mb-1" />
    <Quadrado class="mb-1" />
    <Cubo class="mb-1" />
    <Potencia class="mb-1" />
    <Porcentagem class="mb-1" />
    <RaizQuadrada class="mb-1" />
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
export default {
  name: "Math",
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
  },
};
</script>

<style lang="css">
@media only screen and (max-width: 456px) {
  #math {
    width: 85%;
  }
}
</style>