const $ = selector => document.getElementById(selector)

function iniciarJuego() {
    let botonMacotaJuagdor = $('boton-mascota')
    botonMacotaJuagdor.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = $('hipodoge')
    let inputCapipepo = $('capipepo')
    let inputRatigueya = $('ratigueya')
    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodoge')
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo')
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya')
    } else {
        alert('Por favor ejige una mascota')
    }

}

window.addEventListener('load', iniciarJuego)
