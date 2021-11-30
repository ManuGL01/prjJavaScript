/**
 * La API Fetch proporciona una interfaz para recuperar 
 * recursos de internet. Sustituye XMLHttpRequest
 */

 let tabla = document.getElementById("miTabla");
fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response)=>response.json())
    .then(json =>json.map(accion=>{
        
        let fila = document.createElement("tr");
        for(let argumento in accion){
            
            
            let columna = document.createElement("td");
            let columnaTextNode = document.createTextNode(accion[argumento]);
            fila.appendChild(columna);
            columna.appendChild(columnaTextNode);
        }
        tabla.appendChild(fila);
    }));


    /**
     * 
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
     */