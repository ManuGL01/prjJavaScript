
//añadir name, email, gro[]
let tabla = document.getElementById("miTabla2");
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((response)=>response.json())
 .then(json =>json.map(accion=>{

     let fila = document.createElement("tr");
     
     
        for(let argumento in accion){
            if(argumento == "name"){//Si la clave es id
                let columna = document.createElement("td");//creamos td
                let columnaTextNode = document.createTextNode(accion[argumento]);//creamos textNode con ese valor
                columna.appendChild(columnaTextNode);//lo añadimos
                fila.appendChild(columna);
            }else if(argumento == "email"){//si clave es thumnailUrl
                let columna = document.createElement("td");//Creamos td
                let columnaTextNode = document.createTextNode(accion[argumento]);//creamos textNode con ese valor
                columna.appendChild(columnaTextNode);//lo añadimos
                fila.appendChild(columna);
            }else if(argumento == "geo"){//si clave es
                let columna = document.createElement("td");//Creamos td
                console.log(accion[argumento]);
                let columnaTextNode = document.createTextNode(accion[argumento]);//creamos textNode con ese valor
                columna.appendChild(columnaTextNode);//lo añadimos
            }
        }
        tabla.appendChild(fila);
    }));