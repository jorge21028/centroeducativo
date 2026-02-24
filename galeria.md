---
layout: default
title: Galería de Fotos
---
<section class="personal-hero">
    <h1>Galería Institucional</h1>
</section>

<div class="modern-grid">
    {% for album in site.galerias %}
    <article class="card-egresado">
        <div class="foto-marco-galeria">
            <img src="{{ album.portada | relative_url }}" alt="{{ album.title }}">
        </div>
        <h3>{{ album.title }}</h3>
        <p>{{ album.descripcion }}</p>
        <a href="{{ album.url | relative_url }}" class="btn-cta">Ver Álbum</a>
    </article>
    {% endfor %}
</div>
