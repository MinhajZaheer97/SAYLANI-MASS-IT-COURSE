function Cardsconstructor(name, price, image, id) {
  this.name = name;
  this.price = price;
  this.image = image;
  this.id = id;
}

const cards = [
  new Cardsconstructor(
    "Apple",
    1.99,
    "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_1280.jpg",
    1,
  ),
  new Cardsconstructor(
    "Banana",
    0.99,
    "https://cdn.pixabay.com/photo/2018/03/27/21/44/banana-3268756_1280.jpg",
    2,
  ),
];

const container = document.getElementById("container");
const addedItems = [];

function add(item) {
  addedItems.push(item);
  console.log(addedItems);
  return item;
}

container.innerHTML = cards
  .map(
    (card) =>
      `<div id = '${card.id}'>
            <img src="${card.image}" width="200">
            <h2 id = 'item${card.id}'>${card.name}</h2>
            <p id = 'price${card.id}'>Price: ${card.price}</p>
            <button id = 'addToCart${card.id}' , onclick = 'add(${JSON.stringify(card)})'>add to cart</button>
    </div>`,
  )
  .join("");

const cartButton = document.getElementById("cart");

cartButton.addEventListener("click", function () {

    cartButton.style.display = "none";
  container.innerHTML = addedItems.map(
    (item) =>
        `
            <h1 id="cart-${item.name}">Name:${item.name}</h1>
            <p id="cart-${item.price}">price:${item.price}</p>
        `
  ).join("");
});
