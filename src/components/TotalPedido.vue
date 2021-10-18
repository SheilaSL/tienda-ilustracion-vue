<template>
    <div class="subtotal">
      <div class="datos">
        <label>Subtotal</label>
        <p>{{calcularSubtotal}} &euro;</p>
      </div>
      <br>
      <div class="datos">
        <label>Envío</label> 
        <p>5 &euro;</p>
      </div>
    </div>
   
   <hr>
      <div class="datos">
        <label><span>Total</span></label>
        <p>{{calcularSubtotal + 5}} &euro;</p>
      </div>
      <p class="impuesto">Impuesto incluído</p>
      <router-link to="/formularioCompra"><button v-if="boton" type="submit" class="boton">Finalizar compra</button></router-link>
  
  
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      boton: true
    }
  },
  computed: {
    ...mapState(['carrito', 'ultimaUrl']),
     calcularSubtotal(){
       let claves = Object.keys(this.carrito); 
       let subtotal=0
       for(let i=0; i< claves.length; i++){
          let clave = claves[i];
          subtotal=parseInt(this.carrito[clave].precio * this.carrito[clave].cantidad) + subtotal
        }
       return subtotal
  }
  },
  created() {
    //Si la url contiene que estoy en la pagina de formularioCompra, no mostrar boton.
    let urlActual=window.location.href
   
    if(urlActual.includes("formularioCompra")) {
        this.boton=false
    }
  }
}
</script>
<style scoped src="../assets/styles/CarritoCompra.css">

</style>
