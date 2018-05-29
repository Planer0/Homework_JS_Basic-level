var arr=prompt('Введите массив','');
	arr=arr.split('');
function bub(){
	for(i=0; i<arr.length; i++){
		for(j=0; j<arr.length-i; j++){
			if(arr[j]>arr[j+1]){
				var x=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=x;
			}
		}
	}
	return arr;
}
alert(bub());