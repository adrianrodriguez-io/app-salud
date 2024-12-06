// Datos del plan
// Datos
const comidas = [
    { dia: "Lunes", comida: "Pollo a la plancha (200 g), arroz integral (100 g cocido), brócoli al vapor (150 g)." },
    { dia: "Martes", comida: "Pollo al curry (200 g), quinoa cocida (100 g), espinacas salteadas (150 g)." },
    { dia: "Miércoles", comida: "Pescado blanco al horno (200 g), batata cocida (150 g), zanahorias al vapor (150 g)." },
    { dia: "Jueves", comida: "Pollo a la plancha (200 g), arroz integral (100 g cocido), brócoli al vapor (150 g)." },
    { dia: "Viernes", comida: "Pollo al horno con especias (200 g), lentejas cocidas (120 g), espinacas al vapor (150 g)." },
    { dia: "Sábado", comida: "Pollo a la parrilla (200 g), puré de calabaza (150 g), espárragos al vapor (150 g)." },
    { dia: "Domingo", comida: "Salmón a la parrilla (200 g), arroz integral (100 g cocido), brócoli al vapor (150 g)." }
];

const snacks = [
    { dia: "Lunes", snack: "Yogur griego natural (150 g) + 1 puñado pequeño de nueces o almendras (15-20 g)." },
    { dia: "Martes", snack: "Yogur griego natural (150 g) + 1 puñado pequeño de nueces o almendras (15-20 g)." },
    { dia: "Miércoles", snack: "Yogur griego natural (150 g) + 1 puñado pequeño de nueces o almendras (15-20 g)." },
    { dia: "Jueves", snack: "Yogur griego natural (150 g) + 1 puñado pequeño de nueces o almendras (15-20 g)." },
    { dia: "Viernes", snack: "Yogur griego natural (150 g) + 1 puñado pequeño de nueces o almendras (15-20 g)." },
    { dia: "Sábado", snack: "Yogur griego natural (150 g) + 1 puñado pequeño de nueces o almendras (15-20 g)." },
    { dia: "Domingo", snack: "Yogur griego natural (150 g) + 1 puñado pequeño de nueces o almendras (15-20 g)." }
];

const cenas = [
    { dia: "Lunes", cena: "Pollo al horno (150 g), calabacines a la plancha (150 g), ensalada mixta con hojas verdes y limón." },
    { dia: "Martes", cena: "Pescado blanco (150 g), berenjenas al horno (150 g), espinacas salteadas." },
    { dia: "Miércoles", cena: "Tortilla de 2 huevos + 2 claras con espinacas, ensalada de rúcula y tomate." },
    { dia: "Jueves", cena: "Pollo a la plancha (150 g), champiñones y calabacines salteados (150 g)." },
    { dia: "Viernes", cena: "Merluza al horno (150 g), espárragos al vapor (150 g), ensalada de rúcula y tomate." },
    { dia: "Sábado", cena: "Pollo a la plancha (150 g), zanahorias al vapor (150 g), ensalada mixta." },
    { dia: "Domingo", cena: "Salmón al horno (150 g), brócoli al vapor (150 g), ensalada de pepino y tomate." }
];


// Función para renderizar un ítem genérico
function renderItem(listId, items, itemType) {
    const list = document.getElementById(listId);

    items.forEach((item) => {
        const li = document.createElement("li");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Texto
        const text = document.createElement("span");
        text.className = "item-text";
        text.textContent = `${item.dia}: ${item[itemType]}`;

        // Cambiar estilo al marcar el checkbox
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                text.classList.add("checked");
            } else {
                text.classList.remove("checked");
            }
        });

        // Estructura
        li.appendChild(checkbox);
        li.appendChild(text);
        list.appendChild(li);
    });
}

// Renderizar las comidas principales, snacks y cenas
renderItem("comidas", comidas, "comida");
renderItem("snack-list", snacks, "snack");
renderItem("dinner-list", cenas, "cena");

const ejercicios = [
    {
        dia: "Lunes",
        ejercicios: [
            "Flexiones inclinadas (3x8-12) o con las rodillas apoyadas",
            "Remo inclinado con apoyo (3x12-15)"
        ]
    },
    {
        dia: "Miércoles",
        ejercicios: [
            "Press de pecho con mancuernas (3x12)",
            "Remo con banda elástica o mancuernas (3x12)"
        ]
    },
    {
        dia: "Viernes",
        ejercicios: [
            "Cardio HIIT (20 minutos): 30 segundos de marcha rápida o trote suave + 30 segundos de descanso, repetido en intervalos"
        ]
    },
    {
        dia: "Domingo",
        ejercicios: [
            "Sentadillas (sin peso, 3x12)",
            "Flexiones inclinadas (3x8-12)",
            "Remo con banda elástica o apoyo (3x12)"
        ]
    }
];


const ejerciciosList = document.getElementById("ejercicios-list");

ejercicios.forEach((item) => {
    const li = document.createElement("li");

    // Encabezado con el día
    const dayHeader = document.createElement("h4");
    dayHeader.textContent = item.dia;

    // Lista de ejercicios
    const exerciseList = document.createElement("ul");
    item.ejercicios.forEach((ejercicio) => {
        const exerciseItem = document.createElement("li");

        // Checkbox para marcar como completado
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Texto del ejercicio
        const exerciseText = document.createElement("span");
        exerciseText.textContent = ejercicio;

        // Estructura
        exerciseItem.appendChild(checkbox);
        exerciseItem.appendChild(exerciseText);
        exerciseList.appendChild(exerciseItem);

        // Cambiar estilo al marcar como completado
        checkbox.addEventListener("change", () => {
            exerciseText.classList.toggle("checked", checkbox.checked);
        });
    });

    li.appendChild(dayHeader);
    li.appendChild(exerciseList);
    ejerciciosList.appendChild(li);
});


// Seguimiento del peso
const pesoActual = document.getElementById("peso-actual");
const registrarPesoBtn = document.getElementById("registrar-peso");

registrarPesoBtn.addEventListener("click", () => {
    const nuevoPeso = prompt("Introduce tu nuevo peso:");
    if (nuevoPeso) {
        pesoActual.textContent = `${nuevoPeso} kg`;
        localStorage.setItem("pesoActual", nuevoPeso);
    }
});

// Cargar peso desde almacenamiento local
document.addEventListener("DOMContentLoaded", () => {
    const pesoGuardado = localStorage.getItem("pesoActual");
    if (pesoGuardado) {
        pesoActual.textContent = `${pesoGuardado} kg`;
    }
});


if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./sw.js")
        .then((registration) => {
            console.log("Service Worker registrado con éxito:", registration.scope);
        })
        .catch((error) => {
            console.error("Error al registrar el Service Worker:", error);
        });
}