const selectCategoria = document.getElementById('filtro-categoria');

export function configurarEventoFiltro(callback){
  selectCategoria.addEventListener('change', callback);
}

export function obtenerCategoriaSeleccionada(){
  return selectCategoria.value;
}