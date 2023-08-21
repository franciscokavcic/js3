const VALOR_KM = 10; // Valor en pesos argentinos por kilómetro
const IVA = 0.21; // 21% de IVA

// Array con información de las provincias 
const provinciasArgentinas = [
  { nombre: "Buenos Aires", distanciaDesdeCABA: 0 },
  { nombre: "CABA (Ciudad Autónoma de Buenos Aires)", distanciaDesdeCABA: 0 },
  { nombre: "Catamarca", distanciaDesdeCABA: 1144 },
  { nombre: "Chaco", distanciaDesdeCABA: 1003 },
  { nombre: "Chubut", distanciaDesdeCABA: 1426 },
  { nombre: "Córdoba", distanciaDesdeCABA: 695 },
  { nombre: "Corrientes", distanciaDesdeCABA: 886 },
  { nombre: "Entre Ríos", distanciaDesdeCABA: 469 },
  { nombre: "Formosa", distanciaDesdeCABA: 1109 },
  { nombre: "Jujuy", distanciaDesdeCABA: 1644 },
  { nombre: "La Pampa", distanciaDesdeCABA: 623 },
  { nombre: "La Rioja", distanciaDesdeCABA: 1093 },
  { nombre: "Mendoza", distanciaDesdeCABA: 1030 },
  { nombre: "Misiones", distanciaDesdeCABA: 1033 },
  { nombre: "Neuquén", distanciaDesdeCABA: 1215 },
  { nombre: "Río Negro", distanciaDesdeCABA: 1218 },
  { nombre: "Salta", distanciaDesdeCABA: 1556 },
  { nombre: "San Juan", distanciaDesdeCABA: 1124 },
  { nombre: "San Luis", distanciaDesdeCABA: 845 },
  { nombre: "Santa Cruz", distanciaDesdeCABA: 2721 },
  { nombre: "Santa Fe", distanciaDesdeCABA: 472 },
  { nombre: "Santiago del Estero", distanciaDesdeCABA: 946 },
  { nombre: "Tierra del Fuego", distanciaDesdeCABA: 3080 },
  { nombre: "Tucumán", distanciaDesdeCABA: 1187 }
];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para calcular el costo total de un viaje a una provincia e incluyendo IVA
function calcularCostoTotal(distanciaDesdeCABA, cantidadPersonas) {
  const costoViaje = distanciaDesdeCABA * VALOR_KM * cantidadPersonas;
  const costoConIVA = costoViaje * (1 + IVA);
  return {
    costoViaje: costoViaje.toFixed(2),
    costoIVA: (costoViaje * IVA).toFixed(2),
    costoTotalConIVA: costoConIVA.toFixed(2),
  };
}

// Función para mostrarlos en el textarea
function actualizarCostos() {
  const cantidadPersonas = parseInt(document.getElementById("cantidadPersonas").value);
  const provinciaSeleccionada = document.getElementById("provincias-select").value;
  const resultadoTextarea = document.getElementById("resultado");
  const detalleCostosTextarea = document.getElementById("detalleCostos");

  let resultado = "Costo de Viaje:\n";
  let detalleCostos = "Detalle de Costos:\n";

  provinciasArgentinas.forEach((provincia) => {
    if (provincia.nombre === provinciaSeleccionada) {
      const { costoViaje, costoIVA, costoTotalConIVA } = calcularCostoTotal(provincia.distanciaDesdeCABA, cantidadPersonas);
      resultado += `Provincia: ${provincia.nombre} - Costo total del viaje: $${costoTotalConIVA}\n`;

      detalleCostos += `Provincia: ${provincia.nombre}\n`;
      detalleCostos += `Distancia desde CABA: ${provincia.distanciaDesdeCABA} km\n`;
      detalleCostos += `Costo del viaje por km: $${VALOR_KM}\n`;
      detalleCostos += `Costo del viaje (sin IVA) para ${cantidadPersonas} personas: $${costoViaje}\n`;
      detalleCostos += `Valor del IVA (21%): $${costoIVA}\n`;
      detalleCostos += `Costo total del viaje (con IVA): $${costoTotalConIVA}\n\n`;
    }
  });

  resultadoTextarea.value = resultado;
  detalleCostosTextarea.value = detalleCostos;
}

// Generar la lista de provincias en el HTML
const provinciasSelect = document.getElementById("provincias-select");
provinciasArgentinas.forEach((provincia) => {
  const optionItem = document.createElement("option");
  optionItem.textContent = provincia.nombre;
  provinciasSelect.appendChild(optionItem);
});
/*
// Función para almacenar el detalle de costos en localStorage solo para el ultimo storage
function guardarDatosBack() {
  const dtcostos = document.getElementById('detalleCostos');
  const datos = dtcostos.value;
  localStorage.setItem('misDatos', datos);
  const historicoTextarea = document.getElementById("historico");
  historicoTextarea.value = datos;

}
function recuperarDatosBack() {
  const datalleguardado = localStorage.getItem('misDatos');
  const historicotxtare = document.getElementById('historico');
  //historicotxtare.value = datalleguardado;

  if (datalleguardado) {
    historicotxtare.textContent = `Datos guardados: ${datalleguardado}`;
  } else {
    historicotxtare.textContent = 'No hay datos guardados.';
  }
}*/

  function guardarDatos() {
    const inputElement = document.getElementById('detalleCostos');
    const nuevoElemento = inputElement.value.trim();
  
    if (nuevoElemento !== '') {
      // Obtiene los elementos ya guardados o crea un array vacío
      const elementosGuardados = JSON.parse(localStorage.getItem('misElementos')) || [];
  
      // Agrega el nuevo elemento al array
      elementosGuardados.push(nuevoElemento);
  
      // Guarda el array actualizado en el almacenamiento local
      localStorage.setItem('misElementos', JSON.stringify(elementosGuardados));
      
      const historicoTextarea = document.getElementById("historico");
      historicoTextarea.value = `\n\n************\n\n ${elementosGuardados}`;
      
    }
  }

  function recuperarDatos() {
    const elementosGuardados = JSON.parse(localStorage.getItem('misElementos'));
    const listaElement = document.getElementById('elementosLista');
    
    listaElement.innerHTML = '';
  
    if (elementosGuardados && elementosGuardados.length > 0) {
      elementosGuardados.forEach(elemento => {
        const listItem = document.createElement('li');
        listItem.textContent = elemento;
        listaElement.appendChild(listItem);
      });
    } else {
      listaElement.textContent = 'No hay elementos guardados.';
    }
  }








