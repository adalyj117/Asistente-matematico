// CUADRADO
const perimetroCuadrado = (lado) => lado*4
const areaCuadrado = (lado) => lado*lado
function operacion(operacion, funcionOperacion){
    const lado = document.getElementById("InputCuadrado");
    const respuesta = document.getElementById("resultadoCuadrado");
    const rpta = funcionOperacion(lado.value)
    respuesta.innerHTML = `El ${operacion} del cuadrado es: `+ rpta
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
    const rpta = funcionOperacion(lado1.value, lado2.value, base.value, altura.value)
    respuesta.innerHTML = `El ${operacion} del triangulo es: `+ rpta
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
    respuesta.innerHTML = `El ${operacion} del circulo es: `+ rpta
}
const calcularPerimetroCirculo = () => operacionCirculo("perimetro",perimetroCirculo);
const calcularAreaCirculo = () => operacionCirculo("area",areaCirculo); 
const calcularDiametroCirculo = () => operacionCirculo("diametro",diametroCirculo); 
