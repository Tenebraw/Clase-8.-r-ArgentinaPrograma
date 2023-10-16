


export function mostrarResultadosEdad(mayor,menor,promedio){
    const $resultadosEdad1 = document.querySelector('#mayor-edad');
    const $resultadosEdad2 = document.querySelector('#menor-edad');
    const $resultadosEdad3 = document.querySelector('#promedio-edad');

    $resultadosEdad1.textContent =` La mayor edad es ${mayor}.`;
    $resultadosEdad2.textContent=` La edad menor es ${menor}.`; 
    $resultadosEdad3.textContent=`El promedio es de ${promedio}.`;

    const cardEdad=document.querySelector('#resultadosedad');
    cardEdad.removeAttribute('hidden');       
}

export function mostrarResultadosSalarios(x,y,z,v){
    const $resultadosSalarios1 = document.querySelector('#mayor-salario');
    const $resultadosSalarios2 = document.querySelector('#menor-salario');
    const $resultadosSalarios3 = document.querySelector('#promedio-anual');
    const $resultadosSalarios4 = document.querySelector('#promedio-mensual');

    $resultadosSalarios1.textContent =`El mayor salario anual es ${x}.`; 
    $resultadosSalarios2.textContent=`El menor salario anual es ${y}.`;
    $resultadosSalarios3.textContent=`Promedio salarios anuales es ${z}.`;
    $resultadosSalarios4.textContent=`Promedio salario mensual es ${v}.`;

    const cardSalario=document.querySelector('#resultadossalarios');
    cardSalario.removeAttribute('hidden');   
}