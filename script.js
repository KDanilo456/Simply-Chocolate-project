document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");

  openButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => toggleModal(modals[i]));
  });

  closeButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => toggleModal(modals[i]));
  });

  function toggleModal(modal) {
    if (!modal) return;
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = nav.querySelectorAll('a');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    nav.classList.toggle('active'); 
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      nav.classList.remove('active'); 
      burger.classList.remove('active');
    });
  });
});
