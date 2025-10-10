if (typeof window !== 'undefined' && document?.body) {
    document.body.addEventListener('click', e => {
        const target = e.target
        if (!(target instanceof HTMLElement) || !target.classList.contains('createsCopyParticle')) return

        const el = document.createElement('div')
        el.textContent = 'copied'
        el.className = 'copied preventSelect disabled'
        el.style.left = `${e.pageX}px`
        el.style.top = `${e.pageY}px`
        el.style.transform = 'translate(-50%, -50%)'
        document.body.appendChild(el)

        const randomX = (Math.random() - 0.5) * 200
        const randomY = (Math.random() - 0.5) * 200

        setTimeout(() => {
            el.style.transform = `translate(${randomX}px, ${randomY}px)`
            el.style.opacity = '0'
        }, 50)

        setTimeout(() => el.remove(), 1600)
    })
}
