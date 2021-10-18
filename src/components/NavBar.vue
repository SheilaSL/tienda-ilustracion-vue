<template>
  <header>
      <div class="logonav">
        <div class="caja">
          <div class="logo"><img src="@/assets/logo1.png" alt="logo"></div>
          <nav>
            <ul>
              <li>
                <router-link v-if="usuarioAutenticado" to="/">{{usuarioAutenticado.email}}
                  <span class="arrow">&#x25BC;</span>
                </router-link>
                <router-link v-else to="/login">Login</router-link>

                <!--Mostrar submenu si el usuario esta autenticado-->
                <div v-if="usuarioAutenticado" class="cajaSubmenu">
                  <ul class="submenu">
                    <li>
                      <router-link class="enlace datos" to="/miInformacion"><p>Mi datos</p></router-link>
                      <hr>
                      <p class="logout" @click="cerrarSesion">Log Out</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link class="carrito" to="/carritoCompra">Carrito</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav>
      <div class="nav1">
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Tienda/shop</router-link>
          <router-link to="/nosotros">Nosotros</router-link>
          <router-link to="/proceso">Proceso</router-link>
        </div>
      </nav>
    </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['usuarioAutenticado'])
  }
}
</script>

<style scoped>
nav a{
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.4s;
  color:black;
}

nav a:hover{
  color: grey;
}
nav p:hover{
  color: grey;
}
nav ul{
  list-style: none;
  display:flex;
}
nav li{
  width: 100%;
  text-align: center;
  position: relative;
}
nav li:hover .submenu > li{
  display: block;
  top: 0px;
}

/*----------- submenu ---------*/
.cajaSubmenu {
  margin-top:20px;
}
.submenu{
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  justify-content: left;
}
.submenu li{
  display: none;
  position: absolute;
  top: 0px;
  border: groove 0.5px;
  width: 120px;
  background: white;
  padding: 10px;
}
.submenu .enlace {
  width:100%;
  text-align:left;
}
.submenu .datos{
  padding-bottom: 15%;
}
.submenu p{
  width:100%;
  text-align:left;
  padding-top: 15%;
}
.logout:hover {
  cursor: pointer;
}
.arrow{
  margin-left: 8px;
  color: #eee;
  font-size: 12px;
}

/*-------- header -------*/
header{
  height: 160px;
  width: 100%;
  padding: 20px;
  margin-bottom:5px;

  /* Flex */
  display: flex;
  justify-content:center;
  flex-direction:row;
  flex-wrap:wrap;
}
nav .carrito {
  text-decoration: none;
  color:black;
  padding-left: 20px;
  color:orange;
}
nav a.router-link-exact-active {
  color: orange;
}
.nav1  {
  display:flex;
  align-self:center;
  justify-content: center;
  width:100%;
}
.nav1 a {
  padding-left: 20px;
  text-decoration: none;
  color:black;
}
.caja{
  width:57%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
}

/*----------- logo ---------*/
.logonav {
  display:flex;
  flex-direction: row;
  justify-content:flex-end;
  width:100%;
}
.logo img{
  width:45%;
}
.logo{
}
</style>