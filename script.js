

// JUEGO 1
document.addEventListener("DOMContentLoaded", function() {
    var opciones = document.getElementsByClassName("opcion");
  
    for (var i = 0; i < opciones.length; i++) {
      opciones[i].addEventListener("click", function() {
        var jugador = this.getAttribute("data-option");
        var maquina = obtenerSeleccionMaquina();
        
        var mensajeJugador = document.getElementById("mensaje-jugador");
        mensajeJugador.innerHTML = "Elegiste: " + jugador;
  
        var mensajeMaquina = document.getElementById("mensaje-maquina");
        mensajeMaquina.innerHTML = "La máquina eligió: " + maquina;
  
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = determinarResultado(jugador, maquina);
      });
    }
  });
  
  function obtenerSeleccionMaquina() {
    var opciones = ["piedra", "papel", "tijera"];
    var indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
  }
  
  function determinarResultado(jugador, maquina) {
    if (jugador === maquina) {
      return "¡Empate!";
    } else if (
      (jugador === "piedra" && maquina === "tijera") ||
      (jugador === "papel" && maquina === "piedra") ||
      (jugador === "tijera" && maquina === "papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "¡Perdiste!";
    }
  }


// Juego 2
// Generar un número aleatorio del 1 al 100
var targetNumber = Math.floor(Math.random() * 100) + 1;
        
function checkGuess() {
    var guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("result").textContent = "Por favor, ingresa un número válido del 1 al 100.";
    } else if (guess < targetNumber) {
        document.getElementById("result").textContent = "Demasiado bajo. ¡Intenta nuevamente!";
    } else if (guess > targetNumber) {
        document.getElementById("result").textContent = "Demasiado alto. ¡Intenta nuevamente!";
    } else {
        document.getElementById("result").textContent = "¡Felicitaciones! ¡Adivinaste el número!";
        document.getElementById("guess").disabled = true;
    }
}

//juego 3
document.addEventListener("DOMContentLoaded", function () {
  const celdas = document.querySelectorAll(".celda");
  const mensajeParaGanador = document.getElementById("mensaje-ganador");
  const BotonReiniciar = document.getElementById("reiniciar");
  let turnoJugador = "X";
  let finDelJuego = false;

  celdas.forEach((celda) => {
    celda.addEventListener("click", function () {
      if (!celda.textContent && !finDelJuego) {
        celda.textContent = turnoJugador;
        celda.classList.add(turnoJugador.toLowerCase());
        celda.classList.add("selected");
        turnoJugador = turnoJugador === "X" ? "O" : "X";
        ganador();
      }
    });
  });

  BotonReiniciar.addEventListener("click", function () {
    reiniciarJuego();
  });

  function ganador() {
    const ConbinacionesGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < ConbinacionesGanadoras.length; i++) {
      const [a, b, c] = ConbinacionesGanadoras[i];
      if (
        celdas[a].textContent &&
        celdas[a].textContent === celdas[b].textContent &&
        celdas[a].textContent === celdas[c].textContent
      ) {
        mensajeParaGanador.textContent =
          "¡El jugador " + celdas[a].textContent + " ha ganado!";
        finDelJuego = true;
        return;
      }
    }

    if (Array.from(celdas).every((celda) => celda.textContent)) {
      mensajeParaGanador.textContent = "¡Empate!";
      finDelJuego = true;
    }
  }

  function reiniciarJuego() {
    celdas.forEach((celda) => {
      celda.textContent = "";
      celda.className = "celda btn btn-secondary";
    });
    turnoJugador = "X";
    finDelJuego = false;
    mensajeParaGanador.textContent = "";
  }
});


  // PAGINA DE CONTACTO
let comentarios = [];

// Función para agregar comentarios
function agregarComentario() {
  const correo = document.getElementById("correo").value;
  const comentario = document.getElementById("comentario").value;

  if (correo && comentario) {
    const nuevoComentario = {
      correo: correo,
      comentario: comentario
    };
    comentarios.push(nuevoComentario);

    document.getElementById("correo").value = "";
    document.getElementById("comentario").value = "";
  }
}

// Función para descargar archivo
function descargarArchivo() {
  const contenido = comentarios.map((comentario) => `Correo: ${comentario.correo}\nComentario: ${comentario.comentario}`).join("\n\n");
  const blob = new Blob([contenido], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "comentarios.txt";
  a.click();

  URL.revokeObjectURL(url);
}

// Efecto de escritura en el encabezado
const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75
});

typewriter
  .pauseFor(2500)
  .typeString("Ayudanos con tu comentario")
  .pauseFor(200)
  .deleteChars(10)
  .start();




