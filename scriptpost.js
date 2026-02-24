const totalGalleryInputs = 10;
const galleryContainer = document.getElementById('galleryInputsContainer');

// 1. Generar los 10 inputs de galería automáticamente
for (let i = 1; i <= totalGalleryInputs; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `URL Imagen de Galería ${i}`;
    input.id = `galleryImg${i}`;
    input.className = 'gallery-input';
    input.addEventListener('input', updatePreview);
    galleryContainer.appendChild(input);
}

// 2. Función de Previsualización
function updatePreview() {
    const title = document.getElementById('postTitle').value || "Título del Post";
    const mainImg = document.getElementById('mainImg').value || "https://via.placeholder.com/1200x600?text=Imagen+Principal";
    const intro = document.getElementById('introText').value || "Escriba la introducción aquí...";

    let galleryHtml = '';
    for (let i = 1; i <= totalGalleryInputs; i++) {
        const url = document.getElementById(`galleryImg${i}`).value.trim();
        if (url !== "") {
            galleryHtml += `
                <div class="card-egresado" style="margin-bottom: 40px;">
                    <div class="foto-marco-galeria" style="height: 350px; overflow: hidden;">
                        <img src="${url}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <p style="padding: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Registro visual del evento.</p>
                </div>`;
        }
    }

    const htmlContent = `
        <section class="post-content-styled">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">${title}</h1>
            <div class="card-egresado" style="margin-bottom: 30px;">
                <img src="${mainImg}" style="width: 100%; height: auto; display: block;">
                <div style="padding: 20px; text-align: left;">
                    <p><strong>Evento Destacado</strong></p>
                    <p>Talento en desarrollo de software y hardware.</p>
                </div>
            </div>
            <div class="intro-text">${intro}</div>
            <hr style="margin: 40px 0; border: 0; border-top: 1px solid #eee;">
            ${galleryHtml}
        </section>
    `;

    document.getElementById('markdown-render').innerHTML = htmlContent;
}

// 3. Función de Descarga del Archivo .md
function downloadMarkdown() {
    const title = document.getElementById('postTitle').value;
    const mainImg = document.getElementById('mainImg').value;
    const intro = document.getElementById('introText').value;
    const date = new Date().toISOString().split('T')[0];

    // Formatear nombre del archivo (Slug)
    const titleSlug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');

    // Procesar imágenes de galería (solo las no vacías)
    let galleryMd = "";
    for (let i = 1; i <= totalGalleryInputs; i++) {
        const url = document.getElementById(`galleryImg${i}`).value.trim();
        if (url !== "") {
            galleryMd += `
    <div class="card-egresado" style="margin-bottom: 40px;">
        <div class="foto-marco-galeria" style="height: 350px;">
            <img src="${url}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p class="pie-foto">Registro visual de la feria de innovación.</p>
    </div>`;
        }
    }

    const fullContent = `---
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
            <p>Nuestros estudiantes de secundaria demostrando su talento.</p>
        </div>
    </div>
    <div class="intro-text" style="font-size: 1.2rem; color: var(--primary); margin-bottom: 30px; line-height: 1.8;">
        ${intro}
    </div>
    ${galleryMd}
</section>`;

    const blob = new Blob([fullContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = `${date}-${titleSlug}.md`;
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
}

// Listeners para inputs fijos
document.getElementById('postTitle').addEventListener('input', updatePreview);
document.getElementById('mainImg').addEventListener('input', updatePreview);
document.getElementById('introText').addEventListener('input', updatePreview);

// Iniciar
updatePreview();
