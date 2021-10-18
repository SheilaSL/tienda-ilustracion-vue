<template>
    <div class="destacados">
      <h1>PROCESO</h1>
    </div>
    <Parallax 
        titulo1="EL DIBUJO" 
        texto1="El dibujo es la base de nuestra amplia variedad de productos, y es que entre acuarelas, lapiceros y cuadernos damos vida a los personajes
            y lugares que estampamos para ti y tu hogar." 
        titulo2="CALIDAD Y RESPETO" 
        texto2="Imprimimos con tintas de alta calidad y la elección del papel es cuida para acercarse a acabados fieles al dibujo original.
            Para los textiles utilizamos tintas ECO-TEX que son respetuosas con el medio ambiente y el tejido Ecoleather no proviene de origen animal."
        imagen1="../assets/img5_home.png"
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
