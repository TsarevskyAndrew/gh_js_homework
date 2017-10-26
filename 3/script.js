 /* 1. Створити об'єкт. В цьому об'єкті написати власні реалізації 
 наступних методів масиву: pop(), push(), slice(), join(), reverse() */
 arrayMethods = {
   push: function (element) {
       this[this.length] = element;
       return this.length;
   },
 
   pop: function () {
       if (this.length === 0) {
           return;
       }
       let deleted = this[this.length - 1];
       this.length = this.length - 1;
       return deleted;
   },
 
   slice: function (begin = 0, end = this.length) {
       if (this.length === 0) {
           return [];
       }
       if (begin < 0) {
           begin = this.length - (-begin);
       }
       if (end < 0) {
           end = this.length - (-end);
       }
 
       let resArr = [];
       let j = 0;
       for (let i = begin; i < end; i++) {
          resArr[j] = this[i];
           j++;
      }
       return resArr;
   },
 
   join: function (string) {
       let resString ='';
       for (let i = 0; i < this.length; i++) {
           resString += this[i];
           if (i !== this.length - 1) {
               resString += string;
           }
       }
       return resString;
   },
 
   reverse: function () {
       let tmp = this.slice();
       let j = 0;
       for (let i = tmp.length -1; i >= 0; i--) {
           this[j] = tmp[i];
           j++;
       }
       return this;
   }
 
 };



//2. Оголосити масив для тестування методів ['a', 'b', 'c', 4, 5, 6]
//3. Продемонструвати роботу кожного методу двома способами:
//3.1. викликаючи метод цього об'єкту, в контексті масиву
//3.2. перевизначивши метод прототипу масиву
 
 var arr = ['a', 'b', 'c', 4, 5, 6];
     console.log('method push');
     console.log(arrayMethods.push.call(arr, 'contextual method'));
     Array.prototype.push = arrayMethods.push;
     console.log(arr.push('proto method'));
     console.log(arr);
 
     console.log('method pop');
     console.log(arrayMethods.pop.call(arr));
     Array.prototype.pop = arrayMethods.pop;
     console.log(arr.pop());
     console.log(arr);
 
     console.log('method slice');
     console.log(arrayMethods.slice.call(arr, -4, 5));
     Array.prototype.slice = arrayMethods.slice;
     console.log(arr.slice(-4 , 5));
     console.log(arr);
 
     console.log('method join');
     console.log(arr.join('=>'));
     console.log(arrayMethods.join.call(arr, '=>'));
     Array.prototype.join = arrayMethods.join;
     console.log(arr);
 
     console.log('method reverse');
     Array.prototype.reverse = arrayMethods.reverse;
     console.log(arr.reverse());
     console.log(arr);
     console.log(arrayMethods.reverse.call(arr));
     console.log(arr);



//4. Зробіть, щоб в чисел з'явився метод sum(), 
//який отримує інше число і на виході дає їх суму,
//наприклад x.sum(y) === x + y

  Number.prototype.sum = function (argument) {
  return this.valueOf() + argument;
  };
  console.log('prototype method sum');
     let a = 5;
     let b = a.sum(5);
     console.log(b);
     console.log(a);
     console.log(a.sum(b) === a + b);



//5. Рекурсія
//5.1. Написати рекурсивну функцію для обчислення факторіалу
//5.2. Написати рекурсивну функцію для обчислення степені числа
//5.3. Написати рекурсивну функцію для обчислення суми цифр цілого числа 
//     (наприклад, сума цифр числа 3742 буде 3+7+4+2 = 16)
//5.4. Виконати завдання 5.1 - 5.3 без використання рекурсії 
//     і визначити який варіант працює швидше 
//     (наприклад, скільки часу треба на 10000 обчислень) 


function getFactorialRecursion(number) {
     if (number === 1) {
         return number;
     } else if (number > 1) {
         return number * getFactorial(number - 1)
     }
 }
 
 function getFactorial(number) {
     let res = 1;
     for (let i = 1; i <= number; i++) {
         res *= i;
     }
     return res;
 }
 
 function powRecursively(number, pow) {
     if (pow === 1) {
         return number;
     } else if (pow === -1) {
         return 1 / number;
     } else if (pow === 0) {
         return 1;
     } else if (pow > 1) {
         return number * powRecursively(number, pow - 1);
     } else if (pow < 0) {
         return 1 / (number * powRecursively(number, -pow - 1));
     }
 }
 
 function pow(number, pow) {
     let res = 1;
     if (pow === 0) {
         return 1;
     } else if (pow > 0) {
         for (let i = 0; i < pow; i++) {
             res *= number;
         }
         return res;
     } else if (pow < 0) {
         for (let i = 0; i < -pow; i++) {
             res *= number;
         }
         return 1 / res;
     }
 }
 
 function numbersSumRecursively(number) {
     let sum = number % 10;
     if (number >= 10) {
         sum += numbersSumRecursively(Math.floor(number / 10));
     }
     return sum;
 }
 
 function numbersSum(number) {
     let res = 0;
     while (number) {
         res += number % 10;
         number = Math.floor(number / 10)
     }
     return res;
 }

     console.log('FACTORIAL METHOD');
     console.time('factorial recursion method');
     for (let i = 0; i < 1000000; i++) {
         getFactorialRecursion(20)
     }
     console.timeEnd('factorial recursion method');
 
     console.time('factorial method');
     for (let i = 0; i < 1000000; i++) {
         getFactorial(20)
     }
     console.timeEnd('factorial method');
 
     console.time('pow recursion method');
     for (let i = 0; i < 1000000; i++) {
         powRecursively(2, -5);
     }
     console.timeEnd('pow recursion method');
 
     console.time('pow method');
     for (let i = 0; i < 1000000; i++) {
         pow(2, -5);
     }
     console.timeEnd('pow method');
 
     console.time('numbersSum recursion method');
     for (let i = 0; i < 1000000; i++) {
         numbersSumRecursively(3742);
     }
     console.timeEnd('numbersSum recursion method');
 
     console.time('numbersSum method');
     for (let i = 0; i < 1000000; i++) {
         numbersSum(3742);
     }
     console.timeEnd('numbersSum method');