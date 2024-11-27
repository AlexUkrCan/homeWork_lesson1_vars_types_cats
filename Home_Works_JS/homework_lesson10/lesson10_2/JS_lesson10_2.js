//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.getElementById("input");
let button = document.getElementById("btn");
let forma = document.forms.f1;
f1.onsubmit = function(ev) {
    ev.preventDefault();
    let age = {age: this.inputName.value};
    if(age.age < 18){
        console.log("Вік меньше 18 років");
    }else if (age.age >= 18){
        console.log("Ви повнолітній");
    }
}