//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b) {
   let s = a * b;
   console.log(s);
}
area(20, 30);

//створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(pi,n) {
    let areaCircle = pi * (n * n);
    console.log(areaCircle);
}
areaOfCircle(3.14, 8);

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(pi, h, r) {
    let areaOfCylinder = 2 * pi * r * (h + r);
    console.log(areaOfCylinder);
}
cylinder(3.14, 7, 12 );

//створити функцію яка приймає масив та виводить кожен його елемент
function iterArr(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
let numbers=[1,2,3,4,6,8,9,10];
iterArr(numbers);

//створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function someText(words){
    document.write(`
        <div>
        <p>${words}</p>
          </div>
          `)
}
someText("Hello humans");

// створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function createOfList(product, price) {
    document.write(`<ul>`);
    document.write(`<li>${product} - ${price}</li>
                    <li>${product} - ${price}</li>
                    <li>${product} - ${price}</li>
                      `)
    document.write(`</ul>`);
}
createOfList("Ford", "37000$");

//створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function listOfProducts(products, amountOfRows) {
    document.write(`<ul>`);
    for ( let i = 0; i < amountOfRows; i++) {
        document.write(`<li>${products}</li>`);
    }
    document.write(`</ul>`);
}
listOfProducts("Cars", 7);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function regularElements(arraysOfRegular) {
    document.write(`<ul>`);
    for (const item of arraysOfRegular) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
regularElements([123, 3565327, 777, "Dodge", "Pontiac", true]);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayOfPersons(persons) {
    for (const person of persons) {
        document.write(` <div>${person.id} ${person.name} ${person.age}</div> `);
    }
}
arrayOfPersons([
    {id:1, name:'Sasha', age:27},
    {id:2, name:'Andriy', age:32},
    {id:3, name:'Oleg', age:34},
    {id:4, name:'Anton', age:18},
    {id:5, name:'Jeka', age:33},
    ]);

//створити функцію яка повертає найменьше число з масиву

function minimumDigit(arrNumbers) {
    let minNumberOfArray = arrNumbers[0];
        for (let i = 0; i < arrNumbers.length; i++) {
            if (arrNumbers[i] < minNumberOfArray) {
                minNumberOfArray = arrNumbers[i];
            }
    }
    console.log(minNumberOfArray);
}
minimumDigit([12, 14, 7, 8, 9, 3, 23]);

//- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sumOfDigits = 0;
    for (const sumElements of arr) {
        sumOfDigits = sumOfDigits + sumElements;
    }
    return sumOfDigits;
}
console.log(sum([12,12,16]));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arraySwap = [17, 19,32, 27,49];
function swap(arraySwap , index1, index2) {
    let temporarySwap = arraySwap[index1];
    arraySwap[index1] = arraySwap[index2];
    arraySwap[index2] = temporarySwap;
    return arraySwap;
}
console.log(swap(arraySwap, 0, 1));

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let myCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            myCurrency = item;
        }
        let result = sumUAH/myCurrency.value;
        return result;
    }

}
console.log(exchange(500,[{currency:'USD',value:39},{currency:'EUR',value:42}],'USD'));