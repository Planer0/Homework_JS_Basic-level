function sumTo(n){
  if(n===1) return (1);
  return (n+sumTo(n-1));
}
var n=+prompt('Введите число')
alert(sumTo(n) );