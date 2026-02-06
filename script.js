document.addEventListener('DOMContentLoaded', function() {
    
    // 1. CONFIGURACIÓN: ¡PON TU NÚMERO AQUÍ!
    const MI_WHATSAPP = "51964604628"; 

    // 2. TUS PRODUCTOS
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
        { id: 10, nombre: "Leche Gloria (Lata)", precio: null, cat: "Lácteos", img: "leche-gloria.jpg" }
    ];

    const contenedor = document.getElementById('grid-productos');
    
    if(contenedor) {
        contenedor.innerHTML = ''; 

        productos.forEach((p) => {
            const card = document.createElement('div');
            card.className = 'card';
            
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
    }
    
    // --- FUNCIÓN DE ENVÍO MEJORADA ---
// --- FUNCIÓN DE ENVÍO CORREGIDA ---
    window.enviarPedido = function(producto, precio, inputId) {
        // Obtenemos la cantidad
        const cantidad = document.getElementById(inputId).value;
        
        // Calculamos total
        let totalTexto = "";
        if (precio > 0) {
            const total = (precio * cantidad).toFixed(2);
            totalTexto = "TOTAL A PAGAR: S/ " + total;
        } else {
            totalTexto = "Solicito cotización final.";
        }

        // Construimos el mensaje USANDO %0A para los saltos de línea (Más seguro)
        // Y usamos texto simple o emojis muy básicos
        let mensaje = "Hola Distribuidora Muñoz, deseo hacer un pedido:" + "%0A" +
                      "-----------------------------------" + "%0A" +
                      "PRODUCTO: " + producto + "%0A" +
                      "CANTIDAD: " + cantidad + "%0A" +
                      "PRECIO UNIT: S/ " + precio.toFixed(2) + "%0A" +
                      "-----------------------------------" + "%0A" +
                      "💰 " + totalTexto + "%0A" +
                      "%0A" +
                      "Quedo a la espera de confirmación.";

        // Abrir WhatsApp
        const url = `https://wa.me/${MI_WHATSAPP}?text=${mensaje}`;
        window.open(url, '_blank');
    };
