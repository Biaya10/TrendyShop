const CLAVE_CARRITO = "carritoCompras";
const RUTA_CARRITO = "vistas/carrito_compras.html";


function leerCarrito() {
    try {
        const datos = localStorage.getItem(CLAVE_CARRITO);
        const carrito = datos ? JSON.parse(datos) : [];

        return Array.isArray(carrito) ? carrito : [];
    } catch (error) {
        console.error("No se pudo leer el carrito:", error);
        return [];
    }
}


function guardarCarrito(carrito) {
    try {
        localStorage.setItem(
            CLAVE_CARRITO,
            JSON.stringify(carrito)
        );

        actualizarContador();
        renderizarCarrito();
    } catch (error) {
        console.error("No se pudo guardar el carrito:", error);
        alert("No fue posible guardar el carrito en este navegador.");
    }
}



function formatearPrecio(valor) {
    return "COL$ " + Number(valor).toLocaleString("es-CO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


function escaparHTML(valor) {
    return String(valor ?? "").replace(/[&<>"']/g, caracter => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[caracter]);
}


function actualizarContador() {
    const contador = document.getElementById("cart-count");

    if (!contador) return;

    const carrito = leerCarrito();

    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    contador.textContent = cantidadTotal;
}


function renderizarCarrito() {
    const lista = document.getElementById("listaCarrito");


    if (!lista) return;

    const carrito = leerCarrito();

    const cantidadElemento =
        document.getElementById("cantidadCarrito");

    const subtotalElemento =
        document.getElementById("subtotalCarrito");

    const totalElemento =
        document.getElementById("totalCarrito");

    const botonCompra =
        document.getElementById("btnContinuarCompra");

    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    const subtotal = carrito.reduce(
        (total, producto) => total + producto.price * producto.cantidad,
        0
    );

    if (cantidadElemento) {
        cantidadElemento.textContent = cantidadTotal;
    }

    if (subtotalElemento) {
        subtotalElemento.textContent = formatearPrecio(subtotal);
    }

    if (totalElemento) {
        totalElemento.textContent = formatearPrecio(subtotal);
    }

    if (botonCompra) {
        botonCompra.disabled = carrito.length === 0;
    }

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="carrito-vacio">
                <i class="ri-shopping-bag-3-line fs-1"></i>
                <h6 class="mt-3">Tu carrito está vacío</h6>
                <p class="small">
                    Agrega productos desde nuestro catálogo.
                </p>
            </div>
        `;

        return;
    }

    lista.innerHTML = carrito.map(producto => `
        <article class="carrito-producto">

            <img
                src="${escaparHTML(producto.image)}"
                alt="${escaparHTML(producto.title)}"
                loading="lazy"
            >

            <div class="carrito-producto-info">

                <div class="d-flex justify-content-between gap-2">
                    <h6 class="carrito-producto-titulo">
                        ${escaparHTML(producto.title)}
                    </h6>

                    <button
                        type="button"
                        class="btn btn-sm text-danger p-0"
                        data-accion="eliminar"
                        data-id="${escaparHTML(producto.id)}"
                        aria-label="Eliminar producto"
                        title="Eliminar producto"
                    >
                        <i class="ri-delete-bin-line"></i>
                    </button>
                </div>

                <p class="carrito-producto-precio">
                    ${formatearPrecio(producto.price)}
                </p>

                <div class="d-flex justify-content-between
                            align-items-center gap-2">

                    <div class="carrito-cantidad">
                        <button
                            type="button"
                            data-accion="disminuir"
                            data-id="${escaparHTML(producto.id)}"
                            aria-label="Disminuir cantidad"
                        >−</button>

                        <span>${producto.cantidad}</span>

                        <button
                            type="button"
                            data-accion="aumentar"
                            data-id="${escaparHTML(producto.id)}"
                            aria-label="Aumentar cantidad"
                        >+</button>
                    </div>

                    <strong>
                        ${formatearPrecio(
        producto.price * producto.cantidad
    )}
                    </strong>

                </div>
            </div>
        </article>
    `).join("");
}

// Agregar un producto desde el catálogo.
// Se puede llamar desde cualquier archivo JavaScript.
window.agregarAlCarrito = function (producto) {
    if (
        !producto ||
        producto.id == null ||
        !Number.isFinite(Number(producto.price)) ||
        Number(producto.price) < 0
    ) {
        console.error("Los datos del producto no son válidos.");
        return;
    }

    const carrito = leerCarrito();

    const existente = carrito.find(
        item => String(item.id) === String(producto.id)
    );

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            title: String(producto.title ?? "Producto"),
            price: Number(producto.price),
            image: String(producto.image ?? ""),
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
};


document.addEventListener("click", function (evento) {
    const boton = evento.target.closest("[data-accion]");

    if (!boton) return;

    const accion = boton.dataset.accion;
    const id = boton.dataset.id;

    const carrito = leerCarrito();

    const producto = carrito.find(
        item => String(item.id) === String(id)
    );

    if (!producto) return;

    if (accion === "aumentar") {
        producto.cantidad += 1;
    }

    if (accion === "disminuir") {
        producto.cantidad -= 1;
    }

    const carritoActualizado = carrito.filter(
        item => item.cantidad > 0
    );

    if (accion === "eliminar") {
        guardarCarrito(
            carrito.filter(item => String(item.id) !== String(id))
        );
        return;
    }

    guardarCarrito(carritoActualizado);
});


let instanciaCarrito = null;
let promesaCargaCarrito = null;

async function cargarPanelCarrito() {
    if (instanciaCarrito) {
        return instanciaCarrito;
    }

    if (promesaCargaCarrito) {
        return promesaCargaCarrito;
    }

    promesaCargaCarrito = (async () => {
        const contenedor = document.getElementById(
            "contenedorCarrito"
        );

        if (!contenedor) {
            throw new Error(
                "No existe el contenedor del carrito en index.html."
            );
        }

        const respuesta = await fetch(RUTA_CARRITO);

        if (!respuesta.ok) {
            throw new Error(
                `No se pudo cargar el carrito: ${respuesta.status}`
            );
        }

        contenedor.innerHTML = await respuesta.text();

        const panel = document.getElementById("panelCarrito");

        if (!panel || !window.bootstrap?.Offcanvas) {
            throw new Error(
                "No se encontró el panel o Bootstrap Offcanvas."
            );
        }

        instanciaCarrito =
            window.bootstrap.Offcanvas.getOrCreateInstance(panel);

        renderizarCarrito();

        return instanciaCarrito;
    })();

    try {
        return await promesaCargaCarrito;
    } catch (error) {
        promesaCargaCarrito = null;
        console.error(error);
        throw error;
    }
}


document.addEventListener("click", async function (evento) {
    const boton = evento.target.closest("#abrirCarrito");

    if (!boton) return;

    evento.preventDefault();

    try {
        const panel = await cargarPanelCarrito();
        panel.toggle();
    } catch (error) {
        console.error("No se pudo abrir el carrito:", error);
    }
});


window.addEventListener("storage", function (evento) {
    if (evento.key === CLAVE_CARRITO) {
        actualizarContador();
        renderizarCarrito();
    }
});


actualizarContador();