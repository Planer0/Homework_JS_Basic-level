var lett=prompt('Введите символы(без пробелов и запятых)',''),
	word=prompt('Введите текст',''),
	sum=0;
	lett=lett.split('');
	word=word.split('');
for(i=0; i<word.length; i++){
	var a=word[i];
	for(j=0; j<lett.length; j++){
		if (a===lett[j]){
			sum+=1;
		}
	}
}
alert(sum);