// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let text = document.getElementById('text');
let button = document.getElementById('but');

button.onclick = function(){
    text.remove();
}