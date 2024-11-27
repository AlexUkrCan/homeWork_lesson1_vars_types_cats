// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let cartDiv =document.getElementById('cartsDiv');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())

    .then((cardsItems) =>{
        let {carts} = cardsItems;
        console.log(carts);

        for (const cart of carts) {
           let div = document.createElement('div');


           div.innerText = ` Carts:
                             id: ${cart.id} 
                             total: ${cart.total} 
                             discountedTotal: ${cart.discountedTotal} 
                             userId: ${cart.userId} 
                             totalProducts: ${cart.totalProducts}
                             totalQuantity: ${cart.totalQuantity} 
                             
                                         `
           cartDiv.appendChild(div);


            for (const product of cart.products) {
               let p =document.createElement('p');
               p.innerText = `Products:
                              id: ${product.id}
                              title: ${product.title}
                              price: ${product.price}
                              quantity: ${product.quantity}
                              total: ${product.total}
                              
               `
                cartDiv.appendChild(p);
            }

            // let ul = document.createElement('ulInDiv');
            // for (const product of cart.products) {
            //     let liProducts = document.createElement('li');
            //     liProducts.innerText = `${ulElement.id}
            //
            //     `;
            //     ul.appendChild(liProducts);
            //
            // }
        }


});
