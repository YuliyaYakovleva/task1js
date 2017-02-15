'use strict';
var a, b;
metka: for ( a = 2; a < 10;  a++) {
	for ( b = 2; b < a; b++) {
		if ( a % b == 0) continue metka;
	}
alert (a);
}