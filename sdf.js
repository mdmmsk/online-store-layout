// window.onresize = function () {
	
// 	if (widthWindow < (767 - 19)) {
// 		headerBlock.prepend(menuBlock);
// 		mainImage.setAttribute('src', "./img/mini__main_image.png");
// 		mainImage.setAttribute('width', "533px");
// 		mainImage.setAttribute('height', "407px");
// 	} else {
// 		menuBlock.remove();
// 		mainImage.setAttribute('src', "./img/main_image_widthout_shadow.png");
// 		mainImage.setAttribute('width', "1067px");
// 		mainImage.setAttribute('height', "586px");
// 	}
// 	if ((widthWindow < (590 - 19) && mainTitle.clientHeight > 117) {
// 		mainImageBlock.style.top = "155px";
// 		mainImageBlock.style.left = "10%";
// 	} else {
// 		mainImageBlock.style.top = "";
// 		mainImageBlock.style.left = "";
// 	}
	// if (widthWindow < (600)) {
	// 	let cardMargin = (widthWindow - cardWidth) / 2;
	// 	for (let i = 1; i < 10; i++) {
	// 		card[i].style.margin = `0 auto 0 ${cardMargin}px`
	// 	}
	// }
	// if (widthWindow < (690)) {
	// 	for (let i = 0; i < 3; i++) {
	// 		filterTitle[i].insertAdjacentHTML('beforeend', clone);
	// 		filterTitle[i].onclick = function (event) {
	// 			let sibling = event.target.nextElementSibling;
	// 			if(!Boolean(sibling.checking)){
	// 				for (let key of sibling.children) {
	// 					key.style.display = "block";
	// 					sibling.checking = true;
	// 				}
	// 			}else{
	// 				for (let key of sibling.children) {
	// 					key.style.display = "none";
	// 				}
	// 				for(let i = 0; i < 3; i++){
	// 					filterTitle[i].style.display = "inline-block";
	// 				}
	// 				sibling.checking = false;
	// 			}
	// 		}
	// 	}
	// }
	// if(widthWindow < 600){
	// 	for (let i = 0; i < containerInfo.length; i++) {
	// 		let text = containerInfo[i].textContent;
	// 		containerInfo[i].innerHTML = text.slice(0, 10) + text.slice(36);
	// 	}
	// }
// }