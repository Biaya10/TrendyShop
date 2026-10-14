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
    <div class="producto-tarjeta">
      <img src="${producto.image}" alt="${producto.title}" width="100">
      <p>${producto.title}</p>
      <p>$${producto.price}</p>
      <p>${producto.category}</p>
    </div>
  `;
}

export function renderizarProductos(listaProductos){
  containerTarjetas.innerHTML = '';

  for(let producto of listaProductos){
    containerTarjetas.innerHTML += crearHTMLTarjeta(producto);
  }
}