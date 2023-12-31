 //Se obtiene un número aleatorio
 function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//Se establecen las posibles jugadas
function eleccion(jugada) {
    if (jugada == 1) {
        return "🥌"
    } else if (jugada == 2) {
        return "🧻"
    } else if (jugada == 3) {
        return "✂"
    } else {
        return "una opción no disponible para jugar😒"
    }
}
//Se establecen las reglas del juego
//1 es piedra, 2 es papel, 3 es tijera
//combate
function combate(pc, jugador) {
    if (pc == jugador) {
        alert("EMPATE 🤼‍♂️")
        empates++
    }
    else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("GANASTE 🏆")
        triunfos++
    } else {
        alert("PERDISTE 😢")
        perdidas++
    }
}
//Se inicializan las variables
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let empates = 0
//Ciclo del juego
while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3)
    //Elección del jugador
    jugador = prompt("Elije 1 para piedra, 2 para papel o 3 para tijera:")
    //alert(`Elegiste ${jugador}`)
    alert(`Tú juegas con ${eleccion(jugador)}`)
    alert(`El pc juega con ${eleccion(pc)}`)
    combate(pc, jugador)
}

alert(`Puntuación final:\n ${triunfos} triunfos \n ${perdidas} pérdidas \n ${empates} empates`)
