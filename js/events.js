const selectCategoria = document.getElementById('filtro-categoria');

export function configurarEventoFiltro(callback){
  selectCategoria.addEventListener('change', callback);
}

export function obtenerCategoriaSeleccionada(){
  return selectCategoria.value;
}

const formBuscar = document.getElementById('formBuscar');
const inputBuscar = document.getElementById('buscarProducto');

export function configurarEventoBuscar(callback){
  formBuscar.addEventListener('submit', (evento) => {
    evento.preventDefault();
    callback();
  });
}

export function obtenerTextoBusqueda(){
  return inputBuscar.value.trim().toLowerCase();
}