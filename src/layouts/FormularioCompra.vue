<template>
  <div class="main">
    <!--si hay direccion del usuario en la BBDD mostrar ésto-->
    <div v-if="flag" class="panelIzqu">
      <h2>Datos de Envío</h2>
      <form @submit.prevent="comprar">
        <Direccion />
        <button type="submit" class="boton">Continuar</button>
      </form>
    </div>

    <!--Si no hay direccion en la BBDD mostrar ésto-->
    <div v-else class="panelIzqu">
      <div class="inicioSesion">
        <p>¿Ya tienes una cuenta? <router-link to="/login" :bandera="true">Inicia una sesión</router-link> para finalizar la compra mas rápido.</p>
      </div>
      <div class="formulario">
        <h2>Datos de Envío</h2>
        <DireccionFormulario urlActual="FormularioCompra" nombreBoton="Continuar" />
      </div>
    </div>
    <div class="panelDrcha">
      <h3>Resumen del pedido</h3>
      <hr>
      <TotalPedido />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters} from 'vuex'
import {defineAsyncComponent} from 'vue'

export default {
    data(){
        return{
            formDatos: {
                id: '',
                nombre: '',
                apellido: '',
                direccion: '',
                ciudad: '',
                pais: '',
                cp: '',
                telefono: ''
            },
           flag: ''
            
        }
        
    },
    components: {
            TotalPedido: defineAsyncComponent(() => import('../components/TotalPedido.vue')),
            Direccion: defineAsyncComponent(() => import('@/components/Direccion.vue')),
            DireccionFormulario: defineAsyncComponent(() => import('../components/DireccionFormulario.vue'))
        },
    computed: {
      ...mapState(['carrito', 'infoUsuario', 'user', 'ultimaUrl']),
      ...mapGetters(['usuarioAutenticado']),
    },
    methods: {
      ...mapActions(['setInfoUsuarioBBDD', 'setCompraUsuarioBBDD', 'getInfoUsuarioBBDD', 'eliminarCarrito', 'setUltimaUrl']),
      //Funcion para comprar si el usuario ya tiene direccion
      comprar(){
        console.log("desde formulariocompra")
        console.log(this.carrito)
        this.setCompraUsuarioBBDD(this.carrito)
        this.eliminarCarrito()
      },
    },

    //Si usuario hace back navegacion desde CompraConfirmacion a esta vista, redirigir a la Home
    created(){
      if(this.ultimaUrl==true){
          this.$router.push("/")
          this.setUltimaUrl(false)
      }
      this.getInfoUsuarioBBDD()
      if(this.infoUsuario){
        this.flag=true
      }else{
        this.flag=false
      }
    }
}
</script>

<style scoped>
/*--------- main ---------*/
  .main {
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    justify-content: center;
    margin-bottom: 100px;
    margin-top: 5%;
  }

  /*-------- panel izquierdo --------*/
  .panelIzqu{
    width:34%;
    margin-right:1%;
  }
  

  /*------- Inicio Sesion ------*/
  .inicioSesion{
    background: rgb(240, 240, 240);
    padding:15px 20px;
    text-align: left;
    margin-bottom: 30px;
  }
  .inicioSesion p a{
    color: black;
  }

  /*------- formulario --------*/
  .panelIzqu {
    text-align: left;
  }
 
  h2 {
    margin-bottom: 30px;
  }
    
  
  /*-------- panel derecho --------*/
  .panelDrcha{
    background: rgb(240, 240, 240);
    width:25%;
    padding: 20px 40px;
    height: 250px;
  }
  .panelDrcha h3{
    text-align: left;
  }

  /*------- button ------*/
.boton{
  background: #FFC824;
  width:100%;
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
    background-color: rgb(255, 153, 0);
}

</style>