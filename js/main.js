import { buscarProductos } from "./api.js";
import { productosRespaldo } from "./productos.js";
import { mostrarMensajeCarga, ocultarMensajeCarga, mostrarMensajeError} from "./dom.js";

let listaProductos = [];

async function inicializar(){
  mostrarMensajeCarga();

  listaProductos = await buscarProductos();
  
  if(listaProductos.length === 0){
    listaProductos = productosRespaldo;
    mostrarMensajeError();
  }
  
  console.log('lista:',listaProductos);

  ocultarMensajeCarga();
}

inicializar();

