//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
  const items = document.getElementsByClassName("item");
  for(let i=0; i < items.length;i++){
      items[i].style.display = "none";
  }

  const itemCat = document.getElementsByClassName(cat);
  for(let i = 0; i<itemCat.length;i++){
      itemCat[i].style.display = "block";
  }

  const links = document.querySelectorAll(".trabajos nav a");
  links[0].className = "";
  links[1].className = "";
  links[2].className = "";
  links[3].className = "";

  const itemSeleccionado = document.getElementById(cat);
  itemSeleccionado.className = "borde";
}



document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;

  document.documentElement.style.setProperty('--mouse-x', x + 'px');
  document.documentElement.style.setProperty('--mouse-y', y + 'px');

  const fadeElement = document.querySelector('body::after');
  fadeElement.style.opacity = '0';
});



function efectoHabilidades() {
  var habilidades = document.getElementsByClassName("barra-progreso");
  var distancia_habilidades = window.innerHeight - habilidades[0].getBoundingClientRect().top;

  if (distancia_habilidades >= 200) {
    for (var i = 0; i < habilidades.length; i++) {
      var span = habilidades[i].getElementsByTagName("span")[0];
      span.style.width = span.dataset.width;
      span.classList.add("activado");
    }

    cargarAnimaciones();
  }
}

window.onscroll = function() {
  efectoHabilidades();
};


