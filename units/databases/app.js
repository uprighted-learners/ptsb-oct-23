// Defaults/state
let isLoading = false
let fetchCount = 0

// Dollar sign in front of the variable is a naming pattern to identify DOM/HTML elements when writing JS
// The pattern arose from a JS library that changed the internet once upon a time
// https://jquery.com
const $loader = document.querySelector('.loader')
const $fetchCount = document.querySelector('.fetch-count')
const $productList = document.querySelector('.product-list')
const $btnGetProducts = document.querySelector('.btn-get-products')
const $btnGetProductById = document.querySelector('.btn-get-product-by-id')
const $formProductId = document.querySelector('.form-product-by-id')

$btnGetProducts.addEventListener('click', () => getProducts())
$btnGetProductById.addEventListener('click', () => getProductById())

// Fetch all products
async function getProducts() {
  setLoading(true)

  const response = await fetch('/products', {
    method: 'POST',
  })
  const products = await response.json()

  // HTML Updates/Output
  // Fake delay
  setTimeout(() => {
    setLoading(false)
    setFetchCount()

    let listHtml = ''
    products.forEach((product) => (listHtml += `<li>${product.name}</li>`))
    $productList.innerHTML = listHtml
  }, 3000)
}

// Fetch product by ID
async function getProductById() {
  setLoading(true)

  const productIdToSearch = $formProductId.value
  const response = await fetch(`/products?id=${productIdToSearch}`, {
    method: 'POST',
  })
  const product = await response.json()

  // HTML Updates/Output
  // Fake delay
  setTimeout(() => {
    setLoading(false)
    setFetchCount()
    $productList.innerHTML = `<li>${product.name}</li>`
  }, 3000)
}

// Increment the fetch count (regardless of error)
function setFetchCount() {
  fetchCount++
  $fetchCount.textContent = fetchCount
}

// Loading state and disable things so they can't keep re-requesting
function setLoading(loadingState) {
  isLoading = loadingState

  if (isLoading) {
    $loader.style.display = 'inline-block'
    $btnGetProducts.disabled = true
    $btnGetProductById.disabled = true
  } else {
    $loader.style.display = 'none'
    $btnGetProducts.disabled = false
    $btnGetProductById.disabled = false
  }
}
