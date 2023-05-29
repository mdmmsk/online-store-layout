import { positionMainImage } from "./main.js"

const arrows = document.querySelector(".content__slider-arrows");
const mainTitles = document.querySelector(".content__titles");
const sliderLine = document.querySelectorAll(".content__slider-line")
const listText = document.querySelectorAll(".content__list-text");
const tabs = document.querySelectorAll(".content__tabs-tab");
const buttons = document.querySelectorAll(".content__button");

for (let key of tabs) {
	key.addEventListener("click", function () {
		for (let i = 0; i < 2; i++) {
			mainTitles.children[i].classList.toggle("content__title_active-group");
			sliderLine[i].classList.toggle("content__slider-line_active");
			tabs[i].classList.toggle("content__tabs-tab_active");
			buttons[i].classList.toggle("content__active-button");
			positionMainImage();
		}
		for (let element of listText) {
			element.classList.toggle("content__list-text_active-group");
		}
	})
}

for (let key of arrows.children) {
	key.addEventListener("click", function () {
		for (let i = 0; i < 2; i++) {
			mainTitles.children[i].classList.toggle("content__title_active-group");
			sliderLine[i].classList.toggle("content__slider-line_active");
			tabs[i].classList.toggle("content__tabs-tab_active");
			buttons[i].classList.toggle("content__active-button");
			positionMainImage();
		}
		for (let element of listText) {
			element.classList.toggle("content__list-text_active-group");
		}
	})
}
// =================================
let widthWindow = document.documentElement.clientWidth - 4;
const firstRows = document.querySelector(".content__first-row");
const secondRow = document.querySelector(".content__second-row");
const leftArrows = document.querySelectorAll(".content__arrows-shadow-left");
const rightArrows = document.querySelectorAll(".content__arrows-shadow-right");

function visibilityArrows(input, number) {
	if (input.scrollLeft == 0) {
		leftArrows[number].style.display = "none";
	} else {
		leftArrows[number].style.display = "";
	}
}
visibilityArrows(firstRows, 0);
visibilityArrows(secondRow, 1);

rightArrows[0].children[0].addEventListener("click", function () {
	firstRows.scrollBy((firstRows.clientWidth - 4), 0);
	visibilityArrows(firstRows, 0);
})
rightArrows[1].children[0].addEventListener("click", function () {
	secondRow.scrollLeft += 130;
	visibilityArrows(secondRow, 1);
})
leftArrows[0].children[0].addEventListener("click", function () {
	firstRows.scrollBy(-(firstRows.clientWidth - 4), 0);
	visibilityArrows(firstRows, 0);
})
leftArrows[1].children[0].addEventListener("click", function () {
	secondRow.scrollLeft -= 130;
	visibilityArrows(secondRow, 1);
})
// =====================================
let fragment = new DocumentFragment();
for (let i = 0; i < 6; i++) {
	fragment.append(secondRow.children[i].cloneNode(true))
}
firstRows.append(fragment);
const typeCard = document.querySelectorAll(".content__type-card");
if (widthWindow > 580) {
	for (let i = 6; i < 12; i++) {
		firstRows.children[i].style.display = "none";
	}
	secondRow.style.display = "";
} else if (widthWindow < 580) {
	for (let key of typeCard) {
		key.style.margin = `0 ${(widthWindow - 10 - 250) / 2}px`;
	}
	secondRow.style.display = "none";
}

function containerTypeOR() {
	widthWindow = document.documentElement.clientWidth - 4;
	firstRows.scrollLeft = 0;
	if (widthWindow < 580) {
		for (let i = 6; i < 12; i++) {
			firstRows.children[i].style.display = "";
		}
		for (let key of typeCard) {
			key.style.margin = `0 ${(widthWindow - 10 - 250) / 2}px`;
		}
		secondRow.style.display = "none";
	} else if (widthWindow > 580) {
		secondRow.style.display = "";
		for (let i = 6; i < 12; i++) {
			firstRows.children[i].style.display = "none";
		}
		for (let key of typeCard) {
			key.style.margin = "";
		}
	}
}


export { containerTypeOR, buttons }