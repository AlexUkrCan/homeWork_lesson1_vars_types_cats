//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a, b) => a * b
console.log(area(30, 30));

//створити функцію яка обчислює та повертає площу кола з радіусом r
let areaOfCircle = (pi, n) => pi * (n * n);
console.log(areaOfCircle(3.14, 12));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (pi, h, r) => 2 * pi * r * (h + r)
console.log(cylinder(3.14, 5, 17));

//створити функцію яка приймає масив та виводить кожен його елемент
let numbers = [12, 17, 3, 4, 78, 8, 9, 10];
let iterArr = (array) => {
    for (const arrayElement of array) {
    }
}
console.log(numbers);

//створити функцію яка створює параграф з текстом . Текст задати через аргумент
let someText = (words) =>`${words}`
console.log(someText("Hello people"));

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createOfList = (product, price)=> {
    <ul>
                    <li>${product} - ${price}</li>
                    <li>${product} - ${price}</li>
                    <li>${product} - ${price}</li>

    </ul>
}
createOfList("Ford", "37000$");

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 let listOfProducts = (products, amountOfRows) =>{
    (`<ul>`);
    for ( let i = 0; i < amountOfRows; i++) {
        (`<li>${products}</li>`);
    }
    (`</ul>`);
}
listOfProducts("Cars", 7);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let regularElements = (arraysOfRegular)=> {
    `<ul>`
    for (const item of arraysOfRegular) {
        `<li>${item}</li>`;
    }
    `</ul>`
}
regularElements([123, 3565327, 777, "Dodge", "Pontiac", true]);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayOfPersons = (persons) => {
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

// створити функцію яка повертає найменьше число з масиву
let minimumDigit = (arrNumbers)=> {
    let minNumberOfArray = arrNumbers[0];
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] < minNumberOfArray) {
            minNumberOfArray = arrNumbers[i];
        }
    }
    console.log(minNumberOfArray);
}
minimumDigit([5, 14, 7, 8, 9, 45, 23]);

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr)=> {
    let sumOfDigits = 0;
    for (const sumElements of arr) {
        sumOfDigits = sumOfDigits + sumElements;
    }
    return sumOfDigits;
}
console.log(sum([17,19,21]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індекс
let arraySwap = [77, 88 ,99, 27, 49];
let swap = (arraySwap , index1, index2)=> {
    let temporarySwap = arraySwap[index1];
    arraySwap[index1] = arraySwap[index2];
    arraySwap[index2] = temporarySwap;
    return arraySwap;
}
console.log(swap(arraySwap, 0, 1));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let myCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            myCurrency = item;
        }
        let result = sumUAH/myCurrency.value;
        return result;
    }

}
