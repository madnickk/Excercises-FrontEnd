const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slides = document.querySelectorAll('.slide')


let currentActive = 0

next.addEventListener('click', () => {
    currentActive++

    if (currentActive >= slides.length) {
        currentActive = 0
    }
    
    update()
    console.log(currentActive);

})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 0
    }
    update()
    console.log(currentActive);

})


function update() {

    slides.forEach((slide, idx) => {
        if ( idx == currentActive) {
            slide.classList.add('active')
            slide.classList.remove('hidden')
        } else {
            slide.classList.remove('active')
            slide.classList.add('hidden')
        }
    })
}

const actives = document.querySelectorAll('.active')

