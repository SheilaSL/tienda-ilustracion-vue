<template>
    <div class="caja1">
      <div class="cabecera">
        <h1>LA ILUSTRACIÓN FUERA DEL LIBRO</h1>
        <div class="tiendabutton"><router-link class="button2" to="/shop">Tienda/Shop</router-link></div>
      </div>
    </div>
    <div class="caja2">
      <h1><router-link to="/shop">Tienda/Shop</router-link></h1>
    </div>
    <div class="publicidad">
      <div class="imagenPublicidad"><img src="../assets/imagen_home.png" /></div>
      <div class="infoPublicidad">
        <p @click="$router.push('Tienda')">Lámina Batallón</p>
        <p>15 &euro;</p>
      </div>
    </div>
    <div class="publicidad">
      <div class="imagenPublicidad"><img src="../assets/tote_bag.png" /></div>
      <div class="infoPublicidad">
        <p @click="$router.push('Tienda')">Tote Bag Japonesa</p>
        <p>20 &euro;</p>
      </div>
    </div>
    <div class="caja3">
      <div class="textoCaja3">
        <p>Cómo hacemos nuestros</p>
        <p>Productos</p>
        <router-link to="/Proceso">
          <p>Calidad, Respeto y un poco de Magia</p>
        </router-link>
      </div>
    </div>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['articulos'])
  }
  
}
</script>

<style scoped>
  .caja1 {
    height: 78vh;
    width: 100%;
    background-image: url("../assets/img_home.png");
    background-size: cover;
    display: table;
    background-attachment: fixed;

    /* Flex */
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:row;
    flex-wrap:wrap;
  }
  .caja2 {
    height: 90vh;
    width: 50%;
    background-image: url("../assets/img4_home.png");
    background-size: contain;
    display: table;
    background-attachment: fixed;
  }

  .caja2 h1 {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .caja3 {
    height: 90vh;
    width: 50%;
    background-image: url("../assets/img5_home.png");
    background-size: contain;
    display: table;
    background-attachment: fixed;
  }
  .caja3 .textoCaja3 {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }

  .cabecera h1 {
    font-family: arial bold;
    font-size: 40px;
    color: white;
    width:100%;
  }

  .destacados {
    height: 90vh;
    width:100%;
  }
  .publicidad{
    height: 90vh;
    width:50%;
    background-color: #FED1BF;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction:column;
  }
  .imagenPublicidad img {
    width: 50%;
  }

  a.button2{
    display:inline-block;
    padding:0.5em 4em;
    border:0.16em solid #FFFFFF;
    margin: 0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-decoration:none;
    color: white;
    text-align: center;
    font-size:20px;
    transition: all 0.15s;
  }

 a.button2:hover{
   color: orange;
   border-color: orange;
   background: white;
 }

 @media all and (max-width:30em){
   a.button2{
     display:block;
     margin:0.4em auto;
   }
 }
 a {
   color: black;
 }
 .caja3 p:nth-child(1){
   color: white;
   font-style: oblique;
   font-size: 25px;
 }
 .caja3 p:nth-child(2){
   color: white;
   font-weight: bolder;
   font-size: 35px;
 }
 .textoCaja3 a {
   color: white;
 }
 .infoPublicidad  p:nth-child(2) {
   color: orange;
   margin-top:10px;
 }
 .infoPublicidad  {
   margin-top: 20px;
 }
</style>
