<template>
  <div id="cambio">
    <h2 class="display-3 mb-3">{{ title }}</h2>
    <div class="conversor">
      <ConversorDollarReal moeda-a="USD" moeda-b="BRL" />
      <ConversorEuroReal moeda-a="EUR" moeda-b="BRL" />
      <ConversorLibraReal moeda-a="GBP" moeda-b="BRL" />
      <ConversorRealDollar moeda-a="BRL" moeda-b="USD" />
      <ConversorRealEuro moeda-a="BRL" moeda-b="EUR" />
      <ConversorRealLibra moeda-a="BRL" moeda-b="GBP" />
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
    title: "Taxa de Câmbio Vue",
  }),
};
</script>

