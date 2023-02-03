/*let wolf = document.getElementById("wolf"); //se crea una variable que hace referencia a la imagen del html

document.addEventListener("keydown", function(event) {

    if (event.key == "ArrowRight")
    console.log(event)

    else    if (event.key == "ArrowLeft")
    console.log(event)

});
*/


//MANERA DEL GABO

let lobo = document.getElementById("wolf"); //se crea la variable lobo que llama a la etiqueta html'img'con su id 'wolf'


document.addEventListener("keydown", function(event) { //se crea un escuchador de eventos tipo keydown para que se active la función con el parámetro 'event', es decir, que cada vez que se pulse una tecla se dispare la acción de que se mueva el lobito

    if (event.key === "ArrowRight") //se crea la condición de que si se pulsa la tecla flecha-derecha, se ejecute la acción de que se mueva el lobito
    { 
        var lobo = document.getElementById('wolf') //se declara la variable lobo para obtener la etiqueta html 'img' por su id 'wolf'
    lobo.style.left = `${lobo.offsetLeft + 10}px`//se llama a la subvariable .style para acceder al ccs del elemento y especificamos que el lobito se mueva 10 pixeles hacia la derecha a partir del eje Y del elemento
    } 
    else    if (event.key === "ArrowLeft") //se crea la condición de y si también pulsa la tecla flecha-izquierda, se ejecuta la acción de que se mueva el lobito
    {
        var lobo = document.getElementById('wolf') //se declara la variable lobo para obtener la etiqueta html 'img' por su id 'wolf'
    lobo.style.left = `${lobo.offsetLeft - 10}px` //se llama a la subvariable .style para acceder al ccs del elemento y especificamos que el lobito se mueva 10 pixeles hacia la izquierda a partir del eje Y del elemento
    }
    else    if (event.key === "ArrowDown") //se crea la condición de y si también pulsa la tecla flecha-abajo, se ejecuta la acción de que se mueva el lobito
    {
        var lobo = document.getElementById('wolf') //se declara la variable lobo para obtener la etiqueta html 'img' por su id 'wolf'
    lobo.style.top = `${lobo.offsetTop + 10}px` //se llama a la subvariable .style para acceder al ccs del elemento y especificamos que el lobito se mueva 10 pixeles hacia abajo a partir del eje X del elemento
    }                                              
    else    if (event.key === "ArrowUp") //se crea la condición de y si también pulsa la tecla flecha-arriba, se ejecuta la acción de que se mueva el lobito
    {
        var lobo = document.getElementById('wolf') //se declara la variable lobo para obtener la etiqueta html 'img' por su id 'wolf'
    lobo.style.top = `${lobo.offsetTop - 10}px` //se llama a la subvariable .style para acceder al ccs del elemento y especificamos que el lobito se mueva 10 pixeles hacia arriba a partir del eje X del elemento
    }                                           //la pantalla está situada en el cuarto cuadrante del eje de coordenadas, es decir, (derecha | abajo) ó (x|-y). Eso explica que las coordenadas en Y estén por defecto en negativo y se deba colocar al contarrio de la lógica, un menos para que suba y un más para que baje. 

    });


//MI MANERA    
/*let wolf = document.getElementById("wolf");
let moveBy = 0;

document.addEventListener("keydown", function(event) {

           
    if (event.key == "ArrowLeft"){
        moveBy += -10;  
        wolf.style.marginLeft = moveBy + "px";   
    }
    if (event.key == "ArrowRight"){
        moveBy += 10; 
        wolf.style.marginLeft = moveBy + "px";
    }

    if (event.key == "ArrowUp"){ 
        moveBy += -10
        wolf.style.marginTop = moveBy + "px";
    }

    if (event.key == "ArrowDown"){
        moveBy += 10 
        wolf.style.marginTop = moveBy + "px"
    }
  
});
*/
 
// LA MANERA DEL LUCAS

//let hero = document.querySelector('.hero');
//let moveBy = 10; window
//window.addEventListener('load', () => {
   //hero.style.position = 'absolute';
   //hero.style.left = 0;
   //hero.style.top = 0;
//});
//window.addEventListener('keyup', (event) => {
    //switch (event.key) {
        //case'A':
            //hero.style.left = parseInt(hero.style.left) - moveBy + 'px';
            //break;
        //case'D':
            //hero.style.left = parseInt(hero.style.left) + moveBy + 'px';
            //break;
        //case'W':
            //hero.style.top = parseInt(hero.style.top) - moveBy + 'px';
            //break;
        //case'S': 
            //hero.style.top = parseInt(hero.style.top) + moveBy + 'px';
            //break;
    //}
//});
