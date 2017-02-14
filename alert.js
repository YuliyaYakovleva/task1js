'use strict';
var username = prompt('Введите логин', '');
if (username == null) {
	alert('Вход отменен');
} else if (username == 'Админ') {
	
	 var password = prompt('Пароль?', '');
 if (password == null) {
	 alert('Вход отменен');
 } else if (password == 'Черный Властелин') {
	 alert('Добро пожаловать!');
 } else {
	 alert('Пароль неверен')
 }
	

} else {
	alert('Я вас не знаю')
}