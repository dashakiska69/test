'use strict';


'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let answer1 = prompt('Введите обязательную статью расходов в этом месяцев');
let answer2 = prompt('Во сколько обойдется?');

var appData = {
    budget: money,
    timeData: time,
    expenses: {answer1: answer1,
                answer2: answer2},
    optionalExpenses: null,
    income: null,
    savings: false
};

console.log((appData.budget - appData.expenses.answer1 - appData.expenses.answer2)/30);
/*
var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let incr = 10,
decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
isClose = false;

console.log(!isChecked || isClose);

if (2*3 == 8) {
    console.log("Верно");
} else {
    console.log('ne verno');
}

let num = 50;

if (num < 49) {
    console.log('ne verno');
} else if (num > 100) {
    console.log('mnogo');
} else {
    console.log('eto tak');
};

(num == 50) ? console.log('verno') : console.log('neverno');

switch (num) {
    case num < 49:
        console.log('ne verno');
        break;
    case num >100:
        console.log('mnogo');
        break;
    case num > 80:
        console.log('mnogo');
        break;
    case num == 50:
        console.log('verno');
        break;
    default:
        console.log('chto to poshlo ne tak');
        break;
}
*/
