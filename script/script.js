/*
Nombre: Jeison Romero
Github Romero66

Taller primera entrega Divisas 
*/


// Primer paso inicializar las Variables a usar. 
let fragmenIngreso  = document.createDocumentFragment();
let fragmenSalida = document.createDocumentFragment();
let opcionDivisasUno = document.getElementById('primerOpcion');
let opcionDivisasDos = document.getElementById('segundaOpcion');
let resultadoDivisa = document.getElementById('resultado');
// Se aplica funcion Array para almacena el tipo de moneda y su valor

let  moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
// Valores de cada tipo de moneda con  su respetivo valor
const valorMonedasEnDolar = [0, 1, 20.59, 4014.18, 0.88, 0.74];
const valorMonedaEnMex = [0, 0.04, 1, 194.86, 0.04, 0.03]; 
const valorMonedaEnCop =[0, 0.0003, 0.0052, 1, 0.0002, 0.00019];
const valorMonedaEnEur = [0, 1.13, 23.34, 4583.43, 1, 0.84];
const valorMonedaEnGbp = [0, 1.34, 27.76, 5449.49, 1];


// Ojo con esto se hace Uso del ForEach para recorrer la primera opcion de divisa
moneda.forEach(element => {
    let optionInreso = document.createElement('Option');
    optionInreso.textContent = element;
    fragmenIngreso.appendChild(optionInreso);
    
    // Ojo con esto se hace Uso del ForEach para recorrer la segunda opcion de divisa

    let optionSalida = document.createElement('Option');
    optionSalida.textContent = element;
    fragmenSalida.appendChild(optionSalida);
});


opcionDivisasUno.appendChild(fragmenIngreso);
opcionDivisasDos.appendChild(fragmenSalida);

//declaro variables y utilizo el botón convertir
let convertir = document.getElementById('convierte');

let loginForm = document.getElementById('form');
loginForm.addEventListener("submit", calcularConversion);

// Creacion de las funciones

function calcularConversion(e) {
  e.preventDefault();

  let formData = new FormData(e.target);
  let formValues = Object.fromEntries(formData);
  let cantidad = parseFloat(formValues.dinero);
  let primerOpcion = formValues.primerOpcion;
  let segundaOpcion = formValues.segundaOpcion;

//anuncia si ingresó  letras y genera una alerta y mensaje del fallo
  if (isNaN(cantidad) == true) {
    resultadoDivisa.setAttribute('value', "El valor ingresado no es Valido");
    resultadoDivisa.setAttribute(alert(" !!!! Accion Erronea Intentar de nuevo ¡¡¡¡"));
  } else {
    if (chequearDivisa(primerOpcion) && chequearDivisa(segundaOpcion)) {
      const resultado = convertirDivisa(cantidad, primerOpcion, segundaOpcion);
      resultadoDivisa.setAttribute('value', resultado);   // imprime el valor final 
      
    } else {
      return;
    }
  }
}

//función que se asegura de que se eliga una divisa y genera aviso del error
function chequearDivisa(divisa) {
  if (divisa == moneda[0]) {
    alert('Elige una divisa válida');
    return false;
  }
  return true;
}

//conversiones
function convertirDivisa(cantidad, primerOpcion, segundaOpcion) {

    switch (primerOpcion) {
        // Ingreso dolar
        case moneda[1]:
          if (segundaOpcion === moneda[1])
            return cantidad;
          else if (segundaOpcion === moneda[2])
            return cantidad * valorMonedasEnDolar[2];
          else if (segundaOpcion === moneda[3])
            return cantidad * valorMonedasEnDolar[3];
          else if (segundaOpcion === moneda[4])
            return cantidad * valorMonedasEnDolar[4];
          else if (segundaOpcion === moneda[5])
            return cantidad * valorMonedasEnDolar[5];
    
          // Ingreso operacion para moneda Mexicana
        case moneda[2]:
          if (segundaOpcion === moneda[1])  //1
            return cantidad * valorMonedaEnMex[1];
          else if (segundaOpcion === moneda[2])  //2
            return cantidad;
          else if (segundaOpcion === moneda[3]) //3
            return cantidad * valorMonedaEnMex[3];
          else if (segundaOpcion === moneda[4])  //4
            return cantidad * valorMonedaEnMex[4];
          else if (segundaOpcion === moneda[5]) //5
            return cantidad * valorMonedaEnMex[5];

        // Ingreso operacion para moneda Colombiana

        case moneda[3]:
          if (segundaOpcion === moneda[1]) //1
            return cantidad * valorMonedaEnCop[1];
          else if (segundaOpcion === moneda[2]) //2
            return cantidad * valorMonedaEnCop[2];
          else if (segundaOpcion === moneda[3]) //3
            return cantidad; 
          else if (segundaOpcion === moneda[4]) //4
            return cantidad * valorMonedaEnCop[4];
          else if (segundaOpcion === moneda[5]) //5
            return cantidad * valorMonedaEnCop[5];

        // Ingreso operacion para el Euro

        case moneda[4]:
          if (segundaOpcion === moneda[1]) //1
            return cantidad * valorMonedaEnEur[1];
          else if (segundaOpcion === moneda[2]) //2
            return cantidad * valorMonedaEnEur[2];
          else if (segundaOpcion === moneda[3]) //3
            return cantidad * valorMonedaEnEur[3];
          else if (segundaOpcion === moneda[4]) //4
            return cantidad;
          else if (segundaOpcion === moneda[5]) //5
            return cantidad * valorMonedaEnEur[5];
        

        // Ingreso operacion para la Libra Esterlina

        case moneda[5]:
          if (segundaOpcion === moneda[1]) //1
            return cantidad * valorMonedaEnGbp[1];
          else if (segundaOpcion === moneda[2]) //2
            return cantidad * valorMonedaEnGbp[2];
          else if (segundaOpcion === moneda[3]) //3
            return cantidad * valorMonedaEnGbp[3];
          else if (segundaOpcion === moneda[4]) //4
            return cantidad * valorMonedaEnGbp[4];
          else if (segundaOpcion === moneda[5]) //5
            return cantidad;
            
      }
}

