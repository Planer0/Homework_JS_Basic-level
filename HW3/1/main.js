var login=prompt('Введите логин','');
if (login=='Админ'){
    var pasword=prompt('Введите пароль','pasword');
    if (pasword=='Черный властелин'){
        alert('Добро пожаловать!');
    }else if (pasword == null){
        alert('Вход отменён');
    }else{
        alert('Пароль неверен');
    }
}else if(login==null){
    alert('Вход отменен');
}else{
    alert('Я вас не знаю');
}