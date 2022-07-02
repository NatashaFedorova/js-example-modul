//--------------------Задача про коллекцию товаров в корзине---------------------------
//  - getItems()
//  - add(product)
//  - remove(productName)
//  - clear()
//  - countTotalPrice()
//  - increaseQuantity(productName)
//  - decreaseQuantity(productName)
//
// {name: "🍎", price: 50}
// {name: "🍇", price: 70}
// {name: "🍑", price: 60}
// {name: "🍌", price: 110}

// Что? Куда? Зачем? - CART
// cart  - это объект корзины товаров
// items - массив,здесь лежат наши объекты товаров
// getItems - функция, возвращает масив из объектов товаров
// remove - функция, передаем имя продукта, и продукт удаляется из корзины
// clear - функция, очистить корзину
// countTotalPrice - функция, возвращает общую сумму товаров в корзине
//increaseQuantity - функция, увеличить количество
//decreaseQuantity - функция, уменьшить количество

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

    //   ниже добавляем свойство (количество) объекту (продукту)
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },

//   remove(productName) {
    //  дестректуризация this.items
    // const { items } = this;

    // for (let i = 0; i < items.length; i += 1) {
      //  дестректуризация this.items.name
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('продукт найден', productName);
//         console.log('индекс:', i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

    //   декструктуризация item.price в { price } сразу
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   clear() {
//     this.items = [];
//   },

//   increaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//         return;
//       }
//     }
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍑', price: 60 });
// cart.add({ name: '🍌', price: 110 });
// cart.add({ name: '🍌', price: 110 });
// cart.add({ name: '🍌', price: 110 });

// после add(product)результат ниже
// console.table(cart.getItems());

// cart.remove('🍑');
// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice()); // Total: 230

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍑');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍇');
// console.table(cart.getItems());
