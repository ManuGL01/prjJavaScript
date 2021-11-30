
/**
 * fetch2
 */
let tabla = document.getElementById("miTabla2");
 fetch("https://jsonplaceholder.typicode.com/photos")
 .then((response)=>response.json())
 .then(json =>json.map(accion=>{

     let fila = document.createElement("tr");
     
     
        for(let argumento in accion){
            if(argumento == "id"){//Si la clave es id
                let columna = document.createElement("td");//creamos td
                let columnaTextNode = document.createTextNode(accion[argumento]);//creamos textNode con ese valor
                columna.appendChild(columnaTextNode);//lo añadimos
                fila.appendChild(columna);
            }else if(argumento == "thumbnailUrl"){//si clave es thumnailUrl
                let columna = document.createElement("td");//Creamos td
                let img = document.createElement("img");//creamos img
                img.setAttribute("src",accion[argumento]);//le añadimos atributo src con el valor
                columna.appendChild(img);//añadimos
                fila.appendChild(columna);
            }
        }
        tabla.appendChild(fila);
    }));