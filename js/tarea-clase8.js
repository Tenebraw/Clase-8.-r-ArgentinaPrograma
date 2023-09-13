/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.(usando RegExp, objetos, foreach, poner estilos, mostrar los erroes en la interfaz y escribir pruebas)

TIP: Las edades no pueden tener decimales.
*/

function inicioProceso(){
    const $botonProceder = document.querySelector('#proceder');
    $botonProceder.onclick =function(evento){   
        let cantidadDeIntegrantes = parseInt(document.querySelector('#cantidad-integrantes').value);  
        let $inputCantidadDeIntegrantes = document.querySelector('#cantidad-integrantes');     
    
            if(validarCantIntegrantes(cantidadDeIntegrantes,$inputCantidadDeIntegrantes)!=='')
            {
                $inputCantidadDeIntegrantes.className='error';
                document.querySelector('#errorProceder').innerHTML='* El campo no puede estar vacio y solo se aceptan numeros.';         
            }
            else{
                $botonProceder.setAttribute('disabled','');
                $inputCantidadDeIntegrantes.setAttribute('disabled','');
                $inputCantidadDeIntegrantes.className='';
                document.querySelector('#errorProceder').innerHTML='';
                crearElementosInputs($botonProceder,cantidadDeIntegrantes,$inputCantidadDeIntegrantes);  
            }
            evento.preventDefault();
    }
}

function crearElementosInputs(boton,cantidad,inputs){
    
    let $nuevosIntegrantes = document.querySelector('#nuevosintegrantes');
    for(let i=0;i<cantidad;i++){
        const newUsers = document.createElement('input');
       const newbR = document.createElement('br');
        const newLabel = document.createElement('label');
        newUsers.name='edad';  
        newLabel.textContent = ` Integrante nº ${i+1} `;
        newUsers.type='number';
        newUsers.min='01';
        newUsers.max='100';
        newUsers.placeholder='edad';
        newUsers.className ='edadinput';
        $nuevosIntegrantes.appendChild(newLabel);
        $nuevosIntegrantes.appendChild(newUsers);

 // Mostrando botones Calcular y Resetear. 
        const $botonCalcular = document.querySelector('#calcular');
        const $botonResetear = document.querySelector('#resetear');
        $botonResetear.removeAttribute('hidden');
        $botonCalcular.removeAttribute('hidden');
        
        $botonCalcular.onclick=function(evento){
            calculosEdad();
            evento.preventDefault();
        } 
        $botonResetear.onclick=function(evento){
            BorrarCampos($nuevosIntegrantes,$botonCalcular,$botonResetear,boton,inputs,cantidad);
            evento.preventDefault();
        }

        // Implementaciones tarea 2. Salarios. Creacion botones Agregar y Quitar.

        const botonAgregarSalario = document.createElement('button');
        botonAgregarSalario.textContent='Agregar Salario';
        botonAgregarSalario.className='botonsalarioinput';
        $nuevosIntegrantes.appendChild(botonAgregarSalario);
        const inputsSalario = document.createElement('input');
        inputsSalario.type='number';
        inputsSalario.min='100';
        inputsSalario.step='100';
        inputsSalario.placeholder='salario';
        inputsSalario.className ='salarioinput';
        inputsSalario.setAttribute('hidden','');
        $nuevosIntegrantes.appendChild(inputsSalario);

        const botonQuitar = document.createElement('button');
        botonQuitar.textContent='Quitar';
        botonQuitar.className ='botonquitarsalario';
        botonQuitar.setAttribute('hidden','');
        $nuevosIntegrantes.appendChild(botonQuitar);

        botonAgregarSalario.onclick=function(evento){
            agregarSalario(inputsSalario);
            agregarBotonQuitar(botonQuitar,inputsSalario);
            evento.preventDefault();
        }           
        $nuevosIntegrantes.appendChild(newbR);
    }
}



function mostrarResultadosEdad(x,y,z){
    const $resultadosAmostrar = document.querySelector('#resultadosEdad');
    $resultadosAmostrar.textContent =
    `
    La mayor edad es ${x}. 
    La edad menor es ${y}. 
    El promedio es de ${z}.
    `;
    return $resultadosAmostrar.removeAttribute('hidden');
}

// Tarea 2
function mostrarResultadosSalarios(x,y,z,v){
    const $resultadosSalariosAmostrar = document.querySelector('#resultadosSalarios');
    $resultadosSalariosAmostrar.textContent =
    `
    El mayor salario anual es ${x}. 
    El menor salario anual es ${y}. 
    Promedio salarios anuales es ${z}.
    Promedio salario mensual es ${v};
    `;
    return $resultadosSalariosAmostrar.removeAttribute('hidden');
}

// Al resetear borramos los campos correspondientes.
function BorrarCampos(nuevos,botonR,botonC,botonP,inputs){
    nuevos.innerHTML = "";
    const resultadosAborrar = document.querySelector('#resultadosEdad');
    const resultadosSalariosAborrar = document.querySelector('#resultadosSalarios');
    resultadosAborrar.setAttribute('hidden','');
    resultadosSalariosAborrar.setAttribute('hidden','');
    botonC.setAttribute('hidden','');
    botonR.setAttribute('hidden','');
    botonP.removeAttribute('disabled');
    inputs.removeAttribute('disabled');
    // Tarea 2
    const $botonCalcularSalario = document.querySelector('#calcularsalario');
    $botonCalcularSalario.setAttribute('hidden','');    
    
}

// Tarea 2 Clase 6

function agregarSalario(inputsS){
    inputsS.removeAttribute('hidden');
    const $botonCalcularSalario = document.querySelector('#calcularsalario');
    $botonCalcularSalario.removeAttribute('hidden');
    $botonCalcularSalario.onclick=function(evento){
        calculosSalarios();
        evento.preventDefault();
    }
}

function agregarBotonQuitar(botonQ,inputsS){
     botonQ.removeAttribute('hidden');
     botonQ.onclick=function(evento){
        inputsS.setAttribute('hidden','');
        inputsS.value='';
        botonQ.setAttribute('hidden','');
        evento.preventDefault();
     }    
}

/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.(usando RegExp, objetos, foreach, poner estilos, mostrar los erroes en la interfaz y escribir pruebas)

TIP: Las edades no pueden tener decimales.
*/


function validarCantIntegrantes(){

   if (document.querySelector('#cantidad-integrantes').value.length === 0) {
        return 'El campo integrantes no puede estar vacio';    
    }
    else {return '';}
}

function validarEdades(nuevoArrayEdad){
    let contador=0;

    nuevoArrayEdad.forEach(function(edad){
        if(edad.value.length==0){
            edad.className='error';
            document.querySelector('#errorEdad').innerHTML='* Ningun campo edad puede estar vacio.';
            contador++;
            return 'Ningun campo edad puede estar vacio';
        }

    });
    if(contador===0){
        document.querySelector('#errorEdad').innerHTML='';
        nuevoArrayEdad.forEach(function(e){
            e.className='edadinput';

        });
        return '';
    }
}
inicioProceso();