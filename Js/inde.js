function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    var resultado;
  
    if (isNaN(num1) || isNaN(num2)) {
      error("Por favor, ingrese un número válido.")
      
      return;
  
    } else {
      resultado = num1 * num2;
    }
    document.getElementById("textP").textContent = "El Area del Rectangulo Es: " + resultado;
  };
  
  function error(text) {
    Swal.fire({
        icon: "error",
        title: "Error en la Operacion",
        text: text
    });
  }
  
  
  function limpiarFormulario() {
    document.getElementById("num1").value = " ";
    document.getElementById("num2").value = " ";
  
  }