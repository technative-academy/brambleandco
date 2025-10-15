let productData = []

const cardContainer = document.getElementById('productCardContainer')

fetch('../brambleandco/data/products.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(
                'Network response was not ok ' + response.statusText
            )
        }
        return response.json()
    })
    .then((products) => {
        // console.log(products)
        // You can now use the products data
        productData = products
        //call function to display products
        displayProducts(productData)
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
    })

function displayProducts(products) {
    const cardContainer = document.getElementById('productCardContainer')
    cardContainer.innerHTML = ''

    products.forEach((product) => {
        //create the div for card and append to Card Container
        let card = document.createElement('div')
        // card.id = product.id
        card.className = 'product__card'
        cardContainer.appendChild(card)

        //create the image element and append to card
        let img = document.createElement('img')
        img.src = product.image
        img.alt = product.name
        img.className = 'card__image'
        card.appendChild(img)

        //create div to append to card for information
        let infoDiv = document.createElement('div')
        infoDiv.className = 'card__information'
        card.appendChild(infoDiv)

        //create h3 for product name and append to infoDiv
        let name = document.createElement('h3')
        name.className = 'card__name'
        name.textContent = product.name
        infoDiv.appendChild(name)

        //create p for product description and append to infoDiv
        let description = document.createElement('p')
        description.className = 'card__description'
        description.textContent = product.description
        infoDiv.appendChild(description)

        //create p for product rating and append to infoDiv
        let rating = document.createElement('p')
        rating.className = 'card__rating'
        rating.textContent = `${product.rating} Stars`
        infoDiv.appendChild(rating)

        //create p for product price and append to infoDiv
        let price = document.createElement('p')
        price.className = 'card__price'
        price.textContent = `£${product.price}`
        infoDiv.appendChild(price)
    })
}
