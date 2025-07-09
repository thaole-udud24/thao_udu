let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const slideContainer = document.querySelector('.slides');
  slideContainer.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
