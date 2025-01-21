import { useSiteStore } from './stores/site'
import { products } from './products'
import VueCookies from 'vue-cookies';
const siteStore = useSiteStore()
restoreCart()


function addToCart(price, quantity) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex === -1) {
    siteStore.cart.push({ price, quantity })
  } else {
    siteStore.cart[itemIndex].quantity += quantity
  }
  updateCookies()

}

function removeFromCart(price) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex !== -1) {
    siteStore.cart.splice(itemIndex, 1)
  updateCookies()

  }
}

function incrQty(price) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex !== -1) {
    if (siteStore.cart[itemIndex].quantity <99) {
      siteStore.cart[itemIndex].quantity++
      updateCookies()
    }
  }

}

function decrQty(price) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex !== -1) {
    if (siteStore.cart[itemIndex].quantity > 1) {
      siteStore.cart[itemIndex].quantity--
      updateCookies()
    }
  }
}

function validateQuantity(price) {
  const product = siteStore.cart[siteStore.cart.findIndex((item) => item.price === price)]
  if (product.quantity < 1) {
    product.quantity = 1
  } else if (product.quantity > 99) {
    product.quantity = 99
  }
}

function clearCart() {
  siteStore.cart.length = 0
  updateCookies()
}

function getTotal() {
  var total = 0
  siteStore.cart.forEach((item) => {
    total += lookupProduct(item.price).price * item.quantity
  })
  return Math.round(total * 100) / 100
}

function lookupProduct(id) {
  return products.get(id)
}

function exportCart() {
  const serializedCart = JSON.stringify(siteStore.cart); // Serialize to JSON
  return serializedCart;
}

function updateCookies() {
  const cartJSON = exportCart(); // Serialize cart to JSON
  VueCookies.set('cart', cartJSON); // Store JSON string in cookie
}

function restoreCart() {
  const cartCookie = VueCookies.get('cart'); // Retrieve cookie

  if (cartCookie === null || cartCookie === '') {
    return;
  }

  try {
    siteStore.cart = cartCookie
  } catch (error) {
    console.error("Failed to parse cart cookie:", error);
  }
}

const cart = {
  addToCart,
  removeFromCart,
  clearCart,
  incrQty,
  decrQty,
  lookupProduct,
  getTotal,
  validateQuantity,
  exportCart,
  updateCookies,
  restoreCart
}

console.log(getTotal())

export { cart }
