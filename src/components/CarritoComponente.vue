<template>
    <section class="carroLleno" v-if="calcularCarritoLleno==false">
        <div class="resumen">
            <p class="titulo">Mi Carrito</p>
            <hr>
            <div class="resumenDatos">
                <ResumenPedido v-for="articulo of carrito" :key="articulo.id" :articulo="articulo" />
            </div>
        </div>
        <div class="total">
            <p class="titulo">Total pedido</p>
            <hr>
            <div class="totalDatos">
                <TotalPedido />
            </div>
        </div>
    </section>
    
    <section v-else  class="carroVacio">
        <p class="titulo">Mi Carrito</p>
        <hr>
        <div class="mensajeCarro">
            <div>
                <p class="uno">El carrito está vacío</p>
                <p class="dos"><router-link to="/shop">Seguir comprando</router-link></p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {defineAsyncComponent} from 'vue'

export default {
        
        
        components: {
            ResumenPedido: defineAsyncComponent(() => import('@/components/ResumenPedido.vue')),
            TotalPedido: defineAsyncComponent(() => import('@/components/TotalPedido.vue'))
        },
        computed: {
            ...mapState(['carrito', 'ultimaUrl']),

            //Muestra mensaje carrito vacio o lleno. Aqui compruebo si el carrito esta vacio
            calcularCarritoLleno(){
                
                return JSON.stringify(this.carrito) === '{}';
            }      
        },
        methods: {
            ...mapActions(['setUltimaUrl'])
        },
        //Evita redirigir a la Home (como en CompraConfirmacion)
        created(){
            if(this.ultimaUrl==true){
                this.setUltimaUrl(false)
            }
            
        }
        
    
}
</script>

<style scoped>

.carroLleno{
/* Flex */
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;
  justify-content: center;
}
.resumen{
    width:45%;
    padding-right: 5%;
}
.resumenDatos{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-between
}
.total{
    width:20%;
    height: 230px;
    padding-bottom:400px;
}
.titulo{
  font-size:20px;
  padding-bottom:15px;
  text-align:left;
}
.totalDatos{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: center;
}

.carroVacio{
    width:100%;
    margin-left:20%;
    margin-right:20%;
    height:420px;
    
    
}
.mensajeCarro{
    display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  padding-top:10%;
}
a{
    color:black;
    font-size: 14px;
  
}
.uno{
    font-size: 25px;
    width: 300px;
    padding-bottom:20px;
}
.dos{
    width: 300px;
}

/* etiqueta <hr> horizontal al usar flexbox*/
hr {
  flex-grow: 1;
}
</style>





