alert('Este codigo esta conectado… 🐺');




document.addEventListener('keydown', (KeyPress) => {
    if (KeyPress.key === "1"){
        console.log("hello") 
      
    }
  })


  let hero = document.querySelector('.hero');
  let moveBy = 10;
  window.addEventListener('load', () => {
      hero.style.position = 'absolute';
      hero.style.left = 0;
      hero.style.top = 0;
  });
  window.addEventListener('keyup', (e) => {
      switch (e.key) {
          case 'A':
              hero.style.left = parseInt(hero.style.left) - moveBy + 'px';
              break;
          case 'D':
              hero.style.left = parseInt(hero.style.left) + moveBy + 'px';
              break;
          case 'W':
              hero.style.top = parseInt(hero.style.top) - moveBy + 'px';
              break;
          case 'S':
              hero.style.top = parseInt(hero.style.top) + moveBy + 'px';
              break;


      }
  });

  
