<template>
  <article>
    <div class="imagen"><img :src="articulo.url" class="imgArticulo" /></div>
    <div class="datos1">
      <p>{{articulo.title}}</p>
      <p class="tamano" v-if="articulo.tamano">Tamaño: {{articulo.tamano}}</p>
      <p class="precio">{{articulo.precio}} &euro;</p>
    </div>
    <div v-if="urlActual!=='AuthCompras'" class="datos2">
      <input type="number" min=1 required="required" v-model="cantidad">
      <label>{{calcularTotal}} &euro;</label>
      <p class="close" @click="eliminarArticulo(articulo.id)">X</p>
    </div>
    <div v-else>
      <p>Cantidad: {{articulo.cantidad}}</p>
      <label>Total: {{calcularTotal}} &euro;</label>
    </div>
    <hr>
  </article>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  props: {
    articulo: Object,
    urlActual: String
  },
  data() {
    return {
      cantidad:this.articulo.cantidad
    }
  },
  computed:{
    calcularTotal(){
      return this.articulo.precio * this.articulo.cantidad
    }
  },
  methods: {
    ...mapActions(['eliminarArticulo'])
    
    
  },
  //Vigilo si el usuario modifica la cantidad de articulos
  watch: {
    cantidad:function(value){
      this.articulo.cantidad=value
    }
  }
}
</script>

<style scoped>
  article {
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    padding-top:5%;
    padding-bottom:5%;
  }
  

  .imagen {
    width:120px;
    height:80px;
    max-height:10%;
  }
  .imgArticulo{
    width:120px;
    height:80px;
    object-fit: contain;
  }
  .imgEliminar{
    width:4%;
    height:auto;
  }

  .datos1{
    width:40%;
    display: flex;
    flex-direction:column;
    flex-wrap:wrap;
  }
  .datos1 p{
    width: 100%;
    margin-right:100px;
  }

  .datos1 .precio{
    color: orange;
  }
  .datos1 .tamano{
    font-size:13px;
  }

  .datos2{
    width:40%;
    display: flex;
    flex-direction:row;
    justify-content: right;
    flex-wrap:wrap;
  }
  .datos2 input{
    padding: 2px;
    width: 50px;
    height:30px;
  }
  .datos2 label{
    width: 100px;
  }
  .datos2 p{
    width: 10%;
  }

  .close:hover{
    cursor: default;
  }
  /* etiqueta <hr> horizontal al usar flexbox*/
  hr {
    flex-grow: 1;
  }
</style>