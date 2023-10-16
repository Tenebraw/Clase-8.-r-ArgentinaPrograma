

export function validarCantIntegrantes($inputCantidadDeIntegrantes){
    if ($inputCantidadDeIntegrantes.value.length === 0) {
         return 'El campo integrantes no puede estar vacio';    
     }
     else {return '';}
 }

 export function validarEdades(edades){
    let contador=0;

    edades.forEach(function(edad){
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
        edades.forEach(function(e){
            e.className='form-control';

        });
        return '';
    }
}

