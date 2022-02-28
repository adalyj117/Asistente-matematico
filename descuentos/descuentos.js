// DESCUENTOS 

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

// DESCUENTOS POR CUPONES

const codigos = ["hola-1","hola-2","hola-3","hola-4","hola-5" ]

function descuento(precio,descuentoCupon,respuesta){
        const precioConDescuento = formulaDescuento(precio,descuentoCupon)
        respuesta.innerText = `Su descuento es de ${descuentoCupon}%, 
        el precio con descuento es ${precioConDescuento}`;
    }

function precioConDescuentoCupon(){
    const precio = document.getElementById("precioSinCupones");
    const precioSinDescuento = precio.value;
    const codigo = document.getElementById("codigoCupon")
    const codigoCupon = codigo.value;
    const respuesta = document.getElementById("respuestaDescuentoCupon")


    if (codigoCupon == codigos[0]){
        descuento(precioSinDescuento,10,respuesta)
    } else if (codigoCupon == codigos[1] ){
        descuento(precioSinDescuento,20,respuesta)
    } else if (codigoCupon == codigos[2] ){
        descuento(precioSinDescuento,30,respuesta)
    } else if (codigoCupon == codigos[3] ){
        descuento(precioSinDescuento,40,respuesta)
    } else if (codigoCupon == codigos[4] ){
        descuento(precioSinDescuento,50,respuesta)
    } else {respuesta.innerHTML = "Codigo no valido"

    } respuesta.innerText = `Su descuento es de ${descuentoCupon}%, 
    el precio con descuento es ${precioConDescuento}`;

}
    