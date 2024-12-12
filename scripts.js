document.addEventListener("DOMContentLoaded", () => {
  const musicItems = document.querySelectorAll(".music-list li");

  // Detecta se o dispositivo é móvel
  const isMobile = () => window.innerWidth <= 768;

  musicItems.forEach((item) => {
    const instruments = item.querySelector(".instruments");
    const title = item.querySelector("h2, a");

    // Adiciona o comportamento de clique no título para dispositivos móveis
    if (isMobile() && title) {
      title.addEventListener("click", (e) => {
        e.stopPropagation(); // Previne comportamento inesperado

        // Alterna a visibilidade do instrumento atual
        instruments.classList.toggle("visible");
      });
    }

    // Adiciona o comportamento de clique no item para desktop
    item.addEventListener("click", () => {
      // Fecha outros instrumentos antes de abrir/minimizar o atual
      musicItems.forEach((otherItem) => {
        const otherInstruments = otherItem.querySelector(".instruments");
        if (otherInstruments && otherInstruments !== instruments) {
          otherInstruments.classList.remove("visible");
        }
      });

      // Alterna a visibilidade do instrumento atual
      instruments.classList.toggle("visible");
    });
  });
});
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const instruments = button.nextElementSibling;
    instruments.classList.toggle("visible");
    button.textContent = instruments.classList.contains("visible") ? "⇧" : "↕";
  });
});
