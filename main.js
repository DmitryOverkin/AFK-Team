const header = document.querySelector('header')



/* Header change background color*/

window.addEventListener('scroll', function changeBgcolor() {
        if(this.scrollY > 100) {
            header.style.backgroundColor = '#1A191A'
            header.style.transitionDuration = '0.5s'
        }else {
            header.style.backgroundColor = 'transparent'
        }
})



