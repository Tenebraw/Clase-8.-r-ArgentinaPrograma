
export function crearElementosInputs(boton,cantidad,inputs, calcularEdad, mostrarResultadosEdad,borrarCampos,calcularSalarios,mostrarResultadosSalarios,quitarInputsSalario){
    
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
            calcularEdad(mostrarResultadosEdad);
            evento.preventDefault();
        } 
        $botonResetear.onclick=function(evento){
            borrarCampos($nuevosIntegrantes,$botonCalcular,$botonResetear,boton,inputs,cantidad);
            evento.preventDefault();
        }
        $botonSalario.onclick=function(evento){
            calcularSalarios(mostrarResultadosSalarios);
            evento.preventDefault();
        }

       newButtonAgregar.onclick=function(evento){
        newInputSalario.removeAttribute('disabled');
        newButtonQuitar.removeAttribute('disabled');
        quitarInputsSalario(newInputSalario,newButtonQuitar);
        $botonSalario.className='btn btn-outline-primary';
        evento.preventDefault();
       }
    }
}