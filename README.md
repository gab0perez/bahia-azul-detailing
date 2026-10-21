# Bahía Azul Detailing — Demostración Comercial Web

Sitio web profesional y responsivo desarrollado por **ARCHITEKTON — Sistemas y Automatización** como propuesta comercial y técnica para **Bahía Azul Detailing**.

🌐 **Sitio en Producción:** [https://bahia-azul-detailing.vercel.app](https://bahia-azul-detailing.vercel.app)  
📦 **Repositorio GitHub:** [https://github.com/gab0perez/bahia-azul-detailing](https://github.com/gab0perez/bahia-azul-detailing)

---

## 🎨 1. Identidad Visual y Paleta de Colores

La estética del sitio combina elegancia automotriz, acabados oscuros de alta gama y contrastes inspirados en el océano y el brillo de vehículos detallados.

Todos los colores están centralizados en `src/css/variables.css`:

| Nombre | Código HEX | Aplicación |
| :--- | :--- | :--- |
| **Azul océano profundo** | `#061A2B` | Fondos de superficie y tarjetas secundarias |
| **Azul marino** | `#0B2942` | Contenedores elevados y botones secundarios |
| **Azul acento** | `#168BFF` | Botones principales, enlaces activos y acentos |
| **Azul hielo** | `#D9F0FF` | Textos destacados, insignias y contrastes suaves |
| **Blanco principal** | `#F7FAFC` | Encabezados y textos primarios de alta legibilidad |
| **Gris acero** | `#A9B5C2` | Párrafos, descripciones y textos secundarios |
| **Negro carbón** | `#070A0E` | Fondo maestro (`body`) y sombras de profundidad |

---

## 🚫 2. Política Estricta de Imágenes (CERO IA)

El proyecto cumple al 100% con la restricción obligatoria: **ninguna imagen fue generada por Inteligencia Artificial ni mediante herramientas sintéticas**.

### Fuentes Verificadas y Licencias:
Todas las fotografías de demostración provienen de fotógrafos reales reconocidos en Unsplash bajo la [Licencia Unsplash](https://unsplash.com/license) (libre para uso comercial):

1. **Hero Principal (`Campbell`)**: Fotografía real de vehículo deportivo oscuro con acabado espejo.
2. **Lavado Detallado (`Jan Kopřiva`)**: Proceso real de aplicación de espuma activa de alta densidad.
3. **Detallado Interior (`Stefan Rodriguez`)**: Interior automotriz de piel y tablero acondicionado mate.
4. **Detallado Exterior (`Martin Katler`)**: Rin deportivo y mordaza de freno detallados a fondo.
5. **Pulido de Pintura (`Tekton Studio`)**: Técnico operando pulidora orbital sobre laca.
6. **Protección de Pintura (`Viktor Theo`)**: Efecto hidrofóbico real con gotas de agua sobre sellador cerámico.

*La sección de Galería incluye una tarjeta visible que aclara que se trata de una demostración técnica, preparada para recibir las fotos de trabajos reales del cliente.*

---

## 📱 3. Integración Oficial de WhatsApp

- **Número centralizado en formato internacional mexicano:** `5218331851293` (Línea oficial: `833 185 1293`).
- **Enlace base oficial:** `https://wa.me/5218331851293`
- **Ubicación de botones:**
  - Encabezado fijo (Desktop y Drawer móvil).
  - Hero principal (botón de cotización directa).
  - Cada una de las 5 tarjetas de servicio (con mensaje prellenado específico para cada servicio).
  - Lanzador de cotizaciones en la sección de contacto (con campos para vehículo y servicio).
  - Pie de página (footer).
  - Botón flotante permanente con efecto de pulsación accesible.

---

## 🛠️ 4. Estructura del Proyecto

```text
bahia-azul-detailing/
├── index.html              # Estructura semántica, accesibilidad y SEO
├── package.json            # Configuración de dependencias y scripts Vite
├── public/
│   └── favicon.svg         # Isotipo provisional vectorial
└── src/
    ├── css/
    │   ├── variables.css   # Tokens de diseño y paleta oficial
    │   ├── base.css        # Reset, tipografía y accesibilidad
    │   ├── components.css  # Navbar, Hero, Servicios, Galería, FAQ, Contacto, Footer
    │   └── animations.css  # Microinteracciones y revelación al scroll
    └── js/
        ├── config.js       # Centralización de WhatsApp y registro de imágenes
        ├── navigation.js   # Menú móvil (drawer), scrollspy y navegación suave
        ├── gallery.js      # Filtros interactivos y Lightbox Modal accesible
        ├── faq.js          # Acordeón accesible de preguntas frecuentes
        └── main.js         # Orquestador principal y vinculación de WhatsApp
```

---

## 🚀 5. Comandos para Ejecutar el Proyecto

### Modo Desarrollo:
```bash
npm run dev
```
Abre en el navegador: [http://localhost:5173/](http://localhost:5173/)

### Compilación para Producción:
```bash
npm run build
```
Genera los archivos optimizados listos para hosting estático en la carpeta `dist/`.

### Previsualizar Compilación:
```bash
npm run preview
```

---

## 📋 6. Información Pendiente de Confirmar con Bahía Azul Detailing

Para la versión final de producción se recomienda solicitar al cliente:
1. Logotipo oficial en formato vectorial (SVG / PNG en alta resolución).
2. Portafolio fotográfico de trabajos realizados en su propio taller.
3. Confirmación de lista oficial de servicios, paquetes y garantías específicas.
4. Ubicación física / taller (si aplica atención en local o a domicilio).
5. Horarios oficiales de atención y redes sociales (Instagram, Facebook).

---

*Desarrollado para ARCHITEKTON — Sistemas y Automatización*
