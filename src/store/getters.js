export const obtenerArticuloPorId = (state) => {
    const articulo=state.articulos.find(art=> art.id===state.id)
    return articulo
}

//AUTH
export const usuarioAutenticado = (state) => {
    return state.user
}