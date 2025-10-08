function initialisePage() {
    initialiseGallery()
    initialiseReviews()
}

function initialiseGallery() {
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
}

function initialiseReviews() {
    const reviewSelectorOne = document.querySelector('#selector-one')
    const reviewSelectorTwo = document.querySelector('#selector-two')
    const reviewSelectorThree = document.querySelector('#selector-three')

    const reviewContentOne = document.querySelector('#reviews-one')
    const reviewContentTwo = document.querySelector('#reviews-two')
    const reviewContentThree = document.querySelector('#reviews-three')

    reviewSelectorOne.addEventListener('click', () => {
        console.log('Review One Selected')
        reviewSelectorOne.classList.add('selector--active');
        reviewSelectorTwo.classList.remove('selector--active');
        reviewSelectorThree.classList.remove('selector--active');
        reviewContentOne.classList.add('reviews__content--active');
        reviewContentTwo.classList.remove('reviews__content--active');
        reviewContentThree.classList.remove('reviews__content--active');
    })

    reviewSelectorTwo.addEventListener('click', () => {
        console.log('Review One Selected')
        reviewSelectorOne.classList.remove('selector--active');
        reviewSelectorTwo.classList.add('selector--active');
        reviewSelectorThree.classList.remove('selector--active');
        reviewContentOne.classList.remove('reviews__content--active');
        reviewContentTwo.classList.add('reviews__content--active');
        reviewContentThree.classList.remove('reviews__content--active');
    })

    reviewSelectorThree.addEventListener('click', () => {
        console.log('Review One Selected')
        reviewSelectorOne.classList.remove('selector--active');
        reviewSelectorTwo.classList.remove('selector--active');
        reviewSelectorThree.classList.add('selector--active');
        reviewContentOne.classList.remove('reviews__content--active');
        reviewContentTwo.classList.remove('reviews__content--active');
        reviewContentThree.classList.add('reviews__content--active');
    })
}


initialisePage()
