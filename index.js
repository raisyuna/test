// Вопрос 1
// Напишите функцию, которая принимает массив чисел и возвращает массив, в котором каждое число увеличено на один.
let arr1 = [23, 24, 25, 26, 27];

function addOne () {
    let answer = [];
        for (let i = 0; i < arr1.length; i++) {
            answer.push(arr1[i] + 1);
        }
        console.log(answer);
    }
    addOne (arr1);

//     Вопрос 2
// Как можно изменить текст в элементе с id "myText" на "Привет, мир!" с помощью JavaScript?

// const myText = getElementById('mytext');
// text = getElementById('text');

// text.innerHTML = 'Hello World';
// myText.append(text);

// Вопрос 3
// Напишите функцию, которая удаляет все ложные (falsy) значения из массива. Ложные значения в JavaScript включают false, null, 0, "", undefined, и NaN.

// let numbers = [11, 0, null, 12, 13, NaN, 14];

// function delFalse () {
//     for (let number of numbers) {
//         if( number == false ) {
//             delete number; } 
//             if (number == null) { 
//                 if ( number == 0) {
//                     if
//              (number == "") {
//                 if
//              (number == undefined) { 
//                 if (number = NaN) {
//             delete number;
//     }
// }
// }
// }
// }
// }
// console.log(delFalse);
//     }
//     delFalse = (numbers);

//     Вопрос 4
// Как вы можете получить значение, введенное в текстовое поле формы с id "userInput"?
// const inputStr = document.querySelector('.input'); 
// btnAdd = document.querySelector('.btn');
// form = document.querySelector('.myForm')
// formValues = document.querySelector('.form-value')

//     form.addEventListener ('submit', function(e) {
//         e.preventDefault();
//         formValues.innerHTML = (inputStr.value)
//         inputStr.value = ' ';
//     });

//     Вопрос 5
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает строку в обратном порядке.

// Вопрос 6
// Как можно добавить элемент в массив arr на первое место? Дайте пример кода.
let arr = [11, 12, 13, 14];
arr.unshift(10);
console.log(arr);

// Вопрос 7
// Напишите функцию, которая проверяет, является ли переданная строка палиндромом.
// Вопрос 10
// Как можно отобразить текущую дату и время в элементе с id "dateTime" с помощью JavaScript?

// const dateTime = document.querySelector('date-time');

// function changeDateTime (Date, Time) {
//     dateTime.push = ()
// }
// Вопрос 12
// Как можно добавить класс "active" элементу с id "menu"?
const activeMenu = menu.classList.contains('active');
