
const respuesta = document.getElementById("respuesta");
const listaI = document.getElementById("lista");

// Helpers
function sumar(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += Number(lista[i]);
    }
    return suma
}

// Convertir el input en una lista
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

//Promedio
function promedio(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    const respuesta = suma/lista.length;
    return "El promedio es: "+respuesta
}

//Mediana
function mediana(lista){
    const listaOrdenada = lista.sort((a,b) => a-b)
    const lugarMedioDeLista = listaOrdenada.length/2
    const mitadLista = parseInt(lugarMedioDeLista) 
    let listaParImpar = (listaOrdenada.length%2) ==0 ? "Es par": "Es impar"
    if(listaParImpar == "Es par"){
        const mediana = (listaOrdenada[mitadLista]+listaOrdenada[mitadLista-1])/2
        return "La mediana es: " + mediana
    } else{
        const mediana = listaOrdenada[mitadLista]
        return "La mediana es: " + mediana
    }
}

//Moda
function moda(lista){
    const listaModa = {};
    lista.map(function(numero){
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
        return `La moda es ${modas[1]} y se repite ${modas[0]} veces `
    } else {
        return `Las modas son [${modas[1]}] y se repiten ${modas[0]} veces `
    }
}

function calcularPromedio(){
    respuesta.innerHTML = promedio(lista());
}
function calcularMediana(){
    respuesta.innerHTML = mediana(lista());
}
function calcularModa(){
    respuesta.innerHTML = moda(lista());
}

