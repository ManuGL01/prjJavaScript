/**
 * @author Manuel Gl.
 * @description Uso de CallBack
 * Una función de callBack es una función que se pasa a otra
 * función como argumento (último argumento), que posteriormente
 * es invocado dentro de una función externa
 */

const peliculas = [
    {
        id: 1,
        titulo: "Título película 1",
        sinopsis: "contenido película 1"
    },
    {
        id: 2,
        titulo: "Título película 2",
        sinopsis: "contenido película 2"
    }
];

const buscarPelicula = (id,callback)=>{
    //filtro por id
    const pelicula = peliculas.find((item )=> item.id === id);
    if(pelicula){
        //Entro cuando encuentro la película
        callback(pelicula);
    }else{
        //Entro cuando no encuentra la película
        callback("No encontrado");
    }
    
};
let buscar = setTimeout(()=>{
    buscarPelicula(1,(pelicula)=>{
        console.log(pelicula);
        buscarPelicula(2,(pelicula)=>{
            console.log(pelicula);
            buscarPelicula(1,(pelicula)=>{
                console.log(pelicula);
                buscarPelicula(1,(pelicula)=>{
                    console.log(pelicula);
                    buscarPelicula(1,(pelicula)=>{
                        console.log(pelicula);
                        buscarPelicula(1,(pelicula)=>{
                            console.log(pelicula);
                            buscarPelicula(1,(pelicula)=>{
                                console.log(pelicula);
                                buscarPelicula(1,(pelicula)=>{
                                    console.log(pelicula);
                                    buscarPelicula(1,(pelicula)=>{
                                        console.log(pelicula);
                                        buscarPelicula(1,(pelicula)=>{
                                            console.log(pelicula);
                                            buscarPelicula(1,(pelicula)=>{
                                                console.log(pelicula);
                                                
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    
},3000);

console.log("al final");



// let tiempo = setInterval(reloj,1000);
// function reloj(){
//     let d = new Date();
//     let t = d.toLocaleTimeString();
//     document.getElementById("reloj").innerHTML = t;
// }

