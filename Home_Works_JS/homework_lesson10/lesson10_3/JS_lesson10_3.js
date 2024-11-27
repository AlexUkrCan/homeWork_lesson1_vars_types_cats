//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let in1 = document.getElementById("i1");
let in2 = document.getElementById("i2");
let in3 = document.getElementById("i3");
let button1 = document.getElementById("knopka");
let p = document.getElementById("result");
let forma2 = document.forms.f2;
f2.onsubmit =  function(ev)  {
    ev.preventDefault();
    let name = {name: this.inpName.value};
    let surName = {surName: this.inpSurname.value};
    let age = {age: +this.inpAge.value};
    let dataOfForm = {name, surName, age};
    console.log(dataOfForm);
    result.innerText = dataOfForm.name.name + ' ' + dataOfForm.surName.surName + ' ' + dataOfForm.age.age;
};