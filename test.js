function agregarElemento() {
    const inputElement = document.getElementById('detalleCostos');
    const nuevoElemento = inputElement.value.trim();
  
    if (nuevoElemento !== '') {
      // Obtiene los elementos ya guardados o crea un array vacío
      const elementosGuardados = JSON.parse(localStorage.getItem('misElementos')) || [];
  
      // Agrega el nuevo elemento al array
      elementosGuardados.push(nuevoElemento);
  
      // Guarda el array actualizado en el almacenamiento local
      localStorage.setItem('misElementos', JSON.stringify(elementosGuardados));
  
      inputElement.value = '';
      
      const historicoTextarea = document.getElementById("historico");
      historicoTextarea.value = elementosGuardados;
    }
  }
  