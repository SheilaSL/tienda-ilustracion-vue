<template>
  <div v-for="info in infoUsuario" :key="info.id" class="datosIzqu">
          <div class="nombre">
              <p>{{info.nombre}} {{info.apellido}}</p>
          </div>
          <div class="direccion">
            <div class="caja">
                {{info.direccion}}
            </div>
            <div class="caja">
                {{info.cp}} {{info.ciudad}}
            </div>
            <div class="caja">
                {{info.pais}}
            </div>
          </div>
        </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
    ...mapState(['infoUsuario']),
  },

  methods: {
    ...mapActions(['getInfoUsuarioBBDD']),
  },

  created() {
    this.getInfoUsuarioBBDD()
  }
}
</script>

<style scoped>
    .nombre {
    padding-bottom: 20px;
    font-weight: bolder;
  }
  .direccion .caja {
    margin-bottom: 10px;
  }
  .datosIzqu {
    background: #fae8e2;
    padding: 15px 20px;
  }
</style>