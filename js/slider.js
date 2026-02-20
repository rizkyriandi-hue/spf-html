const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){
slides.forEach((slide,i)=>{
slide.style.transform = `translateY(${100*(i-index)}%)`;
});
}

function nextSlide(){
index++;
if(index >= slides.length){
index = 0;
}
showSlide();
}

showSlide();
setInterval(nextSlide,5000);