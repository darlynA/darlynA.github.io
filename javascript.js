document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;

  document.documentElement.style.setProperty('--mouse-x', x + 'px');
  document.documentElement.style.setProperty('--mouse-y', y + 'px');

  const fadeElement = document.querySelector('body::after');
  fadeElement.style.opacity = '0';
});

// Función que se ejecuta cuando el elemento es visible en el viewport
function activarAnimacion(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activado'); // Añadimos una clase para activar la animación
      observer.unobserve(entry.target); // Dejamos de observar el elemento después de activar la animación
    }
  });
}

// Configuramos el Intersection Observer para observar el elemento con la clase .barra-progreso
const opcionesObservador = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Si al menos el 50% del elemento es visible, se activará la animación
};

const barraProgreso = document.querySelector('.barra-progreso');

const observador = new IntersectionObserver(activarAnimacion, opcionesObservador);
observador.observe(barraProgreso);
