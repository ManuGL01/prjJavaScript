
//añadir name, email, gro[]
let tabla = document.getElementById("miTabla2");
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((response)=>response.json())
 .then(json =>json.map(accion=>{
    //console.log(accion);
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
            }else if(argumento == "address"){//si clave esaddress
                for(let argumento2 in accion[argumento]){
                    if(argumento2 == "geo"){
                        for(let argumento3 in accion[argumento][argumento2]){
                            if(argumento3 == "lat"){
                                let columna = document.createElement("td");//Creamos td
                                let columnaTextNode = document.createTextNode(accion[argumento][argumento2][argumento3]);//creamos textNode con ese valor
                                columna.appendChild(columnaTextNode);//lo añadimos
                                fila.appendChild(columna);
                            }else{
                                let columna = document.createElement("td");//Creamos td
                                let columnaTextNode = document.createTextNode(accion[argumento][argumento2][argumento3]);//creamos textNode con ese valor
                                columna.appendChild(columnaTextNode);//lo añadimos
                                fila.appendChild(columna);
                            }
                        }
                        
                    }
                }
                //console.log(accion[argumento]);
                //console.log(accion[argumento]);
                // let columna = document.createElement("td");//Creamos td
                // console.log(accion[argumento]);
                // let columnaTextNode = document.createTextNode(accion[argumento]);//creamos textNode con ese valor
                // columna.appendChild(columnaTextNode);//lo añadimos
            }
        }
        tabla.appendChild(fila);
    }));