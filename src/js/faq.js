/* ==========================================================================
   BAHÍA AZUL DETAILING — ACCESSIBLE FAQ ACCORDION
   ========================================================================== */

export function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerPanel = item.querySelector('.faq-answer-panel');

    if (!questionBtn || !answerPanel) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Cerrar otros elementos para mantener lectura limpia
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          otherBtn?.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Alternar estado actual
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answerPanel.style.maxHeight = null;
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
      }
    });
  });
}
