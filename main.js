let container = document.getElementById("container");




container.addEventListener("click",(e)=>{
    e.preventDefault();
    //j'active l'evenement lorsqu'on clique sur un element de la classe bouton
    if (e.target.classList.contains("button")){
        //j'eleve la classe active de tout les boutons a l'interieure du container
        container.querySelectorAll(".button").forEach((e) =>{
            e.classList.remove("active")
        })
        //j'ajoute la classe active à l'element cliqué
        e.target.classList.add("active");
    }
    
    
})