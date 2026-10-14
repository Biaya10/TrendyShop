import { formatearPrecio } from "./utils.js";

const mensajeCarga = document.getElementById('mensaje-carga');

export function mostrarMensajeCarga(){
  mensajeCarga.hidden = false;
}

export function ocultarMensajeCarga(){
  mensajeCarga.hidden = true;
}

const mensajeError = document.getElementById('mensaje-error');

export function mostrarMensajeError(){
  mensajeError.hidden = false;
}

const containerTarjetas = document.querySelector('.container-tarjetas');

function crearHTMLTarjeta(producto){
  return `
    <div class="col">
      <div class="card h-100">
        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">${formatearPrecio(producto.price)}</p>
          <button type="button" class="btn btn-primary btn-sm" data-id="${producto.id}">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
}

export function renderizarProductos(listaProductos){
  containerTarjetas.innerHTML = '';

  for(let producto of listaProductos){
    containerTarjetas.innerHTML += crearHTMLTarjeta(producto);
  }
}