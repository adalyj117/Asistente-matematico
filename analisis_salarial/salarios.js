const family = [];
const listaSalary = document.getElementById("listaSalary")

//Agregar 
function agregar(){
  const integrante = document.getElementById("name");
  const salario = document.getElementById("salary");
  
  if(integrante.value !="" && salario.value != ""){
    family.push({
      name: integrante.value,
      salary: Number(salario.value),
    });
  }
  const todoLista = family.map(t => `<tr><td>${t.name} </td>  <td> ${t.salary}</td></tr>`)
  listaSalary.innerHTML = todoLista.join(" ")

  integrante.value = ""
  salario.value = ""
}

const respuesta = document.getElementById("respuesta")