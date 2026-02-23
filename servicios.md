---
layout: default
title: Nuestros Servicios
---

<section class="personal-hero">
    <h1>Servicios Institucionales</h1>
    <p>Infraestructura y programas diseñados para la excelencia académica.</p>
</section>

<div class="contenedor-personal">
    <div class="modern-grid">
        {% for servicio in site.data.servicios %}
        <div class="card">
            <div class="icon-circle-accent" style="width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 2rem; background: #fff5f5;">
                <i class="fas {{ servicio.icono }}"></i>
            </div>
                        <h3 style="color: var(--primary); text-align: center; margin-bottom: 15px;">{{ servicio.titulo }}</h3>
                        <p style="color: #666; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; text-align: center;">
                {{ servicio.descripcion }}
            </p>
            <ul class="styled-list">
                {% for punto in servicio.puntos %}
                <li style="font-size: 0.85rem; padding: 5px 0; border-bottom: 1px solid #eee; display: flex; align-items: center;">
                    <i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px; font-size: 0.8rem;"></i>
                    {{ punto }}
                </li>
                {% endfor %}
            </ul>
        </div>
        {% endfor %}
    </div>
</div>
