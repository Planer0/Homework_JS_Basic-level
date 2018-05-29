var word=prompt('Введите текст');
word=word.split('');
var sum=0
for(i=0; i<word.length; i++){
	if (word[i]==='а'){
		sum+=1;
	}else if(word[i]==='е'){
		sum+=1;
	}else if(word[i]==='ё'){
		sum+=1;
	}else if(word[i]==='и'){
		sum+=1;
	}else if(word[i]==='о'){
		sum+=1;
	}else if(word[i]==='у'){
		sum+=1;
	}else if(word[i]==='ы'){
		sum+=1;
	}else if(word[i]==='э'){
		sum+=1;
	}else if(word[i]==='ю'){
		sum+=1;
	}else if(word[i]==='я'){
		sum+=1;
	}
}
alert(sum);