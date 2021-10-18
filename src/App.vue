<template>
  <div class="container">
    <NavBar />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import {defineAsyncComponent} from 'vue'
import { mapState } from 'vuex'

export default {
  components: {
        NavBar: defineAsyncComponent(() => import('@/components/NavBar.vue')),
        Footer: defineAsyncComponent(() => import('@/components/Footer.vue'))
  },

  computed: {
    ...mapState(['user']),
  },

  created(){
    this.$store.dispatch("cargarBBDD")
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  * {
      box-sizing: border-box;
      margin:0;
      padding:0;
  }
  html{
      height: 100%;
  }
  body {
      min-height: 100%;
  }
  .container {
      text-align:center;
      margin: auto;
      /* Flex */
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
  }
</style>
