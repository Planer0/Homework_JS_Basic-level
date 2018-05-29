var text=prompt('Введите текст',''),
	a=text,
	b=0;
text=text.split('.');
text=text.join('!');
text=text.split('!');
text=text.join('?');
text=text.split('?');
for(i=0; i<text.length-1; i++){
	var c=text[i];
	text[i]=text[i].replace(/\s/g, '');
	text[i]=text[i].split(',');
	text[i]=text[i].join('');
	alert(c+'('+text[i].length+')');
	b+=text[i].length;
}
alert(a+'('+b+')');