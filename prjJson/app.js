/**
 * @description Uso de Json con JS
 * https://jsonplaceholder.typicode.com/users/
    Crear una tabla dinámica que almacene por filas el name, username, email, geo
    de todos los usuarios de todos los ficheros de ese json

    Crear una cookie que contenga el número de usuarios que he insertado en la tabla

    Crear utilizando webstorage una clave que contenga el código de colores asignado
    a vuestra paginaweb(body) y a la tabla
 */

const jsonData = '[{"id":1,"name":"Leanne Graham","username":"Bret"},{"id":2,"name":"Luisa","username":"Breto"}]';


try {
  var objData = JSON.parse(jsonData);
  console.log(objData);
} catch (error) {
  console.log(error);
}


let tabla = document.getElementById("miTabla");

for(let dato of objData){
  let fila = document.createElement("tr");
  //console.log(i);
  tabla.appendChild(fila);
  for(let clave in dato){
    let columna = document.createElement("td");
    columna.appendChild(document.createTextNode(dato[clave]));
    fila.appendChild(columna);
  }
}
// for(let i = 0; i<objData.length; i++) {
//   let fila = document.createElement("tr");
//   //console.log(i);
//   tabla.appendChild(fila);
//   for(let clave in objData[i]){
//     let columna = document.createElement("td");
//     columna.appendChild(document.createTextNode(objData[i][clave]));
//     fila.appendChild(columna);
//   }
// }

function aumentarDia() {
  let fecha = new Date();
  console.log(fecha.getUTCDay);
  document.cookie = "nombre=numeroUsuarios ; expires"
}
aumentarDia();