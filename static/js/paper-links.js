document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".paper-link, .repo-link").forEach(link => {
    // 用 pointerdown，比 click 更早执行，target=_blank 时也更稳定
    link.addEventListener("pointerdown", () => {
      link.classList.add("is-clicked");
    });
  });
});