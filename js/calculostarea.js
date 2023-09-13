function calculosEdad(){
    let edadInputs = document.querySelectorAll('input[name=edad]');
    let nuevoArrayEdad = Array.from(edadInputs);
   
    if(validarEdades(nuevoArrayEdad)==''){       
        let x = calcularElMayor(nuevoArrayEdad);
        let y= calcularElMenor(nuevoArrayEdad);
        let z= calcularElPromedio(nuevoArrayEdad);
        mostrarResultadosEdad(x,y,z);
    };
}


//Tarea 2
function calculosSalarios(){
    const salarioInput = document.querySelectorAll('.salarioinput');
    const nuevoArraySalario = Array.from(salarioInput);
    function filtroSalario(y){//Filtro para solo considerar los values no vacios.
        return y.value.length!=0;
    }
    const filtroArraySalario= nuevoArraySalario.filter(filtroSalario);

    if(filtroArraySalario.length>0){
        let x = calcularElMayor(filtroArraySalario);
        let y =calcularElMenor(filtroArraySalario);
        let z = calcularElPromedio(filtroArraySalario);
        let v = salarioMensualPromedio(filtroArraySalario);
        mostrarResultadosSalarios(x,y,z,v);     
    }
}

function calcularElMayor(datos){
    let mayor =0;
    for(let i=0;i<datos.length;i++){
        if(parseInt(datos[i].value)>=mayor){
            mayor= parseInt(datos[i].value);
        }
    }
    return mayor;
}

function calcularElMenor(datos){
   let menor =parseInt(datos[0].value);
    for(let i=0;i<datos.length;i++){
        if(parseInt(datos[i].value) <=menor){
            menor =parseInt(datos[i].value);
        }
    }
    return menor;
}

function calcularElPromedio(datos){
    let total =0;
    for(let i=0;i<datos.length;i++){
        total = total+parseInt(datos[i].value);
    }
    return (total/datos.length).toFixed(2);
}

//Tarea 2
function salarioMensualPromedio(datos){
    let total =0;
    for(let i=0;i<datos.length;i++){
        total = total+parseInt(datos[i].value);
    }
    return ((total/datos.length)/12).toFixed(2);
}