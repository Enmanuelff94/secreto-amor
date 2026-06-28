// Banco de frases románticas
const frases = [
    "❤️ Desde que apareciste todo cambió en mi universo",
    "🕷️ Si esto fuera el Spider-Verse… te elegiría en cada uno de ellos",
    "✨ Hay personas que no son un accidente, parecen el destino",
    "💌 Este secreto ya no podía guardarse más",
    "🌙 Contigo iría a ver el atardecer a lo alto de cualquier edificio",
    "❤️ Mi escena favorita de la vida siempre eres tú",
    "🕸️ Te atrapaste en mis pensamientos hace mucho tiempo",
    "✨ Ojalá esta sea nuestra primera gran escena juntos",
    "🌸 Eres la persona más especial de mi mundo",
    "🕷️ ¿Y si reescribimos nuestra propia historia?"
];

// Frases flotantes
function lanzarFrase() {
    const contenedor = document.getElementById("particles-container");
    if (!contenedor) return;

    let f = document.createElement("div");

    f.className = "frase";
    f.innerHTML =
        frases[Math.floor(Math.random() * frases.length)];

    f.style.left =
        Math.random() * 65 + 5 + "vw";

    f.style.animationDuration =
        Math.random() * 3 + 7 + "s";

    contenedor.appendChild(f);

    setTimeout(() => {
        f.remove();
    }, 10000);
}

setInterval(lanzarFrase, 3500);

// Lluvia de efectos
function crearLluviaEfectos(
    fuerzaEspecial = false
) {
    const contenedor =
        document.getElementById(
            "particles-container"
        );

    if (!contenedor) return;

    let item =
        document.createElement("div");

    item.className = "drop-item";

    const iconos = [
        "❤️",
        "✨",
        "💌",
        "🕷️",
        "🕸️",
        "💖"
    ];

    item.innerHTML =
        iconos[
            Math.floor(
                Math.random() *
                iconos.length
            )
        ];

    item.style.left =
        Math.random() * 100 + "vw";

    item.style.fontSize =
        fuerzaEspecial
            ? Math.random() * 20 + 25 + "px"
            : Math.random() * 12 + 16 + "px";

    item.style.animationDuration =
        fuerzaEspecial
            ? Math.random() * 3 + 3 + "s"
            : Math.random() * 4 + 5 + "s";

    contenedor.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 8000);
}

setInterval(() => {
    crearLluviaEfectos(false);
}, 450);

// BOTÓN SÍ
document.getElementById("yes").onclick =
() => {

    document
        .getElementById(
            "interactive-zone"
        )
        .classList.add(
            "hidden"
        );

    const resultBox =
        document.getElementById(
            "result"
        );

    resultBox.classList.remove(
        "hidden"
    );

    resultBox.innerHTML = `
        💖 ¡SABÍA QUE DIRÍAS QUE SÍ!
        <br><br>

        <span style="
        color:#ff2a6d;
        font-size:1.2em;">
        Ahora eres oficialmente la Gwen
        de este Andrew Garfield.
        </span>

        <br><br>

        Prometo que en este universo
        cuidaré de ti cada día
        y jamás te voy a soltar.
        🕷️✨❤️
    `;

    for (
        let i = 0;
        i < 40;
        i++
    ) {
        setTimeout(
            () =>
                crearLluviaEfectos(
                    true
                ),
            i * 80
        );
    }

    for (
        let j = 0;
        j < 3;
        j++
    ) {
        setTimeout(
            lanzarFrase,
            j * 300
        );
    }
};

// BOTÓN NO
const btnNo =
    document.getElementById(
        "no"
    );

btnNo.addEventListener(
    "mouseover",
    moverBotonNo
);

btnNo.addEventListener(
    "click",
    moverBotonNo
);

function moverBotonNo() {

    const margen = 80;

    const x =
        Math.random() *
            (
                window.innerWidth -
                margen * 2
            ) +
        margen;

    const y =
        Math.random() *
            (
                window.innerHeight -
                margen * 2
            ) +
        margen;

    btnNo.style.position =
        "fixed";

    btnNo.style.left =
        `${x}px`;

    btnNo.style.top =
        `${y}px`;

    btnNo.style.zIndex =
        "999";
}
