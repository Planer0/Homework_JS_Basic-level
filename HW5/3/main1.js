var word=prompt('Введите текст');
word=word.split('');
var sum=0
for(i=0; i<word.length; i++){
	if (word[i]==='а'||word[i]==='е'||word[i]==='ё'||word[i]==='и'||word[i]==='о'||word[i]==='у'||word[i]==='ы'||word[i]==='э'||word[i]==='ю'||word[i]==='я'){
		sum+=1;
	}
}
alert(sum);