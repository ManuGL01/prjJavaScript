/**
 * @author Manuel Gl.
 * @description Crearemos un gestor de tareas
 */


function inicio() {
    //Declaramos las variables a usar
    let texto =document.getElementById("text");
    let miDiv2 = document.getElementById("div2");
    let buscador = document.getElementById("buscador");
    let tareasEliminadas = [];
    let tareasSet = new Set();//Creamos un Set para evitar repeticiones
    let fecha =  new Date().toLocaleString();//Creamos un objeto Date, con nuestra fecha y hora local 
    let contador= 0;//Contador de tareas



/**
 * Crea el párrafo y añade el valor del input a un Set para evitar que se repita.
 * Si se repite, el borde del input se pondrá rojo
 */
function crearTarea() {
    texto.style.borderColor="black";//Por defecto el borde del input es negro
    
    if(!tareasSet.has(texto.value + ": " + fecha) && texto.value!=""){//Comprobamos si el Set ya tiene el valor del input
        tareasSet.add(texto.value + ": " + fecha);//Si no lo tiene lo añadimos
        let parrafo = document.createElement("p");//Creamos el párrafo
        let textoNode = document.createTextNode(texto.value + ": " + fecha);//Creamos el texto del párrafo con el valor del input y la fecha en que se crea
        parrafo.appendChild(textoNode);//Añadimos el texto al párrafo como hijo
        miDiv2.appendChild(parrafo);//Añadimos el párrafo al div
        selectChild();//Llamamos al método para seleccionar a los hijos cada vez que lo creamos

        document.getElementById("contador").innerHTML = "Nº de tareas: " + ++contador;//Añadimos +1 al contador de tareas cuando creamos un párrafo
    }else{
        texto.style.borderColor = "red";//Si el set ya contiene el valor, cambiamos el borde a rojo
        
    }
    
}

/**
 * Permite borrar el contenido tanto del div como del Set, siempre que el div tenga algo dentro
 * @param {Event} ev 
 */
function borrarTarea(ev){
    if(miDiv2.hasChildNodes()==false){//Comprobamos que el div tenga hijos, de no ser así, mostramos un error por consola
        console.log("Error");
    }else{
        tareasEliminadas.push(ev.target.textContent);//Añadimos el valor de la tarea a la que hacemos target al array
        let tareaEliminada ="";
        for(let tarea of tareasEliminadas){//Sacamos el valor de cada posición del array
            tareaEliminada += tarea + " , ";//Lo añadimos a una variable
            
        }
        console.log(`Tareas eliminadas: ${tareaEliminada }`);//La mostramos por consola
        tareasSet.delete(ev.target.textContent);//Si coincide el valor del input con el valor del Set, lo borramos
        
        miDiv2.removeChild(ev.target);//Borramos el párrafo hijo del div al que le hacemos el target
       
       document.getElementById("contador").innerHTML = "Nº de tareas: " + --contador;//Restamos -1 al contador de tareas cuando borramos un párrafo
    }

}

/**
 * Hace el efecto hover de CSS cambiando unas características por otras
 * @param {Event} ev 
 */
 function hover(ev){
    let p = ev.target;
    if(p.style.color == "red" && p.style.textDecoration == "line-through"){//Si estas dos propiedades se cumplen
        p.style.color ="black";//Cambiamos el color de la letra a negro
        p.style.textDecoration = "none";//Quitamos el tachado
    }else{
        p.style.color ="red";//Si no se cumple cambiamos el color de la letra a rojo
        p.style.textDecoration = "line-through";//Añadimos el tachado
        p.style.cursor = "pointer";//Añadimos el cursor estilo pointer
    }
}

/**
 * Obtenemos los elemento hijo del div en el que almacenamos las tareas para aplicarles funciones
 */
function selectChild() {
    let hijos  = miDiv2.children;//Obtenemos el HTMLCollection y lo recorremos
    for(let hijo of hijos){//A cada hijo le añadimos una función
        hijo.addEventListener("click",borrarTarea);
        hijo.addEventListener("mouseover",hover);
        hijo.addEventListener("mouseout",hover);
    }
    
}

// buscador.addEventListener("keyup", function (e){Intento de buscador
//     let tarea = e.target.value;//Detecta cada tecla que entra en el input
//     console.log(tarea);
// })

//------------------------ Funcionalidades adicionales ------------------------//

/**
 * Llama al document y detecta que tecla pulsa, si la tecla es "Enter",
 * hará la función de crearTarea
 */
document.addEventListener("keydown",function(event){
    if(event.code == "Enter"){
        crearTarea();
    }
});

/**
 * Permite cambiar el background a un color más oscuro simulando el modo noche y guarda el modo
 */
 myStorage = window.localStorage;//Creamos un localStorage para guardar el background de la web y que no se pierda al recargar o entrar de nuevo a la web
 function backG(){
    
    let body = document.getElementById("body");//Obtenemos el body del document
    if(body.style.background == "darkgrey"){//Comprobamos si ya tiene el background oscuro, si es true, lo cambiamos a blanco 
        myStorage.setItem('backG' , 'whitesmoke');//Añadimos una clave/valor a nuestro storage con el valor(color) opuesto al que ya hay
        body.style.background = myStorage.getItem('backG');//Cambiamos el color del background con la clave de nuestro localStorage
        
    }else{//En caso de que sea el background blanco, lo cambia a gris oscuro
        myStorage.setItem('backG' , 'darkgrey');//Repetimos el proceso guardando como valor(color) el opuesto al que ya hay
        body.style.background = myStorage.getItem('backG');//Cambiamos el color del background con la clave de nuestro localStorage
    }
     
}

/**
 * Carga la función al entrar a la web o recargarla
 */
function changeBG(){
    if(myStorage.getItem('backG')){//Comprobamos que el item guardado con anterioridad está
        body.style.background = myStorage.getItem('backG');//Le aplicamos el color de background que está almacenado en el localStorage
    }
}
document.onload = changeBG();//Ejecutamos la función al entrar a la web


//------------------------ FIN Funcionalidades adicionales ---------------------//

//Escuchadores de eventos de los botones de la página
document.getElementById("lanzar").addEventListener("click",crearTarea);
document.getElementById("cambiar").addEventListener("click",backG);
}
window.addEventListener("load",inicio);
