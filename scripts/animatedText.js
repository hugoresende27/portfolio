const textEl = document.getElementById('texto')

const text = "Ligo o seu ERP à loja online e aos marketplaces — sem correções à mão."

let index = 1
let speed = 25

escreveTexto()

function escreveTexto() {
    textEl.innerText = text.slice(0, index)

    index++

    if (index <= text.length) {
        setTimeout(escreveTexto , speed)
    }
}

/////////////////////////////////////////////////////////////////////////////////////
