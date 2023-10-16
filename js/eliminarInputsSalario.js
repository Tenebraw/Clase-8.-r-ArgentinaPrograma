export function quitarInputsSalario(newInputSalario,newButtonQuitar){
      newButtonQuitar.onclick=function(evento){
    newInputSalario.value='';
    evento.preventDefault();
     }
}