// CUADRADO
const perimetroCuadrado = (lado) => lado*4
const areaCuadrado = (lado) => lado*lado
function operacion(operacion, funcionOperacion){
    const lado = document.getElementById("InputCuadrado");
    const respuesta = document.getElementById("resultadoCuadrado");
    const rpta = funcionOperacion(lado.value)
    if (lado.value != ""){
        respuesta.innerHTML = `El ${operacion} del cuadrado es: `+ rpta
    }
    
}
const calcularPerimetroCuadrado = () => operacion("perimetro",perimetroCuadrado);
const calcularAreaCuadrado = () => operacion("area",areaCuadrado); 


// TRIANGULO 
const perimetroTriangulo = (lado1,lado2,base,altura) => Number(lado1) +Number(lado2)+ Number(base);
const areaTriangulo = (lado1,lado2,base,altura) => (Number(base)*Number(altura))/2;
function operacionTriangulo(operacion,funcionOperacion){
    const lado1 = document.getElementById("InputTrianguloLados");
    const lado2 = document.getElementById("InputTrianguloLados2");
    const base = document.getElementById("InputTrianguloBase");
    const altura = document.getElementById("InputTrianguloAltura");
    const respuesta = document.getElementById("resultadoTriangulo");
    if(operacion == "perimetro" && (lado1.value == ""|| lado2.value == ""|| base.value== "")){
        respuesta.innerText = "Ingrese todos los lados y base para calcular el perímetro"
    } else if (operacion == "area" && (altura.value == ""  || base.value== "" ) ) {
        respuesta.innerText = "Ingrese la altura y base"
    }else{
        const rpta = funcionOperacion(lado1.value, lado2.value, base.value, altura.value)
        respuesta.innerHTML = `El ${operacion} del triangulo es: `+ rpta
    }

    
}
const calcularPerimetroTriangulo = () => operacionTriangulo("perimetro",perimetroTriangulo);
const calcularAreaTriangulo = () =>operacionTriangulo("area",areaTriangulo);


// CIRCULO
const perimetroCirculo = (radio) => Math.PI*2*radio 
const diametroCirculo = (radio) => 2*radio 
const areaCirculo = (radio) => Math.PI*(radio**2)
function operacionCirculo(operacion, funcionOperacion){
    const radio = document.getElementById("InputCirculo");
    const respuesta = document.getElementById("resultadoCirculo");
    const rpta = funcionOperacion(radio.value)
    if (radio.value != ""){
        respuesta.innerHTML = `El ${operacion} del circulo es: `+ rpta
    }
}
const calcularPerimetroCirculo = () => operacionCirculo("perimetro",perimetroCirculo);
const calcularAreaCirculo = () => operacionCirculo("area",areaCirculo); 
const calcularDiametroCirculo = () => operacionCirculo("diametro",diametroCirculo); 



// TRIANGULO ISOSCELES
const alturaTriangulo = (lado,lado2,base) =>  Math.sqrt(Number(lado)**2 - ((Number(base)**2)/4));
function operacionTrianguloIsosceles(operacion,funcionOperacion){
    const ladoI1 = document.getElementById("InputTrianguloIsoscelesLados");
    const ladoI2 = document.getElementById("InputTrianguloIsoscelesLados2");
    const baseI = document.getElementById("InputTrianguloIsoscelesBase");
    const respuesta = document.getElementById("resultadoTrianguloIsosceles");
    const rpta = funcionOperacion(ladoI1.value, ladoI2.value, baseI.value)
    if(ladoI1.value == ""|| ladoI2.value == ""|| baseI.value== ""){
        respuesta.innerText = "Ingrese todos los lados y base para calcular la altura"
    }else{
        if (ladoI1.value == ladoI2.value){
        respuesta.innerHTML = `La ${operacion} del triangulo es: `+ rpta
        } else { respuesta.innerHTML = "El triangulo no es isosceles"}
    }

    
}
const calcularAlturaTriangulo = () => operacionTrianguloIsosceles("altura",alturaTriangulo);

