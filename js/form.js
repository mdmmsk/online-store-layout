const icons = document.querySelectorAll(".main-header__icon");
const typeBtns = document.querySelectorAll(".content__type-btn");
const containerButtons = document.querySelectorAll(".content__container-btn");
const formBackground = document.querySelector(".content__form-background");
const radioName = document.querySelectorAll(".content__radio-name");
let closeBtn;

feedback.addEventListener("click", callbackForm);
icons[1].addEventListener("click", callbackForm);
icons[0].addEventListener("click", function(){
	contactsBlockBtn.click();
});

for(let key of typeBtns){
	key.addEventListener("click", callbackForm)
}
for(let key of containerButtons){
	key.addEventListener("click", callbackForm)
}
for(let key of radioName){
	key.addEventListener("click", function(){
		key.previousElementSibling.checked = true;
		
	})
}

function callbackForm(){
	formBackground.style.display = "flex";
	formBackground.style.top = `${window.pageYOffset}px`;
	document.body.style.overflow = "hidden";
	closeBtn = document.querySelectorAll(".content__close-btn");
	closeBtn[1].addEventListener("click", function(){
		formBackground.style.display = "";
		document.body.style.overflow = "";
	})
}
const inputName = document.querySelectorAll(".content__input-name");
const inputPhoneNumber = document.querySelectorAll(".content__input-number");
const inputMail = document.querySelectorAll(".content__input-email");
const orderSubmitBtn = document.querySelectorAll(".content__form-button");
const beltInputName = document.querySelector(".content__belt_input-name");
const beltInputPhone = document.querySelector(".content__belt_input-number");
const beltButton = document.querySelector(".content__belt-button");
const messageDisplay = document.querySelectorAll(".content__message-display");
const inputRadio = document.querySelectorAll(".content__input-radio");
const sellRadio = document.querySelectorAll(".content__sell-radio");
const buyRadio = document.querySelectorAll(".content__buy-radio");
const textarea = document.querySelectorAll("textarea");
let radioItem;

class Request {
	constructor(message){
		this.token = "5556371516:AAHNvQd6xKZ1DMzIYSjWxESg-qdf1Q-T8-w";
		this.chatId = "1122918314";
		this.url = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${message}`;
	}
	request(){
		return fetch(this.url, {
			method : "POST",
		});
	}
}

async function requestMyData(order) {
	let myDataRequest = new Request(order);
	try{
		let response = await myDataRequest.request();
		let result = await response.json();
		return result;
	}catch(err){
		alert(err.message);
	}
}

for(let i = 0; i < orderSubmitBtn.length; i++){
	orderSubmitBtn[i].addEventListener("click", function(){
		if(sellRadio[i].checked){
			radioItem = "Купить";
		}else if(buyRadio[i].checked){
			radioItem = "Продать";
		}
		let txt = {
			clientName: inputName[i].value,
			number: inputPhoneNumber[i].value,
			mail: inputMail[i].value,
			radio: radioItem,
			text: textarea[i].value
		}
		checkingOrderData(txt, i)
	})
}

beltButton.addEventListener("click", function(){
	let orderData = {
		clientName: beltInputName.value,
		number: beltInputPhone.value,
		radio: "Продать - belt",
	}
	
	if(orderData.clientName == ""){
		beltInputName.style.border = "solid 2px #c00";
	}else if(orderData.number.includes("_")){
		beltInputName.style.border = "";
		beltInputPhone.style.border = "solid 2px #c00";
	}else{
		beltInputName.style.border = "";
		beltInputPhone.style.border = "";
		let order = JSON.stringify(orderData, null, 2);

		requestMyData(order);
	}
})

function checkingOrderData(input, i){
		let keys = Object.values(input);
		if(keys[0] == ""){
			messageDisplay[i].style.color = "";
			messageDisplay[i].innerHTML = "Введите ваше имя!";
		}else if(keys[1].includes("_")){
			messageDisplay[i].style.color = "";
			messageDisplay[i].innerHTML = "Введите корректный номер телефона!";
		}else if(keys[2] !== "" && (!keys[2].includes("@"))){
			messageDisplay[i].style.color = "";
			messageDisplay[i].innerHTML = "Введите корректный почтовый адрес!";
		}else if(keys[3] == undefined){
			messageDisplay[i].style.color = "";
			messageDisplay[i].innerHTML = "Выберите - Купить/Продать";
		}else{
			let order = JSON.stringify(input, null, 2);
			requestMyData(order).then(
				(result) => {
					if(result.ok){
						messageDisplay[i].style.color = "green";
						messageDisplay[i].innerHTML = "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.";
						inputName[i].value = "";
						inputPhoneNumber[i].value = "+7(___)___-__-__";
						inputMail[i].value = "";
						setTimeout(function(){
							messageDisplay[i].innerHTML = ""
						}, 5000)
					}else{
						messageDisplay[i].innerHTML = "Что-то пошло не так. Попробуйте отправить форму ещё раз.";
					}
				}
			)
		}
	}