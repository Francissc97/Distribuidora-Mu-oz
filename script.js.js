// 1. Base de datos de tus productos REALES
const productos = [
    // --- SACOS Y GRANOS ---
    {
        id: 1,
        nombre: "Azúcar Andahuasi (Saco 50kg)",
        categoria: "Sacos",
        precio: 119.00,
        descripcion: "Rubia Doméstica",
        imagen: "azucar-andahuasi.jpg" 
    },
    {
        id: 2,
        nombre: "Harina Doña Angélica (Saco 50kg)",
        categoria: "Sacos",
        precio: 108.00,
        descripcion: "Especial para panadería",
        imagen: "harina-angelica.jpg"
    },
    {
        id: 3,
        nombre: "Arroz Costeño (Saco 50kg)",
        categoria: "Sacos",
        precio: null, // null indica que se debe consultar
        descripcion: "Extra Graneado",
        imagen: "arroz-costeno.jpg"
    },

    // --- ACEITES ---
    {
        id: 4,
        nombre: "Aceite Miramar (Caja 12 unid.)",
        categoria: "Aceites",
        precio: 64.00,
        descripcion: "Botellas de 900ml",
        imagen: "aceite-miramar.jpg"
    },
    {
        id: 5,
        nombre: "Aceite Bucanero (Caja 12 unid.)",
        categoria: "Aceites",
        precio: 57.00,
        descripcion: "Botellas de 800ml",
        imagen: "aceite-bucanero.jpg"
    },
    {
        id: 6,
        nombre: "Aceite Friemass (Caja 12 unid.)",
        categoria: "Aceites",
        precio: 64.00,
        descripcion: "Botellas de 900ml",
        imagen: "aceite-friemass.jpg"
    },

    // --- FIDEOS Y PASTAS (ANITA) ---
    {
        id: 7,
        nombre: "Fideo Spaghetti Anita (10kg)",
        categoria: "Fideos",
        precio: 31.00,
        descripcion: "Textura perfecta, rinde más",
        imagen: "spaghetti-anita.jpg"
    },
    {
        id: 8,
        nombre: "Codo Rayado Anita (5kg)",
        categoria: "Fideos",
        precio: 15.50,
        descripcion: "Cocción pareja",
        imagen: "codo-anita.jpg"
    },
    {
        id: 9,
        nombre: "Canuto Rayado Anita (5kg)",
        categoria: "Fideos",
        precio: 15.50,
        descripcion: "Ideal para gratinados",
        imagen: "canuto-anita.jpg"
    },
    {
        id: 10,
        nombre: "Cabello de Angel Anita (5kg)",
        categoria: "Fideos",
        precio: 15.50,
        descripcion: "Cocción rápida",
        imagen: "cabello-angel.jpg"
    },
    {
        id: 11,
        nombre: "Plumita Anita (5kg)",
        categoria: "Fideos",
        precio: 15.50,
        descripcion: "No se rompe",
        imagen: "plumita-anita.jpg"
    },
    {
        id: 12,
        nombre: "Corbata Anita (250g)",
        categoria: "Fideos",
        precio: 15.50, // Precio ajustado al paquete según imagen (revisar si es por paquete o fardo)
        descripcion: "Presentación atractiva",
        imagen: "corbata-anita.jpg"
    },
    
    // --- OTROS ---
    {
        id: 13,
        nombre: "Leche Gloria (Lata)",
        categoria: "Lácteos",
        precio: null,
        descripcion: "Consultar por mayor",
        imagen: "leche-gloria.jpg"
    }
];

// 2. Función para pintar los productos en el HTML
const grid = document.getElementById('grid-productos');

productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Lógica para mostrar precio o "Consultar"
    let precioTexto = "";
    if (producto.precio === null) {
        precioTexto = `<span style="color:orange">Consultar Precio</span>`;
    } else {
        precioTexto = `S/ ${producto.precio.toFixed(2)}`;
    }

    // Nota: Las imágenes deben estar en tu carpeta. Si no existen, saldrá un cuadro gris.
    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img" onerror="this.src='https://via.placeholder.com/300?text=Sin+Foto'">
        <div class="card-body">
            <span class="card-category">${producto.categoria}</span>
            <h3 class="card-title">${producto.nombre}</h3>
            <p style="font-size: 0.9rem; color: #555;">${producto.descripcion}</p>
            <p class="card-price">${precioTexto}</p>
            <button class="btn-whatsapp" onclick="pedirWsp('${producto.nombre}', ${producto.precio})">
                <i class="fa-brands fa-whatsapp"></i> Cotizar
            </button>
        </div>
    `;
    
    grid.appendChild(card);
});

// 3. Función para enviar a WhatsApp
function pedirWsp(nombre, precio) {
    const telefono = "51999999999"; // ¡COLOCA AQUÍ EL NÚMERO DE VENTAS DE DISTRIBUIDORA MUÑOZ!
    
    let mensaje = "";
    if (precio) {
        mensaje = `Hola Distribuidora Muñoz, deseo pedir: ${nombre} a S/ ${precio}. ¿Tienen stock?`;
    } else {
        mensaje = `Hola Distribuidora Muñoz, deseo cotizar el precio actual de: ${nombre}.`;
    }
    
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}