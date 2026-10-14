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