// Abre/cierra el modal de Dirección con accesibilidad básica.
(function () {
  const openBtn = document.getElementById('btn-direccion');
  const modal = document.getElementById('modal-direccion');
  const closeBtn = document.getElementById('close-modal');
  const backdrop = document.getElementById('modal-backdrop');

  function openModal() {
    modal.setAttribute('aria-hidden', 'false');
    // Enfocar el botón cerrar para navegación con teclado
    setTimeout(() => closeBtn && closeBtn.focus(), 0);
    document.addEventListener('keydown', escListener);
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    openBtn && openBtn.focus();
    document.removeEventListener('keydown', escListener);
  }

  function escListener(e) {
    if (e.key === 'Escape') closeModal();
  }

  openBtn && openBtn.addEventListener('click', openModal);
  closeBtn && closeBtn.addEventListener('click', closeModal);
  backdrop && backdrop.addEventListener('click', closeModal);

  // TIP: para insertar la dirección por JS, puedes hacer:
  // document.getElementById('address-slot').innerHTML =
  //   'Residencial Los Pinos, Casa #23, Tegucigalpa <br>' +
  //   '<a href="https://maps.google.com/?q=..." target="_blank" rel="noopener">Abrir en Google Maps</a>';
})();
