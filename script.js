// Estado de la aplicación
let currentSection = 'welcome';
let photos = [];

// ⭐⭐⭐ CONFIGURA AQUÍ LAS RUTAS DE TUS FOTOS ⭐⭐⭐
// Pon tus fotos en la carpeta "images" y reemplaza estos nombres
const staticPhotos = [
    'image/1.jpeg',  // ← Reemplaza con el nombre de tu foto 1
    'image/2.jpeg',  // ← Reemplaza con el nombre de tu foto 2
    'image/3.GIF',  // ← Reemplaza con el nombre de tu foto 3
    'image/4.jpeg',  // ← Reemplaza con el nombre de tu foto 4
    'image/5.jpeg',  // ← Reemplaza con el nombre de tu foto 5
    'image/6.jpeg',
    'image/7.jpg',
    'image/8.jpg',
    'image/9.jpg',
    'image/10.jpg',
    'image/11.jpg',
    'image/12.jpg',
    'image/13.jpg',
    'image/14.jpg',
    'image/15.jpg',
    'image/16.jpg',
    'image/17.jpg',
    'image/18.jpg',
    'image/19.jpg',
    'image/20.mp4',

];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    loadPhotos();
    loadStaticPhotos();
});

// Crear corazones flotantes
function createFloatingHearts() {
    const container = document.getElementById('heartsBackground');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            container.appendChild(heart);
        }, i * 200);
    }
}

// Mostrar sección del mensaje
function showMessage() {
    changeSection('welcome', 'message');
    typeWriter();
}

// Efecto de escritura para el mensaje
function typeWriter() {
    const messageElement = document.getElementById('messageText');
    const originalText = messageElement.textContent;
    messageElement.textContent = '';
    let i = 0;

    const timer = setInterval(() => {
        if (i < originalText.length) {
            messageElement.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 30);
}

// Mostrar sección de fotos
function showPhotos() {
    changeSection('message', 'photos');
    displayPhotos();
}

// Mostrar mensaje final
function showFinalMessage() {
    changeSection('photos', 'final');
    launchConfetti();
}

// Reiniciar la experiencia
function restart() {
    stopConfetti();
    changeSection('final', 'welcome');
}

// Cambiar entre secciones
function changeSection(from, to) {
    const fromSection = document.getElementById(from + 'Section');
    const toSection = document.getElementById(to + 'Section');

    fromSection.classList.remove('active');
    setTimeout(() => {
        toSection.classList.add('active');
    }, 300);

    currentSection = to;
}

// Manejar carga de fotos
function handlePhotoUpload(event) {
    const files = event.target.files;

    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
                photos.push(e.target.result);
                savePhotos();
                displayPhotos();
            };

            reader.readAsDataURL(file);
        }
    }

    event.target.value = '';
}

// Mostrar fotos en la galería
function displayPhotos() {
    const gallery = document.getElementById('photoGallery');
    gallery.innerHTML = '';

    if (photos.length === 0) {
        // Mostrar mensaje cuando no hay fotos
        const noPhotosMessage = document.createElement('div');
        noPhotosMessage.style.cssText = `
            grid-column: 1 / -1;
            padding: 40px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 20px;
            color: #764ba2;
            font-size: 1.2rem;
        `;
        noPhotosMessage.innerHTML = `
            <p style="margin-bottom: 15px;">📸 No has configurado fotos aún</p>
            <p style="font-size: 0.9rem; opacity: 0.8;">
                Edita el archivo <strong>script.js</strong> (líneas 5-15) y agrega las URLs de tus fotos,<br>
                o haz clic en "➕ Agregar más fotos" para subir imágenes desde tu dispositivo.
            </p>
        `;
        gallery.appendChild(noPhotosMessage);
    } else {
        photos.forEach((photo, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `
                <img src="${photo}" alt="Foto ${index + 1}" onerror="this.parentElement.style.display='none'">
                <button class="photo-remove" onclick="removePhoto(${index})">×</button>
            `;
            gallery.appendChild(photoItem);
        });
    }
}

// Eliminar foto
function removePhoto(index) {
    photos.splice(index, 1);
    savePhotos();
    displayPhotos();
}

// Guardar fotos en localStorage
function savePhotos() {
    try {
        localStorage.setItem('valentinePhotos', JSON.stringify(photos));
    } catch (e) {
        console.log('No se pudieron guardar las fotos');
    }
}

// Cargar fotos desde localStorage
function loadPhotos() {
    try {
        const saved = localStorage.getItem('valentinePhotos');
        if (saved) {
            photos = JSON.parse(saved);
        }
    } catch (e) {
        console.log('No se pudieron cargar las fotos');
    }
}

// Cargar fotos estáticas al inicio
function loadStaticPhotos() {
    // Si no hay fotos guardadas, usar las fotos estáticas
    if (photos.length === 0 && staticPhotos.length > 0) {
        // Usar todas las fotos configuradas
        photos = [...staticPhotos];
    }
}

// Confeti
let confettiInterval;
let confettiParticles = [];

function launchConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ff6b9d', '#ff8fab', '#ffa6c1', '#667eea', '#764ba2'];

    class ConfettiParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < 100; i++) {
        confettiParticles.push(new ConfettiParticle());
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiParticles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        confettiInterval = requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}

function stopConfetti() {
    if (confettiInterval) {
        cancelAnimationFrame(confettiInterval);
        confettiParticles = [];
        const canvas = document.getElementById('confetti');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// Ajustar canvas al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Función para editar el mensaje principal (puedes llamarla desde la consola)
function editMainMessage(newMessage) {
    document.getElementById('messageText').textContent = newMessage;
}

// Función para editar el mensaje final (puedes llamarla desde la consola)
function editFinalMessage(newMessage) {
    document.getElementById('finalMessage').textContent = newMessage;
}