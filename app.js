// Variables globales
let pesoInicial = null;
let puntosGanados = 0;
let totalItems = 0;

// Datos para retos diarios
const retosDiarios = {
    "Día 1": {
        comida: ["Pollo a la plancha con boniato y espinacas"],
        snack: ["Yogur griego natural con nueces"],
        cena: ["Merluza al horno con ensalada 4 estaciones"],
        ejercicio: ["Flexiones inclinadas (3x8)", "Remo inclinado con apoyo (3x12)"]
    },
    "Día 2": {
        comida: ["Salteado de pollo con calabacín y zanahorias"],
        snack: ["Yogur griego natural con pipas de girasol"],
        cena: ["Salmón a la plancha con puré de calabaza"],
        ejercicio: ["Press de pecho con mancuernas (3x12)", "Remo con banda (3x12)"]
    },
    "Día 3": {
        comida: ["Merluza al horno con boniato y espárragos al vapor"],
        snack: ["Fruta fresca con nueces"],
        cena: ["Atún a la plancha con ensalada mixta (pepino, tomate y hojas verdes)"],
        ejercicio: ["Sentadillas (3x15)", "Plancha abdominal (3x30 seg)"]
    },
    "Día 4": {
        comida: ["Pollo al horno con calabaza asada y espinacas"],
        snack: ["Yogur griego natural con pipas de girasol"],
        cena: ["Merluza al vapor con calabacín salteado y zanahorias"],
        ejercicio: ["Zancadas (3x12)", "Flexiones inclinadas (3x10)"]
    },
    "Día 5": {
        comida: ["Salmón al horno con boniato y ensalada 4 estaciones"],
        snack: ["Batido de frutas con yogur griego y nueces"],
        cena: ["Pollo a la plancha con espárragos al vapor y calabacín asado"],
        ejercicio: ["Cardio HIIT (20 minutos)", "Plancha abdominal (3x40 seg)"]
    },
    "Día 6": {
        comida: ["Pollo al curry con puré de calabaza y zanahorias"],
        snack: ["Yogur griego natural con pipas de girasol"],
        cena: ["Atún al horno con ensalada mixta (pepino, tomate y hojas verdes)"],
        ejercicio: ["Sentadillas con salto (3x12)", "Flexiones con rodillas apoyadas (3x8)"]
    },
    "Día 7": {
        comida: ["Merluza al horno con boniato y espinacas salteadas"],
        snack: ["Fruta fresca con yogur griego y nueces"],
        cena: ["Salmón a la parrilla con espárragos al vapor y puré de calabaza"],
        ejercicio: ["Caminata rápida (30 minutos)", "Estiramientos (10 minutos)"]
    }
};

// Actualizar el contador de puntos
function actualizarPuntos() {
    document.getElementById("contador-puntos").textContent = puntosGanados;
    document.getElementById("total-puntos").textContent = totalItems;
}

// Navegación entre pantallas
function mostrarPantalla(idPantalla) {
    document.querySelectorAll(".pantalla").forEach((pantalla) => {
        pantalla.classList.remove("active");
    });
    document.getElementById(idPantalla).classList.add("active");
}

// Generar plan diario dinámicamente
function cargarPlanDiario() {
    const diaContainer = document.getElementById("dia-container");
    diaContainer.innerHTML = ""; // Limpia el contenedor

    Object.keys(retosDiarios).forEach((dia, index) => {
        const diaDiv = document.createElement("div");
        diaDiv.className = "dia";

        const diaHeader = document.createElement("h3");
        diaHeader.textContent = dia;
        diaHeader.addEventListener("click", () => {
            diaContent.classList.toggle("active");
        });

        const diaContent = document.createElement("div");
        diaContent.className = `dia-content ${index === 0 ? "active" : ""}`; // Desplegar solo el Día 1 al inicio

        ["comida", "snack", "cena", "ejercicio"].forEach((categoria) => {
            const retoDiv = document.createElement("div");
            retoDiv.className = "reto";

            const retoHeader = document.createElement("h4");
            retoHeader.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
            retoDiv.appendChild(retoHeader);

            const retoList = document.createElement("ul");
            retoList.className = "reto-list";

            retosDiarios[dia][categoria].forEach((item) => {
                const li = document.createElement("li");

                // Checkbox
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";

                checkbox.addEventListener("change", () => {
                    if (checkbox.checked) {
                        puntosGanados++;
                    } else {
                        puntosGanados--;
                    }
                    actualizarPuntos();
                });

                // Texto
                const text = document.createElement("span");
                text.textContent = item;

                li.appendChild(checkbox);
                li.appendChild(text);
                retoList.appendChild(li);

                // Incrementar total de items
                totalItems++;
            });

            retoDiv.appendChild(retoList);
            diaContent.appendChild(retoDiv);
        });

        diaDiv.appendChild(diaHeader);
        diaDiv.appendChild(diaContent);
        diaContainer.appendChild(diaDiv);
    });

    // Actualizar puntos al inicio
    actualizarPuntos();
}

// Eventos
document.getElementById("comenzar-reto").addEventListener("click", () => {
    pesoInicial = parseFloat(document.getElementById("peso-inicial-input").value);
    if (!isNaN(pesoInicial) && pesoInicial > 0) {
        mostrarPantalla("pantalla-plan");
        cargarPlanDiario();
    } else {
        alert("Por favor, introduce un peso válido.");
    }
});

document.getElementById("ver-resumen").addEventListener("click", () => {
    mostrarPantalla("pantalla-resumen");
});

document.getElementById("volver-plan").addEventListener("click", () => {
    mostrarPantalla("pantalla-plan");
});
