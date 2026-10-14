import { buscarProductos } from "./api.js";
import { productosRespaldo } from "./productos.js";
import { mostrarMensajeCarga, ocultarMensajeCarga, mostrarMensajeError, renderizarProductos} from "./dom.js";
import { filtrarRopaYJoyeria, filtrarPorCategoria } from "./utils.js";
import { configurarEventoFiltro, obtenerCategoriaSeleccionada } from "./events.js";


let listaProductos = [];

function manejarFiltro(){
  const categoria = obtenerCategoriaSeleccionada();
  const productosFiltrados = filtrarPorCategoria(listaProductos, categoria);

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
  configurarEventoFiltro(manejarFiltro);

}

inicializar();

