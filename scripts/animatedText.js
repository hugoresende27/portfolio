const textEl = document.getElementById('texto')

const text = "Junior Software Developer, student of programming and web developer, here are something about me, my education and some of my projects... "

let index = 1
let speed = 30 

escreveTexto()

function escreveTexto() {
    textEl.innerText = text.slice(0, index)

    index++
    //if ( index > text.length) {/*PARA COMEÇAR A ESCREVER DE NOVO QUANDO CHEGAR AO FIM DO TEXTO */
      //  index = 1
  //  }

    setTimeout(escreveTexto , speed)
}

/////////////////////////////////////////////////////////////////////////////////////
