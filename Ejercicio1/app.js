document.addEventListener("click",accion);

function accion(e) {
    if(e.target.matches("li")){
        if(e.target.children[0].style.display == "none"){
            
            e.target.children[0].style.display = "block";
        }else{
            e.target.children[0].style.display = "none";
        };
    };
};