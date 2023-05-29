function setCursorPosition(pos, e) {
	if (e.setSelectionRange) e.setSelectionRange(pos, pos);
	else if (e.createTextRange) {
		let range = e.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select()
	}
}
function mask(e) {
	let matrix = this.placeholder, i = 0, def = matrix.replace(/\D/g, ""), val = this.value.replace(/\D/g, "");
	def.length >= val.length && (val = def);
	matrix = matrix.replace(/[_\d]/g, function(a) {
		return val.charAt(i++) || "_"
	});
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
	setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function() {
	let input = document.querySelectorAll(".content__input-number");
	let beltInput = document.querySelector(".content__belt_input-number");
	for(let key of input){
		key.addEventListener("input", mask, false);
		setCursorPosition(3, key);
	}
	beltInput.addEventListener("input", mask, false);
	setCursorPosition(3, beltInput);
});