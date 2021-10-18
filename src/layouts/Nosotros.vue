<template>
    <div class="destacados">
      <h1>NOSOTROS</h1>
    </div>
    <Parallax 
        titulo1="CRIS C." 
        texto1="El logro de un lenguaje que mezcla las inquietudes de la pintura tradicional con 
                la experimentación del dibujo contemporáneo, dando como resultado ilustraciones cargadas de color, ternura y poesía" 
        titulo2="ALBERTO N." 
        texto2="La conexión entre el mundo imaginado con el plano real, valiéndose del símbolo para crear 
                imágenes sugerentes y con una gran fuerza dramática." 
    />
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  components: {
    Parallax: defineAsyncComponent(() => import('../components/Parallax.vue'))
  }
}
</script>

<style scoped>
  .destacados {
    height: 15vh;
    width:100%;
    font-size:20px;
    margin-top:40px;
    margin-bottom:20px;
  }
</style>
