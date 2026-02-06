document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. CONFIGURACIÓN: ¡PON TU NÚMERO AQUÍ! ---
    // Mantén el 51 adelante (código de Perú)
    const MI_WHATSAPP = "51964604628"; 

    // --- 2. TUS PRODUCTOS ---
    const productos = [
        // SACOS
        { nombre: "Azúcar Andahuasi (50kg)", precio: 119.00, cat: "Sacos", img: "azucar-andahuasi.jpg" },
        { nombre: "Harina Doña Angélica (50kg)", precio: 108.00, cat: "Sacos", img: "harina-angelica.jpg" },
        { nombre: "Arroz Costeño (50kg)", precio: null, cat: "Sacos", img: "arroz-costeno.jpg" },

        // ACEITES
        { nombre: "Aceite Miramar (Caja 12unid)", precio: 64.00, cat: "Aceites", img: "aceite-miramar.jpg" },
        { nombre: "Aceite Friemass (Caja 12unid)", precio: 64.00, cat: "Aceites", img: "aceite-friemass.jpg" },
        { nombre: "Aceite Bucanero (Caja 12unid)", precio: 57.00, cat: "Aceites", img: "aceite-bucanero.jpg" },

        // FIDEOS ANITA
        { nombre: "Spaghetti Anita (10kg)", precio: 31.00, cat: "Fideos", img: "spaghetti-anita.jpg" },
        { nombre: "Codo Rayado Anita (5kg)", precio: 15.50, cat: "Fideos", img: "codo-anita.jpg" },
        { nombre: "Canuto Rayado Anita (5kg)", precio: 15.50, cat: "Fideos", img: "canuto-anita.jpg" },
        { nombre: "Plumita Anita (5kg)", precio: 15.50, cat: "Fideos", img: "plumita-anita.jpg" },
        { nombre: "Cabello de Ángel (5kg)", precio: 15.50, cat: "Fideos", img: "cabello-angel.jpg" },
        
        // OTROS
        { nombre: "Leche Gloria (Lata)", precio: null, cat: "Lácteos", img: "leche-gloria.jpg" },
        { nombre: "Sal Marina (250g)", precio: null, cat: "Abarrotes", img: "sal-marina.jpg" }
    ];

    const contenedor = document.getElementById('grid-productos');
    
    if(contenedor) {
        contenedor.innerHTML = ''; 

        productos.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${index * 0.1}s`;

            // Lógica de precio
            const precioMostrado = p.precio ? `S/ ${p.precio.toFixed(2)}` : "Consultar";
            // Preparamos el precio para enviarlo a la función (si es null enviamos 0)
            const precioParaFuncion = p.precio ? p.precio : 0;

            card.innerHTML = `
                <div style="position:relative;">
                    <span class="cat-badge">${p.cat}</span>
                    <img src="${p.img}" onerror="this.src='https://via.placeholder.com/300x250?text=Sin+Imagen'" alt="${p.nombre}">
                </div>
                <div class="info">
                    <h3 class="name">${p.nombre}</h3>
                    <div class="price" style="${!p.precio ? 'color:#FF6600' : ''}">${precioMostrado}</div>
                    
                    <button class="btn-wsp" onclick="enviarPedido('${p.nombre}', ${precioParaFuncion})">
                        <i class="fa-brands fa-whatsapp"></i> PEDIR AHORA
                    </button>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }
    
    // --- 3. FUNCIÓN DE ENVÍO ---
    // Esta función se activa cuando hacen clic en el botón
    window.enviarPedido = function(producto, precio) {
        let mensaje;
        
        if (precio > 0) {
            // Si el producto tiene precio fijo
            mensaje = `Hola Distribuidora Muñoz, deseo hacer un pedido:
📦 *Producto:* ${producto}
💰 *Precio:* S/ ${precio.toFixed(2)}

Quedo a la espera de su confirmación.`;
        } else {
            // Si el producto es "Consultar" (como el arroz)
            mensaje = `Hola Distribuidora Muñoz, deseo cotizar el precio actual de:
📦 *Producto:* ${producto}

¿Me podrían indicar el precio por mayor?`;
        }

        // Abre WhatsApp con el mensaje listo
        const url = `https://wa.me/${MI_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };
});
