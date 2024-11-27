//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objToAdd) {
    localStorage.getItem(arrayName, objToAdd);

    let newArray = JSON.parse(localStorage.getItem(arrayName));

        newArray.push(objToAdd);

    let jsonArray =JSON.stringify(newArray);
    localStorage.setItem(arrayName, jsonArray);
}
addToLocalStorage('sessionsList', {});