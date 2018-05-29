function sumTo(){
	for (i=1; i<=n; i++){
		sum+=i;
	}
	return sum;
}
var n=+prompt('Введите число'),
	sum=0;
alert(sumTo());