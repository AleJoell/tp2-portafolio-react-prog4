import { useState } from 'react'
import Header from '../components/Header.jsx'

function About() {
  const [mostrarMas, setMostrarMas] = useState(false)

  return (
    <section>
      <Header titulo="Sobre mí" subtitulo="Formación, experiencia y objetivos" />

      <div className="card">
        <h3>Presentación</h3>
        <p>
          Soy Joel Cuevas, estudiante de la Tecnicatura Universitaria en
          Programación en la UTN Facultad Regional Tucumán. Tengo experiencia en
          atención al cliente, ventas y marketing digital. Me destaco por la
          resolución de problemas, la proactividad y el aprendizaje rápido.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Formación</h3>
          <p><strong>UTN FRT</strong> (2025 - actualidad): Tecnicatura Universitaria en Programación.</p>
          <p><strong>Instituto Privado Tucumán</strong> (2018 - 2024): Economía y Gestión de las Organizaciones.</p>
        </div>
        <div className="card">
          <h3>Idiomas</h3>
          <p>Inglés B2 (intermedio) y español nativo.</p>
        </div>
      </div>

      <div className="card">
        <h3>Experiencia</h3>
        <p>
          <strong>Plasticaucho</strong> · Asistente de Marketing y Ventas
          (junio - octubre 2026)
        </p>

        {mostrarMas && (
          <ul className="list details">
            <li>Atención al cliente y gestión de ventas: consultas, presupuestos y entrega de pedidos.</li>
            <li>Prospección de clientes: base de datos de empresas por rubro y contacto.</li>
            <li>Creación de contenido con Canva y control de publicaciones en redes sociales.</li>
          </ul>
        )}

        <button className="btn" onClick={() => setMostrarMas(!mostrarMas)}>
          {mostrarMas ? 'Ocultar tareas' : 'Ver tareas'}
        </button>
      </div>

      <div className="card">
        <h3>Objetivos profesionales</h3>
        <p>
          Busco una oportunidad para aplicar mis habilidades y seguir creciendo
          profesionalmente, combinando mi experiencia comercial con el desarrollo web.
        </p>
      </div>
    </section>
  )
}

export default About
