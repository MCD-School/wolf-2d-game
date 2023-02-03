document.addEventListener('keydown', function(event){
    console.log(event, 'tocaste una tecla')
    if(event.key === 'ArrowRight'){
        console.log(event, 'tocaste la flecha derecha')

        var hero = document.getElementById("hero")
        hero.style.left = hero.offsetLeft+30+'px'//hero se mueve a la derecha
        
    }
    else if(event.key === 'ArrowLeft'){
        var hero = document.getElementById("hero")
        hero.style.left = hero.offsetLeft - 30+'px'//hero se mueve a la derecha

    }
})

