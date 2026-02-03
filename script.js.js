document.addEventListener('DOMContentLoaded', function() {
    console.log("Iniciando carga de productos...");

    // BASE DE DATOS DE PRODUCTOS (Basado en tus imágenes)
    const productos = [
        // --- SACOS Y GRANOS ---
        { id: 1, nombre: "Azúcar Andahuasi (50kg)", cat: "Sacos", precio: 119.00, desc: "Rubia Doméstica", img: "azucar-andahuasi.jpg" },
        { id: 2, nombre: "Harina Doña Angélica (50kg)", cat: "Sacos", precio: 108.00, desc: "Especial panadería", img: "harina-angelica.jpg" },
        { id: 3, nombre: "Arroz Costeño (50kg)", cat: "Sacos", precio: null, desc: "Extra Graneado", img: "arroz-costeno.jpg" },
        
        // --- ACEITES ---
        { id: 4, nombre: "Aceite Miramar (12x900ml)", cat: "Aceites", precio: 64.00, desc: "Caja x 12 Unidades", img: "aceite-miramar.jpg" },
        { id: 5, nombre: "Aceite Bucanero (12x800ml)", cat: "Aceites", precio: 57.00, desc: "Caja x 12 Unidades", img: "aceite-bucanero.jpg" },
        { id: 6, nombre: "Aceite Friemass (12x900ml)", cat: "Aceites", precio: 64.00, desc: "Caja x 12 Unidades", img: "aceite-friemass.jpg" },

        // --- FIDEOS ANITA ---
        { id: 7, nombre: "Spaghetti Anita (10kg)", cat: "Pastas", precio: 31.00, desc: "Rinde más", img: "spaghetti-anita.jpg" },
        { id: 8, nombre: "Codo Rayado Anita (5kg)", cat: "Pastas", precio: 15.50, desc: "Cocción pareja", img: "codo-anita.jpg" },
        { id: 9, nombre: "Canuto Rayado Anita (5kg)", cat: "Pastas", precio: 15.50, desc: "Ideal gratinados", img: "canuto-anita.jpg" },
        { id: 10, nombre: "Cabello Angel Anita (5kg)", cat: "Pastas", precio: 15.50, desc: "Cocción rápida", img: "cabello-angel.jpg" },
        { id: 11, nombre: "Plumita Anita (5kg)", cat: "Pastas", precio: 15.50, desc: "No se rompe", img: "plumita-anita.jpg" },
        
        // --- VARIOS ---
        { id: 12, nombre: "Leche Gloria (Lata)", cat: "Lácteos", precio: null, desc: "Consultar x mayor", img: "leche-gloria.jpg" }
    ];

    const grid = document.getElementById('grid-productos');
    
    // Limpiamos el mensaje de "Cargando..."
    grid.innerHTML = '';

    // Generamos las tarjetas
    productos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';

        // Lógica de precio
        let precioHTML = p.precio ? `S/ ${p.precio.toFixed(2)}` : '<span style="color:#FF6600; font-size:1.1rem">Consultar</span>';

        // HTML de la tarjeta
        card.innerHTML = `
            <div class="card-img-container">
                <span class="badge">${p.cat}</span>
                <img src="${p.img}" alt="${p.nombre}" class="card-img" onerror="this.src='https://via.placeholder.com/300?text=Sin+Foto'">
            </div>
            <div class="card-body">
                <h3 class="card-title">${p.nombre}</h3>
                <p class="card-desc">${p.desc}</p>
                <div class="card-price">${precioHTML}</div>
                <button class="btn-whatsapp" onclick="pedir('${p.nombre}', ${p.precio})">
                    <i class="fa-brands fa-whatsapp"></i> Pedir
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
});

// Función de pedido fuera del evento de carga para que sea accesible
function pedir(producto, precio) {
    const telefono = "51999999999"; // ¡PON TU NÚMERO AQUÍ!
    let msj = precio 
        ? `Hola Distribuidora Muñoz, deseo el producto: ${producto} a S/${precio}.`
        : `Hola, deseo cotizar el producto: ${producto}.`;
    
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(msj)}`, '_blank');
}

}
