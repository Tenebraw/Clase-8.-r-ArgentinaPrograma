export function borrarCampos(nuevos,botonR,botonC,botonP,inputs){
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
