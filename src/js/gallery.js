/* ==========================================================================
   BAHÍA AZUL DETAILING — INTERACTIVE GALLERY & LIGHTBOX
   Conforme a la guía oficial de modern-web-guidance (light-dismiss-a-dialog)
   ========================================================================== */

export function initGallery() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalAuthor = document.getElementById('modalAuthor');
  const modalSource = document.getElementById('modalSource');
  const closeBtn = document.querySelector('.modal-close-btn');
  const prevBtn = document.querySelector('.modal-nav-prev');
  const nextBtn = document.querySelector('.modal-nav-next');

  let activeIndex = 0;
  const visibleItems = () => Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));

  // 1. Filtrado de categorías
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // 2. Apertura del Lightbox Modal
  const openModal = (index) => {
    const items = visibleItems();
    if (!items[index] || !modal) return;
    activeIndex = index;

    const item = items[index];
    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || img?.alt || 'Detalle automotriz';
    const category = item.getAttribute('data-category-label') || '';
    const author = item.getAttribute('data-author') || 'Fotógrafo verificado';
    const source = item.getAttribute('data-source') || '';

    if (modalImg) {
      modalImg.src = img?.src || '';
      modalImg.alt = title;
    }
    if (modalTitle) modalTitle.textContent = title;
    if (modalCategory) modalCategory.textContent = category;
    if (modalAuthor) modalAuthor.textContent = `Fotografía real por: ${author}`;
    if (modalSource) {
      modalSource.textContent = source ? `Origen: ${source}` : 'Licencia Unsplash verificada';
    }

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    }
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const items = visibleItems();
      const index = items.indexOf(item);
      if (index !== -1) openModal(index);
    });

    // Soporte teclado Enter / Espacio en tarjeta
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const items = visibleItems();
        const index = items.indexOf(item);
        if (index !== -1) openModal(index);
      }
    });
  });

  // 3. Navegación Anterior / Siguiente
  const showPrev = () => {
    const items = visibleItems();
    if (items.length === 0) return;
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    openModal(activeIndex);
  };

  const showNext = () => {
    const items = visibleItems();
    if (items.length === 0) return;
    activeIndex = (activeIndex + 1) % items.length;
    openModal(activeIndex);
  };

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrev();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
  });

  // 4. Cerrar modal con botón
  closeBtn?.addEventListener('click', () => {
    modal?.close();
  });

  // 5. Manejo de teclado (Flechas y ESC)
  modal?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      showPrev();
    } else if (e.key === 'ArrowRight') {
      showNext();
    }
  });

  // 6. Fallback de modern-web-guidance para 'closedby="any"'
  if (modal && !('closedBy' in HTMLDialogElement.prototype)) {
    modal.addEventListener('click', (event) => {
      if (event.target !== modal) return;
      const rect = modal.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        modal.close();
      }
    });
  }
}
