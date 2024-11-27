//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let divWithNumber = document.getElementById("div2");
let number1 = 1;
let countNumber = +localStorage.getItem('number', number1);
countNumber = countNumber + 1;
+localStorage.setItem('number', countNumber);

divWithNumber.innerHTML = (countNumber);