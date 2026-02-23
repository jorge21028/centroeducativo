---
layout: default
title: Nuestra Oferta Académica
---

<section class="egresados-hero">
    <h1>Propuesta Educativa Politécnico</h1>
    <p>Formación técnica y académica con estándares de excelencia para el siglo XXI.</p>
</section>

<section class="contenedor-galeria">
    <div class="modern-grid-galeria">
        {% for nivel in site.data.oferta %}
        <div class="card" style="padding: 2.5rem; border-radius: 20px; background: white; border: 1px solid #f0f0f0; transition: transform 0.3s ease;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <div class="icon-circle-accent" style="width: 80px; height: 80px; border-radius: 50%; background: #fff5f5; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 2.5rem; color: var(--accent);">
                    <i class="fas {{ nivel.icon }}"></i>
                </div>
                <h2 style="margin-top: 1.5rem; color: var(--primary); font-size: 1.5rem;">{{ nivel.nivel }}</h2>
            </div>
            <p style="color: #666; line-height: 1.6; text-align: center; margin-bottom: 1.5rem;">
                {{ nivel.descripcion }}
            </p>
                        <ul style="list-style: none; padding: 0;">
                {% for detalle in nivel.detalles %}
                <li style="margin-bottom: 12px; display: flex; align-items: flex-start; font-size: 0.95rem; color: #444;">
                    <i class="fas fa-check" style="color: var(--accent); margin-right: 12px; margin-top: 4px;"></i>
                    {{ detalle }}
                </li>
                {% endfor %}
            </ul>
        </div>
        {% endfor %}
    </div>
</section>
