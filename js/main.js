import { buscarProductos } from "./api.js";

let listaProductos = [];

async function inicializar(){
  listaProductos = await buscarProductos();
  console.log('lista:',listaProductos);
}

inicializar();

