//Mediana
function calcularMediana(lista){
    const lugarMedioDeLista = parseInt(lista.length/2)
    let listaParImpar = (lista.length%2) ==0 ? "Es par": "Es impar"
    if(listaParImpar == "Es par"){
        const mediana = (lista[lugarMedioDeLista]+lista[lugarMedioDeLista-1])/2
        return mediana
    } else{
        const mediana = lista[lugarMedioDeLista]
        return mediana
    }
}

//Obtener salarios y ordenar
function ordenar(family){
    const salarios = family.map(
        function(persona){
            return persona.salary;
        }
    )
    return salarios.sort( (a,b) => a-b)
}


//MEDIANA DE SALARIOS
function medianaSalary(){
    const salarios = ordenar(family)
    const medianaSalarios = calcularMediana(salarios)
    respuesta.innerText = medianaSalarios
}


//MEDIANA DEL TOP 10%
function calcularTop(){
    const salarios = ordenar(family)
    const spliceStart = (salarios.length * 90)/100;
    const salariosTop10 =  salarios.slice(spliceStart, salarios.length) 
    const medianaTop10 = calcularMediana(salariosTop10) 
    respuesta.innerText = medianaTop10
}
