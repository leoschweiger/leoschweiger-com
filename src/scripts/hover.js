function watchForHover() {
    if (typeof window === 'undefined' || !document?.body) return

    let lastTouch = 0
    const body = document.body
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    const enable = () => {
        if (Date.now() - lastTouch < 500) return
        body.classList.add('hasHover')
    }
    const disable = () => body.classList.remove('hasHover')
    const touch = () => (lastTouch = Date.now())

    if (isTouch) {
        document.addEventListener('touchstart', touch, true)
        document.addEventListener('touchend', disable, true)
    } else {
        document.addEventListener('mousemove', enable, true)
        document.addEventListener('mouseenter', enable, true)
    }

    enable()
}

watchForHover()