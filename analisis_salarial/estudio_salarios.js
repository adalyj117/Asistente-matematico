const datos = [];
const listaDatos = document.getElementById("listaDatos");
const respuestaLista = document.getElementById("respuestaLista");
const rpta = document.getElementById("rpta");

// Agregar persona
function agregarPersona(){
  const integrante = document.getElementById("nombre");
  const salario = document.getElementById("salario");
  const gastos = document.getElementById("gastos");
  
  if(integrante.value !="" && salario.value != ""){
    datos.push({
      name: integrante.value,
      salary: Number(salario.value),
      gastos: Number(gastos.value),
    });
  }
  const agregar = datos.map(function(t){
      return `<tr><td>${t.name} </td> 
       <td> ${t.salary}</td>
       <td> ${t.gastos}</td>
       </tr>`
  } )
  listaDatos.innerHTML = agregar.join(" ")

  integrante.value = "";
  salario.value = "";
  gastos.value = "";
}

// Formulas tasa de ahorro y capacidad de endeudamiento
function ahorro(ingresos, gastos){
  const tasaAhorro = ((ingresos - gastos)/ingresos)*100; //formula tasa de ahorro 
  return tasaAhorro
}
function endeudamiento(ingresos, gastos){
  const capacidad = (ingresos - gastos)*0.35; //formula capacidad de endeudamiento
  return capacidad 
}

// Calcular la capacidad de endeudamiento
function capacidadEndeudamiento(){
  const respuestas = datos.map(
    function(t){
      const capacidad = endeudamiento(t.salary,t.gastos);
      return `<li> La capacidad de endeudamiento de ${t.name} es de: ${capacidad}</li>` 
    }
  );
  respuestaLista.innerHTML = respuestas.join(" ");
  const nota = " Puede asumir una deuda cuya cuota mensual no supere el monto de capacidad de endeudamiento. "
  rpta.innerText = nota
}

// Calcular tasa de ahorro
function tasaAhorro(){
  const tasas = datos.map(
    function(t){
      const tasa = ahorro(t.salary,t.gastos); 
      return `<li> La tasa de ahorro de ${t.name} es de:  ${tasa} %</li>`
    }
  );
  respuestaLista.innerHTML = tasas.join(" ");
  const nota = "Si tu tasa de ahorro es por lo menos el 10%, entonces significa que tienes capacidad de ahorro"
  rpta.innerText = nota + ". Mientras tu tasa aumente será mejor."
}