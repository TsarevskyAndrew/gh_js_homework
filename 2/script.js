console.log('1. Треугольник');
var str = '#';
while (str.length <= 7){
    console.log( str, "\n");
    str+="#";
};



console.log('2. FizzBuzz. для вызова напишите: FizzBuzz()');
function FizzBuzz() {
	for (var num = 1; num <= 100; num++)
	{   if ( num % 5 == 0 && num % 3 == 0){
			console.log( num, " - FizzBuzz");
		} else if (num % 3 == 0){
			console.log(num, " - Fizz");
		} else if (num % 5 == 0){
			console.log(num, " - Buzz");
		} else
			console.log(num);
	}
}



console.log('3. Chess.    Введите: chess()')
var chess = function (size){
  var size = +prompt("Введите размер шахматной доски");
  var board = "";
    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
          board += " ";
        else
          board += "#";
        }
      board += "\n";
    }
  console.log(board); 
}



console.log('4. Minimum.  Введите: minimum()');
var minimum = function min(a, b) {
	var a = prompt("Введите первое число", "число");
    var b = prompt("Введите второе число", "число");
  if (a == b)
  	console.log("Равные числа");
  else if (a < b)
    return a;
  else
    return b;
}



console.log("5. Recursion");
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
console.log("75 " + isEven(75) + "\n" + 
	        "50 " + isEven(50) + "\n" + 
	        "-1 " + isEven(-1) );



console.log("6. счетчик символов. Введите: countChar()");
function countChar(string, ch) {
  var string = prompt("Введите строку", "бла бла бла");
  var ch = prompt("Введите символ", " ");
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}
