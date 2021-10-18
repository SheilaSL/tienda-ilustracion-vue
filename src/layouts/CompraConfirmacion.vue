<template>
  <div class="main">
    <p class="mensaje">Compra realizada con éxito <span v-if="usuarioAutenticado">{{usuarioAutenticado.email}}</span></p>
    <p class="enlace"><router-link to="/shop">Seguir comprando</router-link></p>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'

export default {
  computed: {
      ...mapState(['ultimaUrl']),
      ...mapGetters(['usuarioAutenticado'])
  },
  methods: {
    ...mapActions(['setUltimaUrl'])
  },
  //Si usuario hace back navegacion desde CompraConfirmacion, redirigir a la Home
  created(){
    this.setUltimaUrl(true)
  }
}
</script>

<style scoped>
  .main {
    width:100%;
    height: 470px;
    display: flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content: center;
  }

  /*--------- mensaje --------*/
  .main .mensaje {
    font-size: 25px;
  }
  .mensaje span {
    color: orange;
  }

  /*------- enlace --------*/
  a {
    font-size: 20px;
    color: black;
  }
  
</style>