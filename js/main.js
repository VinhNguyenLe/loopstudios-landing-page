const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const mobileScreen = window.matchMedia("(max-width: 540px)")

const headerLogo = $('.logo')
const headerBtn = $('.menu-btn')
const mobileMenu = $('.js-nav')
const closeMobileMenu = $('.close-btn')
const jsMenuItems = $$('.js-menu-item')
const aboutContainer = document.getElementById('about')
const aboutItems = $$('.about-image, .about-content ')
const creationsContainer = document.getElementById('creations')
const creationsTitle = $('.creations-title')
const creationsBtn = $('.creations-btn')
const creationsImages = $('.creations-images')
const footerContainer = $('.footer')

let creationsImagesMobile = $$('.creations img')


function showMenuMobile (){
    mobileMenu.classList.add('active')
    headerLogo.classList.add('logo-fixed')
}

function hideMenuMobile(){
    mobileMenu.classList.remove('active')
    headerLogo.classList.remove('logo-fixed')
}

function reveal(){
    let scrollTop = document.documentElement.scrollTop
    let getOffsetTopAboutItem = aboutContainer.offsetTop
    let getOffsetTopCreations = creationsContainer.offsetTop
    let getOffsetTopFooter = footerContainer.offsetTop

    for(let i = 0; i < aboutItems.length; i++){
        if(aboutItems[i].matches('.about-image')){
            if(getOffsetTopAboutItem - scrollTop < 400){
                aboutItems[i].classList.add('about-animation-active')
            } 
        } 
        else if (aboutItems[i].matches('.about-content')){
            if(getOffsetTopAboutItem - scrollTop < 350){
                aboutItems[i].classList.add('about-animation-active')
            } 
        } 
    }

    if(getOffsetTopCreations - scrollTop < 500){
        creationsTitle.classList.add('creations-animation-active')
        creationsBtn.classList.add('creations-animation-active')
        creationsImages.classList.add('creations-animation-active')
    }

    if(getOffsetTopFooter - scrollTop < 713){
        footerContainer.classList.add('footer-animation-active')
    }
    console.log(getOffsetTopFooter)
    console.log(scrollTop)
}

function changeImgMobileScreen(screen){
    if(screen.matches){
        for(let i = 0; i < creationsImagesMobile.length; i++){
            let imageSrc = creationsImagesMobile[i].src
            creationsImagesMobile[i].src = imageSrc.replace('desktop', 'mobile')
        }
    }
}

headerBtn.addEventListener('click', showMenuMobile)

closeMobileMenu.addEventListener('click', hideMenuMobile)

jsMenuItems.forEach(jsMenuItem => {
    jsMenuItem.addEventListener('click', hideMenuMobile)
})

window.addEventListener('scroll', reveal)

changeImgMobileScreen(mobileScreen)


