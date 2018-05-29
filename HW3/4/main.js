var arr=[];
while (true) {
	var x=prompt('Введите число','');
	if (isNaN(x)|| x=== ''|| x===null) break;
	arr.push(+x);
}
var sum=0;
for(i=0; i<arr.length; i++){
	sum+=arr[i];
}
alert(sum);