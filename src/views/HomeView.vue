<template>
  <div class="home">
    
    <GameContainer/>
  </div>
</template>

<script>
// @ is an alias to /src

import GameContainer from '@/components/GameContainer.vue'

export default {
  name: 'HomeView',
  components: {
    GameContainer
  }
}
</script>
