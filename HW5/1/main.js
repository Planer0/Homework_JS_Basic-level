var S=prompt('Введите слово');
function word(){
    S=S.split('');
    var D=S;
    S=S.join('');
    D=D.reverse('');
    D=D.join('');
    if(S===D){
        return('это палиндром');
    }else{
        return('это не палиндром');
    }
}
alert(word());