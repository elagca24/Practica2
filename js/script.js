var user=prompt("Ingresa tu nombre");
document.getElementById("log-in-msg").innerHTML="Bienvenido(a) " + user;
var nuevaTarea=document.getElementById("nuevaTarea");
const table=document.getElementById("tareas");
//Función para agregar actividades a la tabla
function Agregar(){
    table.innerHTML+=`
                    <tr>
                        <td>${nuevaTarea.value}</td>
                    </tr>`;
}