// DESCUENTOS 

let precio = document.getElementById("precio")
precio = precio.value;
let descuento = document.getElementById("descuento")
descuento = descuento.value;

const formulaDescuento = (precio,descuento) => (precio * (100 - descuento ) )/ 100

function precioConDescuento(){
    let precio = document.getElementById("precio")
    precio = precio.value;
    let descuento = document.getElementById("descuento")
    descuento = descuento.value;
    const precioConDescuento =  formulaDescuento(precio,descuento)
    const respuesta = document.getElementById("respuesta")
    respuesta.innerText = `El precio a pagar por su producto de ${precio}, con un descuento del ${descuento}% es de: ${precioConDescuento}`

}
