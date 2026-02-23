---
layout: default
title: Nuestra Historia
---

<section class="historia-hero">
    <h1>Nuestra Trayectoria</h1>
    <p>Desde la fundación hasta la excelencia tecnológica actual.</p>
</section>

<section class="timeline-container">
    <div class="timeline">
        {% for hito in site.data.historia %}
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">{{ hito.año }}</div>
            <div class="timeline-content">
                <h3>{{ hito.anio }}</h3>
                <h3>{{ hito.titulo }}</h3>
                <p>{{ hito.descripcion }}</p>
            </div>
        </div>
        {% endfor %}
    </div>
</section>
