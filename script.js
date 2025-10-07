const slides = document.querySelectorAll(".img");
let slideIndex = 0;
let intervalId = null;

console.log(slides[slideIndex]);

console.log(slides);

initializeSlider();

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  } else {
    console.log("images not found");
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  console.log(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
  console.log(slideIndex);
}

console.log("start");

setTimeout(() => {
  console.log("this runs in 2 seconds");
}, 5000);

console.log("end");
