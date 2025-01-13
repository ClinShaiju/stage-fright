import { useSiteStore } from './stores/site'
import { products } from './products'
const siteStore = useSiteStore()


function addToCart(price, quantity) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex === -1) {
    siteStore.cart.push({ price, quantity })
  } else {
    siteStore.cart[itemIndex].quantity += quantity
  }
}

function removeFromCart(price) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex !== -1) {
    siteStore.cart.splice(itemIndex, 1)
  }
}

function incrQty(price) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex !== -1) {
    if (siteStore.cart[itemIndex].quantity <99) {
      siteStore.cart[itemIndex].quantity++
    }
  }
}

function decrQty(price) {
  const itemIndex = siteStore.cart.findIndex((item) => item.price === price)
  if (itemIndex !== -1) {
    if (siteStore.cart[itemIndex].quantity > 1) {
      siteStore.cart[itemIndex].quantity--
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
  return JSON.stringify(siteStore.cart)
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
}

console.log(getTotal())

export { cart }
