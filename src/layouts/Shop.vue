<template>
    <div v-if="divModal" class="divModal"></div>
    <div class="modal-container"><Pop @accion="mostrarDivModal" /></div>
    <h1>TIENDA/SHOP</h1>
    <div class="shop">
        <section class="menulateral">
            <p>NUESTROS DISEÑOS</p>
            <hr>
            <nav class="about">
                <div class="menuDiv" v-for="categoria in categoriaArticulos" :key="categoria">
                    <p class="menu" @click="obtenerArticulosPorCategoria(categoria)">{{categoria}}</p>
                </div>
            </nav>
        </section>
        <!--Si acabo de entrar en la vista Shop, muestro todos los articulos-->
        <section v-if="articulosFiltrados==false" class="articulos">
           <Card v-for="articulo in articulos" :key="articulo.id" :articulo="articulo" @accion="mostrarDivModal" />
        </section>
        <section v-else class="articulos">
           <Card v-for="articulo in articulosFiltrados" :key="articulo.id" :articulo="articulo" @accion="mostrarDivModal" />
        </section>
    </div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {defineAsyncComponent} from 'vue'

export default {
    data() {
        return {
            divModal: ''
        }
    },
    components: {
        Pop: defineAsyncComponent(() => import('../components/Pop.vue')),
        Card: defineAsyncComponent(() => import('../components/Card.vue'))
    },
    computed: {
        ...mapState(['categoriaArticulos', 'articulos', 'articulosFiltrados']),
        mayuscula(){
             let categorias=[]
            for (let i = 0; i < this.categoriaArticulos; i+=1) {
                
                categorias.push(this.categoriaArticulos[i])
                return this.categoriaArticulos[i]
            }
        }
    },
    
    methods: {
        ...mapActions(['obtenerArticulosPorCategoria', 'obtenerId']),
        mostrarDivModal(divModal){
            this.divModal=divModal
        }
    }
}
</script>

<style scoped>
/*----------- Pop Up --------*/ 
    .modal-container {
        position: fixed;
        z-index: 1000;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /*---------- Pop Up oscurecer fondo -------*/
    .divModal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index:99;
        background:black;
        opacity:0.7;
    }

    /*---------- Tienda ----------*/
    .shop {
        width:100%;
        padding:8% 3%;
        /* Flex */
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        margin:auto;
    }
    h1 {
        width:100%;
        font-size:40px;
    }
    .articulos {
        display:flex;
        width:75%;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    /*------------ Menú lateral ----------*/
    .menulateral {
        width: 16%;
        margin:3%;
    }
    .menulateral > p {
        font-size:25px;
        text-align: left;
        padding-bottom: 20px;
    }
    .menulateral .menu {
        font-size:20px;
        text-align: left;
        font-weight: lighter;
    }
    .menulateral .menu:hover{
        font-weight: bolder;
    }
    .menulateral nav {
        padding-top: 25px;
    }
    .menulateral nav p{
        padding-top: 15px;
    }
    .menu:hover {
        cursor: pointer;
    }
</style>