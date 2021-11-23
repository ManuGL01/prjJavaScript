/**
 * @author Manuel Gl.
 * @description Crear efecto acordeón al pulsar los botones
 */

const eleAcordeon = document.getElementsByClassName("acordeon");

//console.log(eleAcordeon);
//Recorremos cada uno de los elementos

for(let elemento of eleAcordeon) {
    //elemento.classList.toggle(xxxxx) <-- cambia el elemento de una clase el elemento
    elemento.addEventListener("click",(e)=>{
        elemento.classList.toggle("active");//pone la clase si no la tiene, la quita si la tiene
        let panel = elemento.nextElementSibling;
        if(panel.style.display == "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block"
        }
        
        
    })

    // elemento.addEventListener("mouseenter",(e)=>{
    //     elemento.style.backgroundColor = "orange";
    // })
    // elemento.addEventListener("mouseleave",(e)=>{
    //     elemento.style.backgroundColor = "#fed120";
    // })
}