const botoes = document.querySelectorAll('.ripple')

botoes.forEach ( btn => {
    btn.addEventListener('click', function (pos) {
        const x = pos.clientX       /*clientX, clientY */
        const y = pos.clientY
        console.log(x,y)/*CONSOLE LOG DAS COORDENADAS ONDE SE CLICA APENAS DENTRO DO RIPPLE */

        const btnTop = pos.target.offsetTop /*offsetTop, Left, Right */
        const btnLeft = pos.target.offsetLeft
        console.log(btnTop,btnLeft)

        const xInside = x - btnLeft/*para obter as coordenadas apenas de dentro do botão, extremidade do botão 0,0 */
        const yInside = y - btnTop

        console.log(xInside,yInside)

        const cir = document.createElement('span')
        cir.classList.add('circulo')
        cir.style.top = yInside + 'px'
        cir.style.left = xInside + 'px'

        this.appendChild(cir)

        setTimeout(() => cir.remove(), 500)/*A CADA 500ms VAI REMOVER O SPAN DO CIRCULO, SENÃO A CADA CLIQUE CRIA UM SPAN NO CODIGO HTML */
    })
})