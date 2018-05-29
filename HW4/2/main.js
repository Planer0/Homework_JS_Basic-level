function pow() {
	var rez=x;
	for(var i=1; i<n; i++) {
		rez*=x;
	}
	return rez;
}
var x=+prompt('Введите число', ''),
	n=+prompt('Введите степень', '');
if (n<=0||n%1!=0){
	alert('Введите допустимые значения');
}
else{
	alert(pow());
}