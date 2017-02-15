function pow(x,n) {
	var result = x;
for (var a = 1; a < n; a++) // Повторение n раз
{
	result = result * x;
}
return result;
}

x = +prompt ('Введите число', '');
n = +prompt ('Введите степень', '');

if (n<=1) {
	alert ('Введите правильно степень')
} else {
	alert (pow(x, n));
}