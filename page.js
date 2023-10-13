function appendToInput(value){
	document.getElementById('input_btn').value +=value;
}

function clearInput(){
let input_btn = document.getElementById('input_btn');
 input_btn.value = input_btn.value.slice(0, -1);
}

function calculateInput(){
	try{	
	document.getElementById('input_btn').value = 
	eval(document.getElementById('input_btn').value);
	}catch(error){
		document.getElementById('input_btn').value = 'error';
	}
}

