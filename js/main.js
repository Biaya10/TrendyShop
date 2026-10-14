import { buscarProductos } from "./api.js";
import { mostrarMensajeCarga, ocultarMensajeCarga } from "./dom.js";

let listaProductos = [];

async function inicializar(){
  mostrarMensajeCarga();

  listaProductos = await buscarProductos();
  console.log('lista:',listaProductos);

  ocultarMensajeCarga();
}

inicializar();

