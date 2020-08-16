<template>
  <div id="calculator">   
        <h2 class="display-3 mt-3 mb-3">Calculadora</h2> 
        <Calculator />
  </div>
</template>

<script>
import Calculator from './calculadora/Calculator';

export default {
  components: { Calculator }
};
</script>

<style>  
  *, html, body {
    margin: 0;
    text-align: center;
    width: 100%;
  }
 
  #calculator{
    margin: 0 auto;
    text-align: center;
    margin-top: .5rem;     
  }
</style>