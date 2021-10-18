<template>
<section>
    
    <p>Iniciar sesión</p>
    <p>¿Eres nuevo en este sitio? <router-link class="registro" to="/registro"><span>Regístrate</span></router-link></p>
  
  <!--Si hay errores al loguear-->
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
                v-model.trim="password"
            >
        </div>
        
            <button 
                type="submit"
                class="boton"
                :disabled="bloquear"
            >
            Iniciar sesión
            </button>
        
    </form>
   
  </div>
  
</section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
         ...mapState(['error', 'ultimaUrl']),
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.password.length >= 6){
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions(['loginUsuario', 'setUltimaUrl']),
        procesarFormulario(){
            this.loginUsuario({email: this.email, password: this.password})
            this.email = '';
            this.password = '';
        }
    }
}
</script>


<style scoped>
    section {
         /* Flex */
  display: flex;
  flex-direction:column;

  flex-wrap:wrap;
  align-items: center;

  justify-content: center;
  width:100%;
  margin-bottom:150px;

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