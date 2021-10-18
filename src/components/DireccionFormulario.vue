<template>
    <form @submit.prevent="procesarFormulario">
      <small v-if="bloquear">Todos los campos son obligatorios</small>
            <div class="caja">
              <label>Nombre</label>
              <div><input type="text" v-model.trim="formDatos.nombre" /></div>
            </div>
            <div class="caja">
              <label>Apellido</label>
              <div><input type="text" v-model.trim="formDatos.apellido" /></div>
            </div>
            <div class="caja">
              <label>Dirección</label>
              <div><input type="text" v-model.trim="formDatos.direccion" /></div>
            </div>
            <div class="cajaPais">
              <div class="caja2">
                <label>Ciudad</label>
                <div class="mitad"><input type="text" v-model.trim="formDatos.ciudad" /></div>
              </div>
              <div class="caja2">
                <label>Pais</label>
                <div><input type="text" class="mitad" v-model.trim="formDatos.pais" /></div>
              </div>
            </div>
            <div class="cajaPostal">
              <div class="caja2">
                <label>Código Postal</label>
                <div class="mitad"><input type="text" v-model.trim="formDatos.cp" /></div>
              </div>
              <div class="caja2">
                <label>Teléfono</label>
                <div class="mitad"><input type="text" v-model.trim="formDatos.telefono" /></div>
              </div>
            </div>
            <button type="submit" class="boton" :disabled="bloquear">{{nombreBoton}}</button>
        </form>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    const shortid=require('shortid')
    
    export default {
        props: ['nombreBoton'],
        
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
                disabled: true
            }
        },

        computed: {
          ...mapState(['carrito']),
          ...mapGetters(['usuarioAutenticado']),
          //Validar si campos vacios
          bloquear(){
            if(this.formDatos.nombre=='' || this.formDatos.apellido=='' || this.formDatos.direccion=='' ||
            this.formDatos.ciudad=='' || this.formDatos.pais=='' || this.formDatos.cp=='' || this.formDatos.telefono==''){
              return true
            }
            return false
          }
        },
          
        methods: {
            ...mapActions(['setInfoUsuarioBBDD', 'setCompraUsuarioBBDD', 'eliminarCarrito']),
            
            //Funcion para comprar si el usuario no tiene direccion
            procesarFormulario(){
                //generar id
                this.formDatos.id=shortid.generate()
                //En el caso de que el usuario logueado no tenga direccion, guarda la direccion y la compra en la BBDD
                if(this.usuarioAutenticado){
                  this.setInfoUsuarioBBDD(this.formDatos)
                  console.log("DESDE direccionformulario")
                  console.log(this.carrito)
                  this.setCompraUsuarioBBDD(this.carrito)
                }
                //Si el usuario no esta logueado elimino ya los articulos del carrito y no guardo la direccion
                this.eliminarCarrito()
                
                //Me envia a la pagina de confirmacion de compra
                this.$router.push('CompraConfirmacion')
            },
        }
    }
</script>

<style scoped>
  input{
    width: 100%;
    height: 40px;
    margin-top:5px;
  }
  .mitad{
    width: 100%;
    height: 40px;
  }
  
  input:hover{
    border-color: rgb(153, 179, 236);
  }
  form .caja{
    margin-top: 20px;
  }
  .cajaPais{
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top: 20px;
  }
  .cajaPostal{
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top: 20px;
  }
  .caja2{
    width: 40%;
  }
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
    small {
      color:red;
    }

</style>