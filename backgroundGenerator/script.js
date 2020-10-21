var picker1 = document.querySelector("#picker1");
var picker2 = document.querySelector("#picker2");
var body = document.querySelector("#body");
var css = document.querySelector("h4");
function setGradient(){
	body.style.background = "linear-gradient(to right,"+ picker1.value + ","+ picker2.value + ")";
	css.textContent = body.style.background + ";";
}
picker1.addEventListener("input", setGradient);
picker2.addEventListener("input", setGradient);

	