// -------------------------Obtener los elementos de navegación de mi header-----------------------
var navItems = document.querySelectorAll('.item a');

// Agregar evento de desplazamiento al documento
document.addEventListener('scroll', function () {
  // Obtener la posición de desplazamiento actual
  var scrollPosition = window.scrollY;

  // Iterar sobre los sections para verificar la posición
  document.querySelectorAll('main section').forEach(function (section) {
    var sectionId = section.getAttribute('id');
    var sectionOffsetTop = section.offsetTop;

    // Verificar si el usuario está en el section actual
    if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + section.offsetHeight) {
      // Eliminar la clase 'active' de todos los elementos de navegación
      navItems.forEach(function (item) {
        item.parentElement.classList.remove('active');
      });

      // Agregar la clase 'active' al elemento de navegación correspondiente al section actual
      document.querySelector('.item a[href="#' + sectionId + '"]').parentElement.classList.add('active');
    }
  });
});


// ------------------Estilos para navegacion---------------------

var menuToggle = document.querySelector('.menu-toggle');
var navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
  console.log("----------------------1")
  menuToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Agregar evento de clic a cada elemento de navegación
var navItems = document.querySelectorAll('.item a');
navItems.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    // Obtener el objetivo del enlace (el ID de la sección a la que se desplaza)
    var target = this.getAttribute('href');

    // Desplazarse a la sección utilizando el desplazamiento suave (smooth scrolling)
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });

    // Ocultar el header
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});

