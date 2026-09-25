// =========================================

// ITERACIÓN 3.1

// =========================================
 
// Seleccionamos el botón

const botonEstadisticas = document.getElementById("btn-estadisticas");
 
// Seleccionamos el espacio de estadísticas

const estadisticas = document.getElementById("estadisticas");
 
 
// Al hacer clic en el botón,

// se muestran las estadísticas
 
botonEstadisticas.addEventListener("click", function () {
 
    estadisticas.textContent = "Carreras: 10 | Puntos: 250";
 
});
 