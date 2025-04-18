const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
const imgWidth = images[0].offsetWidth + 20; 
let index = 0;


images.forEach(img => {
  const clone = img.cloneNode(true);
  carousel.appendChild(clone);
});

function scrollCarousel() {
  index++;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(${-imgWidth * index}px)`;

 
  if (index >= images.length) {
    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(0px)`;
      index = 0;
    }, 500); 
  }
}

setInterval(scrollCarousel, 5000);

document.querySelectorAll('.social-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  });
});
