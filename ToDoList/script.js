var submit = document.getElementById("submit");
var toDo = document.getElementById("toDo");
var ul = document.getElementById("ul");
function list(){
	if (toDo.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(toDo.value));
		ul.appendChild(li);
		toDo.value = "";
	}
}
submit.addEventListener("click", function(){
	list();
})