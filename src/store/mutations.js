export const obtenerId = (state, payload) => {
    state.id=payload

}
export const  obtenerArticulosPorCategoria = (state, payload) => {
    state.articulosFiltrados=payload
}

export const setAgregarCarrito = (state, payload) => {
    state.carrito[payload.id] = { ...payload }

    //Guardo info carrito en el localstorage
    localStorage.setItem('carrito', JSON.stringify(state.carrito)) 
}

//Cuando se recarga la pagina agregar carrito del localstorage
export const setAgregarCarritoLocalStorage = (state, payload) => {
    state.carrito=payload
}

export const eliminarArticulo = (state, payload) => {
    delete state.carrito[payload]
    localStorage.setItem('carrito', JSON.stringify(state.carrito)) 
}

//Eliminar carrito tras comprar
export const eliminarCarrito = (state, payload) => {
    state.carrito = {}
    localStorage.removeItem('carrito')
}

export const cargarBBDD = (state, payload) => {
    state.articulos=payload
}

  //AUTH
export const setUser = (state, payload) => {
    state.user = payload
}

export const setInfoUsuarioBBDD = (state, payload) => {
    state.infoUsuario=payload
}

export const setInfoUsuarioCompraBBDD = (state, payload) => {
    state.infoUsuarioCompra=payload
}

export const setCompraUsuarioBBDD = (state, payload) => {
    state.carrito=payload
}

export const setError = (state, payload) => {
    // REINICIAR
    if (payload === null) {
        return state.error = {tipo: null, mensaje: ''}
      }
    // Login
    if (payload === "EMAIL_NOT_FOUND") {
        return state.error = {
          tipo: 'email',
          mensaje: 'Email no existe'
        }
    }
    if (payload === "INVALID_PASSWORD") {
        return state.error = {
          tipo: 'password',
          mensaje: 'Contraseña no válida'
        }
    }
    //Registro
    if (payload === "EMAIL_EXISTS") {
        return state.error = {
          tipo: 'email',
          mensaje: 'Email ya registrado'
        }
    }
}
    
//Controlar Vista anterior
export const setUltimaUrl = (state, payload) => {
    state.ultimaUrl=payload
}
