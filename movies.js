let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
      currentSlide = 0;
  } else if (index < 0) {
      currentSlide = slides.length - 1;
  } else {
      currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
  slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
  });
}
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});