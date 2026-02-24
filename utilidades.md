---
layout: default
title: Panel de Utilidades
---

<section class="personal-hero">
    <h1>Herramientas del Administrador</h1>
    <p>Acceso centralizado a utilidades del sitio.</p>
</section>

<div class="contenedor-personal">
    <div class="modern-grid">
        {% for herramienta in site.data.utilidades %}
        <div class="card" style="border-top: 5px solid {{ herramienta.color_borde }}; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
                <i class="{{ herramienta.icono }}" style="font-size: 2.5rem; color: {{ herramienta.color_borde }}; margin-bottom: 20px;"></i>
                <h3 style="color: var(--primary); margin-bottom: 10px;">{{ herramienta.nombre }}</h3>
                <p style="color: #666; font-size: 0.95rem; line-height: 1.5;">{{ herramienta.descripcion }}</p>
            </div>
                        <div style="margin-top: 25px;">
                <a href="{{ herramienta.url | relative_url }}" class="btn-cta" style="width: 100%; text-align: center; display: block;">
                    Abrir Herramienta
                </a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
