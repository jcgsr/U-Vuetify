<template>
   <div id="math">
      <h2 class="display-3 mb-4">Math Vue</h2>
      <Soma />
   </div>
</template>

<script>
import Soma from './math/Soma'
export default {
   name: 'Math',
   components: { Soma }
   
}
</script>

