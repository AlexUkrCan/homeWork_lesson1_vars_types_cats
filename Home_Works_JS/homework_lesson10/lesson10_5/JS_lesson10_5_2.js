let sessionsList = JSON.parse(localStorage.getItem("sessionsList"));
for (const arrayElement of sessionsList) {
    let div5 = document.createElement('div');
    div5.innerText = arrayElement.toString();
    document.body.appendChild(div5);
}