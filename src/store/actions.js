import router from '../router'


export const obtenerId = ({commit}, id) => {
  commit('obtenerId', id)
}

export const setAgregarCarrito = ({commit, state}, articulo) => {
  state.carrito.hasOwnProperty(articulo.id) 
  ? articulo.cantidad = state.carrito[articulo.id].cantidad + parseInt(articulo.cantidad)
  : articulo.cantidad = articulo.cantidad
  commit('setAgregarCarrito', articulo)
}

export const eliminarArticulo = ({commit, state}, id) => {
  
  commit('eliminarArticulo', id)
 
}

//eliminar carrito tras hacer la compra
export const eliminarCarrito = ({commit, state}) => {
  commit('eliminarCarrito', {})
}

export const cargarBBDD = async ({commit, dispatch}) => {
  try{
    const res = await fetch(`https://tienda-vue-48a31-default-rtdb.europe-west1.firebasedatabase.app/articulos.json?`)
    const dataDB = await res.json()
    
    let arrayArticulos = []
    for (let id in dataDB){
      arrayArticulos.push(dataDB[id])
    }
    
    commit('cargarBBDD', arrayArticulos)

  }catch(err){
    console.log(err)
  }

  //Cargo info del usuario desde localstorage
  if(localStorage.getItem('usuario')){
    commit('setUser', JSON.parse(localStorage.getItem('usuario')))
    dispatch('getInfoUsuarioBBDD')
  }else{
    commit('setUser', null)
  }
  //Cargar carrito del localstorage
  if(localStorage.getItem('carrito')){
    commit('setAgregarCarritoLocalStorage', JSON.parse(localStorage.getItem('carrito')))
    return
  }else{
    localStorage.setItem('carrito', JSON.stringify({}))
  }
}

export const obtenerArticulosPorCategoria = ({commit, state}, id) => {
  if(id=="todos" || id==""){
  commit('obtenerArticulosPorCategoria', state.articulos)
  }else{
    const articulos=state.articulos.filter(art=> art.categoria==id)
    commit('obtenerArticulosPorCategoria', articulos)
  }
}

//AUTH
export const loginUsuario = async ({commit, dispatch}, usuario) => {
  try{
    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBje8DZ-gfR95Ht4xHpH6TMhlH4IcUfDrs', {
      method: 'POST',
      body: JSON.stringify({
        email: usuario.email,
        password: usuario.password,
        returnSecureToken: true
      })
    })
    const userDB = await res.json()
    //Si hay errores
    if (userDB.error) {
      if(userDB.error==="Auth token is expired"){
        dispatch('cerrarSesion')
        return
      }
      return commit('setError', userDB.error.message)
    }

    commit('setUser', userDB)
    router.back()
    //Obtengo todos sus datos
    dispatch('getInfoUsuarioBBDD')
    //Guardo info usuario en el localstorage
    localStorage.setItem('usuario', JSON.stringify(userDB))
  }catch(err){
    console.log(err)
  }
}

export const registrarUsuario = async ({commit, state}, usuario) => {
  try{
    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBje8DZ-gfR95Ht4xHpH6TMhlH4IcUfDrs', {
    
    method:'POST',
    body: JSON.stringify({
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
     })
    })

    const userDB = await res.json()

    if (userDB.error) {
      return commit('setError', userDB.error.message)
    }
    
    commit("setUser", userDB)

    router.push("/")
    
    //Localstore guardo al usuario
    localStorage.setItem('usuario', JSON.stringify(userDB))
  }catch(err){
    console.log(err)
  }
}

export const cerrarSesion = ({commit}) => {
  commit('setUser', null)
  commit('setInfoUsuarioBBDD', null)
  router.push('/')

  //Destruyo info usuario del localstorage
  localStorage.removeItem('usuario')
}

export const setInfoUsuarioBBDD = async ({commit, state}, infoUser) => {
  try{
    const res = await fetch(`https://tienda-vue-48a31-default-rtdb.europe-west1.firebasedatabase.app/infoUser/${state.user.localId}/${infoUser.id}.json?auth=${state.user.idToken}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(infoUser)
    }) 

    const dataDB = await res.json()
  }catch(error){
    console.log(error)
  }
  commit('setInfoUsuarioBBDD', infoUser)
}

//Obtener datos direccion del usuario logueado
export const getInfoUsuarioBBDD = async ({commit, state}) => {
  try {
      const res = await fetch(`https://tienda-vue-48a31-default-rtdb.europe-west1.firebasedatabase.app/infoUser/${state.user.localId}.json?auth=${state.user.idToken}`)
      const db = await res.json()
      
      //Obtengo datos usuario logueado
      const infoUsuario=db
      commit('setInfoUsuarioBBDD', infoUsuario)
       
  } catch (error) {
  console.log(error)
}
}

export const setCompraUsuarioBBDD = async ({commit, state, dispatch}, compra) => {
  try{
    console.log("desde actions setcomprausuariobbdd")
    console.log(compra)
      const res = await fetch(`https://tienda-vue-48a31-default-rtdb.europe-west1.firebasedatabase.app/infoCompra/${state.user.localId}.json?auth=${state.user.idToken}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(compra)
    }) 
    console.log(compra)
    const dataDB = await res.json()
  }catch(error){
    console.log(error)
  }
  commit('setCompraUsuarioBBDD', {})
  router.push('CompraConfirmacion')
}

export const eliminarDireccion = async ({commit, state}, id) => {
  
  try{
    const res = await fetch(`https://tienda-vue-48a31-default-rtdb.europe-west1.firebasedatabase.app/infoUser/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
    method: 'DELETE', 
    })
    commit('setInfoUsuarioBBDD', null)
  }catch(err){
    console.log(err)
  }
  
}

//Controlar Vista anterior
export const setUltimaUrl = ({commit}, url) => {
  commit('setUltimaUrl', url)
}