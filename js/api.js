const URL_API = 'https://fakestoreapi.com/products';

export async function buscarProductos() {
  try{
    const response =await fetch(URL_API)
    if (!response.ok) throw new Error('Error al conectar con la API');

    const listaProductos = await response.json();
    return listaProductos
  }catch (error) { 
        console.log('Hubo un error al buscar los productos: ', error.message);
        return [];
    }
}
