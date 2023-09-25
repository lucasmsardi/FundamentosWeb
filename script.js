const botao = document.querySelectorAll("[data-carrossel-botao]")

botao.forEach(botao => {
    botao.addEventListener("click", () =>  {
        const offset = botao.dataset.carrosselBotao === "proximo" ? 1 : -1
        const slides = botao.closest("[data-carrossel").querySelector('[data-slides')
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    }) 
})