/**
 * @author Manuel Gl.
 * @description Escuchador de eventos en el DOOM
 */

const boton = document.getElementById("boton");
const caja = document.getElementById("caja");

//Escuchamos los eventos
boton.addEventListener("click", (e) => {
    //e --> hace referencia al evento que genera
    //e.target --> (muestra el objeto HTML que lanza el evento)
    console.log(`Has pulsado ${e.target}`);
}); 
boton.addEventListener("dblclick", (e) => {
    //cambia el color con el doble click del raton en el botón
    caja.classList.replace("red","blue");
}); 
caja.addEventListener("mouseenter",(e)=>{
    //Metodo para cambiar o reemplazar una clase de CSS classList.replace(original,nueva);
    //classList = lista de calses de la caja
    caja.classList.replace("red","blue");
});
caja.addEventListener("mouseleave",(e)=>{
    //Metodo para cambiar o reemplazar una clase de CSS classList.replace(original,nueva);
    //classList = lista de calses de la caja
    caja.classList.replace("blue","red");
});

document.addEventListener("keydown",(e)=>{ 
    if(e.code =="KeyG"){
        caja.classList.add("green");//añade una clase
        caja.classList.remove("red");//quita una clase
        //caja.style.backgroundColor = "green";
    }  
})

/*
    Eventos del ratón
    - mouseenter -> cuando entramos en la zona que tiene el evento.
    - mouseleave -> cuando salimos de la zona que tiene el evento.
    - mousedown -> cuando pulsamos el botón izquiero del ratón.
    - mouseup -> cuando soltamos el botón izquierdo del raton.
    - mousemove -> cuando movemos el ratón.

    Eventos del teclado
    - keydown -> pulso una tecla.
    - keyup -> suelto una tecla.
    - keypress -> pulso una tecla pero no la soltamos

*/