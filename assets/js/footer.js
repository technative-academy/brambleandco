const arrowMenu = document.querySelectorAll('.arrow-menu')
const company = document.querySelector('.links__company')
const legal = document.querySelector('.links__legal')

arrowMenu.forEach((menu) => {
    menu.addEventListener('click', () => {
        const active = document.querySelector('.arrow-menu--active')
        menu.classList.toggle('arrow-menu--active')

        if (active && active !== menu) {
            active.classList.remove('arrow-menu--active')
        }
        if (menu.nextElementSibling === company) {
            company.classList.toggle('links__company--active')
            legal.classList.remove('links__legal--active')
        } else if (menu.nextElementSibling === legal) {
            legal.classList.toggle('links__legal--active')
            company.classList.remove('links__company--active')
        }
    })
})
