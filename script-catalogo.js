
console.log('script-catalogo.js se está ejecutando');

document.addEventListener('DOMContentLoaded', function () {

    // para conectar con enlaces del navbar de catalogo
    const enlaces = document.querySelectorAll(
        '#navbarSupportedContent a[data-categoria]'
    );

    // secciones del catalogo
    const categorias = document.querySelectorAll('.categoria');

    // clic en los enlaces de las categorias
    enlaces.forEach(function (enlace) {

        enlace.addEventListener('click', function (evento) {

            evento.preventDefault();

            // categoria seleccionada cuando se le de clic y aparezca en el contendor 
            const idCategoria = this.dataset.categoria;
            const seccion = document.getElementById(idCategoria);

            // Comprobar que la sección exista
            if (!seccion) {
                console.error(
                    'No existe la sección: ' + idCategoria
                );
                return;
            }

            // Ocultar todas las categorias
            categorias.forEach(function (categoria) {
                categoria.classList.add('d-none');
            });

            // Mostrar la categoria seleccionada
            seccion.classList.remove('d-none');

            // Quitar el estado activo de todos los enlaces
            enlaces.forEach(function (item) {
                item.classList.remove('active');
                item.removeAttribute('aria-current');
            });

            // Activar el enlace seleccionado
            this.classList.add('active');
            this.setAttribute('aria-current', 'page');

        });

    });

});


