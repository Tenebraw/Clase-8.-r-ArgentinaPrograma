
import { crearElementosInputs } from "./crearElementos.js";
import { borrarCampos } from "./limpiarCampos.js";
import { quitarInputsSalario } from "./eliminarInputsSalario.js";
import { mostrarResultadosEdad, mostrarResultadosSalarios } from "./mostrarResultados.js";
import { validarEdades, validarCantIntegrantes } from "./validaciones.js";
import { calcularElMayor, calcularElMenor,calcularElPromedio, calcularSalarioMensualPromedio } from "./calculos.js";

export function calcularEdad(mostrarResultadosEdad){
    const edadInputs = document.querySelectorAll('input[name=edad]');
    const nuevoArrayEdad = Array.from(edadInputs);
     const mensajeError = validarEdades(nuevoArrayEdad);
   
    if(mensajeError==''){       
        const edadMayor = calcularElMayor(nuevoArrayEdad);
        const edadMenor= calcularElMenor(nuevoArrayEdad);
        const edadPromedio= calcularElPromedio(nuevoArrayEdad);
        mostrarResultadosEdad(edadMayor,edadMenor,edadPromedio);
    };
}

//Tarea 2
export function calcularSalarios(){
    const salarioInput = document.querySelectorAll('.salarioinput');
    const nuevoArraySalario = Array.from(salarioInput);
    function filtrarSalariosNoVacios(y){
        return y.value.length!=0;
    }
    const filtroArraySalario= nuevoArraySalario.filter(filtrarSalariosNoVacios);

    if(filtroArraySalario.length>0){
        const salarioMayor = calcularElMayor(filtroArraySalario);
        const salarioMenor =calcularElMenor(filtroArraySalario);
        const promedioAnualSalario = calcularElPromedio(filtroArraySalario);
        const promedioMensualSalario = calcularSalarioMensualPromedio(filtroArraySalario);
        mostrarResultadosSalarios(salarioMayor,salarioMenor,promedioAnualSalario,promedioMensualSalario);     
    }
}

const $formulario = document.querySelector('#integrantes');
$formulario.addEventListener('submit', function(event) {
  event.preventDefault();
});

const $botonProceder = document.querySelector('#proceder');
let mensajeError;
let $inputCantidadDeIntegrantes;
let cantidadDeIntegrantes;


function IniciarProceso() {
  document.querySelector('#cantidad-integrantes').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      $inputCantidadDeIntegrantes = document.querySelector('#cantidad-integrantes');
      cantidadDeIntegrantes = parseInt(document.querySelector('#cantidad-integrantes').value); 
      mensajeError = validarCantIntegrantes($inputCantidadDeIntegrantes);
      manejarErrores(mensajeError, $inputCantidadDeIntegrantes, cantidadDeIntegrantes);
      event.preventDefault();
    }
  });

  document.querySelector('#proceder').addEventListener('click', function (event) {
    $inputCantidadDeIntegrantes = document.querySelector('#cantidad-integrantes');
    cantidadDeIntegrantes = parseInt(document.querySelector('#cantidad-integrantes').value);
    mensajeError = validarCantIntegrantes($inputCantidadDeIntegrantes);
    manejarErrores(mensajeError, $inputCantidadDeIntegrantes, cantidadDeIntegrantes);
    event.preventDefault();
  });
}

function manejarErrores(mensajeError, $inputCantidadDeIntegrantes,cantidadDeIntegrantes) {
  if (!mensajeError=='') {
    $inputCantidadDeIntegrantes.classList.add('error');
    document.querySelector('#errorProceder').className = 'alert alert-danger';
    document.querySelector('#errorProceder').innerHTML = 'El campo no puede estar vacío y solo se aceptan números.';
  } else {
    $botonProceder.setAttribute('disabled', '');
    $inputCantidadDeIntegrantes.setAttribute('disabled', '');
    $inputCantidadDeIntegrantes.classList.remove('error');
    document.querySelector('#errorProceder').innerHTML = '';
    document.querySelector('#errorProceder').className = '';
    crearElementosInputs($botonProceder, cantidadDeIntegrantes, $inputCantidadDeIntegrantes, calcularEdad, mostrarResultadosEdad, borrarCampos, calcularSalarios, mostrarResultadosSalarios, quitarInputsSalario);
  }
}

IniciarProceso();

