var login = prompt ('Логин', '');
var message = ( login == 'Вася' ) ? confirm('Привет') : 
	( login == 'Директор' ) ? confirm('Здравствуйте') : 
	( login == '') ? confirm('Нет логина') : 
	confirm('');