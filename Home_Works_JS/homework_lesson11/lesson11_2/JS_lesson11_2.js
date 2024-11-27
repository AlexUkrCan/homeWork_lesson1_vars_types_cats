//взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
let firstDivPizza = document.getElementById('divPizza');

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesPizza => {
        let {recipes} = recipesPizza;
        console.log(recipes);
//для всіх рецептів які в нас є зааускаємо ітерацію
        for (const recipe of recipes) {
            //створюємо елемент дів
            let divRecipe = document.createElement('div');
            //наповнюємо його елементами з нашого рецепту(окрім масивів)
            divRecipe.innerText = `id: ${recipe.id}
                                   name: ${recipe.name}
                                   prepTimeMinutes: ${recipe.prepTimeMinutes}
                                   cookTimeMinutes: ${recipe.cookTimeMinutes}
                                   servings: ${recipe.servings}
                                   difficulty: ${recipe.difficulty}
                                   cuisine: ${recipe.cuisine}
                                   caloriesPerServing: ${recipe.caloriesPerServing}
                                   userId: ${recipe.id}
                                   rating: ${recipe.rating}
                                   reviewCount: ${recipe.reviewCount}

            `;
            //додаємо наповнений дів до головного діва сторінки
            firstDivPizza.appendChild(divRecipe);
// ітеруємо обєкт recipe який хараетерезує рецепт і отримуємо кожен його ключ
            for (const recipeKey in recipe) {
                //якщо поле буде мати назву image
                if(recipeKey === 'image'){
                    //створюємо елемент
                    let imageOfPizza = document.createElement('img');
                    //та звертаємось до його характеристики src
                    imageOfPizza.src=recipe.image;
                    //добавляємо елемент з картинкою в загальний дів
                    firstDivPizza.appendChild(imageOfPizza);
                }
                //перевіряємо чи значення є масивом
              if(Array.isArray(recipe[recipeKey])) {
                  //якщо елемент є масивом то створюємо оремий дів в який будемо поміщати назву масиву
                  let divHead = document.createElement('div');
                  divHead.innerText = `${recipeKey} :`;
                  firstDivPizza.appendChild(divHead);
                  //якщо елемент є масивом то тоді створюємо список ul
                 let ul = document.createElement('ul')
                 let arrayElements = recipe[recipeKey];
                 //ітеруємо масив і для кожного елементу масиву створюємо комірку li
                  for (const arrayItems of arrayElements) {
                      let li =document.createElement('li');
                      //наповнюємо комірки вмістом
                      li.innerText = arrayItems;
                      //добавляємо елементи списку li в сам список ul
                      ul.appendChild(li);
                  }
                  //добавляємо наповнений список в основний дів
                  firstDivPizza.appendChild(ul);
              }
            }

        }
    });



