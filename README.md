# 💝 Animación de San Valentín

Una hermosa página web animada para dedicar en San Valentín con corazones flotantes, efectos de confeti y galería de fotos personalizable.

## ✨ Características

- 🎭 Animaciones románticas con corazones flotantes
- 💌 Mensaje personalizable
- 📸 Galería de fotos con opción de subir imágenes
- 🎊 Efectos de confeti
- 📱 Diseño responsivo (se adapta a móvil y desktop)
- 💾 Las fotos se guardan localmente en el navegador

## 🎨 Cómo personalizar los mensajes

### Opción 1: Editar directamente en el código

Abre el archivo `index.html` y modifica estos textos:

1. **Mensaje principal** (línea 39):
```html
<p class="message-text" id="messageText">
    En este San Valentín quiero decirte lo mucho que significas para mí.
    Cada momento a tu lado es un regalo que atesoro en mi corazón.
    <!-- CAMBIA ESTE TEXTO POR TU MENSAJE -->
</p>
```

2. **Mensaje final** (línea 65):
```html
<p class="final-message" id="finalMessage">
    Gracias por ser mi compañero/a, mi amor, mi mejor amigo/a.
    <!-- CAMBIA ESTE TEXTO POR TU MENSAJE -->
</p>
```

### Opción 2: Usar la consola del navegador

Después de desplegar la página, abre la consola del navegador (F12) y ejecuta:

```javascript
// Cambiar el mensaje principal
editMainMessage("Tu mensaje romántico aquí...");

// Cambiar el mensaje final
editFinalMessage("Tu mensaje final aquí...");
```

## 📸 Cómo agregar fotos

Puedes agregar fotos de dos maneras:

1. **Durante la navegación**: Cuando llegues a la sección de fotos, haz clic en "➕ Agregar más fotos" y selecciona las imágenes desde tu dispositivo.

2. **Las fotos se guardan automáticamente** en el navegador, por lo que la próxima vez que abras la página, seguirán ahí.

## 🚀 Desplegar en Vercel

### Paso 1: Preparar el proyecto

1. Crea una cuenta en [GitHub](https://github.com) si no tienes una
2. Sube estos archivos a un nuevo repositorio de GitHub:
   - `index.html`
   - `styles.css`
   - `script.js`

### Paso 2: Desplegar en Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Haz clic en "Import Git Repository"
3. Selecciona tu repositorio de GitHub
4. Haz clic en "Deploy"
5. ¡Listo! Vercel te dará una URL como: `tu-proyecto.vercel.app`

### Método alternativo (sin GitHub):

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Arrastra y suelta la carpeta completa del proyecto
3. Vercel la desplegará automáticamente

## 🛠️ Archivos del proyecto

```
san-valentin/
├── index.html      # Estructura de la página
├── styles.css      # Estilos y animaciones
├── script.js       # Funcionalidad e interactividad
└── README.md       # Este archivo
```

## 💡 Consejos

- **Personaliza los colores**: En `styles.css` puedes cambiar el gradiente de fondo (línea 8)
- **Agrega más emojis**: En `script.js` línea 14 puedes agregar más emojis de corazones
- **Mensajes más largos**: No hay límite de texto, escribe todo lo que quieras
- **Formato del texto**: Puedes usar saltos de línea para organizar mejor tu mensaje

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Dispositivos móviles iOS y Android
- ✅ Tablets y computadoras

## ❤️ Disfruta

¡Espero que tu ser querido ame esta dedicatoria! Feliz San Valentín 💕
