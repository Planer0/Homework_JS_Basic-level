var login=prompt('Введите логин',''),
	message=(login==='Вася')?'Привет':
		(login==='Директор')?'Здравствуйте': 
		(login==='')?'Нет логина':
		'';
alert(message);