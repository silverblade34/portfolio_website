document.addEventListener('DOMContentLoaded', function() {
  const hoverImageYanapay = document.getElementById('hoverImageYanapay');
  
  hoverImageYanapay.addEventListener('mouseenter', () => {
    hoverImageYanapay.src = './assets/presentation_yanapay2.png';
  });

  hoverImageYanapay.addEventListener('mouseleave', () => {
    hoverImageYanapay.src = './assets/presentation_yanapay.png';
  });

  const hoverImageAduanas = document.getElementById('hoverImageAduanas');
  
  hoverImageAduanas.addEventListener('mouseenter', () => {
    hoverImageAduanas.src = './assets/presentation_aduanas2.png';
  });

  hoverImageAduanas.addEventListener('mouseleave', () => {
    hoverImageAduanas.src = './assets/presentation_aduanas.png';
  });
});

function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}