
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
//const peliculas = [];
//-------- Promesas--------//
//Se construyen con la palabra new Promise(reolve,reject);
const buscarPelicula = (id)=>{
    const pelicula = peliculas.find((item) => item.id === id);
    return new Promise((resolve, reject)=>{
        if(pelicula){
            resolve(pelicula);
        }else{
            reject(`No he encontrado la película con id: ${id}`);
        }
    });
};

//Para obtener los resolve tengo que llamar a .then()
//Para obtener los reject tengo que llamar a .catch()
//tambien puedo usar .finally() que se mostraría siempre
let buscar = setTimeout(()=>{
    buscarPelicula(1)
    .then((pelicula)=>{console.log(pelicula);})
    .catch((err)=>{console.log(err);})
    
},2000);
