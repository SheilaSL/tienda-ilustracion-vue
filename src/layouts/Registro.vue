<template>
<section>
    
<p>Regístrate</p>
  <p>¿Ya tiene un perfil personal? <router-link class="registro" to="/login"><span>Iniciar sesión</span></router-link></p>

  
  <!--Si hay errores al resgistrarse-->
  <div v-if="error.tipo !== null" class="error">
      {{error.mensaje}}
  </div>

  <div class="formulario">
  <form @submit.prevent="procesarFormulario">
      <div class="labels">
        <label>Email</label>
        <input 
            type="email" 
            class="form-control my-2"
            v-model.trim="email"
        >
      </div>
      <div class="labels">
        <label>Contraseña</label>
        <input 
            type="password" 
            class="form-control my-2"
            v-model.trim="pass1"
        >
      </div>
      <div class="labels">
        <label>Contraseña</label>
        <input 
            type="password" 
            class="form-control my-2"
            v-model.trim="pass2"
        >
      </div>
        <button 
            type="submit"
            class="boton"
            :disabled="bloquear"
        >
        Registrarse
        </button>
  </form>
  </div></section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    computed: {
        ...mapState(['error']),
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5 && this.pass1 === this.pass2){
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions(['registrarUsuario']),
        procesarFormulario(){
            this.registrarUsuario({email: this.email, password: this.pass1})
            this.email = '';
            this.pass1 = '';
            this.pass2 = '';
        }
    }
}
</script>

<style scoped>
       section {
           width:100%;
margin-bottom: 100px;
  
         /* Flex */
  display: flex;
  flex-direction:column;

  flex-wrap:wrap;
  align-items: center;

  justify-content: center;
  

    }
span{
    color: #FFC824;
    
}
.registro{
    text-decoration:none;
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

input {
    border:0;
    border-bottom:1px solid black;
    width:100%;
    padding-bottom: 10px;
}

input:focus{
          border-bottom: 1px solid #FFC824;
          outline: none;
        }

   
   p:first-child {
       font-size: 40px;
       font-weight: bold;
   }
   p{
       padding-bottom:20px;
   }
   label{
      margin-right:100%;
   }
   .labels{
       margin-top:30px;
   }
   .error{
       color: red;
       font-size: 15px;
   }
</style>
