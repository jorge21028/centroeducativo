const totalItems = 20;
const container = document.getElementById('galleryItemsContainer');

// Crear los 20 pares de inputs
for (let i = 1; i <= totalItems; i++) {
    const div = document.createElement('div');
    div.className = 'gallery-block';
    div.innerHTML = `
        <label>Foto ${i}</label>
        <input type="text" id="url${i}" placeholder="URL imagen" oninput="updatePreview()">
        <input type="text" id="text${i}" placeholder="Texto descriptivo" oninput="updatePreview()">
    `;
    container.appendChild(div);
}

function updatePreview() {
    const title = document.getElementById('postTitle').value || "Título";
    const desc = document.getElementById('postDesc').value || "Descripción del álbum...";
    const portada = document.getElementById('postPortada').value;

    let galleryHtml = '';
    if(portada) {
        galleryHtml += `<div class="card-preview"><img src="${portada}"><p><strong>PORTADA</strong></p></div>`;
    }

    for (let i = 1; i <= totalItems; i++) {
        const url = document.getElementById(`url${i}`).value.trim();
        const text = document.getElementById(`text${i}`).value.trim();
        if (url !== "") {
            galleryHtml += `
                <div class="card-preview">
                    <img src="${url}">
                    <p>${text || 'Sin texto'}</p>
                </div>`;
        }
    }

    document.getElementById('markdown-render').innerHTML = `
        <h1 style="color:var(--primary)">${title}</h1>
        <p style="color:#666; font-style:italic">${desc}</p>
        <hr>
        ${galleryHtml}
    `;
}

function downloadMarkdown() {
    const title = document.getElementById('postTitle').value || "sin-titulo";
    const desc = document.getElementById('postDesc').value || "";
    const portada = document.getElementById('postPortada').value || "";

    // Slug para nombre de archivo
    const titleSlug = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');

    // Construcción de la lista YAML de fotos
    let fotosYaml = "";
    for (let i = 1; i <= totalItems; i++) {
        const url = document.getElementById(`url${i}`).value.trim();
        const text = document.getElementById(`text${i}`).value.trim();
        if (url !== "") {
            // Estructura YAML con sangría de 2 espacios
            fotosYaml += `  - url: "${url}"\n    texto: "${text}"\n`;
        }
    }

    // Estructura completa según su requerimiento
    const content = `---
layout: album
title: "${title}"
descripcion: "${desc}"
portada: "${portada}"
fotos:
${fotosYaml}---`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const urlBlob = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = `${titleSlug}.md`;
    a.href = urlBlob;
    a.click();
    URL.revokeObjectURL(urlBlob);
}

updatePreview();