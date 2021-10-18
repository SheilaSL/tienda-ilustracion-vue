<template>
    <div class="modal" v-if="obtenerArticuloPorId">
        <div class="close">
            <p class="close"  @click="cerrarPopup('')">X</p>
        </div>
        <div class="datos">
            <!-- funciona con el interrogante y sin el. Preguntar que significa el interrogante-->
            <div class="imagen">
                <img :src="obtenerArticuloPorId?.url" />
            </div>
            
            <div class="info">
                <p>{{ obtenerArticuloPorId?.title }}</p>
                <p>{{ obtenerArticuloPorId?.precio }}<span>&euro;</span></p>
                <form>
                    <div>
                        <label>Tamaño</label>
                        <select name="tamano" required="required" v-model="tamano">
                            <option value="">Elegir</option> 
                            <option value="A4 21x29'7cm">A4 21x29'7cm</option> 
                            <option value="A3+ 33x48cm">A3+ 33x48cm</option>
                        </select>
                    </div>
                    <div>
                        <label>Cantidad</label>
                        <input type="number" min=1 required="required" v-model="cantidad">
                    </div>
                    <button class="boton" :disabled="bloquear" @click="crearArticulo()">Agregar al carro</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            cantidad:'',
            tamano: ''
        }
    },
    methods:{
      ...mapActions(['obtenerId','setAgregarCarrito','cambiarCssShop']),

      //Creo articulo y llamo a la funcion setAgregarCarrito
        crearArticulo(){
            //Añado las dos nuevas propiedades al objeto: tamano y cantidad para enviarlo a la vista de carritoCompra
          this.obtenerArticuloPorId.tamano=this.tamano
          this.obtenerArticuloPorId.cantidad=this.cantidad
          this.setAgregarCarrito(this.obtenerArticuloPorId)
          this.obtenerId()
          //Limpio campos
          this.cantidad=''
          this.tamano=''
          //desbloqueo fondo Shop al cerrarse el popup
          this.$emit('accion', false)
          
        },
      //Cierro el popup y limpio campos
      cerrarPopup(){
         this.obtenerId()
         this.cantidad=''
         this.tamano=''
          //desbloqueo fondo Shop al cerrarse el popup
         this.$emit('accion', false)
      },
    },
    computed: {
      ...mapGetters(['obtenerArticuloPorId']),
      //Desactivar/Activar boton de enviar al carro
      bloquear(){
          if(this.cantidad==="" || this.tamano===""){
              return true
          }else{
              return false
          }
      }
    },
    //Limpio el Id cada vez que entro en la pagina para que no muestra el popup si se quedó abierto y el usuario no lo cerró
    created() {
        this.obtenerId('')
    }
    
    
}
</script>

<style scoped>
    .modal{
        background: white;
        color: black;
        padding-bottom:30px;
        padding-left:30px;
        left: 50x;
        transition: ease-in 100ms;
        width:47%;
    }

    div{
       margin: .5rem;
    }
    a{
        color: #2eBef1;
        font-weight:bold;
    }
    input{
        width:50px;
    }
    .imagen{
        width:400px;
        height:450px;
    }
    img {
        max-width:400px;
        height: 450px;
        object-fit: contain;
    }
    .close{
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content: right;
    }
    .close p:hover{
        cursor: default;
    }
    .datos{
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content: left;
        align-items: center;
    }
    .info{
        width:30%;
        text-align:left;

    }
    .info form{
        margin-top: 30%;
    }
    .info p:nth-child(1){
        font-size: 20px;
    }
    .info p:nth-child(2){
        color: orange;
    }
    form div{
        padding-bottom:10px;
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
</style>