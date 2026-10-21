/* ==========================================================================
   BAHÍA AZUL DETAILING — MAIN JAVASCRIPT ENTRYPOINT
   Desarrollo comercial por ARCHITEKTON — Sistemas y Automatización
   ========================================================================== */

import '../css/variables.css';
import '../css/base.css';
import '../css/components.css';
import '../css/animations.css';

import { CONFIG } from './config.js';
import { initNavigation } from './navigation.js';
import { initGallery } from './gallery.js';
import { initFaq } from './faq.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar módulos de interfaz
  initNavigation();
  initGallery();
  initFaq();

  // 2. Conexión de todos los botones de WhatsApp
  setupWhatsAppLinks();

  // 3. Conexión del formulario interactivo de prelanzamiento WhatsApp
  setupContactLauncher();

  // 4. Animaciones de entrada al hacer scroll (Reveal on scroll)
  setupScrollReveal();

  console.info(`%c Bahía Azul Detailing %c Desarrollado por ARCHITEKTON `, 
    'background: #168BFF; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'background: #061A2B; color: #D9F0FF; padding: 4px 8px; border-radius: 4px;'
  );
  console.info(`Línea oficial de WhatsApp configurada: ${CONFIG.whatsappDisplay} (${CONFIG.whatsappNumberRaw})`);
});

/**
 * Vincula todos los elementos [data-wa-action] al número oficial de WhatsApp
 */
function setupWhatsAppLinks() {
  const waButtons = document.querySelectorAll('[data-wa-action]');

  waButtons.forEach(btn => {
    const serviceKey = btn.getAttribute('data-service');
    let message = CONFIG.defaultWhatsAppMessage;

    if (serviceKey && CONFIG.servicesMessages[serviceKey]) {
      message = CONFIG.servicesMessages[serviceKey];
    } else if (btn.getAttribute('data-wa-message')) {
      message = btn.getAttribute('data-wa-message');
    }

    const finalUrl = CONFIG.getWhatsAppUrl(message);
    btn.setAttribute('href', finalUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // Botón flotante
  const floatingBtn = document.querySelector('.floating-whatsapp-btn');
  if (floatingBtn) {
    floatingBtn.setAttribute('href', CONFIG.getWhatsAppUrl(CONFIG.defaultWhatsAppMessage));
    floatingBtn.setAttribute('target', '_blank');
    floatingBtn.setAttribute('rel', 'noopener noreferrer');
  }
}

/**
 * Manejo del formulario de cotización directa por WhatsApp
 */
function setupContactLauncher() {
  const form = document.getElementById('quickWaForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const vehicleInput = document.getElementById('waVehicleInput');
    const serviceSelect = document.getElementById('waServiceSelect');
    const detailsInput = document.getElementById('waDetailsInput');

    const vehicle = vehicleInput?.value.trim() || 'No especificado';
    const service = serviceSelect?.options[serviceSelect.selectedIndex]?.text || 'Consulta general';
    const details = detailsInput?.value.trim() || 'Sin comentarios adicionales';

    const customMessage = 
`Hola, Bahía Azul Detailing. Vi su página web y deseo cotizar un servicio:
• Vehículo: ${vehicle}
• Servicio de interés: ${service}
• Detalle / Comentario: ${details}

¿Podrían indicarme disponibilidad y costo estimado? Gracias.`;

    const targetUrl = CONFIG.getWhatsAppUrl(customMessage);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  });
}

/**
 * Revelación suave de tarjetas y secciones al hacer scroll
 */
function setupScrollReveal() {
  const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
  if (elementsToReveal.length === 0) return;

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    elementsToReveal.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback directo si no hay observer
    elementsToReveal.forEach(el => el.classList.add('is-revealed'));
  }
}
