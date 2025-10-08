const galleryImage = document.querySelector('#galleryImage')

const getFirstTile = document.querySelector('#firstTile')
const getSecondTile = document.querySelector('#secondTile')
const getThirdTile = document.querySelector('#thirdTile')
const getFourthTile = document.querySelector('#fourthTile')

const getMessage = document.querySelector('#message')
const getOrganisation = document.querySelector('#organisation')
const getTechnical = document.querySelector('#technical')
const factsButton = document.querySelector('#facts-button')

getFirstTile.addEventListener('click', () => {
    console.log('First Tile Clicked')
    galleryImage.src = './assets/images/food/pancakes.jpg'
    getFirstTile.classList.add('options__tile-active')
    getSecondTile.classList.remove('options__tile-active')
    getThirdTile.classList.remove('options__tile-active')
    getFourthTile.classList.remove('options__tile-active')
})
getSecondTile.addEventListener('click', () => {
    console.log('Second Tile Clicked')
    galleryImage.src = './assets/images/food/beefzilla.jpg'
    getFirstTile.classList.remove('options__tile-active')
    getSecondTile.classList.add('options__tile-active')
    getThirdTile.classList.remove('options__tile-active')
    getFourthTile.classList.remove('options__tile-active')
})
getThirdTile.addEventListener('click', () => {
    console.log('Third Tile Clicked')
    galleryImage.src = './assets/images/food/milkshake.jpg'
    getFirstTile.classList.remove('options__tile-active')
    getSecondTile.classList.remove('options__tile-active')
    getThirdTile.classList.add('options__tile-active')
    getFourthTile.classList.remove('options__tile-active')
})
getFourthTile.addEventListener('click', () => {
    console.log('Fourth Tile Clicked')
    galleryImage.src = './assets/images/food/nachos.jpg'
    getFirstTile.classList.remove('options__tile-active')
    getSecondTile.classList.remove('options__tile-active')
    getThirdTile.classList.remove('options__tile-active')
    getFourthTile.classList.add('options__tile-active')
})

factsButton.addEventListener('click', () => {
    console.log('Facts Button Clicked')
    getMessage.classList.toggle('facts__single-card-hidden')
    getOrganisation.classList.toggle('facts__single-card-hidden')
    getTechnical.classList.toggle('facts__single-card-hidden')
})
