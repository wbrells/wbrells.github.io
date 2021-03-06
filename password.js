// Last updated 07/08/2021

var remaining = 3;

function stringToHash(string) {
	var hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
		char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
	}
	return hash;
}

function check(formId){
	// Get the input value
	var inputPw;
	var inputPw = formId.textin.value;
	// Using hashing so actual PIN is not visible.
	if (stringToHash(inputPw) == 1628757){
		result = "Good PIN!"
		rrh = atob('cmVhbGluZGV4Lmh0bWw=');
		window.location.href = rrh;
	}
	else {
		remaining--;
		if (remaining <= 0) {window.close();}
		result = "Bad PIN. You can try " + remaining + " more times.";
	}
	
	// Display the "Bad PIN" message
	
	document.getElementById("textout").innerHTML = result;
	
}