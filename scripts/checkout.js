cartDetials();

function cartDetials () {
  if  (cart.length === 0) {
    document.querySelector('.order-summary').innerHTML = `<img src="images/empty-cart.jpg" style="border: 1px solid rgb(222, 222, 222);width: 100%;"></img>`
  } else {
    let itemDetials = '';

    cart.forEach((item, index) => {
      const html = `
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${item.product.image}">

          <div class="cart-item-details">
            <div class="product-name">
            ${item.product.name}
            </div>
            <div class="product-price">
            ${(item.product.priceCents / 100).toFixed(2)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${item.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span onclick="removeItem(${index});" class="delete-quantity-link link-primary data-product-id="${item.product.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-1">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-1">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-1">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      itemDetials += html;
    });

    document.querySelector('.order-summary').innerHTML = itemDetials;

  }

  updateOrderSummary();
}


function removeItem (index) {
  const item = cart[index];


  if (item.quantity > 1) {
    item.quantity -= 1;
    cartDetials();
    saveToStorage();
  } else {
    cart.splice(index, 1);
    cartDetials();
    saveToStorage();
  }

  console.log (cart);
}


function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateOrderSummary () {
  let itemCount = 0;

  cart.forEach((item) => {
    itemCount += item.quantity;
  });

  document.querySelector('.item-count').innerHTML = `Items (${itemCount})`;
  document.querySelector('.js-item-count').innerHTML = `${itemCount} items`;
}