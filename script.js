document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. CONFIGURACIÓN: ¡PON TU NÚMERO AQUÍ! ---
    const MI_WHATSAPP = "51964604628"; 

    // --- 2. TUS PRODUCTOS ---
    const productos = [
        // SACOS
        { id: 1, nombre: "Azúcar Andahuasi (50kg)", precio: 119.00, cat: "Sacos", img: "azucar-andahuasi.jpg" },
        { id: 2, nombre: "Harina Doña Angélica (50kg)", precio: 108.00, cat: "Sacos", img: "harina-angelica.jpg" },
        { id: 3, nombre: "Arroz Costeño (50kg)", precio: null, cat: "Sacos", img: "arroz-costeno.jpg" },

        // ACEITES
        { id: 4, nombre: "Aceite Miramar (Caja 12unid)", precio: 64.00, cat: "Aceites", img: "aceite-miramar.jpg" },
        { id: 5, nombre: "Aceite Friemass (Caja 12unid)", precio: 64.00, cat: "Aceites", img: "aceite-friemass.jpg" },
        { id: 6, nombre: "Aceite Bucanero (Caja 12unid)", precio: 57.00, cat: "Aceites", img: "aceite-bucanero.jpg" },

        // FIDEOS Y OTROS
        { id: 7, nombre: "Spaghetti Anita (10kg)", precio: 31.00, cat: "Fideos", img: "spaghetti-anita.jpg" },
        { id: 8, nombre: "Codo Rayado Anita (5kg)", precio: 15.50, cat: "Fideos", img: "codo-anita.jpg" },
        { id: 9, nombre: "Canuto Rayado Anita (5kg)", precio: 15.50, cat: "Fideos", img: "canuto-anita.jpg" },
        { id: 10, nombre: "Plumita Anita (5kg)", precio: 15.50, cat: "Fideos", img: "plumita-anita.jpg" },
        { id: 11, nombre: "Cabello de Ángel (5kg)", precio: 15.50, cat: "Fideos", img: "cabello-angel.jpg" },
        { id: 12, nombre: "Leche Gloria (Lata)", precio: null, cat: "Lácteos", img: "leche-gloria.jpg" },
        { id: 13, nombre: "Sal Marina (250g)", precio: null, cat: "Abarrotes", img: "sal-marina.jpg" }
    ];

    const contenedor = document.getElementById('grid-productos');
    
    // VERIFICACIÓN DE SEGURIDAD
    if(contenedor) {
        contenedor.innerHTML = ''; // Esto BORRA el mensaje de "Cargando..."

        productos.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            // Pequeño retraso para que aparezcan en cascada (animación)
            card.style.animationDelay = `${index * 0.1}s`;

            // Lógica de precio visual
            const precioMostrado = p.precio ? `S/ ${p.precio.toFixed(2)}` : "Consultar";
            // Precio numérico para cálculos (0 si es consultar)
            const precioCalc = p.precio ? p.precio : 0;
            // ID único para el input de este producto
            const inputId = `cant-${p.id}`;

            card.innerHTML = `
                <div style="position:relative;">
                    <span class="cat-badge">${p.cat}</span>
                    <img src="${p.img}" onerror="this.src='https://via.placeholder.com/300x250?text=Sin+Imagen'" alt="${p.nombre}">
                </div>
                <div class="info">
                    <h3 class="name">${p.nombre}</h3>
                    <div class="price" style="${!p.precio ? 'color:#FF6600' : ''}">${precioMostrado}</div>
                    
                    <div class="controls">
                        <label>Cant:</label>
                        <input type="number" id="${inputId}" value="1" min="1" class="cant-input">
                    </div>

                    <button class="btn-wsp" onclick="enviarPedido('${p.nombre}', ${precioCalc}, '${inputId}')">
                        <i class="fa-brands fa-whatsapp"></i> PEDIR
                    </button>
                </div>
            `;
            contenedor.appendChild(card);
        });
    } else {
        console.error("ERROR: No se encontró la caja grid-productos en el HTML");
    }
    
    // --- 3. FUNCIÓN DE ENVÍO (CORREGIDA SIN SIGNOS RAROS) ---
    window.enviarPedido = function
