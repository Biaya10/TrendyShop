# TrendyShop 🛍️

Tienda en línea de ropa y accesorios para jóvenes, construida durante la **Hackathon 1** del bootcamp.

## 📌 El reto

TrendyShop fue una tienda muy popular en Colombia que entró en crisis en 2025 por tres razones:
la competencia de grandes plataformas, una mala experiencia de compra en línea y la desconfianza
de sus clientes en el canal digital.

Nuestro objetivo fue construir en 7 horas un ecommerce que ayude a **recuperar la confianza**:
información clara, un catálogo atractivo y un canal de contacto que sí responde.

## ✨ Funcionalidades

| Página | Qué hace | Estado |
|---|---|---|
| **Inicio** | Barra de navegación, banner de bienvenida y pie de página | ✅ Lista |
| **Catálogo** | Productos traídos de Fake Store API en tarjetas, filtro por categoría, buscador por nombre y precios con formato | ✅ Lista |
| **Quiénes Somos** | Historia de la marca y compromiso con los clientes, organizada en tarjetas | ✅ Lista |
| **Contáctanos** | Formulario con nombre, email y mensaje; valida campos vacíos y muestra un mensaje de confirmación | ✅ Lista |
| **Carrito** | Agregar productos, ver cantidad, precio unitario, subtotal y total, eliminar y guardar en `localStorage` | 🚧 En progreso |

Además:

- **Manejo de errores:** si la API no responde, se muestran productos de respaldo y un aviso al usuario.
- **Mensaje de carga** mientras se obtienen los productos.
- **Solo ropa y joyería:** se filtran los productos de la API que no corresponden a la tienda.
- **Diseño responsivo** con Bootstrap para celular, tablet y escritorio.

## 🛠️ Tecnologías

- HTML5
- CSS3 (variables de color en `root.css`)
- JavaScript ES6+ con módulos (`import` / `export`), `async/await` y `try/catch`
- Bootstrap 5
- [Fake Store API](https://fakestoreapi.com/)
- Git, GitHub y GitHub Projects (Scrum)

## 🚀 Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Biaya10/TrendyShop.git
   ```
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Instala la extensión **Live Server**.
4. Haz clic derecho sobre `index.html` → **Open with Live Server**.

> ⚠️ El catálogo usa módulos de JavaScript, por eso debe abrirse con Live Server
> (o publicado en GitHub Pages). Si se abre con doble clic, el navegador bloquea los módulos.

## 📁 Estructura del proyecto

```
TrendyShop/
├── index.html                # Página de inicio
├── vistas/
│   ├── catalogo.html         # Catálogo de productos
│   ├── quienes_somos.html    # Información de la tienda
│   ├── contactanos.html      # Formulario de contacto
│   └── carrito_compras.html  # Carrito de compras (en progreso)
├── estilos/
│   ├── root.css              # Variables: paleta de colores
│   └── style.css             # Estilos de navbar, banner, tarjetas y footer
├── js/
│   ├── main.js               # Controlador del catálogo
│   ├── api.js                # Conexión con Fake Store API
│   ├── dom.js                # Funciones que pintan en pantalla
│   ├── events.js             # Eventos del filtro y del buscador
│   ├── utils.js              # Filtros y formato de precios
│   ├── productos.js          # Productos de respaldo si falla la API
│   └── contactanos.js        # Validación del formulario
├── img/                      # Imágenes de productos
└── README.md
```

## 🧪 Pruebas realizadas

| # | Caso de prueba | Resultado esperado | ✔ |
|---|---|---|---|
| 1 | Abrir el catálogo | Aparece "Cargando productos…" y luego las tarjetas | ☐ |
| 2 | Desconectar internet y recargar el catálogo | Se ven los productos de respaldo y un aviso | ☐ |
| 3 | Filtrar por categoría | Solo se ven productos de esa categoría | ☐ |
| 4 | Escribir en el buscador | Solo se ven los productos cuyo nombre coincide | ☐ |
| 5 | Ver los precios | Todos con el mismo formato ($00.00) | ☐ |
| 6 | Enviar el formulario vacío | Los campos se marcan en rojo con su mensaje | ☐ |
| 7 | Enviar el formulario completo | Aparece el mensaje de confirmación y se limpia | ☐ |
| 8 | Navegar entre páginas desde el navbar | Todas las páginas abren correctamente | ☐ |
| 9 | Ver el sitio en celular | El menú se convierte en hamburguesa y las tarjetas se reacomodan | ☐ |

## 👥 Equipo

| Integrante | Rol | Responsabilidades |
|---|---|---|
| Amanda Chindoy | Scrum Master | Tablero, revisión de pull requests, README y despliegue |
| Laura Torres | Desarrolladora | Navbar, footer, página de inicio y paleta de colores |
| Juan (devdavco) | Desarrollador | Conexión con la API, mensaje de carga, respaldo, tarjetas, filtros, buscador y formato de precios |
| Darwin Noriega | Desarrollador | Catálogo y carrito de compras |
| Pedro Saravia | Desarrollador | Páginas Contáctanos y Quiénes Somos, pruebas |

## 📋 Metodología

Trabajamos con **Scrum** usando un tablero de GitHub Projects con las columnas
Backlog, To Do, In Progress, Code Review y Done.

- Cada integrante trabajó en su propia rama.
- Los cambios se integraron a la rama `dev` mediante pull requests revisados.
- Al final, `dev` se unió a `main` como versión de entrega.

**Tablero del proyecto:** https://github.com/users/Biaya10/projects/11
