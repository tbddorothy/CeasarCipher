
var alphabet = [..."abcdefghijklmnopqrstuvwxyz1234567890"] ;

//the probability of each letter (a - z) in a sample English text (in percentage)
//https://en.wikipedia.org/wiki/Letter_frequency

var probability = [8.167, 1.492, 2.782, 4.253, 12.702, 2.228, 2.015, 6.094, 6.996, 0.153, 0.772, 4.025, 2.406, 6.749, 7.507, 1.929, 0.095, 5.987, 6.327, 9.056, 2.758, 0.978, 2.36, 0.15, 1.974, 0.074] ;


function cipher() {
	var text = [...document.getElementById('input').value] ;
	for (var x = 0 ; x < text.length ; x++) {
		text[x] = text[x].toLowerCase() ; //converting all text to lower case (I feel it has more readability)
	}
	
	var output = "" ;
	var smallestError = Infinity ; //we essentially return the deciphered text with the closest lexographic probability
	for (var x = 0 ; x < alphabet.length ; x++) {
		var deciphered = [] ;
		for (var i = 0 ; i < text.length ; i++) {
			if (alphabet.indexOf(text[i]) != -1)
				deciphered.push(alphabet[(alphabet.indexOf(text[i]) + x) % alphabet.length]) ;
		}
		var e = findError(deciphered) ;
		if (e < smallestError) {
			smallestError = e ;
			output = deciphered.join('') ;
		}
	}
    document.getElementById("response").innerHTML = output ;
}

//find the probability error for the deciphered text
function findError(deciphered) {
	var size = 0 ;
	for (var x = 0 ; x < 26 ; x++) {
		size += (deciphered.join('').split(alphabet[x]).length - 1) ; //number of alphabetic characters in deciphered text
	}
	
	var error = 0 ;
	for (var x = 0 ; x < 26 ; x++) {
		var prob = (deciphered.join('').split(alphabet[x]).length - 1) / size ; //probability of each letter
		error += Math.abs(100*prob - probability[x]) ; //accumalating probability
	}
	
	return error ;
}
