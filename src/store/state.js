export default () => ({
    categoriaArticulos: [
      "todos", "lamina", "bolso", "totebag", "monedero"
    ],
    articulos: [],
    articulosFiltrados: [],
    id: '',
    carrito: {},
    
    //AUTH
    user: null,
    error: {tipo: null, mensaje: ''},

    //InfoUsuario
    infoUsuario: null,
    infoUsuarioCompra: [],

    //Controlar Vista anterior
    ultimaUrl: null
})