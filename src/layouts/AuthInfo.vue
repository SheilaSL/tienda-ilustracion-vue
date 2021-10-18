<template>
  <div class="main">
    <h2>Mi dirección</h2>
    <p>Agrega y administra tu dirección</p>
    <hr>
    <div class="infoDireccion">
      <div class="direccion" v-if="infoUsuario">
        <div>
          <form @submit.prevent="eliminarDireccion2">
            <Direccion />
            <button type="submit" class="boton">Eliminar</button>
          </form>
        </div>
      </div>
      <div v-else class="formulario">
        <div>
          <h3>Añadir nueva dirección</h3>
          <DireccionFormulario urlActual="AuthInfo" nombreBoton="Guardar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {defineAsyncComponent} from 'vue'

export default {
  data(){
    return{
        formDatos: {
            nombre: '',
            apellido: '',
            direccion: '',
            ciudad: '',
            pais: '',
            cp: '',
            telefono: ''
        }
    }
  },

  components: {
    Direccion: defineAsyncComponent(() => import('@/components/Direccion.vue')),
    DireccionFormulario: defineAsyncComponent(() => import('../components/DireccionFormulario.vue'))
  },

  computed: {
    ...mapState(['infoUsuario']),
  },

  methods: {
    ...mapActions(['getInfoUsuarioBBDD', 'eliminarDireccion']),
    eliminarDireccion2(){
      for(var id in this.infoUsuario){
       this.eliminarDireccion(id)
      }
      
    }
  },

  created() {
    this.getInfoUsuarioBBDD()
  }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:70%;
    justify-content: center;
    margin-bottom: 100px;
    margin-top: 5%;
    margin-left:20%;
    margin-right: 20%;
    text-align: left;
  }

  .main h2 {
    width: 100%;
  }

  .main p {
    width: 100%;
    margin-bottom: 18px;
  }
/*-------- Informacion direccion y formulario --------*/
 .infoDireccion {
   width: 100%;
   margin-top: 4%;
 }
 .infoDireccion .direccion {
   width:30%;
 }
 .infoDireccion .formulario {
   width:50%;
 }

  /* ------ Button -------*/
  
  .boton{
      background: rgb(212, 13, 13);
      width:50%;
      text-align:center;
      color: white;
      border: none;
      padding:12px;
      margin-top:20px;
      font-size:15px;
    }
    .boton a{
      color: white;
      text-decoration: none;
    }
    .boton:hover {
        background-color: rgb(211, 81, 81);
    }

  /* etiqueta <hr> horizontal al usar flexbox*/
  hr {
    flex-grow: 1;
  }

</style>