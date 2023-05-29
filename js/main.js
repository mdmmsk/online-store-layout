const mainImageBlock = document.querySelector(".content__main-image");
const navigationBlock = document.querySelector(".main-header__navigation");
const textGroup = document.querySelector(".content__text-group");
let menuBlock = document.createElement("div");
menuBlock.className = "main-header__menu-nav";
menuBlock.append(document.createElement("span"))
const headerBlock = document.querySelector(".main-header__top");

const filterTitle = document.querySelectorAll(".content__filter-title");
const filterItems = document.querySelectorAll(".content__filter-items");
const bottomFilters = document.querySelector(".content__bottom-filter-cards");
const containerInfo = document.querySelectorAll(".container__info");

for(let key of sizeFilterItems.children){
	key.addEventListener("click", changeFilterStatus);
}
for(let key of conditionFilterItems.children){
	key.addEventListener("click", changeFilterStatus);
}

function changeFilterStatus(event){
	let flterGroup = event.target.parentElement;
	flterGroup.querySelector(".content__filter-item-active").classList.remove("content__filter-item-active");
	event.target.classList.add("content__filter-item-active");
}


let widthWindow = document.documentElement.clientWidth - 4;
function positionMainImage(){
	let mainTitle = document.querySelector(".content__title_active-group");
	
	if (mainTitle.clientHeight > 150) {
		mainImageBlock.style.top = "200px";
		textGroup.style.height = "600px";
	} else {
		mainImageBlock.style.top = "";
		textGroup.style.height = "";
	}
};
if(widthWindow < 600){
	for (let i = 0; i < containerInfo.length; i++) {
		let text = containerInfo[i].textContent;
		containerInfo[i].innerHTML = text.slice(0, 10) + text.slice(36);
	}
};
function mainBlockOR(){
	widthWindow = document.documentElement.clientWidth - 4;
	if (widthWindow < (750 - 20)) {
		headerBlock.prepend(menuBlock);
		mainImage.style.width =  "533px";
		mainImage.style.height = "407px";
	} else {
		menuBlock.remove();
		mainImage.style.width =  "1067px";
		mainImage.style.height = "586px";
	};
	if(widthWindow < 620 - 20){
		mainImageBlock.style.left = `${(widthWindow * 0.5) - 145}px`;
	}else {
		mainImageBlock.style.left = ``;
	};
	positionMainImage();
}
for(let key of filterTitle){
	key.addEventListener("click", shd)
}
function shd(event){
	if (widthWindow < 767){
		if(!Boolean(event.target.check)){
			closeFilterPopup();
			event.target.nextElementSibling.style.display = "flex";
			event.target.check = true;
			event.target.style.background = `url("./img/mini-arrow_up.png") no-repeat 93%`;
		}else{
			event.target.nextElementSibling.style.display = "";
			event.target.check = false;
			event.target.style.background = "";
		}
	}
}
function closeFilterPopup(){
	filterItems[0].style.display = "";
	filterItems[1].style.display = "";
	bottomFilters.style.display = "";
	for(let item of filterTitle){
		item.check = false;
		item.style.background = "";
	}
}
menuBlock.addEventListener("click", function () {
	navigationBlock.classList.toggle("main-header__popup-navigation");
	menuBlock.classList.toggle("main-header__menu-nav_open");
	if (!navigationBlock.style.display) {
		navigationBlock.style.display = "block";
	} else {
		navigationBlock.style.display = "";
	}
});

const popups = document.querySelectorAll(".content__popup");
for(let key of popups){
	key.addEventListener("click", function(){
		if(key.className.length === 14){
			for(let item of popups){
				item.className = "content__popup";
			}
			key.classList.toggle("content__popup-active");
		}else{
			key.classList.toggle("content__popup-active");
		}
	})
}

export {mainBlockOR, positionMainImage, menuBlock}