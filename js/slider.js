const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove("active");
    dots[i]?.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index]?.classList.add("active");
}

function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide,5000);

dots.forEach((dot,i)=>{
  dot.addEventListener("click",()=>{
    currentSlide = i;
    showSlide(i);
  });
});

<script>

const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {

toggle.classList.toggle("active");
mobileMenu.classList.toggle("active");

});

</script>