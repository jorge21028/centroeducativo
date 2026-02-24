---
layout: default
title: Nuestro Cuerpo Docente
---

<section class="personal-hero">
    <h1>Nuestro Equipo Docente</h1>
    <p>Profesionales comprometidos con la excelencia académica y tecnológica.</p>
</section>

<div class="contenedor-personal">
    <div class="modern-grid">
        {% assign profesores_visibles = site.profesores | filter: "visible", true %}
                {% for profe in profesores_visibles %}
        <article class="card-perfil docente-border">
            <div class="perfil-img" style="background-image: url('{{ profe.foto_url }}');"></div>
                        <h3 style="color: var(--primary); margin-bottom: 5px;">{{ profe.nombre }}</h3>
            <span class="badge">{{ profe.area }}</span>
                        <p style="margin-top: 15px; font-size: 0.95rem; color: #555;">
                {{ profe.descripcion }}
            </p>
        </article>
        {% endfor %}
    </div>
</div>
