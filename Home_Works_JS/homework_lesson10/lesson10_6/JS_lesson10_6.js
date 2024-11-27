//створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let inputForConvert =   document.getElementById('input2');
let divConvert = document.getElementById('resultConvert');
let formConvert = document.forms.f4;
formConvert.oninput = function() {
    let result = (+inputForConvert.value)*2.2;
    divConvert.innerText = result;
}
