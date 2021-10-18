<template>
     
    <div class="articulo">
       <img :src="articulo.url" />
        <div class="info">
            <p class="title">{{articulo.title}}</p><br>
            <p class="precio">{{articulo.precio}} &euro;</p> 
        </div>
        
        <button v-if="articulo.agotado==false" class="boton" @click="mostrarPopUp(articulo.id)">Agregar al Carro</button>
        <p class="agotado" v-else>AGOTADO</p>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    props: {
        articulo: Object
    },
    methods:{
       ...mapActions(['obtenerId']),
       mostrarPopUp(id){
        //Bloqueo fondo Shop al mostrarse
        this.$emit('accion', true)
        this.obtenerId(id)
       }
    }
        
}
</script>

<style scoped>
.articulo{
    width:220px;
    height:240px;
    padding-bottom: 35%;
}

.boton{
    background: hsl(19, 92%, 85%);
    width:100%;
    text-align:center;
    color: white;
    border: none;
    padding:12px;
    border-radius:40px;
}
.boton:hover {
    background-color:hsl(19, 95%, 75%)
}

img{
    width:220px;
    height:180px;
    object-fit: contain;
}

.info {
    text-align:center;
    padding-top:15px;
    padding-bottom:15px;
}

.precio {
    color:rgb(231, 147, 37);
}

.agotado {
    color:green;
}

</style>