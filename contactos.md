---
layout: default
title: Contacto y Ubicación
---

<section class="contacto-header">
    <h1>Ponte en Contacto</h1>
    <p>Estamos aquí para servir a nuestra comunidad educativa.</p>
</section>

<section class="contacto-container">
    <div class="contacto-grid">
        <div class="contacto-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Dirección</h3>
            <p>{{ site.data.contacto.direccion.texto }}</p>
            <a href="#mapa" class="link-accion">Ver en el mapa</a>
        </div>
        <div class="contacto-card">
            <i class="fas fa-phone-alt"></i>
            <h3>Teléfonos</h3>
            {% for tel in site.data.contacto.telefonos %}
            <p>{{ tel.etiqueta }}: {{ tel.numero }}</p>
            {% endfor %}
            <a href="tel:{{ site.data.contacto.telefonos[0].enlace }}" class="btn-llamar">Llamar ahora</a>
        </div>
        <div class="contacto-card">
            <i class="fas fa-envelope"></i>
            <h3>Correo Electrónico</h3>
            {% for email in site.data.contacto.correos %}
            <p>{{ email }}</p>
            {% endfor %}
        </div>
    </div>
    <div id="mapa" class="mapa-wrapper">
        <h2>Nuestra Ubicación</h2>
        <div class="mapa-frame">
            <iframe 
                src="{{ site.data.contacto.direccion.mapa_url }}" 
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    </div>
</section>
