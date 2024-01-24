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

