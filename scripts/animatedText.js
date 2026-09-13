(function () {

    const textEl = document.getElementById('texto')

    let index = 1
    let speed = 25
    let timer = null

    function escreveTexto(text) {
        clearTimeout(timer)
        index = 1
        textEl.textContent = ''

        function passo() {
            textEl.textContent = text.slice(0, index)
            index++
            if (index <= text.length) {
                timer = setTimeout(passo, speed)
            }
        }

        passo()
    }

    document.addEventListener('languagechange', function (e) {
        escreveTexto(e.detail.dict['hero-headline'])
    })

})()

/////////////////////////////////////////////////////////////////////////////////////
