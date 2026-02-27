document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Start first slide
  showSlide(current);

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);

});