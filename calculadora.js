const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const ac = document.getElementById("ac");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const btnSeleccion = boton.textContent;

        if (boton.id === "ac") {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            if (pantalla.textContent.length === 0 || pantalla.textContent === "ERROR!") {
                pantalla.textContent = "0";
            }
            if (pantalla.textContent === "0") {
                ac.textContent = "AC";
            } else {
                ac.textContent = "C";
            }
            return;
        }

        if (boton.id === "operar") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "ERROR!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
            if (!isNaN(btnSeleccion) || btnSeleccion === ".") {
                pantalla.textContent = btnSeleccion;
            } else {
                pantalla.textContent += btnSeleccion;
            }
        } else {
            pantalla.textContent += btnSeleccion;
        }

        if (pantalla.textContent === "0") {
            ac.textContent = "AC";
        } else {
            ac.textContent = "C";
        }
    });
});