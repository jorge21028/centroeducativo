---
layout: default
title: Galería Institucional
---

<section class="egresados-hero">
    <h1>Galería de Momentos</h1>
    <p>Un recorrido visual por nuestras actividades, laboratorios y vida estudiantil.</p>
</section>

<section class="contenedor-galeria">
    {% for grupo in site.data.galeria %}
    <div class="seccion-fotos">
        <h2 class="titulo-area">{{ grupo.seccion }}</h2>
        <div class="modern-grid-galeria">
            {% for foto in grupo.fotos %}
            <div class="card-egresado card-foto">
                <div class="foto-marco-galeria">
                    <img src="{{ foto.url }}" alt="{{ foto.alt }}">
                </div>
                <p class="pie-foto">{{ foto.titulo }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
    {% endfor %}
</section>
