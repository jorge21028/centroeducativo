const inputs = ['postTitle', 'mainImg', 'introText', 'galleryImg'];

function updatePreview() {
    const data = {
        title: document.getElementById('postTitle').value,
        date: new Date().toISOString().split('T')[0],
        mainImg: document.getElementById('mainImg').value,
        intro: document.getElementById('introText').value,
        galleryImg: document.getElementById('galleryImg').value
    };

    // Generamos el HTML para la previsualización basado en su estructura
    const previewHtml = `
        <div class="post-content-styled">
            <h1>${data.title}</h1>
            <div class="card-egresado">
                <img src="${data.mainImg}" alt="Header">
                <p><strong>Evento Destacado</strong></p>
            </div>
            <div class="intro-text" style="margin-top:20px; line-height:1.6;">
                ${data.intro}
            </div>
            <div class="card-egresado" style="margin-top:20px;">
                <img src="${data.galleryImg}" style="height:300px; object-fit:cover;">
            </div>
        </div>
    `;

    document.getElementById('markdown-render').innerHTML = previewHtml;
}

// Función para descargar el archivo .md
function downloadMarkdown() {
    // 1. Obtener valores de los inputs
    const title = document.getElementById('postTitle').value;
    const mainImg = document.getElementById('mainImg').value;
    const intro = document.getElementById('introText').value;
    const galleryImg = document.getElementById('galleryImg').value;
    
    // 2. Generar Fecha (YYYY-MM-DD)
    const date = new Date().toISOString().split('T')[0];

    // 3. Formatear Título para el nombre del archivo (Slug)
    // Convierte a minúsculas, quita acentos básicos y cambia espacios por guiones
    const titleSlug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remueve tildes
        .replace(/[^a-z0-9\s]/g, '')     // Remueve caracteres especiales
        .replace(/\s+/g, '-');           // Espacios por guiones

    // 4. Estructura del contenido MD (basado en su ejemplo)
    const mdContent = `---
layout: post
title: "${title}"
date: ${date}
categories: eventos
image: "${mainImg}"
---
<section class="post-content-styled">
    <div class="card-egresado" style="padding: 0; overflow: hidden; margin-bottom: 30px;">
        <img src="${mainImg}" style="width: 100%; height: auto; display: block;">
        <div style="padding: 20px; text-align: left;">
            <p class="logro"><strong>Evento Destacado</strong></p>
            <p>Nuestros estudiantes de secundaria demostrando su talento en el desarrollo de software y hardware.</p>
        </div>
    </div>
    <div class="intro-text" style="font-size: 1.2rem; color: var(--primary); margin-bottom: 30px; line-height: 1.8;">
        ${intro}
    </div>
    <div class="card-egresado" style="margin-bottom: 40px;">
        <div class="foto-marco-galeria" style="height: 350px;">
            <img src="${galleryImg}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p class="pie-foto">Registro visual de las actividades de innovación.</p>
    </div>
</section>`;

    // 5. Crear y disparar la descarga con el nombre solicitado
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    // Nombre del archivo: AAAA-MM-DD-titulo-del-post.md
    a.download = `${date}-${titleSlug}.md`; 
    
    a.href = url;
    a.click();
    
    // Limpieza de memoria
    URL.revokeObjectURL(url);
}

// Listeners para actualización en tiempo real
inputs.forEach(id => {
    document.getElementById(id).addEventListener('input', updatePreview);
});

// Inicializar previsualización
updatePreview();