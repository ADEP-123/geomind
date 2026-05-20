# Geomind Analytics - Página Web

Página web moderna y responsive para Geomind Analytics, plataforma SaaS de IA para análisis geológicos. Construida con React + Vite y el sistema de diseño CORE DS.

## 🎨 Características

- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Sistema de diseño CORE DS completamente implementado
- ✅ Secciones: Home, Nosotros, Análisis PESTEL/DOFA, Estructura Organizacional, Productos, Contacto
- ✅ Componentes reutilizables (Button, Card)
- ✅ Formulario de contacto funcional
- ✅ Animaciones sutiles y transiciones
- ✅ Colores, tipografía y espaciado del sistema CORE DS
- ✅ Performance optimizado con Vite

## 📋 Requisitos

- Node.js 16+ 
- npm o yarn

## 🚀 Instalación Local

### 1. Clonar o descargar el proyecto

```bash
git clone <repository-url>
cd geomind-analytics
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

La página se abrirá automáticamente en `http://localhost:3000`

## 📦 Construcción para Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` lista para desplegar.

## 🌐 Despliegue en Servidores Gratuitos

### Opción 1: Netlify (Recomendado)

1. Ve a [netlify.com](https://www.netlify.com)
2. Crea una cuenta con GitHub (opcional)
3. Click en "Add new site" → "Deploy manually"
4. Arrastra la carpeta `dist/` que generaste con `npm run build`
5. ¡Listo! Tu sitio estará en vivo en segundos

**O con GitHub:**
1. Pushea tu código a GitHub
2. Conecta tu repositorio en Netlify
3. Netlify construirá y desplegará automáticamente

### Opción 2: Vercel

1. Ve a [vercel.com](https://www.vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará que es un proyecto Vite
4. Haz click en "Deploy"
5. Tu sitio estará en vivo

### Opción 3: GitHub Pages

1. Modifica `vite.config.js` para agregar base:
```javascript
export default defineConfig({
  base: '/geomind-analytics/',
  // ... resto del config
})
```

2. Instala `gh-pages`:
```bash
npm install --save-dev gh-pages
```

3. Agrega scripts en `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Estructura del Proyecto

```
geomind-analytics/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Analysis.jsx
│   │   ├── Products.jsx
│   │   ├── Organization.jsx
│   │   ├── Contact.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── *.module.css (estilos de componentes)
│   ├── styles/
│   │   └── globals.css (estilos globales y variables CORE DS)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Sistema de Diseño CORE DS

Toda la página implementa el sistema visual CORE DS:

### Colores Principales
- **Ocre**: `#C4860A` (Acción/Energía - Primario)
- **Teal**: `#4A7C9E` (Datos/Confianza - Secundario)
- **Fondos**: Degradados oscuros para reducir fatiga visual
- **Semánticos**: Verde (éxito), Amarillo (advertencia), Rojo (error)

### Tipografía
- **Georgia** (Serif): Titulares y énfasis
- **Inter** (Sans): Cuerpo de texto y UI
- **Courier New** (Mono): Datos técnicos

### Espaciado
Base 4px con multiplicadores: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px

### Componentes
- Botones: Primary, Secondary, Ghost (3 variantes)
- Cards: Con header, body y footer
- Formularios: Inputs con focus states
- Sombras y elevaciones: 4 niveles

## 📱 Responsive Design

- **Desktop**: 1280px+ (12 columnas, max-width 1440px)
- **Tablet**: 768px - 1279px (8 columnas)
- **Mobile**: 320px - 767px (4 columnas)

## 🔧 Personalización

### Cambiar colores
Modifica las variables CSS en `src/styles/globals.css`:

```css
:root {
  --color-ocre-500: #C4860A;
  --color-teal-500: #4A7C9E;
  /* ... más variables */
}
```

### Agregar secciones
1. Crea nuevo componente en `src/components/`
2. Importa en `App.jsx`
3. Agrega a la sección `<main>`

### Personalizar contenido
- Edita textos directamente en los componentes JSX
- Las imágenes son SVG inline (fácil de modificar)
- Los datos están hardcodeados en arrays dentro de cada componente

## 🚨 Troubleshooting

**"Module not found"**
```bash
rm -rf node_modules
npm install
```

**Build falla**
- Verifica que tengas Node.js 16+
- Chequea que todos los imports estén correctos

**Sitio se ve mal después de desplegar**
- Si usas GitHub Pages, asegúrate de configurar `base` en `vite.config.js`

## 📄 Licencia

Proyecto creado para Universidad de Santander - UDES

## ✉️ Contacto

- Email: contact@geomindanalytics.com
- LinkedIn: [Geomind Analytics]
- GitHub: [geomind-analytics]

---

**Hecho con ❤️ usando React, Vite y CORE Design System**
