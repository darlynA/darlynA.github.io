let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}




document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;

  document.documentElement.style.setProperty('--mouse-x', x + 'px');
  document.documentElement.style.setProperty('--mouse-y', y + 'px');

  const fadeElement = document.querySelector('body::after');
  fadeElement.style.opacity = '0';
});






