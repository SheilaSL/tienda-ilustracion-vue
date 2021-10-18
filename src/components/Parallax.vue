<template>
  <div class="caja2"></div>
  <div class="publicidad">
    <div class="infoPublicidad">
      <p>{{titulo1}}</p>
      <p>{{texto1}}</p>
    </div>
  </div>
  <div class="publicidad">
    <div class="infoPublicidad">
      <p>{{titulo2}}</p>
      <p>{{texto2}}</p>
    </div>
  </div>
  <div class="caja3">foto 3</div>
</template>

<script>
export default {
  props: [
    'titulo1',
    'texto1',
    'titulo2',
    'texto2',
    'imagen1'
  ]
}
</script>

<style scoped>
  .caja2 {
    height: 90vh;
    width: 50%;
    background-image: url("../assets/img1_home.png");
    background-size: cover;
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
    background-image: url("../assets/img2_home.png");
    background-size: cover;
    display: table;
    background-attachment: fixed;
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
    width: 75%;
  }

  /*----------- texto cajas ----------*/
  .infoPublicidad p:nth-last-child(2) {
    font-size: 25px;
    color: rgb(170, 53, 53);
    font-weight: bolder;
    padding-bottom: 40px;
  }
  .infoPublicidad {
    width: 55%;
    text-align: center;
  }

</style>