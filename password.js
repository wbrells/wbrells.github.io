var remaining = 3;
function check(formId){
	// Get the input value
	var inputPw;
	var inputPw = formId.textin.value;
	// Set result
	if (inputPw == 5280){
		result = "Good PIN";
		window.location.href = 'realindex.html'; // Run the real website.
	}
	else {
		remaining--;
		if (remaining <= 0) {window.close();}
		result = "Bad PIN. You can try " + remaining + " more times.";
	}

	
	// Display result
	
	document.getElementById("textout").innerHTML = result;
	
}