/**
 * @author Manuel Gl.
 * @description Flujo de eventos(burbuja)
 */

function info(evento) {
    console.log(`Soy el evento ${this.className}
    y el click lo lanzó ${evento.target.className}`)
    evento.preventDefault();
}

const eventosDiv = document.querySelectorAll(".flujos-eventos div");//lista de div que hay en el section
//console.log(eventosDiv);

eventosDiv.forEach((div)=>{
    //div.addEventListener("click",info,false);
    div.addEventListener("click",info,{
        capture:false,
        once:true//solo se ejecuta 1 vez el evento
    });
});