
export function calcularElMayor(datos){
    let mayor =0;
    for(let i=0;i<datos.length;i++){
        if(parseInt(datos[i].value)>=mayor){
            mayor= parseInt(datos[i].value);
        }
    }
    return mayor;
}

export function calcularElMenor(datos){
   let menor =parseInt(datos[0].value);
    for(let i=0;i<datos.length;i++){
        if(parseInt(datos[i].value) <=menor){
            menor =parseInt(datos[i].value);
        }
    }
    return menor;
}

export function calcularElPromedio(datos){
    let total =0;
    for(let i=0;i<datos.length;i++){
        total = total+parseInt(datos[i].value);
    }
    return (total/datos.length).toFixed(2);
}

//Tarea 2
export function calcularSalarioMensualPromedio(salarios){
    const MESES_ANIO =12;
    let total =0;
    for(let i=0;i<salarios.length;i++){
        total = total+parseInt(salarios[i].value);
    }
    return ((total/salarios.length)/MESES_ANIO).toFixed(2);
}