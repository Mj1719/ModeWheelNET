document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-drawer");
  if (!btn || !drawer) return;

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.hidden = !open;
  };

  setOpen(false);

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  drawer.addEventListener("click", (e) => {
    if (e.target.tagName === "A") setOpen(false);
  });
});