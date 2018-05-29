var a = parseFloat( prompt('введите число', 0));
var b = parseFloat( prompt('сколько прибавить к числу?', 0));
var c = parseFloat(prompt('сколько отнять от результата?', 0));
var d = parseFloat( prompt('на сколько разделить результат?', 0));
var e = parseFloat(prompt('на сколько умножить результат?', 0));
var f=((a+b-c)/d)*e;
alert('(('+a+'+'+b+'-'+c+')/'+d+')*'+e+'='+f);