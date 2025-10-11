const modal = document.getElementById('modal')
const modalImg = document.getElementById('modalImg')
const caption = document.getElementById('caption')
const body = document.body

if (modal && modalImg && caption) {
    const closeModal = () => {
        modal.style.display = 'none'
        body.style.overflow = 'auto'
    }

    document.querySelectorAll('.zoomable')?.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex'
            modalImg.src = img.src
            caption.textContent = img.alt || ''
            body.style.overflow = 'hidden'
        })
    })

    modal.addEventListener('click', e => {
        if (e.target === modal || e.target.classList.contains('close')) closeModal()
    })

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal()
    })
}
