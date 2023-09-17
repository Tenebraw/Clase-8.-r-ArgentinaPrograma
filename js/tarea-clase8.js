
function inicioProceso(){
    const $botonProceder = document.querySelector('#proceder');
    $botonProceder.onclick =function(evento){   
        let cantidadDeIntegrantes = parseInt(document.querySelector('#cantidad-integrantes').value);  
        let $inputCantidadDeIntegrantes = document.querySelector('#cantidad-integrantes');     
    
            if(validarCantIntegrantes(cantidadDeIntegrantes,$inputCantidadDeIntegrantes)!=='')
            {
                $inputCantidadDeIntegrantes.classList.add('error');
                document.querySelector('#errorProceder').className='alert alert-danger';
                document.querySelector('#errorProceder').innerHTML='El campo no puede estar vacio y solo se aceptan numeros.';         
            }
            else{
                $botonProceder.setAttribute('disabled','');
                $inputCantidadDeIntegrantes.setAttribute('disabled','');
               $inputCantidadDeIntegrantes.classList.remove('error');
                document.querySelector('#errorProceder').innerHTML='';
                document.querySelector('#errorProceder').className='';
                crearElementosInputs($botonProceder,cantidadDeIntegrantes,$inputCantidadDeIntegrantes);  
            }
            evento.preventDefault();
    }
}

function crearElementosInputs(boton,cantidad,inputs){
    
    const tabla = document.querySelector('#tabla');
    tabla.removeAttribute('hidden');
    let $nuevosIntegrantes = document.querySelector('tbody');
    for(let i=0;i<cantidad;i++){
        const newTr= document.createElement('tr');
        const newTh= document.createElement('th');
        newTh.scope='row';
        newTh.textContent=`${i+1}`;
        newTr.appendChild(newTh);

        const newTd= document.createElement('td');
        const newInputEdad = document.createElement('input');
        newInputEdad.type='number';
        newInputEdad.name='edad';
        newInputEdad.min='01';
        newInputEdad.max='100';
        newInputEdad.className='form-control';
        newTd.appendChild(newInputEdad);
        newTr.appendChild(newTd);

        const newTd2 = document.createElement('td');
        const newButtonAgregar = document.createElement('button');
        newButtonAgregar.type='button';
        newButtonAgregar.className='btn btn-outline-secondary';
        newButtonAgregar.innerHTML='Agregar';
        newTd2.appendChild(newButtonAgregar);
        newTr.appendChild(newTd2);

        const newTd3 = document.createElement('td');
        const newInputSalario = document.createElement('input');
        newInputSalario.type='number';
        newInputSalario.min='100';
        newInputSalario.step='100';
        newInputSalario.className='form-control salarioinput';
        newInputSalario.disabled='true';
        newTd3.appendChild(newInputSalario);
        newTr.appendChild(newTd3);

        const newTd4 = document.createElement('td');
        const newButtonQuitar = document.createElement('button');
        newButtonQuitar.type='button';
        newButtonQuitar.className='btn btn-outline-secondary';
        newButtonQuitar.id='quitar';
        newButtonQuitar.innerHTML='Quitar';
        newButtonQuitar.disabled='true';
        newTd4.appendChild(newButtonQuitar);
        newTr.appendChild(newTd4);

        $nuevosIntegrantes.appendChild(newTr);   



 // Mostrando botones Calcular y Resetear. 
        const $botonCalcular = document.querySelector('#calcular');
        const $botonResetear = document.querySelector('#resetear');
        const $botonSalario = document.querySelector('#calcularsalario');
       
        $botonResetear.removeAttribute('hidden');
        $botonCalcular.removeAttribute('hidden');
        $botonSalario.removeAttribute('hidden');   
        $botonCalcular.onclick=function(evento){
            calculosEdad();
            evento.preventDefault();
        } 
        $botonResetear.onclick=function(evento){
            BorrarCampos($nuevosIntegrantes,$botonCalcular,$botonResetear,boton,inputs,cantidad);
            evento.preventDefault();
        }
        $botonSalario.onclick=function(evento){
            calculosSalarios();
            evento.preventDefault();
        }

       newButtonAgregar.onclick=function(evento){
        newInputSalario.removeAttribute('disabled');
        newButtonQuitar.removeAttribute('disabled');
        quitandoInputsSalario(newInputSalario,newButtonQuitar);
        $botonSalario.className='btn btn-outline-primary';
        evento.preventDefault();
       }
    }
}


function mostrarResultadosEdad(x,y,z){
    const $resultadosEdad1 = document.querySelector('#mayoredad');
    const $resultadosEdad2 = document.querySelector('#menoredad');
    const $resultadosEdad3 = document.querySelector('#promedioedad');

    $resultadosEdad1.textContent =` La mayor edad es ${x}.`;
    $resultadosEdad2.textContent=` La edad menor es ${y}.`; 
    $resultadosEdad3.textContent=`El promedio es de ${z}.`;

    const cardEdad=document.querySelector('#resultadosedad');
    cardEdad.removeAttribute('hidden');       
}

function mostrarResultadosSalarios(x,y,z,v){
    const $resultadosSalarios1 = document.querySelector('#mayorsalario');
    const $resultadosSalarios2 = document.querySelector('#menorsalario');
    const $resultadosSalarios3 = document.querySelector('#promedioanual');
    const $resultadosSalarios4 = document.querySelector('#promediomensual');

    $resultadosSalarios1.textContent =`El mayor salario anual es ${x}.`; 
    $resultadosSalarios2.textContent=`El menor salario anual es ${y}.`;
    $resultadosSalarios3.textContent=`Promedio salarios anuales es ${z}.`;
    $resultadosSalarios4.textContent=`Promedio salario mensual es ${v}.`;

    const cardSalario=document.querySelector('#resultadossalarios');
    cardSalario.removeAttribute('hidden');   
}

function quitandoInputsSalario(newInputSalario,newButtonQuitar){
      newButtonQuitar.onclick=function(evento){
    newInputSalario.value='';
    evento.preventDefault();
     }
}


function BorrarCampos(nuevos,botonR,botonC,botonP,inputs){
    document.querySelector('#resultadosedad').setAttribute('hidden','');
    document.querySelector('#resultadossalarios').setAttribute('hidden','');
    document.querySelector('#tabla').setAttribute('hidden','');  
    nuevos.innerHTML = "";
    botonC.setAttribute('hidden','');
    botonR.setAttribute('hidden','');
    botonP.removeAttribute('disabled');
    inputs.removeAttribute('disabled');
    // Tarea 2
    const $botonCalcularSalario = document.querySelector('#calcularsalario');
    $botonCalcularSalario.setAttribute('hidden','');    
    
}


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
            edad.classList.add('error');
            document.querySelector('#errorEdad').innerHTML='Ningun campo edad puede estar vacio.';
            document.querySelector('#errorEdad').className='alert alert-danger';
            contador++;
            return 'Ningun campo edad puede estar vacio';
        }

    });
    if(contador===0){
        document.querySelector('#errorEdad').innerHTML='';
        document.querySelector('#errorEdad').className='';
        nuevoArrayEdad.forEach(function(e){
            e.className='form-control';

        });
        return '';
    }
}

inicioProceso();