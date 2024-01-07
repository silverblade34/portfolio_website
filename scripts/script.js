document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  // Construir el mensaje para WhatsApp
  var mensajeWhatsApp = 'Hola, vengo de tu portafolio web, estoy interesado en tu trabajo \n\n' +
    'Nombre: ' + nombre + ' \u{1F464}\n' + // Icono de persona
    'Correo electrónico: ' + email + ' \u{1F4E7}\n' + // Icono de sobre
    'Mensaje: ' + mensaje; // No se agregan emoticones específicos en este caso

  // Codificar el mensaje para usarlo en la URL
  var mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

  // Construir la URL de redireccionamiento de WhatsApp con el mensaje
  var urlWhatsApp = 'https://wa.me/937132403?text=' + mensajeCodificado;

  // Abrir la URL de WhatsApp en una nueva pestaña
  window.open(urlWhatsApp, '_blank');
});


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

