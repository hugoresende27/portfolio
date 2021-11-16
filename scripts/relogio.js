const horaEl = document.querySelector('.horas')
const minutoEl = document.querySelector('.minutos')
const segundoEl = document.querySelector('.segundos')
const tempoEl = document.querySelector('.tempo')
const dataEl = document.querySelector('.data')
const toggle = document.querySelector('.toggle')

const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];


function setTime (){
    const tempo = new Date()
    const ano = tempo.getFullYear()
    const mes = tempo.getMonth()
    const dia = tempo.getDay()
    const hora = tempo.getHours()
    const horasRelogio = hora %12
    const minuto = tempo.getMinutes()
    const segundo = tempo.getSeconds()
    const data = tempo.getDate()
    console.log(ano)

    horaEl.style.transform = `translate(-50%, -100%) rotate(${scale(horasRelogio, 0, 11, 0, 360)}deg)`
    minutoEl.style.transform = `translate(-50%, -100%) rotate(${scale(minuto, 0, 59, 0, 360)}deg)`
    segundoEl.style.transform = `translate(-50%, -100%) rotate(${scale(segundo, 0, 59, 0, 360)}deg)`
}
    // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000) /*PARA O RELÓGIO MOVER-SE A CADA 1000ms */
