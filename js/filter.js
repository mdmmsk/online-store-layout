const cards = document.querySelectorAll(".content__container-card");
const blockContainers = document.querySelectorAll(".content__containers");
const dontHave = document.querySelector(".content__dont-have");
dontHave.style.display = "none";

let params = {
	condition: "used",
	size: "20",
	type: "dv"
};

filtration(params)

sizeFilterItems.addEventListener("click", function(event){
	if(event.target.tagName !== "LI"){
		return false
	}else{
		if(event.target.dataset.param == 40){
			hcFilter.click();
		}else if(event.target.dataset.param == 20){
			dvFilter.click();
		}
		params.size = event.target.dataset.param;
		filtration(params);
	}
})
conditionFilterItems.addEventListener("click", function(event){
	if(event.target.tagName !== "LI"){
		return false
	}else{
		params.condition = event.target.dataset.param;
		filtration(params)
	}
})
for(let key of typeFilterItems.children){
	key.addEventListener("click", function(){
		typeFilterItems.querySelector(".content__filter-card_active").classList.remove("content__filter-card_active");
		key.classList.add("content__filter-card_active");
		params.type = key.dataset.param;
		filtration(params);
	});
}


function filtration(input){
	for(let key of cards){
		if(key.dataset.condition != input.condition || key.dataset.size != input.size || key.dataset.type != input.type){
			key.style.display = "none";
		}else{
			key.style.display = "";
		}
	}
	if(blockContainers[0].clientHeight < 100){
		dontHave.style.display = "flex";
	}else{
		dontHave.style.display = "none";
	}
}