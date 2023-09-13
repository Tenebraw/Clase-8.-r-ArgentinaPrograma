function probarValidarCantIntegrantes(){
    console.assert(
        validarCantIntegrantes('')==='El campo integrantes no puede estar vacio',
        'Validar Cantidad de Integrantes no valido los integrantes'    
        );
        /*console.assert(
            validarCantIntegrantes('2')=='','Validar Cantidad de Integrantes fallo con un numero valido'
        );*/
}

function probarValidarEdad(){
    console.assert(
        validarEdades('[]')==='Ningun campo edad puede estar vacio',
        'Validar Edad no valido la edad',
    );
}
probarValidarCantIntegrantes();
//probarValidarEdad();


