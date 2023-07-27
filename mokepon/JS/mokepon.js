function iniciarJuego(){
    let botonMacotaJuagdor = document.getElementById('boton-mascota')
    botonMacotaJuagdor.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    alert('Seleccionaste tu mascota')
}

window.addEventListener('load', iniciarJuego)
