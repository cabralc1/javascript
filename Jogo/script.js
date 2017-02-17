var click_me = document.getElementById("click_me");

click_me.addEventListener('click', fnClickMe);

function fnClickMe(){
	alert("TESTE");
}


function validateNumber(argument) {
	var number = document.getElementById("number_val").value;

	if(isNaN(number) || (number >= 1 && number <= 10)){
		alert("input is not value")
	} else {
		alert("Is Value");
	}
}

function over(){
	console.log("TESTE");
}