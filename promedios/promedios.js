
const respuesta = document.getElementById("respuesta");

function lista(){
    try{
        const listaIngresada = document.getElementById("listaIngresada");
        let lista = "[" + listaIngresada.value + "]";
        let listaEnArray = JSON.parse(lista);
        return listaEnArray
    } catch{
        respuesta.innerHTML = "INGRESO MAL SU LISTA, asegurece de que su lista no comience ni termine en coma ',' "
    }
}

function calcularPromedio(){
    let suma = 0;
    for (let i = 0; i < lista().length; i++) {
        suma += lista()[i];
    }
    respuesta.innerHTML = suma/lista().length;
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



function calcularModa(){
    const listaModa = {};
    lista().map( function(numero){
        if(listaModa[numero]){
            listaModa[numero] += 1
        } else{
            listaModa[numero] =1
        }
    })

    const listaOrdenada = Object.entries(listaModa).sort(function(a,b){
        return a[1]-b[1]
     } )
    const moda = listaOrdenada[listaOrdenada.length-1]

    respuesta.innerHTML = `La moda es ${moda[0]} y se repite ${moda[1]} veces`
}