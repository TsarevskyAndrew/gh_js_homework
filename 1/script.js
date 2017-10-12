//Массивы
var numbers=['1','2','3','4','5','6','7','8','9','10','11'];
console.log(numbers);
console.log('Массив чисел');

var words = ['Hello','friend','!','How', 'are','you','?'];
console.log(words);
console.log('Массив слов');


console.log('$find');
function bigger(element, index, array) {
    if (element.length>3) {
        return true;
    }
}
console.log(words.find(bigger));
//НЕ ПОНЯЛ. нашел такой пример. метод передает true, 
// а следующий в свою очередь выдает элемент.
// условия if передаються в find?

console.log('$перебираем с помощью forEach');
numbers.forEach(function(item, i, numbers) {
  console.log( i + ": " + item + " (массив:" + numbers + ")" );
});


console.log('$Создаем новый массив с выбранными элементами используя filter');
var num = numbers.filter(function(n){
	return n < 6;
});
console.log('оставшиеся элементы  ' + num);


console.log('$использование map');
var lengthArr = words.map(function(name) {
  return name.length;
});
console.log ('Длина слов в words  ' + lengthArr);


console.log('$удаляем последний элемент используя pop ');
var del = numbers.pop();
console.log('Удаленный элемент - ' + del + '  Наш массив - ' + numbers);


console.log('$Добавляем новый элемент 21 с помощью push');
numbers.push ("21");
console.log('Добавился в конец массива  ' + numbers);


console.log('$Concat');
var words2 = words.concat('cheer', 'up','!');
console.log("получился новый массив с добавленными в конец элементами:  " + words2);


console.log('$indexOf');
console.log(words2.indexOf('Hello') + " - Hello");
console.log(words2.indexOf('friend') +  ' - friend');
console.log(words2.indexOf('cheer') + ' - cheer');
console.log(words2.indexOf('up') + ' - up');


console.log('$join');
var plus = numbers.join('+');
console.log(plus);
/* где-то был метод для того чтобы запятые означающие разделитель
 между обьектами массива не отображались, типа замена на пробел*/


console.log('$slice');
var cheeruper = words2.splice(0, 7);
console.log(words2);
console.log("удаленные элементы - " + cheeruper);


console.log('$splice');
numbers.splice(1,1);
console.log('удален второй элемент ' + numbers);
numbers.splice(0,2, 'first', 'second', 'third');
console.log('Замена  ' + numbers);
var remove = numbers.splice(0,3);
console.log('то что удалил - ' + remove);
numbers.splice(0,0 , 'one','two','three');
console.log('просто вставка с первой позиции - ' + numbers);


console.log('$shift');
numbers.shift();
console.log(numbers);


console.log('$unshift');
var unshifted = words2.unshift('Hey')
console.log(unshifted);
console.log(words2);

