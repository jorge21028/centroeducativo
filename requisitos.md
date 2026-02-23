---
layout: default
title: Requisitos de Admisión
---

<section class="egresados-hero">
    <h1>Admisiones 2026</h1>
    <p>Forma parte de nuestra comunidad educativa. Conoce los requisitos para ingresar al centro.</p>
</section>

<div class="contenedor-galeria">
    <div class="modern-grid-galeria">
        {% for grupo in site.data.requisitos %}
        <div class="card" style="padding: 2rem; border-radius: 15px; background: white; border: 1px solid #eee;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <i class="fas {{ grupo.icono }}" style="font-size: 2.5rem; color: var(--accent);"></i>
                <h3 style="margin-top: 1rem; color: var(--primary);">{{ grupo.categoria }}</h3>
            </div>
                        <ul style="list-style: none; padding: 0;">
                {% for item in grupo.items %}
                <li style="margin-bottom: 12px; display: flex; align-items: flex-start; font-size: 0.95rem; color: #444;">
                    <i class="fas fa-arrow-right" style="color: var(--accent); margin-right: 10px; margin-top: 5px; font-size: 0.8rem;"></i>
                    {{ item }}
                </li>
                {% endfor %}
            </ul>
        </div>
        {% endfor %}
    </div>
    <div style="margin-top: 50px; text-align: center; padding: 40px; background: var(--glass); border-radius: 20px; backdrop-filter: blur(10px);">
        <h2 style="color: var(--primary);">¿Tienes alguna duda sobre el proceso?</h2>
        <p>Nuestro equipo de admisiones está listo para asesorarte.</p>
        <a href="{{ '/contactos' | relative_url }}" class="btn-cta" style="display: inline-block; margin-top: 20px;">Contactar ahora</a>
    </div>
</div>
