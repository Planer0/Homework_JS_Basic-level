var a=prompt('Введите 1 слово'),
    b=prompt('Введите 2 слово');
function words(){
    a=a.split('');
    b=b.split('');
    a=a.sort();
    b=b.sort();
    a=a.join('');
    b=b.join('');
    if (a===b){
        return('эти слова являются анаграммами');
    }else{
        return('эти слова не являются анаграммами');
    }
}
alert(words());