const textEl2 = document.getElementById('textoProjetos')
const tituloProjetos = "Alguns projetos meus em Laravel"
let index2 = 1
let speed2 = 150 

escreveTexto2()

function escreveTexto2() {
    textEl2.innerText = tituloProjetos.slice(0, index2)

    index2++
    if ( index2 > tituloProjetos.length) {/*PARA COMEÇAR A ESCREVER DE NOVO QUANDO CHEGAR AO FIM DO TEXTO */
        index2 = 1
    }

    setTimeout(escreveTexto2 , speed2)
}