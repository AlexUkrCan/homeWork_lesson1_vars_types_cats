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
let createOfList = (product, price) =>`
    <ul>
                   <li>${product} - ${price}</li>
                   <li>${product} - ${price}</li>
                   <li>${product} - ${price}</li>
   </ul>
`
console.log(createOfList("Dodge", "29000$"));

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
