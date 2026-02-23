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
    <section class="formulario-seccion" style="padding: 50px 20px;">
    <div class="card" style="max-width: 800px; margin: 0 auto; padding: 40px; border-radius: 20px; background: white; box-shadow: var(--shadow);">
        <h2 style="color: var(--primary); text-align: center; margin-bottom: 30px;">Envíenos un mensaje</h2>
                <form action="https://formspree.io/f/tu-id-aqui" method="POST" id="form-admision">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">Nombre del Padre/Tutor</label>
                    <input type="text" name="nombre" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px;" placeholder="Ej. Juan Pérez">
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">Teléfono de Contacto</label>
                    <input type="tel" name="telefono" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px;" placeholder="809-000-0000">
                </div>
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">Correo Electrónico</label>
                <input type="email" name="_replyto" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px;" placeholder="correo@ejemplo.com">
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">Interés en el Nivel:</label>
                <select name="nivel" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px;">
                    <option value="Primaria">Básico / Primaria</option>
                    <option value="Tecnico-Informatica">Bachillerato Técnico en Informática</option>
                    <option value="Tecnico-Gestion">Bachillerato Técnico en Gestión</option>
                </select>
            </div>
            <div class="form-group" style="margin-bottom: 30px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">Mensaje o Consulta</label>
                <textarea name="mensaje" rows="5" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px;" placeholder="Escriba su consulta aquí..."></textarea>
            </div>
            <button type="submit" class="btn-cta" style="width: 100%; border: none; cursor: pointer; font-size: 1.1rem;">
                <i class="fas fa-paper-plane"></i> Enviar Solicitud
            </button>
        </form>
    </div>
</section>
</section>
