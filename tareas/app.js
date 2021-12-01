let objeto = {
    objeto1 : {
        nombre:"juan",
        apellido:"ramon",
        edad:14,
        mascota:true
    },
    objeto2 : {
        nombre:"pepe",
        apellido:"marquez",
        edad:20,
        mascota:false
    }
};
let miDiv = document.getElementById("div1");
for(let o in objeto){
    if(objeto[o].edad>=15){
        let parrafo = document.createElement("p");
        let parrafoTextNode = document.createTextNode(objeto[o].edad);
        parrafo.appendChild(parrafoTextNode);
        miDiv.appendChild(parrafo);
    }

    
    
};