/* Manejo de menú (abrir / cerrar), accesibilidad y evento de teclado */
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu');
  const closeBtn = document.getElementById('closeMenu');
  const ctaBtn = document.getElementById('ctaBtn');

  function openMenu() {
    sideMenu.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    // poner foco en primer enlace del menú
    const firstLink = sideMenu.querySelector('.side-nav a');
    if (firstLink) firstLink.focus();
    document.body.style.overflow = 'hidden'; // evitar scroll de fondo
  }

  function closeMenu() {
    sideMenu.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
    document.body.style.overflow = ''; // restaurar scroll
  }

  menuBtn.addEventListener('click', function () {
    const hidden = sideMenu.getAttribute('aria-hidden') === 'false';
    if (hidden) closeMenu();
    else openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  // Cerrar al pulsar escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const open = sideMenu.getAttribute('aria-hidden') === 'false';
      if (open) closeMenu();
    }
  });

  // Cerrar menú al hacer clic en cualquier link del menú (útil para navegación simple)
  sideMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });

  // Ejemplo: animación al presionar el CTA (puedes vincular aquí la lógica real)
  ctaBtn.addEventListener('click', function () {
    // [Especificar acción real en tu backend o redirección]
    // Por ahora solo un efecto visual breve
    ctaBtn.style.transform = 'scale(0.98)';
    setTimeout(() => ctaBtn.style.transform = '', 160);
    // Si quieres que haga scroll a una sección o abra un modal, aquí puedes editar
  });
});