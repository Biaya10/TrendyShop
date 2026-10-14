import { buscarProductos } from "./api.js";
import { productosRespaldo } from "./productos.js";
import { mostrarMensajeCarga, ocultarMensajeCarga, mostrarMensajeError, renderizarProductos} from "./dom.js";
import { filtrarRopaYJoyeria, filtrarPorCategoria, filtrarPorNombre } from "./utils.js";
import { configurarEventoFiltro, obtenerCategoriaSeleccionada, configurarEventoBuscar, obtenerTextoBusqueda } from "./events.js";


let listaProductos = [];

function aplicarFiltros(){
  const categoria = obtenerCategoriaSeleccionada();
  const texto = obtenerTextoBusqueda();

  let productosFiltrados = filtrarPorCategoria(listaProductos, categoria);
  productosFiltrados = filtrarPorNombre(productosFiltrados, texto);

  renderizarProductos(productosFiltrados);
}

async function inicializar(){
  mostrarMensajeCarga();

  listaProductos = await buscarProductos();
  
  if(listaProductos.length === 0){
    listaProductos = productosRespaldo;
    mostrarMensajeError();
  }

  listaProductos = filtrarRopaYJoyeria(listaProductos);
  ocultarMensajeCarga();
  
  console.log('lista:',listaProductos);
  renderizarProductos(listaProductos);
  configurarEventoFiltro(aplicarFiltros);
  configurarEventoBuscar(aplicarFiltros);

}

inicializar();

