// Arreglo de productos
let productos = [
    {
        nombre: "Laptop",
        precio: 1200,
        descripcion: "Laptop para trabajo y estudio"
    },
    {
        nombre: "Celular",
        precio: 800,
        descripcion: "Teléfono inteligente de gama media"
    },
    {
        nombre: "Audífonos",
        precio: 150,
        descripcion: "Audífonos con cancelación de ruido"
    }
];

// Referencias al DOM
const lista = document.getElementById("listaProductos");
const boton = document.getElementById("btnAgregar");

// Función para renderizar la lista
function renderizarProductos() {
    lista.innerHTML = ""; // Limpiar lista

    productos.forEach(producto => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;

        lista.appendChild(li);
    });
}

// Evento para agregar un nuevo producto
boton.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Producto nuevo",
        precio: 100,
        descripcion: "Descripción del nuevo producto"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});

// Renderizar al cargar la página
renderizarProductos();
