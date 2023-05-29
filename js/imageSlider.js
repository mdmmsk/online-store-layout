/* Индекс слайда по умолчанию */
const slide = document.querySelectorAll(".slider");

for(let key of slide){
	key.setAttribute("number", 1);
	showSlides(1, key);
}

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide(event) {
	let slider = event.target.parentElement;
	slider.setAttribute("number", (+slider.getAttribute("number") + 1));
  showSlides(+slider.getAttribute("number"), slider);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide(event) {
	let slider = event.target.parentElement;
	slider.setAttribute("number", (+slider.getAttribute("number") - 1));
  showSlides(+slider.getAttribute("number"), slider);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n, input) {
    var i;
    var slides = input.children;
    var dots = input.nextElementSibling.children;
		
    if (n > slides.length - 2) {
      input.setAttribute("number", 1);
    }
    if (n < 1) {
			input.setAttribute("number", slides.length -2);
    }
    for (i = 0; i < slides.length - 2; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[+input.getAttribute("number") - 1].style.display = "block";
    dots[+input.getAttribute("number") - 1].className += " active";
}
const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");
for(let i = 0; i < prev.length; i++){
	prev[i].onclick = minusSlide;
	next[i].onclick = plusSlide;
}
