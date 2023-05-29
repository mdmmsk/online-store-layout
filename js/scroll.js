import {menuBlock} from "./main.js";
import {buttons} from "./arrowsWorking.js";

const navigationItem = document.querySelectorAll(".navigation-item");
const navigationBlock  = document.querySelector(".main-header__navigation");
const blockAboutCompany = document.querySelector(".content__about-company");
const containerTypes = document.querySelector(".content__varieties-container");
const buyBlock = document.querySelector(".content__buyBlock");
const sellBlock = document.querySelector(".content__sell-block");
const deliveryBlock = document.querySelector(".content__delivery");
const contactsBlock = document.querySelector(".content__contact");
const containers = document.querySelector(".containers__container");
const img = containers.querySelectorAll("img");

window.addEventListener("load", function(){
	img.forEach(function(item){
		item.src = item.dataset.src;
	})
});

window.addEventListener('scroll', function() {
	if(window.pageYOffset > 30){
		navigationBlock.style.background = "white";
	}else{
		navigationBlock.style.background = "";
	}
	if(window.pageYOffset < (blockAboutCompany.offsetTop - 84) ){
		changeNavigationStyle(0);
	}else if(window.pageYOffset >= (blockAboutCompany.offsetTop - 84) && window.pageYOffset < (containerTypes.offsetTop - 84)){
		changeNavigationStyle(1);
	}else if(window.pageYOffset >= (containerTypes.offsetTop - 84) && window.pageYOffset < (sellBlock.offsetTop - 84)){
		changeNavigationStyle(2);
	}else if(window.pageYOffset >= (sellBlock.offsetTop - 84) && window.pageYOffset < (buyBlock.offsetTop - 84)){
		changeNavigationStyle(3);
	}else if(window.pageYOffset >= (buyBlock.offsetTop - 84) && window.pageYOffset < (deliveryBlock.offsetTop - 84)){
		changeNavigationStyle(4);
	}else if(window.pageYOffset >= (deliveryBlock.offsetTop - 84) && window.pageYOffset < (contactsBlock.offsetTop -210)){
		changeNavigationStyle(5);
	}else{
		changeNavigationStyle(6);
	}
});

for(let i = 0; i <= 6; i++){
	navigationItem[i].addEventListener("click", function(event){
		let widthWindow = document.documentElement.clientWidth - 4;
		navigationStyle();
		event.target.style.color = "#efc02f";
		setTimeout(function(){
			if(widthWindow < 750){
				window.scrollBy(0, -60);
				navigationBlock.classList.remove("main-header__popup-navigation");
				menuBlock.classList.remove("main-header__menu-nav_open");
				navigationBlock.style.display = "";
			}else{
				window.scrollBy(0, -94);
			}
		}, 1)
	})
}

function navigationStyle(){
	navigationItem.forEach(function(item){
		item.children[0].style.color = "black";
	});
}

function changeNavigationStyle(i){
	navigationStyle();
	navigationItem[i].children[0].style.color = "#efc02f";
}
// ================================
buttons[0].addEventListener("click", function(){
	sellBlockBtn.click();
})
buttons[1].addEventListener("click", function(){
	buyBlockBtn.click();
})
export {contactsBlock};