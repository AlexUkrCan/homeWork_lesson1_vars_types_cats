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
