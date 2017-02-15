'use strict';
function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?'); //через ?
}

function checkAge2(age) {
	return (age > 18) || confirm('Родители разрешили?'); //через ||
}

var age = prompt ('Ваш возраст?', '')
	
if (checkAge(age)) {
  alert( 'Доступ разрешен' );
} else {
  alert( 'В доступе отказано' );
}

if (checkAge2(age)) {
  alert( 'Доступ разрешен' );
} else {
  alert( 'В доступе отказано' );
}