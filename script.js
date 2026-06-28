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

// Generador de frases flotantes legibles por encima de todo
function lanzarFrase() {
    const contenedor = document.getElementById("particles-container");
    if(!contenedor) return;

    let f = document.createElement("div");
    f.className = "frase";
    f.innerHTML = frases[Math.floor(Math.random() * frases.length)];
    
    // Evita que se salgan de los bordes laterales de la pantalla
    f.style.left = Math.random() * 65 + 5 + "vw";
    f.style.animationDuration = Math.random() * 3 + 7 + "s"; 

    contenedor.appendChild(f);
    setTimeout(() => f.remove(), 10000);
}
// Iniciar flujo continuo de frases
setInterval(lanzarFrase, 3500);

// Lluvia ambiental de detalles arácnidos y románticos
function crearLluviaEfectos(fuerzaEspecial = false) {
    const contenedor = document.getElementById("particles-container");
    if(!contenedor) return;

    let item = document.createElement("div");
    item.className = "drop-item";
    
    const iconos = ["❤️", "✨", "💌", "🕷️", "🕸️", "💖"];
    item.innerHTML = iconos[Math.floor(Math.random() * iconos.length)];
    
    item.style.left = Math.random() * 100 + "vw";
    // Si el usuario ya aceptó, los iconos se vuelven un poco más grandes y festivos
    item.style.fontSize = fuerzaEspecial 
        ? Math.random() * 20 + 25 + "px" 
        : Math.random() * 12 + 16 + "px";
        
    item.style.animationDuration = fuerzaEspecial 
        ? Math.random() * 3 + 3 + "s" 
        : Math.random() * 4 + 5 + "s";
    
    contenedor.appendChild(item);
    setTimeout(() => item.remove(), 8000);
}
setInterval(() => crearLluviaEfectos(false), 450);

// Comportamiento mágico e impacto visual al dar "Sí, acepto"
document.getElementById("yes").onclick = () => {
    // Ocultamos la zona del carrusel y botones viejos con gracia
    document.getElementById("interactive-zone").classList.add("hidden");
    
    // Mostramos la tarjeta final romántica con Gwen en lugar de MJ
    const resultBox = document.getElementById("result");
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
        💖 ¡SABÍA QUE DIRÍAS QUE SÍ!<br><br>
        <span style="color: #ff2a6d;">Ahora eres oficialmente la Gwen de este Andrew Garfield.</span><br>
        Prometo que en este universo cuidaré de ti cada día y jamás te voy a soltar. 🕷️✨❤️
    `;
    
    // Lanzamos ráfagas inmediatas de frases y corazones gigantes como efecto de celebración
    for (let i = 0; i < 40; i++) {
        setTimeout(() => crearLluviaEfectos(true), i * 80);
    }
    for (let j = 0; j < 3; j++) {
        setTimeout(lanzarFrase, j * 300);
    }
};

// Control de escape perfecto para el botón "No" (Evita salir de pantalla)
const btnNo = document.getElementById("no");

btnNo.addEventListener("mouseover", moverBotonNo);
btnNo.addEventListener("click", moverBotonNo); // Para soporte responsivo táctil

function moverBotonNo() {
    const margenSeguridad = 80;
    const x = Math.random() * (window.innerWidth - margenSeguridad * 2) + margenSeguridad;
    const y = Math.random() * (window.innerHeight - margenSeguridad * 2) + margenSeguridad;
    
    btnNo.style.position = "fixed";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnNo.style.zIndex = "999";
}
