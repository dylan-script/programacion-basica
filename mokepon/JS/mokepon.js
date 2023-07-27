const $ = selector => document.getElementById(selector)

function iniciarJuego() {
    let botonMacotaJuagdor = $('boton-mascota')
    botonMacotaJuagdor.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = $('hipodoge')
    let inputCapipepo = $('capipepo')
    let inputRatigueya = $('ratigueya')
    let spanMascotaJugador = $('mascota-jugador')
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Por favor ejige una mascota')
    }

}

window.addEventListener('load', iniciarJuego)
