const CATEGORIAS_PERMITIDAS = ["men's clothing", "women's clothing", "jewelery"];

export function filtrarRopaYJoyeria(listaProductos) {
  return listaProductos.filter(producto =>
    CATEGORIAS_PERMITIDAS.includes(producto.category)
  );
}
export function filtrarPorCategoria(listaProductos, categoria){
  if(categoria === 'todos') return listaProductos;

  return listaProductos.filter(producto => producto.category === categoria);
}

export function filtrarPorNombre(listaProductos, texto){
  if(texto === '') return listaProductos;

  return listaProductos.filter(producto =>
    producto.title.toLowerCase().includes(texto)
  );
}

const formatoUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export function formatearPrecio(precio){
  return formatoUSD.format(precio);
}