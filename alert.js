'use strict';
var a,b;
function compNumb(a, b) {
	if ( a > b ) {
		return b;
		} else {
			return a;
		}
}

a = prompt('Цифра a', '');
b = prompt('Цифра b', '');

alert(compNumb(a, b));