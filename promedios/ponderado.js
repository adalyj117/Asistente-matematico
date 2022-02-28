
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