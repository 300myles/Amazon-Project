let productHtml = '';

updateCart();

products.forEach((product) => {
  
  const html = `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>
  
    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>
  `;
  
  productHtml += html;
});

document.querySelector('.products-grid').innerHTML = productHtml;

function updateCart () {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


const addToCart = document.querySelectorAll('.js-add-to-cart');

addToCart.forEach((button, index) => {
  button.addEventListener(('click'), () => {
    const added = document.querySelectorAll('.added-to-cart');

    added[index].style.opacity = 1;
    setTimeout (() => {added[index].style.opacity = 0}, 1000);
    

    let matchingItem;
    const item = {
      product: products[index],
      quantity: 1
    };


    cart.forEach((good) => {
      if (item.product === good.product) {
        matchingItem = good;
      }
    });


    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push(item);
    }

    updateCart();

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart); 
  });

});
