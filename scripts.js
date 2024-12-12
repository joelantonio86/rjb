const musicListItems = document.querySelectorAll(".music-list li");
musicListItems.forEach((a) => {
  a.addEventListener("mouseover", () => {
    const b = a.querySelector(".instruments");
    b.style.display = "block";
  });
  a.addEventListener("mouseout", () => {
    const b = a.querySelector(".instruments");
    b.style.display = "none";
  });
});

const musicItems = document.querySelectorAll(".music-list li");

musicItems.forEach((item) => {
  item.addEventListener("click", () => {
    const instruments = item.querySelector(".instruments");
    instruments.style.display = "block";
  });
});
