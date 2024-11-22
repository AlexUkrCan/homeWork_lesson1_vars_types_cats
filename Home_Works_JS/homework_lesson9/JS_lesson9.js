//створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

document.body.appendChild(div);
let clone = div.cloneNode(true);
document.body.appendChild(clone);

//Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arrOfElements = ['Main','Products','About us','Contacts'];

let ulList = document.createElement('ul');
for (const elements of arrOfElements) {
    let liList = document.createElement('li');
    liList.innerText = elements;
    ulList.appendChild(liList);
}
document.body.appendChild(ulList);

// Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let allCourses = document.getElementsByClassName('courses')[0];
let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
];
for (const coursesElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('courseAndDuration');
    div.innerHTML = coursesElement.title +' '+ coursesElement.monthDuration ;
    allCourses.appendChild(div);
}

//
