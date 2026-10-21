/* ==========================================================================
   BAHÍA AZUL DETAILING — CENTRALIZED CONFIGURATION & DATA
   ========================================================================== */

export const CONFIG = {
  businessName: 'Bahía Azul Detailing',
  whatsappNumberRaw: '5218331851293',
  whatsappDisplay: '833 185 1293',
  whatsappBaseUrl: 'https://wa.me/5218331851293',
  defaultWhatsAppMessage: 'Hola, Bahía Azul Detailing. Vi su página web y me gustaría recibir información y una cotización para mi vehículo.',
  
  servicesMessages: {
    'lavado-detallado': 'Hola, Bahía Azul Detailing. Me gustaría recibir información y una cotización para el servicio de Lavado detallado en mi vehículo.',
    'detallado-interior': 'Hola, Bahía Azul Detailing. Me gustaría cotizar el servicio de Detallado interior y acondicionamiento para mi vehículo.',
    'detallado-exterior': 'Hola, Bahía Azul Detailing. Me gustaría cotizar el servicio de Detallado exterior para mi vehículo.',
    'pulido-pintura': 'Hola, Bahía Azul Detailing. Me gustaría cotizar el servicio de Pulido de pintura (corrección de brillo y micro-rayas) para mi auto.',
    'proteccion-pintura': 'Hola, Bahía Azul Detailing. Me gustaría recibir información y cotizar la Protección de pintura (sellado / cerámico) para mi vehículo.'
  },

  /**
   * Genera el enlace oficial de WhatsApp con codificación segura URI
   * @param {string} customMessage
   * @returns {string} URL formateada para WhatsApp
   */
  getWhatsAppUrl(customMessage) {
    const text = customMessage || this.defaultWhatsAppMessage;
    return `${this.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
  },

  /**
   * Registro transparente y documentado de imágenes reales (CERO IA)
   * Licencia Unsplash comercial libre y verificable
   */
  imageRegistry: [
    {
      id: 'hero-main',
      title: 'Acabado y reflejos en carrocería de lujo',
      author: 'Campbell',
      authorUrl: 'https://unsplash.com/@campbell33',
      sourceUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      license: 'Unsplash License (Uso comercial permitido, fotografía real de cámara reflex)',
      isAi: false
    },
    {
      id: 'wash-snow-foam',
      title: 'Lavado con espuma activa de alta densidad',
      author: 'Jan Kopřiva',
      authorUrl: 'https://unsplash.com/@koprivart',
      sourceUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f',
      license: 'Unsplash License (Fotografía real)',
      isAi: false
    },
    {
      id: 'paint-polishing',
      title: 'Corrección y pulido mecánico de pintura',
      author: 'Tekton Studio',
      authorUrl: 'https://unsplash.com',
      sourceUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785',
      license: 'Unsplash License (Fotografía real en taller)',
      isAi: false
    },
    {
      id: 'interior-leather',
      title: 'Acondicionamiento y limpieza de vestiduras de piel',
      author: 'Stefan Rodriguez',
      authorUrl: 'https://unsplash.com/@stefanrodriguez',
      sourceUrl: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc',
      license: 'Unsplash License (Fotografía real automotriz)',
      isAi: false
    },
    {
      id: 'wheel-caliper',
      title: 'Detallado minucioso de rines y frenos',
      author: 'Martin Katler',
      authorUrl: 'https://unsplash.com/@martinkatler',
      sourceUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
      license: 'Unsplash License (Fotografía real)',
      isAi: false
    },
    {
      id: 'beading-coating',
      title: 'Efecto hidrofóbico y perlas de agua sobre sellador',
      author: 'Viktor Theo',
      authorUrl: 'https://unsplash.com/@viktortheo',
      sourceUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9',
      license: 'Unsplash License (Fotografía real)',
      isAi: false
    },
    {
      id: 'gloss-reflection',
      title: 'Brillo y profundidad de pintura oscura',
      author: 'Campbell',
      authorUrl: 'https://unsplash.com/@campbell33',
      sourceUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      license: 'Unsplash License (Fotografía real)',
      isAi: false
    }
  ]
};
