
const respuesta = document.getElementById("respuesta");
const listaI = document.getElementById("lista");

function sumar(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += Number(lista[i]);
    }
    return suma
}

function lista(){
    try{
        const listaIngresada = document.getElementById("listaIngresada");
        let lista = "[" + listaIngresada.value + "]";
        let listaEnArray = JSON.parse(lista);
        listaI.innerHTML = "SU LISTA -->>  " + lista
        return listaEnArray
    } catch{
        respuesta.innerHTML = "INGRESO MAL SU LISTA, asegurece de que su lista no comience ni termine en coma ',' "
    }
}

function promedio(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    const respuesta = suma/lista.length;
    return respuesta
}

function calcularPromedio(){
    
    respuesta.innerHTML = promedio(lista());
}

function calcularMediana(){
    const listaOrdenada = lista().sort((a,b) => a-b)
    const lugarMedioDeLista = listaOrdenada.length/2
    const mitadLista = parseInt(lugarMedioDeLista) 
    let listaParImpar = (listaOrdenada.length%2) ==0 ? "Es par": "Es impar"
    if(listaParImpar == "Es par"){
        const mediana = (listaOrdenada[mitadLista]+listaOrdenada[mitadLista-1])/2
        respuesta.innerHTML = mediana
    } else{
        const mediana = listaOrdenada[mitadLista]
        respuesta.innerHTML = mediana
    }
}

// function variasModas(listaOrdenada){
//     const variasListasModas = {}
//     listaOrdenada.map(function(valores){
//             if(variasListasModas[valores[1]]){
//                 variasListasModas[valores[1]] += [,valores[0]]
//             } else{
//                 variasListasModas[valores[1]] = [valores[0]]
//             }
//         }
//     )
//     const listaModas = Object.entries(variasListasModas)
//     const modas = listaModas[listaModas.length-1]
    
//     respuesta.innerHTML = `Las modas son ${modas[1]} y se repiten ${modas[0]} veces `
// }

function calcularModa(){
    const listaModa = {};
    lista().map(function(numero){
        if(listaModa[numero]){
            listaModa[numero] += 1
        } else{
            listaModa[numero] =1
        }
    })

    const listaOrdenada = Object.entries(listaModa).sort(function(a,b){
        return a[1]-b[1]
     } )
    // variasModas(listaOrdenada)
    const variasListasModas = {}
    listaOrdenada.map(function(valores){
            if(variasListasModas[valores[1]]){
                variasListasModas[valores[1]] += [,valores[0]]
            } else{
                variasListasModas[valores[1]] = [valores[0]]
            }
        }
    )

    const listaModas = Object.entries(variasListasModas)
    const modas = listaModas[listaModas.length-1]

    if(modas[1].length == 1){
        respuesta.innerHTML = `La moda es ${modas[1]} y se repite ${modas[0]} veces `
    } else {
        respuesta.innerHTML = `Las modas son [${modas[1]}] y se repiten ${modas[0]} veces `
    }
}


//PROMEDIO PONDERADO

let listaPon = []
let porcentajes = []

function sumar(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += Number(lista[i]);
    }
    return suma
}

function agregarNumero(){
    const numeroIngresado  = document.getElementById("numero");
    const numero = numeroIngresado.value;
    const porcentajeIngresado  = document.getElementById("porcentaje");
    const porcentaje = porcentajeIngresado.value;
    const lista = document.getElementById("listaPon");
    if(numero != "" && porcentaje != ""){
        listaPon.push([numero,porcentaje])
        porcentajes.push(porcentaje)
        const todoLista = listaPon.map(t => `<tr><td>${t[0]} </td>  <td> ${t[1]}</td></tr>`)
        lista.innerHTML = todoLista.join(" ")
        numeroIngresado.value = '';
        porcentajeIngresado.value = '';
    }
    
}

function calcularPonderado(){
    const valoresMultiplicados = []
    listaPon.map(
        function(valores){
            const multiplicados = valores[0]* valores[1]
            valoresMultiplicados.push(multiplicados)
        }
    )
    const ponderado = sumar(valoresMultiplicados)/sumar(porcentajes)
    const resultado = document.getElementById("respuestaPon")
    resultado.innerHTML = "El resultado es: " +ponderado
}