// Selección de elementos de la carta
const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".envelope .flap");
const letterContent = document.querySelector(".letter-content");

// Acción al hacer clic en el sobre para abrirlo
envelope.addEventListener("click", () => {
    // Animación para el flap del sobre
    flap.style.transform = "rotateX(-180deg)";
    // Animación para mostrar el contenido de la carta
    letterContent.style.transform = "rotateX(0deg)";
    // Desactivar la interacción con el sobre después de la animación
    setTimeout(() => {
        envelope.style.pointerEvents = "none";
    }, 1000);
});

// Generación de nieve de manera dinámica
const snowflakesContainer = document.querySelector(".background");
const snowflakeCount = 50;  // Número de copos de nieve a generar

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;  // Posición horizontal aleatoria
    snowflake.style.animationDelay = `${Math.random() * 5}s`;  // Retraso aleatorio para cada copo
    snowflake.style.width = snowflake.style.height = `${Math.random() * 10 + 5}px`;  // Tamaño aleatorio de los copos
    snowflakesContainer.appendChild(snowflake);
}
