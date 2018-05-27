/* 1.
var str = "Hello, " + "Alex Papiev" ;
alert(str);
*/

/* 2.
var name = prompt("Please, write your name");
alert("Hello, " + name); 
*/

/* 3. Умножение чисел
var name = prompt("Write your name");
alert("Hello, " + name);
alert("This is mini-calculator");
var x = prompt("Write a first number");
var y = prompt("Write a second number")
alert(x * y);
*/

/* 
4. Типы данных:
PS (typeof(x) подсказывает какой тип данных используется.

//undefined - неопределенное значение
var v;
alert(v);
alert(typeof(v));

// number - число целое или с точкой
var x = 1;
alert(x);
alert(typeof(x));

// string - строка
var x = "строка какая-нибудь пишется в ковычках";
alert(x);
alert(typeof(x));
*/

/*
5. Функция parseInt (преобразует строку в число)
PS parseInt хорош когда складываем (+) числа. При других операторах типа умножния (*) или деления (/) parseInt можно не писать:
var name = prompt("Write your name");
alert("Hello, " + name);
alert("This is mini-calculator 2.0");
var x = parseInt( prompt("Write a first number"));
var y = parseInt( prompt("Write a second number"));
alert(x + y);
*/

/*5a. Функция parseInt (другая запись):
var name = prompt("Write your name");
alert("Hello, " + name);
alert("This is mini-calculator 2.0");

var x = prompt('write first number');
var x = parseInt(x);

var y = prompt('write second number');
var y = parseInt(y);

alert(x + y); 
*/

/*6 Пример умножения на любое введеное число:
var number = prompt('Введи любое число');
var result = number * 2;
alert(result);
*/

/*7 Вывести все математические выражения с числами:
var x = parseInt( prompt('vvedi 1-oe chislo') );
var y = parseInt( prompt('vvedi 2-oe chislo') );
var result_1 = x * y;
alert('Произведение чисел ' + result_1);
var result_2 = x / y;
alert('Деление чисел ' + result_2);
var result_3 = x - y;
alert('Разница чисел ' + result_3);
var result_4 = x + y;
alert('Сложение чисел ' + result_4);

или другая запись со знаком (+) впереди:

var x = +prompt('vvedi 1-oe chislo', '');
var y = +prompt('vvedi 2-oe chislo', '');
var result_1 = x * y;
alert('Произведение чисел ' + result_1);
var result_2 = x / y;
alert('Деление чисел ' + result_2);
var result_3 = x - y;
alert('Разница чисел ' + result_3);
var result_4 = +x + +y;
alert('Сложение чисел ' + result_4);
*/

/*8.  Оператор ветвления if-else

var name = prompt("Введите Ваше имя:");
alert("Добро пожалувать, " + name);
alert("Отгадай 2 загадки");
var i = 0;
alert('Загадка №1');
var x = prompt('Встанет, до неба достанет?');
if ( (x == 'Радуга') || (x == 'радуга') )
    {
    alert('ВЕРНО!');
    var i = i + 1;
    }
else 
    {
    alert('НЕ ВЕРНО!');
    }

alert("Загадка №2");

var y = prompt("Висит груша - нельзя скушать?");
if( (y == 'Лампочка') || (y == 'лампочка') )
    {
    alert ('ВЕРНО!');
    var i = i + 1;
    }
else
    {
    alert ('НЕ ВЕРНО!');
    }
alert('Правильных ответов набрано: ' + i );
alert('GAME OVER!');
*/

/*9. МАССИВЫ 

var animalList = ['lion', 'tiger', 'cat', 'dog', 'parrot', 'dolphin'];
console.log(animalList[4]); //parrot
console.log(animalList[0]); //lion

var arr = [1, 7, 2, 55, 27, 43];
console.log(arr[4]); //27
*/

/* 10 Польз-ль вводит три числа. Найти их среднее арифметическое:

var x = 4;
var y = 2;
var z = 18;
alert( (+x + +y + +z) / 3 );

или

var a = +prompt('vvedi 1-oe chislo');
var b = +prompt('vvedi 2-oe chislo');
var c = +prompt('vvedi 3-e chislo');
var res = (a + b + c) / 3;
alert(res);
*/

/* 10.1 найти наибольшее из двух чисел:

var x = 11;
var y = 5;
var res;
if ( x > y ){
    //ветка по +
    res = x;
}
else{
    //ветка по -
    res = y;
}
console.log(res);
*/

/*
 10.2 найти наибольшее из трех чисел:

var x = 5;
var y = 4;
var z = 3;
var res;
if( (x > y) && (x > z) ){
    res = x;
   }
else if(y > z){
    res = y;
}
else{
    res = z;
}
console.log(res);
*/

/*10.2a найти наибольшее из трех чисел. Сделать проверку на правильность ввода именно числовых данных от польз-ля, а не каких-либо других типов данных
( функция isNaN() проверяет все ли числа являются числами):

var x = +prompt('Введи 1-ое число');
var y = +prompt('Введи 2-ое число');
var z = +prompt('Введи 3-е число');
var res;

if ( isNaN(x) || isNaN(y) || isNaN(z) )
    {
     res = 'Не все числа введены правильно'   
    }
else if( x > y && x > z)
    {
        res = x;
    }

else if(y > z)
    {
        res = y;  
    }
else
    {
        res = z; 
    }
alert(res);
*/


/* ЦИКЛЫ
    цикл WHILE:
Польз-ль вводит положительное число. По порядку и по убыванию вывести все числа от текущего(введенного пользователем) до 0.

var x = +prompt('Введи число');
while ( x >= 0 )
    {
        alert(x);
        x--;
    }

    цикл FOR:

for (var x = 1; x<15; x++)
    {
        console.log(x);
    }


for (var x = 1; x<15; x+=3)
    {
        console.log(x);
    }
  */

/* Найти среднее из трех чисел. 
Сделать проверку на корректность вводимых данных с помощью цикла. 
Т.е, если пользователь вводит не число, то мы его снова кидаем на ввод данных.
var x = +prompt('Введи 1-ое число');
var y = +prompt('Введи 2-ое число');
var z = +prompt('Введи 3-е число');
var res;

//1шаг. сделаем проверку на корректность вводимых данных (сделаем это c помощью цикла WHILE, а не If (т.к. If проверил бы только 1 круг цикла):

while ( isNaN(x) || isNaN(y) || isNaN(z) )
    {
    x = +prompt('ВНИМАТЕЛЬНО Введи 1-ое число');
    y = +prompt('ВНИМАТЕЛЬНО Введи 2-ое число');
    z = +prompt('ВНИМАТЕЛЬНО Введи 3-е число');
    }

//2шаг.Сделаем проверку на равенство чисел м/у собой (чтобы среди чисел не было одинаковых):
if ( (x==y) || (x==z) || (y==z) )
    {
        res = 'невозможно найти среднее';
    }
//3шаг. Находим логически среднее число из трех.
else if ( ((x>y) && (x<z)) || ((x<y) && (x>z)) )
    { 
        res = x;
    }

else if ( ((y>x) && (y<z)) || ((y<x) && (y>z)) )
    { 
        res = y;
    }
else
    {
        res = z;
    }
alert(res);
*/

                 /* jquery START */

/* напишем скрипт, который делает поведение нашей кнопки "Dark theme"
с помощью jquery, т.е. выберем эту кнопку и сделаем скрипт
который будет добавлять или удалять класс у всей страницы*/

/* 1.шаг Обращаемся к кнопке button по тегу. через сам селектор тега button, 
тк у нас на сайте только одна кнопка. имеем право так делать!
$('button') - так мы обращаемся к элементу в jquery
 
   2.шаг Используем метод .click(), т.е когда будем кликать по элементу
что-то должно происходить.   

   3.шаг Внутри метода .click() пишется function(){}
   4.шаг Сразу внутри уже самой функции function(){} пишутся те действия
 которые произойдут. (в нашем примере будет удаляться или добавляться класс night)
     - выбираем наш тег body
     - добавляем метод toggleClass - который добавляет или убирает
     название класса
 */

$('button').click( function(){
    $('body').toggleClass('night');


} ); 

